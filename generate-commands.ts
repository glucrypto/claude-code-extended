#!/usr/bin/env bun

import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

interface Command {
  name: string;
  description: string;
  content: string;
}

async function generateCommandsJson(): Promise<void> {
  try {
    const commandsDir = './commands';
    const files = await readdir(commandsDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    const commands: Record<string, Command> = {};
    
    for (const file of markdownFiles) {
      const commandName = file.replace('.md', '');
      const filePath = join(commandsDir, file);
      const content = await readFile(filePath, 'utf-8');
      
      // Extract first line as description
      const lines = content.trim().split('\n');
      const description = lines[0];
      
      commands[commandName] = {
        name: commandName,
        description: description,
        content: content
      };
    }
    
    await writeFile('commands.json', JSON.stringify(commands, null, 2));
    console.log(`Generated commands.json with ${Object.keys(commands).length} commands`);
    
  } catch (error) {
    console.error('Error generating commands.json:', error);
    process.exit(1);
  }
}

generateCommandsJson();