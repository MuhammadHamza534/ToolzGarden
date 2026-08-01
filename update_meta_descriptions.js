const fs = require('fs');
const path = require('path');

const descriptions = {
  'index.html': 'ToolzGarden offers a free suite of browser-based tools for image compression, PDF editing, and text processing. 100% private, secure, and no uploads required.',
  'about.html': 'Discover ToolzGarden, a platform dedicated to providing fast, browser-based utility tools. We prioritize your privacy with zero-upload, client-side processing.',
  'contact.html': 'Get in touch with ToolzGarden for support, feature requests, or bug reports regarding our browser-based tools. We value your privacy and feedback.',
  'privacy.html': 'Read the ToolzGarden Privacy Policy. Learn how our browser-based tools keep your data 100% private and secure without ever uploading files to our servers.',
  'terms.html': 'Review the Terms of Service for using ToolzGarden. Understand the rules and guidelines for accessing our free, secure, and browser-based utility tools.',
  'tools/image-compressor.html': 'Compress JPG, PNG, and WebP images online for free. Reduce file size without losing quality using secure, browser-based processing. 100% private and fast.',
  'tools/image-cropper.html': 'Crop images online for free. Easily select specific areas of your photos. Fast, secure, and works directly in your browser. No server uploads required.',
  'tools/image-resizer.html': 'Resize images online instantly for free. Change dimensions by pixels or percentage. Secure, browser-based processing ensures your photos remain 100% private.',
  'tools/image-to-jpg.html': 'Convert PNG, WebP, GIF, and other formats to JPG online for free. Fast, high-quality conversion done directly in your browser for maximum privacy.',
  'tools/image-to-png.html': 'Convert JPG, WebP, GIF, and more to high-quality PNG online for free. Enjoy secure, browser-based processing with zero server uploads and 100% privacy.',
  'tools/image-to-webp.html': 'Convert any image format to WebP online for better web performance. Free, secure, and browser-based conversion ensures your files stay completely private.',
  'tools/image-to-base64.html': 'Encode images to Base64 strings online for free. Perfect for developers needing data URIs. Fast, browser-based processing with no server uploads required.',
  'tools/image-to-pdf.html': 'Convert and combine JPG or PNG images into a single PDF document online for free. Secure, browser-based processing guarantees your files remain private.',
  'tools/pdf-compress.html': 'Compress PDF files online for free. Reduce document size significantly without losing text quality. 100% private, secure, browser-based PDF compression.',
  'tools/pdf-merge.html': 'Merge multiple PDF files into one document online for free. Combine your PDFs quickly and securely with our private, browser-based processing tool.',
  'tools/pdf-split.html': 'Split PDF files and extract specific pages online for free. Fast, secure, and browser-based PDF splitting ensures your documents never leave your device.',
  'tools/pdf-page-remover.html': 'Remove unwanted pages from your PDF documents online for free. Enjoy fast, secure, browser-based processing that keeps your sensitive files 100% private.',
  'tools/pdf-to-image.html': 'Convert PDF documents to high-quality JPG or PNG images online for free. Secure, fast, browser-based conversion with absolutely no server uploads needed.',
  'tools/word-counter.html': 'Count words, characters, sentences, and reading time instantly. Free, browser-based text analysis tool. 100% private, your text is never saved or uploaded.',
  'tools/character-counter.html': 'Count characters, letters, numbers, and spaces online for free. Set limits and track length instantly. Secure, browser-based tool with complete privacy.',
  'tools/case-converter.html': 'Convert text to UPPERCASE, lowercase, Title Case, and more online for free. Instant, browser-based text case conversion that keeps your data 100% private.',
  'tools/text-reverser.html': 'Reverse text strings, words, or letters instantly online for free. A fast, secure, and browser-based utility tool that ensures complete data privacy.',
  'tools/text-to-slug.html': 'Generate clean, SEO-friendly URL slugs from any text or title online for free. Fast, browser-based processing handles spaces and special characters privately.',
  'tools/remove-duplicates.html': 'Remove duplicate lines from your text lists online for free. Clean up data instantly with our secure, browser-based tool. 100% private, no data uploaded.',
  'tools/json-formatter.html': 'Format, validate, and beautify JSON data online for free. Features syntax highlighting and secure, browser-based processing. Your data stays 100% private.',
  'tools/json-minifier.html': 'Minify and compress JSON data online for free. Reduce file size instantly. Secure, browser-based minification ensures your code remains completely private.',
  'tools/base64-encoder.html': 'Encode and decode Base64 strings or files online for free. Fast, secure, browser-based utility for developers. 100% private with no server uploads.',
  'tools/url-encoder.html': 'Encode and decode URLs and parameters online for free. Instantly convert special characters safely. A secure, browser-based tool with complete privacy.',
  'tools/html-encoder.html': 'Encode and decode HTML entities online for free. Convert special characters safely and instantly. Secure, browser-based processing keeps your code private.',
  'tools/bulk-downloader.html': 'Process and download multiple images at once as a ZIP file online for free. Fast, secure, browser-based bulk downloading tool. 100% private and safe.',
  'tools/emi-calculator.html': 'Calculate your loan EMI instantly online for free. Get payment breakdowns and amortization tables. Secure, browser-based calculator with complete privacy.',
  'tools/loan-calculator.html': 'Calculate loan and installment payments online for free. Discover your monthly EMI and total interest with our secure, browser-based financial tool.',
  'tools/qr-code-generator.html': 'Generate custom QR codes online for free with no signup. Create instant, scannable codes. Secure, browser-based processing ensures 100% data privacy.',
  'tools/resume-builder.html': 'Create and download a professional PDF resume online for free. Fast, secure, and browser-based resume builder. Your personal data remains 100% private.'
};

const baseDir = 'd:\\ToolzGarden';

for (const [filename, description] of Object.entries(descriptions)) {
  const filePath = path.join(baseDir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check length
  if (description.length < 120 || description.length > 160) {
    console.warn(`Warning: Description length for ${filename} is ${description.length} characters.`);
  }

  const metaDescRegex = /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i;
  const newMetaTag = `<meta name="description" content="${description}">`;

  if (metaDescRegex.test(content)) {
    content = content.replace(metaDescRegex, newMetaTag);
  } else {
    // If missing, inject after <title>
    const titleRegex = /<title>.*?<\/title>/is;
    if (titleRegex.test(content)) {
      content = content.replace(titleRegex, `$&
    ${newMetaTag}`);
    } else {
      // If no title, inject before </head>
      content = content.replace('</head>', `    ${newMetaTag}\n  </head>`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filename}`);
}
