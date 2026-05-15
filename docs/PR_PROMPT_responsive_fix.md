# Prompt per antigravity — PR: fix responsive verticale (URGENTE)

**Workflow:** PR su `index.html`. Branch: `fix/responsive-vertical`.
**Reviewer:** Andrea.
**Priorità:** ALTA. Bloccante per la restituzione del 18 maggio.
**Vincoli (da `CLAUDE.md`):** offline-first, vanilla-first, token CSS sempre, no build tools.
**Snapshot:** prima del primo commit `cp index.html archive/index-pre-responsive.html`.

---

## Problema

Fabio (laptop, viewport altezza utile ~900px con dock visibile) vede il contenuto **tagliato** in fondo nelle sezioni `#gemini-enterprise` e `#novita`. Sul laptop di Andrea (altezza utile maggiore) la pagina funziona. Comportamento non accettabile per una presentazione che girerà su schermi eterogenei (laptop personali, proiettore sala il 18 maggio).

### Root cause

Nelle ultime modifiche `index.html` ha introdotto uno scroll-snap "presentation mode" che forza ogni sezione esattamente a 100vh con `overflow: hidden`:

```css
/* riga 55 */
main { height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; scroll-behavior: smooth; }

/* riga 56 */
section { position: relative; z-index: 1; height: 100vh; min-height: 100vh; scroll-snap-align: start; display: flex; align-items: center; overflow: hidden; }
```

Combinazione `height: 100vh` + `overflow: hidden` = se il contenuto eccede l'altezza dello schermo, viene **amputato senza scroll possibile**. La sezione `#gemini-enterprise` è la più pesante (kicker + h2 grande + lead + immagine platform + 2 colonne bottoni + detail panel con immagine giga) e sfora per prima.

Documentazione sintomi:
- Su 1080p con altezza utile ~940px → tutto entra, look OK
- Su laptop con altezza utile ~860-900px → ultime righe `.ge-detail` tagliate
- Su monitor 4K → enormi vuoti neri sotto il contenuto (con sezione che impone 100vh ma contenuto a 1200px)
- Su iPad portrait → catastrofico

---

## Obiettivo

Tornare a un layout **fluido e scrollabile**, abbandonando lo scroll-snap rigido. Mantenere il "feel" di sezione piena ma senza forzare l'altezza esatta. La pagina deve girare correttamente su:

- 1366×768 (laptop entry-level)
- 1440×900 (MacBook Air 13")
- 1920×1080 (full HD)
- 2560×1440 (QHD)
- iPad landscape (1024×768)
- Proiettore in sala (ipotizzare 1920×1080 con altezza utile minore per cornice presentation app)

---

## Fix richiesto

### Step 1 — Liberare la pagina dallo snap rigido

Sostituire le regole `main` e `section` con:

```css
main { /* nessuna regola sull'altezza, nessun overflow forzato, nessuno scroll-snap */ }

section {
  position: relative;
  z-index: 1;
  min-height: 100vh;       /* NIENTE height: 100vh, solo min */
  display: flex;
  align-items: center;
  overflow: visible;        /* NIENTE overflow: hidden */
  padding: calc(var(--nav-h) + 24px) 0 48px;  /* margine sotto nav */
}
```

Note:
- `min-height: 100vh` mantiene l'effetto "ogni sezione riempie lo schermo" su contenuti corti.
- Se il contenuto eccede, la sezione cresce naturalmente e lo scroll del documento la mostra tutta.
- `overflow: visible` permette a elementi figli (es. `.o-ring`, ombre, glow) di tracimare senza tagli.
- Lo scroll-snap viene rimosso: chi presenta scrolla normalmente con rotella/touchpad. Conserviamo `scroll-behavior: smooth` su `html` (già presente) per click su anchor della nav.

### Step 2 — Verifica regole specifiche per sezione

Cercare nel file tutte le occorrenze di `height: 100vh`, `min-height: 100vh`, `overflow: hidden` dentro selettori di sezione e armonizzare:

| Selettore | Azione |
|---|---|
| `main` | rimuovere `height`/`overflow`/`scroll-snap-type` |
| `section` | applicare le regole di Step 1 |
| `#stack` riga 413 | tenere `min-height: 100vh`, rimuovere `align-items: center` se conflict |
| `.stack-sticky` riga 414 | togliere `min-height: calc(100vh - var(--nav-h))` se causa altezza eccessiva; lasciare contenuto fluido |
| `#novita .inner` riga 449 | rimuovere `height: 100%` e `display: flex; flex-direction: column` se vincolano altezza dei tile |
| `.novita-grid` riga 487 | rimuovere `flex: 1` (non serve più senza height fissa del parent) |

### Step 3 — Adattare typography agli schermi piccoli

I clamp attuali sono tarati per schermi alti:

```css
h1 { font-size: clamp(72px, 9vw, 150px); }      /* riga 61 */
h2 { font-size: clamp(54px, 6.2vw, 104px); }    /* riga 62 */
```

Su laptop 14" con viewport 1366×768, l'h2 va a `6.2vw = ~85px`, line-height .98 → un titolo a 3 righe consuma ~250px dei 768 disponibili. Sommando padding nav, kicker, lead, e contenuto, esplode.

Aggiungere una media query verticale che riduce la scala su schermi bassi:

```css
@media (max-height: 820px) {
  h1 { font-size: clamp(56px, 7vw, 96px); }
  h2 { font-size: clamp(42px, 5vw, 72px); }
  .lead { font-size: clamp(18px, 1.6vw, 24px); margin-top: 18px; }
  .inner { padding: calc(var(--nav-h) + 14px) 0 32px; }
}

@media (max-height: 680px) {
  h1 { font-size: clamp(44px, 6vw, 72px); }
  h2 { font-size: clamp(32px, 4vw, 56px); }
}
```

Da posizionare insieme alle altre media query (in fondo al blocco `<style>`, prima della regola `prefers-reduced-motion`).

### Step 4 — Sezione `#gemini-enterprise` specifica

È la più pesante. Verifica che il `.ge-detail` non esploda:
- la `.platform-full-img` ha `max-width: 960px`: su laptop bassi può essere ridotta a `max-width: 720px` via media query verticale.
- il `.ge-detail` ha `padding: 48px` (riga ~318): ridurre a 28px sotto 820px verticali.
- la `.platform-visual` con immagine: se prende troppo spazio verticale, ridurre la sua `max-height: 240px` su schermi bassi via media query.

### Step 5 — Sezione `#novita` specifica

La grid è `repeat(3, 1fr)` con 3 righe × 3 colonne = 9 tile. Su schermi corti, l'ultima riga viene tagliata. Fix:

1. Rimuovere `height: 100%` da `#novita .inner`
2. Rimuovere `flex: 1` da `.novita-grid`
3. Sotto 820px verticali, ridurre il padding e il margin-top dei filtri
4. Eventualmente sotto 760px verticali, passare la grid a `repeat(3, 1fr)` con tile più compatte (font-size titolo ridotto, padding ridotto) — oppure cambiare a 4 colonne × 2-3 righe se il vincolo è ostico
5. Verificare che il modal `.novita-modal` non sia interessato (è position: fixed inset: 0, dovrebbe essere robusto)

---

## Acceptance criteria

- [ ] Snapshot creato in `archive/index-pre-responsive.html` prima del commit iniziale
- [ ] Nessun contenuto tagliato silenziosamente su qualsiasi viewport >= 320×600
- [ ] Test manuale su almeno 4 viewport (DevTools device emulation):
  - [ ] 1366×768 (laptop Win)
  - [ ] 1440×900 (MacBook Air 13")
  - [ ] 1920×1080 (full HD)
  - [ ] 1024×768 (iPad landscape)
- [ ] La nav sticky resta visibile durante lo scroll
- [ ] Click sui link nav scrolla correttamente alla sezione (smooth)
- [ ] Sezione `#stack` mantiene il pattern interattivo (label cliccabili → marker giallo + pannello laterale)
- [ ] Sezione `#gemini-enterprise` mostra tutto: header, blocchi Build/Govern, detail panel quando aperto
- [ ] Sezione `#novita` mostra tutte e 9 le tile su schermi normali (>900px verticali); su schermi bassi può richiedere scroll ma niente tile tagliato
- [ ] Sezione `#closing` con i 5 nodi visibile per intero
- [ ] Nessuna regression visiva su `prefers-reduced-motion: reduce`
- [ ] Console pulita, zero errori CSS

---

## Out of scope

- Modifiche al copy
- Modifiche alla logica JS (stack interattivo, accordion Gemini, filtri Novità, modal Novità)
- Modifiche al design system / token CSS
- Sostituzione di asset immagini

---

## Note PM per Fabio e Andrea

- **Decisione architetturale che richiede sign-off:** lo scroll-snap "presentation mode" era una scelta voluta? Se sì, capirne la motivazione prima di rimuoverlo. La mia raccomandazione PM è abbandonarlo perché incompatibile con l'eterogeneità di schermi della restituzione del 18 maggio.
- **Test sul proiettore di sala:** se possibile fare un test fisico prima del 18 sulla configurazione reale (PC + proiettore + risoluzione effettiva). Lo zoom del browser e la modalità presentazione del browser (F11) cambiano l'altezza utile.
- **Plan B:** se Andrea ritiene irrinunciabile lo scroll-snap, fix alternativo è mantenere `min-height: 100vh` + `overflow: auto` (non hidden) sulle sezioni: il contenuto eccedente scrolla internamente alla sezione, lo snap resta. Meno elegante ma compromesso.

---

## QA finale

Prima del merge, registrare un breve GIF/video con scroll da `#intro` a `#closing` su 1366×768 per verificare che nulla resti tagliato. Allegare alla PR.
