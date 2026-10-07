# ToolzGarden - Development Roadmap

## 1. Current State

ToolzGarden is a fully functional, production-ready static web application offering 33 client-side utilities. The core architecture is solid, providing excellent privacy, zero hosting costs for processing, and immediate user feedback. However, the lack of a build step or templating engine has resulted in significant code duplication (header/footer HTML), creating a high maintenance burden for future updates.

---

## 2. Technical Debt

- **Architecture:** Duplicated HTML layouts across 39+ files. Changing the navbar requires editing every single file.
- **Code Quality:** Drag-and-drop file upload logic is duplicated verbatim in ~20 different JavaScript files.
- **Security:** No Content Security Policy (CSP).

---

## 3. Short-Term Roadmap

Focus on architecture and maintainability improvements that do not require full framework rewrites:

1. **Standardize Upload Logic:** Create a shared `window.ToolzGardenUtils.handleUpload()` function in `script.js` to dry up the codebase.
2. **Add Content Security Policy (CSP):** Define a strict CSP in `_headers` to prevent any future XSS vulnerabilities.

---

## 4. Medium-Term Roadmap

Focus on architecture and maintainability:

1. **Introduce a Build Tool or SSG:** 
   - Migrate to a Static Site Generator (e.g., 11ty, Astro, or even a simple Node build script).
   - Abstract the header, footer, and navigation into reusable templates/components.
2. **Service Worker Implementation (PWA):**
   - Cache static assets.
   - Cache the ~200MB AI models (`tools/models/`) locally so repeat users don't have to download them again.
3. **Batch Processing Extension:**
   - Extend existing single-file tools (Image Resizer, Format Converter) to accept and process multiple files simultaneously, outputting a ZIP.

---

## 5. Long-Term Roadmap

Consider evolving the platform to support heavier workloads safely:

- **Web Worker Offloading:** Move heavy Canvas processing and PDF manipulation off the main thread into Web Workers to prevent UI freezing on large files.
- **IndexedDB Storage:** For multi-step workflows, store intermediate files in IndexedDB instead of RAM to prevent out-of-memory crashes.

---

## 6. New Tool Opportunities

Based on the existing architecture (client-side WASM/Canvas), the following tools could be easily added:

| Tool | Category | User Value | Technical Complexity | Priority |
|---|---|---|---|---|
| Image Watermarker | Image | High | Low (Canvas `fillText`) | P2 |
| PDF Password Protect | PDF | Medium | Low (`pdf-lib` encrypt) | P2 |
| PDF Unlocker | PDF | Medium | Low (`pdf-lib` decrypt) | P3 |
| JSON to CSV | Developer | High | Low (JS logic) | P2 |
| Markdown Editor | Text | High | Medium (Marked.js) | P3 |
| FFmpeg WASM Video Tools | Video | High | High (ffmpeg.wasm) | P3 |

*(Note: Video tools are marked as "Coming Soon" in the UI. FFmpeg.wasm can handle this client-side, but memory management is extremely difficult.)*

---

## 7. Architecture Evolution

```text
Current Architecture (Manual HTML Duplication)
        ↓
Static Site Generator (11ty/Astro for template reuse)
        ↓
Shared JS Utilities (Abstracted file/error handling)
        ↓
Web Worker Offloading (Non-blocking UI for WASM tasks)
        ↓
Progressive Web App (Offline support & AI model caching)
```

This evolution maintains the zero-cost, privacy-first, client-side ethos while vastly improving developer experience and application stability.

---

## 8. Testing Roadmap

ToolzGarden currently has **zero** tests.

1. **Unit Tests:** Jest for pure functions (Text tools, Calculators).
2. **E2E Tests:** Playwright/Cypress to simulate file uploads and verify output blobs (critical for Canvas/PDF tools).

---

## 9. Developer Experience Roadmap

1. Implement a Node-based local dev server with hot-reloading (e.g., Vite or BrowserSync).
2. Create a generic Tool Template to scaffold new tools instantly.

---

## 10. Definition of Done

For future ToolzGarden features, a tool is considered complete when:

- [ ] HTML file created from template (consistent header/footer).
- [ ] Dedicated JS file linked dynamically.
- [ ] Drag-and-drop AND click-to-browse inputs functional.
- [ ] File type and size validation implemented.
- [ ] Processing runs entirely client-side.
- [ ] Non-blocking toast notification used for errors.
- [ ] SEO metadata (Title, Description, canonical URL) defined.
- [ ] Mobile responsive layout verified.
- [ ] Added to `index.html` search index.
