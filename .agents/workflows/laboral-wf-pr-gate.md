---
description: mandatory verification before any pull request. No PR without every gate green.
---

# Workflow: PR gate

## Steps
1. OWNERSHIP AUDIT: git status + diff --name-only; every touched path inside your OWN or a documented exception (e.g. additive sectionNav line). Any violation -> revert or move to ticket.
2. GOLDEN RULE AUDIT: confirm no consolidated component/UX was deleted or replaced; if deletion was approved, quote the approval.
3. `npx astro check` -> 0 errors.
4. `npm test` -> green, including new tests for new contracts/logic.
5. Your domain validators (per your ficha; e.g. validateFitness*.ts, validateSkills.ts) -> green.
6. PR description: contracts/data newly available to other domains, list of additive changes, tickets closed, evidence of gates 1-5.