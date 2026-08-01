
let pdfFiles = [];
document.getElementById('drop-zone')?.addEventListener('click', () => document.getElementById('file-input').click());
document.getElementById('file-input')?.addEventListener('change', (e) => {
    pdfFiles = [...pdfFiles, ...Array.from(e.target.files)];
    renderList();
    document.getElementById('download-btn').disabled = false;
});
function renderList() {
    const ul = document.getElementById('file-list');
    ul.innerHTML = '';
    pdfFiles.forEach((f, i) => {
        const li = document.createElement('li');
        li.innerText = f.name;
        ul.appendChild(li);
    });
}
document.getElementById('download-btn')?.addEventListener('click', async () => {
    const mergedPdf = await PDFLib.PDFDocument.create();
    for (const file of pdfFiles) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(bytes);
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach(page => mergedPdf.addPage(page));
    }
    const mergedBytes = await mergedPdf.save();
    const blob = new Blob([mergedBytes], {type: 'application/pdf'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'merged.pdf';
    link.click();
});
document.getElementById('reset-btn')?.addEventListener('click', () => location.reload());
