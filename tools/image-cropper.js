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
    let isProcessed = false;

    // --- Upload Handlers ---

    dropZone.addEventListener('click', () => {
        if (!isProcessed) fileInput.click();
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (!isProcessed) dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        if (isProcessed) return;
        if (e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFile(e.target.files[0]);
        }
    });

    // --- Logic ---

    async function handleFile(file) {
        if (!(await validateImageFile(file, { accept: 'image/', maxSizeMB: 50, maxPixels: 7100 * 7100 }))) {
            return;
        }

        const dataUrl = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
        
        originalPreview.onload = () => {
            previewContainer.style.display = 'grid';
            dropZone.style.display = 'none';
            
            // Delay initialization to ensure the container is fully rendered (display: grid applied)
            setTimeout(() => {
                if (cropper) {
                    cropper.destroy();
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
            }, 50);
        };
        
        originalPreview.src = dataUrl;
    }

    // Aspect ratio controls
    const ratioBtns = document.querySelectorAll('#aspect-ratio-controls button');
    ratioBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!cropper) return;
            const ratio = parseFloat(e.target.dataset.ratio);
            cropper.setAspectRatio(ratio);
            
            ratioBtns.forEach(b => b.classList.replace('btn-primary', 'btn-secondary'));
            e.target.classList.replace('btn-secondary', 'btn-primary');
        });
    });

    cropBtn.addEventListener('click', () => {
        if (!cropper) return;
        
        const canvas = cropper.getCroppedCanvas();
        if (!canvas) {
            if (typeof showToast === 'function') showToast('Could not crop image. Please select an area.', 'error');
            return;
        }
        
        outputPreview.src = canvas.toDataURL('image/png');
        finalDimsLabel.textContent = canvas.width + " x " + canvas.height;
        
        resultBox.style.display = 'block';
        downloadBtn.disabled = false;
        
        if (typeof showToast === 'function') showToast('Image cropped successfully!', 'success');
        
        // Scroll to result box on mobile
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // --- Event Listeners ---

    downloadBtn.addEventListener('click', () => {
        const fileName = 'toolzgarden-cropped-' + Date.now() + '.png';
        const link = document.createElement('a');
        link.href = outputPreview.src;
        link.download = fileName;
        link.click();
    });

    resetBtn.addEventListener('click', () => {
        location.reload();
    });
});

