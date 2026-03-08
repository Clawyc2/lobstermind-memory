#!/usr/bin/env node

/**
 * Post-install script for LobsterMind Memory
 * Auto-creates directories and initial config
 */

const { mkdirSync, writeFileSync, existsSync } = require('fs');
const { join } = require('path');

console.log('\n🦞 LobsterMind Memory - Post Install Setup\n');

// Get OpenClaw workspace
const workspaceRoot = process.env.OPENCLAW_WORKSPACE || join(process.env.HOME || process.env.USERPROFILE, '.openclaw', 'workspace');

console.log(`Workspace: ${workspaceRoot}\n`);

// Create directories
const dirs = [
  ['Memory database', join(workspaceRoot, 'memory')],
  ['Backups', join(workspaceRoot, 'memory', 'backups')],
  ['Cloud sync', join(workspaceRoot, 'memory', 'cloud-sync')],
  ['Obsidian vault', join(workspaceRoot, 'obsidian-vault', 'LobsterMind')]
];

for (const [name, dir] of dirs) {
  try {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
      console.log(`✓ Created: ${name}`);
    } else {
      console.log(`✓ Exists: ${name}`);
    }
  } catch (err) {
    console.log(`✗ Failed: ${name} - ${err.message}`);
  }
}

// Create MEMORY.md
const memoryMdPath = join(workspaceRoot, 'MEMORY.md');
if (!existsSync(memoryMdPath)) {
  try {
    writeFileSync(memoryMdPath, '# Memories\n\nAuto-created by LobsterMind Memory plugin\n\n', 'utf-8');
    console.log('✓ Created: MEMORY.md');
  } catch (err) {
    console.log(`✗ Failed: MEMORY.md - ${err.message}`);
  }
} else {
  console.log('✓ Exists: MEMORY.md');
}

// Create Obsidian Memories.md
const obsidianMdPath = join(workspaceRoot, 'obsidian-vault', 'LobsterMind', 'Memories.md');
if (!existsSync(obsidianMdPath)) {
  try {
    writeFileSync(obsidianMdPath, '# Memories\n\nAuto-created by LobsterMind Memory plugin\n\n', 'utf-8');
    console.log('✓ Created: Obsidian/Memories.md');
  } catch (err) {
    console.log(`✗ Failed: Obsidian/Memories.md - ${err.message}`);
  }
} else {
  console.log('✓ Exists: Obsidian/Memories.md');
}

console.log('\n✅ Setup complete!\n');
console.log('Next steps:');
console.log('1. Restart OpenClaw: openclaw gateway restart');
console.log('2. Add your first memory: openclaw memories add "I prefer TypeScript"');
console.log('3. (Optional) Setup Google Drive backup: openclaw memories setup-cloud\n');
