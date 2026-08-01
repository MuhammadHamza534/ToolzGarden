
document.getElementById('drop-zone')?.addEventListener('click', () => document.getElementById('file-input').click());
document.getElementById('file-input')?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if(!file) return;
    document.getElementById('orig-size').innerText = (file.size/1024).toFixed(2) + ' KB';
    const bytes = await file.arrayBuffer();
    const pdfDoc = await PDFLib.PDFDocument.load(bytes);
    const compBytes = await pdfDoc.save({ useObjectStreams: true });
    document.getElementById('comp-size').innerText = (compBytes.length/1024).toFixed(2) + ' KB';
    document.getElementById('preview').style.display = 'block';
    
    const btn = document.getElementById('download-btn');
    btn.disabled = false;
    btn.onclick = () => {
        const blob = new Blob([compBytes], {type: 'application/pdf'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'compressed_' + file.name;
        link.click();
    };
});
document.getElementById('reset-btn')?.addEventListener('click', () => location.reload());
