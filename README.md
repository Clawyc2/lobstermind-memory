# LobsterMind Memory - OpenClaw Community Memory Plugin

Community memory plugin for OpenClaw with persistent contextual information extraction.

## Technical Infrastructure

### Database Layer
- **Primary Storage**: SQLite database at `workspace/memory/lobstermind-memory.db`
- **Schema**: Memories, relations, clusters, and cluster members tables
- **Indexing**: Optimized indexes on type (idx_memories_type), creation date (idx_memories_created), tags (idx_memories_tags), and relation directions

### File System Sync
- **Native Memory**: `workspace/MEMORY.md` (direct OpenClaw integration)
- **Obsidian Sync**: `workspace/memory/Memories.md` (synchronized with OpenClaw format)
- **Obsidian Vault**: `workspace/obsidian-vault/LobsterMind/Memories.md` (dedicated vault folder) 
- **Backup Storage**: `workspace/memory/backups/` (timestamped JSON exports)

### Caching Layer
- **Embedding Cache**: In-memory Map with LRU evictions (1000 item capacity)
- **Search Cache**: TTL-based caching (5 minutes expiration) 
- **Preloading**: At startup from database embeddings

### Data Structures
- **Memory Embeddings**: 384-dimensional SHA256-based vectors (normalized [-1,1])
- **Cosine Similarity**: For semantic matching and clustering
- **Thematic Clusters**: Dynamically named based on content topics
- **Weighted Relations**: Bidirectional graph connections (0.6+ similarity threshold)

## Key Features

### Security Layer
- Sensitive data blocking (emails, cards, passwords, IPs, etc.)
- Content classification with pattern-based rejection

### Intelligence Layer
- Thematic clustering and auto-assignment
- Context-aware capture and relation building
- Performance-optimized with caching and batch operations

### Command Interface
- `memories list/search/stats/add/backup/autostats/clusters/cluster`

## Architecture
- **Runtime**: Node.js + TypeScript
- **State**: Workspace-based persistence
- **Integration**: Multiple OpenClaw hooks (messages, context, interaction, prompting)
- **Format**: Native markdown sync + structured SQLite

Created for legitimate open-source use with community learning.
