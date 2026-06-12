# 29_github_profiles_benchmark.md

## 0. Module status

```text
Module: 29_github_profiles_benchmark
Task: A3_github_profiles_benchmark
Generated: 2026-06-11
Project: Laboral / Alexander Woodcock Salomón
Purpose: Convert GitHub benchmark results into actionable updates for Alexander's public GitHub surface.
```

This module does **not** reopen the base labor-market strategy.

Target positioning remains:

```text
Real-Time 3D Developer / Unity Technical Artist
focused on Unity WebGL, CAD-to-realtime optimization, technical visualization, and tooling.
```

---

## 1. Quality audit of A3

### 1.1 Result quality

A3 is usable.

It collected **21 GitHub examples**, which satisfies the requested range of **20–35** profiles/repositories.

The dataset is strongest for:

```text
Unity tooling
Unity technical art utilities
Unity WebGL deployment
XR samples
robotics / digital twin visualization
build automation
LLM-assisted Unity tooling
```

The dataset is weaker for:

```text
GitHub profile READMEs
Three.js / WebGPU portfolios
general-purpose WebGL visualization
GitHub Pages portfolio examples
```

This is acceptable because Alexander’s immediate public proof should be Unity/WebGL/tooling-led, not generic WebGL-led.

---

## 2. Source-quality classification

| Class | Count | Usefulness |
|---|---:|---|
| Strong | 14 | Directly adaptable |
| Medium | 5 | Partial pattern |
| Weak | 2 | Limited pattern |

### 2.1 Strong examples

| Label | Why strong |
|---|---|
| RAZLUTA-Profile | Strong pinned tooling surface |
| SPLATVFX | Clear experimental graphics README |
| UNITY-BUILDER | Strong tooling docs |
| REACT-UNITY-WEBGL | Strong WebGL package docs |
| UNITY-EDITOR-TOOLBOX | Deep editor-tool docs |
| UNITY-MCP | Strong AI/tooling positioning |
| PY-BUILD-AUTOMATION | Clear Python automation docs |
| UNITY-DATA-TOOLS | Strong analysis-tool README |
| ROS-TCP-CONNECTOR | Strong robotics integration docs |
| XR-INTERACTION-EXAMPLES | Strong XR sample structure |
| TEXTURE-PACKER | Strong technical-art tool docs |
| PACKAGE-MAKER | Strong package-tool docs |
| LIGHTS-LOD | Strong optimization-tool docs |
| ICON-GENERATOR | Strong production-tool docs |

### 2.2 Medium examples

| Label | Limitation |
|---|---|
| VFXGRAPH-TESTBED | Good media, sparse explanation |
| REACHY2-DT | Relevant, but hardware-specific |
| PDT-UNITY | Relevant, academic/research-heavy |
| RUNTIME-UNITY-EDITOR | Strong tool, modding-specific |
| LIGHTS-AUDIT | Useful, narrower scope |

### 2.3 Weak examples

| Label | Limitation |
|---|---|
| VR-PROJECT-TEMPLATE | Template-heavy |
| VR-GAME-JAM-TEMPLATE | README too sparse |

---

## 3. Corrected source inventory

Some A3 rows contained citation artifacts or uncertain license wording. This inventory normalizes the usable sources.

| Label | URL | Type | Role relevance | Quality |
|---|---|---|---|---|
| RAZLUTA-Profile | https://github.com/razluta | Profile | Unity tools / technical art | Strong |
| VFXGRAPH-TESTBED | https://github.com/keijiro/VfxGraphTestbed | Repo | Unity VFX | Medium |
| SPLATVFX | https://github.com/keijiro/SplatVFX | Repo | VFX / splats | Strong |
| UNITY-BUILDER | https://github.com/game-ci/unity-builder | Repo | Build pipeline | Strong |
| REACT-UNITY-WEBGL | https://github.com/jeffreylanters/react-unity-webgl | Repo | Unity WebGL | Strong |
| REACHY2-DT | https://github.com/pollen-robotics/Reachy2-UnityDigitalTwin | Repo | XR / digital twin | Medium |
| PDT-UNITY | https://github.com/programming-digital-twins/LabBenchStudios-PDT-Unity | Repo | Digital twin | Medium |
| RUNTIME-UNITY-EDITOR | https://github.com/ManlyMarco/RuntimeUnityEditor | Repo | Runtime tooling | Medium |
| UNITY-EDITOR-TOOLBOX | https://github.com/arimger/Unity-Editor-Toolbox | Repo | Editor tooling | Strong |
| UNITY-MCP | https://github.com/CoplayDev/unity-mcp | Repo | AI + Unity tooling | Strong |
| PY-BUILD-AUTOMATION | https://github.com/angrysharkstudio/Unity-Python-Build-Automation | Repo | Python build automation | Strong |
| UNITY-DATA-TOOLS | https://github.com/Unity-Technologies/UnityDataTools | Repo | Build analysis | Strong |
| ROS-TCP-CONNECTOR | https://github.com/Unity-Technologies/ROS-TCP-Connector | Repo | Robotics visualization | Strong |
| XR-INTERACTION-EXAMPLES | https://github.com/Unity-Technologies/XR-Interaction-Toolkit-Examples | Repo | XR samples | Strong |
| VR-PROJECT-TEMPLATE | https://github.com/SamuelAsherRivello/unity-project-template-vr | Repo | VR template | Weak |
| VR-GAME-JAM-TEMPLATE | https://github.com/ValemVR/VR-Game-Jam-Template | Repo | VR template | Weak |
| TEXTURE-PACKER | https://github.com/razluta/UnityTextureRgbPacker | Repo | Technical art utility | Strong |
| PACKAGE-MAKER | https://github.com/razluta/UnityPackageMaker | Repo | Package tooling | Strong |
| LIGHTS-LOD | https://github.com/razluta/UnityLightsLodSystem | Repo | Lighting optimization | Strong |
| LIGHTS-AUDIT | https://github.com/razluta/UnityLightsAuditTool | Repo | Lighting audit | Medium |
| ICON-GENERATOR | https://github.com/razluta/UnityIconGenerationFromModels | Repo | Asset pipeline utility | Strong |

---

## 4. Benchmark patterns

### 4.1 Strong GitHub surfaces show value immediately

The strongest repositories do not start with long academic explanations.

They show:

```text
title
one-line value proposition
badges
hero image / GIF
live demo or docs link
quick-start path
```

For Alexander, the top of the README should answer:

```text
What is this?
What does it demonstrate?
Can I open it?
Can I see screenshots?
Can I understand the technical stack?
```

---

### 4.2 Strong READMEs separate user-facing value from implementation

Good structure:

```text
What it does
Live demo
Key features
Screenshots / GIFs
Technical stack
Architecture
Setup
Validation / metrics
Scope limits
License
```

Weak structure:

```text
long thesis summary
unfiltered internal notes
unclear scope
no media
no demo path
no license boundary
```

---

### 4.3 Strong technical-art tools show before/after or workflow

For technical art and tooling, the benchmark consistently favors:

```text
GIF of tool in use
input/output example
installation path
manual usage
API usage
limitations
license
```

Alexander should use this pattern for any future utility repo, such as:

```text
Blender batch export helper
Unity WebGL profiling helper
texture/material preparation script
fastener placement or validation tool
UI Toolkit prototype utility
```

---

### 4.4 Strong repositories document limitations explicitly

Good repos openly state:

```text
experimental status
unsupported scope
hardware requirements
Unity version
known limitations
license constraints
```

This matches Alexander’s thesis repo well because the current project must avoid overclaiming.

The public repo should keep clear boundaries around:

```text
visual product twin
heuristic thermal reading
academic validation
unsupported metrics
hidden/internal managers
non-final prototype modules
```

---

### 4.5 Badges help, but only when restrained

Useful badges for Alexander:

```text
Unity version
WebGL
C#
Academic thesis
GitHub Pages
License / All rights reserved
```

Avoid:

```text
badge spam
fake quality badges
unused package-manager badges
npm badges unless a package exists
CI badges unless CI exists
```

---

## 5. Current repository audit

Repository inspected:

```text
delarge95/WebGL-Thesis-Proposal
Visibility: public
Default branch: master
Size: ~41 MB
README status: maintained
```

### 5.1 Current strengths

The current README already has several benchmark-aligned features:

```text
clear project title
one-line product description
Unity / WebGL / C# / academic badges
public demo link
canonical repository link
report and manual links
public scope disclaimer
canonical folder structure
Unity setup
runtime systems table
validation package explanation
public repository boundary
academic scope
```

This is better than many public Unity academic repos.

### 5.2 Current gaps

The current README is technically solid but still reads more like a thesis archive than a recruiter-facing GitHub proof page.

Main gaps:

```text
no hero screenshot or GIF near the top
no compact “what this demonstrates” section
no visual feature gallery
no short case-study link block
no technical proof bullets above the fold
no GitHub topics listed in the README
no separate portfolio-facing repo profile
```

These are not fatal. They are presentation gaps, not structural failures.

---

## 6. Recommended updates for WebGL-Thesis-Proposal

### 6.1 Add hero media after badges

Insert after the badge block:

```md
![TwinSight X500 WebGL demo](docs/media/twinsight-hero.gif)

Live demo: https://delarge95.github.io/WebGL-Thesis-Proposal/
```

Acceptable alternatives:

```text
animated GIF of selection flow
short MP4 converted to GIF
static 16:9 screenshot if GIF is too heavy
```

Required visual states:

```text
full drone view
part selection
bottom sheet
exploded view
cross-section
Studio visual mode
```

---

### 6.2 Add a compact proof section

Recommended section:

```md
## What this demonstrates

- Unity WebGL deployment of an interactive technical visualization prototype.
- CAD-to-realtime asset preparation for a complex drone assembly.
- Mobile-first technical UI built around part inspection and spatial understanding.
- Runtime systems for selection, visibility, exploded view, cross-section and visual modes.
- Academic validation package with technical profiling, SUS, NASA-TLX Raw and Think-Aloud protocols.
```

This should appear before the long thesis summary.

---

### 6.3 Add visual feature gallery

Recommended structure:

```md
## Feature gallery

| Feature | Preview | Purpose |
|---|---|---|
| Selection | image | Identify parts |
| Inspect | image | Isolate components |
| Analyze | image | Explode / cut assembly |
| Studio | image | Compare visual readings |
| Technical sheets | image | Read specifications |
```

Keep cells short. Use 5 rows maximum.

---

### 6.4 Add repository topics on GitHub

Recommended GitHub topics:

```text
unity
webgl
unity-webgl
technical-visualization
technical-art
real-time-3d
cad-to-realtime
drone
ui-toolkit
academic-thesis
```

Optional later:

```text
webassembly
interactive-3d
visual-product-twin
```

---

### 6.5 Keep the scope disclaimer

Do **not** remove the current visual product twin disclaimer.

It protects against overclaiming. It is also aligned with strong open-source documentation practice.

Keep explicit wording around:

```text
not live telemetry
not calibrated thermal analysis
metrics only when validated
hidden/internal systems not final public features
```

---

### 6.6 Do not over-convert the thesis repo into a personal portfolio

The repository should remain the canonical academic/project repo.

Alexander’s personal GitHub surface should instead be improved through:

```text
profile README
pinned repositories
separate portfolio landing page
TwinSight case-study page
small tooling repos
```

Do not mix personal biography, job-seeking language and thesis archive text too aggressively inside the thesis repo.

---

## 7. Recommended GitHub profile README

Create or update:

```text
delarge95/delarge95/README.md
```

Recommended structure:

```md
# Alexander Woodcock Salomón

Real-Time 3D Developer / Unity Technical Artist focused on Unity WebGL, CAD-to-realtime optimization and technical visualization.

## Selected work

- TwinSight X500 — Unity WebGL technical visualization prototype for Holybro X500 V2 drone assembly.
- CAD-to-realtime pipeline — Blender cleanup, UVs, baking, optimization and Unity integration.
- Technical UI systems — selection, bottom sheet, exploded view, cross-section and visual modes.

## Stack

Unity · C# · WebGL · URP · UI Toolkit · Blender · CAD cleanup · Git/GitHub · Python tooling

## Links

- Portfolio: [pending]
- TwinSight demo: https://delarge95.github.io/WebGL-Thesis-Proposal/
- TwinSight repo: https://github.com/delarge95/WebGL-Thesis-Proposal
- LinkedIn: [pending]
```

Avoid:

```text
student-only framing
long personal history
all tools ever used
unverified metrics
AI-generated badges without function
```

---

## 8. Recommended pinned repositories

Target pinned set:

| Slot | Repo | Purpose |
|---|---|---|
| 1 | WebGL-Thesis-Proposal | Main proof |
| 2 | Portfolio site | Recruiter entry |
| 3 | Unity tool repo | Tooling proof |
| 4 | Blender/Python automation | Pipeline proof |
| 5 | WebGL demo experiment | Deployment proof |
| 6 | Shader/visualization study | Technical art proof |

Current available repo:

```text
WebGL-Thesis-Proposal
```

Missing repos to create later:

```text
portfolio site
small Unity tool
small Python automation tool
small shader/VFX or WebGL visualization demo
```

---

## 9. Recommended README template for future repos

Use this template for any future tooling or demo repository:

```md
# Project Name

One-line description of the problem solved.

![demo](docs/media/demo.gif)

## What it does

- Feature 1
- Feature 2
- Feature 3

## Why it matters

Short technical rationale.

## Tech stack

Unity · C# · WebGL · Blender · Python

## Quick start

1. Requirement
2. Installation
3. Run

## Workflow

Input -> Process -> Output

## Screenshots

| Step | Preview |
|---|---|
| Input | image |
| Output | image |

## Limitations

- Known limitation 1
- Known limitation 2

## License

State the license or rights boundary clearly.
```

---

## 10. Concrete updates for existing strategy files

### 10.1 Update GitHub strategy module

If a module similar to `18_github_profile_and_repo_strategy.md` exists, update it with:

```text
- GitHub profile README is required.
- TwinSight repo remains academic/project canonical.
- Add hero media to TwinSight README.
- Add “What this demonstrates” section.
- Add feature gallery.
- Add GitHub topics.
- Create at least 2 small utility repos after thesis delivery.
```

### 10.2 Update CV module

In `17_cv_base_and_role_variants.md`, add GitHub proof links:

```text
TwinSight demo
TwinSight repository
TwinSight case study
GitHub profile
```

Add a line under the main project:

```text
Public GitHub repository includes WebGL build, final report package, manuals, validation instruments and runtime architecture documentation.
```

### 10.3 Update portfolio module

The portfolio should not duplicate the GitHub README.

Portfolio case study should show:

```text
problem
process
screenshots
technical decisions
final demo
results / validation
```

GitHub README should show:

```text
how to inspect the repo
how to run / understand the demo
technical stack
scope limits
```

---

## 11. Priority order after A3

Do not start job applications yet.

Recommended order:

```text
1. Convert A3 into GitHub public-surface checklist.
2. Add missing visual/media assets to TwinSight README.
3. Create GitHub profile README.
4. Benchmark ArtStation / portfolio / case-study pages.
5. Build portfolio case study.
6. Then move into live jobs and companies.
```

---

## 12. Next task

Next task:

```text
A4_portfolio_artstation_case_study_benchmark
```

Mode:

```text
Agent: Sí
Deep Research: No
```

Purpose:

```text
Collect public portfolio, ArtStation, personal-site and case-study examples relevant to real-time 3D, Unity technical art, technical visualization, XR/simulation and tool/pipeline development.
```

---

## 13. Prompt for A4

```text
Execute A4_portfolio_artstation_case_study_benchmark.

Objective:
Collect 20–30 public portfolio or case-study examples relevant to Alexander’s positioning:
Real-Time 3D Developer, Unity Technical Artist, Unity WebGL Developer, Technical Visualization Developer, XR Developer, Simulation Developer, Tools/Pipeline Developer, Python automation/tooling developer.

Prioritize:
- personal portfolio websites;
- ArtStation project pages;
- Behance case studies if technical enough;
- GitHub Pages portfolios;
- itch.io project pages with technical breakdowns;
- Unity/WebGL live demo pages;
- technical art breakdowns;
- XR/simulation/visualization case studies;
- portfolio pages with strong project cards and media.

Output structured tables only.

Fields:
- Source label
- URL
- Source type
- Role relevance
- Country/region if visible
- Portfolio structure
- Hero section
- Project card structure
- Case study depth
- Media used
- Demo links
- GitHub/source links
- Technical breakdown quality
- Metrics/results shown
- Contact/CTA handling
- What Alexander can adapt
- What Alexander should not copy
- Confidence
- Date checked

Rules:
- Public sources only.
- Do not invent unavailable data.
- If unavailable, write “not found”.
- Keep cells short.
- Include source URLs.
- Tables only.
- No narrative strategy.
```
