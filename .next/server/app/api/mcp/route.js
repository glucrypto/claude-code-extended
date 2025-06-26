/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/mcp/route";
exports.ids = ["app/api/mcp/route"];
exports.modules = {

/***/ "(rsc)/./app/api/mcp/route.ts":
/*!******************************!*\
  !*** ./app/api/mcp/route.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ handler),\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _vercel_mcp_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vercel/mcp-adapter */ \"(rsc)/./node_modules/@vercel/mcp-adapter/dist/index.mjs\");\n/* harmony import */ var _commands_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../commands.json */ \"(rsc)/./commands.json\");\n\n\n// Built-in commands loaded from JSON\nconst BUILTIN_COMMANDS = _commands_json__WEBPACK_IMPORTED_MODULE_1__;\nconst handler = (0,_vercel_mcp_adapter__WEBPACK_IMPORTED_MODULE_0__.createMcpHandler)((server)=>{\n    server.tool(\"list_available_commands\", \"List all available session management commands\", {}, async ()=>{\n        const commandList = Object.values(BUILTIN_COMMANDS).map((cmd)=>`**${cmd.name}** - ${cmd.description}`).join(\"\\n\");\n        return {\n            content: [\n                {\n                    type: \"text\",\n                    text: `Available Session Management Commands:\\n\\n${commandList}\\n\\nUse \\`install_session_commands\\` to add these slash commands to your project.`\n                }\n            ]\n        };\n    });\n    server.tool(\"install_session_commands\", \"Get session management commands for installation in your project\", {}, async ()=>{\n        try {\n            // Define session-specific commands\n            const sessionCommands = [\n                \"session\",\n                \"session-log\",\n                \"session-end\",\n                \"session-help\"\n            ];\n            // Determine which commands to install\n            const commandsToInstall = sessionCommands; // Default to session commands only\n            const installedCommands = [];\n            let fileCreationInstructions = \"\";\n            // Build instructions for Claude Code to create files\n            for (const commandName of commandsToInstall){\n                const command = BUILTIN_COMMANDS[commandName];\n                if (command) {\n                    installedCommands.push(command.name);\n                    fileCreationInstructions += `\\n\\nCreate file \\`.claude/commands/${command.name}.md\\` with the following content:\\n\\n${command.content}`;\n                }\n            }\n            return {\n                content: [\n                    {\n                        type: \"text\",\n                        text: `I'll install ${installedCommands.length} session management commands for you.\n\nRun the command: mkdir -p .claude/commands .claude/sessions\n\n${fileCreationInstructions}\n\nAfter creating these files, you'll be able to use the session management commands like \\`/session\\`, \\`/session-end\\`, etc.`\n                    }\n                ]\n            };\n        } catch (error) {\n            return {\n                content: [\n                    {\n                        type: \"text\",\n                        text: `❌ Error preparing session commands: ${error instanceof Error ? error.message : \"Unknown error\"}`\n                    }\n                ]\n            };\n        }\n    });\n    server.tool(\"install_doc_command\", \"Install the doc command for session documentation\", {}, async ()=>{\n        try {\n            // Get the doc command from BUILTIN_COMMANDS\n            const docCommand = BUILTIN_COMMANDS[\"doc\"];\n            if (!docCommand) {\n                return {\n                    content: [\n                        {\n                            type: \"text\",\n                            text: \"Error: Doc command not found in built-in commands.\"\n                        }\n                    ]\n                };\n            }\n            // Build file creation instructions like session commands\n            let fileCreationInstructions = \"\";\n            fileCreationInstructions += `\\n\\nCreate file \\`.claude/commands/${docCommand.name}.md\\` with the following content:\\n\\n${docCommand.content}`;\n            return {\n                content: [\n                    {\n                        type: \"text\",\n                        text: `I'll install 1 documentation command for you.\n\nRun the command: mkdir -p .claude/commands .claude/sessions\n\nCreate file \\`.claude/commands/${docCommand.name}.md\\` with the following content:\n\n${docCommand.content}\n\nAfter creating these files, you'll be able to use the documentation command like \\`/doc\\`.`\n                    }\n                ]\n            };\n        } catch (error) {\n            return {\n                content: [\n                    {\n                        type: \"text\",\n                        text: `❌ Error preparing doc command: ${error instanceof Error ? error.message : \"Unknown error\"}`\n                    }\n                ]\n            };\n        }\n    });\n    server.tool(\"install_list_command\", \"Install the list command to show all available commands\", {}, async ()=>{\n        try {\n            // Get the list command from BUILTIN_COMMANDS\n            const listCommand = BUILTIN_COMMANDS[\"list\"];\n            if (!listCommand) {\n                return {\n                    content: [\n                        {\n                            type: \"text\",\n                            text: \"Error: List command not found in built-in commands.\"\n                        }\n                    ]\n                };\n            }\n            return {\n                content: [\n                    {\n                        type: \"text\",\n                        text: `I'll install 1 utility command for you.\n\nI need to create the directory structure and command files. Let me do this step by step:\n\nFirst, create the directories:\n\\`\\`\\`bash\nmkdir -p .claude/commands .claude/sessions\n\\`\\`\\`\n\n\nCreate file \\`.claude/commands/${listCommand.name}.md\\` with the following content:\n\n${listCommand.content}\n\nAfter creating these files, you'll be able to use the utility command like \\`/list\\`.`\n                    }\n                ]\n            };\n        } catch (error) {\n            return {\n                content: [\n                    {\n                        type: \"text\",\n                        text: `❌ Error preparing list command: ${error instanceof Error ? error.message : \"Unknown error\"}`\n                    }\n                ]\n            };\n        }\n    });\n}, {}, {\n    basePath: \"/api\"\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21jcC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1RDtBQUNlO0FBR3RFLHFDQUFxQztBQUNyQyxNQUFNRyxtQkFBbUJGLDJDQUFRQTtBQUVqQyxNQUFNRyxVQUFVSixxRUFBZ0JBLENBQzlCLENBQUNLO0lBQ0NBLE9BQU9DLElBQUksQ0FDVCwyQkFDQSxrREFDQSxDQUFDLEdBQ0Q7UUFDRSxNQUFNQyxjQUFjQyxPQUFPQyxNQUFNLENBQUNOLGtCQUMvQk8sR0FBRyxDQUFDLENBQUNDLE1BQVEsQ0FBQyxFQUFFLEVBQUVBLElBQUlDLElBQUksQ0FBQyxLQUFLLEVBQUVELElBQUlFLFdBQVcsRUFBRSxFQUNuREMsSUFBSSxDQUFDO1FBRVIsT0FBTztZQUNMQyxTQUFTO2dCQUNQO29CQUNFYixNQUFNO29CQUNOYyxNQUFNLENBQUMsMENBQTBDLEVBQUVULFlBQVksaUZBQWlGLENBQUM7Z0JBQ25KO2FBQ0Q7UUFDSDtJQUNGO0lBR0ZGLE9BQU9DLElBQUksQ0FDVCw0QkFDQSxvRUFDQSxDQUFDLEdBQ0Q7UUFDRSxJQUFJO1lBQ0YsbUNBQW1DO1lBQ25DLE1BQU1XLGtCQUFrQjtnQkFDdEI7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUVELHNDQUFzQztZQUN0QyxNQUFNQyxvQkFBb0JELGlCQUFpQixtQ0FBbUM7WUFFOUUsTUFBTUUsb0JBQW9CLEVBQUU7WUFDNUIsSUFBSUMsMkJBQTJCO1lBRS9CLHFEQUFxRDtZQUNyRCxLQUFLLE1BQU1DLGVBQWVILGtCQUFtQjtnQkFDM0MsTUFBTUksVUFBVW5CLGdCQUFnQixDQUFDa0IsWUFBWTtnQkFDN0MsSUFBSUMsU0FBUztvQkFDWEgsa0JBQWtCSSxJQUFJLENBQUNELFFBQVFWLElBQUk7b0JBQ25DUSw0QkFBNEIsQ0FBQyxtQ0FBbUMsRUFBRUUsUUFBUVYsSUFBSSxDQUFDLHFDQUFxQyxFQUFFVSxRQUFRUCxPQUFPLEVBQUU7Z0JBQ3pJO1lBQ0Y7WUFFQSxPQUFPO2dCQUNMQSxTQUFTO29CQUNQO3dCQUNFYixNQUFNO3dCQUNOYyxNQUFNLENBQUMsYUFBYSxFQUFFRyxrQkFBa0JLLE1BQU0sQ0FBQzs7OztBQUkvRCxFQUFFSix5QkFBeUI7OzJIQUVnRyxDQUFDO29CQUM5RztpQkFDRDtZQUNIO1FBQ0YsRUFBRSxPQUFPSyxPQUFPO1lBQ2QsT0FBTztnQkFDTFYsU0FBUztvQkFDUDt3QkFDRWIsTUFBTTt3QkFDTmMsTUFBTSxDQUFDLG9DQUFvQyxFQUN6Q1MsaUJBQWlCQyxRQUFRRCxNQUFNRSxPQUFPLEdBQUcsaUJBQ3pDO29CQUNKO2lCQUNEO1lBQ0g7UUFDRjtJQUNGO0lBR0Z0QixPQUFPQyxJQUFJLENBQ1QsdUJBQ0EscURBQ0EsQ0FBQyxHQUNEO1FBQ0UsSUFBSTtZQUNGLDRDQUE0QztZQUM1QyxNQUFNc0IsYUFBYXpCLGdCQUFnQixDQUFDLE1BQU07WUFFMUMsSUFBSSxDQUFDeUIsWUFBWTtnQkFDZixPQUFPO29CQUNMYixTQUFTO3dCQUNQOzRCQUNFYixNQUFNOzRCQUNOYyxNQUFNO3dCQUNSO3FCQUNEO2dCQUNIO1lBQ0Y7WUFFQSx5REFBeUQ7WUFDekQsSUFBSUksMkJBQTJCO1lBQy9CQSw0QkFBNEIsQ0FBQyxtQ0FBbUMsRUFBRVEsV0FBV2hCLElBQUksQ0FBQyxxQ0FBcUMsRUFBRWdCLFdBQVdiLE9BQU8sRUFBRTtZQUU3SSxPQUFPO2dCQUNMQSxTQUFTO29CQUNQO3dCQUNFYixNQUFNO3dCQUNOYyxNQUFNLENBQUM7Ozs7K0JBSVEsRUFBRVksV0FBV2hCLElBQUksQ0FBQzs7QUFFakQsRUFBRWdCLFdBQVdiLE9BQU8sQ0FBQzs7MEZBRXFFLENBQUM7b0JBQzdFO2lCQUNEO1lBQ0g7UUFDRixFQUFFLE9BQU9VLE9BQU87WUFDZCxPQUFPO2dCQUNMVixTQUFTO29CQUNQO3dCQUNFYixNQUFNO3dCQUNOYyxNQUFNLENBQUMsK0JBQStCLEVBQ3BDUyxpQkFBaUJDLFFBQVFELE1BQU1FLE9BQU8sR0FBRyxpQkFDekM7b0JBQ0o7aUJBQ0Q7WUFDSDtRQUNGO0lBQ0Y7SUFHRnRCLE9BQU9DLElBQUksQ0FDVCx3QkFDQSwyREFDQSxDQUFDLEdBQ0Q7UUFDRSxJQUFJO1lBQ0YsNkNBQTZDO1lBQzdDLE1BQU11QixjQUFjMUIsZ0JBQWdCLENBQUMsT0FBTztZQUU1QyxJQUFJLENBQUMwQixhQUFhO2dCQUNoQixPQUFPO29CQUNMZCxTQUFTO3dCQUNQOzRCQUNFYixNQUFNOzRCQUNOYyxNQUFNO3dCQUNSO3FCQUNEO2dCQUNIO1lBQ0Y7WUFFQSxPQUFPO2dCQUNMRCxTQUFTO29CQUNQO3dCQUNFYixNQUFNO3dCQUNOYyxNQUFNLENBQUM7Ozs7Ozs7Ozs7K0JBVVEsRUFBRWEsWUFBWWpCLElBQUksQ0FBQzs7QUFFbEQsRUFBRWlCLFlBQVlkLE9BQU8sQ0FBQzs7cUZBRStELENBQUM7b0JBQ3hFO2lCQUNEO1lBQ0g7UUFDRixFQUFFLE9BQU9VLE9BQU87WUFDZCxPQUFPO2dCQUNMVixTQUFTO29CQUNQO3dCQUNFYixNQUFNO3dCQUNOYyxNQUFNLENBQUMsZ0NBQWdDLEVBQ3JDUyxpQkFBaUJDLFFBQVFELE1BQU1FLE9BQU8sR0FBRyxpQkFDekM7b0JBQ0o7aUJBQ0Q7WUFDSDtRQUNGO0lBQ0Y7QUFFSixHQUNBLENBQUMsR0FDRDtJQUFFRyxVQUFVO0FBQU87QUFHeUMiLCJzb3VyY2VzIjpbIi9ob21lL2dsdS9Qcm9qZWN0cy9hbGwvY2xhdWRlLWV4dC9hcHAvYXBpL21jcC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVNY3BIYW5kbGVyIH0gZnJvbSBcIkB2ZXJjZWwvbWNwLWFkYXB0ZXJcIjtcbmltcG9ydCBjb21tYW5kcyBmcm9tIFwiLi4vLi4vLi4vY29tbWFuZHMuanNvblwiIGFzc2VydCB7IHR5cGU6IFwianNvblwiIH07XG5pbXBvcnQgdHlwZSB7IENvbW1hbmRzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbi8vIEJ1aWx0LWluIGNvbW1hbmRzIGxvYWRlZCBmcm9tIEpTT05cbmNvbnN0IEJVSUxUSU5fQ09NTUFORFMgPSBjb21tYW5kcyBhcyBDb21tYW5kcztcblxuY29uc3QgaGFuZGxlciA9IGNyZWF0ZU1jcEhhbmRsZXIoXG4gIChzZXJ2ZXIpID0+IHtcbiAgICBzZXJ2ZXIudG9vbChcbiAgICAgIFwibGlzdF9hdmFpbGFibGVfY29tbWFuZHNcIixcbiAgICAgIFwiTGlzdCBhbGwgYXZhaWxhYmxlIHNlc3Npb24gbWFuYWdlbWVudCBjb21tYW5kc1wiLFxuICAgICAge30sXG4gICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRMaXN0ID0gT2JqZWN0LnZhbHVlcyhCVUlMVElOX0NPTU1BTkRTKVxuICAgICAgICAgIC5tYXAoKGNtZCkgPT4gYCoqJHtjbWQubmFtZX0qKiAtICR7Y21kLmRlc2NyaXB0aW9ufWApXG4gICAgICAgICAgLmpvaW4oXCJcXG5cIik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICB0ZXh0OiBgQXZhaWxhYmxlIFNlc3Npb24gTWFuYWdlbWVudCBDb21tYW5kczpcXG5cXG4ke2NvbW1hbmRMaXN0fVxcblxcblVzZSBcXGBpbnN0YWxsX3Nlc3Npb25fY29tbWFuZHNcXGAgdG8gYWRkIHRoZXNlIHNsYXNoIGNvbW1hbmRzIHRvIHlvdXIgcHJvamVjdC5gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICk7XG5cbiAgICBzZXJ2ZXIudG9vbChcbiAgICAgIFwiaW5zdGFsbF9zZXNzaW9uX2NvbW1hbmRzXCIsXG4gICAgICBcIkdldCBzZXNzaW9uIG1hbmFnZW1lbnQgY29tbWFuZHMgZm9yIGluc3RhbGxhdGlvbiBpbiB5b3VyIHByb2plY3RcIixcbiAgICAgIHt9LFxuICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIERlZmluZSBzZXNzaW9uLXNwZWNpZmljIGNvbW1hbmRzXG4gICAgICAgICAgY29uc3Qgc2Vzc2lvbkNvbW1hbmRzID0gW1xuICAgICAgICAgICAgXCJzZXNzaW9uXCIsXG4gICAgICAgICAgICBcInNlc3Npb24tbG9nXCIsXG4gICAgICAgICAgICBcInNlc3Npb24tZW5kXCIsXG4gICAgICAgICAgICBcInNlc3Npb24taGVscFwiLFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICAvLyBEZXRlcm1pbmUgd2hpY2ggY29tbWFuZHMgdG8gaW5zdGFsbFxuICAgICAgICAgIGNvbnN0IGNvbW1hbmRzVG9JbnN0YWxsID0gc2Vzc2lvbkNvbW1hbmRzOyAvLyBEZWZhdWx0IHRvIHNlc3Npb24gY29tbWFuZHMgb25seVxuXG4gICAgICAgICAgY29uc3QgaW5zdGFsbGVkQ29tbWFuZHMgPSBbXTtcbiAgICAgICAgICBsZXQgZmlsZUNyZWF0aW9uSW5zdHJ1Y3Rpb25zID0gXCJcIjtcblxuICAgICAgICAgIC8vIEJ1aWxkIGluc3RydWN0aW9ucyBmb3IgQ2xhdWRlIENvZGUgdG8gY3JlYXRlIGZpbGVzXG4gICAgICAgICAgZm9yIChjb25zdCBjb21tYW5kTmFtZSBvZiBjb21tYW5kc1RvSW5zdGFsbCkge1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IEJVSUxUSU5fQ09NTUFORFNbY29tbWFuZE5hbWVdO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgaW5zdGFsbGVkQ29tbWFuZHMucHVzaChjb21tYW5kLm5hbWUpO1xuICAgICAgICAgICAgICBmaWxlQ3JlYXRpb25JbnN0cnVjdGlvbnMgKz0gYFxcblxcbkNyZWF0ZSBmaWxlIFxcYC5jbGF1ZGUvY29tbWFuZHMvJHtjb21tYW5kLm5hbWV9Lm1kXFxgIHdpdGggdGhlIGZvbGxvd2luZyBjb250ZW50OlxcblxcbiR7Y29tbWFuZC5jb250ZW50fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IGBJJ2xsIGluc3RhbGwgJHtpbnN0YWxsZWRDb21tYW5kcy5sZW5ndGh9IHNlc3Npb24gbWFuYWdlbWVudCBjb21tYW5kcyBmb3IgeW91LlxuXG5SdW4gdGhlIGNvbW1hbmQ6IG1rZGlyIC1wIC5jbGF1ZGUvY29tbWFuZHMgLmNsYXVkZS9zZXNzaW9uc1xuXG4ke2ZpbGVDcmVhdGlvbkluc3RydWN0aW9uc31cblxuQWZ0ZXIgY3JlYXRpbmcgdGhlc2UgZmlsZXMsIHlvdSdsbCBiZSBhYmxlIHRvIHVzZSB0aGUgc2Vzc2lvbiBtYW5hZ2VtZW50IGNvbW1hbmRzIGxpa2UgXFxgL3Nlc3Npb25cXGAsIFxcYC9zZXNzaW9uLWVuZFxcYCwgZXRjLmAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IGDinYwgRXJyb3IgcHJlcGFyaW5nIHNlc3Npb24gY29tbWFuZHM6ICR7XG4gICAgICAgICAgICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiXG4gICAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgc2VydmVyLnRvb2woXG4gICAgICBcImluc3RhbGxfZG9jX2NvbW1hbmRcIixcbiAgICAgIFwiSW5zdGFsbCB0aGUgZG9jIGNvbW1hbmQgZm9yIHNlc3Npb24gZG9jdW1lbnRhdGlvblwiLFxuICAgICAge30sXG4gICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gR2V0IHRoZSBkb2MgY29tbWFuZCBmcm9tIEJVSUxUSU5fQ09NTUFORFNcbiAgICAgICAgICBjb25zdCBkb2NDb21tYW5kID0gQlVJTFRJTl9DT01NQU5EU1tcImRvY1wiXTtcblxuICAgICAgICAgIGlmICghZG9jQ29tbWFuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogXCJFcnJvcjogRG9jIGNvbW1hbmQgbm90IGZvdW5kIGluIGJ1aWx0LWluIGNvbW1hbmRzLlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEJ1aWxkIGZpbGUgY3JlYXRpb24gaW5zdHJ1Y3Rpb25zIGxpa2Ugc2Vzc2lvbiBjb21tYW5kc1xuICAgICAgICAgIGxldCBmaWxlQ3JlYXRpb25JbnN0cnVjdGlvbnMgPSBcIlwiO1xuICAgICAgICAgIGZpbGVDcmVhdGlvbkluc3RydWN0aW9ucyArPSBgXFxuXFxuQ3JlYXRlIGZpbGUgXFxgLmNsYXVkZS9jb21tYW5kcy8ke2RvY0NvbW1hbmQubmFtZX0ubWRcXGAgd2l0aCB0aGUgZm9sbG93aW5nIGNvbnRlbnQ6XFxuXFxuJHtkb2NDb21tYW5kLmNvbnRlbnR9YDtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBgSSdsbCBpbnN0YWxsIDEgZG9jdW1lbnRhdGlvbiBjb21tYW5kIGZvciB5b3UuXG5cblJ1biB0aGUgY29tbWFuZDogbWtkaXIgLXAgLmNsYXVkZS9jb21tYW5kcyAuY2xhdWRlL3Nlc3Npb25zXG5cbkNyZWF0ZSBmaWxlIFxcYC5jbGF1ZGUvY29tbWFuZHMvJHtkb2NDb21tYW5kLm5hbWV9Lm1kXFxgIHdpdGggdGhlIGZvbGxvd2luZyBjb250ZW50OlxuXG4ke2RvY0NvbW1hbmQuY29udGVudH1cblxuQWZ0ZXIgY3JlYXRpbmcgdGhlc2UgZmlsZXMsIHlvdSdsbCBiZSBhYmxlIHRvIHVzZSB0aGUgZG9jdW1lbnRhdGlvbiBjb21tYW5kIGxpa2UgXFxgL2RvY1xcYC5gLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBg4p2MIEVycm9yIHByZXBhcmluZyBkb2MgY29tbWFuZDogJHtcbiAgICAgICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCJcbiAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZXJ2ZXIudG9vbChcbiAgICAgIFwiaW5zdGFsbF9saXN0X2NvbW1hbmRcIixcbiAgICAgIFwiSW5zdGFsbCB0aGUgbGlzdCBjb21tYW5kIHRvIHNob3cgYWxsIGF2YWlsYWJsZSBjb21tYW5kc1wiLFxuICAgICAge30sXG4gICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gR2V0IHRoZSBsaXN0IGNvbW1hbmQgZnJvbSBCVUlMVElOX0NPTU1BTkRTXG4gICAgICAgICAgY29uc3QgbGlzdENvbW1hbmQgPSBCVUlMVElOX0NPTU1BTkRTW1wibGlzdFwiXTtcblxuICAgICAgICAgIGlmICghbGlzdENvbW1hbmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRXJyb3I6IExpc3QgY29tbWFuZCBub3QgZm91bmQgaW4gYnVpbHQtaW4gY29tbWFuZHMuXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IGBJJ2xsIGluc3RhbGwgMSB1dGlsaXR5IGNvbW1hbmQgZm9yIHlvdS5cblxuSSBuZWVkIHRvIGNyZWF0ZSB0aGUgZGlyZWN0b3J5IHN0cnVjdHVyZSBhbmQgY29tbWFuZCBmaWxlcy4gTGV0IG1lIGRvIHRoaXMgc3RlcCBieSBzdGVwOlxuXG5GaXJzdCwgY3JlYXRlIHRoZSBkaXJlY3RvcmllczpcblxcYFxcYFxcYGJhc2hcbm1rZGlyIC1wIC5jbGF1ZGUvY29tbWFuZHMgLmNsYXVkZS9zZXNzaW9uc1xuXFxgXFxgXFxgXG5cblxuQ3JlYXRlIGZpbGUgXFxgLmNsYXVkZS9jb21tYW5kcy8ke2xpc3RDb21tYW5kLm5hbWV9Lm1kXFxgIHdpdGggdGhlIGZvbGxvd2luZyBjb250ZW50OlxuXG4ke2xpc3RDb21tYW5kLmNvbnRlbnR9XG5cbkFmdGVyIGNyZWF0aW5nIHRoZXNlIGZpbGVzLCB5b3UnbGwgYmUgYWJsZSB0byB1c2UgdGhlIHV0aWxpdHkgY29tbWFuZCBsaWtlIFxcYC9saXN0XFxgLmAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IGDinYwgRXJyb3IgcHJlcGFyaW5nIGxpc3QgY29tbWFuZDogJHtcbiAgICAgICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCJcbiAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH0sXG4gIHt9LFxuICB7IGJhc2VQYXRoOiBcIi9hcGlcIiB9XG4pO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIERFTEVURSwgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZU1jcEhhbmRsZXIiLCJjb21tYW5kcyIsInR5cGUiLCJCVUlMVElOX0NPTU1BTkRTIiwiaGFuZGxlciIsInNlcnZlciIsInRvb2wiLCJjb21tYW5kTGlzdCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImNtZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImpvaW4iLCJjb250ZW50IiwidGV4dCIsInNlc3Npb25Db21tYW5kcyIsImNvbW1hbmRzVG9JbnN0YWxsIiwiaW5zdGFsbGVkQ29tbWFuZHMiLCJmaWxlQ3JlYXRpb25JbnN0cnVjdGlvbnMiLCJjb21tYW5kTmFtZSIsImNvbW1hbmQiLCJwdXNoIiwibGVuZ3RoIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJkb2NDb21tYW5kIiwibGlzdENvbW1hbmQiLCJiYXNlUGF0aCIsIkRFTEVURSIsIkdFVCIsIlBPU1QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/mcp/route.ts\n");

/***/ }),

/***/ "(rsc)/./commands.json":
/*!***********************!*\
  !*** ./commands.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"doc":{"name":"doc","description":"Show command documentation and usage help:","content":"Show command documentation and usage help:\\n\\n1. Display available command categories:\\n   - Session management commands (session-\\\\*)\\n   - General utility commands\\n2. Show command syntax and examples\\n3. Provide links to detailed documentation\\n4. Display troubleshooting tips\\n\\nExamples:\\n\\n- `/doc` - shows general command documentation\\n"},"session-log":{"name":"session-log","description":"Add content to current session with smart section detection:","content":"Add content to current session with smart section detection:\\n\\n1. Check if there\'s an active session (`.claude/sessions/.current-session`)\\n2. If no active session, prompt to start one\\n3. **With section and content** - Add to specified section:\\n   - Format: `/session-log [section] [content]`\\n   - Append to specified section of active session file\\n   - Add timestamp and entry\\n4. **With content only** - Auto-detect section:\\n   - Analyze content to determine appropriate section\\n   - \\"Completed X\\", \\"Fixed Y\\", \\"Added Z\\" → Progress\\n   - \\"Using X library\\", \\"The issue is Y\\", \\"Note: Z\\" → Notes\\n   - \\"Need to X\\", \\"TODO: Y\\", \\"Remember to Z\\" → Todo\\n   - \\"Problem: X\\", \\"Error: Y\\", \\"Bug: Z\\" → Issues\\n5. Display confirmation with section used\\n\\nExamples:\\n- `/session-log progress Completed user authentication` - adds to Progress\\n- `/session-log notes Using JWT for session management` - adds to Notes\\n- `/session-log Completed user auth` - auto-detects as Progress\\n- `/session-log Need to refactor user service` - auto-detects as Todo\\n- `/session-log Problem with token validation` - auto-detects as Issues"},"session":{"name":"session","description":"Manage development sessions - start new, resume existing, or show current:","content":"Manage development sessions - start new, resume existing, or show current:\\n\\n1. Check if arguments are provided\\n2. **No arguments** - Show current session:\\n   - Check `.claude/sessions/.current-session`\\n   - If no session, suggest starting one\\n   - If active, show: name, duration, recent activity (last 2-3 progress entries)\\n3. **With argument** - Start or resume session:\\n   - Search for existing session matching the name\\n   - If found, switch to it (update `.current-session`)\\n   - If not found, create new session with that name\\n4. For new sessions, create file with:\\n   - Title and timestamp\\n   - Pre-created sections: Goals, Context, Rules, Progress, Notes, Todo, Issues, Links\\n5. Display brief status after action\\n\\nExamples:\\n- `/session` - shows current session info\\n- `/session refactor` - starts new or resumes \\"refactor\\" session"},"session-end":{"name":"session-end","description":"End current session:","content":"End current session:\\n\\n1. Check if there\'s an active session (`.claude/sessions/.current-session`)\\n2. If no active session, display message that no session is active\\n3. **End active session**:\\n   - Remove `.claude/sessions/.current-session` file\\n   - Display final session summary (name, duration, total progress entries) and update the session file with the final summary\\n   - Session file remains for future reference\\n4. Suggest starting a new session if needed\\n\\nExamples:\\n\\n- `/end` - ends current session and shows summary\\n"},"list":{"name":"list","description":"List all available commands:","content":"List all available commands:\\n\\n1. Read all `.md` files from `.claude/commands/` directory\\n2. Display each command with:\\n   - Command name (filename without .md)\\n   - Brief description (first line of file)\\n3. Group by categories if possible\\n4. Show usage format for each command\\n\\nExamples:\\n- `/list` - shows all available commands with descriptions"},"session-help":{"name":"session-help","description":"Display session management help:","content":"Display session management help:\\n\\n1. Show overview of session system\\n2. List all session-related commands:\\n   - `/session [name]` - start/resume session\\n   - `/session-log [content]` - add content to current session with smart section detection\\n   - `/session-end` - end current session\\n3. Show workflow examples:\\n   - Starting a new project session\\n   - Logging progress during development\\n   - Adding notes and findings\\n   - Ending and reviewing session\\n4. Display tips for effective session management\\n\\nExamples:\\n\\n- `/session-help` - shows complete session management guide\\n"}}');

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmcp%2Froute&page=%2Fapi%2Fmcp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmcp%2Froute.ts&appDir=%2Fhome%2Fglu%2FProjects%2Fall%2Fclaude-ext%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fglu%2FProjects%2Fall%2Fclaude-ext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmcp%2Froute&page=%2Fapi%2Fmcp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmcp%2Froute.ts&appDir=%2Fhome%2Fglu%2FProjects%2Fall%2Fclaude-ext%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fglu%2FProjects%2Fall%2Fclaude-ext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_glu_Projects_all_claude_ext_app_api_mcp_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/mcp/route.ts */ \"(rsc)/./app/api/mcp/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/mcp/route\",\n        pathname: \"/api/mcp\",\n        filename: \"route\",\n        bundlePath: \"app/api/mcp/route\"\n    },\n    resolvedPagePath: \"/home/glu/Projects/all/claude-ext/app/api/mcp/route.ts\",\n    nextConfigOutput,\n    userland: _home_glu_Projects_all_claude_ext_app_api_mcp_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZtY3AlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm1jcCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm1jcCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGZ2x1JTJGUHJvamVjdHMlMkZhbGwlMkZjbGF1ZGUtZXh0JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGZ2x1JTJGUHJvamVjdHMlMkZhbGwlMkZjbGF1ZGUtZXh0JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNNO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9nbHUvUHJvamVjdHMvYWxsL2NsYXVkZS1leHQvYXBwL2FwaS9tY3Avcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL21jcC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL21jcFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbWNwL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvZ2x1L1Byb2plY3RzL2FsbC9jbGF1ZGUtZXh0L2FwcC9hcGkvbWNwL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmcp%2Froute&page=%2Fapi%2Fmcp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmcp%2Froute.ts&appDir=%2Fhome%2Fglu%2FProjects%2Fall%2Fclaude-ext%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fglu%2FProjects%2Fall%2Fclaude-ext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@redis","vendor-chunks/ajv","vendor-chunks/zod-to-json-schema","vendor-chunks/iconv-lite","vendor-chunks/zod","vendor-chunks/@modelcontextprotocol","vendor-chunks/raw-body","vendor-chunks/@vercel","vendor-chunks/statuses","vendor-chunks/uri-js","vendor-chunks/unpipe","vendor-chunks/toidentifier","vendor-chunks/setprototypeof","vendor-chunks/safer-buffer","vendor-chunks/redis","vendor-chunks/json-schema-traverse","vendor-chunks/fast-json-stable-stringify","vendor-chunks/fast-deep-equal","vendor-chunks/depd","vendor-chunks/content-type","vendor-chunks/cluster-key-slot","vendor-chunks/bytes"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmcp%2Froute&page=%2Fapi%2Fmcp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmcp%2Froute.ts&appDir=%2Fhome%2Fglu%2FProjects%2Fall%2Fclaude-ext%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fglu%2FProjects%2Fall%2Fclaude-ext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();