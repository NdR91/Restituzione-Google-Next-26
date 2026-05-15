# Roadmap — Google Cloud Next '26 Restituzione Sales V3

**Data target:** 18 maggio 2026  
**File attivo:** `index.html`  
**Ultimo aggiornamento:** 15 maggio 2026

---

## Stato attuale

Ticket di hygiene T1–T4, T6 completati. Aperta sessione di UI audit il 15 maggio (Andrea + AI): identificati 2 critici strutturali e 4 medi stilistici. Da processare in ordine di priorità prima della restituzione.

---

## Completato ✅

### Blocco 0 — Sblocchi
- [x] Snapshot V2 → `archive/v2-final.html`
- [x] GitLab repo (Andrea) — collaborazione con Fabio attiva
- [x] Sezione Novità — implementata da Fabio (9 annunci, filtri pill, accordion)

### Blocco 2 — Ristrutturazione V3
- [x] Rimozioni: Gemini (3 porte), Workspace standalone, Proof, Sales playbook, Take Away
- [x] Stack — mantenuta attiva
- [x] Apertura — Intro ridisegnata (GIF, grafica, logo GCN26); Shift come sezione standalone
- [x] Gemini Enterprise — 2 blocchi Build & Scale + Govern & Optimize, 8 bottoni espandibili, badge disponibilità
- [x] Chiusura "Unire i puntini" — 5 nodi connessi (struttura base; dashboard token ancora da completare)

### Ticket hygiene
- [x] T1 — Pulizia residui scroll-snap stack
- [x] T2 — Gemini Enterprise detail UX (scroll smooth, aria-controls, testo contestuale per bottone)
- [x] T3 — Allineamento CLAUDE.md → DOM V3
- [x] T4 — Closing grid tablet (connettori nascosti sotto 1180px)
- [x] T6 — Verifica asset (nessun 404)

---

## In attesa / bloccato ⏳

- [ ] **T5 — Dashboard token reale** (bloccato su dati Fabio)
  - Servono: token count reale, costo €, confronto Gemini Pro, confronto chatbot Luca
- [ ] **Partner award image** — `dinova/assets/partner-award.png` non ancora disponibile

---

## UI Audit — 15 maggio 2026 🔍

Sessione di analisi completa dell'interfaccia. Problemi classificati per gravità e ordinati per priorità di intervento.

---

### 🔴 CRITICI — bloccano l'uso reale (da fare per primi)

#### UI-C1 — Sezione Novità: contenuto tagliato, non scrollabile
**Sezione:** `#novita`  
**Priorità:** 1 (prima di tutto)  
**Sforzo stimato:** 45–90 min  

**Problema:** La sezione eredita `height: 100vh; overflow: hidden` dalla regola globale `section {}`. Con 9 card accordion + filtri + intestazione, il 60% del contenuto è permanentemente invisibile e non raggiungibile dall'utente. I filtri e la maggior parte delle card non sono mai visibili.

**Soluzioni possibili (scegliere una):**
- **Opzione A (preferita):** Estrarre `#novita` dallo scroll-snap — rimuovere `scroll-snap-align: start` e lasciare che la sezione scorra normalmente all'interno del `main`. Aggiungere `height: auto; min-height: 100vh; overflow: visible` per override della regola globale.
- **Opzione B:** Mantenere la sezione nello snap ma abilitare scroll interno — aggiungere `overflow-y: auto; height: 100vh` con un wrapper interno scrollabile (`max-height: calc(100vh - var(--nav-h))`). Meno elegante ma più conservativo.
- **Opzione C (radicale):** Ridisegnare la sezione come pagina separata o modal overlay, fuori dal sistema a slide.

**Acceptance:**
- [ ] Tutte e 9 le card sono raggiungibili dall'utente
- [ ] I filtri pill sono visibili e funzionanti
- [ ] Il titolo della sezione è visibile all'ingresso
- [ ] Nessun contenuto clippato a nessuna risoluzione desktop (1920, 1440, 1280)

---

#### UI-C2 — Gemini Enterprise: detail panel clippato a 100vh
**Sezione:** `#gemini-enterprise`  
**Priorità:** 2  
**Sforzo stimato:** 30–60 min  

**Problema:** La sezione ha `padding: 0` sull'`.inner` e `overflow: hidden` dalla regola globale. Quando il pannello `#geDetail` si espande al click di un bottone, l'altezza totale del contenuto supera `100vh` e il pannello viene clippato — l'utente non vede il testo che ha appena aperto. Svuota completamente l'interaction design.

**Soluzione:**
- Override `overflow` sulla sezione: `#gemini-enterprise { overflow-y: auto; }`
- Aggiungere `scroll-margin-top: var(--nav-h)` al `#geDetail` (già presente, confermarne il funzionamento)
- Verificare che `scrollIntoView({ behavior: 'smooth', block: 'center' })` funzioni correttamente dopo l'override
- Testare che lo scroll-snap non interferisca con lo scroll interno al click

**Acceptance:**
- [ ] Clic su qualsiasi bottone → pannello visibile integralmente nel viewport
- [ ] Scroll automatico porta il pannello al centro dello schermo
- [ ] La sezione rimane nello snap verticale (il comportamento di "slide" non si perde)
- [ ] Testare su viewport 1280px e 1440px

---

### 🟡 MEDI — degradano la qualità visiva (dopo i critici)

#### UI-M1 — Background inconsistente tra sezioni
**Sezioni:** tutte  
**Priorità:** 3  
**Sforzo stimato:** 20–30 min  

**Problema:** Mix incoerente di valori di background tra le sezioni:
- `#intro`: `var(--dinova-dark)` ✓
- `#shift`: `linear-gradient(180deg, #00121A, #020811)` — hex hardcoded, viola regola token CSS
- `#stack`: `#00121A` — hex hardcoded
- `#gemini-enterprise`: `#00121A` — hex hardcoded
- `#novita`: nessun background esplicito (eredita dal body)
- `#closing`: nessun background esplicito (eredita dal body)

Il `body::before` ha due radial-gradient in `position: fixed` che si spostano visivamente con il contenuto a seconda della sezione attiva, producendo sfumature di colore diverse e non controllate su ogni slide.

**Soluzione:**
- Assegnare `background: var(--dinova-dark)` esplicitamente a tutte le sezioni che non ce l'hanno
- Valutare se il `body::before` gradient debba essere rimosso o sostituito con gradient specifici per sezione (più controllo)
- Sostituire tutti gli `#00121A` hardcoded con `var(--dinova-dark)`
- Per `#shift`, valutare se mantenere il gradient o allinearlo al tema dark uniforme

**Acceptance:**
- [ ] Nessun hex hardcoded per il colore di sfondo nelle sezioni
- [ ] Transizioni tra sezioni visivamente coerenti
- [ ] Ogni sezione ha il suo `background` esplicito

---

#### UI-M2 — Chiusura: aspetto purple non intenzionale
**Sezione:** `#closing`  
**Priorità:** 4  
**Sforzo stimato:** 10–15 min  

**Problema:** Il `radial-gradient(circle at 85% 8%, rgba(135,59,255,.18), transparent 32%)` del `body::before` è fisso in cima-destra del viewport. Sulla sezione Chiusura (ultima slide) questo gradient cade in posizione prominente e dà uno sfondo visivamente purple/cosmico, diverso dal dark uniforme delle altre sezioni. Non è documentato come scelta intenzionale.

**Soluzione:**
- Decidere se è intenzionale (e documentarlo) oppure se va rimosso/ridotto
- Se va mantenuto: spostarlo con una classe `.section-closing-bg` o equivalent override
- Alternativa: abbassare l'opacità del gradient da `.18` a `.08` su tutte le sezioni per uniformità

**Acceptance:**
- [ ] La sezione Chiusura ha un aspetto coerente con le altre sezioni, o diverso ma intenzionale e documentato

---

#### UI-M3 — Inline style su titolo Novità
**Sezione:** `#novita`  
**Priorità:** 5 (da fare insieme a UI-C1)  
**Sforzo stimato:** 5 min  

**Problema:** Il titolo h2 "Cosa è stato annunciato" ha `style="font-size: clamp(38px, 4.8vw, 84px)"` come inline style. Viola la regola "token CSS sempre" del design system e rende impossibile la gestione centralizzata.

**Soluzione:**
- Creare classe `.h2-novita { font-size: clamp(38px, 4.8vw, 84px); }` nel CSS
- Sostituire l'inline style con la classe

---

#### UI-M4 — Stack section: layout fuori dal sistema `.inner`
**Sezione:** `#stack`  
**Priorità:** 6  
**Sforzo stimato:** 20–30 min (solo se si tocca il layout Stack)  

**Problema:** La sezione Stack usa `.stack-sticky` con `padding: 46px 7vw 42px` invece del container `.inner` standard. Questo rompe la coerenza del sistema di layout: su certi viewport il padding laterale Stack è diverso da tutte le altre sezioni, creando asimmetria visiva.

**Nota:** L'attuale implementazione potrebbe essere intenzionale per permettere il layout a 3 colonne full-width. Valutare prima di intervenire.

**Soluzione (se si decide di intervenire):**
- Allineare i margini laterali al sistema `.inner` (min(1520px, calc(100vw - 120px)))
- Oppure documentare esplicitamente in CLAUDE.md che Stack ha un layout custom intenzionale

---

### 📋 APERTI / BLOCCATI — non dipendono dall'audit UI

- [ ] **T5 — Dashboard token reale** (bloccato su dati Fabio)
  - Servono: token count reale, costo €, confronto Gemini Pro, confronto chatbot Luca
  - Sezione: nodo `.closing-node-cyan` in `#closing`
- [ ] **Partner award image** — `dinova/assets/partner-award.png` non ancora disponibile
- [ ] **Copy** — tutto il copy è da rivedere (passaggio dedicato, dopo fix strutturali)

---

### ✅ Sezioni OK — nessun intervento strutturale richiesto

| Sezione | Stato | Note |
|---|---|---|
| `#intro` | ✅ OK | Hero a due colonne. Layout stabile. |
| `#shift` | ✅ OK | Card before/after. Leggibile e coerente. |
| `#stack` | ⚠️ Warning | Funziona. Layout custom intenzionale ma da documentare. Vedi UI-M4. |

---

## Ordine di esecuzione raccomandato

| # | ID | Sezione | Tipo | Priorità | Sforzo |
|---|---|---|---|---|---|
| 1 | UI-C1 | Novità | 🔴 Critico | Immediato | 45–90 min |
| 2 | UI-M3 | Novità h2 | 🟡 Medio | Con UI-C1 | 5 min |
| 3 | UI-C2 | Gemini Enterprise | 🔴 Critico | Subito dopo | 30–60 min |
| 4 | UI-M1 | Background globale | 🟡 Medio | Dopo critici | 20–30 min |
| 5 | UI-M2 | Closing bg | 🟡 Medio | Con UI-M1 | 10–15 min |
| 6 | UI-M4 | Stack layout | 🟡 Medio | Solo se necessario | 20–30 min |
| 7 | T5 | Token dashboard | 📋 Bloccato | Attende Fabio | 1–2h |
| — | — | Copy review | 📋 Deferred | Dopo fix | — |
| — | — | Review Francesca | 📋 Deferred | Fine ciclo | — |

---

## Blocco 3 — Approfondimenti (Andrea, in parallelo, non bloccante)

- [ ] Studiare reinforcement learning + API dedicata menzionata al Next
- [ ] Approfondire Data Insite Agent
- [ ] Definire caso d'uso Agent Design (risposta alle domande di Max)

---

## Riferimenti

- Verbale riunione: `steering_devoff_report.md` (8 maggio 2026)
- Analisi V2: `docs/ANALISI_V2.md`
- Blueprint V2: `docs/BLUEPRINT.md`
- Copy V2: `docs/copy.md`
- Issue backlog: `docs/PR_PROMPT_issues.md`
