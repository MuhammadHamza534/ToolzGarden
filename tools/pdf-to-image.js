
document.getElementById('drop-zone')?.addEventListener('click', () => document.getElementById('file-input').click());
document.getElementById('file-input')?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const arrayBuffer = await file.arrayBuffer();
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
    const grid = document.getElementById('preview-grid');
    grid.innerHTML = '';
    window.pdfImages = [];
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
        const img = document.createElement('img');
        img.src = canvas.toDataURL('image/png');
        img.style.width = '100%';
        grid.appendChild(img);
        window.pdfImages.push(img.src);
    }
    document.getElementById('download-btn').disabled = false;
});
document.getElementById('download-btn')?.addEventListener('click', () => {
    window.pdfImages.forEach((src, i) => {
        const link = document.createElement('a');
        link.href = src;
        link.download = `page_${i+1}.png`;
        link.click();
    });
});
document.getElementById('reset-btn')?.addEventListener('click', () => location.reload());
