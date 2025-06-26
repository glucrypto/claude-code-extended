import { createMcpHandler } from "@vercel/mcp-adapter";
import commands from "../../../commands.json" assert { type: "json" };
import type { Commands } from "../../../types";

// Built-in commands loaded from JSON
const BUILTIN_COMMANDS = commands as Commands;

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "list_available_commands",
      "List all available session management commands",
      {},
      async () => {
        const commandList = Object.values(BUILTIN_COMMANDS)
          .map((cmd) => `**${cmd.name}** - ${cmd.description}`)
          .join("\n");

        return {
          content: [
            {
              type: "text",
              text: `Available Session Management Commands:\n\n${commandList}\n\nUse \`install_session_commands\` to add these slash commands to your project.`,
            },
          ],
        };
      }
    );

    server.tool(
      "install_session_commands",
      "Get session management commands for installation in your project",
      {},
      async () => {
        try {
          // Define session-specific commands
          const sessionCommands = [
            "session",
            "session-log",
            "session-end",
            "session-help",
          ];

          // Determine which commands to install
          const commandsToInstall = sessionCommands; // Default to session commands only

          const installedCommands = [];
          let fileCreationInstructions = "";

          // Build instructions for Claude Code to create files
          for (const commandName of commandsToInstall) {
            const command = BUILTIN_COMMANDS[commandName];
            if (command) {
              installedCommands.push(command.name);
              fileCreationInstructions += `\n\nCreate file \`.claude/commands/${command.name}.md\` with the following content:\n\n${command.content}`;
            }
          }

          return {
            content: [
              {
                type: "text",
                text: `I'll install ${installedCommands.length} session management commands for you.

Run the command: mkdir -p .claude/commands .claude/sessions

${fileCreationInstructions}

After creating these files, you'll be able to use the session management commands like \`/session\`, \`/session-end\`, etc.`,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `❌ Error preparing session commands: ${
                  error instanceof Error ? error.message : "Unknown error"
                }`,
              },
            ],
          };
        }
      }
    );

    server.tool(
      "install_doc_command",
      "Install the doc command for session documentation",
      {},
      async () => {
        try {
          // Get the doc command from BUILTIN_COMMANDS
          const docCommand = BUILTIN_COMMANDS["doc"];

          if (!docCommand) {
            return {
              content: [
                {
                  type: "text",
                  text: "Error: Doc command not found in built-in commands.",
                },
              ],
            };
          }

          // Build file creation instructions like session commands
          let fileCreationInstructions = "";
          fileCreationInstructions += `\n\nCreate file \`.claude/commands/${docCommand.name}.md\` with the following content:\n\n${docCommand.content}`;

          return {
            content: [
              {
                type: "text",
                text: `I'll install 1 documentation command for you.

Run the command: mkdir -p .claude/commands .claude/sessions

Create file \`.claude/commands/${docCommand.name}.md\` with the following content:

${docCommand.content}

After creating these files, you'll be able to use the documentation command like \`/doc\`.`,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `❌ Error preparing doc command: ${
                  error instanceof Error ? error.message : "Unknown error"
                }`,
              },
            ],
          };
        }
      }
    );

    server.tool(
      "install_list_command",
      "Install the list command to show all available commands",
      {},
      async () => {
        try {
          // Get the list command from BUILTIN_COMMANDS
          const listCommand = BUILTIN_COMMANDS["list"];

          if (!listCommand) {
            return {
              content: [
                {
                  type: "text",
                  text: "Error: List command not found in built-in commands.",
                },
              ],
            };
          }

          return {
            content: [
              {
                type: "text",
                text: `I'll install 1 utility command for you.

I need to create the directory structure and command files. Let me do this step by step:

First, create the directories:
\`\`\`bash
mkdir -p .claude/commands .claude/sessions
\`\`\`


Create file \`.claude/commands/${listCommand.name}.md\` with the following content:

${listCommand.content}

After creating these files, you'll be able to use the utility command like \`/list\`.`,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `❌ Error preparing list command: ${
                  error instanceof Error ? error.message : "Unknown error"
                }`,
              },
            ],
          };
        }
      }
    );
  },
  {},
  { basePath: "/api" }
);

export { handler as DELETE, handler as GET, handler as POST };
