
let mode = 'enc';
const taIn = document.getElementById('text-input');
const taOut = document.getElementById('text-output');
const btnTe = document.getElementById('tab-enc');
if(btnTe) btnTe.onclick = () => { mode = 'enc'; document.getElementById('process-btn').innerText = 'Encode'; btnTe.classList.replace('btn-secondary', 'btn-primary'); document.getElementById('tab-dec').classList.replace('btn-primary', 'btn-secondary'); };
const btnTd = document.getElementById('tab-dec');
if(btnTd) btnTd.onclick = () => { mode = 'dec'; document.getElementById('process-btn').innerText = 'Decode'; btnTd.classList.replace('btn-secondary', 'btn-primary'); document.getElementById('tab-enc').classList.replace('btn-primary', 'btn-secondary'); };
const btnPr = document.getElementById('process-btn');
if(btnPr) btnPr.onclick = () => {
    try {
        if(mode === 'enc') taOut.value = btoa(unescape(encodeURIComponent(taIn.value)));
        else taOut.value = decodeURIComponent(escape(atob(taIn.value)));
    } catch(e) { showToast('Error processing text', 'error'); }
};
const fiInp = document.getElementById('file-input');
if(fiInp) fiInp.onchange = (e) => {
    const f = e.target.files[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        taOut.value = ev.target.result.split(',')[1];
    };
    reader.readAsDataURL(f);
};
const btnCo = document.getElementById('copy-btn');
if(btnCo) btnCo.onclick = () => {
    navigator.clipboard.writeText(taOut.value).then(() => {
        const originalHtml = btnCo.innerHTML;
        btnCo.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => btnCo.innerHTML = originalHtml, 2000);
    });
};
document.getElementById('reset-btn')?.addEventListener('click', () => { if(taIn){taIn.value = ''; taOut.value = ''; document.getElementById('file-input').value = '';} });
