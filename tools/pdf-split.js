
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
    document.getElementById('total-pages').innerText = num;
    document.getElementById('page-info').style.display = 'block';
    document.getElementById('from-page').max = num;
    document.getElementById('to-page').max = num;
    document.getElementById('download-btn').disabled = false;
});
document.getElementById('download-btn')?.addEventListener('click', async () => {
    const fromP = parseInt(document.getElementById('from-page').value) || 1;
    const toP = parseInt(document.getElementById('to-page').value) || 1;
    const pdfDoc = await PDFLib.PDFDocument.load(pdfDocBytes);
    const newPdf = await PDFLib.PDFDocument.create();
    const indices = [];
    for(let i=fromP-1; i<=toP-1; i++) indices.push(i);
    const pages = await newPdf.copyPages(pdfDoc, indices);
    pages.forEach(page => newPdf.addPage(page));
    const bytes = await newPdf.save();
    const blob = new Blob([bytes], {type: 'application/pdf'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'split_' + originalName;
    link.click();
});
document.getElementById('reset-btn')?.addEventListener('click', () => location.reload());
