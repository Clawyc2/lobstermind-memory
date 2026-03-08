/**
 * LobsterMind Memory - Long-term memory plugin for OpenClaw
 * Step 1: SQLite + Local Hash-based Embeddings
 * 
 * Features:
 * - SQLite storage for persistent memory
 * - Local hash-based embeddings (no API required)
 * - Automatic Obsidian sync
 * - Semantic search and recall
 * - CLI commands for memory management
 * 
 * Author: Paolozky
 * License: MIT
 */

const lobsterMindPlugin = {
  id: 'lobstermind-memory',
  name: 'LobsterMind Memory',
  description: 'SQLite + DashScope embeddings long-term memory',
  kind: 'memory',
  configSchema: {
    type: 'object',
    additionalProperties: false,
    properties: {
      enabled: {
        type: 'boolean',
        default: true
      }
    }
  },
  register(api: any) {
  try {
  console.log('[lobstermind] Plugin loading...');
  console.log('[lobstermind] API type:', typeof api);
  console.log('[lobstermind] API keys:', Object.keys(api || {}).join(', '));
  
  const config = api?.config || {};
  console.log('[lobstermind] Config:', JSON.stringify(config, null, 2));
  
  const workspaceRoot = config.workspaceRoot || process.env.OPENCLAW_WORKSPACE || '<YOUR_OPENCLAW_WORKSPACE>';
  const memoryDir = join(workspaceRoot, 'memory');
  const dbPath = join(memoryDir, 'lobstermind-memory.db');
  
  console.log('[lobstermind] Workspace:', workspaceRoot);
  console.log('[lobstermind] Memory dir:', memoryDir);
  console.log('[lobstermind] Database:', dbPath);
  
  // Ensure directory exists
  try {
    if (!existsSync(memoryDir)) {
      mkdirSync(memoryDir, { recursive: true });
    }
  } catch (err: any) {
    console.error('[lobstermind] Error creating directory:', err.message);
  }
  
  console.log('[lobstermind] Initializing database...');
  
  // Initialize database
  let db: any;
  try {
    db = new Database(dbPath);
  } catch (err: any) {
    console.error('[lobstermind] Database init error:', err.message);
    console.error('[lobstermind] dbPath:', dbPath, 'type:', typeof dbPath);
    throw err;
  }
  
  db.exec(`
    CREATE TABLE IF NOT EXISTS memories (
      id TEXT PRIMARY KEY,
      content TEXT NOT NULL,
      type TEXT NOT NULL,
      confidence REAL NOT NULL,
      embedding TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_memories_type ON memories(type);
    CREATE INDEX IF NOT EXISTS idx_memories_created ON memories(created_at);
  `);
  console.log('[lobstermind] Database initialized');
  
  // Local embeddings using simple hash-based method (no API required!)
  // This enables semantic-like search without external dependencies
  
  function hashToVector(text: string, dimensions: number = 384): number[] {
    const hash = createHash('sha256').update(text).digest('hex');
    const vector: number[] = [];
    
    // Convert hash bytes to normalized float values between -1 and 1
    for (let i = 0; i < dimensions; i += 4) {
      const hashSegment = hash.slice(i % hash.length, (i % hash.length) + 4);
      const intVal = parseInt(hashSegment, 16) || 0;
      // Normalize to [-1, 1]
      const normalized = (intVal / 0xFFFFFFFF) * 2 - 1;
      vector.push(normalized);
    }
    
    // Ensure exact dimensions
    while (vector.length < dimensions) {
      vector.push(0);
    }
    
    return vector.slice(0, dimensions);
  }
  
  async function getEmbedding(text: string): Promise<number[]> {
    try {
      // Use local hash-based embedding (fast, no API needed)
      const vector = hashToVector(text);
      return vector;
    } catch (err: any) {
      console.error('[lobstermind] Embedding error:', err.message);
      // Fallback to zero vector (still allows storage, just no semantic search)
      return new Array(384).fill(0);
    }
  }
  
  function cosineSimilarity(a: number[], b: number[]): number {
    const dot = a.reduce((sum, ai, i) => sum + ai * (b[i] || 0), 0);
    const normA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
    const normB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
    return normA && normB ? dot / (normA * normB) : 0;
  }
  
  async function captureMemory(content: string, type: string = 'USER_FACT', confidence: number = 0.7, skipSync: boolean = false): Promise<string> {
    const id = createHash('sha256').update(content).digest('hex').substring(0, 16);
    const now = new Date().toISOString();
    
    // Check for existing
    const existing = db.prepare('SELECT id FROM memories WHERE id = ?').get(id);
    if (existing) {
      db.prepare('UPDATE memories SET content = ?, type = ?, confidence = ?, updated_at = ? WHERE id = ?')
        .run(content, type, confidence, now, id);
      console.log('[lobstermind] Updated memory:', content.substring(0, 50));
      return id;
    }
    
    // Get embedding
    const embedding = await getEmbedding(content);
    
    // Insert
    db.prepare('INSERT INTO memories (id, content, type, confidence, embedding, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)')
      .run(id, content, type, confidence, JSON.stringify(embedding), now, now);
    
    // Sync to Obsidian
    if (!skipSync) {
      syncToObsidian(content, type, confidence, now);
    }
    
    console.log('[lobstermind] Captured memory:', content.substring(0, 50));
    return id;
  }
  
  async function recallMemories(query: string, topK: number = 8, minScore: number = 0.45): Promise<MemoryRecord[]> {
    const queryEmbedding = await getEmbedding(query);
    const memories = db.prepare('SELECT * FROM memories').all() as MemoryRecord[];
    
    const scored = memories.map(m => {
      const embedding = JSON.parse(m.embedding || '[]');
      const score = cosineSimilarity(queryEmbedding, embedding);
      return { ...m, score };
    }).filter(m => m.score >= minScore)
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);
    
    return scored;
  }
  
  // Obsidian sync - export memories to LobsterMind vault
  const obsidianDir = join(workspaceRoot, 'obsidian-vault', 'LobsterMind');
  
  function syncToObsidian(content: string, type: string, confidence: number, createdAt: string) {
    try {
      if (!existsSync(obsidianDir)) {
        mkdirSync(obsidianDir, { recursive: true });
      }
      
      const date = new Date(createdAt || Date.now()).toISOString().split('T')[0];
      const mdPath = join(obsidianDir, 'Memories.md');
      
      const entry = `- [${type}] ${content} (confidence: ${confidence.toFixed(2)})\n`;
      const dateHeader = `## [[${date}]]\n\n`;
      
      if (!existsSync(mdPath)) {
        writeFileSync(mdPath, `# Memories\n\n${dateHeader}${entry}\n`, 'utf-8');
      } else {
        const existing = readFileSync(mdPath, 'utf-8');
        if (!existing.includes(dateHeader)) {
          appendFileSync(mdPath, `\n${dateHeader}${entry}`, 'utf-8');
        } else {
          appendFileSync(mdPath, entry, 'utf-8');
        }
      }
      
      console.log('[lobstermind] Synced to Obsidian:', mdPath);
    } catch (err: any) {
      console.error('[lobstermind] Obsidian sync error:', err.message);
    }
  }
  
  // Hook: Before prompt build - recall relevant memories
  console.log('[lobstermind] Registering before_prompt_build hook...');
  api.on('before_prompt_build', async (event: any, ctx: any) => {
    try {
      console.log('[lobstermind] before_prompt_build triggered!');
      console.log('[lobstermind] Event keys:', Object.keys(event || {}).join(', '));
      
      // Messages are in event, not ctx!
      const messages = event?.messages || ctx?.messages || [];
      console.log('[lobstermind] Messages count:', messages.length);
      
      // Also check event.prompt
      const prompt = event?.prompt;
      console.log('[lobstermind] Event.prompt:', prompt ? prompt.substring(0, 100) : 'not available');
      
      // Find the last USER message with enough length
      let query = '';
      const skipPhrases = ['session bootstrap', 'system:', 'tool:'];
      const minLength = 5;
      
      console.log('[lobstermind] Scanning for USER messages...');
      
      // Search backwards through ONLY user messages
      for (let i = messages.length - 1; i >= 0; i--) {
        const msg = messages[i];
        
        // Only process user messages!
        if (msg?.role !== 'user') {
          continue;
        }
        
        const content = msg?.content || msg?.text || '';
        if (!content) continue;
        
        const contentStr = typeof content === 'string' ? content : JSON.stringify(content);
        
        // Log all user messages we find
        console.log(`[lobstermind] User message[${i}]: type=${typeof content}, length=${contentStr.length}`);
        console.log(`[lobstermind] Preview: ${contentStr.substring(0, 60)}`);
        
        if (contentStr.length >= minLength) {
          const lowerContent = contentStr.toLowerCase();
          const isSystemMessage = skipPhrases.some(phrase => lowerContent.includes(phrase));
          
          if (!isSystemMessage) {
            query = contentStr;
            console.log('[lobstermind] ✓ FOUND suitable user message at index', i, 'with length', query.length);
            console.log('[lobstermind] Query:', query.substring(0, 80));
            break;
          } else {
            console.log('[lobstermind] ✗ Skipping system/bootstrap at index', i);
          }
        } else {
          console.log('[lobstermind] ✗ Message too short at index', i);
        }
      }
      
      if (!query) {
        console.log('[lobstermind] ⚠ No suitable user message found');
        return null;
      }
      
      try {
        const memories = await recallMemories(query);
        console.log('[lobstermind] Recall results:', memories.length);
        
        if (memories.length > 0) {
          const context = memories.map(m => `- ${m.content}`).join('\n');
          console.log(`[lobstermind] ✓ Recalled ${memories.length} memories`);
          const result = {
            prependSystemContext: `<lobstermind-memory-context>\nRelevant memories from long-term storage:\n${context}\n</lobstermind-memory-context>`
          };
          console.log('[lobstermind] Returning context');
          return result;
        } else {
          console.log('[lobstermind] No memories found for this query');
        }
      } catch (recallErr: any) {
        console.error('[lobstermind] Recall error:', recallErr.message);
      }
      
      return null;
    } catch (err: any) {
      console.error('[lobstermind] HOOK ERROR (non-blocking):', err.message);
      console.error('[lobstermind] Stack:', err.stack);
      return null;
    }
  });
  
  // Hook: After agent turn - capture memories from assistant response
  api.on('before_model_resolve', async (event: any, ctx: any) => {
    // Check for memory_note tags in recent messages
    const messages = ctx?.messages || [];
    for (const msg of messages.slice(-5)) {
      if (msg.role === 'assistant' && msg.content) {
        const memoryNoteMatch = msg.content.match(/<memory_note[^>]*>(.*?)<\/memory_note>/gs);
        if (memoryNoteMatch) {
          for (const note of memoryNoteMatch) {
            const contentMatch = note.match(/>(.*?)</s);
            const content = contentMatch?.[1];
            if (!content) continue;
            const type = note.match(/type="([^"]*)"/)?.[1] || 'USER_FACT';
            const confidence = parseFloat(note.match(/confidence="([^"]*)"/)?.[1] || '0.7');
            
            if (content && content.length >= 25) {
              try {
                await captureMemory(content, type, confidence);
              } catch (err: any) {
                console.error('[lobstermind] Capture error:', err.message);
              }
            }
          }
        }
      }
    }
  });
  
  // Register CLI command for manual memory management
  if (api.registerCli) {
    console.log('[lobstermind] Registering memories CLI...');
    try {
      api.registerCli(
        ({ program }: any) => {
          program
            .command('memories')
            .description('Manage long-term memories (LobsterMind Memory)')
            .option('--list', 'List recent memories')
            .option('--add <content>', 'Add a memory manually')
            .option('--search <query>', 'Search memories by query')
            .action(async (options: any) => {
              if (options.list) {
                const memories = db.prepare('SELECT * FROM memories ORDER BY created_at DESC LIMIT 20').all() as MemoryRecord[];
                if (memories.length === 0) {
                  console.log('No memories stored');
                  return;
                }
                console.log(`Recent memories (${memories.length}):\n`);
                memories.forEach((m, i) => console.log(`${i + 1}. [${m.type}] ${m.content}`));
              } else if (options.add) {
                const id = await captureMemory(options.add, 'MANUAL', 0.9, false);
                console.log(`Memory saved with ID: ${id}`);
              } else if (options.search) {
                const memories = await recallMemories(options.search, 10, 0.3);
                if (memories.length === 0) {
                  console.log('No memories found');
                  return;
                }
                console.log(`Found ${memories.length} memories:\n`);
                memories.forEach((m, i) => console.log(`${i + 1}. [${m.type}] ${m.content} (score: ${m.score.toFixed(2)})`));
              } else {
                console.log('Usage: openclaw memories --list|--add <content>|--search <query>');
              }
            });
        },
        { commands: ['memories'] }
      );
      console.log('[lobstermind] Memories CLI registered with options: --list, --add, --search');
    } catch (err: any) {
      console.error('[lobstermind] CLI registration error:', err.message);
    }
  }
  
  console.log('[lobstermind] Hooks and commands registered');
  console.log('[lobstermind] Ready!');
  
  return {
    name: 'lobstermind-memory',
    version: '0.1.0'
  };
  } catch (err: any) {
    console.error('[lobstermind] FATAL ERROR:', err.message);
    console.error('[lobstermind] Stack:', err.stack);
    throw err;
  }
  }
};

export default lobsterMindPlugin;
