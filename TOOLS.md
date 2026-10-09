# ToolzGarden - Tool Inventory

## 1. Tool Directory

| # | Tool | Category | Route | Input | Output | Processing | Status |
|---|---|---|---|---|---|---|---|
| 1 | Image Compressor | Image | `/tools/image-compressor.html` | Images | Images | Browser (Canvas) | Implemented |
| 2 | Image Resizer | Image | `/tools/image-resizer.html` | Images | Images | Browser (Canvas) | Implemented |
| 3 | Image Cropper | Image | `/tools/image-cropper.html` | Images | Images | Browser (Canvas) | Implemented |
| 4 | Image to JPG | Image | `/tools/image-to-jpg.html` | Images | JPG | Browser (Canvas) | Implemented |
| 5 | Image to PNG | Image | `/tools/image-to-png.html` | Images | PNG | Browser (Canvas) | Implemented |
| 6 | Image to WebP | Image | `/tools/image-to-webp.html` | Images | WebP | Browser (Canvas) | Implemented |
| 7 | Image to Base64 | Image | `/tools/image-to-base64.html` | Images | Text | Browser (FileReader) | Implemented |
| 8 | Image to Text | Image/AI | `/tools/image-to-text.html` | Images | Text | Browser (Tesseract WASM) | Implemented |
| 9 | Image Upscaler | Image/AI | `/tools/image-upscaler.html` | Images | Images | Browser (ONNX WASM) | Implemented |
| 10 | Remove Metadata | Image | `/tools/remove-metadata.html` | Images | Images | Browser (piexif/Canvas) | Implemented |
| 11 | Bulk Downloader | Image | `/tools/bulk-downloader.html` | Images | ZIP | Browser (JSZip) | Implemented |
| 12 | PDF Compress | PDF | `/tools/pdf-compress.html` | PDF | PDF | Browser (pdf-lib) | Implemented |
| 13 | PDF Merge | PDF | `/tools/pdf-merge.html` | PDFs | PDF | Browser (pdf-lib) | Implemented |
| 14 | PDF Split | PDF | `/tools/pdf-split.html` | PDF | ZIP/PDFs | Browser (pdf-lib/JSZip) | Implemented |
| 15 | PDF to Image | PDF | `/tools/pdf-to-image.html` | PDF | ZIP (PNGs) | Browser (pdf.js) | Implemented |
| 16 | Image to PDF | PDF | `/tools/image-to-pdf.html` | Images | PDF | Browser (jsPDF) | Implemented |
| 17 | Remove PDF Pages | PDF | `/tools/pdf-page-remover.html`| PDF | PDF | Browser (pdf-lib) | Implemented |
| 18 | Word Counter | Text | `/tools/word-counter.html` | Text | Stats | Browser (JS) | Implemented |
| 19 | Character Counter| Text | `/tools/character-counter.html`| Text | Stats | Browser (JS) | Implemented |
| 20 | Case Converter | Text | `/tools/case-converter.html` | Text | Text | Browser (JS) | Implemented |
| 21 | Text Reverser | Text | `/tools/text-reverser.html` | Text | Text | Browser (JS) | Implemented |
| 22 | Remove Duplicates| Text | `/tools/remove-duplicates.html`| Text | Text | Browser (Set API) | Implemented |
| 23 | Text to Slug | Text | `/tools/text-to-slug.html` | Text | Text | Browser (Regex) | Implemented |
| 24 | JSON Formatter | Developer| `/tools/json-formatter.html` | JSON | JSON | Browser (JSON.stringify)| Implemented |
| 25 | JSON Minifier | Developer| `/tools/json-minifier.html` | JSON | JSON | Browser (JSON.stringify)| Implemented |
| 26 | Base64 Encoder | Developer| `/tools/base64-encoder.html` | Text | Text | Browser (btoa/atob) | Implemented |
| 27 | URL Encoder | Developer| `/tools/url-encoder.html` | Text | Text | Browser (encodeURI) | Implemented |
| 28 | HTML Encoder | Developer| `/tools/html-encoder.html` | Text | Text | Browser (DOM TextNode) | Implemented |
| 29 | Loan Calculator | Calculator| `/tools/loan-calculator.html`| Number| Text | Browser (Math) | Implemented |
| 30 | EMI Calculator | Calculator| `/tools/emi-calculator.html` | Number| Text | Browser (Math) | Implemented |
| 32 | QR Code Generator| Generator | `/tools/qr-code-generator.html`| Text/Img| PNG/SVG | Browser (qr-code-styling)| Implemented |
| 33 | YT Thumb Grabber | Social | `/tools/youtube-thumbnail-downloader.html`| URL| JPEG | External CDN Read | Implemented |

---

## 2. Detailed Tool Documentation

### Image Compressor
- **Overview:** Reduces image file size.
- **Processing Flow:** Loads image into Canvas, calls `canvas.toBlob()` using the quality parameter defined by the user slider.
- **Processing Location:** Browser.
- **Dependencies:** None.

### Image Resizer
- **Overview:** Changes image dimensions.
- **Processing Flow:** Reads width/height inputs, scales Canvas context, draws image, outputs blob. Maintains aspect ratio via JS calculations.
- **Processing Location:** Browser.
- **Dependencies:** None.

### Image Cropper
- **Overview:** Free-hand cropping of images.
- **Processing Flow:** Custom JS overlay handles mouse/touch drag events to define a box. Canvas extracts the defined region.
- **Processing Location:** Browser.
- **Dependencies:** None.

### Image to JPG / PNG / WebP
- **Overview:** Converts between web image formats.
- **Processing Flow:** Loads image into Canvas, outputs blob via `canvas.toBlob(callback, 'image/jpeg' | 'image/png' | 'image/webp')`.
- **Processing Location:** Browser.
- **Dependencies:** None.

### Image to Base64
- **Overview:** Converts an image file to a base64 encoded data string.
- **Processing Flow:** Uses `FileReader.readAsDataURL()`.
- **Processing Location:** Browser.
- **Dependencies:** None.

### Image to Text (OCR)
- **Overview:** Extracts text from images.
- **Processing Flow:** User selects language. Loads Tesseract worker. Performs OCR. Displays extracted text.
- **Processing Location:** Browser (WASM).
- **Dependencies:** `tesseract.min.js`.

### Image Upscaler
- **Overview:** 4x AI upscaling of images.
- **Processing Flow:** Loads ONNX model (`default-p5.onnx`). Runs UpscalerJS inference.
- **Processing Location:** Browser (WASM).
- **Dependencies:** `upscaler.min.js`, `@tensorflow/tfjs`, `onnxruntime-web`.

### Remove Metadata
- **Overview:** Strips EXIF data from images.
- **Processing Flow:** If JPEG, uses `piexif.remove()`. If PNG/WebP, draws to Canvas and exports (which naturally strips metadata). Displays extracted metadata table.
- **Processing Location:** Browser.
- **Dependencies:** `exif.js`, `piexif.js`.

### Bulk Downloader
- **Overview:** Packages multiple images into a single ZIP file.
- **Processing Flow:** Accepts multiple files. `JSZip` adds each file. Generates blob.
- **Processing Location:** Browser.
- **Dependencies:** `jszip.min.js`.

### PDF Compress
- **Overview:** Reduces PDF file size.
- **Processing Flow:** Loads PDF into `pdf-lib`. Saves with `useObjectStreams: true`.
- **Processing Location:** Browser.
- **Dependencies:** `pdf-lib.js`.

### PDF Merge
- **Overview:** Combines multiple PDFs.
- **Processing Flow:** Creates new `PDFDocument`. Iterates uploaded files, copies all pages into the new document, saves.
- **Processing Location:** Browser.
- **Dependencies:** `pdf-lib.js`, SortableJS (for drag-drop ordering).

### PDF Split
- **Overview:** Extracts specific pages from a PDF.
- **Processing Flow:** Creates new document, copies user-specified page numbers, saves. If "Extract as separate files", zips them.
- **Processing Location:** Browser.
- **Dependencies:** `pdf-lib.js`, `jszip.min.js`.

### PDF to Image
- **Overview:** Converts PDF pages to PNG images.
- **Processing Flow:** Loads PDF via `pdf.js`. Renders each page to a Canvas. Converts Canvas to PNG blob. Zips all PNGs.
- **Processing Location:** Browser.
- **Dependencies:** `pdf.js`, `jszip.min.js`.

### Image to PDF
- **Overview:** Converts images to a multi-page PDF.
- **Processing Flow:** Uses `jsPDF`. Iterates images, adds A4 page, inserts scaled image.
- **Processing Location:** Browser.
- **Dependencies:** `jspdf.umd.min.js`, SortableJS.

### Remove PDF Pages
- **Overview:** Deletes specific pages from a PDF.
- **Processing Flow:** Loads PDF into `pdf-lib`. Calls `pdfDoc.removePage(index)` based on user input. Saves.
- **Processing Location:** Browser.
- **Dependencies:** `pdf-lib.js`.

### Word / Character Counter
- **Overview:** Calculates text statistics.
- **Processing Flow:** Regex-based string splitting on the `input` event of a `<textarea>`.
- **Processing Location:** Browser.

### Case Converter
- **Overview:** Converts text casing (Upper, Lower, Title, Sentence).
- **Processing Flow:** Standard JS String prototype methods (`toUpperCase()`, regex for Title case).
- **Processing Location:** Browser.

### Text Reverser / Remove Duplicates / Text to Slug
- **Overview:** Text manipulation.
- **Processing Flow:** Array methods (`split.reverse.join`), `Set()` for duplicates, Regex for slugs.
- **Processing Location:** Browser.

### JSON Formatter / Minifier
- **Overview:** Cleans or minifies JSON strings.
- **Processing Flow:** `JSON.parse()` followed by `JSON.stringify(obj, null, 2)` or `JSON.stringify(obj)`.
- **Processing Location:** Browser.

### Base64 / URL / HTML Encoder
- **Overview:** Encodes and decodes developer strings.
- **Processing Flow:** Uses `btoa()`/`atob()`, `encodeURIComponent()`, and DOM text nodes for HTML entities.
- **Processing Location:** Browser.

### Loan / EMI Calculator
- **Overview:** Financial math calculators.
- **Processing Flow:** Standard amortization formulas. Updates HTML on input.
- **Processing Location:** Browser.

### QR Code Generator
- **Overview:** Generates customizable QR codes.
- **Processing Flow:** Passes form config to `QRCodeStyling` library.
- **Processing Location:** Browser.
- **Dependencies:** `qr-code-styling.js`.

### YouTube Thumbnail Downloader
- **Overview:** Fetches high-res YouTube thumbnails.
- **Processing Flow:** Extracts video ID via regex. Constructs `img.youtube.com/vi/{id}/maxresdefault.jpg` URL. Downloads via `fetch` blob.
- **Processing Location:** Browser (External CDN Request).

---

## 3. Tool Processing Matrix

All tools process data 100% in the browser. Zero tools upload data to a server.
*Exception:* YouTube Thumbnail Downloader initiates a GET request to a YouTube image CDN.

---

## 4. Input/Output Matrix

| Tool | JPG | PNG | WEBP | PDF | TEXT | Output |
|---|:---:|:---:|:---:|:---:|:---:|---|
| Image Compress | ✓ | ✓ | ✓ | - | - | Same |
| Image to PNG | ✓ | ✓ | ✓ | - | - | PNG |
| Image to Base64| ✓ | ✓ | ✓ | - | - | TXT |
| PDF Merge | - | - | - | ✓ | - | PDF |
| PDF to Image | - | - | - | ✓ | - | ZIP(PNG)|

---

## 5. Tool Dependencies

| Tool | Library | Purpose |
|---|---|---|
| Image to Text | `Tesseract.js` | OCR engine |
| Image Upscaler | `UpscalerJS`, `tfjs`, `onnx`| AI Super Resolution |
| Remove Metadata| `piexif.js`, `exif.js` | EXIF parsing/stripping |
| Bulk/Split PDF | `JSZip` | Client-side zipping |
| PDF Tools (most)| `pdf-lib` | PDF manipulation |
| PDF to Image | `pdf.js` | PDF rendering |
| Image to PDF | `jsPDF` | PDF generation |
| QR Code Gen | `qr-code-styling` | Canvas QR drawing |

---

## 6. Shared Tool Infrastructure

- **`script.js`:** Contains theme toggling, search filtering, nav menu logic, `formatBytes()`, `showToast()` for error handling, and `validateFile()` / `validateImageFile()` for robust size/dimension checks.
- **Duplication:** Most tools still re-implement their own `dragover`, `dragleave`, and `drop` event listeners for the upload area, though validation is now centralized.

---

## 7. Tool Consistency Analysis

- **UI Consistency:** Very high. All tools share identical CSS classes for layouts (`.tool-workspace`, `.upload-area`, `.preview-box`).
- **Code Consistency:** Moderate. Event listeners are structured similarly, but the lack of abstraction means fixes applied to one tool's upload zone (e.g., adding a size limit) must be manually copied to 20 other files.

---

## 8. Missing/Incomplete Tools

- **Video Tools:** The UI navigation contains a "Video Tools" category indicating "Coming Soon". There are no video processing HTML/JS files in the repository.
