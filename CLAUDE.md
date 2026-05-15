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
|---|---|---|
| `--dinova-dark` | `#00121A` |
| `--dinova-violet` | `#873BFF` |
| `--g-blue` | `#4285F4` |
| `--g-red` | `#EA4335` |
| `--g-yellow` | `#FBBC04` |
| `--g-green` | `#34A853` |
| `--dinova-cyan` | `#5CD9FF` |
| `--dinova-lime` | `#AAE505` |
| `--dinova-orange` | `#FF7031` |
| `--dinova-pink` | `#FF70F3` |
| `--dinova-slate` | `#49556D` |

Font: Poppins (300/400/500/600/700/800) da `dinova/fonts/`.

## Struttura sezioni (in ordine)

1. **Intro** — hero con GIF + grafica GCN26
2. **Shift** — app for that → agent for that
3. **Stack** — Universal Stack interattivo
4. **Gemini Enterprise** — Build & Scale + Govern & Optimize
5. **Novità** — 9 annunci Next '26 con filtri e accordion
6. **Closing** — Unire i puntini, 5 nodi connessi

## Issue aperte

> Issue aperte: vedi `docs/ROADMAP.md` e `docs/PR_PROMPT_issues.md`
