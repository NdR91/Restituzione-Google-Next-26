# Roadmap — Google Cloud Next '26 Restituzione Sales V3

**Data target:** 18 maggio 2026  
**File attivo:** `index.html`  
**Ultimo aggiornamento:** 14 maggio 2026

---

## Approccio

La V3 non riparte da zero: si modifica `index.html` (V2) tenendo ciò che serve e intervenendo sul resto.  
Prima di iniziare qualsiasi modifica: **salvare `index.html` → `archive/v2-final.html`** come snapshot pulito.

---

## Blocco 0 — Sblocchi (priorità massima)

- [x] **Snapshot V2** — copiare `index.html` → `archive/v2-final.html`
- [x] **GitLab repo** (Andrea) — necessario per la collaborazione con Fabio
- [ ] **Contenuti novità da Fabio** — selezione dei 3 temi per la sezione Novità (Data, Workspace, altro); dipende anche dal Notebook LM che prepara Fabio

---

## Blocco 2 — Ristrutturazione V3

> Lavorare su `index.html`. Ordine consigliato: prima le rimozioni, poi le modifiche, poi le aggiunte.

### Rimozioni

- [x] **Stack** — ripristinata e mantenuta attiva per ora (da rivalutare)
- [x] **Gemini** (3 porte d'ingresso) — eliminata
- [x] **Workspace** — eliminata come sezione standalone
- [x] **Proof** — eliminata
- [x] **Sales** — eliminato il playbook per persona
- [x] **Take Away** — eliminata

### Modifiche

- [x] **Apertura** — Intro ridisegnata (GIF, grafica, logo GCN26, copy aggiornato); Shift mantenuta come sezione standalone senza numeri

- [x] **Gemini Enterprise** (ex Platform) — ristrutturare in 2 blocchi con bottoni interattivi espandibili:
  - **Build & Scale:** Agent Studio, Agent Skills, Long Running Tasks, Agent Inbox
  - **Govern & Optimize:** Agent Registry, Agent Gateway, Agent Identity, Agent Security/Policy
  - Aggiungere visual Gemini Platform semplificata (no testo pesante) nell'header della sezione
  - Nell'approfondimento espanso dei bottoni: includere l'**immagine giga** della piattaforma con tutti i componenti (Agent Registry, Gateway, Identity, Security…)
  - Aggiungere badge disponibilità (Private Preview / GA) dove applicabile

### Aggiunte

- [ ] **Novità** — nuova sezione con 3 bottoni tematici *(dipende da contenuti Fabio)*
  - Workspace (uno dei 3 temi)
  - Data
  - Altro tema da definire con Fabio

- [x] **Chiusura "Unire i puntini"** — nuova sezione con schema visivo/animazione:
  - Gemini Enterprise → Agentic Platform
  - Agentic Platform → AI Security (Agent Identity + Gateway)
  - AI Security → Wiz + Cloudflare (multi-cloud)
  - Costi token agentici (30x) → Small / local model — mostrare dashboard reale (~11M token bruciati per questa presentazione, convertiti in €, confronto con Gemini Pro e con vecchi chatbot tipo Luca)
  - Workspace intelligence → Opportunità vs Microsoft

---

## Blocco 3 — Approfondimenti (Andrea, in parallelo)

- [ ] Studiare reinforcement learning + API dedicata menzionata al Next
- [ ] Approfondire Data Insite Agent
- [ ] Definire caso d'uso Agent Design (risposta alle domande di Max)

---

## Blocco 4 — Review finale

- [ ] Coinvolgere Francesca per decisioni di layout e design
- [ ] Review completa della presentazione
- [ ] ✅ Pronta per il 18 maggio

---

## Riferimenti

- Verbale riunione: `steering_devoff_report.md` (8 maggio 2026)
- Analisi V2: `docs/ANALISI_V2.md`
- Blueprint V2: `docs/BLUEPRINT.md`
- Copy V2: `docs/copy.md`
