---
description: how to request changes outside your territory without violating the ownership matrix.
---

# Workflow: Ticket protocol

## Steps
1. TRIGGER: needed change outside your OWN, a shared global file, or a missing export from another domain.
2. Write the ticket in docs/agents/tickets.md: requester agent, target owner, exact file(s), needed change, reason, urgency, suggested acceptance criteria.
3. If blocked, build a TEMPORARY local workaround strictly inside your OWN; mark it clearly as workaround-for-ticket.
4. When the ticket is resolved: remove the workaround, integrate the official change, re-run /pr-gate.
5. Never "fix it yourself" in foreign territory, even if the fix looks trivial.