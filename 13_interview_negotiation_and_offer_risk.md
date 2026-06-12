# 13 — Interview, Negotiation and Offer-Risk Framework

## 1. Purpose and scope

This file defines a practical interview, negotiation and offer-risk framework for a Colombia-based Unity / Real-Time 3D / Technical Visualization candidate.

It is built around the source-of-truth profile established in previous files:

- Flagship project: **TwinSight X500**, a Unity WebGL technical-visualization thesis project.
- Positioning: Real-Time 3D / Unity Technical Artist / Technical Visualization / WebGL / CAD-to-realtime.
- Current legal position: Colombia-based remote contractor or employee through compliant hiring structure.
- Future mobility: Portuguese passport expected in approximately two years; Germany route possible through marriage and residence processing.
- Experience profile: strong portfolio evidence, limited formal industry experience.
- Languages: Spanish native; English C1 self-assessed; German not currently usable professionally.

This document is not legal, tax or immigration advice. It is an operational framework for interviews, negotiation, contract review and offer evaluation.

## 2. Source-quality audit of the Deep Research output

The Deep Research output was useful as a raw input, but not acceptable as a final section without correction.

### What was useful

- It identified common interview formats: screening, technical interview, take-home test, hiring-manager interview and offer stage.
- It surfaced representative Unity interview topics: GameObjects, components, `Update`, `FixedUpdate`, prefabs and colliders.
- It correctly separated employee and contractor negotiation issues.
- It highlighted red flags in remote offers.
- It connected salary anchoring to section 03 benchmarks.

### What required correction

- It repeated salary data that belongs primarily in section 03.
- It used some weak sources for interview patterns and red flags.
- It overstated some tax points, especially around IVA/exported services, which must be handled cautiously.
- It did not adequately separate role-family interview expectations.
- It did not provide a rigorous take-home test risk model.
- It did not give a structured offer-scoring model.
- It did not sufficiently address AI-assisted development disclosure.

### Corrective direction

This final version keeps the useful structure, removes weak generalizations, and organizes the section around the actual job-search process:

1. Interview evidence package.
2. Interview preparation by role family.
3. Technical proof expectations.
4. Take-home and unpaid-labor risk.
5. Negotiation logic.
6. Contractor and compliance risks.
7. AI-disclosure handling.
8. Offer evaluation.
9. Accept / counter / reject rules.

## 3. Candidate-specific interview positioning

The candidate should not enter interviews as a generic Unity developer, generic 3D artist or generalist full-stack developer.

The most defensible interview frame is:

> Real-Time 3D Developer / Unity Technical Artist focused on interactive technical visualization, CAD-to-realtime optimization, WebGL deployment and technical UI systems.

### Defensible claims

- Built a Unity WebGL interactive 3D technical visualization prototype for drone assembly understanding.
- Worked across CAD-to-realtime optimization, Unity integration, interaction systems, UI, visual modes and technical documentation.
- Used academic usability and workload metrics to evaluate the tool.
- Can explain asset optimization trade-offs, interaction design, WebGL constraints and validation methodology.
- Used AI as an implementation assistant while retaining technical judgment, debugging, integration and final ownership.

### Claims to avoid

- Do not claim senior industry experience.
- Do not claim shipped commercial product experience unless a client/product actually shipped.
- Do not claim current EU work authorization.
- Do not claim pure AI engineer / ML engineer profile.
- Do not claim Houdini FX TD ability unless a public reel proves it.
- Do not imply that all TwinSight code was handcrafted line-by-line without AI assistance if challenged directly.

## 4. Interview evidence package

Before applying or interviewing, the candidate should have a compact evidence package.

### Minimum evidence package

| Asset | Required state |
|---|---|
| Portfolio page | TwinSight case study public |
| Demo video | 60–120 seconds |
| GitHub README | Recruiter-readable |
| Screenshots | Clear UI and features |
| Metrics table | Triangles, SUS, NASA-TLX |
| Technical diagram | CAD-to-realtime pipeline |
| Role statement | Exact contribution stated |
| AI disclosure | Prepared but not overemphasized |

### Strong evidence package

The stronger version adds:

- WebGL live build or controlled video demo.
- Before/after optimization visuals.
- Interaction-system architecture diagram.
- WebGL constraints section.
- Mobile-performance discussion.
- One clean C# code sample.
- One editor-tool or automation sample.
- One concise technical breakdown on ArtStation or portfolio site.

## 5. Interview pipeline by role family

### 5.1 Unity Technical Artist

Likely interview focus:

- Unity rendering pipeline: URP, materials, Shader Graph, basic HLSL.
- Asset optimization: meshes, materials, textures, batching, draw calls, LODs.
- Art-to-engine integration.
- Debugging visual bugs.
- Technical communication between artists and programmers.
- Tooling or editor scripts.

Expected proof:

- Visual breakdown of TwinSight modes.
- CAD-to-realtime before/after examples.
- Explanation of optimization decisions.
- One shader or visual-mode breakdown.
- One example of bridging asset pipeline and runtime constraints.

Risk:

The profile is viable for optimization/runtime/integration technical art, but weaker for shader-heavy, Houdini-heavy or AAA pipeline roles.

### 5.2 Real-Time 3D Developer

Likely interview focus:

- C# architecture.
- Runtime interaction systems.
- Object selection, highlighting, isolation, camera controls.
- UI integration.
- Data-driven component panels.
- Performance profiling.
- WebGL deployment constraints.

Expected proof:

- TwinSight interaction system explanation.
- Technical UI architecture.
- Build constraints and optimization notes.
- Clear answer to “what did you program yourself?”

Risk:

The candidate must avoid sounding like a pure artist. The value proposition is technical implementation, interaction design and 3D systems.

### 5.3 Unity WebGL / Web 3D Developer

Likely interview focus:

- Unity WebGL build constraints.
- Memory limits and load time.
- Browser compatibility.
- Asset compression.
- Asynchronous loading.
- Deployment workflows.
- Front-end integration if the role involves React/Three.js.

Expected proof:

- WebGL build or video evidence.
- Explanation of WebGL limitations encountered.
- Asset-size and performance trade-offs.
- Understanding of mobile browser constraints.

Risk:

If the role is actually Three.js/WebGPU-heavy, TwinSight helps conceptually but does not fully prove the stack. The candidate should present Three.js/WebGPU as an adjacent skill only if supported by a small demo.

### 5.4 Technical Visualization / Digital Twin / Simulation Developer

Likely interview focus:

- Translating physical systems into interactive 3D representations.
- CAD-to-realtime workflow.
- Scene hierarchy and component relationships.
- Technical UI and metadata.
- Simulation vs visualization distinction.
- Data integration concepts.
- Usability for technical users.

Expected proof:

- TwinSight as the primary case study.
- Explanation of how 2D technical documentation becomes interactive 3D.
- Metrics and user-evaluation results.
- Clear limitation statement: TwinSight is not a physics-accurate digital twin unless real-time sensor/data integration exists.

Risk:

Do not overclaim “digital twin” if the system does not connect live operational data. Use “technical visualization” or “digital-twin-adjacent prototype” when necessary.

### 5.5 XR / AR / VR Developer

Likely interview focus:

- Unity XR stack.
- Spatial interaction.
- Performance constraints.
- Input systems.
- Comfort and usability.
- Platform SDKs.

Expected proof:

- TwinSight proves 3D interaction and technical visualization, not XR experience by itself.
- A small XR prototype would significantly improve credibility.
- If no XR artifact exists, position XR as adjacent, not primary.

Risk:

XR roles may require headset-specific experience. Without Meta Quest / OpenXR / AR Foundation artifacts, probability is lower.

### 5.6 Tools / Pipeline Developer

Likely interview focus:

- Automation mindset.
- Python scripting.
- Unity editor tooling.
- Asset processing.
- Naming, validation, import rules.
- Batch operations.
- Pipeline documentation.

Expected proof:

- ARA as secondary tooling evidence.
- Any Unity editor tools or scripts used in TwinSight.
- Before/after workflow reduction.
- Small public tool repo if possible.

Risk:

ARA supports tooling logic, but does not prove production art-pipeline engineering unless made stable, documented and demoable.

### 5.7 Python Automation / AI Tools / LLM Application Developer

Likely interview focus:

- Python architecture.
- API use.
- LangGraph or LLM orchestration.
- Error handling.
- Prompt/tool reliability.
- Data flow.
- Cost control.
- Evaluation.

Expected proof:

- ARA demo or README.
- Clear architecture diagram.
- Known limitations.
- No overclaiming as ML engineer.

Risk:

This route can dilute the main profile. It should be used for tools, research automation and technical workflow roles, not as a full AI engineer identity.

## 6. Technical question bank

This section is not intended for memorization. It defines categories that should be practiced with precise answers.

### Unity fundamentals

- What is a GameObject and how do components relate to it?
- Explain the Unity lifecycle: `Awake`, `Start`, `Update`, `FixedUpdate`, `LateUpdate`.
- When should `FixedUpdate` be used?
- What is a prefab and why does it matter in production?
- What are colliders and rigidbodies?
- How does Unity serialization work at a basic level?
- How do ScriptableObjects differ from MonoBehaviours?
- How would you structure object selection and highlighting?

### Performance and optimization

- How do you diagnose low FPS in Unity?
- What metrics do you check first: CPU, GPU, draw calls, batches, memory, textures, triangles?
- How would you optimize a CAD-imported scene?
- What is the difference between static batching, dynamic batching, GPU instancing and SRP batching?
- When should you use LODs?
- How do texture size and material count affect WebGL performance?
- What causes long load times in a browser build?
- How do you reduce memory pressure in Unity WebGL?

### Rendering and technical art

- What is URP and why use it?
- What can Shader Graph solve without custom HLSL?
- When is HLSL necessary?
- How would you implement X-Ray, ghosted, wireframe or blueprint visual modes?
- What are common shader performance problems?
- What makes a material setup maintainable?

### Technical visualization

- How do you transform technical documentation into an interactive 3D experience?
- What is the difference between product visualization, technical visualization, simulation and a digital twin?
- How would you organize part metadata?
- How would you design a component hierarchy for a complex assembly?
- How would you present uncertainty or non-physical visualization modes such as qualitative thermal overlays?

### WebGL / web deployment

- What are Unity WebGL constraints?
- How do browsers affect memory and performance?
- How would you optimize first-load experience?
- What is the difference between Unity WebGL and Three.js for web-based 3D?
- What should be tested on mobile browsers?

### Tools / pipeline

- What manual process would you automate first in a 3D pipeline?
- How would you validate imported assets?
- How would you batch-process hundreds of meshes or textures?
- How would you design a naming convention or asset audit tool?
- How would you document a pipeline for artists and engineers?

### AI tooling

- What problem does ARA solve?
- What are the failure modes of LLM-based automation?
- How do you evaluate the output of an AI tool?
- How do you avoid hallucinated citations or unverifiable claims?
- How do you control cost and retries in LLM workflows?

## 7. TwinSight interview narrative

### 60-second version

> TwinSight X500 is my thesis project: a Unity WebGL interactive 3D technical-visualization prototype for understanding the assembly of a Holybro X500 V2 drone. The goal was to move beyond static 2D documentation and help users understand spatial relationships between components. I worked on the Unity integration, interaction systems, UI, visual modes, CAD-to-realtime optimization and evaluation documentation. The project reduced heavy CAD geometry into a realtime-ready asset and was evaluated with usability and workload instruments.

### 2-minute version

The extended explanation should cover:

1. Problem: 2D documentation requires mental reconstruction.
2. Solution: interactive 3D inspection and assembly understanding.
3. Technical stack: Unity, WebGL, C#, URP, UI Toolkit, Blender pipeline.
4. Pipeline: CAD/STEP to optimized real-time asset.
5. Features: selection, isolation, exploded view, clipping, visual modes, part data.
6. Evaluation: SUS, NASA-TLX Raw, Think-Aloud.
7. Contribution: integration, systems, pipeline, documentation, debugging, AI-assisted implementation.
8. Limits: prototype, not shipped commercial product; not live IoT digital twin.

### Evidence statements

Use quantified claims only when they are in the thesis or portfolio material:

- CAD route above 6.5 million triangles reduced to 95,617 optimized triangles.
- 12 validation participants.
- SUS average: 91.88.
- NASA-TLX Raw: 8.69 for 3D viewer vs 19.89 for 2D support.
- 96 task-condition records.

## 8. Take-home test risk analysis

Take-home tests can be useful, but they carry unpaid-labor and scope-risk problems.

### Acceptable take-home test

| Criterion | Acceptable form |
|---|---|
| Scope | 2–4 hours maximum |
| Objective | Skill demonstration |
| Dataset | Toy or anonymized data |
| IP | Candidate retains portfolio rights if generic |
| Feedback | Some review or next step |
| Deadline | Reasonable, not overnight |

### Risky take-home test

| Risk | Signal |
|---|---|
| Free labor | Production-ready feature requested |
| Unbounded scope | “Spend as much time as needed” |
| IP capture | Company keeps all code with no compensation |
| No feedback | Auto-rejection after work |
| Vague evaluation | No criteria |
| Excessive urgency | 24-hour turnaround for complex task |

### Refusal or boundary script

Use a firm but neutral boundary:

> I’m comfortable completing a focused technical assessment. To keep it fair, I can spend up to 3–4 hours and provide a short README explaining decisions and trade-offs. If the task requires production-ready implementation beyond that scope, I’d prefer to treat it as a paid trial or reduce the deliverable.

### Paid-trial preference

For complex real company work:

> This looks close to a production task. I can do it as a paid trial with a defined scope, deliverables, IP terms and timeline.

## 9. Negotiation framework

### 9.1 Core negotiation principle

For international remote work from Colombia, the candidate should negotiate based on **gross contractor compensation**, not local Colombian employee salary.

A contractor must cover:

- taxes;
- social-security contributions;
- health insurance or EPS obligations;
- retirement/pension contributions;
- unpaid vacation;
- unpaid sick days;
- equipment;
- software subscriptions;
- currency conversion and transfer fees;
- accountant/legal support;
- bench time between contracts.

Therefore, the contractor rate must be higher than an equivalent employee salary.

### 9.2 Salary anchoring by market

Use section 03 as the primary salary source. This file should not replace it.

#### Practical anchor bands

| Target | Gross monthly | Typical route |
|---|---:|---|
| Floor | USD 1.5k | local/LATAM junior role |
| Base target | USD 3k | LATAM contractor / junior-strong remote |
| Strong target | USD 4k–6k | mid-junior contractor / niche Unity-WebGL |
| High target | USD 6k+ | US/EU contractor, digital twin, simulation, XR |

### 9.3 When asked “What are your salary expectations?”

Do not give a single number too early if the scope is unclear.

Recommended answer:

> It depends on scope, employment model and benefits. For a contractor arrangement, I usually evaluate the monthly gross range based on responsibilities, time commitment and whether the role is closer to Unity development, technical art, simulation or WebGL deployment. For a full-time contractor role, I would expect a range aligned with international remote Unity/real-time 3D roles rather than local Colombian payroll rates.

If pressed:

> For contractor work, my current target range is USD [X–Y] gross per month, depending on scope, exclusivity, payment terms and whether the work includes production ownership or exploratory prototyping.

### 9.4 Anchor ranges by priority

| Priority | Use case | Starting anchor |
|---|---|---:|
| A | US/EU technical visualization | USD 5k–7k+ |
| B | LATAM/global contractor | USD 3k–5k |
| C | local or fallback | USD 1.5k–3k |
| Paid trial | limited test | hourly/day rate |

These anchors must be adjusted after validating scope, seniority, hours and hiring model.

## 10. Contractor vs employee decision matrix

| Model | Advantages | Risks | Best use |
|---|---|---|---|
| Colombia contractor | fastest setup | taxes, no benefits | foreign remote clients |
| EOR employee | compliant payroll | employer cost | serious foreign employer |
| Local employee | stability | lower pay | bridge role |
| Freelance platform | fast entry | low trust, fees | small projects |
| EU employee | benefits, EU rights | future only | after passport/residence |
| German family route | work authorization path | paperwork | if relocation occurs |

### Contractor checklist

Before accepting a contractor role, verify:

- legal entity and signatory;
- payment currency;
- payment schedule;
- late payment clause;
- invoice requirements;
- IP ownership;
- confidentiality scope;
- non-compete scope;
- termination notice;
- exclusivity;
- equipment/software responsibility;
- allowed public portfolio mention;
- governing law;
- dispute resolution;
- tax documents required.

## 11. Colombia-specific remote-contracting risks

This section is high-level only. It must be confirmed with a Colombian accountant.

### Risk categories

| Risk | What to check |
|---|---|
| RUT | correct activity codes |
| Invoicing | DIAN electronic invoicing |
| IVA | export-service treatment |
| Retención | local vs foreign client |
| Social security | EPS, pension, ARL base |
| Currency | exchange and documentation |
| Tax residency | Colombian obligations |
| Misclassification | contractor vs employee behavior |

### Misclassification risk

A contractor relationship becomes riskier if the company controls:

- fixed schedule;
- daily supervision;
- mandatory exclusivity;
- company equipment only;
- internal hierarchy;
- long-term dependency;
- employee-like benefits without formal employment.

If the role behaves like employment, the company may need an EOR or local employment structure.

### Practical mitigation

Use a contract that states:

- independent contractor status;
- deliverables or services;
- invoicing procedure;
- autonomy of execution;
- no automatic employment benefits;
- clear payment terms;
- IP transfer only for paid deliverables.

## 12. EU move implications on compensation

### Current Colombia position

Current strongest route:

- remote contractor;
- foreign client;
- USD or EUR gross compensation;
- tax/social-security planning in Colombia.

### After Portuguese passport

Once the passport is issued, the candidate can legally state EU work authorization, but compensation depends on location and employment model.

Possible outcomes:

- EU employee salary may be lower gross than US contractor compensation.
- Benefits, healthcare and stability improve.
- Cost of living and tax burden may increase.
- EU work authorization improves probability for Germany, Portugal, Netherlands and EU-only remote roles.

### Germany through marriage/residence

If legally married and resident in Germany under the correct residence title, Germany becomes a realistic work market.

Implications:

- more local/hybrid opportunities;
- German language matters more;
- health insurance and tax obligations become significant;
- employer credibility improves because work authorization is clearer;
- net income may be lower than gross headline salary suggests.

### Recruiter-facing wording by state

| State | Accurate wording |
|---|---|
| Now | Colombia-based; available as remote contractor |
| Passport pending | EU citizenship expected in approximately two years, not current work authorization |
| Passport issued | EU citizen; authorized to work in EU/EEA |
| Germany residence | Authorized to work in Germany, if residence title grants it |
| Blue Card path | Would require sponsorship if used before EU citizenship |

## 13. AI-assisted development disclosure

AI use is not automatically disqualifying. Poor disclosure is the risk.

### Bad disclosure

Avoid:

> I used AI to build the project.

This sounds like lack of ownership.

### Better disclosure

Use:

> I used AI as an implementation assistant for iteration, code generation support and debugging. I was responsible for architecture decisions, integration, testing, debugging, technical judgment and final behavior.

### When asked “How much did you build yourself?”

Answer structure:

1. State ownership.
2. Separate AI assistance from engineering responsibility.
3. Explain a concrete decision you made.
4. Mention debugging and validation.
5. Offer to walk through code or architecture.

Example:

> The project was AI-assisted, but I owned the system design, Unity integration, debugging, interaction behavior, asset workflow decisions and final validation. I used AI the way many developers use autocomplete, documentation search or pair-programming support: as an accelerator, not as a replacement for technical judgment. I can walk through the interaction architecture and explain the decisions behind the pipeline.

### Evidence needed

To make the disclosure credible, prepare:

- architecture diagram;
- one code walkthrough;
- one debugging story;
- one performance trade-off;
- one limitation you identified independently;
- one feature you revised after testing.

## 14. Offer red flags

### Critical red flags

| Red flag | Risk |
|---|---|
| No written offer | unenforceable terms |
| Salary changes after interview | bait-and-switch |
| unpaid production task | free labor |
| asks for money | scam |
| unclear company identity | fraud |
| vague IP terms | portfolio/legal risk |
| unlimited non-compete | career restriction |
| 60+ day payment terms | cash-flow risk |
| crypto-only payment | compliance risk |
| “remote” but no country scope | work-authorization risk |

### Moderate red flags

- no technical interviewer;
- no clarity on reporting manager;
- unrealistic timeline;
- “we are like a family” language replacing contract clarity;
- no clear definition of done;
- no tool/license budget;
- no test device or hardware plan for XR/WebGL;
- “equity instead of pay” without legal documentation.

## 15. Offer evaluation scorecard

Use this scoring model before accepting any offer.

### Core scoring table

| Category | Weight | Score 1–5 |
|---|---:|---:|
| Role fit | 20% |  |
| Compensation | 20% |  |
| Remote legality | 15% |  |
| Portfolio leverage | 15% |  |
| Contract safety | 15% |  |
| Growth potential | 10% |  |
| Lifestyle/time-zone fit | 5% |  |

### Decision interpretation

| Weighted result | Decision |
|---|---|
| 4.2–5.0 | strong accept / negotiate upward |
| 3.5–4.1 | viable if terms are clean |
| 3.0–3.4 | negotiate or use as bridge |
| 2.5–2.9 | accept only if urgent |
| below 2.5 | reject |

### Minimum acceptance gates

Do not accept if any of these fail:

- no written contract;
- payment terms unclear;
- work authorization impossible;
- unpaid production task required;
- non-compete blocks future technical art/Unity work broadly;
- IP terms prevent portfolio use entirely without justification;
- expected compensation below survival/runway needs.

## 16. Counteroffer logic

### When to counter

Counter if:

- the role fit is strong;
- compensation is below market;
- contract terms are negotiable;
- company is responsive;
- there is no hard legal blocker.

### What to counter

Rank negotiation variables:

1. base cash compensation;
2. payment schedule;
3. scope/exclusivity;
4. paid trial terms;
5. contract length;
6. notice period;
7. portfolio permission;
8. equipment/software budget;
9. learning budget;
10. relocation or EOR support.

### Counteroffer template

> Thank you for the offer. The role is strongly aligned with my Unity and technical-visualization background, especially the work around [specific area]. Based on the scope, contractor structure and market ranges for remote Unity/real-time 3D work, I would be comfortable moving forward at USD [X] gross per month / USD [Y] per hour. I’m also open to discussing structure if there are constraints around salary, such as a paid trial, review after 60–90 days, or a software/equipment budget.

## 17. Interview preparation calendar

### Before first applications

- Prepare TwinSight 60-second pitch.
- Prepare TwinSight 2-minute technical explanation.
- Prepare AI-disclosure answer.
- Prepare salary-expectation answer.
- Prepare work-authorization answer.
- Prepare one C# code walkthrough.
- Prepare one optimization story.

### Weekly technical practice

| Area | Frequency |
|---|---:|
| C# / Unity fundamentals | 2× week |
| Unity profiling / optimization | 1× week |
| WebGL constraints | 1× week |
| Technical art / rendering | 1× week |
| Portfolio walkthrough | 2× week |
| Mock interview in English | 1× week |

### Before each interview

- Re-read job description.
- Map role requirements to TwinSight evidence.
- Prepare three project-specific examples.
- Check company remote scope.
- Prepare compensation range.
- Prepare five questions for interviewer.

## 18. Questions to ask employers

### Technical role clarity

- What are the main technical problems this role needs to solve in the first 90 days?
- Is the role more runtime development, technical art, pipeline tooling or visualization?
- What platforms are targeted: desktop, web, mobile, XR or embedded?
- What are the current performance constraints?
- What is the current asset pipeline?

### Remote and contract clarity

- Is the role open to Colombia-based contractors?
- Do you hire through direct B2B, contractor platform or EOR?
- What countries are eligible for remote work?
- Are working hours fixed or overlap-based?
- What is the payment schedule?

### Offer safety

- What is the governing law of the contract?
- Are there exclusivity or non-compete clauses?
- Who owns tools or reusable scripts created during the engagement?
- Can selected non-confidential work be shown in a portfolio?
- What is the notice period?

## 19. Role-specific proof checklist

| Role | Must show |
|---|---|
| Unity Technical Artist | optimization, visual modes, materials, pipeline |
| Real-Time 3D Developer | interaction architecture, C#, runtime systems |
| Unity WebGL Developer | WebGL build, memory/load constraints |
| Technical Visualization | CAD-to-realtime, metadata, user tasks |
| Digital Twin / Simulation | physical-system reasoning, data limitations |
| XR Developer | XR prototype or strong adjacent proof |
| Tools Developer | automation artifact, editor tooling, Python |
| AI Tools Developer | ARA demo, architecture, reliability limits |

## 20. Final operational rules

- Use TwinSight as the interview anchor.
- Use ARA only when the role includes tooling, automation or AI workflows.
- Do not lead with Blender portrait unless applying to 3D-art-adjacent roles.
- Do not negotiate against Colombian local rates for international contractor roles.
- Do not accept undefined “remote” terms.
- Do not complete production-grade unpaid tests.
- Do not sign broad non-competes without review.
- Do not overstate EU work authorization before the Portuguese passport or German residence status is real.
- Do not hide AI assistance if directly asked; frame it as engineering acceleration with ownership.

## 21. Source reference list

Primary source categories used in this section:

- Internal Revenue Service — guidance on employee vs independent-contractor tax treatment: https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee
- Lemon.io Unity developer hourly-rate report: https://lemon.io/rate-calculator/unity-developers/
- Freelancermap Unity developer role and salary reference: https://www.freelancermap.com/blog/es/que-hace-programador-unity/
- Adaface Unity interview question examples: https://www.adaface.com/es/blog/unity-preguntas-entrevista/
- Tokio School interview-format reference: https://www.tokioschool.com/noticias/entrevista-tecnica/
- Colombia contractor and remote-hiring administrative context from section 03.
- EU / Portugal / Germany authorization context from section 04.
- Role-family prioritization from section 02.
- Portfolio and project-evidence structure from sections 07–10.
