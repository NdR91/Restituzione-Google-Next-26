# Analisi visiva e copy — Google Cloud Next '26 V2

> Revisione completa sulla base degli screenshot di tutte le sezioni. Maggio 2026.

---

## INTRO

**Stato: ✅ Nessuna modifica urgente**

- Layout hero a due colonne funziona bene. La divisione testo sinistro / statement destro porta subito il messaggio chiave senza costringere lo scroll.
- Il gradient su "Next '26" (blu → violet → giallo) è visivamente impattante e fedele alla palette Google.
- Il cerchio decorativo (o-ring) in basso a destra aggiunge profondità senza disturbare la lettura.
- Il kicker "Restituzione Sales · Maggio 2026" posiziona correttamente il contesto.

**Copy:**
- "Non una lista di annunci. Una nuova architettura commerciale per parlare di agenti, dati, sicurezza e piattaforma." — attacco efficace, nessuna modifica.
- "Next '26 è stato l'annuncio dello **stack** per l'Agentic Enterprise." — statement chiaro, "stack" in giallo funziona bene come enfasi.

---

## SHIFT

**Stato: ✅ Nessuna modifica urgente**

- Il layout before/after a due card è immediatamente leggibile.
- L'opacità ridotta sul card "Ieri" (testo grigio, titolo sbiadito) comunica bene l'idea di "passato superato".
- Il card "Oggi" con bordo e sfondo blu è ben differenziato e attira l'occhio nel verso giusto.
- I tre numeri in basso (8M / +60% / $750M) in tre colori Google distinti sono visivamente molto forti — il momento più d'impatto della sezione.

**Copy:**
- Il contrasto "There's an app for that" → "There's an agent for that" è il messaggio commerciale corretto e riconoscibile.
- Le descrizioni sotto i titoli sono concise e accurate.
- I tag (CRM, ERP, Email... / Agent Designer, Inbox, Skills...) completano bene senza sovraccaricare.

---

## STACK

**Stato: ✅ Funziona — una verifica tecnica consigliata**

- La sezione interattiva a 3 colonne (PNG stack + label cliccabili + pannello descrittivo) è il punto più originale e funzionale di tutta la pagina.
- Il marker giallo che si sposta sul PNG al click del layer è un dettaglio efficace.
- I chip prodotto nel pannello (es. Gemini Enterprise App, Agent Designer, Inbox...) e il sales angle danno profondità senza appesantire.
- Il bordo violet sinistro sul pannello descrittivo è un tocco coerente con il design system.

**Verifica tecnica:**
- "AI Hypercomputer" nell'elenco label appare visivamente più bold rispetto agli altri layer non-attivi. Potrebbe essere un artefatto di rendering del font su quel breakpoint. Da verificare su schermo a risoluzione piena.

---

## GEMINI

**Stato: ✅ Nessuna modifica urgente**

- "Tre porte d'ingresso. Una famiglia." è il titolo più riuscito del sito — sintetico, narrativo, commercialmente preciso.
- Le 3 card differenziate per colore (blu / violet / verde) separano visivamente i tre entry-point senza frammentare la logica di "sistema unico".
- Il lead paragraph spiega correttamente la riorganizzazione del portfolio.

**Copy:**
- "La riorganizzazione più importante del portfolio Google AI" — posizionamento forte e giustificato.
- I tre sottotitoli di card (Business users / Developer / Customer Experience) sono label chiari e orientati alla persona giusta.
- "Evoluzione di Vertex AI" nell'Agent Platform card è un framing utile per il pubblico tecnico già familiare con GCP.

---

## WORKSPACE

**Stato: ✅ Design ok — copy lead da alleggerire**

- Il layout 2×2 è pulito e bilanciato. I colori dei quattro titoli (blu / giallo / verde / violet) differenziano le feature in modo coerente con la palette.
- Il titolo "L'agente entra nel lavoro quotidiano." è efficace.

**Copy — problema:**
- Il lead paragraph è troppo denso: *"Workspace diventa il contesto operativo: Chat come command line, Canvas per co-creare, Skills per codificare competenze, MCP per portare Workspace in altre AI app."* — quattro concetti concatenati in una frase sola. Difficile da assorbire a schermo in presentazione.
- **Proposta di riscrittura:** *"Workspace diventa il contesto operativo degli agenti. Ogni strumento — dalla Chat al Canvas, dalle Skills all'MCP — è progettato per far lavorare l'AI dentro i processi quotidiani."*

---

## PLATFORM

**Stato: ⚠️ Squilibrio visivo tra le card — intervento consigliato**

- "Build. Scale. Govern. Optimize." come headline è impattante e molto riconoscibile.
- Il lead paragraph è conciso e corretto.

**Problema visivo:**
- Il titolo della card Govern — "Identity · Registry · Gateway" in violet — occupa 3 righe e domina visivamente rispetto a "200+ modelli" e "Agent Runtime" che stanno su 1 riga. Crea uno squilibrio di peso tra le tre card della riga.

**Soluzioni possibili:**
1. Ridurre il `font-size` del titolo Govern portandolo su 1-2 righe (es. abbassare il clamp a ~36px su desktop).
2. Oppure abbreviare il titolo: "Identity, Registry, Gateway" su una riga con virgole invece di `·` — si comprime di più.
3. In alternativa, aumentare il `min-height` delle card in modo che tutte e tre abbiano la stessa altezza e l'asimmetria sia meno evidente.

---

## PROOF

**Stato: ⚠️ Due problemi da risolvere**

- "ROI misurato. Non pilot." è un headline diretto e commercialmente molto efficace.
- La variety di metriche (€ monetario, %, etichette qualitative) è un bene — mostra diversità di use case.

### Problema 1 — Color Health senza logo (priorità alta)

Color Health è l'unica card senza box logo. Il vuoto visivo è evidente soprattutto a confronto con le altre 5 card che hanno tutte il logo container. Opzioni:

- Trovare e aggiungere il logo SVG/PNG di Color Health (esistente, reperibile online).
- In alternativa: trattamento alternativo coerente — box con iniziali stilizzate "CH" o icona generica placeholder con sfondo uniforme.

### Problema 2 — Dato Humana errato (priorità alta)

La descrizione riporta: *"Chiamate/anno con **200.000** operatori potenziati."*

Il transcript ufficiale Google Next '26 indica **"twenty thousand member advocates"** → il dato corretto è **20.000**, non 200.000. Possibile typo originato dal brief.

**Correzione da applicare:** `200.000 operatori` → `20.000 operatori`

---

## SALES

**Stato: ✅ Nessuna modifica urgente**

- Le 4 persona card (COO/Operations · CIO/CTO · CISO · CDO/Data) coprono correttamente le figure decisionali enterprise.
- I titoli delle card ("Forza lavoro digitale", "Agent factory", "Governance by design", "Prima i dati") sono messaggi commerciali forti e memorabili.
- Il copy sotto ogni titolo è conciso e orientato all'azione.

---

## TAKE AWAY

**Stato: ✅ Nessuna modifica urgente**

- Chiusura pulita ed efficace. I 4 messaggi numerati con colori diversi (blu / violet / verde / giallo) si leggono facilmente anche a distanza.
- Il layout a 2×2 con griglia visibile funziona meglio della lista verticale.
- Footer con logo Dinova e tagline "Innovation does. Intelligence guides." è sobrio e corretto.

---

## Riepilogo priorità

| Priorità | Sezione | Issue |
|---|---|---|
| 🔴 Alta | Proof | Dato Humana: `200.000` → `20.000` operatori |
| 🔴 Alta | Proof | Color Health senza logo — buco visivo nella fila |
| 🟡 Media | Platform | Card Govern visivamente dominante — riscrivere o ridurre font-size |
| 🟢 Bassa | Workspace | Lead paragraph troppo denso — proposta di riscrittura disponibile |
| 🟢 Bassa | Stack | Verificare rendering bold su "AI Hypercomputer" a full resolution |
