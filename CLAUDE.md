# Google Cloud Next '26 — Contesto per agenti AI

> Per la documentazione completa del progetto vedi `README.md`.  
> Per le specifiche V2 vedi `docs/BLUEPRINT.md`.  
> Per l'issue list visiva vedi `docs/ANALISI_V2.md`.

---

## File attivo

`index.html` — unico file di sviluppo. Standalone, nessun build tool, apri direttamente nel browser.

---

## Regole operative

- **Offline-first:** no CDN. Font da `dinova/fonts/`, eventuali librerie JS incluse localmente.
- **Vanilla-first:** CSS animations/transitions prima di JS. JS solo dove CSS non basta.
- **Token CSS sempre:** usare le variabili in `:root`, mai hex hardcodati nel markup.
- **No build tools:** niente npm run build, bundler, compilatori. `node_modules/` è solo per Playwright (test).

## File da non toccare

- `archive/` — read-only
- `uploads/` — read-only
- `docs/` — documentazione, non codice; modificare solo se si aggiorna intenzionalmente l'analisi

## Design system (sintesi)

| Token | Valore |
|---|---|
| `--dark` | `#00121A` |
| `--violet` | `#873BFF` |
| `--g-blue` | `#4285F4` |
| `--g-red` | `#EA4335` |
| `--g-yellow` | `#FBBC04` |
| `--g-green` | `#34A853` |
| `--cyan` | `#5CD9FF` |
| `--lime` | `#AAE505` |
| `--orange` | `#FF7031` |
| `--pink` | `#FF70F3` |
| `--slate` | `#49556D` |

Font: Poppins (300/400/500/600/700/800) da `dinova/fonts/`.

## Struttura sezioni (in ordine)

1. **Intro** — hero a due colonne, contesto restituzione sales
2. **Shift** — "app for that" → "agent for that", numeri chiave
3. **Stack** — Universal Stack GCN26, interattivo a 3 colonne con PNG + label cliccabili
4. **Gemini** — tre porte d'ingresso (App / Agent Platform / CX)
5. **Workspace** — quattro feature (Chat, Canvas, MCP, M365 migration)
6. **Platform** — Build / Scale / Govern / Optimize
7. **Proof** — 6 customer card con ROI misurato
8. **Sales** — playbook per persona (COO, CIO/CTO, CISO, CDO)
9. **Take Away** — 4 messaggi finali

## Issue aperte (da docs/ANALISI_V2.md)

| Priorità | Sezione | Issue |
|---|---|---|
| 🔴 Alta | Proof | Color Health senza logo |
| 🟡 Media | Platform | Card Govern visivamente dominante |
| 🟢 Bassa | Stack | Verificare bold rendering "AI Hypercomputer" a full resolution |
