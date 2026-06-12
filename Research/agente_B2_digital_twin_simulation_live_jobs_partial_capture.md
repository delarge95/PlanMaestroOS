# B2_digital_twin_simulation_live_jobs_partial_capture

## Estado

```text
Task: B2 — Digital Twin / Simulation live jobs
Date checked: 2026-06-12
Status: Incomplete / partial capture
Reason: multiple job boards blocked automated browsing or required verification.
```

## Qué se logró recolectar

No se logró construir una tabla B2 completa de ofertas verificadas. Sí se capturaron varios resultados públicos desde snippets de buscador antes de que los portales bloquearan el acceso.

Estos registros deben tratarse como:

```text
snippet-level evidence, not fully verified postings
```

No usar como base para aplicar sin reabrir manualmente cada URL.

---

## Tabla parcial — resultados capturados

| Company / platform | Role | URL | Date checked | Region | Remote scope | Salary | Seniority | Requirements captured | Portfolio expectations | Work authorization | Contractor possibility | Relevance to Alexander | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Upwork | Digital Twin Development using Unity / Godot / Unreal Engine | https://www.upwork.com/freelance-jobs/apply/Digital-Twin-Development-using-Unity-Godot-Unreal-Engine_~021033003486070320/ | 2026-06-12 | Unknown | Likely remote freelance | not found | not found | Digital twin, Unity/Godot/Unreal, 3D modeling, simulation, real-time data integration | not found | Unknown | High; Upwork freelance format | Very high: digital twin + Unity + simulation + contractor route | Medium-low |
| Indeed | Remote Unity Developer jobs | https://www.indeed.com/q-unity-developer-l-remote-jobs.html | 2026-06-12 | Remote / unknown | Unknown; not assumed worldwide | not found | mixed | Search snippet showed 507 remote Unity developer openings | not found | Unknown | Unknown | Medium: Unity remote market signal, not specific to digital twin | Low |
| Glassdoor | Unity Developer jobs in Remote | https://www.glassdoor.com/Job/remote-unity-developer-jobs-SRCH_IL.0,6_IS11047_KO7,22.htm | 2026-06-12 | Remote / unknown | Unknown; not assumed worldwide | not found | mixed | Search snippet showed 75 Unity developer jobs in Remote, June 2026 | not found | Unknown | Unknown | Medium: Unity remote market signal | Low |
| Joble | Unity developer remote jobs | https://joble.org/jobs-unity-developer-remote | 2026-06-12 | Unknown | Unknown | not found | mixed | Search snippet showed many Unity developer remote vacancies | not found | Unknown | Unknown | Low-medium; weak source quality | Low |
| Remote Rocketship | Remote Unity Jobs | https://www.remoterocketship.com/jobs/unity | 2026-06-12 | Remote / unknown | Unknown | not found | mixed | Search snippet showed 103 remote Unity engineer positions | not found | Unknown | Unknown | Medium: useful if manually reopened later | Low |
| Remotive | Unity search page | https://remotive.com/remote-jobs/search?search=unity | 2026-06-12 | Remote / unknown | Unknown | not found | not found | Page returned 404 / unavailable during browsing | not found | Unknown | Unknown | Not usable from current attempt | Low |

---

## Access failures captured

| Platform | Result |
|---|---|
| Upwork | Cloudflare verification blocked full job page |
| Remote Rocketship | blocked by Cloudflare/security page |
| Indeed | additional verification required |
| Remotive | search URL returned 404 / page not found |
| DuckDuckGo | usable for snippets only |
| Google | affected by prior blocked/session state |

---

## Interpretation constraints

| Constraint | Meaning |
|---|---|
| Snippet-only rows | Not enough to apply or cite as final evidence |
| Remote scope unknown | Do not assume Colombia eligibility |
| Salary missing | Do not infer compensation |
| Work authorization missing | Must verify manually |
| Contractor possibility inferred only for Upwork | Upwork format suggests freelance, but full terms were inaccessible |
| B2 incomplete | Requires agent/manual browsing or another search path |

---

## What this partial capture suggests

| Signal | Strength |
|---|---|
| Unity remote postings exist broadly | Medium |
| Digital twin + Unity freelance work appears on Upwork | Medium-high |
| Full live-job verification failed | High |
| B2 needs rerun through agent or manual browser | High |

---

## Recommended rerun prompt

```text
Retry B2_digital_twin_simulation_live_jobs with broader sources and lower target volume.

Objective:
Collect 8–15 live or recently listed postings related to Digital Twin, Simulation, Unity, Real-Time 3D, XR, Technical Visualization, Industrial Visualization.

Prioritize accessible sources:
- company career pages;
- LinkedIn job snippets if visible;
- Wellfound;
- Workable;
- Greenhouse;
- Lever;
- Otta / Welcome to the Jungle if accessible;
- Upwork only if full posting visible;
- job board snippets only if clearly marked snippet-level.

Fields:
company, role, URL, date checked, region, remote scope, salary if visible, seniority, requirements, portfolio expectations, work authorization, contractor possibility, relevance to Alexander, confidence.

Rules:
- Do not assume remote means worldwide.
- If full posting is blocked, mark as snippet-only.
- Do not invent salary.
- If unavailable, write not found.
- Tables only.
```
