const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const resultContainer = document.getElementById('result-container');
const imageOriginal = document.getElementById('image-original');
const imageResult = document.getElementById('image-result');
const loadingOverlay = document.getElementById('loading-overlay');
const loadingText = document.getElementById('loading-text');
const progressBar = document.getElementById('progress-bar');
const comparisonSlider = document.getElementById('comparison-slider');
const sliderLine = document.getElementById('slider-line');
const downloadBtn = document.getElementById('download-btn');
const resetBtn = document.getElementById('reset-btn');
const scaleSelect = document.getElementById('scale-select');

let currentUpscaledDataUrl = null;
let originalFileName = 'image.png';

// Setup Event Listeners
dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    if (e.dataTransfer.files.length) {
        handleFile(e.dataTransfer.files[0]);
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) {
        handleFile(e.target.files[0]);
    }
});

resetBtn.addEventListener('click', () => {
    dropZone.style.display = 'block';
    resultContainer.style.display = 'none';
    resetBtn.style.display = 'none';
    downloadBtn.disabled = true;
    fileInput.value = '';
    currentUpscaledDataUrl = null;
    imageOriginal.src = '';
    imageResult.src = '';
});

downloadBtn.addEventListener('click', () => {
    if (!currentUpscaledDataUrl) return;
    const a = document.createElement('a');
    a.href = currentUpscaledDataUrl;
    const baseName = originalFileName.substring(0, originalFileName.lastIndexOf('.')) || originalFileName;
    const scale = scaleSelect.value;
    a.download = `${baseName}-upscaled-${scale}x.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// Slider logic
comparisonSlider.addEventListener('input', (e) => {
    const sliderValue = e.target.value;
    const clipPercentage = 100 - sliderValue;
    imageOriginal.style.clipPath = `inset(0 ${clipPercentage}% 0 0)`;
    sliderLine.style.left = `${sliderValue}%`;
});

function handleFile(file) {
    if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
    }

    originalFileName = file.name;
    const originalUrl = URL.createObjectURL(file);
    
    // Check dimensions to prevent GPU crashing
    const img = new Image();
    img.onload = () => {
        const targetScale = parseInt(scaleSelect.value);
        if (img.width * img.height > 2000000 && targetScale === 4) { // Roughly 1400x1400
            const proceed = confirm("Warning: Upscaling a very large image by 4x may crash your browser due to GPU memory limits. Do you want to proceed anyway?");
            if (!proceed) return;
        }
        
        // Start processing
        processImage(img, targetScale);
        resultContainer.style.aspectRatio = `${img.width} / ${img.height}`;
    };
    img.src = originalUrl;
    imageOriginal.src = originalUrl;
    imageResult.src = originalUrl; // Temporary to maintain aspect ratio until done
}

async function processImage(imageElement, targetScale) {
    // UI State
    dropZone.style.display = 'none';
    resultContainer.style.display = 'block';
    loadingOverlay.style.display = 'flex';
    resetBtn.style.display = 'none';
    downloadBtn.disabled = true;
    progressBar.style.width = `0%`;
    loadingText.textContent = "Loading AI Model...";
    
    // Reset Slider
    comparisonSlider.value = 50;
    imageOriginal.style.clipPath = `inset(0 50% 0 0)`;
    sliderLine.style.left = `50%`;

    try {
        // Initialize Upscaler
        const upscaler = new Upscaler({
            model: DefaultUpscalerJSModel,
        });

        // 1. Force the model to download and compile on the GPU first
        loadingText.textContent = "Downloading & Compiling AI Model...";
        await upscaler.warmup({ patchSize: 32, padding: 4 });

        // 2. Perform the upscale
        if (targetScale === 2) {
            loadingText.textContent = "Upscaling Image (2x)...";
            currentUpscaledDataUrl = await upscaler.upscale(imageElement, {
                patchSize: 32,
                padding: 4,
                progress: (percent) => {
                    progressBar.style.width = `${Math.round(percent * 100)}%`;
                }
            });
        } else if (targetScale === 4) {
            // Recursive 2x Upscaling to achieve 4x
            loadingText.textContent = "Upscaling Pass 1 of 2...";
            const pass1DataUrl = await upscaler.upscale(imageElement, {
                patchSize: 32,
                padding: 4,
                progress: (percent) => {
                    progressBar.style.width = `${Math.round(percent * 50)}%`; // 0 to 50%
                }
            });

            const pass1Image = new Image();
            pass1Image.src = pass1DataUrl;
            await new Promise(r => pass1Image.onload = r);

            loadingText.textContent = "Upscaling Pass 2 of 2 (Refining Details)...";
            currentUpscaledDataUrl = await upscaler.upscale(pass1Image, {
                patchSize: 32,
                padding: 4,
                progress: (percent) => {
                    progressBar.style.width = `${50 + Math.round(percent * 50)}%`; // 50 to 100%
                }
            });
        }

        imageResult.src = currentUpscaledDataUrl;
        loadingOverlay.style.display = 'none';
        resetBtn.style.display = 'inline-flex';
        downloadBtn.disabled = false;
        
    } catch (error) {
        console.error("Upscaling failed:", error);
        alert(`Failed to upscale the image: ${error.message || 'Unknown Error'}\n\nThis usually means the image is too large for your device's GPU memory, or your internet connection blocked the AI model download.`);
        loadingOverlay.style.display = 'none';
        resetBtn.style.display = 'inline-flex';
    }
}
