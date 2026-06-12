# 35_interview_defense_and_technical_screen_system

## 0. Module status

```text
Module: 35_interview_defense_and_technical_screen_system.md
Date generated: 2026-06-12
Status: Complete v1
Purpose: Interview defense system for Unity WebGL / Real-Time 3D / Technical Visualization roles
Inputs: 08B, 17, 18, 19B, 20B, 21B, 23, 24, 30, 31, 32, 33, 34
Use: interview preparation, recruiter screens, technical screens, project defense, salary/contractor conversations
```

---

# 1. Purpose

This module prepares Alexander to defend his profile in interviews for:

```text
Unity WebGL Developer
Real-Time 3D Developer
Unity Technical Artist
Technical Visualization Developer
Interactive 3D Developer
XR-adjacent Unity Developer
Simulation Visualization Developer
LATAM remote Unity contractor
```

The main risk is not lack of project evidence. The main risk is failing to explain the evidence clearly under interview pressure.

This system gives:

- concise answers;
- technical defense points;
- risk-control language;
- technical screen preparation;
- behavioral answer patterns;
- AI-assisted workflow disclosure;
- contractor/remote readiness answers;
- red-flag handling.

---

# 2. Interview positioning baseline

## 2.1 Default professional identity

Use this as the baseline identity:

```text
I’m a Real-Time 3D Developer / Unity Technical Artist focused on Unity WebGL, C#, CAD-to-realtime optimization and interactive technical visualization.
```

## 2.2 Default project anchor

Use TwinSight as the anchor project:

```text
My flagship project is TwinSight X500, a Unity WebGL technical visualization prototype for drone assembly inspection. It converts CAD-derived drone assets into an optimized browser-based 3D viewer with component selection, exploded view, cross-section tools, visual modes, technical UI panels and usability/workload evaluation.
```

## 2.3 Default credibility frame

```text
I have limited formal industry experience in Unity, but I built TwinSight to demonstrate the relevant skills directly: Unity/C# implementation, WebGL deployment, CAD-to-realtime optimization, runtime interaction systems, technical UI, visual modes and structured evaluation.
```

## 2.4 What not to lead with

Do not open with:

```text
I am a student with no experience.
I used AI heavily.
This was only a thesis.
I am trying to get into any tech role.
I can learn anything.
```

Lead with evidence, then clarify limitations.

---

# 3. 30-second pitch

## 3.1 General version

```text
I’m a Real-Time 3D Developer / Unity Technical Artist focused on Unity WebGL and technical visualization. My flagship project is TwinSight X500, a browser-based Unity prototype for drone assembly inspection. It includes component selection, exploded view, clipping tools, visual modes, technical UI, CAD-to-realtime optimization and evaluation with SUS and NASA-TLX. I’m targeting remote roles where interactive 3D, optimization and technical visualization are useful.
```

## 3.2 Unity WebGL version

```text
I build browser-based interactive 3D experiences with Unity WebGL. My main project, TwinSight X500, turns CAD-derived drone geometry into an optimized WebGL viewer with selection, exploded view, clipping, visual modes and technical information panels. The project demonstrates Unity, C#, WebGL deployment, UI Toolkit and performance-aware asset preparation.
```

## 3.3 Technical Artist version

```text
My strongest technical-art proof is TwinSight X500: a Unity WebGL technical visualization prototype with CAD-to-realtime optimization, visual inspection modes, clipping, exploded view and technical UI. It shows my ability to bridge 3D asset preparation, runtime systems, visual readability and performance constraints.
```

## 3.4 Technical Visualization version

```text
I focus on interactive 3D tools for technical visualization. TwinSight X500 was built to address a specific problem: static 2D drone assembly documentation makes spatial relationships harder to understand. The solution is a browser-based Unity viewer where users can inspect parts, reveal assembly structure and compare visual modes interactively.
```

---

# 4. 2-minute project explanation

Use this when asked:

```text
Tell me about your main project.
```

## Answer

```text
TwinSight X500 is a Unity WebGL technical visualization prototype for inspecting the assembly of a Holybro X500 V2 drone.

The problem was that static 2D assembly documentation forces users to mentally reconstruct spatial relationships between components, orientations and hidden structures. I wanted to test whether an interactive 3D viewer could support understanding more directly.

Technically, the project involved transforming CAD-derived drone geometry into an optimized real-time WebGL asset, organizing components for selection, implementing runtime interaction systems in Unity/C#, building technical UI panels with UI Toolkit, and adding features like exploded view, clipping/cross-section inspection and multiple visual modes.

The project was also evaluated as an academic prototype using SUS, NASA-TLX Raw and Think-Aloud methods. The formative results suggested high perceived usability and lower perceived workload for the 3D viewer condition compared with 2D support in the tested tasks.

For me, the value of the project is that it demonstrates the full pipeline: CAD-to-realtime optimization, Unity WebGL, runtime interaction, technical UI, technical visualization and evaluation.
```

---

# 5. Project defense: TwinSight questions

## 5.1 What problem were you solving?

```text
The core problem was spatial understanding. Drone assembly documentation is often shown through 2D diagrams, part lists and written instructions. Users must mentally reconstruct how components relate in 3D space. TwinSight addresses that by turning the drone assembly into an interactive 3D viewer where users can select parts, see hierarchy through exploded view, cut through geometry and inspect technical information directly in context.
```

## 5.2 Why Unity WebGL?

```text
Unity gave me a mature real-time 3D environment for interaction systems, visual modes, UI and asset organization. WebGL was important because the prototype needed to run in the browser without requiring a local install. That made it more accessible for evaluation and more aligned with technical visualization tools that need to be shared easily.
```

## 5.3 Why not Three.js?

```text
Three.js would also be valid for browser-based 3D. I chose Unity WebGL because my project needed a real-time engine workflow with scene hierarchy, interaction systems, UI Toolkit, rendering modes and a pipeline closer to Unity technical-art and real-time visualization roles. For this portfolio direction, Unity was the stronger strategic fit.
```

## 5.4 Is it a digital twin?

```text
I would describe it as digital-twin-adjacent, not a full production digital twin. It represents a real physical drone assembly in interactive 3D, but it does not currently include live sensor data, operational state synchronization, predictive maintenance or real-time telemetry. The current scope is technical visualization and assembly inspection.
```

## 5.5 Is it a simulation?

```text
It is not a physics simulation. It is an interactive technical visualization prototype. It simulates inspection workflows visually, but it does not simulate drone physics, structural loads, heat transfer or flight behavior.
```

## 5.6 What was the hardest technical part?

```text
The hardest part was balancing technical readability with WebGL constraints. CAD-derived geometry can be too heavy for browser deployment, so the challenge was preserving enough visual detail for inspection while reducing geometry and organizing the model into selectable components. The second challenge was coordinating multiple runtime states: selection, exploded view, clipping, visual modes and UI panels.
```

## 5.7 What would you improve next?

```text
I would improve three areas. First, I would deepen the metadata system so each component has richer technical information. Second, I would add guided assembly steps and search/filter tools. Third, I would explore WebGPU, XR inspection or sensor-state integration as future extensions, while keeping the current version honest as a WebGL technical visualization prototype.
```

---

# 6. CAD-to-realtime optimization defense

## 6.1 Explain the CAD pipeline

```text
The project started from CAD-derived geometry that was not suitable for direct real-time use. I inspected different conversion/tessellation routes, cleaned and optimized the assets in Blender, organized the model into logical components and prepared the geometry for Unity WebGL. The goal was not to preserve every CAD detail, but to preserve the visual information needed for assembly inspection while making the model usable in a browser.
```

## 6.2 Explain the triangle reduction

```text
The source routes exceeded 6.5M triangles in some forms, while the optimized runtime model was reduced to 95,617 triangles. I treat that as a portfolio and academic-prototype optimization metric, not as a production benchmark. The main point is that I could transform heavy CAD-derived data into a WebGL-ready inspection model while preserving component readability.
```

## 6.3 What did you decide to keep or remove?

```text
I prioritized silhouette, component identity, assembly relationships and features needed for inspection. I removed or simplified geometry that did not contribute to understanding the assembly, especially excessive tessellation or internal details that would not be visible or useful in the final viewer.
```

## 6.4 How did you handle fasteners?

```text
Fasteners were treated as modular repeated elements where possible. The goal was to avoid treating every screw as a unique asset when repeated geometry could be handled more efficiently. For a future production version, I would further standardize fastener families, metadata and instancing.
```

## 6.5 What would you do differently in a production pipeline?

```text
In production I would formalize the optimization pipeline more strictly: asset naming rules, automated validation, LOD strategy, texture budgets, profiler targets, versioned exports, and clearer handoff between CAD, DCC tools and Unity. I would also define target device constraints earlier.
```

---

# 7. Unity / C# technical screen defense

## 7.1 Runtime systems to explain

Be ready to explain:

```text
selection system
highlighting
camera/navigation
exploded-view state
clipping controller
visual-mode manager
UI Toolkit panels
part metadata
WebGL build configuration
```

## 7.2 Explain selection system

```text
The selection system connects user input to selectable drone components. When a part is selected, the viewer updates highlighting and displays contextual technical information in the UI. The important design point is separating the selectable component identity from the visual feedback and metadata presentation.
```

## 7.3 Explain exploded view

```text
The exploded view is a state-based transformation of assembly components. Instead of random separation, each component or group needs a defined offset direction and target position so the assembly remains understandable. The value is preserving spatial logic while making component relationships visible.
```

## 7.4 Explain clipping

```text
The clipping tool allows the user to cut through the model visually to inspect hidden structures. In Unity this can be handled through shader/material logic or clipping plane approaches depending on the implementation. The goal is not destructive geometry editing, but runtime visual inspection.
```

## 7.5 Explain visual modes

```text
The visual modes are inspection states that change how the model is rendered or interpreted visually. Some modes support readability, like realistic and solid modes. Others expose structure, like X-ray, ghosted, blueprint or wireframe modes. The thermal-style mode is qualitative only; it is not a physical simulation.
```

## 7.6 Explain UI Toolkit usage

```text
UI Toolkit was used to structure technical panels and interaction controls in a way that could support a more app-like interface. The interface needed to display component data while keeping the 3D inspection workflow visible.
```

## 7.7 Possible technical questions

| Question | Answer direction |
|---|---|
| How do you avoid coupling UI and model logic? | separate component metadata, selection state and UI rendering |
| How do you optimize for WebGL? | geometry reduction, texture budget, draw calls, loading, UI simplicity |
| How do you manage visual modes? | central mode manager, materials/shaders/states |
| How do you debug WebGL builds? | browser console, Unity logs, simplified repro scenes |
| How do you handle large models? | split hierarchy, optimize mesh, instancing, LOD, compression |
| How do you scale to multiple products? | metadata schema, import pipeline, prefab conventions |

---

# 8. WebGL constraints defense

## 8.1 What are WebGL constraints?

```text
WebGL deployment imposes stricter constraints than desktop builds: memory, loading time, browser compatibility, build size, shader support, compression, UI readability and runtime performance. For technical visualization, the challenge is making the experience accessible without sacrificing the core inspection value.
```

## 8.2 How did you address WebGL constraints?

```text
I focused on geometry optimization, reducing unnecessary CAD detail, organizing the scene hierarchy, keeping the UI readable and designing the interaction around core inspection tasks rather than adding unnecessary features. The project is still a prototype, so further profiling and build optimization would be part of the next step.
```

## 8.3 If asked about FPS/performance

Use only measured values if available.

If not final:

```text
The project was optimized around browser feasibility and reduced geometry, but I would avoid claiming final production performance until I run a complete profiling pass across target devices and browsers.
```

## 8.4 If asked about mobile

```text
The UI logic was designed with mobile-first constraints in mind, especially through bottom-sheet interaction patterns. However, final mobile performance and usability would require dedicated device testing before claiming production readiness.
```

---

# 9. Technical art / shader defense

## 9.1 How strong is your shader experience?

```text
My current shader/technical-art proof is strongest in visual inspection modes and material/render-state logic inside TwinSight. I would not claim to be a senior shader engineer. My strength is applying rendering and visual-mode techniques to improve technical readability in real-time 3D.
```

## 9.2 Explain visual modes as technical art

```text
The visual modes are not just aesthetic. They support different inspection tasks. For example, ghosted or X-ray-like views help reveal internal relationships, wireframe helps communicate structure, and blueprint-style rendering supports a technical drawing aesthetic. The design goal is visual readability for technical understanding.
```

## 9.3 If asked about URP/HDRP

```text
TwinSight is aligned with URP/WebGL constraints rather than high-end HDRP rendering. For browser deployment, URP is a more practical fit because it supports lightweight rendering and broad platform compatibility.
```

## 9.4 If asked about Shader Graph

```text
Shader Graph is useful for building and iterating visual modes without writing every shader manually. For deeper production shader work, I would still need to validate performance, compatibility and fallback behavior, especially for WebGL.
```

---

# 10. Evaluation defense

## 10.1 Why SUS and NASA-TLX?

```text
SUS provided a standardized usability measure, while NASA-TLX Raw helped capture perceived workload. Since the project compares interactive 3D support with 2D support for assembly-understanding tasks, both usability and workload were relevant.
```

## 10.2 What were the results?

```text
The formative evaluation involved 12 participants and 96 task-condition records. The SUS average was 91.88. NASA-TLX Raw was 8.69 for the 3D viewer condition and 19.89 for the 2D support condition.
```

## 10.3 What can you claim from the evaluation?

```text
I can claim that, in the tested tasks and sample, the prototype showed high perceived usability and lower perceived workload for the 3D viewer condition compared with 2D support. I would not claim universal superiority of 3D documentation based on this sample.
```

## 10.4 What are the limitations?

```text
The sample size was limited and academic. The evaluation was formative, not a large-scale industrial validation. It supports the portfolio and thesis argument, but it should not be overgeneralized as proof of production impact.
```

---

# 11. AI-assisted workflow defense

## 11.1 Short answer

```text
I used AI assistance as an implementation and iteration support tool. Final architecture decisions, debugging, Unity integration, asset preparation, evaluation design, documentation and project ownership remained my responsibility.
```

## 11.2 More detailed answer

```text
AI helped me accelerate parts of implementation and problem-solving, especially when exploring code structure or debugging options. But I still had to decide the architecture, integrate the systems in Unity, test behavior, adapt code to the actual project, prepare assets, validate the build and document the work. I see AI as a productivity tool, not a replacement for technical ownership.
```

## 11.3 If challenged: can you work without AI?

```text
Yes. AI can accelerate iteration, but it does not remove the need to understand the system. In a production environment I would follow the team’s policy on AI usage. My priority would be maintainable code, clear documentation and reproducible decisions, whether AI is allowed or not.
```

## 11.4 If asked what AI generated

```text
I would separate it by category: code assistance, debugging suggestions, documentation support and planning. I would not describe AI as the author of the project. The integration, testing, adaptation and final decisions were mine.
```

## 11.5 Avoid

Do not say:

```text
AI did most of the code.
I just prompted.
I do not fully understand the code.
I can only work with ChatGPT.
```

---

# 12. Limited formal experience defense

## 12.1 Main answer

```text
I have limited formal industry experience in Unity, but I built my portfolio around production-adjacent proof rather than only coursework. TwinSight demonstrates Unity/C#, WebGL deployment, CAD-to-realtime optimization, technical UI, visual modes, runtime interaction systems and structured evaluation. I’m applying to roles where that evidence is directly relevant and where I can grow inside a real production team.
```

## 12.2 If asked why they should hire you

```text
Because I can bring a strong technical-visualization foundation, real Unity/WebGL project evidence and the ability to learn production workflows quickly. I’m not positioning myself as a senior developer. I’m positioning myself as a strong junior-to-mid candidate for interactive 3D and technical visualization work, with a serious flagship project and clear documentation.
```

## 12.3 If asked about shipped titles

```text
I do not have shipped commercial Unity titles yet. My strongest proof is TwinSight X500, which is a portfolio/academic prototype with real implementation, optimization, interaction systems and evaluation. For roles that require shipped game titles specifically, I understand that is a gap. For technical visualization or interactive 3D roles, TwinSight is more directly relevant.
```

---

# 13. Behavioral interview system

## 13.1 STAR format

Use:

```text
Situation
Task
Action
Result
```

Keep answers short.

## 13.2 Core stories to prepare

| Story | Use |
|---|---|
| CAD optimization challenge | technical problem-solving |
| WebGL constraint management | engineering judgment |
| AI-assisted workflow | transparency |
| thesis evaluation | research/evidence |
| project procrastination recovery | resilience, if framed carefully |
| learning Unity/technical systems | growth |
| handling feedback from advisor/users | collaboration |
| prioritizing scope | product judgment |

## 13.3 Story: CAD optimization

```text
Situation: The drone source geometry was too heavy for browser-based real-time use.
Task: Preserve assembly readability while reducing complexity.
Action: I explored conversion routes, cleaned and optimized the geometry, organized components and prepared the model for Unity WebGL.
Result: The runtime model reached 95,617 triangles while preserving component-level inspection value.
```

## 13.4 Story: evaluation

```text
Situation: I needed to test whether the 3D viewer was usable and whether it could reduce workload compared with 2D support.
Task: Design a formative evaluation.
Action: I used SUS, NASA-TLX Raw and Think-Aloud with 12 participants and structured task-condition records.
Result: The viewer condition showed high perceived usability and lower perceived workload in the tested tasks.
```

---

# 14. Technical screen preparation

## 14.1 Unity topics to review

```text
C# basics and OOP
MonoBehaviour lifecycle
ScriptableObjects
events/delegates
raycasting
materials/renderers
camera controls
UI Toolkit basics
prefab organization
build settings
WebGL constraints
profiling basics
```

## 14.2 Technical art topics to review

```text
URP basics
Shader Graph basics
material instances
render queues
transparency issues
wireframe/outline approaches
X-ray/ghosted visualization logic
optimization budgets
draw calls
triangles vs vertices
texture sizes
LOD and instancing
```

## 14.3 WebGL topics to review

```text
memory limits
build size
compression
browser compatibility
WebGL debugging
loading times
texture compression
single-thread limitations
mobile browser constraints
```

## 14.4 CAD-to-realtime topics to review

```text
tessellation
mesh cleanup
decimation
retopology
normal baking
UVs
scale/origin consistency
hierarchy organization
metadata mapping
performance budgeting
```

## 14.5 Evaluation topics to review

```text
SUS
NASA-TLX Raw
Think-Aloud
formative evaluation
sample limitations
task design
qualitative observations
```

---

# 15. Whiteboard / live screen risks

## 15.1 Likely technical exercises

| Exercise | Preparation |
|---|---|
| explain project architecture | use diagram from 08B |
| debug selection logic | review raycasting / event flow |
| optimize scene | discuss mesh, materials, draw calls |
| implement simple interaction | practice Unity/C# |
| explain shader mode | prepare visual-mode breakdown |
| review code | keep repo readable |
| portfolio walkthrough | rehearse 5-minute demo |

## 15.2 If you do not know

Use:

```text
I do not know the exact answer off the top of my head, but I would approach it by isolating the system, reproducing the issue, checking Unity logs/profiler data, simplifying the scene and validating one variable at a time.
```

Do not bluff.

---

# 16. Remote contractor interview answers

## 16.1 Availability

```text
I am based in Colombia and available for remote contractor work with international teams. I can overlap with LATAM, North American and some European schedules depending on the project cadence.
```

## 16.2 Work style

```text
I work best with clear milestones, documented requirements, short feedback loops and visible progress through demos or pull requests. For 3D/Unity work, I prefer sharing playable builds or short screen captures regularly.
```

## 16.3 Communication

```text
I can communicate in English and Spanish. For remote work, I rely on written summaries, task tracking, async updates and periodic calls to avoid ambiguity.
```

## 16.4 Contractor setup

```text
I am open to contractor/B2B arrangements. For legal and tax details, I would follow the required Colombian invoicing and social security obligations and align with the client’s payment process.
```

Do not give legal/tax advice in interviews.

---

# 17. Salary / compensation defense

## 17.1 If asked expected compensation early

```text
I would like to understand the role scope, seniority expectations, contract structure and time commitment before giving a final number. For remote contractor roles, I’m targeting compensation aligned with LATAM international Unity work and the technical scope of the project.
```

## 17.2 If pressed for a range

Use a researched internal range, not random numbers.

```text
For full-time remote contractor work, depending on scope and seniority, I would generally evaluate opportunities in the USD 1.5k–3k/month entry range, USD 3k–6k/month strong range, and higher for more specialized or senior-level responsibilities.
```

Adapt to the actual role.

## 17.3 Do not say

```text
I will accept anything.
I do not know.
I just need experience.
```

---

# 18. Role-specific defense

## 18.1 Unity Technical Artist

Emphasize:

```text
visual modes
CAD optimization
URP/WebGL constraints
technical UI
performance-aware asset preparation
```

Avoid overclaiming:

```text
senior shader engineering
AAA production pipelines
advanced VFX
```

## 18.2 Unity WebGL Developer

Emphasize:

```text
browser deployment
WebGL constraints
runtime interaction
UI readability
optimized assets
```

Avoid:

```text
full-stack web claims
large-scale backend
```

## 18.3 Real-Time 3D Developer

Emphasize:

```text
interactive 3D systems
Unity/C#
camera/selection/clipping
runtime state management
technical visualization
```

Avoid:

```text
pure gameplay claims
```

## 18.4 Technical Visualization Developer

Emphasize:

```text
spatial understanding
assembly inspection
CAD-to-realtime
technical UI
evaluation
```

Avoid:

```text
production digital twin claims
```

## 18.5 XR Developer

Emphasize:

```text
3D interaction
technical training potential
spatial UI
future XR extension
```

Avoid:

```text
claiming shipped VR production
```

---

# 19. Questions to ask interviewers

## 19.1 Technical questions

```text
What is the target platform for your Unity/3D applications?
How do you currently handle asset optimization for real-time delivery?
Do you have existing technical-art or pipeline standards?
What are the main performance constraints?
How are builds reviewed or tested?
```

## 19.2 Product questions

```text
What user problem does the 3D experience need to solve?
Is the goal training, inspection, simulation, sales, configurator, or operations?
What metrics define success for the project?
```

## 19.3 Remote work questions

```text
How does the team handle async communication?
What timezone overlap is expected?
How are milestones and reviews structured?
```

## 19.4 Avoid early questions

Avoid leading with:

```text
vacation
benefits
how soon can I get promoted
can I work very little overlap
```

Ask compensation and contract questions after scope is clear.

---

# 20. Interview preparation checklist

## 20.1 Before interview

```text
[ ] review job posting
[ ] identify role family
[ ] choose 3 relevant TwinSight points
[ ] open portfolio link
[ ] open GitHub README
[ ] prepare demo video link
[ ] review AI-assisted answer
[ ] review digital twin limitation answer
[ ] prepare compensation range
[ ] prepare 3 questions
```

## 20.2 During interview

```text
[ ] lead with evidence
[ ] answer directly
[ ] do not overexplain
[ ] use specific metrics
[ ] clarify limitations
[ ] ask role-specific questions
[ ] take notes
```

## 20.3 After interview

```text
[ ] send thank-you/follow-up within 24 hours
[ ] update tracker
[ ] record objections/questions
[ ] update answer bank
[ ] prepare next-step material
```

---

# 21. Post-interview follow-up

## 21.1 Template

```text
Hi [Name],

Thank you for the conversation today. I appreciated learning more about [role/company/project].

As discussed, here are the main links for TwinSight X500:
- Portfolio case study: [link]
- GitHub: [link]
- Demo video: [link]

The project is most relevant to the role through Unity WebGL, C# runtime interaction, CAD-to-realtime optimization, technical UI, visual modes and usability/workload evaluation.

Best,
Alexander
```

## 21.2 If technical topic was unclear

```text
I also wanted to clarify one point from the interview: [brief clarification]. My current implementation handles [specific], and if I were extending it for production I would approach [specific] by [method].
```

---

# 22. Red flag handling

## 22.1 If they want senior experience

```text
I understand that the role may require more production experience than I currently have. My strongest value is in Unity WebGL, technical visualization and CAD-to-realtime workflows. If the team has room for a junior-to-mid profile with strong project evidence, I believe TwinSight is directly relevant.
```

## 22.2 If they want shipped games

```text
I do not have shipped commercial game titles yet. My portfolio is stronger in technical visualization than gameplay production. If the role is strictly shipped-game focused, I may not be the strongest fit. If it involves real-time 3D tools, visualization, optimization or technical UI, TwinSight is much more aligned.
```

## 22.3 If they question Colombia remote

```text
I am based in Colombia and can work remotely with international teams. I can align with agreed timezone overlap and contractor processes. I prefer clear milestones, async updates and frequent build/demo reviews.
```

## 22.4 If they question formal degree status

```text
My thesis project is complete and pending defense. The project itself is already at the portfolio stage, and I can share the case study, demo and technical documentation.
```

---

# 23. Self-evaluation after each interview

Score from 1 to 5.

| Area | Score |
|---|---:|
| Explained TwinSight clearly | 1–5 |
| Defended technical choices | 1–5 |
| Handled AI question | 1–5 |
| Handled experience gap | 1–5 |
| Asked good questions | 1–5 |
| Avoided overclaiming | 1–5 |
| Maintained concise answers | 1–5 |
| Follow-up sent | yes/no |

## Improvement note

After each interview, write:

```text
What question surprised me?
Where did I overexplain?
Where did I sound weak?
What proof should I add to portfolio?
What answer should I rehearse?
```

---

# 24. Immediate preparation tasks

Before the first serious interview:

```text
[ ] memorize 30-second pitch
[ ] memorize 2-minute TwinSight explanation
[ ] prepare AI-assisted answer
[ ] prepare digital-twin-adjacent answer
[ ] prepare limited-experience answer
[ ] review CAD optimization explanation
[ ] review Unity architecture explanation
[ ] prepare portfolio walkthrough
[ ] prepare 3 questions for employer
[ ] prepare follow-up template
```

---

# 25. Next module

Proceed with:

```text
36_public_profile_launch_sequence.md
```

## Tool recommendation

| Tool | Use |
|---|---:|
| Agent mode | No |
| Deep Research | No |

## Purpose

Create the exact launch sequence for making the public proof package visible:

```text
portfolio publish
GitHub update
LinkedIn update
ArtStation update
demo video upload
README links
Featured section
first LinkedIn post
tracker link update
```
