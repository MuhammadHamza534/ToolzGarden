const fs = require('fs');
const path = require('path');

const files = [
  'image-compressor.html',
  'image-resizer.html',
  'image-cropper.html',
  'image-to-png.html',
  'image-to-jpg.html',
  'image-to-webp.html',
  'image-to-base64.html',
  'bulk-downloader.html',
  'pdf-compress.html',
  'pdf-merge.html',
  'pdf-split.html',
  'pdf-to-image.html',
  'image-to-pdf.html',
  'pdf-page-remover.html',
  'word-counter.html',
  'character-counter.html',
  'case-converter.html',
  'text-reverser.html',
  'remove-duplicates.html',
  'text-to-slug.html',
  'json-formatter.html',
  'json-minifier.html',
  'base64-encoder.html',
  'url-encoder.html',
  'html-encoder.html'
];

const newHeader = `    <header>
        <nav class="container">
            <a href="../index.html" class="logo">
                <img src="../Images/logo.png" alt="ToolzGarden Logo" style="height:48px; width:48px; object-fit:contain;" />
                ToolzGarden
            </a>
            <ul class="nav-links">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../about.html">About</a></li>
                <li><a href="../contact.html">Contact</a></li>
            </ul>
            <div class="nav-actions">
                <button class="theme-toggle" id="theme-toggle" title="Toggle Dark Mode">
                    <i class="ri-moon-line"></i>
                </button>
            </div>
        </nav>
    </header>`;

files.forEach(f => {
  const p = path.join('tools', f);
  if (fs.existsSync(p)) {
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(/<header>[\s\S]*?<\/header>/, newHeader);
    fs.writeFileSync(p, c, 'utf8');
    console.log('Updated ' + f);
  } else {
    console.log('Missing ' + f);
  }
});
