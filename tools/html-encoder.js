
let mode = 'enc';
const taIn = document.getElementById('text-input');
const taOut = document.getElementById('text-output');
const btnTe = document.getElementById('tab-enc');
if(btnTe) btnTe.onclick = () => { mode = 'enc'; btnTe.classList.replace('btn-secondary', 'btn-primary'); document.getElementById('tab-dec').classList.replace('btn-primary', 'btn-secondary'); taIn.dispatchEvent(new Event('input')); };
const btnTd = document.getElementById('tab-dec');
if(btnTd) btnTd.onclick = () => { mode = 'dec'; btnTd.classList.replace('btn-secondary', 'btn-primary'); document.getElementById('tab-enc').classList.replace('btn-primary', 'btn-secondary'); taIn.dispatchEvent(new Event('input')); };
taIn?.addEventListener('input', () => {
    if(mode === 'enc') {
        taOut.value = taIn.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    } else {
        const txt = document.createElement('textarea');
        txt.innerHTML = taIn.value;
        taOut.value = txt.value;
    }
});
const btnCo = document.getElementById('copy-btn');
if(btnCo) btnCo.onclick = () => {
    navigator.clipboard.writeText(taOut.value).then(() => {
        const originalHtml = btnCo.innerHTML;
        btnCo.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => btnCo.innerHTML = originalHtml, 2000);
    });
};
document.getElementById('reset-btn')?.addEventListener('click', () => { if(taIn){taIn.value = ''; taOut.value = '';} });
