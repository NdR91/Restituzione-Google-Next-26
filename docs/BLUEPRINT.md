# Google Cloud Next ’26 — Web Experience V2 Blueprint

## Intento

La V2 riposiziona la restituzione come una narrazione di sistema: **Google Cloud Next ’26 non ha presentato prodotti isolati, ma lo stack completo dell’Agentic Enterprise**.

La presentazione deve servire al team Sales Dinova per ricordare e riusare una mappa mentale semplice:

> Dall’infrastruttura agli agenti: ogni layer abilita il successivo.

## Principi visuali

- Base Dinova: dark navy `#00121A`, Poppins, grandi titoli, label uppercase.
- Accenti Google: blu, rosso, giallo, verde usati come layer contestuale, non come brand primario.
- Niente emoji: icone SVG outline o forme geometriche.
- Lo stack è il protagonista: deve essere dinamico, progressivo, quasi “key visual” della conferenza.
- Ogni schermata deve essere leggibile da sala, full HD, con poco testo e messaggi ad alta densità.

## Struttura narrativa

1. **Opening** — Next ’26 in una frase: l’infrastruttura per l’impresa agentica.
2. **Paradigm Shift** — da applicazioni siloed ad agenti che completano workflow.
3. **Universal Stack GCN26** — il visual centrale, riprodotto e animato layer-by-layer.
4. **Layer Journey** — sei layer, ciascuno con: cosa abilita, annunci chiave, sales angle.
5. **Gemini Enterprise** — tre porte d’ingresso: App, Agent Platform, CX.
6. **Workspace** — dove gli agenti entrano nel lavoro quotidiano.
7. **Customer Proof** — casi reali e risultati misurati.
8. **Sales Playbook** — mappa persona → gancio commerciale.
9. **Take Away** — quattro messaggi finali da portare ai clienti.

## Analisi dello stack PNG

Il PNG originale usa una composizione precisa:

- sfondo nero pieno;
- titolo giallo Google in alto a sinistra: `Universal_Stack GCN26`;
- sei tile bianche isometriche, sovrapposte verticalmente;
- bordo blu con micro-accenti Google rosso/giallo/verde sui lati;
- icone blu al centro di ogni tile;
- label bianche, bold, allineate a destra del layer corrispondente;
- ampio vuoto nero, fondamentale per l’impatto keynote.

Nella V2 lo stack è ricostruito in SVG/CSS per essere animabile. Il PNG resta il riferimento di fedeltà.

## Mapping layer → annunci → sales angle

| Layer | Cosa abilita | Annunci/temi | Sales angle |
|---|---|---|---|
| Agentic Taskforce | Agenti nel lavoro quotidiano | Gemini Enterprise App, Agent Designer, Inbox, Skills, Projects | Business users, Operations, CHRO, COO |
| Agent Platform | Build/Scale/Govern/Optimize | ADK, Runtime, Identity, Registry, Gateway, Observability | CTO/CIO/Engineering |
| Agentic Defense | Sicurezza by design | Wiz, Model Armor, Agent Identity/Gateway/Registry | CISO, compliance, risk |
| Agentic Data Cloud | Fondazione dati per agenti | Knowledge Catalog, BigQuery, Data Agent Kit, Looker | Prima domanda: dati pronti? |
| Research & Frontier Models | Capacità AI e multimodalità | Gemini Live API, TTS, long-horizon agents | Task lunghi, realtime, multimodal |
| AI Hypercomputer | Performance e scala | TPU 8, Virgo Network, GKE, storage, Cloud Run | Costi, latenza, scala |

## Deliverable implementato

- `Google Cloud Next 26 - V2.html`: sorgente standalone pulita, non bundled, con CSS/JS inline ordinati.
- Include navigazione sticky, reveal, count-up, sezione stack interattiva a tre colonne e sezioni Sales-ready.
- La sezione stack usa `dinova/assets/google-cloud-next-26-universal-stack-clean.png`, titoli layer cliccabili allineati al PNG e pannello descrittivo con chip/sales angle.
- Lo stack non usa più un lungo scroll-linked stage: l’interazione primaria è click sui layer per evitare spazio scuro residuo e migliorare il ritmo in presentazione.
