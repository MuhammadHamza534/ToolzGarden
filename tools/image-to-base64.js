/* 
  ToolzGarden - Image to Base64 Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const copyBtn = document.getElementById('copy-btn');
    const downloadTxtBtn = document.getElementById('download-txt-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    const outputContainer = document.getElementById('output-container');
    const base64Output = document.getElementById('base64-output');
    const charCountLabel = document.getElementById('char-count');

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

        const base64String = await PixUtils.fileToDataURL(file);
        
        base64Output.value = base64String;
        charCountLabel.textContent = `${base64String.length.toLocaleString()} characters`;
        
        outputContainer.style.display = 'grid';
        dropZone.style.pointerEvents = 'none';
        dropZone.style.opacity = '0.5';
        fileInput.disabled = true;
        
        copyBtn.disabled = false;
        downloadTxtBtn.disabled = false;
        resetBtn.style.display = 'block';
        isProcessed = true;
    }

    // --- Event Listeners ---

    copyBtn.addEventListener('click', () => {
        base64Output.select();
        document.execCommand('copy');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });

    downloadTxtBtn.addEventListener('click', () => {
        const blob = new Blob([base64Output.value], { type: 'text/plain' });
        const fileName = `toolzgarden-base64-${Date.now()}.txt`;
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(link.href);
    });

    resetBtn.addEventListener('click', () => {
        isProcessed = false;
        fileInput.value = '';
        fileInput.disabled = false;
        dropZone.style.pointerEvents = 'auto';
        dropZone.style.opacity = '1';
        outputContainer.style.display = 'none';
        copyBtn.disabled = true;
        downloadTxtBtn.disabled = true;
        resetBtn.style.display = 'none';
        base64Output.value = '';
        charCountLabel.textContent = '0 characters';
    });
});
