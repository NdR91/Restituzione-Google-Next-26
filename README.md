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

Per non sovrascriversi a vicenda, lavorare sempre su branch separate e integrare una sezione alla volta.

### Metodo consigliato

1. **Aggiorna `main` prima di iniziare**

   ```bash
   git checkout main
   git pull
   ```

2. **Crea una branch per la sezione o il task**

   ```bash
   git checkout -b feature/agentic-platform
   ```

   Esempi di nomi:
   - `feature/intro`
   - `feature/gemini-enterprise`
   - `feature/ai-security`
   - `feature/closing`
   - `fix/navigation`

3. **Lavora solo sulla parte assegnata**

   Il file attivo è `index.html`. Se la branch è per una sezione, modificare solo il blocco relativo a quella sezione.

4. **Fai commit piccoli e chiari**

   ```bash
   git add index.html
   git commit -m "Aggiorna sezione Agentic Platform"
   ```

5. **Pubblica la branch e apri una Pull Request**

   ```bash
   git push -u origin feature/agentic-platform
   ```

6. **Prima del merge, riallinea la branch se `main` è cambiato**

   ```bash
   git checkout feature/agentic-platform
   git fetch
   git merge origin/main
   ```

### Regole pratiche

- ❌ Non lavorare direttamente su `main`, salvo correzioni minime concordate.
- ❌ Non modificare contemporaneamente la stessa sezione di `index.html`.
- ❌ Non committare in `archive/` o `uploads/` — sono read-only.
- ❌ Non usare `push --force`, `reset --hard` o comandi distruttivi senza accordo esplicito.
- ✅ Usare branch per sezione quando le modifiche sono indipendenti.
- ✅ Usare branch dedicate per modifiche trasversali, ad esempio stile globale, navigazione o animazioni.
- ✅ Fare merge frequenti su `main`, una sezione alla volta.
- ✅ Tenere commit piccoli e messaggi descrittivi.

---

## 🔒 Sicurezza

- Repo **privata** — non condividere link pubblici
- Tutti i file sono **proprietà Dinova**
- Loghi clienti: uso limitato a questa presentazione

---

## 📞 Supporto

Per dubbi su struttura o modifiche: consulta `ANALISI_V2.md` per lo stato di ogni sezione.
