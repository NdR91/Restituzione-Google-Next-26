<!-- Context: project-intelligence/technical | Priority: high | Version: 1.1 | Updated: 2026-05-03 -->

# Technical Domain

> Technical foundation for the Google Cloud Next ’26 V2 standalone web experience.

## Quick Reference

- **Primary file**: `Google Cloud Next 26 - V2.html`
- **Architecture**: Standalone HTML file with inline CSS and vanilla JS
- **Runtime**: Browser only; no build step required
- **Validation**: Playwright installed for visual/interaction checks
- **Primary viewport**: 1920×1080 / 1440×900 presentation desktop

## Primary Stack

| Layer | Technology | Version | Rationale |
|---|---|---|---|
| Markup | HTML5 | N/A | Standalone deliverable, easy to open/project |
| Styling | Inline CSS | N/A | Single-file portability and precise presentation control |
| Interactivity | Vanilla JavaScript | N/A | Lightweight reveal, counters, nav, stack layer selection |
| Visual QA | Playwright | 1.59.1 | Screenshot and click validation across viewports |
| Fonts | Local Poppins TTF | Dinova assets | Offline/local brand fidelity |
| Assets | Local PNG/JPG | N/A | Standalone path reliability |

## Project Structure

```
google_next/
├── Google Cloud Next 26 - V2.html       # Active V2 deliverable
├── Google Cloud Next 26.html            # Previous/alternate version
├── Google Cloud Next 26 - Standalone.html # Bundled/legacy standalone export
├── GOOGLE_NEXT_26_V2_BLUEPRINT.md       # V2 narrative blueprint
├── uploads/                             # Source brief and original uploaded assets
├── dinova/                              # Local Dinova assets and design system
├── package.json                         # Playwright dependency
└── .opencode/context/                   # Agent context and project intelligence
```

## Key Implementation Areas

| Area | Location | Notes |
|---|---|---|
| Design tokens/fonts | `Google Cloud Next 26 - V2.html` lines 8-30 | Local Poppins and Dinova/Google color tokens |
| Navigation | `Google Cloud Next 26 - V2.html` `#nav` | Fixed anchor nav with active section state |
| Stack section | `Google Cloud Next 26 - V2.html` `#stack` | Three-column PNG/layer/content layout |
| Layer data | `Google Cloud Next 26 - V2.html` `layerData` | Titles, descriptions, chips, sales angles |
| Reveal/counters | `initReveal`, `initCounters` | IntersectionObserver-based enhancements |

## Current Asset References

| Asset | Purpose | Status |
|---|---|---|
| `dinova/assets/stack-gcn-clean.png` | Universal Stack GCN26 visual | Active |
| `dinova/Dinova Design System/assets/logo-wordmark-white.png` | Nav/footer logo | Active |
| `dinova/Dinova Design System/fonts/Poppins-*.ttf` | Typography | Active |
| `dinova/Dinova Design System/assets/bg-data-particles.jpg` | Potential enhancement | Available |
| `dinova/Dinova Design System/assets/bg-o-dark.png` | Potential Dinova background motif | Available |

## Validation Commands

```bash
node -e "const { chromium } = require('playwright'); console.log('playwright ok')"
```

Use Playwright screenshots for presentation-critical viewports. The page has been validated for no console errors and no broken active assets after the latest stack-section fixes.

## Technical Constraints

- Keep `Google Cloud Next 26 - V2.html` standalone; do not introduce a bundler unless project direction changes.
- Asset paths must be relative and file-system safe; avoid alias paths like `@dinova/...` in standalone HTML.
- Avoid large scroll-linked sections unless necessary; clickable stack layers now replace the former long stack scroll.
- Mobile is secondary; still avoid obvious overflow and broken layout.

## 📂 Codebase References

**Implementation**:
- `Google Cloud Next 26 - V2.html` - Main standalone page
- `package.json` - Playwright dependency declaration

**Assets**:
- `dinova/assets/stack-gcn-clean.png` - Stack image used in V2
- `dinova/Dinova Design System/assets/logo-wordmark-white.png` - Dinova wordmark
- `dinova/Dinova Design System/colors_and_type.css` - Source design tokens

**Source Docs**:
- `GOOGLE_NEXT_26_V2_BLUEPRINT.md` - V2 architecture/narrative
- `uploads/Next26_WebExperience_Brief.md` - Original brief

## Related Files

- `business-domain.md` - Why this implementation exists
- `business-tech-bridge.md` - Business-to-technical mapping
- `decisions-log.md` - Decision rationale
- `living-notes.md` - Current issues and future improvements
