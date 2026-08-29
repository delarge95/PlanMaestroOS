---
trigger: always_on
---

# Rule: Ownership matrix enforcement (activation: ALWAYS ON)

Every repo path belongs to exactly one category FOR YOUR AGENT (see your ficha in docs/agents/PLAN_MULTIAGENTE.md):
- OWN: create/modify/delete freely.
- READ: read and import only. NEVER modify.
- TICKET: changes require a ticket in docs/agents/tickets.md, executed by AG-CORE or the owner.

## Shared global files (only AG-CORE edits them; everyone else: TICKET)
package.json, tsconfig.json, vitest.config.ts, astro.config.mjs, src/styles/tokens.css, src/styles/typography.ts, src/components/ui/**, src/components/shell/navItems.ts, src/components/shell/sectionNavConfig.ts, src/store/appStore.ts, src/data/types.ts, src/data/canonicalDomainModel.ts, src/data/master_rag_dataset.json, src/data/rag_index.json, src/data/ragEngine.ts, src/lib/ai/**, worker/**, src/layouts/**.

Controlled exception: your own section entry in sectionNavConfig.ts may be added as a single additive line, documented in the PR.

## Anti-conflict rules
1. NEVER edit a file outside your OWN. A fix in foreign territory becomes: ticket + temporary local workaround inside your OWN.
2. Cross-domain contracts are defined as types in the CONSUMER's own files or via TICKET to src/data/contracts/.
3. Merge waves: AG-CORE first (shared infrastructure), domain agents in parallel, AG-ORQ last (integration).
4. Before committing: run git status / diff --name-only and verify EVERY touched path is inside your OWN. List and justify any documented exception in the PR.