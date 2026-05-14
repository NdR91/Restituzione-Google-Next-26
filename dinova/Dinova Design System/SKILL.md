# Dinova Design System — Agent Skill

## What this design system is for

This project is the **Dinova Design System** — the single source of truth for all visual design work for **Dinova** (dinova.one), a Bologna-based Italian digital innovation company.

Use this design system whenever you are asked to:
- Create a slide deck or presentation for Dinova
- Design a UI, prototype, or digital product in the Dinova brand
- Design a landing page, one-pager, or marketing asset for Dinova
- Create data visualizations, infographics, or reports in the Dinova brand

---

## How to use this design system

### 1. Import the CSS tokens
Link `colors_and_type.css` in your HTML for all color, type, and spacing variables:
```html
<link rel="stylesheet" href="/colors_and_type.css">
```

### 2. Load the fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=Rubik:wght@300;400;700;900&display=swap" rel="stylesheet">
```

### 3. Core color palette (quick reference)
| Token | Hex | Usage |
|---|---|---|
| `--violet` | `#873BFF` | Brand purple — primary CTA, logo, accents |
| `--dark` | `#00121A` | Near-black — primary dark background |
| `--white` | `#FFFFFF` | Light surfaces, text on dark |
| `--off` | `#F0F4F7` | Light gray card / surface |
| `--orange` | `#FF7031` | Accent 1 — warm highlight |
| `--pink` | `#FF70F3` | Accent 2 — vibrant pop |
| `--cyan` | `#5CD9FF` | Accent 3 — tech highlight |
| `--lime` | `#AAE505` | Accent 4 — data/success |
| `--slate` | `#49556D` | Muted gray — secondary text |

### 4. Typography
- **Primary font**: Poppins (all weights 200–800)
- **Impact/display**: Rubik (700, 900)
- **Slide headlines**: Poppins SemiBold or Bold, tight tracking (`letter-spacing: -0.02em`)
- **Body**: Poppins Regular or Light
- **Labels**: Poppins SemiBold, uppercase, wide tracking (`letter-spacing: 0.2em`)

### 5. Slide layouts (use `slides/index.html` as reference)
Ten canonical layouts:
1. **Cover** — Dark BG, violet "O" ring, hero text left, illustration right
2. **Chapter Opener** — Solid violet BG, chapter number, large title
3. **Vision/Quote** — Dark BG, violet left stripe, large light quote text
4. **Stats** — White BG, huge violet numbers, decorative O ring right
5. **Three Pillars** — Dark BG, 3-column cards with colored top accents
6. **2×2 Content Grid** — White BG, alternating light/dark cards
7. **Products** — Dark left panel, right 2×3 product grid
8. **Index/TOC** — Dark left panel, right index rows
9. **Full-bleed Photo** — Dark photo + violet gradient overlay, text left
10. **Thank You** — Dark BG, violet "O" ring, contact info

### 6. UI Components (see `ui_kits/corporate/index.html`)
- Buttons: primary (violet), secondary (dark), outline, ghost, accent
- Badges: filled, soft/tinted, outline, pill
- Cards: light, dark, violet, stat, surface
- Forms: input, select, textarea, toggle
- Alerts: violet, success, warning, info
- Navigation bar, stat row, progress bars, tables, avatars, chips

### 7. Brand assets
All in `assets/` folder:
- `logo-o-violet.png` — Brand O mark, violet
- `logo-o-dark.png` — Brand O mark, dark navy
- `bg-o-dark.png` — O mark as full-bleed dark BG
- `bg-o-purple.png` — O mark on purple gradient
- `illus-woman-ai.png/.jpg` — Woman + AI illustration
- `illus-man-design.png` — Man + design tools illustration
- `illus-woman-vr.png` — Woman + VR illustration
- `bg-data-particles.jpg` — Dark abstract tech background
- `bg-data-city.jpg` — 3D wireframe city background
- `photo-team-purple.jpg` — Team photo with violet duotone

### 8. The brand "O" shape
The Dinova signature visual is a **large circle** (the "O" in "dinova.one"). Recreate it with CSS:
```css
/* Typical use as background decoration */
.o-ring {
  width: 480px; height: 480px;
  border-radius: 50%;
  border: 90px solid #873BFF; /* or rgba(135,59,255,0.25) for subtle */
  position: absolute;
  /* position off-edge for decorative cropped effect */
}
```

---

## Design principles to follow

1. **Flat, not gradient** — No gradient fills on shapes. Flat color only. Gradients only appear in photographic backgrounds.
2. **Bold stats** — Key numbers always large (80–90px), Poppins ExtraBold, violet color
3. **Minimal shadows** — Prefer flat cards. Use `box-shadow: 0 1px 4px rgba(0,18,26,.07)` max.
4. **Accent colors sparingly** — Orange, pink, cyan, lime are accents only — one per slide max
5. **Two languages** — Italian for body copy, English for headers, product names, taglines
6. **No emoji** — Not used in Dinova brand materials
7. **Uppercase labels** — Section labels always uppercase, wide tracking, small font
8. **The O mark is always present** — Every slide/screen should reference the O shape, either as logo or decorative element
9. **Dark slides feel premium** — Prefer dark (#00121A) for covers, chapters, vision/mission slides
10. **White slides for content** — Multi-column content, service grids, index slides use white background

---

## File map

```
index.html                    ← Design system homepage (START HERE)
README.md                     ← Full brand documentation
SKILL.md                      ← This file
colors_and_type.css           ← All CSS tokens

assets/                       ← Brand images (logos, illustrations, backgrounds)
preview/                      ← Individual component preview cards
slides/index.html             ← 10-slide template kit
ui_kits/corporate/index.html  ← Full corporate UI component library
```
