# 🦞 LobsterMind Memory

## Long-Term Memory Plugin for OpenClaw

> **The memory plugin that ACTUALLY works** — 298 lines, 1 command install, zero config  
> **El plugin de memoria que REALMENTE funciona** — 298 líneas, 1 comando, cero config

[![GitHub stars](https://img.shields.io/github/stars/pnll1991/lobstermind-memory?style=for-the-badge)](https://github.com/pnll1991/lobstermind-memory/stargazers)
[![GitHub license](https://img.shields.io/github/license/pnll1991/lobstermind-memory?style=for-the-badge)](https://github.com/pnll1991/lobstermind-memory/blob/main/LICENSE)
[![OpenClaw](https://img.shields.io/badge/OpenClaw-2026.3.7+-blue?style=for-the-badge)](https://github.com/openclaw/openclaw)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey?style=for-the-badge)](https://github.com/pnll1991/lobstermind-memory)

| vs Gigabrain | LobsterMind |
|--------------|-------------|
| Lines of Code | **298** vs 2000+ |
| Install Time | **1 min** vs 30+ min |
| Dependencies | **1** vs 3+ |
| Config Options | **0** vs 50+ |

---

**Author:** Paolozky  
**Version:** 1.0.0  
**License:** MIT  
**Compatible with:** OpenClaw 2026.3.7+

---

## 🌟 Overview | Descripción General

**English:**  
LobsterMind Memory is a fully functional long-term memory plugin for OpenClaw that enables your AI assistant to remember conversations, facts, and preferences across sessions. Unlike other memory plugins (like Gigabrain with 2000+ lines, Python dependencies, and complex setup), LobsterMind actually works out of the box with proper SQLite storage, semantic search via embeddings, and automatic Obsidian sync. **One command to install, zero config, just works.**

**Español:**  
LobsterMind Memory es un plugin de memoria a largo plazo totalmente funcional para OpenClaw que permite a tu asistente de IA recordar conversaciones, hechos y preferencias entre sesiones. A diferencia de otros plugins de memoria (como Gigabrain con 2000+ líneas, dependencias de Python, y setup complejo), LobsterMind funciona correctamente desde el inicio con almacenamiento SQLite, búsqueda semántica mediante embeddings, y sincronización automática con Obsidian. **Un comando para instalar, cero configuración, simplemente funciona.**

---

## ✨ Features | Características

### English

- **SQLite Storage**: All memories stored locally in a lightweight SQLite database
- **Semantic Search**: Find relevant memories using natural language queries powered by embeddings
- **DashScope Embeddings**: High-quality text embeddings via Alibaba DashScope API (with fallback)
- **Obsidian Sync**: Automatic export of memories to your Obsidian vault in Markdown format
- **CLI Commands**: Manage memories via command line (`--list`, `--add`, `--search`)
- **Auto-Capture**: Automatically captures memories from `<memory_note>` tags in conversations
- **Recall Hooks**: Injects relevant memories before each AI response
- **Zero Configuration**: Works immediately after installation

### Español

- **Almacenamiento SQLite**: Todas las memorias guardadas localmente en una base de datos SQLite ligera
- **Búsqueda Semántica**: Encuentra memorias relevantes usando consultas en lenguaje natural con embeddings
- **Embeddings DashScope**: Embeddings de texto de alta calidad vía API de Alibaba DashScope (con fallback)
- **Sync con Obsidian**: Exportación automática de memorias a tu vault de Obsidian en formato Markdown
- **Comandos CLI**: Gestiona memorias vía línea de comandos (`--list`, `--add`, `--search`)
- **Captura Automática**: Captura memorias automáticamente desde tags `<memory_note>` en conversaciones
- **Hooks de Recall**: Inyecta memorias relevantes antes de cada respuesta de la IA
- **Cero Configuración**: Funciona inmediatamente después de la instalación

---

## ⚡ LobsterMind vs Gigabrain - Comparación Directa

### Nota Importante | Important Note

**English:**  
Both LobsterMind and Gigabrain aim to solve long-term memory for OpenClaw. This comparison is meant to help you choose the right tool for your needs — not to diminish either project. Gigabrain has an ambitious vision and comprehensive feature set. LobsterMind prioritizes simplicity and immediate usability.

**Español:**  
Tanto LobsterMind como Gigabrain buscan resolver la memoria a largo plazo para OpenClaw. Esta comparación tiene como objetivo ayudarte a elegir la herramienta adecuada para tus necesidades, no disminuir ninguno de los proyectos. Gigabrain tiene una visión ambiciosa y un conjunto completo de funciones. LobsterMind prioriza la simplicidad y usabilidad inmediata.

### Tabla Rápida

| Característica | **LobsterMind** | **Gigabrain** |
|----------------|-----------------|---------------|
| **Líneas de código** | 298 (1 archivo) | 2000+ (50+ archivos) |
| **Instalación** | 1 comando | Wizard complejo + config |
| **Dependencias** | Node.js 22+ | Node.js + Python + Ollama |
| **Configuración** | Cero configuración | 50+ opciones JSON |
| **Obsidian** | 1 archivo `Memories.md` | 40+ carpetas y vistas |
| **CLI** | 3 comandos simples | 20+ subcomandos complejos |
| **Embeddings** | API + fallback hash | Ollama local (modelo 9B+) |
| **Windows** | ✅ Nativo | ⚠️ Problemático |
| **Mantenimiento** | Ninguno | Nightly pipeline + audits |
| **Tamaño download** | ~50 KB | ~5 MB+ |

### Comparación Detallada

#### 🎯 Filosofía de Diseño | Design Philosophy

**LobsterMind:**
> "Hagamos algo que funcione, sea simple, y cualquier persona pueda instalar en 1 minuto"
>
> "Let's make something that works, is simple, and anyone can install in 1 minute"

**Gigabrain:**
> "Construyamos el sistema de memoria más completo y académico, con todos los features imaginables, aunque requiera configuración avanzada"
>
> "Let's build the most comprehensive and academic memory system, with every imaginable feature, even if it requires advanced configuration"

**Ambos son válidos. Depende de lo que necesitás.** | **Both are valid. Depends on what you need.**

#### 📦 Complejidad

**Gigabrain requiere:**
- ❌ Python 3.10+ además de Node.js
- ❌ Ollama con modelos de 9B+ (4GB+ RAM)
- ❌ FastAPI para web console
- ❌ Entender "memoria híbrida", "registry projections", "native sync"
- ❌ Configurar 50+ opciones en JSON
- ❌ Ejecutar nightly pipelines, audits, snapshots

**LobsterMind requiere:**
- ✅ Node.js 22+
- ✅ 1 comando de instalación
- ✅ Usar

#### 🔧 Obsidian

**Gigabrain genera:**
```
obsidian-vault/Gigabrain/
├── 00 Home/
├── 10 Native/
├── 20 Nodes/active/
├── 20 Nodes/archived/
├── 30 Views/ (6+ archivos)
├── 40 Reports/ (4+ archivos)
└── Inbox/
```

**LobsterMind genera:**
```
obsidian-vault/Gigabrain/
└── Memories.md  ← Un solo archivo limpio
```

#### 🧠 Embeddings

**Gigabrain:**
1. Instala Ollama
2. Descarga modelo `qwen3.5:9b` (4GB+)
3. Configura embeddings locales
4. Si Ollama falla → no hay búsqueda semántica

**LobsterMind:**
1. DashScope API (sin downloads)
2. Si API falla → fallback hash automático
3. Siempre funciona

#### 💻 CLI

**Gigabrain:**
```bash
node scripts/gigabrainctl.js nightly --config ~/.openclaw/openclaw.json
node scripts/gigabrainctl.js vault build --skip-reports
node scripts/gigabrainctl.js audit --mode apply --threshold 0.78
```

**LobsterMind:**
```bash
openclaw memories --list
openclaw memories --add "Tu memoria"
openclaw memories --search "búsqueda"
```

### 📊 ¿Cuál Elegir? | Which to Choose?

| Si querés... | If you want... | Elegí... | Choose... |
|--------------|----------------|----------|-----------|
| Investigar sistemas de memoria | Research memory systems | Gigabrain | Gigabrain |
| Arquitectura compleja académica | Academic complex architecture | Gigabrain | Gigabrain |
| Control total de cada setting | Full control of every setting | Gigabrain | Gigabrain |
| Features avanzados (audit, entity graph, web console) | Advanced features | Gigabrain | Gigabrain |
| **Que funcione YA** | **That works NOW** | **LobsterMind** | **LobsterMind** |
| **Instalar en 1 minuto** | **Install in 1 minute** | **LobsterMind** | **LobsterMind** |
| **Entender tu plugin** | **Understand your plugin** | **LobsterMind** | **LobsterMind** |
| **Windows sin dolor** | **Windows without pain** | **LobsterMind** | **LobsterMind** |
| **Sin Python/Ollama** | **No Python/Ollama** | **LobsterMind** | **LobsterMind** |
| **Simplicidad** | **Simplicity** | **LobsterMind** | **LobsterMind** |
| **95% de casos con 10% complejidad** | **95% use cases with 10% complexity** | **LobsterMind** | **LobsterMind** |

### 💬 Para los Escépticos | For the Skeptics

> "Pero Gigabrain tiene más features..."
>
> "But Gigabrain has more features..."

**Respuesta | Answer:** ¿Cuántas usás realmente? | How many do you actually use?

**Gigabrain incluye:**
- Web console (FastAPI dashboard)
- Benchmarking harness
- Nightly audit pipeline
- Entity relationship graph
- Memory compression/archiving
- Vault mirroring with dual-surface
- Review queues
- Metrics reports

**¿Necesitás todo eso para memoria personal?** | **Do you need all that for personal memory?**

Probablemente no. | Probably not.

**LobsterMind tiene lo que importa:**
- ✅ Guardar memorias | Save memories
- ✅ Buscar memorias | Search memories
- ✅ Ver memorias | View memories
- ✅ Sync con Obsidian | Obsidian sync
- ✅ Funciona siempre | Works always

**Si después necesitás features avanzados, migrá a Gigabrain.** | **If you later need advanced features, migrate to Gigabrain.**

---

## 🔧 Why LobsterMind Works (When Others Don't) | ¿Por qué LobsterMind Funciona?

### English

**The Problem with Gigabrain and Similar Plugins:**

Many memory plugins for OpenClaw (like [Gigabrain](https://github.com/legendaryvibecoder/gigabrain)) have conceptual designs but fail in practice because:

1. ❌ **Broken Plugin API Usage**: They use outdated or incorrect OpenClaw plugin registration patterns
2. ❌ **Missing Dependencies**: Don't properly bundle or install native modules like `better-sqlite3`
3. ❌ **No Error Handling**: Crash silently when embeddings API fails or database isn't initialized
4. ❌ **Incomplete Implementation**: Have hooks defined but never actually register them with the OpenClaw runtime
5. ❌ **No CLI Integration**: Command registration fails due to incorrect API usage
6. ❌ **Platform Issues**: Don't handle Windows paths, permissions, or Node.js native module compilation

**Why LobsterMind Works:**

1. ✅ **Correct Plugin Format**: Uses the official OpenClaw plugin SDK pattern (`register(api)` with proper export)
2. ✅ **Tested on Windows**: Developed and tested on Windows 11 with proper path handling
3. ✅ **Robust Error Handling**: Every async operation has try-catch blocks with detailed logging
4. ✅ **Working Hooks**: Both `before_prompt_build` and `before_model_resolve` hooks are properly registered and functional
5. ✅ **CLI Integration**: Uses `api.registerCli()` with the correct Commander.js pattern
6. ✅ **Fallback Embeddings**: If DashScope API fails, falls back to hash-based embeddings (still enables basic search)
7. ✅ **Native Module Support**: Properly compiles and links `better-sqlite3` for your platform
8. ✅ **Obsidian Integration**: Actually writes to your vault with proper Markdown formatting

### Español

**El Problema con Gigabrain y Plugins Similares:**

Muchos plugins de memoria para OpenClaw (como [Gigabrain](https://github.com/legendaryvibecoder/gigabrain)) tienen diseños conceptuales pero fallan en la práctica porque:

1. ❌ **Uso Roto de la API del Plugin**: Usan patrones de registro de plugins de OpenClaw desactualizados o incorrectos
2. ❌ **Dependencias Faltantes**: No empaquetan o instalan correctamente módulos nativos como `better-sqlite3`
3. ❌ **Sin Manejo de Errores**: Colapsan en silencio cuando falla la API de embeddings o la base de datos no está inicializada
4. ❌ **Implementación Incompleta**: Tienen hooks definidos pero nunca los registran realmente con el runtime de OpenClaw
5. ❌ **Sin Integración CLI**: El registro de comandos falla debido al uso incorrecto de la API
6. ❌ **Problemas de Plataforma**: No manejan rutas de Windows, permisos, o compilación de módulos nativos de Node.js

**Nota importante:** Gigabrain tiene una visión excelente para memoria a largo plazo en OpenClaw. LobsterMind está inspirado en esa visión, pero toma un enfoque técnico diferente: minimalista, práctico y sin dependencias complejas. Ambos proyectos buscan resolver el mismo problema desde ángulos distintos.

**Por qué LobsterMind Funciona:**

1. ✅ **Formato Correcto de Plugin**: Usa el patrón oficial del SDK de plugins de OpenClaw (`register(api)` con exportación adecuada)
2. ✅ **Probado en Windows**: Desarrollado y probado en Windows 11 con manejo correcto de rutas
3. ✅ **Manejo Robusto de Errores**: Cada operación asíncrona tiene bloques try-catch con logging detallado
4. ✅ **Hooks Funcionales**: Tanto los hooks `before_prompt_build` como `before_model_resolve` están correctamente registrados y funcionan
5. ✅ **Integración CLI**: Usa `api.registerCli()` con el patrón correcto de Commander.js
6. ✅ **Fallback de Embeddings**: Si la API de DashScope falla, usa fallback a embeddings basados en hash (habilita búsqueda básica)
7. ✅ **Soporte de Módulos Nativos**: Compila y enlaza correctamente `better-sqlite3` para tu plataforma
8. ✅ **Integración con Obsidian**: Realmente escribe en tu vault con formato Markdown adecuado

---

## 📦 Installation | Instalación

### Quick Install (Recommended) | Instalación Rápida (Recomendada)

#### Windows (PowerShell)

```powershell
# Clone the repository
git clone https://github.com/pnll1991/lobstermind-memory.git "$env:USERPROFILE\.openclaw\extensions\lobstermind-memory"

# Install dependencies
cd "$env:USERPROFILE\.openclaw\extensions\lobstermind-memory"
npm install

# Restart OpenClaw Gateway
openclaw doctor
```

#### macOS / Linux (Bash)

```bash
# Clone the repository
git clone https://github.com/pnll1991/lobstermind-memory.git ~/.openclaw/extensions/lobstermind-memory

# Install dependencies
cd ~/.openclaw/extensions/lobstermind-memory
npm install

# Restart OpenClaw Gateway
openclaw doctor
```

### Manual Install | Instalación Manual

1. **Download the plugin**:
   - Go to [Releases](https://github.com/pnll1991/lobstermind-memory/releases) and download the latest version
   - Or clone the repository: `git clone https://github.com/pnll1991/lobstermind-memory.git`

2. **Copy to OpenClaw extensions folder**:
   - Windows: `C:\Users\<YourUsername>\.openclaw\extensions\lobstermind-memory`
   - macOS/Linux: `~/.openclaw/extensions/lobstermind-memory`

3. **Install dependencies**:
   ```bash
   cd lobstermind-memory
   npm install
   ```

4. **Enable the plugin** in your `openclaw.json`:
   ```json
   {
     "plugins": {
       "slots": {
         "memory": "paolo-memory-v2"
       },
       "entries": {
         "paolo-memory-v2": {
           "enabled": true,
           "config": {
             "enabled": true
           }
         }
       }
     }
   }
   ```

5. **Restart OpenClaw**:
   ```bash
   openclaw doctor
   ```

---

## 🚀 Usage | Uso

### CLI Commands | Comandos CLI

#### List Memories | Listar Memorias

```bash
openclaw memories --list
```

**Output:**
```
Recent memories (3):
1. [MANUAL] El usuario prefiere usar TypeScript para todos los proyectos
2. [USER_FACT] El usuario trabaja en proyectos de machine learning
3. [PREFERENCE] El usuario prefiere respuestas en español
```

#### Add Memory | Agregar Memoria

```bash
openclaw memories --add "El usuario trabaja con Python y TypeScript"
```

**Output:**
```
Memory saved with ID: cecd61bc974031ae
```

#### Search Memories | Buscar Memorias

```bash
openclaw memories --search "lenguajes de programación"
```

**Output:**
```
Found 2 memories:
1. [PREFERENCE] El usuario prefiere usar TypeScript para todos los proyectos (score: 0.87)
2. [USER_FACT] El usuario trabaja con Python y TypeScript (score: 0.82)
```

### Memory Note Tags | Etiquetas de Nota de Memoria

To explicitly save something to memory during a conversation, use the `<memory_note>` tag:

```xml
<memory_note type="USER_FACT" confidence="0.9">El usuario tiene un perro llamado Max</memory_note>
```

**Available Types:**
- `USER_FACT` - Facts about the user
- `PREFERENCE` - User preferences
- `DECISION` - Decisions made
- `ENTITY` - Important entities (people, places, things)
- `EPISODE` - Specific events or episodes
- `AGENT_IDENTITY` - Information about the assistant itself
- `CONTEXT` - General context

**Confidence Levels:**
- `0.9` - Very confident (explicitly stated)
- `0.7` - Moderately confident (inferred)
- `0.5` - Low confidence (speculative)

### Obsidian Sync | Sincronización con Obsidian

Memories are automatically exported to:
```
<workspace>/obsidian-vault/Gigabrain/Memories.md
```

**Format:**
```markdown
# Memories

## [[2026-03-08]]

- [USER_FACT] El usuario tiene un perro llamado Max (confidence: 0.90)
- [PREFERENCE] El usuario prefiere respuestas en español (confidence: 0.85)

## [[2026-03-07]]

- [MANUAL] El usuario trabaja en proyectos de machine learning (confidence: 0.90)
```

---

## ⚙️ Configuration | Configuración

### DashScope API Key (Optional) | Clave de API DashScope (Opcional)

For better semantic search, configure your DashScope API key. The plugin works without it (using hash-based fallback), but embeddings provide much better search results.

1. Get your API key from [Alibaba DashScope](https://dashscope.console.aliyun.com/)
2. Edit `index.ts` and replace the API key:
   ```typescript
   const DASHSCOPE_API_KEY = 'sk-your-actual-api-key-here';
   ```

Or set via environment variable:
```bash
export DASHSCOPE_API_KEY="sk-your-actual-api-key-here"
```

### Plugin Config | Configuración del Plugin

In your `openclaw.json`:

```json
{
  "plugins": {
    "entries": {
      "paolo-memory-v2": {
        "enabled": true,
        "config": {
          "enabled": true
        }
      }
    }
  }
}
```

---

## 📁 File Structure | Estructura de Archivos

```
lobstermind-memory/
├── index.ts                      # Main plugin code
├── package.json                  # Package metadata & dependencies
├── openclaw.plugin.json          # OpenClaw plugin manifest
├── README.md                     # This file
├── LICENSE                       # MIT License
└── .github/
    └── workflows/                # CI/CD workflows (optional)

Runtime files (created automatically):
├── ~/.openclaw/workspace/memory/paolo-memory.db       # SQLite database
└── ~/.openclaw/workspace/obsidian-vault/Gigabrain/
    └── Memories.md                                    # Obsidian export
```

---

## 🧪 Testing | Pruebas

### Verify Installation | Verificar Instalación

```bash
# Check if plugin loads
openclaw doctor

# Look for these logs:
# [paolo-memory] Plugin loading...
# [paolo-memory] Database initialized
# [paolo-memory] Ready!
```

### Test CLI | Probar CLI

```bash
# Add a test memory
openclaw memories --add "Testing LobsterMind memory plugin"

# List memories
openclaw memories --list

# Search for the test memory
openclaw memories --search "testing"
```

### Test Obsidian Sync | Probar Sync con Obsidian

Check if the memory was exported:
```bash
# Windows
type "%USERPROFILE%\.openclaw\workspace\obsidian-vault\Gigabrain\Memories.md"

# macOS/Linux
cat ~/.openclaw/workspace/obsidian-vault/Gigabrain/Memories.md
```

---

## 🐛 Troubleshooting | Solución de Problemas

### Plugin Not Loading | El Plugin No Carga

**Check logs:**
```bash
openclaw doctor 2>&1 | Select-String "paolo-memory"
```

**Common issues:**
1. ❌ **Missing dependencies**: Run `npm install` in the plugin folder
2. ❌ **Wrong path**: Ensure plugin is in `~/.openclaw/extensions/lobstermind-memory`
3. ❌ **Not enabled**: Check `openclaw.json` has the plugin in `plugins.entries`

### CLI Commands Not Working | Comandos CLI No Funcionan

**Check plugin loaded:**
```bash
openclaw memories --help
```

If you see "unknown command", the plugin didn't load. Check the logs above.

### Database Errors | Errores de Base de Datos

**Reset the database:**
```bash
# Windows
del "%USERPROFILE%\.openclaw\workspace\memory\paolo-memory.db"

# macOS/Linux
rm ~/.openclaw/workspace/memory/paolo-memory.db

# Restart OpenClaw
openclaw doctor
```

### Embedding API Errors | Errores de API de Embeddings

The plugin will fall back to hash-based embeddings if the API fails. This is normal and doesn't break functionality, but search quality may be lower.

To fix:
1. Check your DashScope API key is valid
2. Ensure you have internet connectivity
3. Check the API hasn't rate-limited you

---

## 📝 Changelog | Registro de Cambios

### Version 1.0.0 (2026-03-08)

**Initial Release | Lanzamiento Inicial**
- ✅ SQLite storage with better-sqlite3
- ✅ Semantic search with DashScope embeddings
- ✅ Hash-based fallback embeddings
- ✅ Obsidian Markdown export
- ✅ CLI commands (--list, --add, --search)
- ✅ Memory note tag capture
- ✅ Automatic recall on prompt build
- ✅ Windows, macOS, Linux support

---

## 🤝 Contributing | Contribuciones

Contributions welcome! | ¡Contribuciones bienvenidas!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License | Licencia

MIT License - See [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author | Autor

**Paolozky**

Built with 🦞 for the OpenClaw community.

---

## 🙏 Acknowledgments | Agradecimientos

**English:**

LobsterMind is inspired by the [Gigabrain](https://github.com/legendaryvibecoder/gigabrain) project's vision for long-term memory in OpenClaw. Both projects aim to solve the same fundamental problem: giving AI assistants persistent, queryable memory across sessions.

The key difference is approach:
- **Gigabrain** is comprehensive, academic, and feature-rich (2000+ lines, Python + Node.js, Ollama, web console, nightly audits)
- **LobsterMind** is minimal, practical, and works-out-of-the-box (298 lines, Node.js only, no complex dependencies)

Neither is "better" — they serve different needs:
- Choose **Gigabrain** if you want maximum control, don't mind complex setup, and need advanced features like audit pipelines, entity graphs, and web consoles
- Choose **LobsterMind** if you want something that works in 1 minute, requires zero config, and covers 95% of use cases with 10% of the complexity

Thanks to the Gigabrain project for proving that long-term memory for OpenClaw is not just possible, but necessary.

**Español:**

LobsterMind está inspirado en la visión del proyecto [Gigabrain](https://github.com/legendaryvibecoder/gigabrain) para memoria a largo plazo en OpenClaw. Ambos proyectos buscan resolver el mismo problema fundamental: dar a los asistentes de IA memoria persistente y consultable entre sesiones.

La diferencia clave es el enfoque:
- **Gigabrain** es completo, académico y rico en funciones (2000+ líneas, Python + Node.js, Ollama, consola web, auditorías nightly)
- **LobsterMind** es minimal, práctico y funciona desde el inicio (298 líneas, solo Node.js, sin dependencias complejas)

Ninguno es "mejor" — sirven necesidades diferentes:
- Elegí **Gigabrain** si querés máximo control, no te importa setup complejo, y necesitás features avanzados como audit pipelines, entity graphs, y consolas web
- Elegí **LobsterMind** si querés algo que funcione en 1 minuto, requiere cero config, y cubre 95% de casos de uso con 10% de la complejidad

Gracias al proyecto Gigabrain por demostrar que la memoria a largo plazo para OpenClaw no solo es posible, sino necesaria.

- Built on [OpenClaw](https://github.com/openclaw/openclaw) plugin system
- Thanks to the OpenClaw community for the plugin SDK

---

## 📞 Support | Soporte

- **Issues:** [GitHub Issues](https://github.com/pnll1991/lobstermind-memory/issues)
- **Discussions:** [GitHub Discussions](https://github.com/pnll1991/lobstermind-memory/discussions)
- **OpenClaw Discord:** [Join Discord](https://discord.gg/clawd)

---

## 🚀 Roadmap | Hoja de Ruta

### Future Features | Características Futuras

- [ ] Web UI for memory management
- [ ] Memory import/export (JSON, Markdown)
- [ ] Multiple embedding providers (OpenAI, local models)
- [ ] Memory categories and tagging
- [ ] Automatic memory consolidation
- [ ] Memory expiration/archive
- [ ] Encrypted storage option
- [ ] Multi-language support enhancement

---

**Made with ❤️ by Paolozky**  
**Hecho con ❤️ por Paolozky**
