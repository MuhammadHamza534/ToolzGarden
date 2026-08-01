
const inp = document.getElementById('text-input');
const out = document.getElementById('output');
inp?.addEventListener('input', update);
document.getElementById('sep')?.addEventListener('change', update);
document.getElementById('lower')?.addEventListener('change', update);
function update() {
    let text = inp.value;
    if(document.getElementById('lower').checked) text = text.toLowerCase();
    const sep = document.getElementById('sep').value;
    out.innerText = text.trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, sep).replace(/^-+|-+$/g, '');
}
const btnCo = document.getElementById('copy-btn');
if(btnCo) btnCo.onclick = () => {
    navigator.clipboard.writeText(out.innerText).then(() => {
        const originalHtml = btnCo.innerHTML;
        btnCo.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => btnCo.innerHTML = originalHtml, 2000);
    });
};
document.getElementById('reset-btn')?.addEventListener('click', () => { if(inp) {inp.value = ''; update();} });
