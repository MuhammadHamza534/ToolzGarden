const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const resultContainer = document.getElementById('result-container');
const imagePreview = document.getElementById('image-preview');
const loadingOverlay = document.getElementById('loading-overlay');
const statusBadge = document.getElementById('status-badge');
const reportSummary = document.getElementById('report-summary');
const metadataList = document.getElementById('metadata-list');
const cleanDownloadBtn = document.getElementById('clean-download-btn');
const resetBtn = document.getElementById('reset-btn');

let currentFile = null;
let currentDataUrl = null;
let originalFileName = 'image.jpg';

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
        handleFile(e.dataTransfer.files[0]);
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) {
        handleFile(e.target.files[0]);
    }
});

resetBtn.addEventListener('click', () => {
    dropZone.style.display = 'block';
    resultContainer.style.display = 'none';
    fileInput.value = '';
    currentFile = null;
    currentDataUrl = null;
    imagePreview.src = '';
    metadataList.innerHTML = '';
});

cleanDownloadBtn.addEventListener('click', async () => {
    if (!currentFile || !currentDataUrl) return;

    loadingOverlay.style.display = 'flex';
    document.getElementById('loading-text').textContent = "Stripping Metadata...";

    try {
        let cleanBlob;
        
        // Zero-loss stripping for JPEGs
        if (currentFile.type === 'image/jpeg' || currentFile.type === 'image/jpg') {
            const cleanDataUrl = piexif.remove(currentDataUrl);
            const res = await fetch(cleanDataUrl);
            cleanBlob = await res.blob();
        } else {
            // Lossless stripping for PNG/WEBP via Canvas
            cleanBlob = await stripViaCanvas(currentFile);
        }

        const url = URL.createObjectURL(cleanBlob);
        const a = document.createElement('a');
        a.href = url;
        const baseName = originalFileName.substring(0, originalFileName.lastIndexOf('.')) || originalFileName;
        // Keep original extension
        const ext = currentFile.type.split('/')[1] === 'jpeg' ? 'jpg' : currentFile.type.split('/')[1];
        a.download = `${baseName}-cleaned.${ext}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // Update UI to show it's clean
        statusBadge.textContent = "Cleaned";
        statusBadge.className = "report-status status-safe";
        reportSummary.textContent = "All metadata has been successfully removed.";
        reportSummary.style.color = "#22c55e";
        metadataList.innerHTML = `
            <li class="metadata-item">
                <i class="ri-shield-check-line"></i> Metadata Erased
            </li>
        `;
        
    } catch (err) {
        console.error("Failed to strip metadata:", err);
        showToast("An error occurred while cleaning the image.", 'error');
    } finally {
        loadingOverlay.style.display = 'none';
    }
});

async function handleFile(file) {
    if (!(await validateImageFile(file, { accept: 'image/', maxSizeMB: 50, maxPixels: 7100 * 7100 }))) {
        return;
    }

    currentFile = file;
    originalFileName = file.name;
    
    dropZone.style.display = 'none';
    resultContainer.style.display = 'block';
    loadingOverlay.style.display = 'flex';
    document.getElementById('loading-text').textContent = "Scanning Metadata...";
    metadataList.innerHTML = '';
    
    // Read file for preview and processing
    const reader = new FileReader();
    reader.onload = (e) => {
        currentDataUrl = e.target.result;
        imagePreview.src = currentDataUrl;
        
        // Use EXIF.js to read the file
        EXIF.getData(file, function() {
            let tags = EXIF.getAllTags(this);
            let foundData = [];
            
            // Check specific risky tags
            if (tags.GPSLatitude || tags.GPSLongitude) {
                foundData.push({ icon: 'ri-map-pin-line', label: 'GPS Location Data' });
            }
            if (tags.DateTime || tags.DateTimeOriginal) {
                foundData.push({ icon: 'ri-calendar-line', label: 'Timestamp (Date/Time)' });
            }
            if (tags.Make || tags.Model) {
                const modelStr = `${tags.Make || ''} ${tags.Model || ''}`.trim();
                foundData.push({ icon: 'ri-smartphone-line', label: `Device: ${modelStr}` });
            }
            if (tags.Software) {
                foundData.push({ icon: 'ri-code-line', label: `Software: ${tags.Software}` });
            }
            
            // Render Report
            if (foundData.length > 0) {
                statusBadge.textContent = "Data Detected";
                statusBadge.className = "report-status status-danger";
                reportSummary.textContent = `Warning: We found ${foundData.length} types of hidden tracking metadata in this image.`;
                reportSummary.style.color = "var(--text-secondary)";
                
                foundData.forEach(item => {
                    const li = document.createElement('li');
                    li.className = 'metadata-item';
                    
                    const icon = document.createElement('i');
                    icon.className = item.icon;
                    
                    li.appendChild(icon);
                    li.appendChild(document.createTextNode(' ' + item.label));
                    
                    metadataList.appendChild(li);
                });
            } else {
                statusBadge.textContent = "Safe / Clean";
                statusBadge.className = "report-status status-safe";
                reportSummary.textContent = "Great news! We did not detect any risky EXIF metadata in this image. You can still process it to be absolutely sure.";
                reportSummary.style.color = "#22c55e";
                
                const li = document.createElement('li');
                li.className = 'metadata-item';
                li.innerHTML = `<i class="ri-shield-check-line"></i> No EXIF Data Found`;
                metadataList.appendChild(li);
            }
            
            loadingOverlay.style.display = 'none';
        });
    };
    reader.readAsDataURL(file);
}

function stripViaCanvas(file) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            // Export without metadata
            canvas.toBlob((blob) => {
                if (blob) resolve(blob);
                else reject(new Error("Canvas export failed"));
            }, file.type);
        };
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
    });
}
