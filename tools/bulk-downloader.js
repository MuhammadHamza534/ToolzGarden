/* 
  ToolzGarden - Bulk Downloader Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const bulkFormat = document.getElementById('bulk-format');
    const downloadZipBtn = document.getElementById('download-zip-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    const fileListContainer = document.getElementById('file-list-container');
    const fileList = document.getElementById('file-list');
    const fileCountLabel = document.getElementById('file-count');

    let uploadedFiles = [];

    // --- Upload Handlers ---

    dropZone.addEventListener('click', () => fileInput.click());

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
        if (e.dataTransfer.files.length) {
            handleFiles(Array.from(e.dataTransfer.files));
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFiles(Array.from(e.target.files));
        }
    });

    // --- Logic ---

    function handleFiles(files) {
        const imageFiles = files.filter(f => f.type.startsWith('image/'));
        if (imageFiles.length === 0) {
            alert('Please select image files.');
            return;
        }

        uploadedFiles = [...uploadedFiles, ...imageFiles];
        updateFileList();
        
        fileListContainer.style.display = 'block';
        downloadZipBtn.disabled = false;
        resetBtn.style.display = 'block';
    }

    function updateFileList() {
        fileList.innerHTML = '';
        fileCountLabel.textContent = uploadedFiles.length;
        
        uploadedFiles.forEach((file, index) => {
            const li = document.createElement('li');
            li.className = 'file-item';
            li.innerHTML = `
                <div class="file-info">
                    <span class="file-name">${file.name}</span>
                    <span class="file-size">${formatBytes(file.size)}</span>
                </div>
                <span class="file-status"><i class="ri-check-line"></i> Ready</span>
            `;
            fileList.appendChild(li);
        });
    }

    async function processAndZip() {
        const zip = new JSZip();
        const targetFormat = bulkFormat.value;
        const total = uploadedFiles.length;
        
        downloadZipBtn.disabled = true;
        downloadZipBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Processing...';

        for (let i = 0; i < total; i++) {
            const file = uploadedFiles[i];
            const img = new Image();
            const url = URL.createObjectURL(file);
            
            await new Promise((resolve) => {
                img.onload = async () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    
                    if (targetFormat === 'image/jpeg') {
                        ctx.fillStyle = '#FFFFFF';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                    }
                    
                    ctx.drawImage(img, 0, 0);
                    
                    const format = targetFormat === 'original' ? file.type : targetFormat;
                    const extension = format.split('/')[1].replace('jpeg', 'jpg');
                    const fileName = file.name.split('.')[0] + '.' + extension;
                    
                    canvas.toBlob((blob) => {
                        zip.file(fileName, blob);
                        URL.revokeObjectURL(url);
                        resolve();
                    }, format, 0.9);
                };
                img.src = url;
            });
        }

        const content = await zip.generateAsync({ type: 'blob' });
        const zipName = `toolzgarden-bulk-${Date.now()}.zip`;
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = zipName;
        link.click();
        
        downloadZipBtn.disabled = false;
        downloadZipBtn.innerHTML = '<i class="ri-file-zip-line"></i> Download All as ZIP';
    }

    // --- Event Listeners ---

    downloadZipBtn.addEventListener('click', processAndZip);

    resetBtn.addEventListener('click', () => {
        uploadedFiles = [];
        fileList.innerHTML = '';
        fileListContainer.style.display = 'none';
        downloadZipBtn.disabled = true;
        resetBtn.style.display = 'none';
        fileInput.value = '';
    });
});
