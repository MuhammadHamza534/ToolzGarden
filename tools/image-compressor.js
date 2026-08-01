/* 
  ToolzGarden - Image Compressor Logic
  Handles file upload, live compression, and preview updates.
*/

document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const qualitySlider = document.getElementById('quality');
    const qualityVal = document.getElementById('quality-val');
    const formatSelect = document.getElementById('format');
    const downloadBtn = document.getElementById('download-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    const previewContainer = document.getElementById('preview-container');
    const originalPreview = document.getElementById('original-preview');
    const compressedPreview = document.getElementById('compressed-preview');
    const originalSizeLabel = document.getElementById('original-size');
    const compressedSizeLabel = document.getElementById('compressed-size');

    let currentFile = null;
    let originalImage = null;
    let isCompressed = false; // ADDED: Flag to prevent re-compression (Problem 4)

    // --- Upload Handlers ---

    dropZone.addEventListener('click', () => {
        if (!isCompressed) fileInput.click(); // Only allow if not processed
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (!isCompressed) dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        if (isCompressed) return; // Problem 3: Do not allow drop while one is loaded
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

        currentFile = file;
        originalSizeLabel.textContent = formatBytes(file.size);
        
        const dataUrl = await PixUtils.fileToDataURL(file);
        originalPreview.src = dataUrl;
        
        originalImage = new Image();
        originalImage.onload = () => {
            // dropZone.style.display = 'none'; // Keep it but disable it
            previewContainer.style.display = 'grid';
            setTimeout(() => previewContainer.classList.add('visible'), 10);
            
            // Problem 3: Enforce one image at a time lock
            dropZone.style.pointerEvents = 'none';
            dropZone.style.opacity = '0.5';
            fileInput.disabled = true;
            
            compressImage(file, (blob) => {
                const compressedUrl = URL.createObjectURL(blob);
                compressedPreview.src = compressedUrl;
                compressedSizeLabel.textContent = formatBytes(blob.size);
                
                downloadBtn.disabled = false;
                resetBtn.style.display = 'block'; // Show Reset button after compression
                
                if (compressedPreview.dataset.blobUrl) {
                    URL.revokeObjectURL(compressedPreview.dataset.blobUrl);
                }
                compressedPreview.dataset.blobUrl = compressedUrl;
            });
        };
        originalImage.src = dataUrl;
    }

    /**
     * Problem 1: Fixed Compression Logic
     * Uses fixed quality 0.72 and direct canvas drawing.
     */
    function compressImage(file, callback) {
        if (isCompressed) return; // Problem 4: Prevent re-compression
        isCompressed = true;

        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = function () {
            const canvas = document.createElement('canvas');
            // Problem 1: Keep natural dimensions
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            
            // Problem 1: Draw without pixel manipulation
            ctx.drawImage(img, 0, 0);
            
            // Problem 1: Fixed quality 0.72 for JPEG
            canvas.toBlob(function (blob) {
                URL.revokeObjectURL(url);
                callback(blob);
            }, 'image/jpeg', 0.72);
        };
        img.src = url;
    }

    // --- Event Listeners ---

    // DELETED: qualitySlider input listener removed (Problem 2)

    formatSelect.addEventListener('change', () => {
        // Since we are now locking to one compression, we don't re-compress on format change
        // unless we were to reset the flag. But instructions say "one image at a time" 
        // and "prevent re-compressing".
    });

    downloadBtn.addEventListener('click', () => {
        const fileName = `toolzgarden-compressed-${Date.now()}.jpg`;
        fetch(compressedPreview.src)
            .then(res => res.blob())
            .then(blob => downloadBlob(blob, fileName));
            
        // Animation 7: Download Success State
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="ri-check-line"></i> Downloaded';
        downloadBtn.style.background = '#16a34a';
        setTimeout(() => {
            downloadBtn.innerHTML = originalText;
            downloadBtn.style.background = '';
        }, 2000);
    });

    // Problem 3: Reset functionality
    resetBtn.addEventListener('click', () => {
        isCompressed = false; // Reset flag (Problem 4)
        currentFile = null;
        originalImage = null;
        fileInput.value = '';
        fileInput.disabled = false;
        
        dropZone.style.pointerEvents = 'auto';
        dropZone.style.opacity = '1';
        previewContainer.style.display = 'none';
        previewContainer.classList.remove('visible');
        downloadBtn.disabled = true;
        resetBtn.style.display = 'none'; // Hide itself
        
        originalPreview.src = '';
        compressedPreview.src = '';
    });
});
