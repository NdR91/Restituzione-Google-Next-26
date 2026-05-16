# Roadmap — Google Cloud Next '26 Restituzione Sales V3

**Data target:** 18 maggio 2026  
**File attivo:** `index.html`  
**Ultimo aggiornamento:** 16 maggio 2026

---

## Stato attuale

Ciclo V3 completato. UI audit (15 mag) + review Francesca (16 mag) processati integralmente. Restano aperti: T5 (bloccato su dati Fabio), Chiusura (in standby — possibile redesign), copy review (deferred), contenuti Stack (deferred).

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

### UI Audit — 15 maggio 2026
- [x] UI-C1 — Novità: redesign grid 3×3 + modal full-viewport
- [x] UI-C2 — Gemini Enterprise: redesign Feature Spotlight (nav sinistra + pannello destra)
- [x] UI-M1 — Background: tutte le sezioni su `var(--dinova-dark)`, rimossi tutti gli hex hardcoded
- [x] UI-M2 — Closing: opacità gradient purple abbassata da `.18` a `.06`
- [x] UI-M3 — Novità h2: inline style rimosso, creata classe CSS
- [x] UI-M4 — Stack: margini laterali allineati al sistema `.inner`

### Review Francesca — 16 maggio 2026
- [x] FR-1 — Intro: kicker a 16px + rimozione sottotitolo
- [x] FR-2 — Gemini: immagine verticale, allineata al titolo
- [x] FR-3 — Stack: tag chips border-radius a 20px (stile pill)
- [x] FR-4 — Novità: gap card portato a 20px
- [x] Bug — `#020811` hardcoded in `#shift` gradient corretto con `var(--dinova-dark)`

---

## In attesa / bloccato ⏳

- [ ] **T5 — Dashboard token reale** (bloccato su dati Fabio)
  - Servono: token count reale, costo €, confronto Gemini Pro, confronto chatbot Luca
  - Sezione: nodo `.closing-node-cyan` in `#closing`
- [ ] **Partner award image** — `dinova/assets/partner-award.png` non ancora disponibile

---

## Standby — decisione pendente

- [ ] **Chiusura `#closing`** — possibile redesign completo (frecce, layout nodi, struttura). Non toccare finché Andrea non decide la direzione.
- [ ] **Shift toggle** (proposta Francesca) — box singolo Ieri→Oggi al click. Scartato per V3, da valutare post-restituzione.

---

## Deferred — dopo la restituzione

- [ ] **Copy review** — tutto il copy da rivedere in un passaggio dedicato
- [ ] **Contenuti Stack** — sezione da ripensare nei contenuti (segnalato da Andrea)
- [ ] **Sfondo blu scuro** — prova con `#03054B` al posto di `--dinova-dark` (proposta Francesca)

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
