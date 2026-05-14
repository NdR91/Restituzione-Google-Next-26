<!-- Context: project-intelligence/decisions | Priority: high | Version: 1.1 | Updated: 2026-05-03 -->

# Decisions Log

> Key decisions for the Google Cloud Next ’26 V2 web experience.

## Quick Reference

- **Purpose**: Preserve why the V2 page is structured as it is.
- **Status values**: Decided | Pending | Under Review | Deprecated
- **Current active deliverable**: `Google Cloud Next 26 - V2.html`

---

## Decision: Use a standalone HTML deliverable

**Date**: 2026-05-03  
**Status**: Decided  
**Owner**: Project maintainer / presenter

### Context
The web experience must be easy to open, project, and hand off without requiring a build pipeline.

### Decision
Use a single standalone HTML file with inline CSS and vanilla JavaScript.

### Rationale
This minimizes setup risk for a live sales restitution and keeps all presentation logic inspectable in one file.

### Alternatives Considered
| Alternative | Pros | Cons | Why Rejected? |
|---|---|---|---|
| React/Next app | Component structure, routing | Requires build/dev setup | Too much overhead for presentation artifact |
| Bundled export only | Portable | Harder to edit and inspect | V2 needs direct iteration |

### Impact
- **Positive**: Easy local use, low operational risk.
- **Negative**: CSS/JS can grow in one file.
- **Risk**: Needs periodic cleanup to avoid monolithic complexity.

---

## Decision: Use Dinova as primary brand, Google colors as accents

**Date**: 2026-05-03  
**Status**: Decided  
**Owner**: Design direction

### Context
The content is about Google Cloud Next ’26, but the artifact is a Dinova sales enablement asset.

### Decision
Use Dinova dark navy, Poppins, logo, small-radius surfaces, and restrained accent use. Google colors remain contextual layer/product accents.

### Rationale
The page should feel owned by Dinova while clearly referencing Google Cloud topics.

### Impact
- **Positive**: Brand consistency and professional presentation tone.
- **Negative**: Requires careful restraint with Google color saturation.

---

## Decision: Replace long stack scrollytelling with clickable layer selection

**Date**: 2026-05-03  
**Status**: Decided  
**Owner**: UX iteration

### Context
The stack section originally used a long sticky/scroll-linked interaction. It created perceived “black space” after the section.

### Decision
Make the stack section a single-viewport three-column layout with clickable layer titles.

### Rationale
The presenter benefits more from direct layer control than passive scroll-based changes.

### Alternatives Considered
| Alternative | Pros | Cons | Why Rejected? |
|---|---|---|---|
| 320vh sticky scroll | Cinematic | Too much empty-feeling dark scroll | Hurt pacing |
| 200vh shorter scroll | Keeps animation | Still leaves residual scroll | Did not solve issue fully |
| Click-only stack | Direct, compact | Less cinematic | Best for live presentation |

### Impact
- **Positive**: Removes long dark space, makes layer titles selectable.
- **Negative**: Less automated narrative progression.

---

## Pending Decisions

| Decision | Status | Next Action |
|---|---|---|
| Add customer logos | Pending | User to provide approved logo assets |
| Add Google product logos/icons | Pending | User to provide or approve source |
| Add event/keynote photography | Pending | User to provide imagery |

## 📂 Codebase References

**Implementation**:
- `Google Cloud Next 26 - V2.html` - Decisions implemented here

**Source Context**:
- `GOOGLE_NEXT_26_V2_BLUEPRINT.md` - Narrative and layer decisions
- `uploads/Next26_WebExperience_Brief.md` - Original requirements

## Related Files

- `business-domain.md` - Business context
- `technical-domain.md` - Technical implementation
- `business-tech-bridge.md` - Mapping decisions to goals
- `living-notes.md` - Current backlog and known issues
