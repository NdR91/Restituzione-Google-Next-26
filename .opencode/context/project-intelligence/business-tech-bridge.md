<!-- Context: project-intelligence/bridge | Priority: high | Version: 1.1 | Updated: 2026-05-03 -->

# Business ↔ Tech Bridge

> How the sales narrative maps to the V2 standalone web implementation.

## Quick Reference

- **Business objective**: Make Next ’26 memorable and actionable for Sales.
- **Technical approach**: Single-page keynote-style HTML with strong sections and a clickable Universal Stack.
- **Core bridge**: Each layer in the visual stack maps to product themes, sales persona, and talking points.

## Core Mapping

| Business Need | Technical Solution | Why This Mapping | Business Value |
|---|---|---|---|
| Explain many announcements simply | Universal Stack GCN26 section | Layers group product announcements by enterprise capability | Sales gets a mental model, not a product dump |
| Present live in a room | Full-screen single-page web experience | One HTML file, sticky nav, large typography | Presenter can navigate without deck friction |
| Connect technical topics to personas | `layerData` includes sales angles and products | Layer content changes on click | Sales can tailor conversation by buyer |
| Maintain Dinova brand | Local Dinova fonts/logo/color base | Uses Poppins, dark navy, restrained accent surfaces | Looks like a Dinova asset, not a generic Google page |
| Add proof quickly | Customer proof card wall | ROI and customer names are scannable | Supports credibility and follow-up conversations |

## Feature Mapping

### Feature: Universal Stack GCN26

**Business Context**:
- Sales needs to connect infrastructure, models, data, security, platform, and workforce.
- The key message is “full-stack agentic enterprise”.

**Technical Implementation**:
- Three-column section in `Google Cloud Next 26 - V2.html`.
- Left: `dinova/assets/stack-gcn-clean.png`.
- Center: layer buttons aligned to stack levels.
- Right: title, description, chips, sales angle.

**Connection**:
The UI turns a complex announcement set into a reusable sales conversation map.

### Feature: Sticky Navigation

**Business Context**:
- Presenter may jump between topics during live discussion.

**Technical Implementation**:
- Fixed `#nav` with anchor links and active-section tracking.

**Connection**:
Supports non-linear presentation and quick return to key sections.

### Feature: Reveal and Count-Up

**Business Context**:
- Numbers and cards should feel like keynote moments without being distracting.

**Technical Implementation**:
- IntersectionObserver-based reveal classes and counters.

**Connection**:
Improves stage presence while keeping page lightweight.

## Trade-Off Decisions

| Situation | Business Priority | Technical Priority | Decision Made | Rationale |
|---|---|---|---|---|
| Stack could be long scrollytelling | Keep attention and avoid black space | Simpler flow | Use click interaction, not long sticky scroll | Presenter controls layer selection directly |
| HTML standalone vs app framework | Easy handoff and projection | Minimal dependencies | Keep single HTML file | No build/dev server required |
| Google colors vs Dinova system | Contextual Google identity | Brand consistency | Dinova base, Google accents | Maintains ownership by Dinova |

## 📂 Codebase References

**Implementation**:
- `Google Cloud Next 26 - V2.html` - Interactive presentation page

**Narrative Sources**:
- `GOOGLE_NEXT_26_V2_BLUEPRINT.md` - Layer and sales angle mapping
- `uploads/Next26_WebExperience_Brief.md` - Original presentation requirements

**Brand Sources**:
- `dinova/Dinova Design System/README.md` - Dinova design rules
- `dinova/Dinova Design System/colors_and_type.css` - Token reference

## Related Files

- `business-domain.md` - Business context and audience
- `technical-domain.md` - Implementation details
- `decisions-log.md` - Decisions behind current structure
- `living-notes.md` - Current improvement backlog
