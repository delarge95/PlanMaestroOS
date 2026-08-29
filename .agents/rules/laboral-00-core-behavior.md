---
trigger: always_on
---

# Workspace Rules — Laboral / Plan Maestro OS (activation: ALWAYS ON)

SOURCE OF TRUTH: docs/agents/PLAN_MULTIAGENTE.md. Its section 0 principles are LAW. Before ANY work: identify which agent you are (AG-XXX), read your full ficha and the ownership matrix (section 1.2). If the task belongs to another agent, declare it and open a ticket instead of doing it.

## Binding principles (condensed from section 0 — non-negotiable)
1. Deterministic core + AI as narrative layer: numeric rules live in pure, testable TypeScript; the LLM only composes text over existing evaluations. NO visible number in the app without traceability to a ruleId, a cited source (doc/chapter/page) or user ledger data.
2. Proactive AI by events, not chat: EventBus -> rules engine -> SuggestionEngine -> persistent queue (max 3 active, cooldowns per type) -> surfaces. Max 1 event-driven nudge/day. Chat is fallback.
3. ALL AI output is a draft with human approval (AiDraftReview: Edit/Approve/Discard), with visible sources ("Datos usados") and per-call logging. No clinical diagnosis; no copyrighted book content.
4. Suggestion lifecycle: proposed -> shown -> accepted|dismissed|expired -> applied -> outcome tracked. "Not now" is NOT "not interested".
5. GitHub Pages = static: 100% client-side engine (fast, offline, private); real persistence in IndexedDB via adapter; app must be 100% functional without LLM.
6. Simple UX, complex engine: every screen answers "what do I do today and why?"; every piece of advice carries its "why?" with a source citation.
7. UserState contract precedes rules: rule applicability depends on what UserState can express.
8. Rule governance: draft -> reviewed -> approved; deprecation, NEVER deletion; evidenceTier (meta-analysis > RCT > observational > expert book) resolves source conflicts.
9. GOLDEN RULE (added after the FIT incident): NEVER delete or replace consolidated work. Every change is ADDITIVE or requires explicit user approval. No agent removes "seemingly dead" components without reference verification (grep) AND approval. Consolidated UX (searchers, submenus, groupings, full configurators) is untouchable without an express mandate.
10. Economic orchestration: low-reasoning work is delegated to the free external environments per docs/orquestacion/NORMAS_ORQUESTADOR.md; credit subagents only for maximum reasoning.

## Hard gates
- Before ANY PR: `npx astro check` (0 errors) + `npm test` (green) + your domain validators + diff checked against the ownership matrix.
- Branch discipline: work on agent/<branch>; NO direct merge to main; commits with domain prefix (feat(fitness):, fix(core):...).
- NO new mocks: missing data is shown as an explicit gap ("pending: <domain>"), never simulated.