
const taIn = document.getElementById('text-input');
const taOut = document.getElementById('text-output');
const btnPr = document.getElementById('process-btn');
if(btnPr) btnPr.onclick = () => {
    let lines = taIn.value.split('\n');
    if(document.getElementById('trim').checked) lines = lines.map(l => l.trim());
    const caseSens = document.getElementById('case-sens').checked;
    const unique = [...new Set(lines.map(l => caseSens ? l : l.toLowerCase()))];
    if(document.getElementById('sort').checked) unique.sort();
    taOut.value = unique.join('\n');
    document.getElementById('status').innerText = `Removed ${lines.length - unique.length} duplicates.`;
};
const btnCo = document.getElementById('copy-btn');
if(btnCo) btnCo.onclick = () => {
    navigator.clipboard.writeText(taOut.value).then(() => {
        const originalHtml = btnCo.innerHTML;
        btnCo.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => btnCo.innerHTML = originalHtml, 2000);
    });
};
document.getElementById('reset-btn')?.addEventListener('click', () => { if(taIn) taIn.value = ''; if(taOut) taOut.value = ''; document.getElementById('status').innerText = ''; });
