# Next '26 Sales Restituzione — Web Experience Brief per Claude Design

**Formato:** Single-page web scrollable (HTML/CSS/JS)
**Fruizione:** Proiettata dal presenter in sala, full screen (target 1920×1080 o superiore)
**Durata presentazione:** 25-30 minuti
**Audience:** Reparto Sales Dinova

---

## Concept generale

Sostituisce il classico deck di slide con una **web experience a scorrimento verticale**, navigabile tramite anchor menu fisso in alto. Ogni sezione corrisponde a un "capitolo" della presentazione — il presenter scorre manualmente o usa il menu per saltare da un tema all'altro.

L'esperienza deve essere **visivamente impattante come una keynote**, non come una presentazione corporate standard. Riferimento di tono: Apple Event page o Google I/O recap site — grandi tipografie, hero visuals, numeri in evidenza, transizioni pulite.

---

## Identità visiva

**Base:** Design System Dinova (già in possesso di Claude Design) come fondazione per tipografia, spacing, componenti UI e voice del brand.

**Ibridazione:** Google brand colors come accent layer sovrapposto al Dinova system, per contestualizzare la presentazione nell'universo Google Cloud Next '26. In pratica:
- Struttura, font, spacing → Dinova
- Palette accent, icone tematiche, visual dei prodotti → Google Cloud (blu #4285F4, rosso #EA4335, giallo #FBBC04, verde #34A853, con prevalenza del blu Google Cloud)

**Mood:** Professionale ma dinamico. Niente slide "piatte" — ogni sezione deve sentirsi come una pagina di un sito premium.

**Animazioni:** Sì. Reveal degli elementi allo scroll (fade-in, slide-up), transizioni fluide tra sezioni, numeri che "contano" quando entrano in viewport. Devono essere eleganti e non appesantire il rendering — nessun effetto che rallenti la pagina.

---

## Struttura della navigazione

**Anchor nav fisso in alto** — sticky header con i nomi delle sezioni principali come link. Il presenter può cliccare per saltare direttamente a qualsiasi sezione. La sezione attiva deve essere evidenziata visivamente nel nav.

Sezioni nav (label brevi):
1. Intro
2. Il Paradigm Shift
3. Gemini Enterprise
4. Workspace
5. Agent Platform
6. Storie Cliente
7. CX
8. Sicurezza & Dati
9. Take Away

---

## Struttura dei contenuti — sezione per sezione

Ogni sezione è una "schermata" che occupa almeno il 100vh. Il presenter può stare su una sezione e parlare, poi scorrere alla successiva.

---

### SEZIONE 1 — Hero / Intro

**Layout:** Full-screen hero con titolo grande centrato, sottotitolo, e un elemento grafico evocativo (es. richiamo visivo al Next '26 o allo stack layer).

**Contenuto:**
- Titolo: **Google Cloud Next '26**
- Sottotitolo: *Cosa portarsi a casa — Restituzione per il team Sales*
- Eventuale badge/logo Next '26 in basso

**Note di design:** Deve "sparare" visivamente — è la prima cosa che il Sales team vede proiettata in sala. Tipografia grande, respiro, impatto.

---

### SEZIONE 2 — Il Paradigm Shift

**Layout:** Due colonne contrapposte con grande freccia o elemento di transizione al centro.

**Contenuto:**
- Headline: *"There's an agent for that"*
- Colonna sinistra (passato): "There's an app for that" — icone di app siloed, tono grigio/spento
- Colonna destra (presente): "There's an agent for that" — icone di agenti che attraversano sistemi, tono vivace/colorato
- Testo di supporto sotto: una riga che spiega il shift (es. "Da AI che risponde a domande → ad AI che esegue workflow completi")

**Sotto, nella stessa sezione o in sub-scroll:** tre hero numbers con animazione count-up al reveal:
- **8M** — seat Gemini Enterprise venduti (fine 2025)
- **+60%** — crescita token/min in 3 mesi (10B → 16B)
- **$750M** — investimento partner program 2026-2027

**Note di design:** I numeri devono essere enormi — hero typography. Ognuno con una label descrittiva sotto in testo piccolo.

---

### SEZIONE 3 — Lo Stack Google (visual intermezzo)

**Layout:** Full-width, centrato, sfondo scuro o con gradiente.

**Contenuto:**
- Headline: *"Un sistema integrato, non un insieme di prodotti"*
- Visual principale: riproduzione isometrica dello stack a 6 layer (riferimento: `stack_gcn.png` allegato)
  - Agentic Taskforce
  - Agent Platform
  - Agentic Defense
  - Agentic Data Cloud
  - Research & Frontier Models
  - AI Hypercomputer
- Didascalia sotto: *"Google è l'unico provider che co-progetta tutti i livelli internamente"*

**Note di design:** Questa è una sezione "pausa visiva" — il presenter la usa per orientare l'audience. Lo stack può animarsi layer per layer al reveal (ogni layer appare in sequenza dall'alto o dal basso).

---

### SEZIONE 4 — La Famiglia Gemini Enterprise

**Layout:** Schema a tre colonne o card layout, con Gemini Enterprise come heading unificante sopra.

**Contenuto:**
- Headline: *"Gemini Enterprise: tre prodotti, una famiglia"*
- Sottotitolo: *"La riorganizzazione più importante del portfolio Google AI"*
- Tre card:
  1. **Gemini Enterprise App** — Per i dipendenti. Workspace collaborativa per creare, personalizzare e orchestrare agenti. Target: COO, CHRO, Operations.
  2. **Gemini Enterprise Agent Platform** — Per i developer. L'evoluzione di Vertex AI. Piattaforma per costruire agenti enterprise-grade. Target: CTO, CIO, Engineering.
  3. **Gemini Enterprise for CX** — Per il customer experience. Agenti specializzati che coprono tutto il customer journey. Target: CCO, Customer Service, Retail.
- Sotto ogni card: una frase chiave di posizionamento (max 10 parole)

**Note di design:** Le tre card devono avere pesi visivi equivalenti ma personalità distinte — colori accent o icone differenti per ciascuna. Effetto hover o reveal sequenziale delle card.

---

### SEZIONE 5 — Gemini Enterprise App nel dettaglio

**Layout:** Headline a sinistra, lista di feature a destra con icone. Eventuale mockup o screenshot dell'interfaccia come sfondo o elemento laterale.

**Contenuto:**
- Headline: *"L'app per i business user — la forza lavoro digitale"*
- Cinque feature con icona + titolo + una riga descrittiva:
  - **Agent Designer** — Chiunque costruisce agenti con il linguaggio naturale, senza codice
  - **Projects** — Knowledge base condivise con memoria persistente del team
  - **Inbox** — Cruscotto di controllo per agenti che lavorano in autonomia anche per giorni
  - **Long-running Agents** — Processi multi-step su orizzonti lunghi, senza supervisione costante
  - **Skills** — Competenze aziendali codificate come azioni riutilizzabili
- Citazione/callout in evidenza: *"Non più 'integriamo un chatbot' — costruiamo la forza lavoro digitale"*

---

### SEZIONE 6 — Workspace

**Layout:** Split layout o layout a griglia mista.

**Contenuto:**
- Headline: *"Workspace: produttività agentica integrata"*
- Quattro highlight principali con icona:
  - **Canvas Mode** — Co-crea documenti e slide dentro Gemini Enterprise. Export in formato Office.
  - **Ask Gemini in Chat** — Command line conversazionale connesso a Asana, Jira, Salesforce e altri tool
  - **Migrazione da M365 5x più veloce** — Nuovo servizio cloud-based di import dati (gancio per clienti Microsoft)
  - **MCP Server** — Le capability di Workspace dentro qualsiasi applicazione AI esterna
- Sub-sezione "Novità nelle app" come griglia compatta (2×3 o 3×2):
  - Docs: infografiche, triage automatico
  - Slides: deck generati in un prompt
  - Sheets: spreadsheet in linguaggio naturale
  - Gmail: AI Inbox unificata
  - Drive: insights su tutti i file
  - Vids: video con avatar brandizzati

**Note di design:** La griglia delle app Workspace può usare i loghi ufficiali Google (Docs, Slides, Sheets, ecc.) come anchor visivi — sono immediatamente riconoscibili.

---

### SEZIONE 7 — Agent Platform: Build / Scale / Govern / Optimize

**Layout:** Framework a 4 quadranti o layout orizzontale con 4 pilastri.

**Contenuto:**
- Headline: *"Come Google struttura la piattaforma agenti"*
- Quattro pilastri con titolo, icona e contenuto:
  - **Build** — 200+ modelli disponibili (inclusi modelli open e di terze parti). Agent Studio per sviluppatori.
  - **Scale** — Agent Runtime per esecuzione ad alte prestazioni. Agenti in produzione in secondi.
  - **Govern** — Agent Identity (identità crittografica), Agent Registry (catalogo centralizzato), Agent Gateway (torre di controllo). *Questo è il gancio enterprise.*
  - **Optimize** — Simulation, Evaluation, Observability per misurare e migliorare.
- Callout separato sotto o a lato: *"Govern è il tema che apre le porte enterprise — Identity, Registry, Gateway sono le risposte al CISO"*

**Note di design:** Il pilastro "Govern" può avere un trattamento visivo leggermente distinto (badge "Enterprise-ready" o accent color diverso) per segnalarne l'importanza commerciale.

---

### SEZIONE 8 — Storie Cliente

**Layout:** Card layout orizzontale scrollabile o griglia 2×3. Ogni card = un cliente.

**Contenuto:**
- Headline: *"Casi reali, ROI misurato — non pilot"*
- Sei card cliente, ciascuna con: logo azienda + numero/risultato chiave + una frase di contesto (max 15 parole)

  | Cliente | Risultato chiave | Contesto |
  |---|---|---|
  | **Renault** | €260M risparmiati | Ottimizzazione supply chain e shop floor con agenti AI |
  | **L'Oréal** | Beauty Tech Agentic Platform | Piattaforma proprietaria costruita su Gemini Agent Platform |
  | **Citi** | 90% rollover gestiti dall'AI | Citi Sky: advisory finanziario personalizzato per i clienti |
  | **Color Health** | Virtual Cancer Clinic | Esteso l'accesso allo screening per il cancro al seno |
  | **Humana** | 80M chiamate/anno | 200.000 operatori potenziati con Agent Assist |
  | **Best Buy** | +200% self-service | Agenti per troubleshooting tecnico complesso |

**Note di design:** I numeri/risultati devono essere il focus visivo di ogni card — grande, in evidenza. I loghi cliente ben visibili. Effetto hover sulle card per mostrare il contesto.

---

### SEZIONE 9 — CX, Sicurezza & Dati (sezione compatta)

Questa sezione raccoglie tre temi in un layout compatto — il presenter li tocca in velocità.

**Layout:** Tre blocchi in riga o tre "pannelli" affiancati.

**Blocco 1 — Customer Experience**
- Titolo: *"Gemini Enterprise for CX"*
- Icona + una riga: *"Agenti che coprono tutto il customer journey — discovery, acquisto, post-vendita"*
- Badge clienti reference: Humana · Best Buy · Equifax

**Blocco 2 — Sicurezza**
- Titolo: *"Gli agenti sono sicuri by design"*
- Icona scudo + una riga: *"Wiz integrato nativamente. La sicurezza degli agenti non è un'opzione da aggiungere dopo."*

**Blocco 3 — Dati**
- Titolo: *"Prima i dati, poi gli agenti"*
- Icona torta/layer + una riga: *"Senza fondazione dati, gli agenti non funzionano. Google chiama questa base 'Agentic Data Cloud'."*

**Note di design:** Tre pannelli di uguale peso. Stile "pillola informativa" — denso ma leggibile. Non devono competere con le sezioni precedenti.

---

### SEZIONE 10 — Take Away (closing)

**Layout:** Full-screen, centrato, impatto massimo. Simile alla hero ma con tono conclusivo.

**Contenuto:**
- Headline: *"Cosa portarsi a casa"*
- Quattro take away numerati, grandi, in verticale o in griglia 2×2:
  1. **Il portfolio si chiama Gemini Enterprise.** App · Agent Platform · CX — tre porte d'ingresso, una famiglia.
  2. **La parola chiave è agente, non chatbot.** La conversazione con il cliente è cambiata.
  3. **Govern è il gancio enterprise.** Identity, Registry, Gateway — le risposte al CISO e alla compliance.
  4. **Prima i dati.** Senza fondazione dati, nessun agente funziona. È la prima domanda da fare al cliente.

- Footer con call to action leggera: *"Per approfondire: Pocket Guide Google · Session Library Next '26 · Partner Network Hub"*

**Note di design:** Questa è la slide che il Sales team "fotografa con il telefono". I quattro messaggi devono essere chiarissimi, leggibili anche a distanza dalla proiezione. Tipografia grande, spaziatura generosa.

---

## Specifiche tecniche per Claude Design

**Viewport target:** 1920×1080 (full HD proiettato). Ottimizzare per questa risoluzione come primary — non serve responsiveness mobile.

**Scroll behavior:** smooth scroll. Le sezioni possono essere snap o free-scroll — preferenza per free-scroll con sezioni che occupano almeno 100vh ciascuna.

**Nav sticky:** header fisso in alto, altezza contenuta (max 60px), con i 9 label di sezione come anchor link. Sezione attiva highlighted. Sfondo header leggermente opaco/blur per non coprire il contenuto sottostante.

**Animazioni suggerite:**
- Fade-in + slide-up degli elementi al loro ingresso nel viewport (IntersectionObserver)
- Count-up animato per i numeri nella sezione 2 (8M, +60%, $750M)
- Reveal sequenziale dei layer dello stack nella sezione 3
- Reveal sequenziale delle card nelle sezioni con griglie (cliente, feature)

**Font:** seguire il Design System Dinova per i font di base. Se il sistema usa Google Fonts, considerare l'aggiunta di un font display bold per i titoli hero se non già previsto.

**Allegati di riferimento:**
- `stack_gcn.png` — visual isometrico dello stack da riprodurre nella sezione 3
- `Next 2026 Recap Deck for Partners` (prime ~20 slide) — palette colori Google Cloud, iconografia, stile visual reference

---

## Note finali

Questa è la **versione 1.0** della web experience. Dopo la prima bozza sono previste iterazioni su:
- Timing e densità dei contenuti (alcune sezioni potrebbero essere fuse o espanse)
- Micro-interazioni e dettagli animazione
- Eventuale aggiunta di una sezione appendice/deep dive per Sales più curiosi
