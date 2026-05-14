<!-- Context: project-intelligence/nav | Priority: high | Version: 1.1 | Updated: 2026-05-03 -->

# Project Intelligence

> Start here for Google Cloud Next ’26 V2 project understanding. These files bridge business and technical domains.

## Structure

```
.opencode/context/project-intelligence/
├── navigation.md              # This file - quick overview
├── business-domain.md         # Business context and problem statement
├── technical-domain.md        # Stack, architecture, technical decisions
├── business-tech-bridge.md    # How business needs map to solutions
├── decisions-log.md           # Major decisions with rationale
└── living-notes.md            # Active issues, debt, open questions
```

## Quick Routes

| What You Need | File | Description |
|---------------|------|-------------|
| Understand the "why" | `business-domain.md` | Sales audience, value proposition, success criteria |
| Understand the "how" | `technical-domain.md` | Standalone HTML, assets, validation, structure |
| See the connection | `business-tech-bridge.md` | Business goals → page features |
| Know the context | `decisions-log.md` | V2 decisions and rationale |
| Current state | `living-notes.md` | Current fixes, risks, asset backlog |
| All of the above | Read all files in order | Full project intelligence |

## Usage

**New Team Member / Agent**:
1. Start with `navigation.md` (this file)
2. Read all files in order for complete understanding
3. Follow onboarding checklist in each file

**Quick Reference**:
- Business focus → `business-domain.md`
- Technical focus → `technical-domain.md`
- Decision context → `decisions-log.md`

## Integration

This folder is referenced from:
- `.opencode/context/core/standards/project-intelligence.md` (standards and patterns)
- `.opencode/context/core/system/context-guide.md` (context loading)

See `.opencode/context/core/context-system.md` for the broader context architecture.

## Current Active Deliverable

- `Google Cloud Next 26 - V2.html` — current maintained presentation page.
- `Google Cloud Next 26.html` and `Google Cloud Next 26 - Standalone.html` are reference/older versions unless explicitly promoted.

## Maintenance

Keep this folder current:
- Update when business direction changes
- Document decisions as they're made
- Review `living-notes.md` regularly
- Archive resolved items from decisions-log.md

**Management Guide**: See `.opencode/context/core/standards/project-intelligence-management.md` for complete lifecycle management including:
- How to update, add, and remove files
- How to create new subfolders
- Version tracking and frontmatter standards
- Quality checklists and anti-patterns
- Governance and ownership

See `.opencode/context/core/standards/project-intelligence.md` for the standard itself.
