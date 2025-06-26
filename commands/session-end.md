End current session:

1. Check if there's an active session (`.claude/sessions/.current-session`)
2. If no active session, display message that no session is active
3. **End active session**:
   - Remove `.claude/sessions/.current-session` file
   - Display final session summary (name, duration, total progress entries) and update the session file with the final summary
   - Session file remains for future reference
4. Suggest starting a new session if needed

Examples:

- `/end` - ends current session and shows summary
