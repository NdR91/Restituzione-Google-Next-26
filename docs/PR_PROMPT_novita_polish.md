# Prompt per antigravity — PR: rifinitura sezione Novità

**Workflow:** PR su `index.html`. Branch suggerito: `chore/novita-polish`.
**Reviewer:** Andrea.
**Contesto:** la PR `feature/novita-annunci` è stata mergiata. Questa è una PR di polish con micro-fix di animazione, a11y e CSS hygiene. Nessuna modifica al copy, alla struttura dati o ai 9 contenuti delle card.
**Vincoli (da `CLAUDE.md`):** offline-first, vanilla-first, token CSS sempre, no build tools. Non toccare `archive/`, `uploads/`, `dinova/`.
**Snapshot:** prima del primo commit fare `cp index.html archive/index-pre-novita-polish.html`.

---

## Riepilogo fix (tutti micro, indipendenti)

| # | Fix | Sforzo | File |
|---|---|---|---|
| M1 | Reveal staggered sulle card | 3 min | `index.html` (markup) |
| M2 | Transizione fade sui filtri | 5 min | `index.html` (CSS + JS) |
| M4 | `aria-hidden` iniziale sul body | 2 min | `index.html` (markup) |
| M5 | Padding doppio sulla sezione | 1 min | `index.html` (CSS) |
| M6 | Font-weight titolo card | 1 min | `index.html` (CSS) |
| M8 | Shorthand `transition` non ortodosso | 1 min | `index.html` (CSS) |

Totale stimato: ~15-20 min. Da fare in commit atomici per facilitare review.

---

## M1 — Reveal staggered sulle card

### Problema
Tutte e 9 le card hanno `class="reveal delay-2"`. Risultato: quando la sezione entra in viewport, tutte appaiono insieme con lo stesso ritardo di 240ms. Manca l'effetto a cascata.

### Fix
Sostituire `class="novita-card reveal delay-2"` con `class="novita-card reveal"` su tutte e 9 le card. L'IntersectionObserver le triggera comunque progressivamente in base allo scroll, senza bisogno di delay manuale.

### Acceptance
- [ ] Nessuna card ha più `delay-2`
- [ ] Scrolling sulla sezione produce ingresso progressivo delle card

---

## M2 — Transizione fade sui filtri

### Problema
`.novita-card.hidden { display: none; }` taglia le card senza animazione: visivamente brusco rispetto al tono del resto della pagina (tutte le altre transizioni usano `var(--ease)`).

### Fix
Sostituire il toggle hard con uno step di opacity. CSS:

```css
.novita-card {
  /* ...regole esistenti... */
  transition: transform .3s var(--ease), border-color .3s, opacity .25s var(--ease);
}
.novita-card.hidden {
  opacity: 0;
  pointer-events: none;
  /* niente display:none — gestito via JS con setTimeout per uscire dal flow dopo il fade */
}
```

JS (in `initNovita`, dentro il forEach sui filtri):
```js
cards.forEach(card => {
  const shouldShow = filter === 'all' || card.dataset.category === filter;
  if (shouldShow) {
    card.style.display = '';
    requestAnimationFrame(() => card.classList.remove('hidden'));
  } else {
    card.classList.add('hidden');
    setTimeout(() => {
      if (card.classList.contains('hidden')) card.style.display = 'none';
    }, 250);
  }
});
```

**Alternativa più semplice se la precedente sembra over-engineered:** lasciare `display:none` ma aggiungere un brevissimo fade-in solo quando la card torna visibile, usando una classe `.just-shown` rimossa via `setTimeout`. Antigravity scelga in base al tradeoff complessità/qualità visiva.

### Acceptance
- [ ] Cliccare una pill produce fade-out fluido delle card escluse
- [ ] Cliccare "Tutti" produce fade-in delle card precedentemente nascoste
- [ ] Nessun layout shift brusco durante il cambio filtro

---

## M4 — `aria-hidden` iniziale sul body

### Problema
Il JS aggiunge/rimuove `aria-hidden` ai `.novita-body` al click, ma il markup statico non lo inizializza. Risultato: gli screen reader leggono il contenuto delle 9 card espanse al primo paint (prima di qualsiasi interazione).

### Fix
Su tutti e 9 i `<div class="novita-body" id="novita-body-N">` aggiungere `aria-hidden="true"` nell'HTML:

```html
<div class="novita-body" id="novita-body-1" aria-hidden="true">
```

### Acceptance
- [ ] Tutti e 9 i `.novita-body` hanno `aria-hidden="true"` nel markup statico
- [ ] Cliccando una card, l'attributo passa correttamente a `"false"` (logica JS già esistente)
- [ ] Cliccando di nuovo torna a `"true"`

---

## M5 — Padding doppio sulla sezione

### Problema
Su `#novita` è stato aggiunto `padding-bottom: 60px` direttamente, ma `.inner` (figlio diretto) ha già `padding: 100px 0 72px`. I padding si sommano: ~132px di spazio sotto la sezione, asimmetrico rispetto alle altre sezioni.

### Fix
Rimuovere `padding-bottom: 60px` dalla regola `#novita`:

```css
/* PRIMA */
#novita { scroll-margin-top: var(--nav-h); padding-bottom: 60px; }

/* DOPO */
#novita { scroll-margin-top: var(--nav-h); }
```

### Acceptance
- [ ] Spazio sotto la sezione `#novita` simile a quello sotto `#shift` o `#gemini-enterprise`
- [ ] Nessuna regression visiva sul gap con `#closing`

---

## M6 — Font-weight titolo card

### Problema
`.novita-title` (h3) eredita `font-weight: 800` dalla regola globale `h3 { font-weight: 800 }`. A 24px di font-size in card commerciali è eccessivamente bold: sa di header anziché di titolo card.

### Fix
Aggiungere `font-weight: 600` (o 700) a `.novita-title`:

```css
.novita-title {
  font-size: clamp(20px, 1.8vw, 24px);
  line-height: 1.35;
  max-width: 90%;
  font-weight: 600;
}
```

Antigravity può scegliere 600 (più leggero, più commerciale) o 700 (compromesso). Far validare a Fabio.

### Acceptance
- [ ] Titoli card meno "pesanti", più leggibili come body copy enfatizzato

---

## M8 — Shorthand `transition` non ortodosso

### Problema
Linee 293, 299 usano:
```css
transition: var(--ease) .2s all;
```
La sintassi shorthand standard è `property duration timing-function`. Funziona ma è atipica e in code review Andrea potrebbe segnalarla.

### Fix
Riordinare in formato canonico:
```css
transition: all .2s var(--ease);
```
Cercare nel file `transition: var(--ease)` per essere sicuri di averle prese tutte.

### Acceptance
- [ ] Tutte le `transition` rispettano l'ordine `property duration timing`
- [ ] Comportamento visivo invariato

---

## Out of scope (NON fare in questa PR)

- **M3** (reveal + filtri interaction edge case): aprire ticket separato `fix/novita-reveal-filter-race` solo se Andrea/Fabio lo prioritizzano. Bassa frequenza, alta complessità.
- **M7** (snapshot retroattivo `archive/index-pre-novita.html`): Andrea verifica con git log e crea il file dal commit precedente. Non in questa PR.
- **M9** (smoke test): non è codice, è QA manuale prima del merge.
- Modifiche al copy delle 9 card
- Modifiche alla struttura dati o alla logica accordion principale
- Modifiche ad altre sezioni

---

## QA post-merge

- [ ] Aprire `index.html` offline in Chrome
- [ ] Console pulita, zero 404, zero warning
- [ ] Scroll fino a `#novita`, verificare ingresso card a cascata
- [ ] Cliccare ogni pill, contare le card mostrate (Tutti 9, AIH 2, ADC 3, Sec 4)
- [ ] Verificare che il filtro produca fade, non hard cut
- [ ] Aprire 2 card consecutive: la prima si chiude correttamente
- [ ] Tab navigation da nav fino alle card: focus visibile su tutto
- [ ] Test screen reader (VoiceOver / NVDA) su prima card chiusa: il body non deve essere letto
- [ ] Test a 1920×1080 e 1280×720
