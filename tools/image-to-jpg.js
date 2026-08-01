/* 
  ToolzGarden - Image to JPG Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const downloadBtn = document.getElementById('download-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    const previewContainer = document.getElementById('preview-container');
    const originalPreview = document.getElementById('original-preview');
    const outputPreview = document.getElementById('output-preview');
    const originalSizeLabel = document.getElementById('original-size');
    const outputSizeLabel = document.getElementById('output-size');
    const originalFormatLabel = document.getElementById('original-format');

    let originalImage = null;
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

        originalSizeLabel.textContent = formatBytes(file.size);
        originalFormatLabel.textContent = `Original (${file.type.split('/')[1].toUpperCase()})`;
        
        const dataUrl = await PixUtils.fileToDataURL(file);
        originalPreview.src = dataUrl;
        
        originalImage = new Image();
        originalImage.onload = () => {
            previewContainer.style.display = 'grid';
            dropZone.style.pointerEvents = 'none';
            dropZone.style.opacity = '0.5';
            fileInput.disabled = true;
            
            convertToJPG();
        };
        originalImage.src = dataUrl;
    }

    function convertToJPG() {
        if (!originalImage) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = originalImage.width;
        canvas.height = originalImage.height;
        
        // Problem 4: Fill background with white for transparency support in JPG
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.drawImage(originalImage, 0, 0);

        // Problem 4: Export as image/jpeg with 0.92 quality
        canvas.toBlob((blob) => {
            const jpgUrl = URL.createObjectURL(blob);
            outputPreview.src = jpgUrl;
            outputSizeLabel.textContent = formatBytes(blob.size);
            
            downloadBtn.disabled = false;
            resetBtn.style.display = 'block';
            isProcessed = true;
            
            outputPreview.dataset.blobUrl = jpgUrl;
        }, 'image/jpeg', 0.92);
    }

    // --- Event Listeners ---

    downloadBtn.addEventListener('click', () => {
        const fileName = `toolzgarden-converted-${Date.now()}.jpg`;
        const link = document.createElement('a');
        link.href = outputPreview.src;
        link.download = fileName;
        link.click();
    });

    resetBtn.addEventListener('click', () => {
        isProcessed = false;
        originalImage = null;
        fileInput.value = '';
        fileInput.disabled = false;
        dropZone.style.pointerEvents = 'auto';
        dropZone.style.opacity = '1';
        previewContainer.style.display = 'none';
        downloadBtn.disabled = true;
        resetBtn.style.display = 'none';
        originalPreview.src = '';
        outputPreview.src = '';
        if (outputPreview.dataset.blobUrl) {
            URL.revokeObjectURL(outputPreview.dataset.blobUrl);
        }
    });
});
