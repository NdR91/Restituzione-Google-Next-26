# Roadmap — Google Cloud Next '26 Restituzione Sales V3

**Data target:** 18 maggio 2026  
**File attivo:** `index.html`  
**Ultimo aggiornamento:** 15 maggio 2026

---

## Stato attuale

Tutti i ticket di hygiene completati (T1–T4, T6). Rimangono aperti solo item bloccati su dati/asset esterni e la review finale.

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

### Ticket hygiene (da PR_PROMPT_issues.md)
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

## Da fare prima del 18 maggio 🔴

- [ ] **Review con Francesca** — layout e design
- [ ] **Verifica 100vh overflow** su `#gemini-enterprise` (rimozione `.platform-visual` da confermare visivamente)
- [ ] **Copy** — tutto il copy è da rivedere (deferred, da fare in un passaggio dedicato)
- [ ] Review completa della presentazione
- [ ] Pronta per il 18 maggio

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
