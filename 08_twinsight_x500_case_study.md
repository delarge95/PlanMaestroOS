# 08 — TwinSight X500 Case Study

## Document purpose

This document defines the complete portfolio case study structure for **TwinSight X500 / WebGL-Thesis-Proposal**, the flagship project for Alexander Woodcock Salomón’s international job-search strategy.

The objective is to convert the thesis project into a recruiter-readable and technically credible case study for these role families:

1. Real-Time 3D / Interactive Technical Visualization Developer.
2. Unity WebGL / Interactive 3D Developer.
3. Technical Visualization / Digital Twin / Simulation Developer.
4. Unity Technical Artist — optimization, runtime interaction, tools, technical UI.
5. CAD-to-Realtime Technical Artist / Optimization Specialist.

This document is not the final public portfolio page yet. It is the **source case-study blueprint** from which the website page, GitHub README, LinkedIn project entry, ArtStation post, demo video, interview talking points and CV bullets should be derived.

---

## Source-of-truth status

| Field | Current status |
|---|---|
| Project name | TwinSight X500 / WebGL-Thesis-Proposal |
| Academic context | Ingeniería Multimedia thesis project, UNAD |
| Thesis status | Complete, pending defense / sustentación |
| Public repo | `https://github.com/delarge95/WebGL-Thesis-Proposal` |
| Candidate role | Unity integration, runtime systems, 3D optimization, UI, documentation, evaluation |
| Project type | Unity WebGL interactive technical visualization prototype |
| Subject | Holybro X500 V2 drone assembly visualization |
| Primary value | Convert complex 2D/CAD assembly documentation into interactive 3D understanding |
| Primary portfolio use | Flagship project for international technical art / real-time 3D / visualization roles |

---

## Correct positioning

### Recommended one-line positioning

**TwinSight X500 is a Unity WebGL interactive technical visualization prototype that transforms complex drone assembly documentation into a real-time 3D inspection experience, combining CAD-to-realtime optimization, runtime interaction systems, technical UI and usability validation.**

### Short portfolio summary

TwinSight X500 is an interactive 3D technical visualization system built in Unity WebGL for inspecting the assembly structure of a Holybro X500 V2 drone. The project converts manufacturer CAD and technical documentation into an optimized real-time model with component selection, exploded view, clipping, technical information panels and multiple visualization modes.

The project was developed as an academic thesis and validated with usability and workload instruments. Its purpose is not only to show parts, but to help users understand spatial relationships in a complex technical assembly.

### Recruiter-facing framing

Use this project to signal:

- Unity / C# implementation capacity.
- Real-time 3D interaction design.
- CAD-to-realtime asset optimization.
- WebGL deployment awareness.
- Technical UI and component information systems.
- Ability to connect engineering documentation, 3D production and user evaluation.
- Ability to document and defend technical design decisions.

### What this project should not claim

Do **not** present TwinSight as:

- a commercial shipped product;
- a production digital twin connected to live telemetry;
- an engineering-grade simulation;
- an FEA / CFD / thermodynamic simulator;
- a certified aerospace training platform;
- an original CAD design of the drone;
- a full-stack SaaS product;
- a solo-coded project without AI assistance;
- evidence of senior-level industry production experience.

---

## Core problem

Traditional assembly documentation often relies on 2D diagrams, exploded drawings, text instructions and static CAD references. For spatially complex systems such as drones, users must mentally reconstruct relationships between parts, fasteners, modules, vertical layers and internal assemblies.

TwinSight addresses this problem by creating an interactive 3D representation where the user can inspect components, isolate assemblies, visualize relationships and understand how parts connect in space.

### Core thesis statement

**Seeing parts is not enough. Users need to understand spatial relationships.**

### Problem dimensions

1. **Spatial reconstruction load**  
   Static documentation requires the user to infer 3D relationships from 2D views.

2. **Component relationship ambiguity**  
   Assemblies contain parent parts, subparts, fasteners, mounts and nested modules that are difficult to understand from text alone.

3. **Scale and density**  
   Imported CAD data can be too dense for real-time web deployment and must be optimized.

4. **Web performance constraints**  
   A browser-based viewer must balance fidelity, interactivity and performance.

5. **Instructional clarity**  
   Users need technical information, not just visual inspection.

---

## Project objectives

### General objective

Design and implement an interactive Unity WebGL 3D visualization prototype that supports the inspection and understanding of the Holybro X500 V2 drone assembly.

### Specific objectives

1. Convert CAD/manufacturer geometry and technical references into a real-time optimized 3D asset pipeline.
2. Implement runtime interaction systems for component selection, isolation, exploded view and technical inspection.
3. Design a technical UI that exposes part identity, specifications and assembly information.
4. Add visual modes that support different inspection needs: realistic, X-Ray, blueprint, solid color, wireframe, ghosted and qualitative thermal visualization.
5. Deploy the experience through Unity WebGL with web/mobile performance considerations.
6. Evaluate the prototype using usability, workload and qualitative feedback instruments.

---

## Project context and constraints

### Technical context

TwinSight is not a conventional game project. It sits between real-time 3D development, technical art, CAD optimization, digital product visualization and instructional interface design.

The central challenge is not only visual quality. The central challenge is making a complex technical assembly understandable, performant and navigable in a browser environment.

### Constraints

| Constraint | Impact |
|---|---|
| CAD density | Required polygon reduction and selective reconstruction |
| WebGL target | Required performance-aware asset decisions |
| Academic scope | Prototype quality, not commercial deployment quality |
| Manufacturer assets | Requires careful attribution and portfolio risk mitigation |
| Time constraints | Some features may be prototype-level rather than production-hardened |
| AI-assisted coding | Requires transparent explanation of implementation process |

---

## Technical stack

| Area | Tools / technologies |
|---|---|
| Engine | Unity |
| Runtime language | C# |
| Target platform | WebGL / browser |
| Rendering | URP, real-time visualization modes |
| UI | Unity UI Toolkit / technical interface systems |
| 3D pipeline | Blender, CAD cleanup, retopology, optimization |
| CAD source | Holybro X500 V2 manufacturer geometry / technical references |
| Optimization | CAD-to-realtime reduction, modular assets, high-to-low workflow |
| Evaluation | SUS, NASA-TLX Raw, Think-Aloud, task records |
| Versioning | Git / GitHub |
| AI assistance | Used as implementation support; final integration/debugging/technical judgment retained by candidate |

---

## Feature inventory

### Core interaction features

| Feature | Status | Portfolio value |
|---|---|---|
| Component selection | Implemented / expected | Shows runtime interaction design |
| Technical part panels | Implemented / expected | Shows UI + documentation integration |
| Exploded view | Implemented / expected | Shows assembly relationship visualization |
| Cross-section / clipping | Implemented / expected | Shows technical inspection capability |
| Isolation / focus | Implemented / expected | Shows user-centered navigation |
| Multiple visual modes | Implemented / expected | Shows technical art and rendering modes |
| Mobile-first UI thinking | Implemented / expected | Shows web deployment awareness |
| Performance optimization | Implemented / expected | Shows CAD-to-realtime competence |

### Visual modes

The public case study should show each visual mode with a screenshot or short clip:

1. Realistic.
2. X-Ray.
3. Blueprint.
4. Solid color.
5. Wireframe.
6. Ghosted.
7. Qualitative thermal visualization.

### Technical data panels

Recommended information hierarchy:

1. Identification.
2. Specifications.
3. Assembly relationship.
4. Parent / child relationship.
5. Notes / warnings / interpretation.

---

## Metrics and validation

### Reported quantitative metrics

| Metric | Reported value | Interpretation |
|---|---:|---|
| CAD source complexity | Above 6.5M triangles | Indicates need for optimization |
| Optimized result | 95,617 triangles | Core evidence for CAD-to-realtime workflow |
| Validation participants | 12 | Formative usability validation; not large-scale statistical validation |
| SUS average | 91.88 | Strong usability signal, but sample size should be stated |
| NASA-TLX Raw — 3D viewer | 8.69 | Lower perceived workload condition |
| NASA-TLX Raw — 2D support | 19.89 | Higher perceived workload comparator |
| Task-condition records | 96 | Useful evaluation dataset size for task-level observations |

### How to present the metrics

Use precise language:

> In a formative academic evaluation with 12 participants and 96 task-condition records, the prototype obtained a SUS average of 91.88 and lower NASA-TLX Raw workload scores for the 3D viewer condition compared with the 2D support condition.

Avoid overclaiming:

- Do not claim universal proof of superiority.
- Do not claim statistical generalization unless the thesis includes formal statistical testing.
- Do not claim commercial validation.
- Do not claim training certification validity.

### Suggested visualization for portfolio

Use a compact before/after metric panel:

| Before / comparator | After / result |
|---|---|
| Dense CAD above 6.5M triangles | Optimized model at 95,617 triangles |
| 2D support NASA-TLX Raw 19.89 | 3D viewer NASA-TLX Raw 8.69 |
| Static assembly references | Interactive component inspection |

---

## Candidate contribution map

### Strongly defensible contribution areas

| Contribution | Evidence needed |
|---|---|
| Unity integration | repo structure, scripts, demo video |
| Runtime interaction systems | selection, exploded view, clipping, visual modes |
| Technical UI | screenshots, UI hierarchy, data panel structure |
| CAD-to-realtime workflow | before/after topology, polycount table, optimization notes |
| Blender optimization | screenshots of cleanup/retopo/high-low workflow |
| Propeller modeling | modeling breakdown / wireframe |
| Academic evaluation | SUS/TLX tables, methodology summary |
| Documentation | thesis excerpts, diagrams, README |
| AI-assisted implementation management | explanation of architecture, debugging, integration decisions |

### Carefully worded contribution statement

> I developed TwinSight X500 as a thesis prototype, leading the Unity integration, runtime interaction systems, technical UI, CAD-to-realtime optimization workflow, documentation and evaluation. AI tools were used as implementation support, but I was responsible for the architecture, integration, debugging, design decisions, validation and final project ownership.

### Claims that require evidence before publication

| Claim | Evidence required |
|---|---|
| “Optimized from 6.5M+ to 95,617 triangles” | polycount screenshots / thesis table |
| “Unity WebGL deployment” | live build or recorded browser demo |
| “Mobile-first interface” | mobile screenshots / responsive demo |
| “Clipping system” | technical video or code snippet |
| “Visual modes” | screenshot grid |
| “SUS 91.88” | thesis evaluation section |
| “NASA-TLX reduction” | evaluation table |
| “AI-assisted but personally integrated” | interview explanation + code review readiness |

---

## CAD-to-realtime pipeline narrative

### Recommended pipeline section

The case study should include a dedicated **CAD-to-Realtime Optimization Pipeline** section.

Suggested structure:

1. **Source**  
   Manufacturer CAD / technical references from the Holybro X500 V2 assembly.

2. **Import / conversion**  
   CAD imported or converted into polygonal geometry suitable for Blender and Unity.

3. **Assessment**  
   Original geometry was too dense for WebGL deployment and contained parts requiring cleanup or reconstruction.

4. **Optimization**  
   Reduced, rebuilt, retopologized or simplified geometry while preserving visual and instructional fidelity.

5. **Modularization**  
   Organized the drone into inspectable component entities and scene nodes.

6. **Bake / material planning**  
   High-to-low workflow used or planned for retaining detail on optimized meshes.

7. **Unity integration**  
   Imported optimized assets into Unity, assigned metadata, interaction states and visual modes.

8. **Evaluation**  
   Tested usability and cognitive workload in comparison with 2D support materials.

### Suggested asset breakdown

| Asset class | Portfolio treatment |
|---|---|
| Drone frame | show CAD-to-realtime conversion |
| Motors | show imported/manufacturer source + optimized version |
| Propellers | show original modeling contribution |
| Fasteners | show modular strategy, not every screw individually |
| Cables | show carefully if final model includes them; otherwise mark as scope limitation |
| Battery / GPS / telemetry modules | show if final and visually strong |

---

## Runtime systems breakdown

### System 1 — Component selection

Public explanation:

> The selection system allows users to inspect individual drone components and access part-specific technical information. Each selectable component is associated with metadata and visual feedback states.

Evidence to show:

- selection highlight screenshot;
- selected part panel;
- hierarchy example;
- code snippet only if clean and safe.

### System 2 — Exploded view

Public explanation:

> The exploded view reveals assembly relationships by separating components spatially while preserving their logical structure. This supports inspection of layered assemblies and internal connections.

Evidence to show:

- normal vs exploded view comparison;
- short animation clip;
- note on limitations for cables/flexible elements if relevant.

### System 3 — Cross-section / clipping

Public explanation:

> The clipping system enables sectional inspection, allowing users to reveal internal structures and understand how components relate across vertical or horizontal planes.

Evidence to show:

- clipping plane screenshot;
- UI control screenshot;
- simple diagram if available.

### System 4 — Visual modes

Public explanation:

> Multiple visual modes support different inspection needs: realistic rendering for recognition, ghosted/X-Ray for internal relationships, wireframe for structure and blueprint mode for technical interpretation.

Evidence to show:

- visual mode grid;
- explain purpose of each mode in one sentence.

### System 5 — Technical UI

Public explanation:

> The UI connects visual selection with structured component information. It is designed as an inspection interface rather than a game HUD.

Evidence to show:

- panel layout;
- part information hierarchy;
- mobile/desktop variants if available.

---

## Suggested public case study structure

Use this order for the website / portfolio page.

### 1. Hero section

Content:

- Project title.
- One-line summary.
- 15–30 second autoplay muted video or high-quality render.
- Tags: Unity, WebGL, C#, Technical Visualization, CAD-to-Realtime, Blender, UI Toolkit.

Suggested hero copy:

> Unity WebGL technical visualization prototype for inspecting the assembly structure of a Holybro X500 V2 drone.

### 2. Project snapshot

Compact facts:

| Category | Detail |
|---|---|
| Type | Thesis / interactive technical visualization prototype |
| Role | Unity developer, technical artist, 3D optimization, UI, evaluation |
| Tools | Unity, C#, WebGL, Blender, GitHub |
| Result | Optimized drone viewer with interaction, visual modes and usability validation |

### 3. Problem

Explain the documentation-to-understanding gap.

### 4. Solution

Explain the interactive viewer and main features.

### 5. Technical pipeline

Show CAD-to-realtime reduction and asset preparation.

### 6. Runtime interaction systems

Selection, exploded view, clipping, visual modes, UI.

### 7. Evaluation results

Show SUS, NASA-TLX Raw and task records.

### 8. My contribution

Explain what Alexander did, what came from manufacturer CAD and what was AI-assisted.

### 9. Constraints and limitations

Show maturity and honesty.

### 10. What I would improve next

Tie to employability and production mindset.

---

## ArtStation / technical breakdown structure

ArtStation should not be the main project home, but it can host a visual technical breakdown.

Recommended ArtStation post title:

**TwinSight X500 — CAD-to-Realtime Drone Visualization Breakdown**

Recommended sections:

1. Final viewer screenshots.
2. CAD source vs optimized model.
3. Wireframe / topology views.
4. Propeller modeling breakdown.
5. Material / visual mode grid.
6. Exploded view sequence.
7. Clipping / X-Ray inspection screenshots.
8. UI panels.
9. Performance/optimization summary.
10. Link to portfolio case study and GitHub.

Avoid making ArtStation the only evidence source because recruiters for Unity/WebGL roles need technical explanation, not only renders.

---

## GitHub README structure

The GitHub README should be recruiter-readable and not thesis-only.

Recommended README sections:

1. Project name and one-line summary.
2. Live demo link or demo video link.
3. Screenshots.
4. Features.
5. Technical stack.
6. Architecture overview.
7. CAD-to-realtime optimization.
8. Evaluation metrics.
9. Installation / local run instructions.
10. Known limitations.
11. AI-assisted development disclosure.
12. Academic and asset attribution.
13. License / usage notes.

### README warning

If the repository contains messy commits, generated code, large assets, broken branches or academic clutter, do not overexpose it before cleanup. A polished README with curated screenshots is more important than making every internal artifact public.

---

## Demo video plan

### Recommended duration

60–120 seconds.

### Target style

Technical, direct, visual, no cinematic overproduction. The video should prove the system works.

### Structure

| Time | Content |
|---:|---|
| 0–10s | Final viewer hero shot; title overlay |
| 10–25s | Problem: dense drone assembly / static documentation |
| 25–45s | Component selection + technical panel |
| 45–60s | Exploded view |
| 60–75s | Clipping / cross-section |
| 75–90s | Visual modes grid |
| 90–105s | Optimization metric: 6.5M+ to 95,617 triangles |
| 105–120s | Evaluation metrics + role statement |

### Suggested narration

> TwinSight X500 is a Unity WebGL technical visualization prototype developed for my Multimedia Engineering thesis. The goal was to transform complex drone assembly documentation into an interactive 3D inspection experience. I optimized manufacturer CAD data for real-time use, built runtime interaction systems for selection, exploded view and clipping, and designed technical UI panels for component-level information. In a formative evaluation with 12 participants, the prototype achieved a SUS average of 91.88 and lower perceived workload than the 2D support condition. The project demonstrates my focus on Unity, WebGL, CAD-to-realtime optimization and interactive technical visualization.

### Demo video warnings

Do not include:

- long thesis explanation;
- raw editor footage unless useful;
- unpolished UI states;
- claims not visible in the video;
- excessive AI/process discussion.

---

## Screenshot and asset shot list

### Mandatory screenshots

1. Hero full drone view.
2. Selected component with technical panel.
3. Exploded view.
4. Cross-section / clipping.
5. X-Ray or ghosted mode.
6. Wireframe / blueprint mode.
7. Before/after CAD optimization if available.
8. UI close-up.
9. Mobile layout if available.
10. Evaluation metrics panel.

### Optional screenshots

1. Blender optimization workspace.
2. High-poly vs low-poly comparison.
3. UV layout.
4. Bake result.
5. Unity scene hierarchy.
6. Code architecture diagram.
7. Interaction flow diagram.

### Avoid screenshots

- messy Unity editor without explanation;
- unfinished placeholder assets;
- low-resolution mobile captures;
- screenshots that reveal private notes, credentials or irrelevant folders;
- copyrighted documentation pages unless clearly allowed and attributed.

---

## Interview explanation

### 30-second answer

> TwinSight X500 is my thesis project: a Unity WebGL technical visualization prototype for inspecting a Holybro X500 V2 drone assembly. I focused on converting dense CAD/manufacturer geometry into a real-time optimized model, building interaction systems such as component selection, exploded view and clipping, and validating the result with usability and workload instruments. It is the clearest evidence of my fit for Unity, WebGL, technical art and interactive visualization roles.

### 90-second answer

> The project started from a documentation problem: complex assemblies are hard to understand through static 2D references alone. I built a Unity WebGL viewer that lets users inspect the Holybro X500 V2 drone in 3D, select components, view technical information, activate exploded view, use clipping and switch visual modes such as X-Ray, blueprint, wireframe and ghosted. The technical challenge was converting dense CAD-style geometry into a performant browser-ready experience while preserving the assembly meaning. I also evaluated the prototype with 12 participants using SUS, NASA-TLX Raw and Think-Aloud. The strongest result was that the 3D viewer condition showed lower perceived workload than the 2D support condition. AI tools helped with implementation support, but I handled architecture, integration, debugging, final design decisions and validation.

### Answer to “How much did you build yourself?”

> I used AI tools as implementation support, mainly to accelerate coding, explore approaches and debug issues. I do not present the project as hand-coded line by line without assistance. My contribution was defining the architecture, integrating the Unity systems, adapting and debugging the code, building the interaction flow, preparing the 3D assets, connecting the UI and data structure, running the evaluation and making the final technical decisions. In interviews, I can explain the systems, trade-offs and limitations because I was responsible for the final integration and project outcome.

### Answer to “Is this a commercial product?”

> No. It is an academic prototype developed as a thesis project. I treat it as a portfolio-quality technical visualization case study, not as a commercial training platform. The value is that it demonstrates an end-to-end workflow: CAD-to-realtime optimization, Unity WebGL implementation, technical UI and user evaluation.

### Answer to “Is it a digital twin?”

> It is adjacent to digital twin visualization, but I would not call it a full digital twin because it does not include live data, bidirectional synchronization or operational telemetry. It is more accurately described as an interactive technical visualization prototype or assembly inspection viewer.

---

## AI-assisted development disclosure

### Recommended public wording

Use this only in GitHub or extended case study, not necessarily in the hero section:

> AI tools were used as implementation support during development. Final architecture, integration, debugging, interaction design, asset preparation, evaluation and technical decisions were handled by the author.

### When to disclose

| Context | Recommended level |
|---|---|
| CV bullet | Usually omit unless asked |
| LinkedIn project | Usually omit or mention “AI-assisted tooling” only if relevant |
| GitHub README | Include short disclosure |
| Interview | Be transparent if asked |
| Portfolio case study | Include in “Process / Implementation” section, not hero |

### Risk control

The disclosure must not sound like:

- “AI made the project.”
- “I only prompted.”
- “I cannot explain the code.”
- “I copied generated systems without understanding.”

It must sound like:

- AI accelerated implementation.
- Candidate owned architecture and integration.
- Candidate can explain trade-offs.
- Candidate validated the result.

---

## Asset and IP risk mitigation

### Risk

The project uses manufacturer geometry or technical references related to the Holybro X500 V2. This is acceptable as academic/portfolio context only if handled carefully, but it requires attribution and avoidance of misleading ownership claims.

### Required public wording

> This project uses publicly available/manufacturer reference material for academic and portfolio purposes. The drone product and original manufacturer design belong to their respective owners. The portfolio case study focuses on the real-time visualization, optimization, interaction design and academic evaluation work.

### Do not do

- Do not imply ownership of the original Holybro drone design.
- Do not redistribute proprietary CAD files if licensing is unclear.
- Do not present manufacturer assets as original modeling work.
- Do not include confidential documentation.
- Do not use official logos in a way that implies endorsement.

### Safer publication strategy

1. Publish optimized screenshots and demo video.
2. Publish code if clean and legally safe.
3. Avoid redistributing raw CAD sources.
4. Include attribution and academic-use note.
5. If uncertain, keep heavy assets out of the public repo.

---

## Role-specific positioning variants

### Variant A — Real-Time 3D / Interactive 3D Developer

Emphasis:

- Unity runtime systems.
- WebGL deployment.
- Interaction design.
- Component selection.
- Technical UI.

Suggested description:

> Built an interactive Unity WebGL 3D inspection viewer for a drone assembly, implementing component selection, exploded view, clipping and visual modes for technical understanding.

### Variant B — Unity Technical Artist

Emphasis:

- CAD-to-realtime pipeline.
- Optimization.
- Visual modes.
- Technical rendering states.
- Bridge between assets and runtime.

Suggested description:

> Developed a CAD-to-realtime optimization and visualization pipeline for a Unity WebGL drone assembly viewer, reducing dense source geometry into a browser-ready inspectable model.

### Variant C — Technical Visualization / Digital Twin-adjacent

Emphasis:

- Assembly inspection.
- Component relationships.
- Engineering documentation.
- Evaluation.

Suggested description:

> Created an interactive technical visualization prototype that helps users understand drone assembly relationships through 3D inspection, exploded view, clipping and structured component information.

### Variant D — Unity WebGL Developer

Emphasis:

- Browser deployment.
- Performance constraints.
- UI.
- Runtime optimization.

Suggested description:

> Implemented a Unity WebGL technical viewer designed for browser-based 3D inspection, balancing interaction, visual fidelity and optimized asset delivery.

### Variant E — Game Technical Artist

Emphasis:

- Technical art systems.
- Visual modes.
- Real-time rendering.
- Optimization.

Warning: this should be secondary, because the project is not a game.

Suggested description:

> Built real-time visualization systems in Unity, including X-Ray, wireframe, ghosted and blueprint modes, with an optimized 3D asset pipeline for interactive inspection.

---

## CV bullet bank

Use only after the CV strategy section confirms the target role.

### Strong bullets

- Developed **TwinSight X500**, a Unity WebGL technical visualization prototype for inspecting Holybro X500 V2 drone assembly relationships.
- Optimized dense CAD/manufacturer geometry from **6.5M+ triangles to 95,617 triangles** for real-time browser-based inspection.
- Implemented runtime interaction systems including component selection, exploded view, cross-section/clipping and multiple visualization modes.
- Designed technical UI panels linking selected components to identification, specification and assembly information.
- Conducted formative usability evaluation with **12 participants**, **96 task-condition records**, SUS and NASA-TLX Raw workload measures.
- Achieved a **SUS average of 91.88** and lower perceived workload for the 3D viewer condition compared with 2D support material.
- Built a CAD-to-realtime workflow using Blender and Unity to support optimized interactive technical visualization.

### Safer bullets if evidence is not yet public

- Developed a Unity WebGL technical visualization thesis prototype for interactive drone assembly inspection.
- Built component selection, exploded view, clipping and visual mode systems to support spatial understanding of a complex 3D assembly.
- Prepared and optimized CAD-derived 3D assets for real-time visualization in a browser environment.
- Evaluated the prototype through formative usability and workload testing.

### Avoid bullets

- “Shipped a commercial digital twin platform.”
- “Built an aerospace simulation system.”
- “Created the original Holybro X500 V2 CAD model.”
- “Developed a production-ready training platform.”
- “Implemented AI-powered drone diagnostics.”

---

## LinkedIn project description

### Recommended version

**TwinSight X500 — Unity WebGL Technical Visualization Prototype**

Developed a Unity WebGL interactive 3D visualization prototype for inspecting the assembly structure of a Holybro X500 V2 drone. The project converts dense CAD/manufacturer geometry and technical documentation into an optimized real-time viewer with component selection, exploded view, cross-section/clipping, technical information panels and multiple visualization modes.

The prototype was developed as a Multimedia Engineering thesis project and evaluated with usability and workload instruments including SUS, NASA-TLX Raw and Think-Aloud. The project demonstrates CAD-to-realtime optimization, Unity/C# runtime systems, technical UI design and browser-based interactive 3D visualization.

**Technologies:** Unity, C#, WebGL, URP, UI Toolkit, Blender, CAD-to-Realtime Optimization, Technical Visualization.

---

## Portfolio page copy draft

### Opening paragraph

TwinSight X500 is a Unity WebGL technical visualization prototype designed to help users inspect and understand the assembly structure of a Holybro X500 V2 drone. The project addresses a common limitation of static technical documentation: users must mentally reconstruct complex 3D relationships from 2D diagrams, text and CAD references.

The prototype converts dense CAD/manufacturer geometry into an optimized real-time model and adds interaction systems for component selection, exploded view, clipping and visual mode switching. It was developed as a Multimedia Engineering thesis project and evaluated through a formative usability study.

### Problem paragraph

Drone assemblies contain stacked frames, motors, fasteners, electronics, supports and internal relationships that are difficult to understand from static documentation alone. Traditional instructions show the parts, but they do not always make the spatial relationships clear. TwinSight focuses on making these relationships visible, inspectable and easier to reason about.

### Technical challenge paragraph

The main technical challenge was converting dense CAD-style source geometry into a browser-ready interactive 3D experience. This required reducing geometric complexity, organizing components into inspectable entities, designing runtime interaction states and balancing visual clarity with WebGL performance constraints.

### Evaluation paragraph

The prototype was evaluated with 12 participants using SUS, NASA-TLX Raw and Think-Aloud. The results indicated strong usability and lower perceived workload in the 3D viewer condition compared with the 2D support condition. These findings should be interpreted as formative academic validation rather than commercial-scale product validation.

---

## Evidence checklist before publication

### Minimum publication-ready evidence

| Item | Required before public launch |
|---|---:|
| 60–120 sec demo video | Yes |
| Hero screenshot | Yes |
| Feature screenshot grid | Yes |
| Optimization before/after metric | Yes |
| SUS / NASA-TLX summary | Yes |
| Attribution note | Yes |
| GitHub README cleanup | Yes |
| AI-assisted disclosure | Yes, at least in GitHub/process |
| Broken branches removed/hidden | Yes |
| Live WebGL build | Strongly recommended |

### Optional but high-value evidence

| Item | Value |
|---|---|
| Live browser demo | Very high |
| Interaction architecture diagram | High |
| CAD-to-realtime pipeline diagram | High |
| Technical UI flow diagram | Medium-high |
| Code snippet of clean system | Medium |
| Mobile performance notes | Medium |
| Thesis PDF excerpt | Medium, if clean |

---

## Known limitations section

The public case study should include limitations to avoid overclaiming.

Recommended wording:

> TwinSight X500 is an academic prototype, not a commercial training product. It does not include live telemetry, physics simulation, certified maintenance workflows or production-grade backend infrastructure. The project focuses on interactive assembly visualization, CAD-to-realtime optimization, technical UI and formative usability evaluation.

Potential limitations:

- WebGL performance may vary by device.
- Some geometry may be simplified for real-time use.
- Some flexible elements such as cables may be simplified or excluded.
- Evaluation sample size is formative.
- Manufacturer assets require careful attribution.
- The system is not a full digital twin.

---

## Final case study decision

TwinSight X500 should be the **primary flagship project** across:

1. Portfolio homepage.
2. GitHub pinned repositories.
3. LinkedIn Featured section.
4. CV project section.
5. Demo reel.
6. Interview narrative.

It is the project with the strongest alignment between Alexander’s real profile and the target labor market: Unity, WebGL, CAD-to-realtime, real-time interaction, technical visualization, UI, Blender optimization and academic evaluation.

ARA, Blender portrait and other projects should support the profile, but they should not compete with TwinSight for attention in the first 10 seconds of recruiter review.

---

## Completion status

| Section | Status |
|---|---|
| Positioning | Complete |
| Problem framing | Complete |
| Technical stack | Complete |
| Feature inventory | Complete |
| Metrics framing | Complete |
| Contribution map | Complete |
| Demo plan | Complete |
| Screenshot plan | Complete |
| GitHub README outline | Complete |
| LinkedIn project draft | Complete |
| Risk mitigation | Complete |
| Evidence checklist | Complete |

---

## Next actions for this project

1. Record a 60–120 second demo video.
2. Capture the mandatory screenshot set.
3. Produce a visual mode grid.
4. Capture CAD-to-realtime before/after evidence.
5. Clean the GitHub README.
6. Add a public attribution and AI-assisted implementation disclosure.
7. Build the portfolio page using the case study structure above.
8. Prepare the 30-second and 90-second interview explanations.

