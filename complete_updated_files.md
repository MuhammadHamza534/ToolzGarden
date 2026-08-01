# Complete Updated Tool Files

This document contains the exact, 100% complete source code for all 25 updated tool HTML files with the left and right ad sidebars injected.

## base64-encoder.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base64 Encoder - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Encode/Decode Base64.">
    <link rel="canonical" href="https://toolzgarden.com/tools/base64-encoder.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-base64enc" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Base64 Encoder / Decoder</h1>
            <p style="color: var(--text-secondary);">Encode text or files to Base64, or decode back.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div style="display:flex;gap:1rem;margin-bottom:1rem;"><button id="tab-enc" class="btn btn-primary">Encode</button><button id="tab-dec" class="btn btn-secondary">Decode</button></div><textarea id="text-input" rows="5" style="width:100%;padding:1rem;border-radius:0.5rem;" placeholder="Input..."></textarea><div style="margin:1rem 0;">Or upload file: <input type="file" id="file-input"></div><textarea id="text-output" rows="5" style="width:100%;padding:1rem;border-radius:0.5rem;" readonly></textarea>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="process-btn" class="btn btn-primary" style="margin-bottom:1rem;width:100%;">Encode</button><button id="copy-btn" class="btn btn-primary" style="margin-bottom:1rem;width:100%;"><i class="ri-clipboard-line"></i> Copy</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-base64enc" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="base64-encoder.js"></script>
</body>
</html>
`

## bulk-downloader.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulk Downloader - Process Multiple Images | ToolzGarden</title>
    <meta name="description" content="Process and download multiple images at once as a ZIP file. Fast, free, and 100% private. All processing happens in your browser.">
    <link rel="canonical" href="https://toolzgarden.com/tools/bulk-downloader.html">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://toolzgarden.com/tools/bulk-downloader.html">
    <meta property="og:title" content="Bulk Image Downloader - Online Tool">
    <meta property="og:description" content="Download multiple images in a single ZIP file after processing. Secure and browser-based.">
    <meta property="og:image" content="https://toolzgarden.com/assets/og-bulk.jpg">

    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link rel="manifest" href="../Favicon-Images/site.webmanifest">
    <link rel="shortcut icon" href="../Favicon-Images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <style>
        .file-list {
            list-style: none;
            margin-top: 1.5rem;
            max-height: 400px;
            overflow-y: auto;
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            padding: 0;
        }
        .file-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 1rem;
            border-bottom: 1px solid var(--border-color);
            background: var(--bg-primary);
        }
        .file-item:last-child {
            border-bottom: none;
        }
        .file-info {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .file-name {
            font-weight: 600;
            font-size: 0.9rem;
        }
        .file-size {
            font-size: 0.75rem;
            color: var(--text-secondary);
        }
        .file-status {
            font-size: 0.8rem;
            color: #10b981;
        }
    </style>

    <!-- WebApplication Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "ToolzGarden Bulk Downloader",
      "url": "https://toolzgarden.com/tools/bulk-downloader.html",
      "description": "An online tool to bulk process and download multiple images as a ZIP file.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    </script>

    <!-- JSZip Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img 
                        src="../Images/logo.png" 
                        alt="ToolzGarden Logo" 
                        style="height:48px; width:48px; object-fit:contain;"
                    />
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-bulk" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Bulk Downloader</h1>
            <p style="color: var(--text-secondary);">Upload multiple images, convert them, and download everything in one ZIP file.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area">
                    <div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div>
                    <h3>Drag & Drop multiple images here</h3>
                    <p>or click to browse from your device</p>
                    <input type="file" id="file-input" hidden accept="image/*" multiple>
                </div>

                <div id="file-list-container" style="display: none;">
                    <h3>Uploaded Files (<span id="file-count">0</span>)</h3>
                    <ul id="file-list" class="file-list"></ul>
                </div>
            </div>

            <aside class="tool-sidebar">
                <div class="controls-card">
                    <div class="control-group">
                        <label for="bulk-format">Output Format</label>
                        <select id="bulk-format">
                            <option value="original">Original Format</option>
                            <option value="image/jpeg">Convert All to JPG</option>
                            <option value="image/png">Convert All to PNG</option>
                            <option value="image/webp">Convert All to WebP</option>
                        </select>
                    </div>

                    <button id="download-zip-btn" class="btn btn-primary" disabled>
                        <i class="ri-file-zip-line"></i> Download All as ZIP
                    </button>
                    
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; display: none;">
                        <i class="ri-restart-line"></i> Clear All
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item">
                <h3>Is there a limit on how many images I can upload?</h3>
                <p>There is no strict limit, but uploading hundreds of high-resolution images at once may consume a lot of your device's memory.</p>
            </div>
            <div class="faq-item">
                <h3>How does the conversion work?</h3>
                <p>Each image is processed individually in your browser's memory and then added to a virtual ZIP file.</p>
            </div>
            <div class="faq-item">
                <h3>Is it secure?</h3>
                <p>Yes, your images never leave your computer. The ZIP file is generated locally.</p>
            </div>
            <div class="faq-item">
                <h3>What is JSZip?</h3>
                <p>JSZip is a popular JavaScript library we use to create ZIP files directly in your web browser.</p>
            </div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="image-compressor.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-contract-up-down-line"></i></div>
                    <h4>Image Compressor</h4>
                    <p>Reduce image sizes easily.</p>
                </a>
                <a href="image-resizer.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-aspect-ratio-line"></i></div>
                    <h4>Image Resizer</h4>
                    <p>Batch resize coming soon!</p>
                </a>
                <a href="image-to-png.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-file-image-line"></i></div>
                    <h4>Image to PNG</h4>
                    <p>Single file conversion.</p>
                </a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-bulk" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 ToolzGarden. All processing done in-browser.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"></script>
    <script src="bulk-downloader.js"></script>
</body>
</html>

`

## case-converter.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Case Converter - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Convert text case.">
    <link rel="canonical" href="https://toolzgarden.com/tools/case-converter.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-caseconv" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Case Converter</h1>
            <p style="color: var(--text-secondary);">Convert to UPPERCASE, lowercase, etc.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <textarea id="text-input" rows="8" style="width:100%;padding:1rem;border-radius:0.5rem;" placeholder="Type here..."></textarea><div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem;"><button class="btn btn-primary" id="btn-upper">UPPERCASE</button><button class="btn btn-primary" id="btn-lower">lowercase</button><button class="btn btn-primary" id="btn-title">Title Case</button><button class="btn btn-primary" id="btn-sentence">Sentence case</button><button class="btn btn-primary" id="btn-alt">aLtErNaTiNg</button><button class="btn btn-primary" id="btn-rev">Reverse Case</button></div>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="copy-btn" class="btn btn-primary"><i class="ri-clipboard-line"></i> Copy</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-caseconv" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="case-converter.js"></script>
</body>
</html>
`

## character-counter.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character Counter - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Advanced char count.">
    <link rel="canonical" href="https://toolzgarden.com/tools/character-counter.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-charcount" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Character Counter</h1>
            <p style="color: var(--text-secondary);">Count letters, numbers, and symbols.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <textarea id="text-input" rows="10" style="width:100%;padding:1rem;border-radius:0.5rem;" placeholder="Type here..."></textarea><div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem;"><div>Total: <b id="total">0</b></div><div>Letters: <b id="letters">0</b></div><div>Numbers: <b id="numbers">0</b></div><div>Spaces: <b id="spaces">0</b></div><div>Symbols: <b id="symbols">0</b></div></div>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <div class="control-group"><label>Character Limit</label><input type="number" id="limit" value="0"></div><div id="warning" style="color:red;display:none;">Limit Exceeded!</div>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-charcount" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="character-counter.js"></script>
</body>
</html>
`

## html-encoder.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Encoder - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Encode/Decode HTML entities.">
    <link rel="canonical" href="https://toolzgarden.com/tools/html-encoder.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-htmlenc" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>HTML Encoder / Decoder</h1>
            <p style="color: var(--text-secondary);">Convert < > & to HTML entities.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div style="display:flex;gap:1rem;margin-bottom:1rem;"><button id="tab-enc" class="btn btn-primary">Encode</button><button id="tab-dec" class="btn btn-secondary">Decode</button></div><textarea id="text-input" rows="6" style="width:100%;padding:1rem;border-radius:0.5rem;" placeholder="Input..."></textarea><textarea id="text-output" rows="6" style="width:100%;padding:1rem;border-radius:0.5rem;margin-top:1rem;" readonly></textarea>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="copy-btn" class="btn btn-primary"><i class="ri-clipboard-line"></i> Copy</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-htmlenc" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="html-encoder.js"></script>
</body>
</html>
`

## image-compressor.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Compressor - Compress Image Online Free | ToolzGarden</title>
    <meta name="description" content="Compress image online free without losing quality. Reduce image file size (JPG, PNG, WebP) directly in your browser. 100% private, no upload required.">
    <link rel="canonical" href="https://toolzgarden.com/tools/image-compressor.html">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://toolzgarden.com/tools/image-compressor.html">
    <meta property="og:title" content="Image Compressor - Reduce Image File Size Online">
    <meta property="og:description" content="High-quality image compression in your browser. Fast, secure, and offline-capable.">
    <meta property="og:image" content="https://toolzgarden.com/assets/og-compressor.jpg">

    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link rel="manifest" href="../Favicon-Images/site.webmanifest">
    <link rel="shortcut icon" href="../Favicon-Images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- WebApplication Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "ToolzGarden Image Compressor",
      "url": "https://toolzgarden.com/tools/image-compressor.html",
      "description": "An online tool to compress image file sizes using the browser's Canvas API.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    </script>

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Is it safe to compress images on ToolzGarden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! ToolzGarden processes all images locally in your browser. Your files are never uploaded to our servers, making it 100% private and secure."
        }
      }, {
        "@type": "Question",
        "name": "What image formats are supported for compression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our compressor supports the most popular web formats including JPEG (JPG), PNG, and WebP."
        }
      }, {
        "@type": "Question",
        "name": "Will compressing my image reduce its quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compression typically involves a trade-off. However, our tool allows you to adjust the quality slider to find the perfect balance between file size and visual clarity."
        }
      }, {
        "@type": "Question",
        "name": "Can I use this image compressor offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, once the page is loaded, the tool works entirely offline as all processing happens using your browser's built-in APIs."
        }
      }]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img 
                        src="../Images/logo.png" 
                        alt="ToolzGarden Logo" 
                        style="height:48px; width:48px; object-fit:contain;"
                    />
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-compressor" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Image Compressor</h1>
            <p style="color: var(--text-secondary);">Reduce image file size while maintaining visual quality. Processed entirely in your browser.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area">
                    <div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div>
                    <h3>Drag & Drop your image here</h3>
                    <p>or click to browse from your device</p>
                    <input type="file" id="file-input" hidden accept="image/*">
                </div>

                <div id="preview-container" class="preview-container" style="display: none;">
                    <div class="preview-box">
                        <div class="preview-header">
                            <span>Original</span>
                            <span id="original-size">0 KB</span>
                        </div>
                        <div class="preview-content">
                            <img id="original-preview" src="" alt="Original Preview">
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="preview-header">
                            <span>Compressed</span>
                            <span id="compressed-size">0 KB</span>
                        </div>
                        <div class="preview-content">
                            <img id="compressed-preview" src="" alt="Compressed Preview">
                        </div>
                    </div>
                </div>
            </div>

            <aside class="tool-sidebar">
                <div class="controls-card">
                    <!-- DELETED: Quality slider removed per requirements -->

                    <div class="control-group">
                        <label>Target Format</label>
                        <select id="format">
                            <option value="image/jpeg">JPEG (Optimized)</option>
                            <option value="image/webp">WebP (Superior)</option>
                            <option value="image/png">PNG (Lossless)</option>
                        </select>
                    </div>

                    <button id="download-btn" class="btn btn-primary" disabled>
                        <i class="ri-download-2-line"></i> Download Compressed
                    </button>
                    
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; display: none;">
                        <i class="ri-restart-line"></i> Reset and Upload New
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item">
                <h3>Is this image compressor free to use?</h3>
                <p>Yes, ToolzGarden Image Compressor is completely free with no limits on the number of images you can process.</p>
            </div>
            <div class="faq-item">
                <h3>Does it reduce image dimensions?</h3>
                <p>No, this tool only reduces the file size by optimizing the image data. To change dimensions, use our <a href="image-resizer.html" style="color: var(--accent-primary); font-weight: 600;">Image Resizer</a>.</p>
            </div>
            <div class="faq-item">
                <h3>What is the best format for small file size?</h3>
                <p>WebP generally offers the best compression for the web, often resulting in file sizes 25-34% smaller than JPEG at equivalent quality.</p>
            </div>
            <div class="faq-item">
                <h3>Is my data safe?</h3>
                <p>Absolutely. We use the Canvas API to process images locally. No data is sent to any server.</p>
            </div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="image-resizer.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-aspect-ratio-line"></i></div>
                    <h4>Image Resizer</h4>
                    <p>Change dimensions quickly.</p>
                </a>
                <a href="image-to-webp.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-windy-line"></i></div>
                    <h4>Image to WebP</h4>
                    <p>Next-gen web format.</p>
                </a>
                <a href="image-cropper.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-crop-2-line"></i></div>
                    <h4>Image Cropper</h4>
                    <p>Perfect for social media.</p>
                </a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-compressor" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 ToolzGarden. All images processed locally.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"></script>
    <script src="image-compressor.js"></script>
</body>
</html>

`

## image-cropper.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Cropper - Crop Image Online | ToolzGarden</title>
    <meta name="description" content="Crop images online for free. Select specific areas of your photos easily. 100% private, all processing in-browser.">
    <link rel="canonical" href="https://toolzgarden.com/tools/image-cropper.html">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://toolzgarden.com/tools/image-cropper.html">
    <meta property="og:title" content="Image Cropper - Online Tool">
    <meta property="og:description" content="Crop your images with precision in your browser. Fast, secure, and offline-capable.">
    <meta property="og:image" content="https://toolzgarden.com/assets/og-cropper.jpg">

    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link rel="manifest" href="../Favicon-Images/site.webmanifest">
    <link rel="shortcut icon" href="../Favicon-Images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <style>
        .crop-wrapper {
            position: relative;
            display: inline-block;
            max-width: 100%;
            overflow: hidden;
            user-select: none;
        }
        #crop-canvas-overlay {
            position: absolute;
            top: 0;
            left: 0;
            cursor: crosshair;
        }
        .crop-info {
            background: var(--bg-tertiary);
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.85rem;
            font-weight: 600;
            margin-top: 1rem;
            display: none;
        }
    </style>

    <!-- WebApplication Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "ToolzGarden Image Cropper",
      "url": "https://toolzgarden.com/tools/image-cropper.html",
      "description": "An online tool to crop images using the browser's Canvas API.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img 
                        src="../Images/logo.png" 
                        alt="ToolzGarden Logo" 
                        style="height:48px; width:48px; object-fit:contain;"
                    />
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-cropper" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Image Cropper</h1>
            <p style="color: var(--text-secondary);">Select the perfect area of your image. Drag to select, click crop to apply.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area">
                    <div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div>
                    <h3>Drag & Drop your image here</h3>
                    <p>or click to browse from your device</p>
                    <input type="file" id="file-input" hidden accept="image/*">
                </div>

                <div id="preview-container" class="preview-container" style="display: none; grid-template-columns: 1fr;">
                    <div class="preview-box">
                        <div class="preview-header">
                            <span>Editor (Drag to Select Area)</span>
                            <span id="crop-dims">0 x 0</span>
                        </div>
                        <div class="preview-content" style="height: auto; padding: 2rem; background: var(--bg-tertiary);">
                            <div class="crop-wrapper" id="crop-wrapper">
                                <img id="original-preview" src="" alt="To Crop" style="max-height: 500px;">
                                <canvas id="crop-canvas-overlay"></canvas>
                            </div>
                        </div>
                    </div>
                    
                    <div class="preview-box" id="result-box" style="display: none;">
                        <div class="preview-header">
                            <span>Cropped Result</span>
                            <span id="final-dims">0 x 0</span>
                        </div>
                        <div class="preview-content">
                            <img id="output-preview" src="" alt="Cropped Preview">
                        </div>
                    </div>
                </div>
            </div>

            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="crop-btn" class="btn btn-primary" disabled>
                        <i class="ri-crop-2-line"></i> Apply Crop
                    </button>

                    <button id="download-btn" class="btn btn-primary" disabled style="margin-top: 1rem;">
                        <i class="ri-download-2-line"></i> Download Cropped
                    </button>
                    
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; display: none;">
                        <i class="ri-restart-line"></i> Reset and Upload New
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item">
                <h3>How do I crop an image?</h3>
                <p>Upload your image, then click and drag your mouse over the area you want to keep. Click "Apply Crop" to see the result.</p>
            </div>
            <div class="faq-item">
                <h3>What is the output format?</h3>
                <p>By default, cropped images are saved as high-quality PNG to preserve detail.</p>
            </div>
            <div class="faq-item">
                <h3>Can I crop to specific aspect ratios?</h3>
                <p>Currently, you can freely select any area. We are working on adding fixed aspect ratio presets soon!</p>
            </div>
            <div class="faq-item">
                <h3>Is it secure?</h3>
                <p>Yes, all image data remains on your computer. No data is sent to our servers.</p>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-cropper" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 ToolzGarden. All images processed locally.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"></script>
    <script src="image-cropper.js"></script>
</body>
</html>

`

## image-resizer.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Resizer - Resize Image Online | ToolzGarden</title>
    <meta name="description" content="Resize image online for free. Change image dimensions in pixels while maintaining aspect ratio. 100% private, no upload required.">
    <link rel="canonical" href="https://toolzgarden.com/tools/image-resizer.html">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://toolzgarden.com/tools/image-resizer.html">
    <meta property="og:title" content="Image Resizer - Resize Image Online">
    <meta property="og:description" content="Change image dimensions in your browser. Fast, secure, and offline-capable.">
    <meta property="og:image" content="https://toolzgarden.com/assets/og-resizer.jpg">

    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link rel="manifest" href="../Favicon-Images/site.webmanifest">
    <link rel="shortcut icon" href="../Favicon-Images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- WebApplication Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "ToolzGarden Image Resizer",
      "url": "https://toolzgarden.com/tools/image-resizer.html",
      "description": "An online tool to resize image dimensions using the browser's Canvas API.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    </script>

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Is it safe to resize images on ToolzGarden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! ToolzGarden processes all images locally in your browser. Your files are never uploaded to our servers."
        }
      }, {
        "@type": "Question",
        "name": "Can I maintain the aspect ratio while resizing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the tool has a 'Maintain aspect ratio' option checked by default to ensure your images don't look stretched."
        }
      }, {
        "@type": "Question",
        "name": "What formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support JPEG, PNG, and WebP for resizing."
        }
      }, {
        "@type": "Question",
        "name": "Does it work offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, once loaded, the tool works 100% offline."
        }
      }]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img 
                        src="../Images/logo.png" 
                        alt="ToolzGarden Logo" 
                        style="height:48px; width:48px; object-fit:contain;"
                    />
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-resizer" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Image Resizer</h1>
            <p style="color: var(--text-secondary);">Change image dimensions quickly and easily. Processed entirely in your browser.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area">
                    <div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div>
                    <h3>Drag & Drop your image here</h3>
                    <p>or click to browse from your device</p>
                    <input type="file" id="file-input" hidden accept="image/*">
                </div>

                <div id="preview-container" class="preview-container" style="display: none;">
                    <div class="preview-box">
                        <div class="preview-header">
                            <span>Original</span>
                            <span id="original-dims">0 x 0</span>
                        </div>
                        <div class="preview-content">
                            <img id="original-preview" src="" alt="Original Preview">
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="preview-header">
                            <span>Resized</span>
                            <span id="resized-dims">0 x 0</span>
                        </div>
                        <div class="preview-content">
                            <img id="resized-preview" src="" alt="Resized Preview">
                        </div>
                    </div>
                </div>
            </div>

            <aside class="tool-sidebar">
                <div class="controls-card">
                    <div class="control-group">
                        <label for="width">Width (px)</label>
                        <input type="number" id="width" placeholder="Width">
                    </div>

                    <div class="control-group">
                        <label for="height">Height (px)</label>
                        <input type="number" id="height" placeholder="Height">
                    </div>

                    <div class="control-group" style="display: flex; align-items: center; gap: 8px;">
                        <input type="checkbox" id="aspect-ratio" checked style="width: auto;">
                        <label for="aspect-ratio" style="margin: 0;">Maintain aspect ratio</label>
                    </div>

                    <button id="download-btn" class="btn btn-primary" disabled>
                        <i class="ri-download-2-line"></i> Download Resized
                    </button>
                    
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; display: none;">
                        <i class="ri-restart-line"></i> Reset and Upload New
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item">
                <h3>Will resizing affect image quality?</h3>
                <p>Upscaling an image (making it larger) will reduce quality. Downscaling (making it smaller) usually maintains visual clarity but reduces file size.</p>
            </div>
            <div class="faq-item">
                <h3>What is aspect ratio?</h3>
                <p>Aspect ratio is the relationship between the width and height of an image. Maintaining it prevents the image from looking stretched or squashed.</p>
            </div>
            <div class="faq-item">
                <h3>Is it free?</h3>
                <p>Yes, all tools on ToolzGarden are 100% free with no limits.</p>
            </div>
            <div class="faq-item">
                <h3>Are my images private?</h3>
                <p>Yes, your images are never uploaded to any server. Everything happens on your device.</p>
            </div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="image-compressor.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-contract-up-down-line"></i></div>
                    <h4>Image Compressor</h4>
                    <p>Reduce file size without losing quality.</p>
                </a>
                <a href="image-cropper.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-crop-2-line"></i></div>
                    <h4>Image Cropper</h4>
                    <p>Perfect for social media.</p>
                </a>
                <a href="image-to-png.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-file-image-line"></i></div>
                    <h4>Image to PNG</h4>
                    <p>Convert to high-quality PNG.</p>
                </a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-resizer" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 ToolzGarden. All images processed locally.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"></script>
    <script src="image-resizer.js"></script>
</body>
</html>

`

## image-to-base64.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image to Base64 - Convert Image to Base64 Online | ToolzGarden</title>
    <meta name="description" content="Convert your images to Base64 strings online easily. Perfect for developers needing data URIs for CSS or HTML. 100% private.">
    <link rel="canonical" href="https://toolzgarden.com/tools/image-to-base64.html">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://toolzgarden.com/tools/image-to-base64.html">
    <meta property="og:title" content="Image to Base64 - Online Converter">
    <meta property="og:description" content="Convert your images to Base64 strings directly in your browser. Fast, secure, and offline-capable.">
    <meta property="og:image" content="https://toolzgarden.com/assets/og-base64.jpg">

    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link rel="manifest" href="../Favicon-Images/site.webmanifest">
    <link rel="shortcut icon" href="../Favicon-Images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- WebApplication Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "ToolzGarden Image to Base64",
      "url": "https://toolzgarden.com/tools/image-to-base64.html",
      "description": "An online tool to convert images to Base64 strings using the browser's FileReader API.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    </script>

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is Base64?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Base64 is a way to represent binary data (like images) as a string of text characters. This is useful for embedding images directly into HTML or CSS files."
        }
      }, {
        "@type": "Question",
        "name": "How is this useful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It eliminates the need for separate image files, reducing HTTP requests and making it easier to share snippets of code that include images."
        }
      }, {
        "@type": "Question",
        "name": "Is my data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, everything happens locally. We don't see or store your images or the generated Base64 strings."
        }
      }, {
        "@type": "Question",
        "name": "Is there a limit on image size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Base64 strings are about 33% larger than the original binary data. Large images will result in very long strings which may slow down your browser or editor."
        }
      }]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img 
                        src="../Images/logo.png" 
                        alt="ToolzGarden Logo" 
                        style="height:48px; width:48px; object-fit:contain;"
                    />
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-base64" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Image to Base64</h1>
            <p style="color: var(--text-secondary);">Convert your images into text-based data URIs for direct embedding.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area">
                    <div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div>
                    <h3>Drag & Drop your image here</h3>
                    <p>or click to browse from your device</p>
                    <input type="file" id="file-input" hidden accept="image/*">
                </div>

                <div id="output-container" class="preview-container" style="display: none; grid-template-columns: 1fr;">
                    <div class="preview-box">
                        <div class="preview-header">
                            <span>Base64 String</span>
                            <span id="char-count">0 characters</span>
                        </div>
                        <div class="preview-content" style="height: auto; padding: 0;">
                            <textarea id="base64-output" readonly style="width: 100%; height: 300px; padding: 1rem; border: none; background: var(--bg-secondary); color: var(--text-primary); font-family: monospace; font-size: 0.8rem; resize: none;"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="copy-btn" class="btn btn-primary" disabled>
                        <i class="ri-clipboard-line"></i> Copy to Clipboard
                    </button>
                    
                    <button id="download-txt-btn" class="btn btn-secondary" style="margin-top: 1rem;" disabled>
                        <i class="ri-file-text-line"></i> Download as .txt
                    </button>

                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; display: none;">
                        <i class="ri-restart-line"></i> Reset and Upload New
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item">
                <h3>What is a Data URI?</h3>
                <p>A data URI is a string that represents an entire file. It starts with `data:image/png;base64,...` and can be used in HTML `src` attributes or CSS `background-image` properties.</p>
            </div>
            <div class="faq-item">
                <h3>Is Base64 good for SEO?</h3>
                <p>Using a few small Base64 images can improve load speed by reducing requests. However, too many can increase the total size of your HTML, which could be negative for SEO if not balanced correctly.</p>
            </div>
            <div class="faq-item">
                <h3>Which formats are supported?</h3>
                <p>All image formats supported by your browser can be converted to Base64.</p>
            </div>
            <div class="faq-item">
                <h3>Can I convert images back from Base64?</h3>
                <p>Yes, any Base64 converter or even a simple browser address bar can turn a Base64 string back into an image.</p>
            </div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="image-to-png.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-file-image-line"></i></div>
                    <h4>Image to PNG</h4>
                    <p>Clean lossless conversion.</p>
                </a>
                <a href="image-compressor.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-contract-up-down-line"></i></div>
                    <h4>Image Compressor</h4>
                    <p>Optimize file size.</p>
                </a>
                <a href="bulk-downloader.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-download-cloud-2-line"></i></div>
                    <h4>Bulk Downloader</h4>
                    <p>Process multiple files.</p>
                </a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-base64" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 ToolzGarden. All processing done in-browser.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"></script>
    <script src="image-to-base64.js"></script>
</body>
</html>

`

## image-to-jpg.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image to JPG - Convert Image to JPG Free | ToolzGarden</title>
    <meta name="description" content="Convert any image format to compatible JPG online. Support for PNG, WebP, GIF and more. 100% private, no upload required.">
    <link rel="canonical" href="https://toolzgarden.com/tools/image-to-jpg.html">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://toolzgarden.com/tools/image-to-jpg.html">
    <meta property="og:title" content="Image to JPG - Online Converter">
    <meta property="og:description" content="Convert your images to JPG format directly in your browser. Fast, secure, and offline-capable.">
    <meta property="og:image" content="https://toolzgarden.com/assets/og-jpg.jpg">

    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link rel="manifest" href="../Favicon-Images/site.webmanifest">
    <link rel="shortcut icon" href="../Favicon-Images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- WebApplication Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "ToolzGarden Image to JPG",
      "url": "https://toolzgarden.com/tools/image-to-jpg.html",
      "description": "An online tool to convert images to JPG format using the browser's Canvas API.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    </script>

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Why convert to JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JPG is the most widely compatible image format, perfect for sharing and web use where file size is important."
        }
      }, {
        "@type": "Question",
        "name": "What happens to transparent backgrounds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JPG does not support transparency. Our tool automatically fills transparent areas with a clean white background."
        }
      }, {
        "@type": "Question",
        "name": "Is my privacy protected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all processing happens in your browser. No images are uploaded to any server."
        }
      }, {
        "@type": "Question",
        "name": "Is it free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ToolzGarden is completely free for everyone."
        }
      }]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img 
                        src="../Images/logo.png" 
                        alt="ToolzGarden Logo" 
                        style="height:48px; width:48px; object-fit:contain;"
                    />
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-jpg" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Image to JPG</h1>
            <p style="color: var(--text-secondary);">Convert any image format to standard JPG with white background padding.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area">
                    <div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div>
                    <h3>Drag & Drop your image here</h3>
                    <p>or click to browse from your device</p>
                    <input type="file" id="file-input" hidden accept="image/*">
                </div>

                <div id="preview-container" class="preview-container" style="display: none;">
                    <div class="preview-box">
                        <div class="preview-header">
                            <span id="original-format">Original</span>
                            <span id="original-size">0 KB</span>
                        </div>
                        <div class="preview-content">
                            <img id="original-preview" src="" alt="Original Preview">
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="preview-header">
                            <span>Output (JPG)</span>
                            <span id="output-size">0 KB</span>
                        </div>
                        <div class="preview-content">
                            <img id="output-preview" src="" alt="JPG Preview">
                        </div>
                    </div>
                </div>
            </div>

            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="download-btn" class="btn btn-primary" disabled>
                        <i class="ri-download-2-line"></i> Download JPG
                    </button>
                    
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; display: none;">
                        <i class="ri-restart-line"></i> Reset and Upload New
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item">
                <h3>Does JPG reduce quality?</h3>
                <p>JPG uses lossy compression, but our tool uses a high quality setting (92%) to ensure the difference is barely noticeable while keeping file size small.</p>
            </div>
            <div class="faq-item">
                <h3>Can I convert PNG to JPG?</h3>
                <p>Yes, this is the most common use case. Transparent areas will be filled with white.</p>
            </div>
            <div class="faq-item">
                <h3>What is the file size limit?</h3>
                <p>There is no hard limit, but performance depends on your device's memory since all processing is local.</p>
            </div>
            <div class="faq-item">
                <h3>Is it mobile friendly?</h3>
                <p>Yes, ToolzGarden works perfectly on smartphones and tablets.</p>
            </div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="image-to-png.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-file-image-line"></i></div>
                    <h4>Image to PNG</h4>
                    <p>Convert with transparency.</p>
                </a>
                <a href="image-to-webp.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-windy-line"></i></div>
                    <h4>Image to WebP</h4>
                    <p>Next-gen web optimization.</p>
                </a>
                <a href="image-compressor.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-contract-up-down-line"></i></div>
                    <h4>Image Compressor</h4>
                    <p>Shrink images instantly.</p>
                </a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-jpg" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 ToolzGarden. All images processed locally.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"></script>
    <script src="image-to-jpg.js"></script>
</body>
</html>

`

## image-to-pdf.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image to PDF - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Convert images to PDF.">
    <link rel="canonical" href="https://toolzgarden.com/tools/image-to-pdf.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- PDF.js for reading PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
    <!-- jsPDF for creating PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <!-- PDF-lib for merging/splitting -->
    <script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
    
    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-imgtopdf" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Image to PDF</h1>
            <p style="color: var(--text-secondary);">Convert JPG, PNG to a single PDF.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area"><div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div><h3>Upload Images</h3><input type="file" id="file-input" hidden accept="image/*" multiple></div><div id="preview-grid" style="display:grid;gap:1rem;margin-top:1rem;"></div>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="download-btn" class="btn btn-primary" disabled><i class="ri-download-2-line"></i> Download PDF</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-imgtopdf" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="image-to-pdf.js"></script>
</body>
</html>
`

## image-to-png.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image to PNG - Convert Image to PNG Free | ToolzGarden</title>
    <meta name="description" content="Convert any image format to high-quality PNG online. Support for JPG, WebP, GIF and more. 100% private, no upload required.">
    <link rel="canonical" href="https://toolzgarden.com/tools/image-to-png.html">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://toolzgarden.com/tools/image-to-png.html">
    <meta property="og:title" content="Image to PNG - Online Converter">
    <meta property="og:description" content="Convert your images to PNG format directly in your browser. Fast, secure, and offline-capable.">
    <meta property="og:image" content="https://toolzgarden.com/assets/og-png.jpg">

    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link rel="manifest" href="../Favicon-Images/site.webmanifest">
    <link rel="shortcut icon" href="../Favicon-Images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- WebApplication Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "ToolzGarden Image to PNG",
      "url": "https://toolzgarden.com/tools/image-to-png.html",
      "description": "An online tool to convert images to PNG format using the browser's Canvas API.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    </script>

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Why convert to PNG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PNG is a lossless format that supports transparency, making it ideal for logos and graphics."
        }
      }, {
        "@type": "Question",
        "name": "Will my images be uploaded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, ToolzGarden processes everything locally in your browser. Your images never leave your computer."
        }
      }, {
        "@type": "Question",
        "name": "What formats can I convert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can convert JPG, WebP, BMP, and GIF to PNG."
        }
      }, {
        "@type": "Question",
        "name": "Is it free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is 100% free with no limits."
        }
      }]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img 
                        src="../Images/logo.png" 
                        alt="ToolzGarden Logo" 
                        style="height:48px; width:48px; object-fit:contain;"
                    />
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-png" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Image to PNG</h1>
            <p style="color: var(--text-secondary);">Convert any image to high-quality PNG with transparency support.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area">
                    <div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div>
                    <h3>Drag & Drop your image here</h3>
                    <p>or click to browse from your device</p>
                    <input type="file" id="file-input" hidden accept="image/*">
                </div>

                <div id="preview-container" class="preview-container" style="display: none;">
                    <div class="preview-box">
                        <div class="preview-header">
                            <span id="original-format">Original</span>
                            <span id="original-size">0 KB</span>
                        </div>
                        <div class="preview-content">
                            <img id="original-preview" src="" alt="Original Preview">
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="preview-header">
                            <span>Output (PNG)</span>
                            <span id="output-size">0 KB</span>
                        </div>
                        <div class="preview-content">
                            <img id="output-preview" src="" alt="PNG Preview">
                        </div>
                    </div>
                </div>
            </div>

            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="download-btn" class="btn btn-primary" disabled>
                        <i class="ri-download-2-line"></i> Download PNG
                    </button>
                    
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; display: none;">
                        <i class="ri-restart-line"></i> Reset and Upload New
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item">
                <h3>Is this conversion lossless?</h3>
                <p>Yes, PNG is a lossless format, so the quality of the image is preserved during conversion.</p>
            </div>
            <div class="faq-item">
                <h3>Can I convert WebP to PNG?</h3>
                <p>Absolutely. Just upload your WebP file and download it as a PNG.</p>
            </div>
            <div class="faq-item">
                <h3>Does it support transparency?</h3>
                <p>Yes, if the source image has transparency, it will be maintained in the PNG output.</p>
            </div>
            <div class="faq-item">
                <h3>Where are my files stored?</h3>
                <p>They are not stored anywhere. All processing is done in your browser's memory and deleted when you close the tab.</p>
            </div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="image-to-jpg.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-file-image-line"></i></div>
                    <h4>Image to JPG</h4>
                    <p>Convert to compatible JPG.</p>
                </a>
                <a href="image-to-webp.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-windy-line"></i></div>
                    <h4>Image to WebP</h4>
                    <p>Optimized for web use.</p>
                </a>
                <a href="image-compressor.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-contract-up-down-line"></i></div>
                    <h4>Image Compressor</h4>
                    <p>Reduce file size easily.</p>
                </a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-png" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 ToolzGarden. All images processed locally.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"></script>
    <script src="image-to-png.js"></script>
</body>
</html>

`

## image-to-webp.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image to WebP - Convert Image to WebP Free | ToolzGarden</title>
    <meta name="description" content="Convert any image format to WebP online for better web performance. Support for PNG, JPG, GIF and more. 100% private, no upload required.">
    <link rel="canonical" href="https://toolzgarden.com/tools/image-to-webp.html">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://toolzgarden.com/tools/image-to-webp.html">
    <meta property="og:title" content="Image to WebP - Online Converter">
    <meta property="og:description" content="Convert your images to WebP format directly in your browser. Fast, secure, and offline-capable.">
    <meta property="og:image" content="https://toolzgarden.com/assets/og-webp.jpg">

    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link rel="manifest" href="../Favicon-Images/site.webmanifest">
    <link rel="shortcut icon" href="../Favicon-Images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- WebApplication Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "ToolzGarden Image to WebP",
      "url": "https://toolzgarden.com/tools/image-to-webp.html",
      "description": "An online tool to convert images to WebP format using the browser's Canvas API.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    </script>

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Why use WebP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebP provides superior lossless and lossy compression for images on the web, making sites load faster."
        }
      }, {
        "@type": "Question",
        "name": "Is WebP supported by all browsers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modern browsers like Chrome, Firefox, Safari, and Edge all support WebP format."
        }
      }, {
        "@type": "Question",
        "name": "Is my privacy safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All processing is done locally in your browser. No files are ever sent to our servers."
        }
      }, {
        "@type": "Question",
        "name": "Can I convert PNG with transparency to WebP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, WebP supports transparency just like PNG but with much smaller file sizes."
        }
      }]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img 
                        src="../Images/logo.png" 
                        alt="ToolzGarden Logo" 
                        style="height:48px; width:48px; object-fit:contain;"
                    />
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-webp" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Image to WebP</h1>
            <p style="color: var(--text-secondary);">Convert any image format to high-performance WebP for the modern web.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area">
                    <div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div>
                    <h3>Drag & Drop your image here</h3>
                    <p>or click to browse from your device</p>
                    <input type="file" id="file-input" hidden accept="image/*">
                </div>

                <div id="preview-container" class="preview-container" style="display: none;">
                    <div class="preview-box">
                        <div class="preview-header">
                            <span id="original-format">Original</span>
                            <span id="original-size">0 KB</span>
                        </div>
                        <div class="preview-content">
                            <img id="original-preview" src="" alt="Original Preview">
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="preview-header">
                            <span>Output (WebP)</span>
                            <span id="output-size">0 KB</span>
                        </div>
                        <div class="preview-content">
                            <img id="output-preview" src="" alt="WebP Preview">
                        </div>
                    </div>
                </div>
            </div>

            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="download-btn" class="btn btn-primary" disabled>
                        <i class="ri-download-2-line"></i> Download WebP
                    </button>
                    
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; display: none;">
                        <i class="ri-restart-line"></i> Reset and Upload New
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item">
                <h3>What is WebP?</h3>
                <p>WebP is a modern image format that provides superior lossless and lossy compression for images on the web.</p>
            </div>
            <div class="faq-item">
                <h3>Can I convert JPG to WebP?</h3>
                <p>Yes, converting JPG to WebP can significantly reduce the file size of your images without a noticeable loss in quality.</p>
            </div>
            <div class="faq-item">
                <h3>Is it secure?</h3>
                <p>Yes, we value your privacy. All processing is done on your machine, and your images are never uploaded.</p>
            </div>
            <div class="faq-item">
                <h3>Is it free?</h3>
                <p>Yes, ToolzGarden's Image to WebP tool is completely free to use.</p>
            </div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="image-to-png.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-file-image-line"></i></div>
                    <h4>Image to PNG</h4>
                    <p>High-quality conversion.</p>
                </a>
                <a href="image-to-jpg.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-file-image-line"></i></div>
                    <h4>Image to JPG</h4>
                    <p>Widely compatible JPG.</p>
                </a>
                <a href="image-compressor.html" class="tool-card">
                    <div class="tool-icon"><i class="ri-contract-up-down-line"></i></div>
                    <h4>Image Compressor</h4>
                    <p>Optimize image sizes.</p>
                </a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-webp" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 ToolzGarden. All images processed locally.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"></script>
    <script src="image-to-webp.js"></script>
</body>
</html>

`

## json-formatter.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON Formatter - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Format JSON.">
    <link rel="canonical" href="https://toolzgarden.com/tools/json-formatter.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-jsonformat" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>JSON Formatter</h1>
            <p style="color: var(--text-secondary);">Beautify and validate JSON.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <textarea id="text-input" rows="8" style="width:100%;padding:1rem;border-radius:0.5rem;font-family:monospace;" placeholder='{"a":1}'></textarea><p id="error-msg" style="color:red;"></p><textarea id="text-output" rows="8" style="width:100%;padding:1rem;border-radius:0.5rem;font-family:monospace;margin-top:1rem;" readonly></textarea>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <div class="control-group"><label>Indent</label><select id="indent"><option value="2">2 Spaces</option><option value="4">4 Spaces</option><option value="tab">Tab</option></select></div><button id="format-btn" class="btn btn-primary" style="margin-bottom:1rem;width:100%;">Format JSON</button><button id="copy-btn" class="btn btn-primary" style="margin-bottom:1rem;width:100%;"><i class="ri-clipboard-line"></i> Copy</button><button id="download-btn" class="btn btn-secondary" style="margin-bottom:1rem;width:100%;"><i class="ri-download-line"></i> Download .json</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-jsonformat" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="json-formatter.js"></script>
</body>
</html>
`

## json-minifier.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON Minifier - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Minify JSON.">
    <link rel="canonical" href="https://toolzgarden.com/tools/json-minifier.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-jsonmin" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>JSON Minifier</h1>
            <p style="color: var(--text-secondary);">Compress JSON by removing whitespace.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <textarea id="text-input" rows="8" style="width:100%;padding:1rem;border-radius:0.5rem;font-family:monospace;" placeholder='{"a":  1}'></textarea><div id="size-info" style="margin:1rem 0;"></div><textarea id="text-output" rows="8" style="width:100%;padding:1rem;border-radius:0.5rem;font-family:monospace;" readonly></textarea>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="minify-btn" class="btn btn-primary" style="margin-bottom:1rem;width:100%;">Minify JSON</button><button id="copy-btn" class="btn btn-primary" style="margin-bottom:1rem;width:100%;"><i class="ri-clipboard-line"></i> Copy</button><button id="download-btn" class="btn btn-secondary" style="margin-bottom:1rem;width:100%;"><i class="ri-download-line"></i> Download .json</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-jsonmin" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="json-minifier.js"></script>
</body>
</html>
`

## pdf-compress.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Compress - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Reduce PDF file size.">
    <link rel="canonical" href="https://toolzgarden.com/tools/pdf-compress.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- PDF.js for reading PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
    <!-- jsPDF for creating PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <!-- PDF-lib for merging/splitting -->
    <script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
    
    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-pdfcompress" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>PDF Compressor</h1>
            <p style="color: var(--text-secondary);">Compress your PDF files in the browser.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area"><div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div><h3>Drag & Drop PDF here</h3><input type="file" id="file-input" hidden accept=".pdf"></div><div id="preview" style="display:none;margin-top:1rem;"><p>Original: <span id="orig-size"></span></p><p>Compressed: <span id="comp-size"></span></p></div>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="download-btn" class="btn btn-primary" disabled><i class="ri-download-2-line"></i> Download Compressed</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-pdfcompress" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="pdf-compress.js"></script>
</body>
</html>
`

## pdf-merge.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Merge - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Merge multiple PDFs.">
    <link rel="canonical" href="https://toolzgarden.com/tools/pdf-merge.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- PDF.js for reading PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
    <!-- jsPDF for creating PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <!-- PDF-lib for merging/splitting -->
    <script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
    
    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-pdfmerge" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>PDF Merger</h1>
            <p style="color: var(--text-secondary);">Merge multiple PDFs into one.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area"><div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div><h3>Upload PDFs</h3><input type="file" id="file-input" hidden accept=".pdf" multiple></div><ul id="file-list" style="margin-top:1rem;list-style:none;"></ul>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="download-btn" class="btn btn-primary" disabled><i class="ri-download-2-line"></i> Download Merged</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-pdfmerge" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="pdf-merge.js"></script>
</body>
</html>
`

## pdf-page-remover.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Page Remover - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Remove PDF pages.">
    <link rel="canonical" href="https://toolzgarden.com/tools/pdf-page-remover.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- PDF.js for reading PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
    <!-- jsPDF for creating PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <!-- PDF-lib for merging/splitting -->
    <script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
    
    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-pdfremover" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>PDF Page Remover</h1>
            <p style="color: var(--text-secondary);">Delete specific pages from PDF.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area"><div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div><h3>Upload PDF</h3><input type="file" id="file-input" hidden accept=".pdf"></div><div id="pages-grid" style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:1rem;"></div>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="download-btn" class="btn btn-primary" disabled><i class="ri-download-2-line"></i> Download PDF</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-pdfremover" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="pdf-page-remover.js"></script>
</body>
</html>
`

## pdf-split.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Split - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Extract pages from PDF.">
    <link rel="canonical" href="https://toolzgarden.com/tools/pdf-split.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- PDF.js for reading PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
    <!-- jsPDF for creating PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <!-- PDF-lib for merging/splitting -->
    <script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
    
    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-pdfsplit" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>PDF Splitter</h1>
            <p style="color: var(--text-secondary);">Split your PDF into separate pages.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area"><div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div><h3>Upload PDF</h3><input type="file" id="file-input" hidden accept=".pdf"></div><div id="page-info" style="display:none;margin-top:1rem;">Total pages: <span id="total-pages"></span></div>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <div class="control-group"><label>From Page</label><input type="number" id="from-page" min="1"></div><div class="control-group"><label>To Page</label><input type="number" id="to-page" min="1"></div><button id="download-btn" class="btn btn-primary" disabled><i class="ri-download-2-line"></i> Download Extracted</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-pdfsplit" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="pdf-split.js"></script>
</body>
</html>
`

## pdf-to-image.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF to Image - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Convert PDF to PNG.">
    <link rel="canonical" href="https://toolzgarden.com/tools/pdf-to-image.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- PDF.js for reading PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
    <!-- jsPDF for creating PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <!-- PDF-lib for merging/splitting -->
    <script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
    
    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-pdftoimg" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>PDF to Image</h1>
            <p style="color: var(--text-secondary);">Convert all pages of your PDF to PNG images.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div id="drop-zone" class="upload-area"><div class="upload-icon"><i class="ri-upload-cloud-2-line"></i></div><h3>Upload PDF</h3><input type="file" id="file-input" hidden accept=".pdf"></div><div id="preview-grid" style="display:grid;gap:1rem;margin-top:1rem;"></div>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="download-btn" class="btn btn-primary" disabled><i class="ri-download-2-line"></i> Download All Images</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-pdftoimg" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="pdf-to-image.js"></script>
</body>
</html>
`

## remove-duplicates.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remove Duplicates - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Remove duplicate lines.">
    <link rel="canonical" href="https://toolzgarden.com/tools/remove-duplicates.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-removedup" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Remove Duplicates</h1>
            <p style="color: var(--text-secondary);">Clean up lists by removing duplicate lines.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <textarea id="text-input" rows="6" style="width:100%;padding:1rem;border-radius:0.5rem;" placeholder="Item 1\nItem 2\nItem 1"></textarea><textarea id="text-output" rows="6" style="width:100%;padding:1rem;border-radius:0.5rem;margin-top:1rem;" readonly></textarea><p id="status"></p>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <div class="control-group"><label><input type="checkbox" id="case-sens"> Case Sensitive</label><br><label><input type="checkbox" id="trim" checked> Trim Whitespace</label><br><label><input type="checkbox" id="sort"> Sort Alphabetically</label></div><button id="process-btn" class="btn btn-primary">Remove Duplicates</button><button id="copy-btn" class="btn btn-primary" style="margin-top:1rem;"><i class="ri-clipboard-line"></i> Copy</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-removedup" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="remove-duplicates.js"></script>
</body>
</html>
`

## text-reverser.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Reverser - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Reverse text instantly.">
    <link rel="canonical" href="https://toolzgarden.com/tools/text-reverser.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-textreverser" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Text Reverser</h1>
            <p style="color: var(--text-secondary);">Reverse strings and words.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <textarea id="text-input" rows="5" style="width:100%;padding:1rem;border-radius:0.5rem;" placeholder="Type here..."></textarea><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin:1rem 0;"><button class="btn btn-primary" id="btn-rev-text">Reverse Text</button><button class="btn btn-primary" id="btn-rev-words">Reverse Words</button><button class="btn btn-primary" id="btn-flip">Upside Down</button></div><textarea id="text-output" rows="5" style="width:100%;padding:1rem;border-radius:0.5rem;" readonly></textarea>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="copy-btn" class="btn btn-primary"><i class="ri-clipboard-line"></i> Copy</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-textreverser" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="text-reverser.js"></script>
</body>
</html>
`

## text-to-slug.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text to Slug - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Convert text to URL slug.">
    <link rel="canonical" href="https://toolzgarden.com/tools/text-to-slug.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-slug" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Text to Slug</h1>
            <p style="color: var(--text-secondary);">Create SEO-friendly URL slugs.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <input type="text" id="text-input" style="width:100%;padding:1rem;border-radius:0.5rem;" placeholder="Enter title..."><div style="margin-top:1rem;padding:1rem;background:var(--bg-secondary);word-break:break-all;" id="output"></div>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <div class="control-group"><label>Separator</label><select id="sep"><option value="-">Hyphen (-)</option><option value="_">Underscore (_)</option></select></div><div class="control-group"><label><input type="checkbox" id="lower" checked> Lowercase</label></div><button id="copy-btn" class="btn btn-primary"><i class="ri-clipboard-line"></i> Copy</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-slug" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="text-to-slug.js"></script>
</body>
</html>
`

## url-encoder.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Encoder - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Encode/Decode URLs.">
    <link rel="canonical" href="https://toolzgarden.com/tools/url-encoder.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-urlenc" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>URL Encoder / Decoder</h1>
            <p style="color: var(--text-secondary);">Safe URL encoding and decoding.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <div style="display:flex;gap:1rem;margin-bottom:1rem;"><button id="tab-enc" class="btn btn-primary">Encode</button><button id="tab-dec" class="btn btn-secondary">Decode</button></div><textarea id="text-input" rows="6" style="width:100%;padding:1rem;border-radius:0.5rem;" placeholder="Input..."></textarea><textarea id="text-output" rows="6" style="width:100%;padding:1rem;border-radius:0.5rem;margin-top:1rem;" readonly></textarea>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    <button id="copy-btn" class="btn btn-primary"><i class="ri-clipboard-line"></i> Copy</button>
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-urlenc" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="url-encoder.js"></script>
</body>
</html>
`

## word-counter.html
`html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Counter - Free Online Tool | ToolzGarden</title>
    <meta name="description" content="Count words and chars.">
    <link rel="canonical" href="https://toolzgarden.com/tools/word-counter.html">
    
    <link rel="apple-touch-icon" sizes="180x180" href="../Favicon-Images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Favicon-Images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Favicon-Images/favicon-16x16.png">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">

    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it private?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% private." } },
        { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free." } },
        { "@type": "Question", "name": "Does it work offline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes." } },
        { "@type": "Question", "name": "Any uploads needed?", "acceptedAnswer": { "@type": "Answer", "text": "No uploads needed." } }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="../index.html" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                    <img src="../Images/logo.png" alt="Logo" style="height:48px; width:48px; object-fit:contain;"/>
                    <span style="font-weight:700; font-size:1.8rem; color:#2563EB;">ToolzGarden</span>
                </a>
                <div class="nav-actions">
                    <button id="theme-toggle" class="theme-toggle" title="Toggle Dark Mode">
                        <i class="ri-moon-line"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>

    
<div class="full-page-wrapper">

  <!-- LEFT AD SIDEBAR -->
  <aside class="side-ad-container left-side-ad">
    <div id="left-ad-wordcount" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste left ad unit code here later -->
    </div>
  </aside>

  <main class="center-main-content">
        <section style="padding: 2rem 0;">
            <span class="badge-private"><i class="ri-shield-check-fill"></i> 100% Private, No Upload</span>
            <h1>Word Counter</h1>
            <p style="color: var(--text-secondary);">Count words, characters, and reading time.</p>
        </section>

        <div class="tool-layout">
            <div class="tool-main">
                <textarea id="text-input" rows="10" style="width:100%;padding:1rem;border-radius:0.5rem;" placeholder="Type here..."></textarea><div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem;"><div>Words: <b id="words">0</b></div><div>Chars: <b id="chars">0</b></div><div>Chars (no space): <b id="chars-ns">0</b></div><div>Sentences: <b id="sents">0</b></div><div>Paragraphs: <b id="paras">0</b></div><div>Reading Time: <b id="read-time">0</b> min</div></div>
            </div>
            <aside class="tool-sidebar">
                <div class="controls-card">
                    
                    <button id="reset-btn" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">
                        <i class="ri-restart-line"></i> Reset Inputs
                    </button>
                </div>
            </aside>
        </div>

        <section class="faq-section">
            <h2 style="margin-bottom: 2rem;">Frequently Asked Questions</h2>
            <div class="faq-item"><h3>Is it private?</h3><p>Yes, 100% private. Processing happens in your browser.</p></div>
            <div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free to use without limits.</p></div>
            <div class="faq-item"><h3>Does it work offline?</h3><p>Yes, once loaded you can use it without internet.</p></div>
            <div class="faq-item"><h3>Any uploads needed?</h3><p>No, your files stay on your device.</p></div>
        </section>

        <section style="padding: 4rem 0; border-top: 1px solid var(--border-color);">
            <h3>Related Tools</h3>
            <div class="tool-grid" style="padding-top: 2rem;">
                <a href="pdf-compress.html" class="tool-card"><div class="tool-icon"><i class="ri-file-pdf-line"></i></div><h4>PDF Compress</h4><p>Reduce PDF size.</p></a>
                <a href="word-counter.html" class="tool-card"><div class="tool-icon"><i class="ri-text"></i></div><h4>Word Counter</h4><p>Count words.</p></a>
                <a href="json-formatter.html" class="tool-card"><div class="tool-icon"><i class="ri-braces-line"></i></div><h4>JSON Formatter</h4><p>Format JSON.</p></a>
            </div>
        </section>
      </main>

  <!-- RIGHT AD SIDEBAR -->
  <aside class="side-ad-container right-side-ad">
    <div id="right-ad-wordcount" class="modern-ad-placeholder">
      <span class="ad-label">ADVERTISEMENT</span>
      <!-- Paste right ad unit code here later -->
    </div>
  </aside>

</div>

    <footer>
        <div class="container">
            <div class="footer-bottom"><p>&copy; 2025 ToolzGarden. All rights reserved.</p></div>
        </div>
    </footer>
    <script src="../script.js"></script>
    <script src="word-counter.js"></script>
</body>
</html>
`

