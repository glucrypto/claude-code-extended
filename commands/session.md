Manage development sessions - start new, resume existing, or show current:

1. Check if arguments are provided
2. **No arguments** - Show current session:
   - Check `.claude/sessions/.current-session`
   - If no session, suggest starting one
   - If active, show: name, duration, recent activity (last 2-3 progress entries)
3. **With argument** - Start or resume session:
   - Search for existing session matching the name
   - If found, switch to it (update `.current-session`)
   - If not found, create new session with that name
4. For new sessions, create file with:
   - Title and timestamp
   - Pre-created sections: Goals, Context, Rules, Progress, Notes, Todo, Issues, Links
   - DO NOT fill in any of the sections, except progress and one bullet in the Goals section
5. Display brief status after action

Examples:

- `/session` - shows current session info
- `/session refactor` - starts new or resumes "refactor" session
