# AGENTS.md — Linee guida per agenti AI

Questo file definisce il comportamento atteso per qualsiasi agente AI che lavora su questo repository. Leggere CLAUDE.md per il contesto completo del progetto prima di iniziare qualsiasi sessione.

---

## File da modificare

| File | Note |
|---|---|
| `index.html` | Unico file di sviluppo attivo |
| `dinova/` | Solo se esplicitamente richiesto (es. aggiunta asset) |

## File da NON toccare mai

| File/Cartella | Motivo |
|---|---|
| `archive/` | Versioni storiche — solo lettura |
| `uploads/` | Materiali sorgente — solo lettura |
| `docs/` | Documentazione — modificare solo se si aggiorna intenzionalmente l'analisi |
| `CLAUDE.md` | Documentazione progetto — non auto-modificare |
| `AGENTS.md` | Questo file — non auto-modificare |

---

## Principi di lavoro

### Coerenza visiva
Usare esclusivamente i token CSS definiti in `:root` (vedi CLAUDE.md). Non introdurre nuovi colori, font o dipendenze esterne. La presentazione deve funzionare completamente offline.

### Coerenza narrativa
Il claim centrale è **"There is an agent for that"**. Ogni slide, testo e animazione deve essere funzionale all'apertura di conversazioni commerciali — non alla spiegazione tecnica fine a se stessa. Il pubblico è il reparto sales, non i developer.

### Modifiche strutturali
Se una modifica cambia l'ordine, aggiunge o rimuove sezioni rispetto a quanto definito in CLAUDE.md, **chiedere conferma prima di procedere**.

### Animazioni e interattività
Preferire CSS transitions/animations. Usare JS solo dove CSS non è sufficiente. Nessuna libreria esterna via CDN.

---

## Fonti per i contenuti

Non inventare funzionalità o nomi di prodotto. Verificare sempre nei materiali sorgente:

- `uploads/Next26_WebExperience_Brief.md` — brief originale
- `uploads/AM_Next26_22-04_Partner Summit Keynote-transcript.txt` — trascrizione keynote Partner Summit
- `uploads/Next 2026 Recap Deck for Partners _ Y26.pdf` — deck partner ufficiale Google

---

## Terminologia approvata

| Usare | Evitare |
|---|---|
| Agent Studio | AI Studio (generico) |
| Agent Inbox | notification system |
| Agent Gateway | API gateway |
| Agent Identity | autenticazione agenti |
| Gemini Enterprise | Gemini (generico) |
| Agentic Platform | piattaforma agenti |
| Human-in-the-loop | supervisione umana |
| Private Preview / GA | coming soon / disponibile |

---

## Contesto commerciale (per testi e copy)

La chiusura della presentazione deve collegare:
- **Gemini Enterprise** → proposta Agentic Platform
- **Agentic Platform** → proposta AI Security (Agent Identity + Gateway)
- **AI Security** → proposta Wiz + Cloudflare (apertura multi-cloud: AWS, Azure)
- **Costi token agentici (30x vs chatbot)** → proposta small/local model (privacy, residenza del dato)
- **Workspace intelligence** → opportunità vs Microsoft
