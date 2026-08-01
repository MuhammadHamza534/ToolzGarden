
const ta = document.getElementById('text-input');
const btnUp = document.getElementById('btn-upper');
if(btnUp) btnUp.onclick = () => ta.value = ta.value.toUpperCase();
const btnLo = document.getElementById('btn-lower');
if(btnLo) btnLo.onclick = () => ta.value = ta.value.toLowerCase();
const btnTi = document.getElementById('btn-title');
if(btnTi) btnTi.onclick = () => ta.value = ta.value.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());
const btnSe = document.getElementById('btn-sentence');
if(btnSe) btnSe.onclick = () => ta.value = ta.value.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
const btnAl = document.getElementById('btn-alt');
if(btnAl) btnAl.onclick = () => ta.value = ta.value.split('').map((c,i) => i%2===0 ? c.toUpperCase() : c.toLowerCase()).join('');
const btnRe = document.getElementById('btn-rev');
if(btnRe) btnRe.onclick = () => ta.value = ta.value.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
const btnCo = document.getElementById('copy-btn');
if(btnCo) btnCo.onclick = () => {
    navigator.clipboard.writeText(ta.value).then(() => {
        const originalHtml = btnCo.innerHTML;
        btnCo.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => btnCo.innerHTML = originalHtml, 2000);
    });
};
document.getElementById('reset-btn')?.addEventListener('click', () => { if(ta) ta.value = ''; });
