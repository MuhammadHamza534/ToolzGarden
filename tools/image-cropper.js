/* 
  ToolzGarden - Image Cropper Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const cropBtn = document.getElementById('crop-btn');
    const downloadBtn = document.getElementById('download-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    const previewContainer = document.getElementById('preview-container');
    const originalPreview = document.getElementById('original-preview');
    const outputPreview = document.getElementById('output-preview');
    const resultBox = document.getElementById('result-box');
    const cropDimsLabel = document.getElementById('crop-dims');
    const finalDimsLabel = document.getElementById('final-dims');

    let cropper = null;
    let currentObjectUrl = null;
    let croppedBlob = null;
    let croppedBlobUrl = null;
    let originalFileName = '';
    let originalFileType = '';

    function getActiveCropper() {
        if (cropper && typeof cropper.getCroppedCanvas === 'function') {
            return cropper;
        }
        if (originalPreview && originalPreview.cropper && typeof originalPreview.cropper.getCroppedCanvas === 'function') {
            return originalPreview.cropper;
        }
        return null;
    }

    // --- Upload Handlers ---

    dropZone.addEventListener('click', () => {
        fileInput.click();
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('click', () => {
        fileInput.value = '';
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length) {
            handleFile(e.target.files[0]);
        }
    });

    // --- Logic ---

    async function handleFile(file) {
        if (!(await validateImageFile(file, { accept: 'image/', maxSizeMB: 50, maxPixels: 7100 * 7100 }))) {
            return;
        }

        // Clean up previous cropper and URLs
        if (cropper) {
            cropper.destroy();
            cropper = null;
        }
        if (currentObjectUrl) {
            URL.revokeObjectURL(currentObjectUrl);
            currentObjectUrl = null;
        }
        if (croppedBlobUrl) {
            URL.revokeObjectURL(croppedBlobUrl);
            croppedBlobUrl = null;
        }

        croppedBlob = null;
        originalFileName = file.name || 'image';
        originalFileType = file.type || 'image/png';

        downloadBtn.disabled = true;
        cropBtn.disabled = true;
        resultBox.style.display = 'none';
        outputPreview.src = '';
        finalDimsLabel.textContent = '0 x 0';
        cropDimsLabel.textContent = '0 x 0';

        currentObjectUrl = URL.createObjectURL(file);
        
        originalPreview.onload = () => {
            previewContainer.style.display = 'grid';
            dropZone.style.display = 'none';
            
            // Use requestAnimationFrame to ensure the container is fully rendered (display: grid applied)
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (cropper) {
                        cropper.destroy();
                        cropper = null;
                    }
                    
                    cropper = new Cropper(originalPreview, {
                        viewMode: 1,
                        dragMode: 'crop',
                        autoCropArea: 0.8,
                        restore: false,
                        guides: true,
                        center: true,
                        highlight: false,
                        cropBoxMovable: true,
                        cropBoxResizable: true,
                        toggleDragModeOnDblclick: false,
                        crop(event) {
                            cropDimsLabel.textContent = Math.round(event.detail.width) + " x " + Math.round(event.detail.height);
                        }
                    });
                    cropBtn.disabled = false;
                    resetBtn.style.display = 'block';
                });
            });
        };

        originalPreview.onerror = () => {
            if (typeof showToast === 'function') showToast('Error loading image for cropping.', 'error');
        };
        
        originalPreview.src = currentObjectUrl;
    }

    // Aspect ratio controls
    const ratioBtns = document.querySelectorAll('#aspect-ratio-controls button');
    ratioBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const active = getActiveCropper();
            if (!active) return;
            const ratio = parseFloat(e.currentTarget.dataset.ratio);
            active.setAspectRatio(ratio);
            
            ratioBtns.forEach(b => {
                b.classList.remove('btn-primary');
                b.classList.add('btn-secondary');
            });
            e.currentTarget.classList.remove('btn-secondary');
            e.currentTarget.classList.add('btn-primary');
        });
    });

    // --- Crop Execution ---

    cropBtn.addEventListener('click', async () => {
        const active = getActiveCropper();
        if (!active) {
            if (typeof showToast === 'function') showToast('No active image to crop. Please upload an image.', 'warning');
            return;
        }
        
        const cropData = active.getData();
        if (!cropData || cropData.width <= 0 || cropData.height <= 0) {
            if (typeof showToast === 'function') showToast('Could not crop image. Please select an area.', 'warning');
            return;
        }

        let canvas;
        try {
            canvas = active.getCroppedCanvas({
                imageSmoothingEnabled: true,
                imageSmoothingQuality: 'high'
            });
        } catch (err) {
            console.error('getCroppedCanvas error:', err);
            if (typeof showToast === 'function') showToast('Failed to generate cropped canvas.', 'error');
            return;
        }

        // Verify that the returned canvas has nonzero dimensions
        if (!canvas || canvas.width <= 0 || canvas.height <= 0) {
            if (typeof showToast === 'function') showToast('Could not crop image. Please select an area.', 'error');
            return;
        }

        const mimeType = (originalFileType === 'image/jpeg' || originalFileType === 'image/webp')
            ? originalFileType
            : 'image/png';

        cropBtn.disabled = true;

        try {
            // Convert cropped canvas to Blob
            const blob = await new Promise((resolve) => {
                canvas.toBlob((b) => {
                    if (b) {
                        resolve(b);
                    } else {
                        // Fallback to image/png if custom format fails
                        canvas.toBlob((fallbackBlob) => {
                            resolve(fallbackBlob);
                        }, 'image/png');
                    }
                }, mimeType);
            });

            if (!blob || blob.size === 0) {
                if (typeof showToast === 'function') showToast('Failed to create image file from crop.', 'error');
                cropBtn.disabled = false;
                return;
            }

            // Revoke previous cropped Blob URL
            if (croppedBlobUrl) {
                URL.revokeObjectURL(croppedBlobUrl);
                croppedBlobUrl = null;
            }

            croppedBlob = blob;
            croppedBlobUrl = URL.createObjectURL(blob);

            outputPreview.src = croppedBlobUrl;
            finalDimsLabel.textContent = canvas.width + " x " + canvas.height;
            
            resultBox.style.display = 'block';
            downloadBtn.disabled = false;
            
            if (typeof showToast === 'function') showToast('Image cropped successfully!', 'success');
            
            // Scroll to result box on mobile
            resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } catch (err) {
            console.error('Blob generation error:', err);
            if (typeof showToast === 'function') showToast('Error creating cropped image file.', 'error');
        } finally {
            cropBtn.disabled = false;
        }
    });

    // --- Download Handler ---

    downloadBtn.addEventListener('click', () => {
        if (!croppedBlob) {
            if (typeof showToast === 'function') showToast('No cropped image available to download.', 'warning');
            return;
        }

        const ext = croppedBlob.type === 'image/jpeg' ? 'jpg' : croppedBlob.type === 'image/webp' ? 'webp' : 'png';
        const baseName = originalFileName ? originalFileName.replace(/\.[^/.]+$/, '') : 'image';
        const fileName = `toolzgarden-cropped-${baseName}-${Date.now()}.${ext}`;

        const downloadUrl = URL.createObjectURL(croppedBlob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Revoke the generated output URL after the download has had time to start
        setTimeout(() => {
            URL.revokeObjectURL(downloadUrl);
        }, 2000);
    });

    // --- Reset Handler ---

    resetBtn.addEventListener('click', () => {
        if (cropper) {
            cropper.destroy();
            cropper = null;
        }
        if (currentObjectUrl) {
            URL.revokeObjectURL(currentObjectUrl);
            currentObjectUrl = null;
        }
        if (croppedBlobUrl) {
            URL.revokeObjectURL(croppedBlobUrl);
            croppedBlobUrl = null;
        }
        croppedBlob = null;
        originalFileName = '';
        originalFileType = '';
        fileInput.value = '';
        originalPreview.src = '';
        outputPreview.src = '';
        cropDimsLabel.textContent = '0 x 0';
        finalDimsLabel.textContent = '0 x 0';
        resultBox.style.display = 'none';
        previewContainer.style.display = 'none';
        dropZone.style.display = 'block';
        cropBtn.disabled = true;
        downloadBtn.disabled = true;
        resetBtn.style.display = 'none';

        ratioBtns.forEach(b => {
            b.classList.remove('btn-primary');
            b.classList.add('btn-secondary');
        });
    });
});
