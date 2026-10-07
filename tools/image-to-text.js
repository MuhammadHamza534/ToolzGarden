const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const resultContainer = document.getElementById('result-container');
const imagePreview = document.getElementById('image-preview');
const ocrResultText = document.getElementById('ocr-result-text');
const loadingOverlay = document.getElementById('loading-overlay');
const loadingText = document.getElementById('loading-text');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const copyBtn = document.getElementById('copy-btn');
const downloadTxtBtn = document.getElementById('download-txt-btn');
const resetBtn = document.getElementById('reset-btn');
const languageSelect = document.getElementById('language-select');

let currentFileName = 'extracted_text';

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
        processImage(e.dataTransfer.files[0]);
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) {
        processImage(e.target.files[0]);
    }
});

resetBtn.addEventListener('click', () => {
    dropZone.style.display = 'block';
    resultContainer.style.display = 'none';
    resetBtn.style.display = 'none';
    fileInput.value = '';
    imagePreview.src = '';
    ocrResultText.value = '';
});

copyBtn.addEventListener('click', () => {
    if (!ocrResultText.value) return;
    navigator.clipboard.writeText(ocrResultText.value).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => copyBtn.innerHTML = originalHtml, 2000);
    });
});

downloadTxtBtn.addEventListener('click', () => {
    if (!ocrResultText.value) return;
    const blob = new Blob([ocrResultText.value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentFileName}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

async function processImage(file) {
    if (!validateFile(file, { accept: 'image/', maxSizeMB: 20 })) {
        return;
    }

    currentFileName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
    const imageUrl = URL.createObjectURL(file);
    imagePreview.src = imageUrl;

    const selectedLanguage = languageSelect.value;

    dropZone.style.display = 'none';
    resultContainer.style.display = 'block';
    loadingOverlay.style.display = 'flex';
    resetBtn.style.display = 'none';
    ocrResultText.value = '';
    progressBar.style.width = '0%';
    loadingText.textContent = "Initializing OCR Engine...";

    try {
        const result = await Tesseract.recognize(
            file,
            selectedLanguage,
            {
                logger: m => {
                    if (m.status === 'recognizing text') {
                        loadingText.textContent = `Extracting Text (${Math.round(m.progress * 100)}%)...`;
                        progressBar.style.width = `${Math.round(m.progress * 100)}%`;
                    } else if (m.status === 'loading tesseract core') {
                        loadingText.textContent = `Loading Core Engine...`;
                    } else if (m.status === 'loading language traineddata') {
                        loadingText.textContent = `Downloading Language Data (${Math.round(m.progress * 100)}%)...`;
                        progressBar.style.width = `${Math.round(m.progress * 100)}%`;
                    } else if (m.status === 'initializing api') {
                        loadingText.textContent = `Initializing API...`;
                    }
                }
            }
        );

        ocrResultText.value = result.data.text;
        loadingOverlay.style.display = 'none';
        resetBtn.style.display = 'inline-flex';

    } catch (error) {
        console.error("OCR failed:", error);
        showToast("Failed to extract text. Ensure you have an active internet connection to download the OCR models.", 'error');
        loadingOverlay.style.display = 'none';
        resetBtn.style.display = 'inline-flex';
    }
}
