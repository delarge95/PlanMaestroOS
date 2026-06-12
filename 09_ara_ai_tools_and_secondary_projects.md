# 09 — ARA, AI Tools and Secondary Projects Strategy

## 0. Purpose of this section

This file defines how Alexander Woodcock Salomón should use ARA Framework, ai-news-aggregator, FitApp-Free, the hyperrealistic Blender portrait and minor repositories inside the broader international job-search strategy.

The goal is not to expand every project. The goal is to decide which projects support the primary positioning, which projects should remain secondary, which require cleanup before being public, and which should be omitted to avoid profile dilution.

The primary positioning remains:

> Real-Time 3D Developer / Unity Technical Artist focused on interactive technical visualization, CAD-to-realtime optimization, and WebGL deployment.

Secondary projects must support that positioning. They must not replace it.

---

## 1. Source-of-truth assumptions

| Item | Current status |
|---|---|
| Thesis | Complete, pending defense |
| Flagship project | TwinSight X500 |
| Primary market route | Unity / Real-Time 3D / Technical Visualization |
| Secondary route | Tools / Pipeline / Python automation |
| AI route | Supporting route, not primary yet |
| Art route | Supporting evidence, not main positioning |
| Full-stack route | Fallback only |
| Fitness/product route | Low priority for current job search |

The practical implication is simple: secondary projects are useful only if they strengthen one of these claims:

- technical systems thinking;
- automation mindset;
- ability to build tools;
- ability to document technical workflows;
- 3D production literacy;
- ability to finish and present a coherent product.

If a project does not support those claims, it should not be highlighted.

---

## 2. Project hierarchy

| Tier | Project | Public priority |
|---|---|---:|
| 1 | TwinSight X500 | Mandatory |
| 2 | ARA Framework | Conditional |
| 2 | Hyperrealistic Blender portrait | Conditional |
| 3 | ai-news-aggregator | Low / conditional |
| 3 | FitApp-Free | Low |
| 4 | deus-ex-machina | Audit before showing |
| 4 | skills-introduction-to-github | Do not highlight |
| 4 | old web/client projects | Only if relevant and clean |

The portfolio should not look like a random archive of experiments. It should look like a technical professional profile with a main axis and controlled secondary proof.

---

## 3. ARA Framework

### 3.1 Current positioning

ARA Framework is an academic research automation system / multi-agent research workflow prototype. It uses Python, LangGraph, LangChain, Groq LLaMA 3.3-70B, Redis, optional Supabase, Semantic Scholar API, Playwright MCP, MarkItDown MCP, PDF processing, web scraping, checkpointing, budget management and Markdown report generation.

It should be described as:

> AI-assisted research automation prototype for structured academic and technical report generation.

It should not be described as:

- enterprise AI platform;
- production-ready research operating system;
- autonomous research agent comparable to commercial products;
- ML/AI engineering proof;
- peer-reviewed research infrastructure;
- finished SaaS.

### 3.2 Strategic value

ARA is useful because it shows:

- Python systems thinking;
- workflow decomposition;
- agent orchestration awareness;
- API integration;
- retrieval/research workflow design;
- automation mindset;
- technical documentation;
- ability to use AI beyond casual prompting.

ARA is not yet strong enough to be the main employment hook unless it has:

- working demo;
- clear README;
- installation instructions;
- example output;
- architecture diagram;
- limitations;
- clean environment setup;
- no secrets in repo;
- controlled claims.

### 3.3 Relevance by target role

| Role family | ARA relevance |
|---|---:|
| Real-Time 3D / Interactive 3D | Low / indirect |
| Unity Technical Artist | Medium if framed as tooling mindset |
| Technical Visualization | Medium if framed as documentation automation |
| Unity WebGL | Low |
| Tools / Pipeline Developer | High |
| Python Automation Developer | High |
| LLM Application Developer | Medium / conditional |
| Full-stack Developer | Medium if UI/API exists |
| Game Technical Artist | Low / indirect |

### 3.4 Public/private decision

ARA should become public only after a cleanup pass.

Recommended status now:

> Keep private or semi-private until it has a recruiter-safe README and one reproducible demo.

Minimum public release requirements:

- no API keys;
- no private paths;
- no broken scripts in root;
- `README.md` explaining purpose, architecture, setup and limitations;
- `.env.example`;
- example input and output;
- architecture diagram;
- screenshots or terminal demo;
- short demo video or GIF;
- license decision;
- explicit “prototype” label.

### 3.5 README structure for ARA

Recommended README sections:

```text
# ARA Framework

AI-assisted research automation prototype for structured academic and technical report generation.

## Problem
Manual academic research workflows are repetitive, fragmented and hard to reproduce.

## What it does
- niche analysis
- literature discovery
- technical architecture draft
- implementation research
- report synthesis

## Architecture
- Niche Analyst
- Literature Researcher
- Technical Architect
- Implementation Specialist
- Content Synthesizer

## Tech stack
Python, LangGraph, LangChain, Redis, Semantic Scholar API, Playwright MCP, MarkItDown MCP, Groq LLaMA.

## Current status
Prototype. Functional core under cleanup. Not a production system.

## Demo
Input example, output example, screenshots.

## Limitations
- depends on external APIs
- outputs require human review
- source quality varies
- not a substitute for academic judgment

## Future work
- stronger evaluation
- better source validation
- UI layer
- cost controls
```

### 3.6 Claims allowed

Allowed:

- “Built a Python prototype for structured research automation.”
- “Designed a multi-agent workflow using LangGraph.”
- “Integrated external research and document-processing tools.”
- “Implemented checkpointing, report generation and modular agent responsibilities.”
- “Used AI assistance while retaining architecture, debugging and integration responsibility.”

Not allowed unless evidence exists:

- “Production-ready.”
- “Autonomous research platform.”
- “Enterprise-grade.”
- “AI engineer.”
- “Machine learning engineer.”
- “Deployed SaaS.”
- “Scientifically validated.”

### 3.7 ARA action plan

| Priority | Task | Purpose |
|---:|---|---|
| 1 | Remove secrets and private config | Security |
| 2 | Verify reproducible run | Credibility |
| 3 | Add example input/output | Recruiter comprehension |
| 4 | Add architecture diagram | Technical proof |
| 5 | Add limitations | Trust |
| 6 | Add demo video/GIF | Fast review |
| 7 | Decide public/private | Exposure control |

ARA should not receive major development time before TwinSight portfolio assets are published.

---

## 4. ai-news-aggregator

### 4.1 Current positioning

ai-news-aggregator is a private full-stack AI news aggregation and analysis platform. It reportedly uses FastAPI, React, PostgreSQL, Redis, Python backend and an analysis pipeline.

It is useful only if it can be demonstrated as a working system.

Current recommended status:

> Keep private until a minimal demo works.

### 4.2 Strategic value

Potential value:

- FastAPI proof;
- React proof;
- PostgreSQL / Redis proof;
- product logic;
- data ingestion;
- AI summarization pipeline;
- deployment potential.

Current risk:

- it dilutes the 3D/technical-art positioning;
- it makes the profile look like unfocused full-stack/AI exploration;
- if incomplete, it weakens credibility;
- if public but broken, it is worse than invisible.

### 4.3 Role relevance

| Role family | Relevance |
|---|---:|
| Real-Time 3D / Interactive 3D | Low |
| Unity Technical Artist | Low |
| Technical Visualization | Low / indirect |
| Tools / Pipeline Developer | Medium |
| Python Automation Developer | Medium / high |
| LLM Application Developer | Medium |
| Full-stack Developer | High |

### 4.4 Publication decision

Do not pin this repo unless it has:

- working local setup;
- live demo or screenshots;
- seeded sample data;
- clean README;
- architecture diagram;
- no broken dependencies;
- no private API keys;
- clear explanation of what AI does and does not do.

### 4.5 Minimum viable public version

The minimum version does not need to be impressive. It needs to be reliable.

Required:

- article ingestion from one or two sources;
- dashboard with list and detail view;
- summary or categorization pipeline;
- backend API documented;
- local setup command;
- screenshots;
- known limitations.

Optional:

- user accounts;
- saved topics;
- PostgreSQL deployment;
- Docker compose;
- evaluation metrics;
- LangGraph integration.

### 4.6 Recommendation

Do not prioritize ai-news-aggregator in the first 30 days of job-search preparation.

Use it later only if applying to:

- Python automation roles;
- LLM application roles;
- full-stack roles;
- internal tooling roles.

It should not appear above TwinSight or ARA.

---

## 5. FitApp-Free

### 5.1 Current positioning

FitApp-Free is a fitness / calisthenics / multi-discipline app in development. It focuses on progressions, injury considerations, routine tracking, workout tracking, weight progression, repetitions, user progress and exercise programming logic.

### 5.2 Strategic value

FitApp may show:

- product thinking;
- domain modeling;
- routine/progression logic;
- UX/system design;
- persistence/data structures;
- long-term product initiative.

But it does not strongly support the main profile.

### 5.3 Risk

FitApp is the highest dilution risk among the named projects because it shifts the reader toward:

- generic app development;
- fitness product management;
- personal-product hobby;
- incomplete startup idea.

For the current strategy, this is mostly noise.

### 5.4 Recommended status

> Keep private or omit from recruiter-facing materials for now.

Use only if:

- applying to full-stack/product roles;
- it has a clean demo;
- it shows strong system design;
- it does not displace TwinSight.

### 5.5 Minimum public threshold

Before showing FitApp publicly, it needs:

- working user flow;
- exercise/progression model;
- routine builder;
- tracking UI;
- screenshots;
- README explaining system design;
- no incomplete placeholder state.

### 5.6 Recommendation

Do not spend significant job-search time on FitApp during the 0–6 month employment sprint.

---

## 6. Hyperrealistic Blender portrait

### 6.1 Current positioning

The Blender portrait was made 100% in Blender following CG Cookie HUMAN. It demonstrates character pipeline, topology, materials, grooming, lighting, rendering and production discipline.

It is useful only if presented as a technical breakdown, not as a generic render.

### 6.2 Strategic value

The portrait can support:

- Blender fluency;
- topology awareness;
- material setup;
- grooming;
- lighting and rendering;
- ability to follow a high-end character pipeline;
- visual quality standards.

It is less relevant for:

- Unity WebGL;
- technical visualization;
- CAD optimization;
- simulation;
- tools development.

### 6.3 Recommended framing

Recommended title:

> Hyperrealistic Character Pipeline Study — Blender

Not recommended:

> Senior Character Artist Portfolio Piece

### 6.4 ArtStation structure

Recommended ArtStation page:

1. Final render.
2. Clay render.
3. Wireframe / topology.
4. UV layout.
5. Material breakdown.
6. Grooming breakdown.
7. Lighting setup.
8. Reference / course context.
9. What was learned.
10. Limitations.

### 6.5 Disclosure

Because the work followed a course, the page should say:

> Character pipeline study completed in Blender following CG Cookie HUMAN training material. Final execution, scene setup, grooming/material work and presentation prepared independently as a portfolio learning piece.

This avoids implying it was a fully original character art commission or production asset.

### 6.6 Role relevance

| Role family | Relevance |
|---|---:|
| Unity Technical Artist | Medium |
| Real-Time 3D Developer | Low / medium |
| Technical Visualization | Low |
| 3D Artist / Generalist | High |
| Game Technical Artist | Medium |
| Tools / Pipeline | Low |

### 6.7 Recommendation

Include it in ArtStation and portfolio as a secondary piece after TwinSight.

It should not be the first portfolio item.

---

## 7. deus-ex-machina

### 7.1 Current status

Public project. Exact current quality must be audited before use.

### 7.2 Potential value

Depending on content, it may show:

- older game development work;
- GameMaker/GML experience;
- design iteration;
- early programming interest;
- narrative/gameplay prototyping.

### 7.3 Risk

If immature or messy, it may signal:

- outdated tools;
- low polish;
- unfinished habits;
- lack of focus.

### 7.4 Recommendation

Do not pin by default.

Use only if:

- it has screenshots or gameplay video;
- it has a clean README;
- it supports a game-dev application;
- it is framed as “early independent game prototype,” not as a flagship technical project.

---

## 8. skills-introduction-to-github

### 8.1 Current status

Public training / tutorial repository.

### 8.2 Recommendation

Do not highlight. Do not pin.

It can remain public, but it should not be part of the recruiter-facing portfolio.

Reason:

- it does not demonstrate differentiated capability;
- it may make the GitHub profile look beginner-level if pinned;
- it consumes attention without adding evidence.

---

## 9. Other lower-priority repositories

Named repositories include:

- Chocolateria;
- Bosque de Sombras Manuales;
- alexander-fullstack-portfolio;
- alexander-3d-portfolio;
- delarge95.github.io;
- 3DWeb;
- job-search-strategy;
- ludex_framework;
- WoodSleiman;
- WebGL_tesis.

These require a repository-level audit before publication decisions.

### 9.1 Audit criteria

Each repository should be scored against:

| Criterion | Pass condition |
|---|---|
| Relevance | Supports target role |
| Completeness | Has functional output |
| README | Explains purpose and setup |
| Visual proof | Screenshots/video/demo |
| Code hygiene | No broken or private content |
| Recruiter value | Understandable in 60 seconds |
| Dilution risk | Does not confuse positioning |

### 9.2 Default decisions

| Repository type | Default action |
|---|---|
| Old portfolio repos | Merge/replace with current portfolio |
| Client web projects | Show only if professional and permission-safe |
| Job-search repo | Keep private |
| Manual/document repos | Omit unless relevant |
| Duplicate thesis repos | Consolidate or archive |
| Experimental prototypes | Keep private unless polished |

### 9.3 GitHub visibility rule

Public does not mean featured.

Pinned repositories should be fewer and stronger. A recruiter should see a coherent technical profile within the first 30–60 seconds.

---

## 10. Recommended GitHub pinned repositories

### 10.1 Immediate target state

| Pin order | Repository | Status |
|---:|---|---|
| 1 | WebGL-Thesis-Proposal / TwinSight X500 | Mandatory |
| 2 | ARA Framework | Conditional after cleanup |
| 3 | Portfolio site | Mandatory once active |
| 4 | Blender portrait breakdown repo or page | Optional |
| 5 | ai-news-aggregator | Conditional |
| 6 | one small polished tool/demo | Optional |

### 10.2 Repos to avoid pinning

- skills-introduction-to-github;
- incomplete FitApp;
- old duplicated thesis repos;
- unmaintained tests;
- unclear client projects;
- any repo with missing README or broken setup.

---

## 11. Secondary project case-study formats

### 11.1 ARA Framework case study

Recommended structure:

1. Problem.
2. System goal.
3. Workflow architecture.
4. Agent roles.
5. Tech stack.
6. Input/output example.
7. Integration challenges.
8. Human validation layer.
9. Limitations.
10. Future work.

Key message:

> ARA demonstrates automation and systems design, not production AI authority.

### 11.2 ai-news-aggregator case study

Recommended structure:

1. Problem.
2. Data ingestion.
3. Backend architecture.
4. Frontend UI.
5. Analysis pipeline.
6. Storage model.
7. Deployment status.
8. Limitations.
9. Future work.

Key message:

> Shows full-stack and AI-product experimentation; secondary to real-time 3D.

### 11.3 FitApp-Free case study

Recommended structure if ever public:

1. Problem.
2. Exercise progression model.
3. Routine logic.
4. Tracking architecture.
5. UI flow.
6. Data model.
7. Limitations.
8. Future work.

Key message:

> Shows product thinking, not target-role proof.

### 11.4 Blender portrait case study

Recommended structure:

1. Final result.
2. Goal.
3. Reference/training context.
4. Modeling/topology.
5. Materials.
6. Grooming.
7. Lighting/rendering.
8. Lessons learned.
9. Limitations.

Key message:

> Demonstrates 3D production literacy and visual standards.

---

## 12. AI-assisted development disclosure across projects

### 12.1 General rule

Do not hide AI assistance if directly asked. Do not over-emphasize it unnecessarily.

The safest formula:

> I used AI assistance as part of the development workflow for ideation, code scaffolding, debugging and documentation support. I was responsible for architecture, integration, testing, technical decisions and final implementation.

### 12.2 Project-specific disclosure

| Project | Disclosure level |
|---|---|
| TwinSight | Moderate if asked |
| ARA | Explicit; AI is part of the system |
| ai-news-aggregator | Moderate |
| FitApp | Low unless asked |
| Blender portrait | Mention course context, not AI unless used |

### 12.3 Claims to avoid

Avoid:

- “I coded everything manually” if AI was involved;
- “AI built it” because that undermines ownership;
- “fully autonomous” unless evaluated;
- “production AI system” unless deployed and monitored;
- “research-grade” unless validated.

---

## 13. Project-to-role mapping

| Project | Best-supported roles | Weak roles |
|---|---|---|
| TwinSight X500 | Real-Time 3D, Unity WebGL, Technical Visualization | AI Tools |
| ARA Framework | Python Automation, Tools, LLM Apps | Unity WebGL |
| ai-news-aggregator | Full-stack, AI Apps | Technical Art |
| FitApp-Free | Product / Full-stack | Technical Visualization |
| Blender portrait | 3D Generalist, Technical Art support | AI / Full-stack |
| deus-ex-machina | Game prototype | Technical Visualization |

---

## 14. Short-term project time allocation

For the 0–6 month job-search sprint:

| Area | Recommended effort |
|---|---:|
| TwinSight case study | 45% |
| Portfolio site | 20% |
| LinkedIn/CV/GitHub cleanup | 15% |
| ARA cleanup | 10% |
| Blender portrait presentation | 5% |
| Other projects | 5% |

This allocation is intentionally strict. The main risk is over-dispersing into too many unfinished projects.

---

## 15. Decision gates

### Gate 1 — Before public release

A project can be public-facing only if it has:

- clear purpose;
- clean README;
- screenshots or video;
- no secrets;
- no broken critical path;
- accurate status label;
- no exaggerated claims.

### Gate 2 — Before pinning

A project can be pinned only if it supports the target role within 60 seconds.

### Gate 3 — Before including in CV

A project can enter the CV only if it supports the specific job target.

Examples:

- Unity Technical Artist CV: TwinSight + Blender portrait + ARA lightly.
- Python Automation CV: ARA + ai-news-aggregator + TwinSight lightly.
- Full-stack CV: ai-news-aggregator + FitApp + ARA.
- Technical Visualization CV: TwinSight first; ARA only if relevant.

---

## 16. Recommended final project portfolio order

Recommended public order:

1. TwinSight X500 — flagship case study.
2. ARA Framework — tools/automation case study after cleanup.
3. Hyperrealistic Blender Portrait — technical 3D breakdown.
4. ai-news-aggregator — optional technical appendix.
5. FitApp-Free — omit unless targeting product/full-stack.
6. Older repos — archive or omit unless cleaned.

---

## 17. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Profile dilution | Keep TwinSight first |
| Overclaiming AI skill | Label ARA as prototype |
| Broken public repos | Audit before pinning |
| Too many unfinished projects | Limit active cleanup to 2 projects |
| Course-project ambiguity | Disclose course context |
| Recruiter confusion | Use role-specific portfolio variants |

---

## 18. Immediate action checklist

### 18.1 ARA

- [ ] Confirm current runnable state.
- [ ] Remove secrets.
- [ ] Add `.env.example`.
- [ ] Add architecture diagram.
- [ ] Add example input/output.
- [ ] Add limitations.
- [ ] Add 60-second demo.
- [ ] Decide public/private.

### 18.2 ai-news-aggregator

- [ ] Verify whether it still runs.
- [ ] Fix minimum broken dependencies.
- [ ] Capture screenshots.
- [ ] Decide if worth publishing.
- [ ] Keep private if not demonstrable.

### 18.3 FitApp-Free

- [ ] Do not prioritize now.
- [ ] Keep private.
- [ ] Revisit only for full-stack/product route.

### 18.4 Blender portrait

- [ ] Export final render.
- [ ] Export clay render.
- [ ] Export topology screenshots.
- [ ] Export UV/material/groom breakdown.
- [ ] Publish as ArtStation technical study.

### 18.5 GitHub

- [ ] Pin TwinSight first.
- [ ] Remove beginner/tutorial repos from pinned area.
- [ ] Add README to every visible repo.
- [ ] Archive duplicate thesis/portfolio repos.
- [ ] Keep job-search strategy private.

---

## 19. Final decision

ARA should be used as a secondary differentiator, not as the main identity. It strengthens a tools/pipeline/automation narrative but should not compete with TwinSight as the flagship.

ai-news-aggregator and FitApp-Free should not receive major attention during the initial job-search sprint unless the strategy pivots toward full-stack or AI application roles.

The Blender portrait is worth presenting, but only as a technical 3D breakdown and clearly below TwinSight.

The portfolio must communicate one core message:

> Alexander builds interactive real-time 3D technical systems, and also has supporting automation/tooling and 3D production skills.

