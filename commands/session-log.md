Add content to current session with smart section detection:

1. Check if there's an active session (`.claude/sessions/.current-session`)
2. If no active session, prompt to start one
3. **With section and content** - Add to specified section:
   - Format: `/session-log [section] [content]`
   - Append to specified section of active session file
   - Add timestamp and entry
4. **With content only** - Auto-detect section:
   - Analyze content to determine appropriate section
   - "Completed X", "Fixed Y", "Added Z" → Progress
   - "Using X library", "The issue is Y", "Note: Z" → Notes
   - "Need to X", "TODO: Y", "Remember to Z" → Todo
   - "Problem: X", "Error: Y", "Bug: Z" → Issues
5. Display confirmation with section used

Examples:
- `/session-log progress Completed user authentication` - adds to Progress
- `/session-log notes Using JWT for session management` - adds to Notes
- `/session-log Completed user auth` - auto-detects as Progress
- `/session-log Need to refactor user service` - auto-detects as Todo
- `/session-log Problem with token validation` - auto-detects as Issues