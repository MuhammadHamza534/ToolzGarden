
const ta = document.getElementById('text-input');
ta?.addEventListener('input', () => {
    const text = ta.value;
    document.getElementById('words').innerText = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    document.getElementById('chars').innerText = text.length;
    document.getElementById('chars-ns').innerText = text.replace(/\s/g, '').length;
    document.getElementById('sents').innerText = text.split(/[.!?]+/).filter(s => s.trim()).length;
    document.getElementById('paras').innerText = text.split(/\n\s*\n/).filter(p => p.trim()).length;
    document.getElementById('read-time').innerText = Math.ceil((text.trim() === '' ? 0 : text.trim().split(/\s+/).length) / 200);
});
document.getElementById('reset-btn')?.addEventListener('click', () => { if(ta) {ta.value = ''; ta.dispatchEvent(new Event('input'));} });
