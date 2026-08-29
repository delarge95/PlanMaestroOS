---
description: mandatory session bootstrap for any agent in this workspace. Run before touching any file.
---

# Workflow: Agent startup

## Steps
1. Declare your agent identity (AG-XXX) and branch.
2. Read docs/agents/PLAN_MULTIAGENTE.md: section 0 (principles), your ficha, section 1.2 (ownership).
3. Read your STATUS doc and your open tickets (docs/agents/tickets.md).
4. git checkout agent/<branch>; sync with main per wave rules; npm install if needed.
5. State: current phase, the exact item you will work on, and which files in your OWN you expect to touch.
6. If anything in the request is foreign territory -> /ticket-protocol before proceeding.