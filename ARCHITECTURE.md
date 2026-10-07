# ToolzGarden - Architecture

## 1. Architecture Summary

ToolzGarden employs a **100% Client-Side** architecture. 
It is a static website consisting of plain HTML, CSS, and JavaScript. There is no build step, no bundler, no server-side framework, and no database. All file processing, logic, and state management occur locally within the user's browser leveraging Web APIs and WebAssembly (WASM).

---

## 2. High-Level Architecture Diagram

```text
                           ┌─────────────────────────────────┐
                           │           User Browser           │
                           └────────────────┬────────────────┘
                                            │ HTTP/HTTPS
                                            ▼
                    ┌───────────────────────────────────────────┐
                    │         Static File Host (Netlify)         │
                    │   _headers · _redirects · sitemap.xml      │
                    └──────────────────┬────────────────────────┘
                                       │
                    ┌──────────────────▼────────────────────────┐
                    │              ToolzGarden                    │
                    │  index.html · style.css · script.js        │
                    │  about/contact/privacy/terms/404.html       │
                    └──────────────────┬────────────────────────┘
                                       │
           ┌───────────────────────────┼────────────────────────────┐
           │                           │                            │
           ▼                           ▼                            ▼
   ┌───────────────┐         ┌──────────────────┐        ┌──────────────────┐
   │  Image Tools  │         │   PDF Tools       │        │ Text/Dev/SEO/    │
   │  (11 tools)   │         │   (6 tools)       │        │ Social Tools     │
   └───────┬───────┘         └────────┬──────────┘        │ (16 tools)       │
           │                          │                    └──────────────────┘
    ┌──────┴──────┐          ┌────────┴──────┐
    │Canvas API   │          │  pdf-lib.js   │        All text/dev tools:
    │FileReader   │          │  pdf.js       │        ─ Pure JavaScript
    │URL.create   │          │  jsPDF        │        ─ No external libs
    │ObjectURL()  │          └───────────────┘        ─ btoa/atob, JSON,
    └──────┬──────┘                                     encodeURIComponent
           │
    ┌──────┴────────────────────────────┐
    │  Special Processing Tools          │
    │                                    │
    │  Image to Text:                    │
    │  ┌──────────────────────────────┐ │
    │  │ Tesseract.js (WASM via CDN)  │ │
    │  │ + Language .traineddata CDN  │ │
    │  └──────────────────────────────┘ │
    │                                    │
    │  Image Upscaler:                   │
    │  ┌──────────────────────────────┐ │
    │  │ UpscalerJS + ONNX Runtime    │ │
    │  │ (WASM + Models served LOCAL) │ │
    │  │ tools/models/ (~200+ MB)     │ │
    │  └──────────────────────────────┘ │
    │                                    │
    │  Remove Metadata:                  │
    │  ┌──────────────────────────────┐ │
    │  │ exif.js (read) +             │ │
    │  │ piexif.js (strip JPEG)  +    │ │
    │  │ Canvas (strip PNG/WebP)      │ │
    │  └──────────────────────────────┘ │
    └───────────────────────────────────┘

     External CDN calls (read-only, no data upload):
     ┌─────────────────────────────────────────────────┐
     │ fonts.googleapis.com   → Inter font             │
     │ cdn.jsdelivr.net       → RemixIcons, Tesseract  │
     │ cdnjs.cloudflare.com   → pdf.js worker          │
     │ unpkg.com              → pdf-lib, qr-styling     │
     │ img.youtube.com        → Thumbnail images only   │
     └─────────────────────────────────────────────────┘
```

---

## 3. Application Layers

```text
Presentation (HTML / CSS)
↓
Application Logic (Vanilla JS Event Listeners & DOM Manipulation)
↓
Processing (Browser APIs, Canvas, WASM, External Libs)
↓
Storage (In-memory Blobs, localStorage for theme)
```

- **Presentation:** Rendered by static HTML files with styling provided by `style.css`.
- **Application Logic:** Tool-specific logic sits in `tools/tool-name.js`. Global logic (theme, search, nav) sits in `script.js`.
- **Processing:** Handled by native browser engines (V8/SpiderMonkey) and WebAssembly environments running client-side. No backend processing exists.
- **Storage:** Blobs/DataURLs exist in temporary RAM. `localStorage` saves the theme state. No server storage exists.

---

## 4. Directory Architecture

```text
d:\ToolzGarden\
├── tools/                 # Tool logic and views
│   ├── models/            # Subdirectory for localized ONNX AI models
│   ├── *.html             # Individual tool pages
│   └── *.js               # Individual tool scripts
├── Images/                # Static application images (logos)
├── Favicon-Images/        # Favicons and PWA manifest
├── style.css              # Global CSS styling
├── script.js              # Global JS utilities and UI behaviors
└── index.html             # Homepage
```

---

## 5. Routing Architecture

- **Routing system:** Static file path routing (Native web server behavior).
- **Route organization:** Flat root directory for primary pages (`/`, `/about.html`, `/privacy.html`), and a `/tools/` subdirectory for all individual tools (`/tools/image-compressor.html`).
- **Dynamic routes:** None.
- **Nested routes:** None.
- **Error pages:** A static `/404.html` is provided (relies on hosting provider configuration to map 404s).

---

## 6. Component Architecture

Because there is no framework, "components" are HTML markup patterns reused via copy-paste.

| Component | Path | Responsibility | Reused By |
|---|---|---|---|
| **Header/Nav** | `index.html`, `tools/*.html` | Brand logo, primary links, theme toggle, mobile menu | All pages |
| **Footer** | `index.html`, `tools/*.html` | Sitemap links, copyright, policy links | All pages |
| **Drop Zone** | `tools/*.html` (`.upload-area`) | Visual drag-and-drop file input area | Most file tools |
| **Preview Box** | `tools/*.html` (`.preview-box`) | Side-by-side original/result image preview | Image tools |
| **Controls Card**| `tools/*.html` (`.controls-card`) | Sidebar configuration settings | Configurable tools |
| **FAQ List** | `tools/*.html` (`.faq-list`) | Accordion questions and answers | Most tool pages |
| **Loading Overlay** | `tools/*.html` (`#loading-overlay`) | Full-screen progress bar for heavy processing | AI/WASM tools |

*Component behavior is managed by global listeners in `script.js` (e.g., FAQ accordions, download button animations) or specific logic in `tools/*.js`.*

---

## 7. Tool Architecture

ToolzGarden uses a **Static Page per Tool** architecture.

- Every tool has an individual HTML file (`tools/tool-name.html`).
- Every tool has an individual JS file (`tools/tool-name.js`) which is included via a `<script defer>` tag.
- Some simple text/calculator tools use inline `<script>` tags instead of separate `.js` files.
- Each tool implements its own event listeners for file inputs, its own validation, and its own processing chain.

---

## 8. File Processing Architecture

The general workflow for processing files in ToolzGarden is strictly client-side:

```text
User selects file (drag-drop or input click)
       ↓
Browser File Object obtained
       ↓
Type Validation (e.g., file.type.startsWith('image/'))
       ↓
Input Parsing via FileReader (readAsDataURL) or URL.createObjectURL()
       ↓
Processing Engine (Canvas context, pdf-lib, Tesseract, UpscalerJS)
       ↓
Transformation applied in memory
       ↓
Output Blob generated
       ↓
URL.createObjectURL(blob) mapped to Preview Image
       ↓
User clicks Download → Programmatic <a> click
       ↓
URL.revokeObjectURL() to free memory
```

---

## 9. Image Processing Architecture

- **Image Decoding:** `new Image()` objects load DataURLs or BlobURLs.
- **Canvas Processing:** `document.createElement('canvas')` provides the drawing context (`ctx.drawImage`). 
- **Resizing/Cropping:** Achieved by manipulating Canvas width/height and draw coordinates.
- **Conversion/Compression:** Handled via native `canvas.toBlob(callback, mimeType, quality)`.
- **AI Upscaling:** Uses `UpscalerJS` backed by `ONNX Runtime Web` (WASM). Models are served locally from `tools/models/`. Uses a recursive 2-pass approach for 4x scaling.
- **Metadata:** Uses `exif.js` (read) and `piexif.js` (strip for JPEG). For PNG/WebP, drawing to Canvas intrinsically strips metadata.

---

## 10. PDF Processing Architecture

- **PDF Manipulation:** Uses `pdf-lib` (via CDN). Reads bytes via `file.arrayBuffer()`, loads into `PDFLib.PDFDocument`, and uses native methods (`copyPages`, `save()`).
- **PDF Compression:** Uses `pdfDoc.save({ useObjectStreams: true })`.
- **PDF Rendering:** Uses `pdf.js` (via CDN) to render PDF pages into images on a Canvas.
- **Image to PDF:** Uses `jsPDF` (via CDN) to embed images into A4 sized PDF pages.

---

## 11. API Architecture

**No internal REST/GraphQL APIs exist.**

ToolzGarden only interacts with external CDNs to fetch read-only assets or libraries.

| Endpoint | Method | Purpose | Input | Output |
|---|---|---|---|---|
| `fonts.googleapis.com` | GET | Fetch Inter font CSS | None | CSS |
| `cdn.jsdelivr.net` | GET | Fetch RemixIcons, Tesseract | None | CSS, JS, WASM |
| `unpkg.com` / `cdnjs` | GET | Fetch JS libraries | None | JS files |
| `img.youtube.com/vi/{id}/{qty}.jpg` | GET | Fetch YT thumbnail image | Video ID | JPEG |

---

## 12. Data Flow

### Tool Discovery Flow

```text
User
↓
Homepage (index.html)
↓
Search Input OR Category Tab Click
↓
script.js applies CSS 'display: none' to non-matching tool cards
↓
User clicks matching Tool Card
```

### File Processing Flow (e.g., Image Compressor)

```text
Input (File Object)
↓
Validation (is image?)
↓
Processing (canvas.toBlob with quality 0.72)
↓
Output (Blob URL generated)
↓
Preview (Image src updated)
↓
Download (Anchor tag triggers browser download)
```

---

## 13. State Management

- **Local State:** Isolated within each tool's `.js` file via module-level `let` variables (e.g., `let uploadedFiles = []`, `let isProcessed = false`).
- **Global State:** Minimal. Only the visual theme ("dark" or "light") is managed globally.
- **Persistent State:** Theme preference is stored in `localStorage.getItem('theme')`.
- **DOM State:** Many tools rely on the DOM as the source of truth (e.g., reading values directly from input fields on click).

---

## 14. Storage Architecture

- **Browser Storage:** `localStorage` for theme only.
- **Temporary Files:** Blob URLs and ArrayBuffers reside in volatile browser RAM and are revoked upon reset or navigation.
- **Server Storage:** None.
- **Database:** None.

---

## 15. External Services

- **Tesseract CDN:** Provides language `.traineddata` models dynamically based on user selection during OCR.
- **YouTube Image CDN:** Supplies thumbnail images based on parsed video IDs.
- **Google AdSense / Analytics:** Tracking scripts are present in HTML comments but currently **disabled/commented out**.

---

## 16. Security Architecture

- **Input Validation:** Client-side file type checks. Regex for YouTube URLs.
- **File Security:** Files never leave the client's machine. Zero server upload eliminates server-side storage risks.
- **Security Headers:** `_headers` defines `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and `Referrer-Policy: strict-origin-when-cross-origin`.
- **Risk Mitigation:** Strict client-side file size and dimension checks are implemented to prevent DoS/memory crashes. `innerHTML` usages are sanitized or utilize `document.createTextNode` to prevent local XSS.
- **Risk Identified (CSP):** No `Content-Security-Policy` header is defined.

---

## 17. Performance Architecture

- **Lazy loading:** CSS assets (fonts, icons) use `<link rel="preload" as="style" onload="this.rel='stylesheet'">` for non-blocking rendering.
- **WASM:** Computationally heavy tasks (OCR, AI upscaling) use WebAssembly to approach native execution speeds.
- **Local AI caching:** The ~200MB of ONNX model files are served from the local origin to avoid third-party CDN latency and bandwidth limits.
- **Memory Management:** `URL.revokeObjectURL` is used post-download to prevent memory leaks in single-page sessions.
- **DOM Optimization:** `requestAnimationFrame` and passive event listeners are used for scroll-linked animations.

---

## 18. Error Handling Architecture

- **Client errors:** Handled via a global Toast notification system (`showToast()`).
- **Processing errors:** Wrapped in `try/catch` blocks in complex tools, triggering a toast notification if processing fails.
- **User feedback:** A green "Downloaded!" success state temporarily flashes on download buttons. Loading overlays block interaction during heavy async tasks.
- **Global error boundaries:** None (no framework). Unhandled exceptions will fail silently to the browser console.

---

## 19. Deployment Architecture

```text
Developer (Local Repository)
↓
Git Push
↓
Netlify (Inferred via _headers / _redirects)
↓
Static File Serving
↓
User Browser
```

No build step is required. The HTML/CSS/JS files in the repository are exactly what is served to the client.

---

## 20. Architecture Strengths

- **Absolute Privacy:** 100% client-side architecture guarantees user data never touches a server.
- **Zero Cost to Scale:** Because processing happens on the user's CPU/GPU, hosting costs are virtually zero regardless of traffic volume.
- **Instant Interaction:** No network latency for file uploads or downloads.
- **Simplicity:** No build tools, no transpilation, no dependencies to constantly update. Easy to understand.

---

## 21. Architecture Weaknesses

- **Code Duplication:** HTML headers, footers, and nav menus are copy-pasted across 39+ files. Updating a menu link requires a mass find-and-replace or a script.
- **File Upload Duplication:** The drag-and-drop event listener logic is rewritten in nearly every tool's JS file.
- **Browser Constraints:** Heavily constrained by browser memory, though large files are now explicitly capped.

---

## 22. Architecture Recommendations

### Medium
1. **Add Content Security Policy (CSP):** Define a CSP in `_headers` to mitigate XSS risks.
2. **Implement a Service Worker:** Cache the heavy AI model chunks (`tools/models/`) locally on the client for faster repeat access and offline capabilities.
3. **Abstract File Upload Logic:** Create a shared `initUploadZone(element, callback)` utility in `script.js` to dry up the codebase.
