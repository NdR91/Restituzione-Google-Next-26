<!-- Context: project-intelligence/notes | Priority: high | Version: 1.1 | Updated: 2026-05-03 -->

# Living Notes

> Current state, active issues, and improvement backlog for the Google Cloud Next ’26 V2 page.

## Quick Reference

- **Active deliverable**: `Google Cloud Next 26 - V2.html`
- **Current status**: Functional standalone V2 with revised stack section
- **Last validation**: Playwright checks for desktop/mobile after stack scroll removal
- **Main next improvement**: Add professional assets/logos/visuals when provided

## Current State

### What Works Well
- Stack section is now compact: one viewport, no residual black scroll.
- Layer titles are real clickable buttons and update title, description, chips, and sales angle.
- Active stack asset path is valid: `dinova/assets/stack-gcn-clean.png`.
- Dinova local fonts and logo are used from the design system.
- Playwright is installed and available for screenshot QA.

### Recent Fixes
| Area | Fix | Status |
|---|---|---|
| Stack asset | Restored file-system-safe relative path | Fixed |
| Stack layout | Converted to PNG + aligned layer titles + rich panel | Fixed |
| Stack scroll | Removed long sticky/scrollytelling height | Fixed |
| Temporary implementation note | Removed visible Figma-readiness note | Fixed |
| Mobile basics | Added small-screen grid fallback | Improved |

## Known Issues / Risks

| Issue | Severity | Impact | Status |
|---|---|---|---|
| Multiple HTML versions in root | Medium | Active deliverable may be confused with older versions | Known |
| `package.json` is minimal | Low | No named QA scripts yet | Known |
| Some generic `.opencode/context` navigation refs are broken | Medium | Context discovery can surface stale routes | Known |
| Project intelligence was previously template-based | Medium | Updated core project files now, but broader context still needs cleanup | Improved |

## Asset Backlog

| Asset | Use | Priority |
|---|---|---|
| Customer logos: Renault, L’Oréal, Citi, Best Buy, Humana, Color Health | Customer proof cards | High |
| Google product logos/icons | Gemini, Workspace, BigQuery, GKE, Cloud Run, security/data sections | High |
| Event/keynote photography | Hero or transition sections | Medium |
| Dinova-approved outline icons | Section cards and playbook personas | Medium |
| Additional Google Next stack/vector layers | Replace raster PNG if available | Medium |

## Maintenance Notes

- Keep V2 as the only active source unless a V3 is explicitly created.
- If archiving older HTML files, rename rather than delete unless explicitly approved.
- Validate after visual changes with Playwright at 1440×900 and 1920×1080 minimum.
- Preserve no-emoji, Poppins, dark navy, and restrained accent conventions.

## 📂 Codebase References

**Active File**:
- `Google Cloud Next 26 - V2.html` - Current presentation page

**Older/Reference Files**:
- `Google Cloud Next 26.html` - Previous/alternate version
- `Google Cloud Next 26 - Standalone.html` - Bundled/legacy standalone export

**Validation**:
- `package.json` - Playwright dependency

## Related Files

- `business-domain.md` - Business goals and audience
- `technical-domain.md` - Implementation and structure
- `business-tech-bridge.md` - Business-to-technical mapping
- `decisions-log.md` - Rationale behind current choices
