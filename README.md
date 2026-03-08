# LobsterMind Memory

Long-term memory plugin for OpenClaw. SQLite-based storage with semantic search, automatic deduplication, and cloud backup support.

**Author:** Paolozky  
**Version:** 1.0.0  
**License:** MIT  
**Requires:** OpenClaw 2026.3.7+, Node.js 22+

---

## Installation

### Windows (PowerShell)

```powershell
git clone https://github.com/pnll1991/lobstermind-memory.git "$env:USERPROFILE\.openclaw\extensions\lobstermind-memory"
cd "$env:USERPROFILE\.openclaw\extensions\lobstermind-memory"
npm install
openclaw gateway restart
```

### macOS / Linux

```bash
git clone https://github.com/pnll1991/lobstermind-memory.git ~/.openclaw/extensions/lobstermind-memory
cd ~/.openclaw/extensions/lobstermind-memory
npm install
openclaw gateway restart
```

### Verify

```powershell
openclaw memories list
openclaw memories --help
```

---

## Why LobsterMind?

### Comparison

| Feature | LobsterMind | Gigabrain |
|---------|-------------|-----------|
| Installation | 1 command | 30+ min wizard |
| Dependencies | Node.js only | Python + Ollama + Node.js |
| Codebase | 1,400 lines | 2,000+ lines |
| Configuration | Zero config | 50+ options |
| CLI Commands | 15 simple | 20+ complex |
| Cloud Backup | GDrive, Dropbox, OneDrive | Local only |
| Natural Language Search | Full support | Not available |
| Setup Time | 1 minute | 30+ minutes |

### Unique Features

**Natural Language Queries**

```powershell
openclaw memories search "qué dije sobre typescript ayer"
openclaw memories search "preferencias de la semana pasada"
openclaw memories search "últimos 30 días tag:coding"
```

Automatically detects dates, tags, and types from natural language.

**Cloud Backup**

```powershell
openclaw memories setup-cloud
openclaw memories backup --to gdrive
openclaw memories restore backup.json --from gdrive
```

Only plugin with Google Drive, Dropbox, and OneDrive support.

**Auto-Deduplication**

Detects and merges similar memories automatically (85% threshold). No duplicates.

**Fuzzy Search**

```powershell
openclaw memories search "typescrip" --fuzzy
```

Tolerates typos and variations.

---

## Usage

### Basic Commands

```powershell
# Add
openclaw memories add "El usuario prefiere TypeScript"
openclaw memories add "Prefiero Node.js" --tags "coding,stack"

# List
openclaw memories list
openclaw memories list --tag "coding"
openclaw memories list --from 2026-03-01 --to 2026-03-08

# Search
openclaw memories search "TypeScript"
openclaw memories search "qué dije ayer"
openclaw memories search "typescrip" --fuzzy

# Edit/Delete
openclaw memories edit <id> "New content"
openclaw memories delete <id>

# Stats
openclaw memories stats
openclaw memories tags
```

### Backup

```powershell
# Local
openclaw memories backup
openclaw memories list-backups --local
openclaw memories export
openclaw memories import backup.json

# Cloud (requires rclone)
openclaw memories setup-cloud
openclaw memories backup --to gdrive
openclaw memories list-backups --from gdrive
openclaw memories restore backup.json --from gdrive
```

### Maintenance

```powershell
# Cleanup old memories
openclaw memories cleanup --days 90 --dry-run
openclaw memories cleanup --days 90 --action archive
```

---

## Configuration

Edit `~/.openclaw/openclaw.json`:

```json
{
  "plugins": {
    "slots": { "memory": "lobstermind-memory" },
    "entries": {
      "lobstermind-memory": {
        "enabled": true,
        "config": {
          "expiration": {
            "enabled": false,
            "days": 90,
            "action": "archive"
          },
          "backup": {
            "autoBackup": true,
            "interval": 24
          }
        }
      }
    }
  }
}
```

---

## Cloud Backup Setup

### 1. Install rclone

**Windows:** `choco install rclone`  
**macOS:** `brew install rclone`  
**Linux:** `sudo apt install rclone`

### 2. Configure

```powershell
rclone config
```

Follow prompts for `gdrive`, `dropbox`, or `onedrive`.

### 3. Use

```powershell
openclaw memories backup --to gdrive
openclaw memories list-backups --from gdrive
openclaw memories restore backup.json --from gdrive
```

---

## Technical Details

**Database:** `~/.openclaw/workspace/memory/lobstermind-memory.db`  
**Backups:** `~/.openclaw/workspace/memory/backups/`  
**Obsidian:** `~/.openclaw/workspace/obsidian-vault/LobsterMind/Memories.md`  
**Native Markdown:** `~/.openclaw/workspace/MEMORY.md`

### Architecture

- SQLite storage with hash-based embeddings
- Cosine similarity for semantic search
- 85% auto-deduplication threshold
- Natural language date/tag/type parsing
- Works offline, no API keys required

---

## Design Philosophy

### What LobsterMind Does

- Simple installation (1 command)
- Zero configuration
- Cloud backup support
- Natural language queries
- Automatic deduplication
- Clean CLI output

### What LobsterMind Doesn't Do

- Web console (use CLI or Obsidian)
- Entity tracking (use tags)
- Complex audit pipelines
- Benchmarking tools

These are intentional decisions. LobsterMind prioritizes simplicity and reliability over feature completeness.

---

## Troubleshooting

### Plugin Not Loading

```powershell
openclaw doctor
ls ~/.openclaw/extensions/lobstermind-memory
```

### Database Errors

```powershell
openclaw memories backup
rm ~/.openclaw/workspace/memory/lobstermind-memory.db
openclaw gateway restart
```

### Cloud Backup Issues

```powershell
rclone --version
rclone config
rclone ls gdrive:
```

---

## Support

- **Issues:** https://github.com/pnll1991/lobstermind-memory/issues
- **Discussions:** https://github.com/pnll1991/lobstermind-memory/discussions
- **Discord:** https://discord.gg/clawd

---

## License

MIT License

---

## Acknowledgments

Inspired by the Gigabrain project's vision for long-term memory in OpenClaw. LobsterMind takes a different approach: minimal, practical, and working out-of-the-box.

Both projects solve the same problem. Gigabrain is comprehensive and academic. LobsterMind is simple and practical.

---

**Built with SQLite and common sense.**
