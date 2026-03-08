```
  _                   ___                            _             
 | |   __ _ _  _   _ |_ _|_ _  __ _ _ _  ___ _ _ __ | |_  _ _  ___ 
 | |__/ _` | || | | || || '_|/ _` | ' \/ -_) '_|| || | || | ' \(_-< 
 |____\__,_|\_, | \_/|___|_|  \__,_|_||_\___|_|   \_,_|\_,_|_||_/__/ 
            |__/                                                     
```

Long-term memory for OpenClaw. SQLite, semantic search, cloud backup.

---

## Install

```bash
# Windows
git clone https://github.com/pnll1991/lobstermind-memory.git "$env:USERPROFILE\.openclaw\extensions\lobstermind-memory"
cd "$env:USERPROFILE\.openclaw\extensions\lobstermind-memory"
npm install
openclaw gateway restart

# macOS/Linux
git clone https://github.com/pnll1991/lobstermind-memory.git ~/.openclaw/extensions/lobstermind-memory
cd ~/.openclaw/extensions/lobstermind-memory
npm install
openclaw gateway restart
```

---

## What It Does

```
$ openclaw memories add "Prefiero TypeScript"
✓ Memory saved [PREFERENCE]

$ openclaw memories search "qué lenguaje uso"
✓ Found 1 memory: Prefiero TypeScript

$ openclaw memories backup --to gdrive
✓ Uploaded to Google Drive
```

- **Natural Language**: "Recordá que soy de Boca" → auto-detects type
- **Semantic Search**: Find memories by meaning, not keywords
- **Cloud Backup**: Google Drive, Dropbox, OneDrive
- **Auto-Dedup**: Never creates duplicates
- **Zero Config**: Works immediately

---

## LobsterMind vs Gigabrain

Both solve long-term memory. Different approaches.

```
┌──────────────────────┬──────────────┬─────────────┐
│ Feature              │ LobsterMind  │ Gigabrain   │
├──────────────────────┼──────────────┼─────────────┤
│ Install Time         │ 1 min        │ 30 min      │
│ Dependencies         │ Node.js only │ +Python+Ollama
│ Configuration        │ Zero         │ 50+ options │
│ Lines of Code        │ 1,400        │ 2,000+      │
│ Cloud Backup         │ ✅           │ ❌          │
│ Natural Language     │ ✅           │ ⚠️          │
│ Web Console          │ ❌           │ ✅          │
│ Entity Tracking      │ ❌           │ ✅          │
└──────────────────────┴──────────────┴─────────────┘
```

### Choose LobsterMind if:
- You want **simple installation** (1 command)
- You prefer **zero configuration**
- You want **cloud backup** (GDrive/Dropbox/OneDrive)
- You prefer **CLI over web UI**

### Choose Gigabrain if:
- You want **comprehensive features**
- You need **entity/person tracking**
- You want **web console and dashboards**
- You don't mind **complex setup**

Both are valid. Choose based on your needs.

---

## Usage

```bash
# Add memory
openclaw memories add "Prefiero TypeScript" --tags "coding"

# Search (natural language)
openclaw memories search "qué lenguaje uso"
openclaw memories search "qué dije ayer"

# List with filters
openclaw memories list --tag "coding"
openclaw memories list --from 2026-03-01

# Backup
openclaw memories backup --to gdrive

# Stats
openclaw memories stats
openclaw memories tags
```

---

## Natural Language Capture

Say in chat:
```
"Recordá que soy de Boca"      → [USER_FACT]
"Prefiero TypeScript"           → [PREFERENCE]
"Decidí usar Node.js"           → [DECISION]
"Mi proyecto es de IA"          → [PROJECT]
```

Auto-detects type from content. No manual tags needed.

---

## Requirements

- OpenClaw 2026.3.7+
- Node.js 22+

---

## Links

- **Issues:** https://github.com/pnll1991/lobstermind-memory/issues
- **Discord:** https://discord.gg/clawd

---

## License

MIT

---

```
Built with SQLite and common sense.
```
