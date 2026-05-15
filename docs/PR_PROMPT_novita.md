# Prompt per antigravity — PR: Sezione "Novità" (annunci principali)

**Workflow:** PR su `index.html`. Branch suggerito: `feature/novita-annunci`.
**File attivo:** `index.html` (unico, standalone).
**Riferimento sorgente:** `uploads/gcnext26_copy_v2.jsx` — contiene la struttura dati (9 annunci) e la logica di interazione di un prototipo React. **Non va importato:** va riscritto in vanilla HTML/CSS/JS rispettando i vincoli del progetto.
**Riferimenti documentali:** `CLAUDE.md`, `docs/BLUEPRINT.md`, `docs/ROADMAP.md` (Blocco 2 / Aggiunte → sezione Novità).

---

## 1. Obiettivo

Aggiungere a `index.html` una nuova sezione `#novita` che presenta i 9 annunci principali di Google Cloud Next '26 (esclusi gli Agent Platform, già coperti in `#gemini-enterprise`) raggruppati in 3 categorie: **AI Hypercomputer**, **Agentic Data Cloud**, **Security**.

Pattern UX: card cliccabili che si espandono in-place per mostrare descrizione estesa + angolo commerciale + KPI. Filtri pill per categoria.

---

## 2. Posizionamento

**Inserire la sezione PRIMA di `#closing`**, dopo `#gemini-enterprise`. Aggiornare:

- l'elemento `<section id="novita" data-nav="novita" aria-label="Novità Next '26">`
- la nav (`#nav .nav-links`): aggiungere `<a class="nav-link" href="#novita">Novità</a>` tra "Gemini" e "Chiusura"
- l'IntersectionObserver di `initNav()` rileva automaticamente la nuova sezione tramite `data-nav` — nessuna modifica JS necessaria lì

Se ritieni che la posizione vada cambiata (es. dopo closing come richiesto dal PM Fabio nel brief originale), proponi la variante nella description della PR motivando — non decidere in autonomia.

---

## 3. Vincoli tecnici NON negoziabili

Da `CLAUDE.md`:

- **Offline-first, no CDN.** Niente font esterni, niente Tailwind, niente lib JS. Tutto inline in `index.html`.
- **Vanilla-first.** No React, no framework. CSS animations prima di JS. JS solo per click handler e toggle classi.
- **Token CSS sempre.** Usare le variabili già definite in `:root` (`--dinova-dark`, `--dinova-violet`, `--g-blue`, `--g-red`, `--g-yellow`, `--g-green`, `--dinova-cyan`, `--white`, `--muted`, `--faint`, `--ease`). **Mai** hex hardcoded.
- **No build tools.** No JSX, no transpilation. Solo HTML/CSS/JS standard.
- **Dark theme.** Il JSX sorgente è light theme: invertire la palette mantenendo la differenziazione cromatica per categoria.

---

## 4. Mapping JSX → vanilla

### 4.1 Struttura dati

Replicare l'array `ANNOUNCEMENTS` (9 oggetti) come constante JS dentro lo `<script>` finale di `index.html`, sotto `geminiData`. Mantenere identici i campi: `id`, `category`, `categoryColor`, `badge`, `title`, `tagline`, `descrizione`, `angolo`, `kpi`. **Non modificare i testi:** sono copy commerciale già validato.

### 4.2 Mapping colori → token Dinova

| categoryColor JSX | Token Dinova da usare per accent | Note |
|---|---|---|
| `blue` (AI Hypercomputer) | `--g-blue` (#4285F4) | bordo sinistro card + colore categoria |
| `teal` (Agentic Data Cloud) | `--dinova-cyan` (#5CD9FF) | come sopra |
| `coral` (Security) | `--g-red` (#EA4335) | come sopra |

Background card: `rgba(255,255,255,.03)` come `.shift-card` e `.closing-node` (coerenza con resto della pagina).
Background pannello espanso: tinted leggera del colore categoria (es. `rgba(66,133,244,.06)` per blu).

### 4.3 Mapping badge → token

| Badge | Stile |
|---|---|
| `GA` | colore `--g-green`, bg `rgba(52,168,83,.15)` |
| `Preview` | colore `--g-yellow`, bg `rgba(251,188,4,.15)` |
| `Pre-annuncio` | colore `--g-red`, bg `rgba(234,67,53,.15)` |
| `GA / Preview` | colore `--dinova-cyan`, bg `rgba(92,217,255,.12)` |

Riusare la classe `.ge-badge` esistente, aggiungendo varianti `.ge-badge.pre-annuncio` se necessario.

### 4.4 Mapping interazione

- **Filtri categoria:** 4 pill (`Tutti`, `AI Hypercomputer`, `Agentic Data Cloud`, `Security`) con counter accanto a ciascuna (es. "Security 4"). Stato attivo: bg `--white`, color `--dinova-dark`. Inattivo: bg trasparente, border `rgba(255,255,255,.18)`, color `--muted`.
- **Filtering:** al click di una pill, nascondere via classe CSS (`hidden` o `display:none` su `[data-category]`) le card non corrispondenti. Animare con fade/translateY come il pattern `.reveal` (riusare la transizione `var(--ease)`).
- **Espansione card:** click sulla card → toggle pannello "Descrizione + Angolo commerciale". Solo una card aperta alla volta (replicare il comportamento `activeId` di `initGeminiEnterprise()`).
- **Icona toggle:** `+` chiuso / `−` aperto, ruotato 45° in CSS come la classe `.ge-btn::after`.

---

## 5. Markup HTML (struttura suggerita)

```html
<section id="novita" data-nav="novita" aria-label="Novità Next '26">
  <div class="inner">
    <div class="kicker reveal">Annunci principali</div>
    <h2 class="reveal delay-1">Cosa è stato annunciato.</h2>
    <p class="lead reveal delay-2">Nove novità chiave da Next '26 — divise per layer dello stack. Agent Platform è trattato nella sezione dedicata.</p>

    <div class="novita-filters reveal" role="tablist" aria-label="Filtra per categoria">
      <button class="novita-pill active" data-filter="all" role="tab" aria-selected="true">Tutti <span class="pill-count">9</span></button>
      <button class="novita-pill" data-filter="AI Hypercomputer" role="tab" aria-selected="false">AI Hypercomputer <span class="pill-count">2</span></button>
      <!-- ... -->
    </div>

    <div class="novita-grid">
      <!-- card generate dinamicamente in JS oppure scritte staticamente con data-category="..." -->
      <article class="novita-card" data-category="AI Hypercomputer" data-id="1">
        <button class="novita-card-head" aria-expanded="false" aria-controls="novita-body-1">
          <div class="novita-meta">
            <span class="novita-cat novita-cat--blue">AI Hypercomputer</span>
            <span class="ge-badge pre-annuncio">Pre-annuncio</span>
            <span class="novita-kpi">2.7x price/performance TPU 8t · 10 TB/s storage · 20x vs altri hyperscaler</span>
          </div>
          <h3 class="novita-title">Google all-in sull'AI: infrastruttura senza paragoni</h3>
          <p class="novita-tagline">TPU 8ª generazione, Virgo Network, Managed Lustre…</p>
        </button>
        <div class="novita-body" id="novita-body-1" hidden>
          <div class="novita-desc">
            <div class="novita-label">Descrizione</div>
            <p>…</p>
          </div>
          <div class="novita-angle">
            <div class="novita-label">Angolo commerciale</div>
            <p>…</p>
          </div>
        </div>
      </article>
      <!-- … altre 8 card -->
    </div>
  </div>
</section>
```

**Decisione di build:** preferibile **generare le card dinamicamente in JS** da un array `novitaData` (come fa `setLayer()` per lo stack), per evitare 9 blocchi HTML duplicati e tenere copy + markup separati. Conferma con Fabio se preferisce HTML statico per lettura più semplice in PR review.

---

## 6. CSS

Tutto inline dentro `<style>` esistente, in coda alle altre sezioni. Riusare classi quando possibile (`.ge-badge`, `.kicker`, `.reveal`). Aggiungere solo classi nuove con prefisso `.novita-`.

Punti chiave:

- Grid: `.novita-grid` con `display: flex; flex-direction: column; gap: 14px;` (lista verticale, non griglia, perché le card hanno larghezze diverse di copy)
- `max-width: 920px` sulla griglia, centrata (coerente con `.lead` e con il `maxWidth: 900` del JSX)
- Animazione expand: `max-height` non funziona affidabilmente, usare `grid-template-rows: 0fr → 1fr` o `opacity + translateY` con `transition` di `var(--ease)`
- Hover card chiusa: leggero translateY come `.closing-node`
- Focus visibile sulle pill e sulle card-head (a11y): `outline: 2px solid var(--g-yellow); outline-offset: 3px;`

---

## 7. JS

Aggiungere in coda allo `<script>` esistente, prima delle init finali:

```js
const novitaData = [ /* 9 oggetti identici al JSX */ ];

const initNovita = () => {
  const grid = document.querySelector('.novita-grid');
  if (!grid) return;

  // render dinamico delle card
  grid.innerHTML = novitaData.map(a => `
    <article class="novita-card" data-category="${a.category}" data-id="${a.id}">
      ...
    </article>
  `).join('');

  // gestione filtri (solo una pill attiva)
  // gestione espansione (solo una card aperta)
};

initNovita();
```

**No `innerHTML` con stringhe da fonti utente** (qui i dati sono trustati, ok). Niente `eval`, niente fetch. Tutto sincrono.

---

## 8. A11y checklist

- [ ] Ogni card-head è un `<button>` (non `<div onclick>`)
- [ ] `aria-expanded` su card-head, sincronizzato con stato
- [ ] `aria-controls` sulla card-head punta all'`id` del body corrispondente
- [ ] Le pill filtro: `role="tab"` opzionale, oppure semplici `<button>` con `aria-pressed`
- [ ] Pannello body: `hidden` attribute (non solo `display:none`) per screen reader
- [ ] Outline focus visibile su tutti gli interactive elements
- [ ] Contrasto testo ≥ 4.5:1 (verificare su `--muted` su sfondo card)

---

## 9. Acceptance criteria

- [ ] Sezione `#novita` presente prima di `#closing`
- [ ] Nav aggiornata con link "Novità"
- [ ] Tutte e 9 le card renderizzate, copy identico al JSX sorgente (zero typo)
- [ ] Filtro per categoria funzionante (Tutti / AI Hypercomputer / Agentic Data Cloud / Security) con counter
- [ ] Una sola card aperta alla volta — cliccare una nuova chiude la precedente
- [ ] Cliccare una card già aperta la chiude
- [ ] KPI mostrati solo se presenti (3 card su 9 hanno `kpi: null` → niente chip)
- [ ] Responsive: su mobile (≤640px) i counter delle pill restano leggibili, le pill vanno a wrap
- [ ] Reveal animation funziona alla prima entrata in viewport
- [ ] Nessun hex hardcoded nei nuovi stili
- [ ] `prefers-reduced-motion: reduce` rispettato (già gestito dalla regola globale, verificare)
- [ ] Pagina apre offline senza errori in console
- [ ] Test su Chrome + Firefox a 1920×1080 e a 1280×720

---

## 10. Note PM per la PR

- Branch da `main` (o dal branch corrente della V3). Prima del commit fare snapshot `archive/index-pre-novita.html` per sicurezza.
- Commit atomici suggeriti: (1) struttura HTML + CSS, (2) dati + JS, (3) refinements.
- Description della PR: linkare questo prompt, allegare 2 screenshot (desktop "Tutti" + desktop "Security" filtrato + una card espansa).
- Reviewer: Andrea.
- Non toccare `archive/`, `uploads/`, file in `dinova/`.
- Non modificare `CLAUDE.md` in questa PR (sarà aggiornato in un ticket di hygiene separato).

---

## 11. Out of scope (NON fare in questa PR)

- Non riscrivere il sistema reveal/scroll
- Non rifattorizzare i token CSS esistenti
- Non aggiungere immagini/icone (le icone emoji 📊 💡 del JSX vanno **rimosse** — il blueprint dice "Niente emoji: icone SVG outline o forme geometriche"; sostituire con un divider o un bullet point colorato in token)
- Non gestire i campi futuri `imageUrl`, `ctaLabel`, `ctaUrl` menzionati nel footer JSX
