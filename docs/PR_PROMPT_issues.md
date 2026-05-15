# Prompt per antigravity — Backlog issue post-analisi V3

**Reviewer / referente:** Andrea (autore della V3, conosce il file).
**File attivo:** `index.html` — unico file di sviluppo.
**Vincoli generali (da `CLAUDE.md`):** offline-first, vanilla-first, token CSS sempre, no build tools. Non toccare `archive/`, `uploads/`, `dinova/`.
**Snapshot:** prima di qualsiasi PR strutturale fare `cp index.html archive/index-pre-<ticket>.html`.

I ticket sono indipendenti. Possono essere processati singolarmente o accorpati in una PR di "hygiene" (consiglio: T1+T3+T4 in una PR sola, T2 in una PR a sé, T5 dipende da contenuti Fabio).

---

## TICKET 1 — Pulizia residui scroll-snap stack (priorità: bassa, sforzo: 5 min)

**Branch:** `chore/cleanup-stack-residui`

### Contesto
Nel DOM (righe 515-517 di `index.html`) sono rimasti gli elementi `.stack-steps` / `.stack-step` con `data-step`, residuo del precedente sistema di animazione scroll-linked dello stack che è stato sostituito dal click interattivo. CSS riga 280-281 li nasconde con `display: none`. Inutili e fuorvianti.

### Cosa fare
1. Rimuovere il markup:
   ```html
   <div class="stack-steps" aria-hidden="true">
     <div class="stack-step" data-step="-1"></div>...
   </div>
   ```
2. Rimuovere le regole CSS associate:
   ```css
   .stack-steps { display: none; }
   .stack-step { height: auto; }
   ```
3. Verifica veloce: cercare con grep `data-step` / `stack-steps` nel file, eliminare ogni occorrenza, confermare che nessun listener JS le referenzia.

### Acceptance
- [ ] `grep "stack-step" index.html` non trova match
- [ ] Sezione `#stack` funziona invariata: click sui layer, marker giallo, pannello descrittivo

---

## TICKET 2 — Gemini Enterprise: UX detail panel (priorità: media, sforzo: 30-45 min)

**Branch:** `feature/gemini-detail-ux`

### Contesto
La sezione `#gemini-enterprise` ha 8 bottoni (Build & Scale + Govern & Optimize) che aprono un singolo pannello `#geDetail`. Tre problemi:

1. Il pannello mostra **la stessa immagine** `dinova/assets/gemini-platform-full.png` per tutti gli 8 target. Solo il copy cambia. Si svuota il payload visivo.
2. Al click, il pannello si apre **sotto i blocchi** senza scroll: l'utente può non accorgersi che si è espanso (specie se sta sopra al fold).
3. A11y: i `.ge-btn` hanno `aria-expanded` ma manca `aria-controls` che punti a `#geDetail`.

### Cosa fare

**2.1 — Immagine contestuale per target.**
Decidere insieme ad Andrea/Fabio una delle due opzioni:
- **Opzione A (quick win):** mantenere la stessa platform image ma aggiungere overlay/highlight CSS sul nodo corrispondente al bottone cliccato. Richiede coordinate hardcoded sui nodi della PNG → fragile su resize.
- **Opzione B (preferita):** sostituire la PNG con un **diagramma SVG inline** in cui ogni nodo ha un `data-target` matching coi bottoni. Al click si applica una classe `.is-highlighted` al nodo corrispondente (cambio fill/stroke con token Dinova). L'SVG è scalabile, accessibile e on-brand.

**In assenza di SVG pronto**, procedere con A e aprire ticket separato per migrazione a SVG.

**2.2 — Scroll smooth al detail.**
Nel click handler di `initGeminiEnterprise()`, dopo l'apertura del detail, aggiungere:
```js
detail.scrollIntoView({ behavior: 'smooth', block: 'center' });
```
E sul CSS `.ge-detail`: aggiungere `scroll-margin-top: var(--nav-h);` per compensare la nav sticky.

**2.3 — A11y aria-controls.**
Su ogni `.ge-btn` aggiungere `aria-controls="geDetail"`.
Su `#geDetail` aggiungere `role="region"` e `aria-live="polite"` (per annunciare il cambio di contenuto agli screen reader).

### Acceptance
- [ ] Click su un bottone diverso aggiorna il visual (anche solo overlay, opzione A)
- [ ] Click apre lo scroll fino a centrare `.ge-detail` nel viewport
- [ ] Tutti i `.ge-btn` hanno `aria-controls="geDetail"`
- [ ] Lighthouse a11y score non peggiora
- [ ] Test con tastiera: Tab raggiunge i bottoni, Enter espande, focus visibile

---

## TICKET 3 — Allineamento documentazione → codice V3 (priorità: bassa, sforzo: 15 min)

**Branch:** `docs/align-claudemd-v3`

### Contesto
`CLAUDE.md` è fermo a V2: dichiara 9 sezioni (intro/shift/stack/gemini/workspace/platform/proof/sales/takeaway) ma il DOM V3 ha solo 5 sezioni (intro/shift/stack/gemini-enterprise/closing). Le "Issue aperte" che cita (Color Health logo, Govern card dominante, AI Hypercomputer bold) riguardano sezioni eliminate.

Inoltre la tabella del Design System in `CLAUDE.md` cita `--dark`, `--violet` mentre `:root` in `index.html` usa `--dinova-dark`, `--dinova-violet`. Naming difforme.

### Cosa fare
1. Aggiornare la sezione **"Struttura sezioni (in ordine)"** di `CLAUDE.md` con le 5 sezioni reali:
   1. Intro — hero a due colonne con GIF + grafica
   2. Shift — app for that → agent for that
   3. Stack — Universal Stack interattivo
   4. Gemini Enterprise — Build & Scale + Govern & Optimize, 8 bottoni espandibili
   5. Closing — Unire i puntini, 5 nodi connessi
2. Rimuovere la tabella "Issue aperte" con i 3 item V2, oppure sostituirla con un puntatore a `docs/ROADMAP.md` come fonte di verità delle issue aperte.
3. Allineare i nomi token: aggiungere prefisso `--dinova-` ai token Dinova nella tabella (`--dinova-dark`, `--dinova-violet`, `--dinova-cyan`, `--dinova-lime`) per coincidere con il `:root` reale. I token Google (`--g-blue`, `--g-red`, `--g-yellow`, `--g-green`) restano invariati.

### Acceptance
- [ ] `CLAUDE.md` riflette il DOM corrente di `index.html`
- [ ] Tabella Design System combacia 1:1 con `:root`
- [ ] Nessun riferimento a sezioni eliminate (workspace/platform/proof/sales/takeaway) salvo nota storica
- [ ] Update di `docs/ROADMAP.md`: marcare come `[x]` Blocco 2 / Modifiche già completate

---

## TICKET 4 — Closing grid: overlap connettori su breakpoint medio (priorità: media, sforzo: 15-20 min)

**Branch:** `fix/closing-grid-tablet`

### Contesto
La griglia `.closing-grid` ha 5 colonne con connettori SVG in `grid-column` fissi (1, 2, 3, 4, 5). Su breakpoint 640-1180px la media query attiva (riga 356-358) imposta solo `gap: 14px 0`, ma i connettori restano visibili con grid-column fissi. Rischio di overlap o connettori puntati nel vuoto su tablet landscape (~1024px).

### Cosa fare
1. Test in browser a 1024×768, 900×1180, 768×1024 (Chrome DevTools device mode).
2. Se ci sono overlap, scegliere una delle due strategie:
   - **A (preferibile):** trasformare la grid in 3 colonne sotto 1180px, riposizionando i nodi e ruotando i connettori verticali. Mantenere la lettura "Gemini → Platform+Security → Wiz+Cloudflare" in alto e "Token 30× ↘ Workspace+Microsoft" in basso.
   - **B (rapido):** nascondere i `.closing-connector` sotto 1180px (estendere la regola già attiva a 640px) e lasciare lo stack di card senza frecce. Less elegante ma più sicuro.
3. Verificare che `prefers-reduced-motion: reduce` non rompa il layout.

### Acceptance
- [ ] Nessun overlap visibile a 1024px, 900px, 768px
- [ ] Lettura della narrazione "Unire i puntini" resta coerente
- [ ] Nessun connettore puntato verso un nodo che si è spostato

---

## TICKET 5 — Closing: dashboard reale "Token agentici 30×" (priorità: media, sforzo: 1-2h)

**Branch:** `feature/closing-token-dashboard`
**Dipendenza:** dati reali da Fabio (consumo token presentazione, conversione €, confronto Gemini Pro, confronto chatbot Luca).

### Contesto
La ROADMAP (Blocco 2 / Chiusura "Unire i puntini") chiede una **dashboard reale**:
- ~11M token bruciati per questa presentazione
- conversione in €
- confronto con Gemini Pro
- confronto con vecchi chatbot tipo Luca

Oggi nel nodo `.closing-node-cyan` ci sono solo due chip statici (`~11M token`, `×30 vs chatbot tradizionale`). Gap rispetto alla roadmap.

### Cosa fare
1. **Fabio:** consolidare i numeri reali (preview qui sotto). Senza questi, ticket bloccato.
2. **Antigravity:** progettare un mini-widget a 3 metriche allineate visivamente, sostitutivo dei `.token-stat` attuali:
   ```
   ┌──────────────────┬──────────────────┬──────────────────┐
   │   11.2M token    │    € XX,XX       │   30× chatbot    │
   │   (questa demo)  │    costo reale   │   Gemini Pro     │
   └──────────────────┴──────────────────┴──────────────────┘
   ```
3. Usare token Dinova: numeri in `--dinova-cyan`, label in `--muted`, separatori in `--faint`.
4. Bonus: barra comparativa orizzontale che visualizzi la differenza Luca vs Gemini Pro vs Agenti (3 segmenti colorati).
5. Mantenere la dimensione del nodo coerente con gli altri 4 della grid.

### Acceptance
- [ ] 3 numeri reali sostituiscono i due chip statici
- [ ] Layout responsive: a tablet i 3 numeri vanno in colonna, non si compattano
- [ ] Coerenza visiva con il resto dei `.closing-node`
- [ ] Citazione fonte numeri (tooltip o `<small>`)

---

## TICKET 6 — Verifiche asset (priorità: bassa, sforzo: 5 min)

**Branch:** `chore/asset-check`

### Contesto
La V3 referenzia immagini non presenti in V2:
- `dinova/assets/gemini-platform.png` (header `#gemini-enterprise`)
- `dinova/assets/gemini-platform-full.png` (`#geDetail`)
- `dinova/assets/gcp-next-26-logo-white.png` (hero logo)
- `dinova/assets/next26-hero.gif`
- `dinova/assets/next26-graphic.png`
- `dinova/assets/stack-gcn-clean.png`

### Cosa fare
1. Verifica filesystem: tutti gli asset elencati esistono nel path indicato.
2. Verifica peso totale: se la pagina apre offline lenta (>3s su connessione local), ottimizzare i PNG (TinyPNG / pngquant) mantenendo qualità accettabile su full HD da sala.
3. Verifica alt-text: `dinova/assets/next26-hero.gif` ha `alt=""` (decorativo) — confermare che è la scelta corretta a a11y level.

### Acceptance
- [ ] Nessun 404 in console quando si apre `index.html`
- [ ] Page weight totale documentato (annotare in PR description)
- [ ] Alt-text reviewato

---

## TICKET 7 (FUTURO, NON V3) — Decisione strategica: sezione Novità V3 vs V3.1

**Owner:** Fabio.
**Non aprire branch finché non decisa.**

### Domanda
La ROADMAP indica come to-do la "sezione Novità (3 bottoni tematici)" — dipende da contenuti Fabio. È stato preparato un prompt separato (`docs/PR_PROMPT_novita.md`) per integrare i 9 annunci dal file `uploads/gcnext26_copy_v2.jsx`.

Decidere se:
- **A:** integrarlo nella V3 in tempo per il 18 maggio (richiede review Andrea + Francesca a stretto giro)
- **B:** rimandarlo a V3.1 post-restituzione e per il 18 tenere la versione attuale

### Output atteso
Decisione comunicata in chat / nei commenti del Notion GTD Dashboard. Una volta decisa, attivare o archiviare il prompt `PR_PROMPT_novita.md`.

---

## Riepilogo priorità verso il 18 maggio

| # | Ticket | Priorità | Sforzo | Bloccato da |
|---|---|---|---|---|
| 1 | Pulizia stack residui | Bassa | 5 min | — |
| 2 | Gemini detail UX | Media | 30-45 min | — |
| 3 | Allineamento docs | Bassa | 15 min | — |
| 4 | Closing grid tablet | Media | 15-20 min | — |
| 5 | Dashboard token reale | Media | 1-2h | Dati Fabio |
| 6 | Verifica asset | Bassa | 5 min | — |
| 7 | Decisione Novità | — | — | Fabio |

**Suggerimento PM:** Andrea processa T1+T3+T4+T6 in una PR di hygiene (1 oretta totale), poi T2 in una PR a sé (più sensibile a livello di interaction design), poi attende dati Fabio per T5.
