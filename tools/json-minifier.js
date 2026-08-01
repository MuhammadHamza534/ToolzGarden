
const taIn = document.getElementById('text-input');
const taOut = document.getElementById('text-output');
const btnMi = document.getElementById('minify-btn');
if(btnMi) btnMi.onclick = () => {
    try {
        taOut.value = JSON.stringify(JSON.parse(taIn.value));
        document.getElementById('size-info').innerText = `Original: ${taIn.value.length} chars | Minified: ${taOut.value.length} chars`;
    } catch(e) { alert('Invalid JSON'); }
};
const btnCo = document.getElementById('copy-btn');
if(btnCo) btnCo.onclick = () => {
    navigator.clipboard.writeText(taOut.value).then(() => {
        const originalHtml = btnCo.innerHTML;
        btnCo.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => btnCo.innerHTML = originalHtml, 2000);
    });
};
const btnDl = document.getElementById('download-btn');
if(btnDl) btnDl.onclick = () => {
    const blob = new Blob([taOut.value], {type: 'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'minified.json';
    link.click();
};
document.getElementById('reset-btn')?.addEventListener('click', () => { if(taIn){taIn.value = ''; taOut.value = ''; document.getElementById('size-info').innerText = '';} });
