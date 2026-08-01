
const taIn = document.getElementById('text-input');
const taOut = document.getElementById('text-output');
const btnRt = document.getElementById('btn-rev-text');
if(btnRt) btnRt.onclick = () => taOut.value = taIn.value.split('').reverse().join('');
const btnRw = document.getElementById('btn-rev-words');
if(btnRw) btnRw.onclick = () => taOut.value = taIn.value.split(' ').reverse().join(' ');
const flipTable = { 'a':'ɐ', 'b':'q', 'c':'ɔ', 'd':'p', 'e':'ǝ', 'f':'ɟ', 'g':'ƃ', 'h':'ɥ', 'i':'ᴉ', 'j':'ɾ', 'k':'ʞ', 'l':'l', 'm':'ɯ', 'n':'u', 'o':'o', 'p':'d', 'q':'b', 'r':'ɹ', 's':'s', 't':'ʇ', 'u':'n', 'v':'ʌ', 'w':'ʍ', 'x':'x', 'y':'ʎ', 'z':'z' };
const btnFl = document.getElementById('btn-flip');
if(btnFl) btnFl.onclick = () => taOut.value = taIn.value.toLowerCase().split('').reverse().map(c => flipTable[c] || c).join('');
const btnCo = document.getElementById('copy-btn');
if(btnCo) btnCo.onclick = () => {
    navigator.clipboard.writeText(taOut.value).then(() => {
        const originalHtml = btnCo.innerHTML;
        btnCo.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => btnCo.innerHTML = originalHtml, 2000);
    });
};
document.getElementById('reset-btn')?.addEventListener('click', () => { if(taIn) taIn.value = ''; if(taOut) taOut.value = ''; });
