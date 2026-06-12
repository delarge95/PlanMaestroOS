# 19_github_readme_templates

## Purpose

This document provides GitHub-facing templates and cleanup rules for Alexander Woodcock Salomón’s portfolio repositories.

It includes:

- GitHub profile README template;
- pinned repository order;
- repository naming rules;
- TwinSight X500 README template;
- ARA Framework README template;
- Blender technical breakdown README template;
- optional ai-news-aggregator README structure;
- repo descriptions;
- disclaimer language;
- AI-assisted development disclosure;
- asset/CAD/manufacturer disclaimer;
- commit and release hygiene;
- GitHub Pages / portfolio link guidance.

The objective is to make GitHub support the target profile:

```text
Real-Time 3D Developer / Unity Technical Artist focused on interactive technical visualization, CAD-to-realtime optimization, and Unity WebGL deployment.
```

---

# 1. GitHub strategy

## Function of GitHub in this job search

GitHub is not the portfolio by itself. It is technical evidence.

It should prove:

- the project exists;
- technical scope is real;
- documentation is readable;
- code/project structure is not chaotic;
- the candidate can communicate implementation decisions;
- the candidate understands limitations and tradeoffs;
- AI assistance was used responsibly, not hidden or overclaimed.

## GitHub should not look like

- a dump of unfinished experiments;
- a student account with tutorial repos pinned;
- a full-stack profile if the target is real-time 3D;
- an AI engineer profile if ARA is not production-ready;
- a 3D artist profile without code or systems;
- a repository graveyard with no README.

## Main GitHub message

Every visible repo should support this message:

```text
I build technical real-time 3D systems, optimized assets, interactive visualization tools, and supporting automation workflows.
```

---

# 2. Public repository decision matrix

| Repository / project | Public status | Action |
|---|---|---|
| `WebGL-Thesis-Proposal` / TwinSight X500 | Public | Clean and make flagship |
| ARA Framework | Public only if runnable or understandable | Add controlled README |
| Portfolio site | Public | Use as GitHub Pages or source repo |
| Blender portrait breakdown | Public if polished | Use README or ArtStation link |
| ai-news-aggregator | Public only if demo-ready | Otherwise keep private |
| FitApp-Free | Private / defer | Not relevant now |
| tutorial repos | Public okay, not pinned | Avoid front-page emphasis |
| old portfolio attempts | Archive/private | Avoid confusion |
| client-sensitive repos | Private | Do not expose |
| unrelated experiments | Private/archive | Reduce noise |

---

# 3. Recommended pinned repository order

## Default pins

| Pin | Repository | Purpose |
|---|---|---|
| 1 | `TwinSight-X500` / current thesis repo | Flagship technical proof |
| 2 | `ARA-Framework` | Secondary automation/tooling proof |
| 3 | `portfolio` / `delarge95.github.io` | Public portfolio site |
| 4 | `blender-portrait-breakdown` | Supporting technical art proof |
| 5 | `ai-news-aggregator` | Only if functional |
| 6 | `unity-tools-or-scripts` | Optional future tools repo |

## If only three repos are ready

Pin only:

1. TwinSight X500.
2. Portfolio site.
3. ARA Framework.

Do not pin weak filler repos just to fill all six slots.

---

# 4. Repository naming rules

## Recommended naming

If renaming is possible without breaking thesis links:

```text
TwinSight-X500
ARA-Framework
alexander-woodcock-portfolio
blender-portrait-technical-study
ai-news-aggregator
unity-tools-prototypes
```

## If keeping current thesis repo name

Current:

```text
WebGL-Thesis-Proposal
```

Add a clear description:

```text
TwinSight X500 — Unity WebGL technical visualization prototype for drone assembly inspection.
```

Add the project name in the README title:

```text
# TwinSight X500
```

Do not rely on the repository name alone.

---

# 5. GitHub profile README template

Create a repository named exactly:

```text
delarge95
```

Then add this README.

```markdown
# Alexander Woodcock Salomón

Real-Time 3D Developer / Unity Technical Artist focused on interactive technical visualization, CAD-to-realtime optimization, and Unity WebGL deployment.

I build browser-accessible and real-time 3D systems using Unity, C#, WebGL, Blender and Python-assisted tooling.

## Focus

- Unity / C# runtime interaction systems
- Unity WebGL deployment
- Interactive technical visualization
- CAD-to-realtime asset optimization
- Blender-based technical asset preparation
- Technical UI and inspection workflows
- Python automation and research tooling

## Flagship project

### TwinSight X500

Unity WebGL technical visualization prototype for inspecting and understanding the assembly of a Holybro X500 V2 drone.

The project includes:

- component selection;
- exploded view;
- cross-section / clipping tools;
- technical information panels;
- visual inspection modes;
- optimized CAD-derived assets;
- browser-accessible 3D interaction;
- usability/workload evaluation.

[Portfolio case study](PORTFOLIO_URL) · [Repository](REPO_URL) · [Demo](DEMO_URL)

## Secondary project

### ARA Framework

Python-based research automation prototype using LangGraph/LangChain-style workflow orchestration for literature analysis, technical planning and structured report generation.

[Repository](ARA_REPO_URL)

## Current availability

Based in Colombia. Available for remote contractor/B2B work in:

- Unity development;
- real-time 3D;
- Unity WebGL;
- technical visualization;
- CAD-to-realtime workflows;
- technical art;
- Python automation.

## Links

- Portfolio: PORTFOLIO_URL
- LinkedIn: LINKEDIN_URL
- ArtStation: ARTSTATION_URL
```

## Notes

Replace all placeholders before publishing.

Do not include personal legal details about Portuguese passport or Germany on GitHub profile README. Keep GitHub technical.

---

# 6. TwinSight X500 README template

This is the most important repository README.

## Recommended file name

```text
README.md
```

## Template

```markdown
# TwinSight X500

Unity WebGL technical visualization prototype for drone assembly inspection.

## Overview

TwinSight X500 is an interactive real-time 3D visualization prototype built in Unity WebGL to inspect and understand the assembly of a Holybro X500 V2 drone.

The project transforms complex technical documentation and CAD-derived assets into an optimized browser-accessible 3D experience with component selection, exploded views, cross-section tools, visual modes and technical information panels.

Core idea:

> Seeing parts is not enough. Users need to understand spatial relationships.

## Project status

Thesis project completed. Public portfolio version in preparation / available at:

- Portfolio case study: PORTFOLIO_URL
- WebGL demo: DEMO_URL
- Demo video: VIDEO_URL

## My role

I was responsible for:

- Unity / C# implementation;
- runtime interaction systems;
- component selection workflows;
- exploded view behavior;
- cross-section / clipping tools;
- visual modes;
- technical UI and information panels;
- asset integration;
- CAD-to-realtime optimization workflow;
- Blender-based cleanup and preparation;
- documentation;
- usability/workload evaluation design and reporting;
- final integration and technical ownership.

AI-assisted tools were used as implementation, debugging, research and documentation support. Architecture decisions, integration, validation, technical judgment and final ownership remained my responsibility.

## Key features

- Interactive drone assembly inspection
- Component selection and highlighting
- Exploded view
- Cross-section / clipping tools
- Visual inspection modes
  - realistic
  - X-ray / ghosted
  - blueprint
  - wireframe
  - solid color
  - thermal-style qualitative mode
- Technical information panels
- Unity WebGL deployment
- Optimized CAD-derived assets
- Mobile/web-oriented interface considerations
- Academic usability and workload evaluation

## Technical stack

- Unity
- C#
- Unity WebGL
- URP
- UI Toolkit
- Shader Graph
- Blender
- Marmoset Toolbag
- RizomUV
- Git / GitHub

## CAD-to-realtime pipeline

The source model came from CAD/manufacturer-derived assets. The production workflow involved:

1. CAD conversion / import.
2. Geometry inspection.
3. Cleanup and simplification.
4. Blender-based optimization.
5. Retopology / low-poly preparation.
6. UV preparation.
7. High-to-low asset processing where relevant.
8. Material setup.
9. Unity import and integration.
10. WebGL-oriented optimization and testing.

## Optimization summary

| Metric | Before | After |
|---|---:|---:|
| Triangle count | 6.5M+ | ~95,617 |
| Deployment target | CAD/native tools | Unity WebGL |
| Interaction model | Static documentation | Real-time 3D inspection |

> Verify these values against the final thesis report before publishing.

## Evaluation

The project was evaluated using:

- SUS;
- NASA-TLX Raw;
- Think-Aloud methodology;
- task-based comparison between 3D visualization and conventional 2D support.

Summary metrics:

| Metric | Result |
|---|---:|
| Participants | 12 |
| SUS average | 91.88 |
| NASA-TLX Raw, 3D viewer | 8.69 |
| NASA-TLX Raw, 2D support | 19.89 |
| Task-condition records | 96 |

> Verify final values before public release.

## Screenshots

Add images here:

```markdown
![TwinSight overview](docs/images/overview.png)
![Component selection](docs/images/component-selection.png)
![Exploded view](docs/images/exploded-view.png)
![Cross-section](docs/images/cross-section.png)
![Visual modes](docs/images/visual-modes.png)
```

## Demo video

Add link:

```markdown
[Watch demo video](VIDEO_URL)
```

## Repository structure

```text
Assets/
  Scripts/
  UI/
  Materials/
  Models/
  Scenes/
Docs/
  images/
  diagrams/
  metrics/
README.md
```

Adjust to actual repository structure.

## What this project demonstrates

- Real-time 3D technical visualization
- Unity/C# runtime systems
- Unity WebGL deployment
- CAD-to-realtime optimization
- Technical UI design
- Interactive inspection workflows
- Usability-aware engineering
- Documentation and evaluation

## Limitations

This is an academic prototype, not a commercial production product.

Known limitations:

- based on thesis scope and available time;
- public version may differ from internal development version;
- some CAD/manufacturer-derived assets may require usage disclaimers;
- not a full engineering simulation or FEA system;
- thermal mode, if shown, is qualitative unless explicitly validated.

## Asset and manufacturer disclaimer

This project is an academic/portfolio prototype for technical visualization and assembly understanding.

Holybro X500 V2 references and CAD/manufacturer-derived geometry are used for educational and technical visualization purposes. This project is not affiliated with, endorsed by, or sponsored by Holybro.

## AI-assisted development disclosure

AI tools were used during parts of development for implementation support, debugging, research and documentation assistance.

AI did not replace technical ownership. Architecture, integration, validation, testing, technical judgment and final project decisions were handled by the developer.

## License

Code license: LICENSE_TYPE

Asset license: see asset disclaimer and repository notes.

If license status is uncertain, do not add an open license until asset/code rights are clear.
```

---

# 7. TwinSight short README version

Use this if the repo should stay concise.

```markdown
# TwinSight X500

Unity WebGL technical visualization prototype for drone assembly inspection.

TwinSight X500 transforms CAD-derived drone assembly assets and technical documentation into an optimized interactive 3D inspection experience.

## Features

- Unity WebGL deployment
- Component selection
- Exploded view
- Cross-section / clipping
- Visual inspection modes
- Technical information panels
- CAD-to-realtime asset optimization
- Usability/workload evaluation

## Stack

Unity · C# · WebGL · URP · UI Toolkit · Shader Graph · Blender · Git

## My role

I handled Unity/C# implementation, runtime interaction systems, technical UI, CAD-to-realtime optimization, Blender asset preparation, documentation, evaluation and final integration.

## Links

- Portfolio case study: PORTFOLIO_URL
- Demo: DEMO_URL
- Video: VIDEO_URL

## Note

Academic thesis prototype. Not affiliated with or endorsed by Holybro.
```

---

# 8. ARA Framework README template

ARA must be framed carefully. It should not compete with TwinSight or overclaim production AI expertise.

```markdown
# ARA Framework

AI-assisted research automation prototype.

## Overview

ARA Framework is a Python-based research automation prototype exploring multi-agent workflows for niche analysis, literature research, technical planning, implementation guidance and structured report generation.

It is positioned as an experimental tooling project, not as a production AI platform.

## Goals

- Automate parts of academic and technical research workflows.
- Structure research into modular agent-style stages.
- Generate Markdown-based technical reports.
- Explore LLM orchestration for research support.
- Test workflow architecture using LangGraph/LangChain-style concepts.

## Architecture

Planned / implemented workflow stages:

1. Niche Analyst
2. Literature Researcher
3. Technical Architect
4. Implementation Specialist
5. Content Synthesizer

## Stack

- Python 3.12+
- LangGraph
- LangChain
- Redis
- Semantic Scholar API
- Playwright / MCP concepts
- MarkItDown / document processing concepts
- Markdown report generation

## Features

- Multi-stage research workflow
- Agent-style orchestration
- Checkpointing
- Budget-aware execution concepts
- External research API integration
- PDF/document processing concepts
- Structured Markdown output

## Project status

Prototype / experimental.

Current limitations:

- not production-ready;
- not a fully autonomous research system;
- requires configuration and testing;
- output quality depends on sources, prompts and validation;
- should not be used as a replacement for expert review.

## What this project demonstrates

- Python automation
- LLM orchestration awareness
- Workflow architecture
- Technical documentation
- Research tooling
- Structured output design
- API integration concepts

## AI disclosure

This project uses LLM tools as part of its core workflow. Outputs require human validation and should not be treated as authoritative without review.

## Setup

```bash
git clone REPO_URL
cd ara-framework
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Add real setup commands only after verifying they work.

## Usage

```bash
python main.py
```

Replace with actual command.

## Environment variables

```text
GROQ_API_KEY=
SEMANTIC_SCHOLAR_API_KEY=
REDIS_URL=
```

Only list variables that are actually used.

## Roadmap

- Improve reliability.
- Add better source validation.
- Add clearer report templates.
- Add test cases.
- Add demo run.
- Add documentation.

## License

LICENSE_TYPE
```

---

# 9. Blender portrait README / project page template

This can be either a repository README or a portfolio/ArtStation text.

```markdown
# Hyperrealistic Blender Portrait — Technical Art Study

## Overview

This project is a high-fidelity Blender portrait study focused on topology, material definition, grooming, lighting and rendering.

It is presented as supporting technical art evidence, not as the primary career positioning asset.

## Goals

- Study realistic character pipeline fundamentals.
- Practice topology and facial structure.
- Build material and shading understanding.
- Practice grooming, lighting and rendering.
- Document the technical process.

## Tools

- Blender
- Sculpting/modeling tools
- Grooming tools
- Shader/material setup
- Lighting and rendering workflow

## Breakdown

Include images for:

- base mesh;
- topology;
- UVs;
- material passes;
- grooming;
- lighting setup;
- final render;
- before/after progression.

## What this project demonstrates

- 3D pipeline literacy
- topology awareness
- material and lighting understanding
- attention to visual detail
- ability to follow and complete a structured training pipeline

## Training note

This project was made while following CG Cookie HUMAN training material.

The course was used as non-certified skill development. It is not listed as a formal certification.

## Limitations

This is a study project, not a shipped production asset.

It should support technical art positioning, but the main portfolio focus remains TwinSight X500.
```

---

# 10. ai-news-aggregator README structure

Use only if the project is functional.

```markdown
# AI News Aggregator

Experimental full-stack AI news aggregation and analysis prototype.

## Overview

AI News Aggregator is a private/prototype project exploring news collection, analysis and structured presentation using a Python backend and web frontend.

## Stack

- Python
- FastAPI
- React
- PostgreSQL
- Redis
- AI-assisted analysis pipeline

## Features

- News/source collection
- Backend API
- Data storage
- Frontend display
- Analysis pipeline concepts

## Project status

Prototype.

Do not present as production-ready unless deployment, tests and reliability are confirmed.

## What this project demonstrates

- Python backend development
- API design
- Full-stack prototyping
- Data handling
- AI-assisted workflow experimentation

## Relevance

Secondary project only. Main portfolio focus remains real-time 3D / Unity technical visualization.
```

---

# 11. Repository descriptions

Use GitHub’s short repository description field.

## TwinSight

```text
Unity WebGL technical visualization prototype for drone assembly inspection, CAD-to-realtime optimization and interactive 3D analysis.
```

## ARA

```text
Python/LangGraph research automation prototype for multi-agent literature analysis, technical planning and Markdown report generation.
```

## Portfolio

```text
Personal portfolio for real-time 3D, Unity WebGL, technical visualization and Python-assisted tooling projects.
```

## Blender portrait

```text
Blender technical art study focused on topology, materials, grooming, lighting and realistic rendering.
```

## ai-news-aggregator

```text
Experimental FastAPI/React AI news aggregation prototype. Secondary full-stack/tooling project.
```

## Unity tools repo

```text
Unity/C# tooling and technical art prototypes for real-time 3D workflows.
```

---

# 12. Repository topic tags

## TwinSight topics

```text
unity
csharp
webgl
unity-webgl
real-time-3d
technical-visualization
cad-to-realtime
blender
interactive-3d
technical-art
drone
assembly-visualization
```

## ARA topics

```text
python
langgraph
langchain
llm
research-automation
workflow-automation
multi-agent
semantic-scholar
markdown
technical-documentation
```

## Portfolio topics

```text
portfolio
unity
technical-art
real-time-3d
webgl
technical-visualization
```

## Blender portrait topics

```text
blender
technical-art
topology
materials
grooming
lighting
rendering
```

---

# 13. Badges

Use badges sparingly. Do not clutter the README.

## TwinSight badges

```markdown
![Unity](https://img.shields.io/badge/Engine-Unity-black)
![C#](https://img.shields.io/badge/Language-C%23-blue)
![WebGL](https://img.shields.io/badge/Target-WebGL-orange)
![Status](https://img.shields.io/badge/Status-Thesis%20Prototype-lightgrey)
```

## ARA badges

```markdown
![Python](https://img.shields.io/badge/Language-Python-blue)
![Status](https://img.shields.io/badge/Status-Prototype-lightgrey)
![LLM](https://img.shields.io/badge/Workflow-LLM%20Orchestration-purple)
```

Avoid fake coverage/build badges if no CI exists.

---

# 14. Image and media structure

Recommended folder:

```text
docs/
  images/
    overview.png
    component-selection.png
    exploded-view.png
    cross-section.png
    visual-modes.png
    cad-before-after.png
  diagrams/
    pipeline.png
    system-architecture.png
  videos/
    demo-preview.gif
  metrics/
    evaluation-summary.md
```

## README media order

Use this order:

1. Hero screenshot.
2. Short description.
3. Demo video link.
4. Feature screenshots.
5. Pipeline diagram.
6. Metrics table.
7. Technical details.

## GIF warning

Keep GIFs short and optimized.

Large GIFs slow down GitHub pages.

---

# 15. AI-assisted development disclosure templates

## Short version

```markdown
## AI-assisted development note

AI tools were used for implementation support, debugging, research and documentation assistance. Architecture decisions, integration, testing, validation, technical judgment and final ownership remained my responsibility.
```

## Detailed version

```markdown
## AI-assisted development note

This project used AI-assisted workflows during parts of development.

AI was used for:

- implementation support;
- debugging assistance;
- documentation drafting;
- research support;
- code explanation and iteration.

AI was not treated as a replacement for technical ownership. I remained responsible for architecture decisions, system integration, testing, validation, tradeoff analysis and final project delivery.
```

## Avoid

```markdown
This was vibe coded.
ChatGPT made this project.
Mostly AI-generated.
```

These formulations reduce technical credibility.

---

# 16. Asset / manufacturer disclaimer templates

## TwinSight disclaimer

```markdown
## Asset and manufacturer disclaimer

This project is an academic/portfolio prototype created for technical visualization and assembly-understanding purposes.

References to the Holybro X500 V2 platform and any CAD/manufacturer-derived assets are used for educational and technical visualization purposes only.

This project is not affiliated with, endorsed by, sponsored by, or officially supported by Holybro.
```

## If asset rights are uncertain

```markdown
Some source assets are not redistributed in this repository. Public materials may include screenshots, derived low-poly representations or documentation-only references where appropriate.

If any asset usage must be restricted, the public repository should exclude those files and provide screenshots or diagrams instead.
```

## If repo cannot include model files

```markdown
Note: Due to asset/source restrictions, this repository may not include all 3D model files used in the original academic prototype. The repository focuses on documentation, screenshots, architecture and selected implementation samples.
```

---

# 17. License guidance

## If code can be public

Use:

```text
MIT License
```

or:

```text
Apache-2.0
```

MIT is simpler for portfolio projects.

## If asset rights are mixed

Use:

```text
Code: MIT
Assets: All rights reserved / see asset disclaimer
```

README wording:

```markdown
## License

Code in this repository is licensed under the MIT License unless otherwise stated.

3D assets, CAD-derived models, images and third-party references may be subject to separate restrictions. See the asset disclaimer.
```

## If uncertain

Do not add a permissive license yet.

Use:

```markdown
## License

License pending. This repository is shared for portfolio review and technical documentation purposes. Please contact the author before reusing code or assets.
```

---

# 18. Commit hygiene

## Before sharing repos

Do:

- remove API keys;
- remove credentials;
- remove personal paths;
- remove large unnecessary files;
- remove broken builds if possible;
- clean README;
- add screenshots;
- add `.gitignore`;
- add license/disclaimer;
- check links.

## Commit message style

Use simple descriptive messages:

```text
docs: add TwinSight project overview
docs: add screenshots and pipeline diagram
feat: add component selection system
fix: improve WebGL build notes
refactor: organize interaction scripts
```

Do not rewrite all history unless secrets were committed.

If secrets were committed, rotate them and purge history.

---

# 19. Security checklist

Before making any repo public:

- [ ] No API keys.
- [ ] No passwords.
- [ ] No `.env` files.
- [ ] No private client data.
- [ ] No personal documents.
- [ ] No copyrighted course material.
- [ ] No licensed assets that cannot be redistributed.
- [ ] No large binary files unless needed.
- [ ] No broken or misleading claims.
- [ ] No hidden personal notes in comments.
- [ ] No thesis drafts with private evaluator comments unless intended.

---

# 20. GitHub Pages / portfolio link guidance

If using GitHub Pages, recommended repo:

```text
delarge95.github.io
```

or:

```text
portfolio
```

## Portfolio repo README

```markdown
# Alexander Woodcock — Portfolio

Portfolio for real-time 3D, Unity WebGL, technical visualization and Python-assisted tooling projects.

Live site: PORTFOLIO_URL

## Featured projects

- TwinSight X500
- ARA Framework
- Blender Portrait Technical Study

## Stack

- HTML/CSS/JS or chosen framework
- GitHub Pages
- Unity WebGL embeds or external demo links

## Notes

This repository contains the source for my public portfolio site.
```

---

# 21. README quality checklist

Each public repo should answer:

- What is this?
- Why does it exist?
- What did you build?
- What technologies did you use?
- What does it demonstrate?
- What is the current status?
- How can someone view it?
- What are the limitations?
- Are assets/code reusable?
- Was AI used?
- Is there a demo?

## Minimum README sections

```text
# Title
Overview
Features
Tech Stack
My Role
Screenshots / Demo
Status
Limitations
License / Disclaimer
```

---

# 22. GitHub cleanup checklist

## Immediate actions

- [ ] Update GitHub profile bio.
- [ ] Update profile links.
- [ ] Pin correct repositories.
- [ ] Unpin tutorial repos.
- [ ] Archive old portfolio attempts.
- [ ] Hide irrelevant unfinished repos.
- [ ] Add TwinSight README.
- [ ] Add TwinSight screenshots.
- [ ] Add TwinSight disclaimer.
- [ ] Add AI disclosure.
- [ ] Add ARA README if public.
- [ ] Add repo descriptions.
- [ ] Add topic tags.
- [ ] Check all public repo links.
- [ ] Remove secrets/private files.

## Suggested GitHub bio

```text
Real-Time 3D Developer / Unity Technical Artist · Unity WebGL · CAD-to-Realtime · Technical Visualization · Python Tooling
```

## Suggested profile link

Set profile website to:

```text
PORTFOLIO_URL
```

If portfolio is not ready, use:

```text
TwinSight case study URL
```

or LinkedIn temporarily.

---

# 23. README anti-patterns

Avoid:

- overly academic abstracts as the first paragraph;
- long thesis sections before screenshots;
- no screenshots;
- no demo link;
- no role explanation;
- vague “this is a project for university” wording;
- overstating commercial readiness;
- hiding limitations;
- apologetic language;
- too many badges;
- walls of text;
- incomplete setup commands;
- unsupported technical claims;
- broken images.

---

# 24. Recruiter-first README ordering

For TwinSight, use this order:

```text
Title
One-line summary
Hero image
Demo links
Key features
My role
Tech stack
Visual screenshots
Optimization / pipeline
Evaluation
Limitations
AI disclosure
Asset disclaimer
Setup / repo structure
License
```

Do not start with installation instructions unless the repo is a library/tool.

---

# 25. Technical-reviewer README ordering

For deeper technical readers:

```text
Overview
Architecture
Runtime systems
Data/model pipeline
Optimization decisions
Code structure
Evaluation
Known limitations
Development notes
```

Consider adding:

```text
docs/technical-breakdown.md
docs/cad-to-realtime-pipeline.md
docs/evaluation-summary.md
```

This keeps the main README readable while providing depth.

---

# 26. Suggested additional docs for TwinSight

## `docs/cad-to-realtime-pipeline.md`

Sections:

```text
Source asset
Conversion process
Cleanup
Retopology
UVs
Optimization decisions
Unity import
WebGL constraints
Tradeoffs
```

## `docs/runtime-systems.md`

Sections:

```text
Component selection
Exploded view
Cross-section tools
Visual modes
UI Toolkit panels
State management
Performance concerns
```

## `docs/evaluation-summary.md`

Sections:

```text
Evaluation design
Participants
Tasks
SUS
NASA-TLX Raw
Think-Aloud
Limitations
Interpretation
```

## `docs/ai-assisted-development.md`

Sections:

```text
Where AI was used
Where AI was not used
Human technical ownership
Validation process
Limitations
```

---

# 27. Final recommended GitHub action order

## Step 1

Clean profile:

```text
bio
links
pinned repos
weak repo visibility
```

## Step 2

Fix TwinSight README.

## Step 3

Add screenshots and diagrams.

## Step 4

Add disclaimers.

## Step 5

Add ARA README if public.

## Step 6

Add portfolio site link.

## Step 7

Review as a recruiter:

```text
Can I understand what this person does in 30 seconds?
```

## Step 8

Review as a technical interviewer:

```text
Can I see evidence of implementation and tradeoffs?
```

---

# 28. Final GitHub readiness gate

GitHub is ready to include in applications only when:

- TwinSight is pinned first;
- TwinSight README is readable;
- screenshots exist;
- no misleading public repos dominate;
- repo descriptions are clear;
- links work;
- no secrets are public;
- AI disclosure is controlled;
- asset disclaimer is present;
- portfolio or demo link exists.

If this gate is not passed, use LinkedIn/portfolio first and delay GitHub emphasis.

---

# 29. Next file dependency

The next file should be:

```text
20_portfolio_copy_and_site_structure.md
```

It should use:

- TwinSight README;
- CV summary;
- LinkedIn About;
- project hierarchy;
- portfolio MVP from section 07;
- TwinSight case study from section 08.

No Deep Research or agent required.
