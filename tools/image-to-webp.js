/* 
  ToolzGarden - Image to WebP Logic
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
            
            convertToWebP();
        };
        originalImage.src = dataUrl;
    }

    function convertToWebP() {
        if (!originalImage) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = originalImage.width;
        canvas.height = originalImage.height;
        ctx.drawImage(originalImage, 0, 0);

        // Problem 5: Export as image/webp with 0.85 quality
        canvas.toBlob((blob) => {
            if (!blob) {
                // Some browsers might not support toBlob for webp, fallback to toDataURL
                const webpUrl = canvas.toDataURL('image/webp', 0.85);
                outputPreview.src = webpUrl;
                // For size estimation if toBlob fails
                outputSizeLabel.textContent = '~' + formatBytes(Math.round(webpUrl.length * 3/4));
            } else {
                const webpUrl = URL.createObjectURL(blob);
                outputPreview.src = webpUrl;
                outputSizeLabel.textContent = formatBytes(blob.size);
                outputPreview.dataset.blobUrl = webpUrl;
            }
            
            downloadBtn.disabled = false;
            resetBtn.style.display = 'block';
            isProcessed = true;
        }, 'image/webp', 0.85);
    }

    // --- Event Listeners ---

    downloadBtn.addEventListener('click', () => {
        const fileName = `toolzgarden-converted-${Date.now()}.webp`;
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
