
let pdfDocBytes = null;
let originalName = '';
document.getElementById('drop-zone')?.addEventListener('click', () => document.getElementById('file-input').click());
document.getElementById('file-input')?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if(!file) return;
    originalName = file.name;
    pdfDocBytes = await file.arrayBuffer();
    const pdfDoc = await PDFLib.PDFDocument.load(pdfDocBytes);
    const num = pdfDoc.getPageCount();
    const grid = document.getElementById('pages-grid');
    grid.innerHTML = '';
    for(let i=1; i<=num; i++) {
        const div = document.createElement('div');
        div.innerHTML = `<input type="checkbox" value="${i-1}" id="p${i}"><label for="p${i}">Page ${i}</label>`;
        grid.appendChild(div);
    }
    document.getElementById('download-btn').disabled = false;
});
document.getElementById('download-btn')?.addEventListener('click', async () => {
    const checkboxes = document.querySelectorAll('#pages-grid input:checked');
    const selectedPages = Array.from(checkboxes).map(c => parseInt(c.value));
    const pdfDoc = await PDFLib.PDFDocument.load(pdfDocBytes);
    const num = pdfDoc.getPageCount();
    const indicesToKeep = [];
    for(let i=0; i<num; i++) {
        if(!selectedPages.includes(i)) indicesToKeep.push(i);
    }
    const newPdf = await PDFLib.PDFDocument.create();
    const pages = await newPdf.copyPages(pdfDoc, indicesToKeep);
    pages.forEach(p => newPdf.addPage(p));
    const bytes = await newPdf.save();
    const blob = new Blob([bytes], {type: 'application/pdf'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'removed_' + originalName;
    link.click();
});
document.getElementById('reset-btn')?.addEventListener('click', () => location.reload());
