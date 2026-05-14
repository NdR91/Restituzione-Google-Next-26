# Google Cloud Next '26 — Restituzione Sales

> ⚠️ **PROPRIETÀ ESCLUSIVA DINOVA**
> Tutti i contenuti, codice, design assets e documentazione sono proprietà intellettuale di Dinova. Accesso limitato a personale autorizzato.

---

## 📌 Quick Start

```bash
# Clona la repo
git clone <repository-url>
cd google_next

# Apri nel browser
open index.html
```

---

## 🗂️ Struttura Repo

```
google_next/
├── index.html                        ← 📄 Pagina principale (apri questo!)
├── CLAUDE.md                         ← 🤖 Contesto per agenti AI
├── AGENTS.md                         ← 🤖 Linee guida per agenti AI
│
├── docs/                             ← 📚 Documentazione di progetto
│   ├── BLUEPRINT.md                  ← 🔧 Specifiche tecniche V2
│   ├── ANALISI_V2.md                 ← 📊 Analisi visiva + issue list
│   └── copy.md                       ← 📝 Testi completi di tutte le sezioni
│
├── dinova/                           ← 🎨 Design System
│   ├── assets/
│   │   ├── stack-gcn-clean.png       ← 🖼️ Visual stack GCN26
│   │   └── logos/                    ← 🏢 Loghi clienti (Renault, L'Oréal, Citi, ecc.)
│   ├── colors_and_type.css           ← 🎨 Token colori e tipografia
│   └── Dinova Design System/         ← 📚 Documentazione design system
│
├── uploads/                          ← 📄 Materiali di riferimento (read-only)
│   ├── Next26_WebExperience_Brief.md ← 📋 Brief originale
│   ├── AM_Next26_22-04_Partner...    ← 📝 Transcript keynote
│   └── *.pdf                          ← 📊 Deck presentazione
│
├── archive/                          ← 💾 Versioni precedenti (read-only)
│   ├── v1-standalone.html
│   └── v2.html
│
└── package.json                      ← 📦 Dipendenze (solo Playwright per test)
```

---

## 🚀 Come Lavorare sulla Pagina

### 1. Apri la pagina

```bash
open index.html
```

La pagina è **standalone** — non richiede server, compilazione o dipendenze. Funziona in qualsiasi browser moderno.

### 2. Per modificare contenuti/testi

Trova il testo in `copy.md` → modifica → aggiorna la sezione corrispondente nell'HTML.

### 3. Per modificare stili/grafica

- **Colori/Tipografia**: `dinova/colors_and_type.css`
- **Asset visivi**: `dinova/assets/`
- **Design System completo**: `dinova/Dinova Design System/`

### 4. Per testare modifiche

Dopo ogni modifica, ricarica la pagina nel browser (`Cmd+R`).

---

## 📐 Standard di Design

| Elemento | Valore |
|----------|--------|
| Background principale | `#00121A` (dark navy) |
| Font primario | Poppins |
| Accenti colori | Blu `#4285F4`, Rosso `#EA4335`, Giallo `#FBBC04`, Verde `#34A853` |
| Icone | SVG outline, NO emoji |

---

## 🐛 Issue Conosciuti (da ANALISI_V2.md)

| Priorità | Sezione | Problema |
|----------|---------|----------|
| 🔴 Alta | Proof | Humana: 200.000 → **20.000** operatori |
| 🔴 Alta | Proof | Color Health senza logo |
| 🟡 Media | Platform | Card Govern overshadow其他 |
| 🟢 Bassa | Stack | Verificare bold rendering AI Hypercomputer |

---

## 👥 Collaborazione

### Workflow

1. **Prima di lavorare**: `git pull`
2. **Durante**: lavora direttamente su `Google Cloud Next 26 - V2.html`
3. **Dopo le modifiche**: `git add . && git commit -m "descrizione"` && `git push`

### Regole

- ❌ **NON committare** in `archive/` — è read-only
- ❌ **NON modificare** `install.sh` (già rimosso, ignorato)
- ✅ **Sì a**: modifiche su HTML, CSS, copy.md, asset
- ✅ **Commit frequenti** con messaggi descrittivi

---

## 🔒 Sicurezza

- Repo **privata** — non condividere link pubblici
- Tutti i file sono **proprietà Dinova**
- Loghi clienti: uso limitato a questa presentazione

---

## 📞 Supporto

Per dubbi su struttura o modifiche: consulta `ANALISI_V2.md` per lo stato di ogni sezione.