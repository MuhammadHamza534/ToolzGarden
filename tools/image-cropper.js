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
    const cropCanvasOverlay = document.getElementById('crop-canvas-overlay');
    const cropDimsLabel = document.getElementById('crop-dims');
    const finalDimsLabel = document.getElementById('final-dims');

    let originalImage = null;
    let isProcessed = false;
    let isCropping = false;
    let startX, startY, endX, endY;
    let scaleX = 1, scaleY = 1;

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
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file.');
            return;
        }

        const dataUrl = await PixUtils.fileToDataURL(file);
        originalPreview.src = dataUrl;
        
        originalImage = new Image();
        originalImage.onload = () => {
            previewContainer.style.display = 'grid';
            dropZone.style.display = 'none';
            
            // Setup overlay
            setTimeout(() => {
                const rect = originalPreview.getBoundingClientRect();
                cropCanvasOverlay.width = rect.width;
                cropCanvasOverlay.height = rect.height;
                scaleX = originalImage.naturalWidth / rect.width;
                scaleY = originalImage.naturalHeight / rect.height;
                initCropOverlay();
            }, 100);
        };
        originalImage.src = dataUrl;
    }

    function initCropOverlay() {
        const ctx = cropCanvasOverlay.getContext('2d');

        cropCanvasOverlay.addEventListener('mousedown', (e) => {
            isCropping = true;
            startX = e.offsetX;
            startY = e.offsetY;
        });

        cropCanvasOverlay.addEventListener('mousemove', (e) => {
            if (!isCropping) return;
            endX = e.offsetX;
            endY = e.offsetY;
            
            drawSelection();
            updateDims();
        });

        cropCanvasOverlay.addEventListener('mouseup', () => {
            isCropping = false;
            cropBtn.disabled = false;
        });

        function drawSelection() {
            ctx.clearRect(0, 0, cropCanvasOverlay.width, cropCanvasOverlay.height);
            
            // Darken outside
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.fillRect(0, 0, cropCanvasOverlay.width, cropCanvasOverlay.height);
            
            // Clear selection
            const x = Math.min(startX, endX);
            const y = Math.min(startY, endY);
            const w = Math.abs(startX - endX);
            const h = Math.abs(startY - endY);
            
            ctx.clearRect(x, y, w, h);
            
            // Border
            ctx.strokeStyle = '#2563EB';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, w, h);
        }

        function updateDims() {
            const w = Math.round(Math.abs(startX - endX) * scaleX);
            const h = Math.round(Math.abs(startY - endY) * scaleY);
            cropDimsLabel.textContent = `${w} x ${h}`;
        }
    }

    cropBtn.addEventListener('click', () => {
        const x = Math.min(startX, endX) * scaleX;
        const y = Math.min(startY, endY) * scaleY;
        const w = Math.abs(startX - endX) * scaleX;
        const h = Math.abs(startY - endY) * scaleY;

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        
        ctx.drawImage(originalImage, x, y, w, h, 0, 0, w, h);

        outputPreview.src = canvas.toDataURL('image/png');
        finalDimsLabel.textContent = `${Math.round(w)} x ${Math.round(h)}`;
        
        resultBox.style.display = 'block';
        downloadBtn.disabled = false;
        resetBtn.style.display = 'block';
        isProcessed = true;
        cropBtn.disabled = true;
        cropCanvasOverlay.style.pointerEvents = 'none';
    });

    // --- Event Listeners ---

    downloadBtn.addEventListener('click', () => {
        const fileName = `toolzgarden-cropped-${Date.now()}.png`;
        const link = document.createElement('a');
        link.href = outputPreview.src;
        link.download = fileName;
        link.click();
    });

    resetBtn.addEventListener('click', () => {
        location.reload(); // Simple way to reset stateful canvas interactions
    });
});
