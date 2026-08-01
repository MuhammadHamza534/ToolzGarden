
let uploadedImages = [];
document.getElementById('drop-zone')?.addEventListener('click', () => document.getElementById('file-input').click());
document.getElementById('file-input')?.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    const grid = document.getElementById('preview-grid');
    files.forEach(f => {
        const reader = new FileReader();
        reader.onload = (ev) => {
            uploadedImages.push(ev.target.result);
            const img = document.createElement('img');
            img.src = ev.target.result;
            img.style.width = '100px';
            grid.appendChild(img);
        };
        reader.readAsDataURL(f);
    });
    document.getElementById('download-btn').disabled = false;
});
document.getElementById('download-btn')?.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    uploadedImages.forEach((img, i) => {
        if (i > 0) pdf.addPage();
        pdf.addImage(img, 'JPEG', 0, 0, 210, 297);
    });
    pdf.save('converted.pdf');
});
document.getElementById('reset-btn')?.addEventListener('click', () => location.reload());
