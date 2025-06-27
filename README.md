# Claude Code Extensions

Common sense defaults to enhance terminal based AI coding with `sessions` and `docs`, realized as an MCP server. The main flow is sessions which provide a structure way to track and organize your work while you work with the editor. Log progress, pick up where you left off, keep track of relevant links, context etc. Optionally install the `doc` command to create more comprehensive docs you can use to reference later.

Will be adding more commands over time as I use it more.

> [!WARNING] This is a work in progress. Might change frequently.

## Demo

![MCP Tools Demo](public/mcptools_6_27.gif)

## Currently Works with:

- [x] Claude Code

Not tested yet, but should work if they support MCP:

- [ ] Codex
- [ ] OpenCode
- [ ] Gemini Code
- [ ] Anon-Kode
- [ ] Ampcode

## Install via MCP

1. Add this MCP server to Claude Code to access session management tools:

```bash
# Add to current project (local scope)
claude mcp add  --transport http claude_ext https://mcptools.sh/api/mcp

# Or add to all projects (user scope)
claude mcp add --transport http claude_ext https://mcptools.sh/api/mcp --user

# Or add to project team (project scope)
claude mcp add --transport http claude_ext https://mcptools.sh/api/mcp --project
```

2. Run `claude` and then run the following commands:

```bash
/mcp to view available commands

/mcp_claude_ext_list_available_commands to list available commands.
-or-
/mcp_claude_ext_install_session_commands to install the session commands.
-or-
/mcp_claude_ext_install_doc_command to install the doc command.
-or-
/mcp_claude_ext_install_list_command to install the list command.
```

3. Restart `claude` for the slash commands to be available.

## Install via Copy

Feel free to copy the `commands` and `sessions` directories to your project at `.claude/` and claude will automatically pick them up.

## Usage

```bash
# Session workflow
/session api-refactor                    # Start new session
/session-log Completed user auth        # Auto-detects as Progress
/session-log notes Using JWT for sessions  # Explicit Notes section
/session-end                            # End session

# Information commands
/session                                # Show current session status
/list                                   # List all available commands
/doc                                    # Show documentation
/session-help                           # Show session management help

# Example session workflow with auto-detection
/session bug-fix-login                  # Start session
/session-log Found issue in auth middleware     # → Progress
/session-log Problem: token expiry not handled  # → Issues
/session-log Added try-catch block around validation  # → Progress
/session-log notes Used jsonwebtoken library for better errors  # → Notes
/session-log TODO: add rate limiting    # → Todo
/session-end                           # Session complete

# Or use explicit sections
/session-log progress Fixed the login bug
/session-log issues Still need to handle edge cases
/session-log todo Add comprehensive tests
```

## Commands

### Session Management

**`/session [name]`** - Manage development sessions

- No arguments: Show current session status
- With name: Start new or resume existing session
- Creates structured session files with predefined sections

**`/session-help`** - Display session management help

### Session Operations

**`/session-log [section] [content]`** - Add content to current session

- Auto-detects appropriate section if not specified
- Supports: progress, notes, todo, issues, links
- Records timestamped entries
- Smart detection based on content patterns

**`/session-end`** - End current session

- Clears active session marker
- Session file remains for future reference

### Information Commands

**`/list`** - List all available commands

**`/doc`** - Show session file format documentation

## Session Structure

Each session file contains:

```markdown
# [session-name] - [timestamp]

## Goals

Define session objectives

## Context

Background information and setup

## Rules

Constraints and guidelines

## Progress

Timestamped development updates

## Notes

Technical findings and decisions

## Todo

Task checklist

## Issues

Problems and solutions

## Links

Relevant URLs and references
```

## Created Directory Structure

```
.claude/
├── README.md
├── commands/
│   ├── doc.md
│   ├── list.md
│   ├── session-end.md
│   ├── session-help.md
│   ├── session-log.md
│   └── session-session.md
└── sessions/
    ├── .current-session
    └── [session-files].md
```

## Development & Testing

To run and test this MCP server locally:

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Test with MCP Inspector:**

   ```bash
   npx @modelcontextprotocol/inspector@latest http://localhost:3000/api/mcp
   ```

3. **Deploy to Vercel:**
   ```bash
   npm run deploy
   ```

## Contributing Commands

Want to add a new command? Just:

1. Create a new `.md` file in the `commands/` directory
2. Follow the existing format (description on first line, usage instructions below)
3. Submit a pull request

Commands are simple markdown files that describe their usage and behavior.

# Acknowledgements

- [claude-sessions](https://github.com/iannuttall/claude-sessions) for the session design approach
- [shadcn](https://ui.shadcn.com/) - simple downloadable file primitives.
