# 07 — Portfolio Strategy and Project Architecture

## 0. Purpose of this section

This file defines the portfolio architecture for Alexander Woodcock Salomón’s international job-search strategy.

It does **not** write the final portfolio copy yet. It defines what the portfolio must prove, which projects should be included, which projects should be downplayed, what evidence each project must show, and how the portfolio should be structured for the target role families defined in `02_market_role_fit_and_positioning.md`.

The core principle is simple:

> The portfolio must make TwinSight X500 look like a credible professional technical visualization project, not just an academic thesis or a personal experiment.

The portfolio must be optimized for:

- remote international hiring from Colombia;
- Unity / Real-Time 3D / Interactive 3D roles;
- technical visualization, digital twin, simulation and CAD-to-realtime roles;
- Unity Technical Artist roles focused on optimization, runtime systems and tool-adjacent workflows;
- secondary Python / automation / AI tooling credibility without diluting the main profile.

---

## 1. Current source-of-truth constraints

### 1.1 Correct current state

| Area | Portfolio implication |
|---|---|
| Thesis | Completed; pending defense. Do not describe it as early-stage or in progress. |
| Flagship asset | TwinSight X500. This must dominate the portfolio. |
| Main role axis | Real-Time 3D / Unity / Technical Visualization / WebGL. |
| Secondary axis | Python / AI-assisted tools / research automation. |
| Current risk | Portfolio fragmentation and over-positioning. |
| Short-term goal | Be employable within 3–6 months. |
| Medium-term goal | Build stronger international leverage in 12–24 months. |
| EU status | No current EU work authorization. Future Portuguese passport expected in ~2 years. |

### 1.2 Claims that must not appear

The portfolio must avoid the following claims unless future evidence supports them:

- “Senior Technical Artist” as a primary title.
- “Digital Twin Engineer” as if there is formal industry experience.
- “AI Engineer” or “Machine Learning Engineer.”
- “Full-stack Developer” as the main identity.
- “EU work authorized” before Portuguese passport or German residence authorization is actually obtained.
- “Certified” for courses that do not issue formal certificates.
- “Production-ready enterprise AI system” for ARA.
- “Commercial shipped Unity product” for TwinSight unless deployed publicly and documented as such.

---

## 2. Portfolio objective by hiring audience

Different audiences will inspect the same portfolio differently. The architecture must allow each audience to find the relevant proof quickly.

| Audience | What they need to verify |
|---|---|
| Recruiter | Role fit, technologies, English clarity, availability, portfolio quality. |
| Unity lead | Systems thinking, C# structure, Unity implementation, debugging maturity. |
| Technical artist lead | Optimization, shader/material workflow, asset pipeline, visual modes. |
| Simulation / digital twin company | CAD-to-realtime, technical UI, spatial explanation, technical documentation. |
| Web / interactive 3D company | WebGL deployment, performance, UI, browser constraints. |
| AI tooling startup | Python, LangGraph, automation logic, system design, documentation discipline. |
| Game studio | Unity fluency, technical art foundation, visual polish, shader/FX potential. |

The portfolio must not try to satisfy all audiences equally on the first screen. It must lead with the strongest overlap:

> Real-time 3D technical visualization using Unity, WebGL, CAD optimization and interactive systems.

---

## 3. Recommended portfolio positioning

### 3.1 Primary portfolio title

Recommended title:

```text
Real-Time 3D Developer / Unity Technical Artist
Interactive Technical Visualization · CAD-to-Realtime · Unity WebGL
```

### 3.2 Secondary subtitle

```text
I build interactive 3D systems that transform complex technical products into usable real-time visual experiences.
```

### 3.3 Alternative variants by target role

| Target role family | Portfolio title variant |
|---|---|
| Interactive 3D | Real-Time 3D Developer focused on interactive technical visualization. |
| Unity WebGL | Unity WebGL Developer building optimized browser-based 3D applications. |
| Technical Visualization | Technical Visualization Developer specializing in CAD-to-realtime workflows. |
| Unity Technical Artist | Unity Technical Artist focused on optimization, shaders, UI and runtime interaction systems. |
| Tools / AI secondary | Technical Artist with Python automation and AI-assisted production tooling. |

### 3.4 Positioning rule

Use **one primary identity** and **one secondary modifier**.

Good:

```text
Real-Time 3D Developer / Unity Technical Artist
```

Too diluted:

```text
Technical Artist / Unity Developer / AI Engineer / Full-stack Developer / 3D Artist / XR Developer
```

---

## 4. Project hierarchy

### 4.1 Project priority ranking

| Priority | Project | Portfolio role |
|---:|---|---|
| 1 | TwinSight X500 | Flagship case study. |
| 2 | ARA Framework | Secondary technical tooling case study. |
| 3 | Hyperrealistic Blender portrait | Visual/asset pipeline proof. |
| 4 | ai-news-aggregator | Optional secondary software proof if functional. |
| 5 | FitApp-Free | Mostly omit unless product/system logic is needed. |
| 6 | Older/lower-quality repos | Hide, archive, or omit from recruiter-facing portfolio. |

### 4.2 What each project proves

| Project | Strong proof | Weak proof |
|---|---|---|
| TwinSight X500 | Unity, C#, WebGL, CAD-to-realtime, technical UI, optimization, validation. | Commercial shipping, team production experience. |
| ARA Framework | Python, LangGraph, automation, multi-agent logic, research tooling. | Production AI engineering, ML research. |
| Blender portrait | Blender, topology, materials, grooming, lighting, persistence. | Runtime optimization unless documented. |
| ai-news-aggregator | FastAPI, React, PostgreSQL, Redis, full-stack logic. | Main technical art fit. |
| FitApp-Free | Product logic, systems thinking, domain modeling. | Unity / 3D / technical art relevance. |

### 4.3 Project inclusion decision

| Project | Include in MVP? | Include in full portfolio? | Condition |
|---|---:|---:|---|
| TwinSight X500 | Yes | Yes | Must have demo video, screenshots, case study and technical breakdown. |
| ARA Framework | No / optional | Yes | Only if cleaned, documented and presented as prototype. |
| Blender portrait | Optional | Yes | Must be presented as pipeline breakdown, not just render. |
| ai-news-aggregator | No | Maybe | Only if functional and visually presentable. |
| FitApp-Free | No | Maybe | Only if used as product/system-design proof. |
| Old GitHub tutorials | No | No | Hide or leave unfeatured. |

---

## 5. Portfolio architecture

### 5.1 MVP portfolio architecture

The MVP portfolio should be small, polished and role-aligned. It does not need to contain every project.

Recommended MVP structure:

```text
Home
├── Hero / Positioning
├── Featured Project: TwinSight X500
├── Technical Breakdown Preview
├── Skills / Toolchain
├── Secondary Proof
│   ├── ARA Framework preview OR Blender portrait preview
├── Contact / Links
│   ├── GitHub
│   ├── LinkedIn
│   ├── ArtStation
│   ├── Email
```

### 5.2 Full portfolio architecture

The full version can expand after applications start.

```text
Home
├── About / Positioning
├── Case Studies
│   ├── TwinSight X500
│   ├── ARA Framework
│   ├── Blender Portrait Pipeline
│   ├── Optional: AI News Aggregator
├── Technical Breakdowns
│   ├── CAD-to-Realtime Pipeline
│   ├── Unity WebGL Optimization
│   ├── Visual Modes / Shader Systems
│   ├── UI Toolkit / Interaction Systems
├── Projects Archive
├── Resume / CV
├── Contact
```

### 5.3 Recommended first-release format

Do not wait for a perfect custom website.

Priority order:

1. One public TwinSight case study page.
2. One 60–120 second demo video.
3. One GitHub README recruiter version.
4. One ArtStation or Behance-style technical breakdown.
5. Personal site only after those assets exist.

---

## 6. TwinSight X500 portfolio architecture

TwinSight is the core proof asset. Its case study must be treated as a professional project.

### 6.1 Required sections

```text
TwinSight X500 Case Study
├── 1. One-line summary
├── 2. Problem
├── 3. Role and contribution
├── 4. Technical constraints
├── 5. CAD-to-realtime pipeline
├── 6. Unity implementation
├── 7. Interaction systems
├── 8. Visual modes
├── 9. WebGL / performance considerations
├── 10. Evaluation and metrics
├── 11. AI-assisted development disclosure
├── 12. Results
├── 13. Limitations
├── 14. What I would improve next
```

### 6.2 What TwinSight must prove

| Proof target | Evidence needed |
|---|---|
| Unity competence | Screenshots of scene, systems, UI, inspector organization. |
| C# implementation | Code snippets, architecture diagram, interaction flow. |
| CAD optimization | Before/after triangle counts, retopology examples. |
| WebGL readiness | Build notes, browser/mobile constraints, performance decisions. |
| Technical art | Materials, visual modes, X-Ray, wireframe, ghosted, blueprint. |
| Product thinking | User tasks, usability testing, SUS/NASA-TLX summary. |
| Communication | Clear diagrams and concise technical explanations. |

### 6.3 TwinSight must not overclaim

Avoid:

- “Digital twin platform” unless framed carefully as a prototype for technical visualization.
- “Thermal simulation” if thermal mode is qualitative, not physics-based FEA.
- “Production-ready industrial system” unless validated as such.
- “Fully original CAD model” if manufacturer CAD or base geometry was used.
- “Built without assistance” if AI was materially used in programming.

Better wording:

```text
Unity WebGL technical visualization prototype for drone assembly inspection, built as a completed thesis project using CAD-to-realtime optimization, interactive systems, technical UI and usability evaluation.
```

---

## 7. ARA Framework portfolio architecture

ARA is useful, but it must not dilute the main identity.

### 7.1 Recommended positioning

```text
Secondary project: Python-based research automation prototype using LangGraph-style multi-agent orchestration.
```

### 7.2 Include only if the following are ready

| Requirement | Status needed before publishing |
|---|---|
| README | Clear, honest and runnable or semi-runnable. |
| Demo | Short video or terminal walkthrough. |
| Architecture | Agent flow diagram. |
| Scope | Explicitly marked as prototype. |
| Claims | No enterprise-grade AI claims. |
| Security | No API keys, secrets, private prompts or unstable dependencies exposed. |

### 7.3 What ARA can prove

- Python architecture.
- Workflow automation.
- Research tooling.
- LLM orchestration literacy.
- Technical documentation.
- Systems thinking.

### 7.4 What ARA does not prove yet

- ML engineering.
- Model training.
- Production AI deployment.
- Scalable SaaS product.
- Enterprise reliability.

---

## 8. Blender portrait portfolio architecture

The Blender portrait should be included only if presented as a technical breakdown.

### 8.1 Correct framing

Good:

```text
High-fidelity Blender character pipeline study focused on topology, materials, grooming, lighting and render presentation.
```

Weak:

```text
Portrait render.
```

### 8.2 Required breakdown assets

| Asset | Purpose |
|---|---|
| Final render | Visual quality. |
| Clay render | Form and modeling. |
| Topology screenshots | Technical mesh quality. |
| UV layout | Asset pipeline proof. |
| Material node screenshots | Shader/material understanding. |
| Grooming breakdown | Character detail. |
| Lighting setup | Presentation skill. |
| Before/after stages | Process discipline. |

### 8.3 Role relevance

| Role | Relevance |
|---|---|
| Unity Technical Artist | Medium if connected to optimization/materials. |
| Real-Time 3D Developer | Low/medium. |
| 3D Artist | High, but this is not the primary target. |
| Technical Visualization | Low. |
| Game Technical Artist | Medium if adapted to real-time constraints. |

---

## 9. ai-news-aggregator and FitApp-Free

### 9.1 ai-news-aggregator

This project can support a secondary software/AI tooling narrative only if it is functional.

Include only if:

- there is a working demo;
- the README explains the architecture;
- the UI is presentable;
- the project does not look abandoned;
- it supports Python/FastAPI/React/PostgreSQL evidence.

Do not pin it above TwinSight or ARA.

### 9.2 FitApp-Free

FitApp-Free is probably not relevant to the main portfolio.

Include only if used to show:

- product logic;
- progression systems;
- routine planning;
- user-state modeling;
- database design.

Otherwise omit from recruiter-facing materials.

---

## 10. GitHub portfolio architecture

GitHub must support the portfolio, not expose disorder.

### 10.1 Pinned repository strategy

Recommended pinned repos:

| Priority | Repo | Action |
|---:|---|---|
| 1 | WebGL-Thesis-Proposal / TwinSight | Clean README, add images, video, metrics. |
| 2 | ARA Framework | Publish only after cleanup. |
| 3 | ai-news-aggregator | Publish only if functional. |
| 4 | Portfolio site | Publish once stable. |
| 5 | Small Unity/WebGL demo | Create if needed. |
| 6 | Blender breakdown repo/page | Optional. |

### 10.2 Repos to avoid featuring

- `skills-introduction-to-github`
- unfinished tutorials;
- old experimental repos without README;
- abandoned client projects;
- incomplete portfolio attempts;
- anything with secrets, poor commit hygiene or broken setup.

### 10.3 README standards

Every featured repo needs:

```text
- Project title
- One-line summary
- Role and contribution
- Tech stack
- Features
- Screenshots or GIFs
- Demo link or video
- Setup instructions if public
- Architecture notes
- Limitations
- Status
```

---

## 11. ArtStation / Behance / visual platform strategy

ArtStation is useful for visual credibility, but it must not reposition the profile as a pure 3D artist.

### 11.1 Recommended ArtStation projects

| Project | Format |
|---|---|
| TwinSight X500 | Technical breakdown. |
| Blender portrait | Character pipeline breakdown. |
| Future Rebelway/Houdini project | FX breakdown if completed. |

### 11.2 ArtStation structure for TwinSight

```text
Title: TwinSight X500 — Unity WebGL Technical Visualization Prototype
Images:
1. Final interactive viewer screenshot
2. Exploded view
3. X-Ray / ghosted mode
4. Clipping / cross-section
5. CAD-to-realtime before/after
6. UI interaction screens
7. Optimization metrics graphic
8. Architecture diagram
Description:
- Problem
- Role
- Pipeline
- Technical systems
- Metrics
- Limitations
```

### 11.3 Avoid

- posting only beauty renders;
- no explanation;
- unclear role contribution;
- mixing unrelated fan art or unfinished sketches in the main profile;
- presenting course outputs as original production work without context.

---

## 12. Demo video strategy

### 12.1 MVP video requirement

A portfolio without video is weaker for interactive 3D roles. TwinSight needs a short demo.

Recommended duration:

```text
60–120 seconds
```

### 12.2 Video structure

```text
0–10s: Problem and final result
10–25s: Interactive selection and component inspection
25–40s: Exploded view
40–55s: Cross-section / clipping
55–70s: Visual modes
70–90s: CAD optimization and WebGL constraints
90–110s: Validation metrics and outcome
110–120s: Tech stack and links
```

### 12.3 Video rules

- Show the application immediately.
- Avoid long intros.
- Use captions.
- Use clean screen capture.
- Include before/after CAD optimization if visually understandable.
- Include mobile/browser footage if WebGL/mobile-first is claimed.
- Do not overstate thermal or digital twin claims.

---

## 13. Screenshot and asset shot list

### 13.1 TwinSight screenshots

| Screenshot | Purpose |
|---|---|
| Hero final viewer | Immediate visual proof. |
| Component selection | Interaction proof. |
| Exploded view | Spatial relationship proof. |
| Cross-section clipping | Technical visualization proof. |
| X-Ray / ghost mode | Technical art proof. |
| Blueprint / wireframe | Visual mode proof. |
| UI panels | UX and UI Toolkit proof. |
| Before/after mesh optimization | CAD-to-realtime proof. |
| Mobile/browser view | WebGL deployment proof. |
| Evaluation chart | Academic validation proof. |

### 13.2 ARA screenshots

| Screenshot | Purpose |
|---|---|
| Architecture diagram | Multi-agent system proof. |
| Terminal/demo output | Functionality proof. |
| Generated report example | End-to-end value. |
| Config/checkpointing | Engineering structure. |

### 13.3 Blender portrait screenshots

| Screenshot | Purpose |
|---|---|
| Final render | Visual quality. |
| Clay render | Form. |
| Topology | Technical modeling. |
| UVs | Production pipeline. |
| Materials | Shading. |
| Grooming | Detail process. |

---

## 14. Portfolio MVP checklist

The MVP is ready to send to recruiters only when the following exist:

```text
[ ] TwinSight 60–120s demo video
[ ] TwinSight case study page
[ ] TwinSight README recruiter version
[ ] 8–12 strong screenshots
[ ] clear role/contribution statement
[ ] metrics table: triangles, SUS, NASA-TLX, participant count
[ ] AI-assisted development disclosure wording
[ ] GitHub profile cleaned
[ ] LinkedIn featured section updated
[ ] ArtStation or visual breakdown published
[ ] one-page CV aligned with portfolio
```

Do not wait for:

- full custom website perfection;
- all secondary projects polished;
- all courses finished;
- perfect visual identity;
- a complete demo reel with many projects.

---

## 15. Portfolio quality bar

### 15.1 Minimum professional standard

A recruiter or lead should understand within 30 seconds:

- who Alexander is;
- what role he targets;
- what TwinSight is;
- what technologies were used;
- what he personally contributed;
- why the project is relevant to the job;
- where to see more.

### 15.2 Strong professional standard

A technical lead should understand within 3–5 minutes:

- the core system architecture;
- CAD-to-realtime decisions;
- Unity/WebGL constraints;
- interaction flow;
- performance/optimization logic;
- validation method;
- limitations;
- next improvements.

---

## 16. AI-assisted development disclosure

### 16.1 Disclosure principle

Do not hide AI use if asked. Do not foreground it unnecessarily in the first sentence.

### 16.2 Recommended wording

```text
I used AI tools as coding and documentation assistants during implementation, while retaining responsibility for architecture decisions, integration, debugging, testing, Unity implementation, technical judgment and final delivery.
```

### 16.3 Avoid

```text
AI built the project.
```

```text
I coded everything manually without assistance.
```

```text
Vibe-coded prototype.
```

### 16.4 Where to include disclosure

| Location | Include? |
|---|---:|
| CV bullet | Usually no. |
| Portfolio case study | Yes, in process/limitations section. |
| Interview | Yes, if asked. |
| GitHub README | Optional. |
| LinkedIn headline | No. |

---

## 17. Portfolio risks and mitigations

| Risk | Mitigation |
|---|---|
| Looks academic, not professional | Use case-study structure, demo video and technical metrics. |
| Too many identities | Lead with Real-Time 3D / Unity Technical Visualization. |
| ARA dilutes portfolio | Keep it secondary and clearly separated. |
| Blender portrait shifts profile to pure artist | Present it as technical pipeline evidence. |
| GitHub looks messy | Pin only relevant repos and clean READMEs. |
| AI use reduces credibility | Explain AI as assistant, not author. |
| Manufacturer/CAD asset ambiguity | State source and transformation clearly. |
| WebGL performance unproven | Include performance notes and device/browser constraints. |
| Thermal mode overclaim | Label as qualitative visual mode unless physically simulated. |

---

## 18. Application-stage portfolio variants

### 18.1 Variant A — Technical Visualization / Digital Twin

Lead with:

- TwinSight X500;
- CAD-to-realtime pipeline;
- assembly inspection problem;
- clipping, exploded view and component understanding;
- usability metrics.

Downplay:

- Blender portrait;
- game art;
- FitApp.

### 18.2 Variant B — Unity WebGL / Interactive 3D

Lead with:

- WebGL deployment;
- interaction systems;
- UI Toolkit;
- browser constraints;
- optimization.

Downplay:

- academic evaluation unless relevant;
- AI tooling.

### 18.3 Variant C — Unity Technical Artist

Lead with:

- optimization;
- visual modes;
- shaders/materials;
- asset pipeline;
- Blender-to-Unity workflow.

Include:

- Blender portrait pipeline if polished.

### 18.4 Variant D — Tools / Python Automation

Lead with:

- ARA Framework;
- Python automation;
- workflow orchestration;
- documentation generation.

Still mention TwinSight as 3D systems proof.

---

## 19. Recommended build order

| Order | Task | Reason |
|---:|---|---|
| 1 | TwinSight demo video | Highest proof density. |
| 2 | TwinSight case study | Core portfolio asset. |
| 3 | GitHub README cleanup | Recruiter and technical lead support. |
| 4 | LinkedIn Featured update | Distribution channel. |
| 5 | ArtStation technical breakdown | Visual/technical credibility. |
| 6 | ARA cleanup | Secondary route. |
| 7 | Blender portrait breakdown | Supplemental technical art proof. |
| 8 | Custom portfolio site polish | Useful, but not first bottleneck. |

---

## 20. Definition of done

This section is considered implemented when the following exist:

```text
[ ] TwinSight has one polished case study.
[ ] TwinSight has one short demo video.
[ ] TwinSight has a recruiter-facing README.
[ ] GitHub pinned repos are curated.
[ ] LinkedIn Featured section points to TwinSight first.
[ ] ArtStation contains at least one technical breakdown.
[ ] Secondary projects are clearly labeled as secondary.
[ ] No outdated “thesis in progress” language remains.
[ ] No false certification or EU authorization claim exists.
```

---

## 21. Open questions before implementation

These questions must be resolved during the next sections:

1. Is there a public WebGL build of TwinSight ready to share?
2. Are all manufacturer/CAD assets legally safe to show publicly?
3. Which screenshots are already available?
4. Is there a current GitHub branch that should become the public recruiter version?
5. Should the portfolio be hosted on GitHub Pages, a custom domain, Webflow, Notion, or another static site?
6. Can ARA be safely made public without exposing secrets or unstable code?
7. Does the Blender portrait have enough breakdown images to justify inclusion?
8. Are ai-news-aggregator and FitApp-Free functional enough to include, or should they remain private?

---

## 22. Final portfolio direction

The portfolio should not be a broad archive of everything Alexander has touched.

It should be a targeted proof system built around one main claim:

> Alexander can design, optimize and implement interactive real-time 3D technical visualization systems using Unity, WebGL, Blender and CAD-to-realtime workflows.

Everything else is secondary.

