/* 
  ToolzGarden - Image Upscaler Logic (v2.2.0)
  Supports AI Super-Resolution (TensorFlow.js / UpscalerJS with non-blocking async yielding) & Fast Resize Fallback
*/

document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const resultContainer = document.getElementById('result-container');
    const imageOriginal = document.getElementById('image-original');
    const imageResult = document.getElementById('image-result');
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');
    const loadingSubtext = document.getElementById('loading-subtext');
    const progressBar = document.getElementById('progress-bar');
    const cancelUpscaleBtn = document.getElementById('cancel-upscale-btn');
    const comparisonSlider = document.getElementById('comparison-slider');
    const sliderLine = document.getElementById('slider-line');
    const upscaleBtn = document.getElementById('upscale-btn');
    const downloadBtn = document.getElementById('download-btn');
    const resetBtn = document.getElementById('reset-btn');
    const scaleSelect = document.getElementById('scale-select');
    const methodSelect = document.getElementById('method-select');
    const methodHint = document.getElementById('method-hint');

    // Info card elements
    const imageInfoBox = document.getElementById('image-info-box');
    const originalDimsLabel = document.getElementById('original-dims-label');
    const targetDimsLabel = document.getElementById('target-dims-label');
    const hardwareStatusLabel = document.getElementById('hardware-status-label');

    // State
    let currentLoadedImage = null;
    let originalFileName = 'image.png';
    let originalFileType = 'image/png';
    let currentOriginalObjectUrl = null;
    let currentUpscaledDataUrl = null;
    let isProcessing = false;
    let cachedUpscaler = null;
    let cachedGpuStatus = null;
    let currentAbortController = null;

    // --- Hardware GPU Detection ---
    async function detectGpuSupport() {
        if (cachedGpuStatus !== null) return cachedGpuStatus;
        if (typeof tf === 'undefined') {
            cachedGpuStatus = { supported: false, backend: 'none', label: 'Engine Unavailable' };
            return cachedGpuStatus;
        }

        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
            if (gl) {
                await tf.setBackend('webgl');
                await tf.ready();
                if (tf.getBackend() === 'webgl') {
                    cachedGpuStatus = { supported: true, backend: 'webgl', label: 'GPU (WebGL)' };
                    return cachedGpuStatus;
                }
            }
        } catch (e) {
            console.warn('WebGL initialization check failed:', e);
        }

        // Fallback to CPU
        try {
            await tf.setBackend('cpu');
            await tf.ready();
            cachedGpuStatus = { supported: false, backend: 'cpu', label: 'CPU Only (Slow)' };
            return cachedGpuStatus;
        } catch (e) {
            cachedGpuStatus = { supported: false, backend: 'none', label: 'Unavailable' };
            return cachedGpuStatus;
        }
    }

    // Initialize GPU badge asynchronously
    detectGpuSupport().then(status => {
        if (hardwareStatusLabel) {
            hardwareStatusLabel.textContent = status.label;
            hardwareStatusLabel.style.color = status.supported ? 'var(--accent-primary)' : '#eab308';
        }
    });

    // --- Event Listeners Setup ---
    dropZone.addEventListener('click', () => {
        if (!isProcessing) fileInput.click();
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (!isProcessing) dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        if (isProcessing) return;
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('click', () => {
        fileInput.value = '';
    });

    fileInput.addEventListener('change', (e) => {
        if (isProcessing) return;
        if (e.target.files && e.target.files.length) {
            handleFile(e.target.files[0]);
        }
    });

    // Comparison slider logic
    comparisonSlider.addEventListener('input', (e) => {
        const sliderValue = e.target.value;
        const clipPercentage = 100 - sliderValue;
        imageOriginal.style.clipPath = `inset(0 ${clipPercentage}% 0 0)`;
        sliderLine.style.left = `${sliderValue}%`;
    });

    // Dimension calculation & Advisory Hints
    function updateTargetDimensions() {
        if (!currentLoadedImage) return;
        const scale = parseInt(scaleSelect.value) || 2;
        const targetW = currentLoadedImage.naturalWidth * scale;
        const targetH = currentLoadedImage.naturalHeight * scale;
        if (targetDimsLabel) {
            targetDimsLabel.textContent = `${targetW} × ${targetH} px`;
        }

        const totalPixels = currentLoadedImage.naturalWidth * currentLoadedImage.naturalHeight;
        if (methodHint) {
            if (methodSelect.value === 'ai') {
                if (totalPixels > 300000 || (scale === 4 && totalPixels > 160000)) {
                    methodHint.textContent = 'Note: Large image selected. AI will take 1–3 minutes. Fast Resize is recommended.';
                    methodHint.style.color = '#eab308';
                } else {
                    methodHint.textContent = 'AI reconstructs textures and fine details locally via GPU.';
                    methodHint.style.color = 'var(--text-secondary)';
                }
            } else {
                methodHint.textContent = 'Bicubic interpolation provides instant, lightweight resizing (<1s).';
                methodHint.style.color = 'var(--text-secondary)';
            }
        }
    }

    scaleSelect.addEventListener('change', updateTargetDimensions);

    methodSelect.addEventListener('change', updateTargetDimensions);

    // --- File Handling & Decoding ---
    function isValidImageType(file) {
        if (!file) return false;
        const mime = file.type ? file.type.toLowerCase() : '';
        const name = file.name ? file.name.toLowerCase() : '';
        const validMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        const validExts = ['.jpg', '.jpeg', '.png', '.webp'];
        return validMimes.includes(mime) || validExts.some(ext => name.endsWith(ext));
    }

    function cleanupUrls() {
        if (currentOriginalObjectUrl) {
            URL.revokeObjectURL(currentOriginalObjectUrl);
            currentOriginalObjectUrl = null;
        }
        if (currentUpscaledDataUrl && currentUpscaledDataUrl.startsWith('blob:')) {
            URL.revokeObjectURL(currentUpscaledDataUrl);
        }
        currentUpscaledDataUrl = null;
    }

    function resetToUpload() {
        cleanupUrls();
        currentLoadedImage = null;
        fileInput.value = '';
        dropZone.style.display = 'block';
        resultContainer.style.display = 'none';
        if (imageInfoBox) imageInfoBox.style.display = 'none';
        loadingOverlay.style.display = 'none';
        upscaleBtn.disabled = true;
        downloadBtn.disabled = true;
        resetBtn.style.display = 'none';
        imageOriginal.src = '';
        imageResult.src = '';
        if (originalDimsLabel) originalDimsLabel.textContent = '0 × 0 px';
        if (targetDimsLabel) targetDimsLabel.textContent = '0 × 0 px';
    }

    resetBtn.addEventListener('click', () => {
        if (isProcessing) return;
        resetToUpload();
    });

    if (cancelUpscaleBtn) {
        cancelUpscaleBtn.addEventListener('click', () => {
            if (currentAbortController) {
                currentAbortController.abort();
            }
        });
    }

    async function handleFile(file) {
        if (isProcessing) return;

        // 1. Format validation
        if (!isValidImageType(file)) {
            if (typeof showToast === 'function') {
                showToast('Unsupported file format. Please upload a JPEG, PNG, or WebP image.', 'error');
            } else {
                alert('Unsupported file format. Please upload a JPEG, PNG, or WebP image.');
            }
            fileInput.value = '';
            return;
        }

        // 2. File size limit check (25 MB max)
        const maxBytes = 25 * 1024 * 1024;
        if (file.size > maxBytes) {
            if (typeof showToast === 'function') {
                showToast('Image file is too large (max 25 MB).', 'error');
            } else {
                alert('Image file is too large (max 25 MB).');
            }
            fileInput.value = '';
            return;
        }

        cleanupUrls();

        originalFileName = file.name || 'image.png';
        originalFileType = file.type || 'image/png';
        currentOriginalObjectUrl = URL.createObjectURL(file);

        // 3. Reliable image decoding with onload and onerror
        const img = new Image();
        img.onload = () => {
            if (!img.naturalWidth || !img.naturalHeight) {
                if (typeof showToast === 'function') {
                    showToast('Failed to decode image. The file may be corrupt or invalid.', 'error');
                } else {
                    alert('Failed to decode image. The file may be corrupt or invalid.');
                }
                cleanupUrls();
                resetToUpload();
                return;
            }

            currentLoadedImage = img;

            // Display in workspace
            imageOriginal.src = currentOriginalObjectUrl;
            imageResult.src = currentOriginalObjectUrl;

            if (originalDimsLabel) {
                originalDimsLabel.textContent = `${img.naturalWidth} × ${img.naturalHeight} px`;
            }
            updateTargetDimensions();

            dropZone.style.display = 'none';
            resultContainer.style.display = 'block';
            if (imageInfoBox) imageInfoBox.style.display = 'block';
            resetBtn.style.display = 'inline-flex';
            upscaleBtn.disabled = false;
            downloadBtn.disabled = true;

            resultContainer.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;

            // Reset comparison slider
            comparisonSlider.value = 50;
            imageOriginal.style.clipPath = `inset(0 50% 0 0)`;
            sliderLine.style.left = `50%`;

            // Refresh GPU capability status
            detectGpuSupport().then(status => {
                if (hardwareStatusLabel) {
                    hardwareStatusLabel.textContent = status.label;
                    hardwareStatusLabel.style.color = status.supported ? 'var(--accent-primary)' : '#eab308';
                }
            });
        };

        img.onerror = () => {
            if (typeof showToast === 'function') {
                showToast('Failed to load image. The file appears to be corrupted or invalid.', 'error');
            } else {
                alert('Failed to load image. The file appears to be corrupted or invalid.');
            }
            cleanupUrls();
            resetToUpload();
        };

        img.src = currentOriginalObjectUrl;
    }

    // --- Processing Execution ---
    upscaleBtn.addEventListener('click', async () => {
        if (isProcessing || !currentLoadedImage) return;

        const targetScale = parseInt(scaleSelect.value) || 2;
        let method = methodSelect.value;
        const totalPixels = currentLoadedImage.naturalWidth * currentLoadedImage.naturalHeight;

        // Hardware & Capability Checks
        if (method === 'ai') {
            const gpuStatus = await detectGpuSupport();

            if (!gpuStatus.supported) {
                const proceed = confirm(
                    "Hardware GPU acceleration (WebGL) is unavailable on your device.\n\n" +
                    "Running AI super-resolution on CPU is extremely slow and may take 5–10 minutes.\n\n" +
                    "Click OK to use Fast Resize instead (instant, takes <1s), or Cancel to abort."
                );
                if (proceed) {
                    method = 'fast';
                    methodSelect.value = 'fast';
                } else {
                    return;
                }
            } else {
                // If the image is large, offer Fast Resize recommendation
                const pixelThreshold = targetScale === 4 ? 250000 : 400000;
                if (totalPixels > pixelThreshold) {
                    const proceed = confirm(
                        `Notice: This image is ${currentLoadedImage.naturalWidth} × ${currentLoadedImage.naturalHeight} px (${(totalPixels / 1000000).toFixed(2)} MP).\n\n` +
                        "AI Super-Resolution on an image of this size requires multiple heavy neural network passes (~1–3 minutes on laptops).\n\n" +
                        "Would you like to use Fast Resize instead (<1s, recommended)?\n\n" +
                        "Click OK for Fast Resize, or Cancel to proceed with AI Super-Resolution."
                    );
                    if (proceed) {
                        method = 'fast';
                        methodSelect.value = 'fast';
                    }
                }
            }
        }

        await runProcessing(currentLoadedImage, targetScale, method);
    });

    async function runProcessing(imageElement, targetScale, method) {
        isProcessing = true;
        upscaleBtn.disabled = true;
        downloadBtn.disabled = true;
        resetBtn.disabled = true;
        scaleSelect.disabled = true;
        methodSelect.disabled = true;
        if (cancelUpscaleBtn) cancelUpscaleBtn.style.display = method === 'ai' ? 'inline-flex' : 'none';

        currentAbortController = new AbortController();

        loadingOverlay.style.display = 'flex';
        progressBar.style.width = '0%';

        let lastProgressUpdate = 0;
        let lastReportedPct = -1;

        async function setStage(text, subtext, pct, forceUpdate = false) {
            const now = performance.now();
            if (!forceUpdate && pct === lastReportedPct && (now - lastProgressUpdate < 80)) {
                return;
            }
            lastReportedPct = pct;
            lastProgressUpdate = now;

            loadingText.textContent = text;
            if (loadingSubtext && subtext) loadingSubtext.textContent = subtext;
            progressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;

            // Macrotask yield allowing browser event loop to paint and process user input
            await new Promise(resolve => setTimeout(resolve, 0));
        }

        try {
            // Stage 1: Loading image
            await setStage("Loading image...", "Reading pixel data...", 10, true);
            await new Promise(r => setTimeout(r, 60));

            if (method === 'fast') {
                // Stage 2: Initializing engine
                await setStage("Initializing engine...", "Configuring high-quality bicubic canvas...", 30, true);
                await new Promise(r => setTimeout(r, 60));

                // Stage 3 & 4: Processing
                await setStage("Processing...", "Applying high-quality bicubic interpolation...", 70, true);
                await new Promise(r => setTimeout(r, 80));

                const canvas = document.createElement('canvas');
                canvas.width = imageElement.naturalWidth * targetScale;
                canvas.height = imageElement.naturalHeight * targetScale;
                const ctx = canvas.getContext('2d');
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

                currentUpscaledDataUrl = canvas.toDataURL('image/png');

                // Stage 5: Completed
                await setStage("Completed!", "Finalizing image output...", 100, true);
                await new Promise(r => setTimeout(r, 120));

                if (typeof showToast === 'function') {
                    showToast("Fast Resize completed successfully!", "info");
                }

            } else {
                // AI Super-Resolution Mode
                // Stage 2: Initializing engine
                await setStage("Initializing engine...", "Preparing TensorFlow.js WebGL backend...", 25, true);
                const gpuStatus = await detectGpuSupport();
                if (gpuStatus.backend === 'webgl') {
                    await tf.setBackend('webgl');
                } else {
                    await tf.setBackend('cpu');
                }
                await tf.ready();

                // Stage 3: Loading model
                await setStage("Loading model...", "Fetching AI neural weights (cached after 1st use)...", 45, true);

                if (!cachedUpscaler) {
                    if (typeof Upscaler === 'undefined' || typeof DefaultUpscalerJSModel === 'undefined') {
                        throw new Error("Upscaler library or default model failed to load.");
                    }
                    cachedUpscaler = new Upscaler({
                        model: DefaultUpscalerJSModel
                    });
                }

                try {
                    await cachedUpscaler.warmup({ patchSize: 128, padding: 4, awaitNextFrame: true });
                } catch (warmupErr) {
                    console.warn("Warmup error, continuing with inference:", warmupErr);
                }

                // Check abort
                if (currentAbortController.signal.aborted) {
                    throw new Error("Upscaling was cancelled by user.");
                }

                // Stage 4: Processing with awaitNextFrame for non-blocking UI
                if (targetScale === 2) {
                    await setStage("Processing...", "AI Super-Resolution inference in progress...", 50, true);

                    currentUpscaledDataUrl = await cachedUpscaler.upscale(imageElement, {
                        patchSize: 128,
                        padding: 4,
                        awaitNextFrame: true,
                        signal: currentAbortController.signal,
                        progress: async (p) => {
                            const pct = Math.round(50 + (p * 45));
                            await setStage("Processing...", `AI inference: ${Math.round(p * 100)}%`, pct);
                        }
                    });
                } else {
                    // 4x Scaling: Two passes with direct tensor chaining
                    await setStage("Processing...", "AI Pass 1 of 2: 2x Super-Resolution...", 50, true);

                    const pass1Tensor = await cachedUpscaler.upscale(imageElement, {
                        patchSize: 128,
                        padding: 4,
                        awaitNextFrame: true,
                        output: 'tensor',
                        signal: currentAbortController.signal,
                        progress: async (p) => {
                            const pct = Math.round(50 + (p * 22));
                            await setStage("Processing...", `AI Pass 1 of 2: ${Math.round(p * 100)}%`, pct);
                        }
                    });

                    // Check abort
                    if (currentAbortController.signal.aborted) {
                        pass1Tensor.dispose();
                        throw new Error("Upscaling was cancelled by user.");
                    }

                    await setStage("Processing...", "AI Pass 2 of 2: Refining details to 4x...", 72, true);

                    try {
                        currentUpscaledDataUrl = await cachedUpscaler.upscale(pass1Tensor, {
                            patchSize: 128,
                            padding: 4,
                            awaitNextFrame: true,
                            output: 'base64',
                            signal: currentAbortController.signal,
                            progress: async (p) => {
                                const pct = Math.round(72 + (p * 25));
                                await setStage("Processing...", `AI Pass 2 of 2: ${Math.round(p * 100)}%`, pct);
                            }
                        });
                    } finally {
                        pass1Tensor.dispose();
                    }
                }

                // Stage 5: Completed
                await setStage("Completed!", "Finalizing output...", 100, true);
                await new Promise(r => setTimeout(r, 120));

                if (typeof showToast === 'function') {
                    showToast("AI upscaling completed successfully!", "success");
                }
            }

            // Display result
            imageResult.src = currentUpscaledDataUrl;
            loadingOverlay.style.display = 'none';
            downloadBtn.disabled = false;

        } catch (err) {
            console.error("Upscaling error:", err);
            loadingOverlay.style.display = 'none';

            if (err.message && (err.message.includes('cancelled') || err.message.includes('abort') || err.name === 'AbortError')) {
                if (typeof showToast === 'function') {
                    showToast('Upscaling was cancelled.', 'warning');
                }
                return;
            }

            const fallback = confirm(
                `Processing stopped: ${err.message || 'Unknown error'}\n\n` +
                "Would you like to try Fast Resize instead?"
            );
            if (fallback) {
                methodSelect.value = 'fast';
                isProcessing = false;
                await runProcessing(imageElement, targetScale, 'fast');
                return;
            }

            if (typeof showToast === 'function') {
                showToast(`Upscaling failed: ${err.message || 'Error occurred'}`, 'error');
            }
        } finally {
            isProcessing = false;
            currentAbortController = null;
            upscaleBtn.disabled = false;
            resetBtn.disabled = false;
            scaleSelect.disabled = false;
            methodSelect.disabled = false;
        }
    }

    // --- Download Handler ---
    downloadBtn.addEventListener('click', () => {
        if (!currentUpscaledDataUrl) return;

        const baseName = originalFileName.replace(/\.[^/.]+$/, '') || 'image';
        const scale = scaleSelect.value || '2';
        const fileName = `${baseName}-upscaled-${scale}x.png`;

        const link = document.createElement('a');
        link.href = currentUpscaledDataUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
