const fs = require('fs');
const path = require('path');

const map = {
  'image-compressor.html': 'compressor',
  'image-resizer.html': 'resizer',
  'image-to-png.html': 'png',
  'image-to-jpg.html': 'jpg',
  'image-to-webp.html': 'webp',
  'image-cropper.html': 'cropper',
  'image-to-base64.html': 'base64',
  'bulk-downloader.html': 'bulk',
  'pdf-compress.html': 'pdfcompress',
  'pdf-merge.html': 'pdfmerge',
  'pdf-split.html': 'pdfsplit',
  'pdf-to-image.html': 'pdftoimg',
  'image-to-pdf.html': 'imgtopdf',
  'pdf-page-remover.html': 'pdfremover',
  'word-counter.html': 'wordcount',
  'character-counter.html': 'charcount',
  'case-converter.html': 'caseconv',
  'text-reverser.html': 'textreverser',
  'remove-duplicates.html': 'removedup',
  'text-to-slug.html': 'slug',
  'json-formatter.html': 'jsonformat',
  'json-minifier.html': 'jsonmin',
  'base64-encoder.html': 'base64enc',
  'url-encoder.html': 'urlenc',
  'html-encoder.html': 'htmlenc'
};

const dir = path.join(process.cwd(), 'tools');

Object.keys(map).forEach(f => {
  const p = path.join(dir, f);
  if (!fs.existsSync(p)) {
    console.log('Missing ' + f);
    return;
  }
  
  let c = fs.readFileSync(p, 'utf8');
  
  if (c.includes('full-page-wrapper')) {
    console.log('Skip ' + f);
    return;
  }
  
  const l = `
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-${map[f]}" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">`;

  const r = `  </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-${map[f]}" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>`;

  c = c.replace(/<main[^>]*>/, l);
  c = c.replace(/<\/main>/, r);
  
  fs.writeFileSync(p, c, 'utf8');
  console.log('Updated ' + f);
});
