<!-- Context: project-intelligence/business | Priority: high | Version: 1.1 | Updated: 2026-05-03 -->

# Business Domain

> Business context for the Google Cloud Next ’26 sales restitution web experience.

## Quick Reference

- **Project**: Google Cloud Next ’26 — Restituzione Sales V2
- **Format**: Single-page HTML/CSS/JS web experience for full-screen presentation
- **Audience**: Dinova Sales team
- **Purpose**: Convert Google Cloud Next ’26 announcements into a reusable sales narrative
- **Primary message**: Google is positioning the Agentic Enterprise as a full stack, not isolated products

## Project Identity

| Field | Value |
|---|---|
| Project Name | Google Cloud Next ’26 — Web Experience V2 |
| Tagline | Dall’infrastruttura agli agenti: ogni layer abilita il successivo |
| Problem | Sales needs a memorable, structured way to explain Next ’26 beyond a list of announcements |
| Solution | A keynote-style scrollable web experience organized around the Universal Stack GCN26 |

## Target Users

| Segment | Who They Are | What They Need | Pain Points |
|---|---|---|---|
| Primary | Dinova Sales team | Clear sales angles by customer persona | Too many announcements, difficult prioritization |
| Secondary | Sales leadership / presenters | Full-screen narrative for live restitution | Slide decks feel static and fragmented |
| Tertiary | Presales / technical advisors | Mapping from products to architecture layers | Need to connect product names to technical/business value |

## Value Proposition

**For Sales**:
- A mental map for discussing agents, data, security, platform, and infrastructure.
- Stronger customer conversations by persona: COO, CIO/CTO, CISO, CDO, CX.
- Clear distinction between “AI feature” and “agentic enterprise stack”.

**For Dinova**:
- Supports thought leadership around Google Cloud Next ’26.
- Aligns the Sales team on a consistent narrative.
- Reuses Dinova visual identity while contextualizing Google Cloud content.

## Success Criteria

| Criterion | Definition | Target |
|---|---|---|
| Presentation readability | Works in full-screen room projection | Optimized for 1920×1080 |
| Narrative clarity | Sales can recall the stack and layer meanings | 6-layer stack visible and clickable |
| Asset reliability | Standalone HTML loads local fonts/images | No broken assets or console errors |
| Brand fit | Uses Dinova design system with Google accents | Poppins, dark navy, restrained accents |

## Stakeholders

| Role | Responsibility |
|---|---|
| Business owner | Validate sales narrative and content density |
| Presenter | Use page live during restitution session |
| Designer/developer | Maintain V2 HTML, assets, visual polish |
| Sales team | Consume and reuse the takeaways in customer conversations |

## Business Constraints

- Must remain understandable as a live presentation, not a dense report.
- Google colors are contextual accents; Dinova remains the primary visual brand.
- No emoji; use Dinova/Google-aligned icons, typography, and geometric accents.
- Current available stack visual is `dinova/assets/stack-gcn-clean.png`.

## 📂 Codebase References

**Primary Deliverable**:
- `Google Cloud Next 26 - V2.html` - Active V2 web experience

**Business Source Material**:
- `GOOGLE_NEXT_26_V2_BLUEPRINT.md` - V2 narrative blueprint
- `uploads/Next26_WebExperience_Brief.md` - Original web experience brief

**Brand Source**:
- `dinova/Dinova Design System/README.md` - Dinova brand guidance
- `dinova/Dinova Design System/SKILL.md` - Agent-facing design system guide

## Related Files

- `technical-domain.md` - Technical implementation and structure
- `business-tech-bridge.md` - Mapping from sales needs to implementation
- `decisions-log.md` - Key decisions and rationale
- `living-notes.md` - Current state and open improvement areas
