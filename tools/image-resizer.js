/* 
  ToolzGarden - Image Resizer Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const aspectCheckbox = document.getElementById('aspect-ratio');
    const downloadBtn = document.getElementById('download-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    const previewContainer = document.getElementById('preview-container');
    const originalPreview = document.getElementById('original-preview');
    const resizedPreview = document.getElementById('resized-preview');
    const originalDimsLabel = document.getElementById('original-dims');
    const resizedDimsLabel = document.getElementById('resized-dims');

    let originalImage = null;
    let aspectRatio = 1;
    let isProcessed = false;

    // --- Upload Handlers ---

    dropZone.addEventListener('click', () => {
        if (!isProcessed) fileInput.click();
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (!isProcessed) dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
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
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file.');
            return;
        }

        const dataUrl = await PixUtils.fileToDataURL(file);
        originalPreview.src = dataUrl;
        
        originalImage = new Image();
        originalImage.onload = () => {
            aspectRatio = originalImage.width / originalImage.height;
            originalDimsLabel.textContent = `${originalImage.width} x ${originalImage.height}`;
            widthInput.value = originalImage.width;
            heightInput.value = originalImage.height;
            
            previewContainer.style.display = 'grid';
            setTimeout(() => previewContainer.classList.add('visible'), 10);
            dropZone.style.pointerEvents = 'none';
            dropZone.style.opacity = '0.5';
            fileInput.disabled = true;
            
            resizeImage();
        };
        originalImage.src = dataUrl;
    }

    function resizeImage() {
        if (!originalImage) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        const newWidth = parseInt(widthInput.value) || originalImage.width;
        const newHeight = parseInt(heightInput.value) || originalImage.height;
        
        canvas.width = newWidth;
        canvas.height = newHeight;
        ctx.drawImage(originalImage, 0, 0, newWidth, newHeight);

        const resizedUrl = canvas.toDataURL('image/png');
        resizedPreview.src = resizedUrl;
        resizedDimsLabel.textContent = `${newWidth} x ${newHeight}`;
        
        downloadBtn.disabled = false;
        resetBtn.style.display = 'block';
        isProcessed = true;
    }

    // --- Event Listeners ---

    widthInput.addEventListener('input', () => {
        if (aspectCheckbox.checked && originalImage) {
            heightInput.value = Math.round(widthInput.value / aspectRatio);
        }
        resizeImage();
    });

    heightInput.addEventListener('input', () => {
        if (aspectCheckbox.checked && originalImage) {
            widthInput.value = Math.round(heightInput.value * aspectRatio);
        }
        resizeImage();
    });

    aspectCheckbox.addEventListener('change', () => {
        if (aspectCheckbox.checked && originalImage) {
            heightInput.value = Math.round(widthInput.value / aspectRatio);
            resizeImage();
        }
    });

    downloadBtn.addEventListener('click', () => {
        const fileName = `toolzgarden-resized-${Date.now()}.png`;
        const link = document.createElement('a');
        link.href = resizedPreview.src;
        link.download = fileName;
        link.click();

        // Animation 7: Download Success State
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="ri-check-line"></i> Downloaded';
        downloadBtn.style.background = '#16a34a';
        setTimeout(() => {
            downloadBtn.innerHTML = originalText;
            downloadBtn.style.background = '';
        }, 2000);
    });

    resetBtn.addEventListener('click', () => {
        isProcessed = false;
        originalImage = null;
        fileInput.value = '';
        fileInput.disabled = false;
        dropZone.style.pointerEvents = 'auto';
        dropZone.style.opacity = '1';
        previewContainer.style.display = 'none';
        previewContainer.classList.remove('visible');
        downloadBtn.disabled = true;
        resetBtn.style.display = 'none';
        originalPreview.src = '';
        resizedPreview.src = '';
        widthInput.value = '';
        heightInput.value = '';
    });
});
