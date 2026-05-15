import { useState } from "react";

const ANNOUNCEMENTS = [
  {
    id: 1,
    category: "AI Hypercomputer",
    categoryColor: "blue",
    badge: "Pre-annuncio",
    title: "Google all-in sull'AI: infrastruttura senza paragoni",
    tagline: "TPU 8ª generazione, Virgo Network, Managed Lustre: Google sta costruendo la macchina AI più potente al mondo — e la rende disponibile a chiunque lavori su GCP.",
    descrizione: "TPU 8t scala fino a 9.600 chip in un singolo superpod con 2 petabyte di memoria condivisa: i modelli frontier si addestrano in settimane, non mesi. TPU 8i è il chip per l'inferenza real-time — triplica la SRAM on-chip, riduce la latenza dei modelli complessi fino al 5x. Virgo Network li connette tutti: 134.000 TPU in un cluster non-blocking con 4x la bandwidth delle generazioni precedenti, eliminando il collo di bottiglia di rete che rallenta i competitor. Managed Lustre porta il throughput dello storage a 10 TB/s — 10x rispetto all'anno scorso, 20x rispetto agli altri hyperscaler. Il messaggio per il mercato è chiaro: Google non segue la corsa all'AI, la sta costruendo mattone per mattone.",
    angolo: "Non si vendono i chip — si vende la credibilità dell'infrastruttura. Per un cliente che valuta dove costruire la propria strategia AI, lavorare su GCP significa avere accesso alla stessa macchina su cui girano Gemini e i modelli Google DeepMind. Il vantaggio competitivo non è acquistabile altrove.",
    kpi: "2.7x price/performance TPU 8t · 10 TB/s storage · 20x vs altri hyperscaler"
  },
  {
    id: 2,
    category: "AI Hypercomputer",
    categoryColor: "blue",
    badge: "GA",
    title: "Compute enterprise: TCO migliore, senza cambiare il codice",
    tagline: "Da Oracle on-prem al cloud con il 20% di risparmio garantito, e VM general-purpose con il doppio della price-performance: GCP ridisegna il TCO dei workload più critici.",
    descrizione: "Le istanze M4N, con 26.57 GiB di RAM per vCPU e IOPS leader di mercato via Hyperdisk Extreme, abbattono il costo totale dei workload Oracle di oltre il 20%: meno core necessari significa meno licenze, con risparmio immediato e misurabile. Oracle Database@Google Cloud si espande a 20 region con supporto GoldenGate e replica BigQuery near-real-time — la migrazione non è mai stata così solida dal punto di vista enterprise. Sul fronte general-purpose, le istanze N4A basate sul processore Arm custom Axion di Google offrono fino a 2x la price-performance e 80% in più di efficienza energetica rispetto alle VM x86 comparabili, su workload Java, microservizi, batch e web server senza toccare una riga di applicazione.",
    angolo: "Il TCO è l'argomento che apre le porte in qualsiasi conversazione di migrazione. Un risparmio superiore al 20% su Oracle è verificabile prima ancora di firmare — e questo accelera l'approvazione del budget a qualsiasi livello decisionale. Sul compute general-purpose, la leva è la semplicità: stesso workload, costo dimezzato, zero rework applicativo.",
    kpi: "-20% TCO Oracle · 2x price-performance Axion N4A · 20 region Oracle@GCP"
  },
  {
    id: 3,
    category: "Agentic Data Cloud",
    categoryColor: "teal",
    badge: "GA",
    title: "I tuoi dati capiscono il business, non solo la sintassi",
    tagline: "Knowledge Catalog mappa relazioni e significati business attraverso l'intero data estate aziendale — in tempo reale, continuamente aggiornato.",
    descrizione: "Knowledge Catalog sostituisce i dizionari di dati statici con un motore di contesto dinamico: estrae entità, risolve definizioni conflittuali tra sistemi diversi e costruisce una mappa semantica del business aggiornata in continuo. Gli agenti AI che operano su questi dati smettono di produrre risposte generiche e iniziano a rispondere con la precisione di un analista senior che conosce l'azienda da anni. Il Deep Research Agent in Gemini Enterprise lo usa nativamente per sintetizzare dati live, documenti interni e ricerche web in un'unica risposta deterministica.",
    angolo: "È la risposta alla domanda che ogni responsabile dati pone durante le demo: 'Ma i vostri agenti capiscono davvero il mio business?' Knowledge Catalog è la risposta tecnica — e commerciale. Senza un layer semantico come questo, qualsiasi progetto AI in produzione rimane una demo.",
    kpi: null
  },
  {
    id: 4,
    category: "Agentic Data Cloud",
    categoryColor: "teal",
    badge: "GA",
    title: "Dati liberi dai silos, su qualsiasi cloud",
    tagline: "Spanner Omni gira su altri cloud, on-prem, persino sul laptop: i dati aziendali sono finalmente portabili senza lock-in.",
    descrizione: "Il database transazionale distribuito di Google esce dal perimetro GCP e diventa deployabile anywhere — multi-cloud, on-prem, edge. L'Iceberg REST Catalog bidirezionale permette lettura e scrittura cross-engine senza ETL. Lakehouse federation per AlloyDB offre sincronizzazione zero-ETL con BigQuery. Per le organizzazioni già su altri cloud, il messaggio è preciso: Google Cloud non richiede di abbandonare lo stack esistente, lo unifica.",
    angolo: "L'argomento anti-lock-in è tra i più usati dai competitor per bloccare conversazioni su GCP. Spanner Omni lo smonta in modo definitivo: è Google che porta i propri database fuori dal proprio cloud, non il cliente che cede il controllo. Efficace come apertura con CTO strutturalmente diffidenti verso i hyperscaler.",
    kpi: "ROI 117% stimato · Payback in 6 mesi"
  },
  {
    id: 5,
    category: "Agentic Data Cloud",
    categoryColor: "teal",
    badge: "GA",
    title: "Chiedi ai tuoi dati invece di interrogarli",
    tagline: "Conversational Analytics: agenti analitici in linguaggio naturale su BigQuery, AlloyDB, Spanner, Looker — senza SQL, senza data scientist.",
    descrizione: "Chiunque in azienda può dialogare in linguaggio naturale con dati live su tutti i principali database Google Cloud. Il sistema supporta follow-up conversazionali, genera insight, suggerisce domande successive. Dashboard Agents trasformano le dashboard statiche in interfacce dialoganti. BigQuery avanza del 35% YoY sulla velocità delle query con Advanced Runtime Optimizations, con savings fino al 34% sui workload variabili via Fluid Scaling.",
    angolo: "Use case immediato e tangibile per figure di business non tecniche — CFO, Operations, Sales — che prendono decisioni sui dati ma non usano SQL. In una proposta di managed services, questo è il risultato visibile che il management apprezza e ricorda. Riduce anche la dipendenza dal team dati per le analisi di routine.",
    kpi: "-34% costi BigQuery · +35% YoY velocità query"
  },
  {
    id: 6,
    category: "Security",
    categoryColor: "coral",
    badge: "GA / Preview",
    title: "Wiz è Google Cloud: security AI-native senza compromessi",
    tagline: "Red, Blue, Green Agent: Wiz porta l'automazione agentic al ciclo completo di sicurezza cloud e AI — ora nativamente integrata in GCP.",
    descrizione: "Wiz è ora parte di Google Cloud, con copertura agentless completa per ambienti multi-cloud e AI. Red Agent (Preview) simula attacchi come un avversario esterno reale. Blue Agent (GA) automatizza threat hunting e investigation dall'intero stack code-to-cloud. Green Agent (Preview) converte i security findings in piani di remediation per i team responsabili, riducendo il Mean Time to Remediation. Wiz Agentic Workflows orchestra tutto in un hub visuale con human-in-the-loop configurabile e drag-and-drop. Coverage totale: qualsiasi CSP, hosted e custom code, cloud e PaaS, ambienti AI inclusi.",
    angolo: "L'integrazione Wiz-GCP abbassa significativamente la frizione nel proporre security cloud ai clienti già su GCP: una piattaforma sola, un vendor da gestire, una console. Nelle conversazioni con CISO, il posizionamento rispetto a stack frammentati (CrowdStrike + Defender + tool custom) diventa immediato.",
    kpi: null
  },
  {
    id: 7,
    category: "Security",
    categoryColor: "coral",
    badge: "GA",
    title: "Il SOC che non dorme mai e impara da ogni alert",
    tagline: "Threat Hunting, Detection Engineering e Third-Party Context Agent: il SOC autonomo è realtà su Google Security Operations.",
    descrizione: "Tre nuovi agenti specializzati completano il portfolio SecOps: il Threat Hunting Agent caccia proattivamente pattern d'attacco nascosti (dwell-time threats, quelli che sfuggono alle difese tradizionali); il Detection Engineering Agent genera automaticamente regole YARA-L per scenari non ancora coperti; il Third-Party Context Agent arricchisce i workflow con dati contestuali da fonti esterne. Il Triage & Investigation Agent, già in GA, ha processato oltre 5 milioni di alert — riducendo il tempo medio di analisi da 30 minuti a 1 minuto.",
    angolo: "L'argomento più efficace con CISO che hanno team SOC sottodimensionati: 'Aggiungete la capacità operativa di un analyst senior che lavora h24, a un costo mensile prevedibile.' Rilevante anche per clienti con obblighi NIS2, dove la copertura h24 è un requisito che pesa sul budget delle strutture più piccole.",
    kpi: "5M+ alert processati · Da 30 min a 1 min per alert"
  },
  {
    id: 8,
    category: "Security",
    categoryColor: "coral",
    badge: "GA",
    title: "Governance AI senza frenare l'innovazione",
    tagline: "Agent Identity, Model Armor, Agent Gateway: ogni agente ha un'identità verificabile, ogni interazione è ispezionata, ogni dato sensibile è protetto.",
    descrizione: "La triade di governance agentic: Agent Identity assegna un ID crittografico univoco a ogni agente con audit trail completo; Model Armor protegge a runtime contro prompt injection, tool poisoning e data leakage — integrato con Firebase, Agent Runtime, Agent Gateway, senza modificare il codice; Agent Gateway è il punto di controllo centralizzato per tutto il traffico agentic, con supporto nativo per i protocolli MCP e A2A. Security Command Center Standard introduce ora data security posture management, compliance e risk analysis senza costi aggiuntivi.",
    angolo: "La governance è l'argomento che trasforma i 'curiosi dell'AI' in 'compratori di AI enterprise'. Non è un vincolo operativo — è il motivo per cui il CFO e il Legal approvano il budget. Nelle conversazioni in cui sono presenti sia il responsabile tecnico che quello di business, questo layer è il fattore abilitante di tutto il resto.",
    kpi: null
  },
  {
    id: 9,
    category: "Security",
    categoryColor: "coral",
    badge: "Preview",
    title: "Controlla l'AI che i tuoi dipendenti usano senza saperlo",
    tagline: "Chrome Enterprise e Google Cloud Fraud Defense: il browser e il digital trust diventano il perimetro di sicurezza dell'era agentica.",
    descrizione: "Con l'esplosione degli strumenti AI non autorizzati (shadow AI), Chrome Enterprise introduce reporting specifico per mappare quali servizi AI vengono usati nell'organizzazione e da chi, con AI-aware extension threat detections che identificano estensioni browser che esfiltrano dati verso endpoint non approvati. In parallelo, reCAPTCHA evolve in Google Cloud Fraud Defense: verifica human, bot e agenti autonomi nell'intera customer journey digitale — dalla registrazione al pagamento — con le stesse segnalature e la stessa scala che proteggono l'ecosistema Google.",
    angolo: "Il tema shadow AI è uno dei più immediati con CISO e DPO: il problema esiste già, è diffuso, e la maggior parte delle organizzazioni non ha ancora strumenti per misurarlo. L'entry point è la visibilità, non il blocco — il che abbassa significativamente la resistenza interna all'adozione.",
    kpi: null
  }
];

const CATEGORIES = ["Tutti", "AI Hypercomputer", "Agentic Data Cloud", "Security"];

const COLOR_MAP = {
  blue:   { bg: "#E6F1FB", border: "#85B7EB", text: "#0C447C", badge: "#185FA5" },
  teal:   { bg: "#E1F5EE", border: "#5DCAA5", text: "#085041", badge: "#0F6E56" },
  coral:  { bg: "#FAECE7", border: "#F0997B", text: "#712B13", badge: "#993C1D" },
};

const BADGE_COLOR = {
  "GA":           { bg: "#EAF3DE", color: "#3B6D11" },
  "Preview":      { bg: "#FAEEDA", color: "#854F0B" },
  "Pre-annuncio": { bg: "#FCEBEB", color: "#A32D2D" },
  "GA / Preview": { bg: "#E1F5EE", color: "#0F6E56" },
};

export default function GCNextCopy() {
  const [active, setActive] = useState("Tutti");
  const [expanded, setExpanded] = useState(null);

  const filtered = active === "Tutti"
    ? ANNOUNCEMENTS
    : ANNOUNCEMENTS.filter(a => a.category === active);

  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1.5rem 1rem", maxWidth: 900, margin: "0 auto" }}>

      <div style={{ marginBottom: "0.25rem", fontSize: 12, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        Google Cloud Next '26 — Copy commerciale
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 500, color: "var(--color-text-primary)", margin: "0 0 0.25rem" }}>
        Annunci principali
      </h2>
      <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: "0 0 1.5rem" }}>
        {ANNOUNCEMENTS.length} card · Agent Platform escluso (sezione dedicata) · tono commerciale
      </p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "1.5rem" }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: "5px 14px",
              borderRadius: 20,
              border: active === cat ? "1.5px solid var(--color-text-primary)" : "1px solid var(--color-border-tertiary)",
              background: active === cat ? "var(--color-text-primary)" : "transparent",
              color: active === cat ? "var(--color-background-primary)" : "var(--color-text-secondary)",
              fontSize: 13,
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              transition: "all 0.15s"
            }}
          >
            {cat}
            {cat !== "Tutti" && (
              <span style={{ marginLeft: 6, opacity: 0.6 }}>
                {ANNOUNCEMENTS.filter(a => a.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {filtered.map(a => {
          const col = COLOR_MAP[a.categoryColor];
          const badgeCol = BADGE_COLOR[a.badge] || BADGE_COLOR["Preview"];
          const isOpen = expanded === a.id;
          return (
            <div
              key={a.id}
              style={{
                border: `1px solid ${col.border}`,
                borderRadius: 12,
                background: "var(--color-background-primary)",
                overflow: "hidden"
              }}
            >
              <div
                style={{ padding: "16px 20px", cursor: "pointer", userSelect: "none" }}
                onClick={() => setExpanded(isOpen ? null : a.id)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20,
                    background: col.bg, color: col.badge, letterSpacing: "0.04em"
                  }}>{a.category}</span>
                  <span style={{
                    fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20,
                    background: badgeCol.bg, color: badgeCol.color
                  }}>{a.badge}</span>
                  {a.kpi && (
                    <span style={{
                      fontSize: 11, padding: "2px 10px", borderRadius: 20,
                      background: "var(--color-background-secondary)", color: "var(--color-text-secondary)"
                    }}>📊 {a.kpi}</span>
                  )}
                  <span style={{ marginLeft: "auto", color: "var(--color-text-tertiary)", fontSize: 16 }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                <div style={{ fontSize: 17, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 6, lineHeight: 1.35 }}>
                  {a.title}
                </div>
                <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.5, fontStyle: "italic" }}>
                  {a.tagline}
                </div>
              </div>

              {isOpen && (
                <div style={{ borderTop: `1px solid ${col.border}`, padding: "16px 20px", background: col.bg + "55" }}>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, fontWeight: 500, color: col.badge, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                      Descrizione
                    </div>
                    <p style={{ fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.65, margin: 0 }}>
                      {a.descrizione}
                    </p>
                  </div>
                  <div style={{
                    padding: "12px 14px", borderRadius: 8,
                    background: col.bg, border: `1px solid ${col.border}`
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 500, color: col.badge, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>
                      💡 Angolo commerciale
                    </div>
                    <p style={{ fontSize: 13, color: col.text, lineHeight: 1.6, margin: 0 }}>
                      {a.angolo}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 24, padding: "12px 16px", borderRadius: 8,
        background: "var(--color-background-secondary)",
        fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6
      }}>
        <strong style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>Struttura dati per Claude Code</strong>
        {" "}— ogni oggetto: id · category · categoryColor · badge · title · tagline · descrizione · angolo · kpi.
        Espandibile con: imageUrl · ctaLabel · ctaUrl.
      </div>
    </div>
  );
}
