# LobsterMind Memory - OpenClaw Community Memory Plugin

Community memory plugin for OpenClaw that creates persistent contextual information extraction from textual content. Developed for the OpenClaw community for legitimate use, with full compatibility with open-source software licenses in the OpenClaw ecosystem.

## Features

### 1. Thematic Clustering
- Automatic grouping of related memories into thematic clusters (work, personal interests, preferences, location-based, etc.)
- Dynamic cluster naming based on content (identifies as "Work & Career", "Interest in Boca", "Family", "Location & Home", etc.)
- Auto-assignment of new memories to the most relevant cluster
- Automatic recalculation of cluster centroids to maintain coherence

### 2. Enhanced Auto-Capture System
- Contextual awareness considering conversation context for smarter capture decisions
- Anti-noise filtering (filters out questions, greetings, commands, common utterances)
- Detailed statistics tracking with True/False Positive/Negative metrics
- Advanced classification system (PREFERENCE, USER_FACT, DECISION, HABIT, EDUCATION, WORK_HISTORY, TECH_SKILL, RELATIONSHIP)
- Multi-language support (Spanish/English patterns)

### 3. Performance Optimizations
- Intelligent embedding caching to avoid computationally expensive recalculations
- Search result caching mechanism with TTL for faster subsequent queries
- Database transaction batching for efficient memory relation creation
- Cache size limiting with FIFO eviction for optimal memory usage
- Preloading of embeddings at startup to avoid delays

### 4. Semantic Relations & Search
- Automatic creation of relations between semantically similar memories
- Cosine similarity calculation for finding related content
- Contextual search functionality with caching
- Intelligent recall system that identifies relevant memories based on conversation context

### 5. Cross Platform Integration
- Automatic synchronization with Obsidian (via Memories.md)
- Native MEMORY.md file support
- Backup functionality with timestamped JSON exports  
- Full OpenClaw hook compatibility with support for various event types
- Gigabrain-style note protocol support (`<memory_note>` tags)

### 6. Command Line Interface
- `openclaw memories list`: List all stored memories
- `openclaw memories add "<content>"`: Save manual memories
- `openclaw memories search "<query>`: Find semantically similar content
- `openclaw memories stats`: Overview statistics
- `openclaw memories autostats`: Auto-capture performance metrics (precision, recall, etc.)
- `openclaw memories clusters`: Show generated thematic clusters
- `openclaw memories cluster <id>`: Show specific cluster with its members
- `openclaw memories backup`: Create backup file

## Architecture

- **Primary File**: `index.ts` - Main plugin implementation with all features
- **Database**: SQLite with optimized indexes for performance
- **Storage**: Local memory storage in workspace/.openclaw/memory/ with backups
- **Synchronization**: Both Obsidian integration and native MEMORY.md sync

## Security & Privacy

The plugin includes comprehensive data protection:
- Automatic blocking of sensitive data (emails, credit cards, passwords, phone numbers, government IDs, etc.)
- Multiple pattern detection for various types of private information
- Sensitive data filtering at all entry points
- Safe handling of user-provided content with pattern verification
- Contextual filtering to prevent storage of all types of sensitive information

## Installation

1. Clone the repository to your OpenClaw extensions directory:
   ```bash
   git clone https://github.com/pnll1991/lobstermind-memory.git ~/.openclaw/extensions/lobstermind-memory
   ```

2. Activate the plugin:
   ```bash
   openclaw plugins enable lobstermind-memory
   openclaw plugins allow add lobstermind-memory
   # Then restart OpenClaw gateway service
   ```

## Development

All contributions are welcome. The codebase follows OpenClaw plugin conventions with proper TypeScript typing, modular design, and extensive error handling.

Created for community use with legitimate purposes for learning and conversation enhancement. Compatible with open-source software principles and OpenClaw licensing framework.

## License

This plugin is released under open-source principles compatible with the OpenClaw ecosystem.
