
const taIn = document.getElementById('text-input');
const taOut = document.getElementById('text-output');
const btnFm = document.getElementById('format-btn');
if(btnFm) btnFm.onclick = () => {
    try {
        const parsed = JSON.parse(taIn.value);
        let ind = document.getElementById('indent').value;
        if(ind === 'tab') ind = '\t'; else ind = parseInt(ind);
        taOut.value = JSON.stringify(parsed, null, ind);
        document.getElementById('error-msg').innerText = '';
    } catch(e) {
        document.getElementById('error-msg').innerText = 'Invalid JSON: ' + e.message;
    }
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
    link.download = 'formatted.json';
    link.click();
};
document.getElementById('reset-btn')?.addEventListener('click', () => { if(taIn){taIn.value = ''; taOut.value = ''; document.getElementById('error-msg').innerText = '';} });
