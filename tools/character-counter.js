
const ta = document.getElementById('text-input');
const limitInp = document.getElementById('limit');
ta?.addEventListener('input', update);
limitInp?.addEventListener('input', update);
function update() {
    const text = ta.value;
    document.getElementById('total').innerText = text.length;
    document.getElementById('letters').innerText = (text.match(/[a-zA-Z]/g) || []).length;
    document.getElementById('numbers').innerText = (text.match(/[0-9]/g) || []).length;
    document.getElementById('spaces').innerText = (text.match(/\s/g) || []).length;
    document.getElementById('symbols').innerText = text.length - (text.match(/[a-zA-Z0-9\s]/g) || []).length;
    
    const limit = parseInt(limitInp.value) || 0;
    if(limit > 0 && text.length > limit) {
        document.getElementById('warning').style.display = 'block';
    } else {
        document.getElementById('warning').style.display = 'none';
    }
}
document.getElementById('reset-btn')?.addEventListener('click', () => { if(ta) {ta.value = ''; update();} });
