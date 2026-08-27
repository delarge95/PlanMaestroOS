<!-- chunk
id: en-curated-realtime-graphics-glossary
topic: english-tech
tags: realtime, shaders, draw-calls, gpu-instancing, culling, mipmapping
section: technical-vocabulary-realtime-graphics
entities: tech:shader, tech:draw-call, tech:gpu-instancing, tech:frustum-culling
rules: en-vocab-realtime-graphics
-->
en-vocab-realtime-graphics: Specialized Real-Time & 3D Graphics Engineering Terminology (B2/C1): 1) **Core Rendering Primitives:** *Shader* (GPU compute/pixel program), *Draw Call* (CPU command issuing primitive rendering), *GPU Instancing* (rendering multiple mesh copies via single draw call without CPU dispatch stalls). 2) **Optimization & Culling:** *Frustum Culling* (discarding geometry outside camera viewing pyramid), *Occlusion Culling* (skipping obscured objects), *Mipmapping* (pre-filtered downscaled texture hierarchies eliminating aliasing and conserving cache bandwidth). 3) **Performance Budgets:** *Frame Budget* (e.g., $16.6\text{ ms}$ for 60 FPS, $11.1\text{ ms}$ for 90 FPS VR targets).

<!-- chunk
id: en-curated-web-and-ai-tooling-glossary
topic: english-tech
tags: web-architecture, hydration, tree-shaking, vector-embeddings, rag, latency
section: technical-vocabulary-web-and-ai
entities: tech:hydration, tech:dead-code-elimination, tech:embeddings, tech:rag-pipeline
rules: en-vocab-web-and-ai
-->
en-vocab-web-and-ai: Modern Web Architecture and AI Systems Engineering Terminology: 1) **Web Performance:** *Hydration* (attaching client-side event handlers to server-rendered HTML DOM), *Tree Shaking / Dead Code Elimination* (stripping unused export modules during compilation), *Bundle Budget* (payload size constraint). 2) **AI Tooling & Automation:** *Vector Embeddings* (high-dimensional dense vectors encoding semantic relationships), *RAG Pipeline* (Retrieval-Augmented Generation for grounded factual retrieval), *Inference Latency* (roundtrip time for model response generation).

<!-- chunk
id: en-curated-unity-3d-glossary
topic: english-tech
tags: unity, prefabs, navmesh, rigging, ik, colliders, addressables
section: technical-vocabulary-unity-3d
entities: tech:prefab, tech:blend-tree, tech:navmesh, tech:inverse-kinematics
rules: en-vocab-unity-3d
-->
en-vocab-unity-3d: Unity / 3D Pipeline Terminology (B2/C1): 1) **Authoring & Reuse:** *Prefab* (reusable GameObject template propagating changes to all instances), *ScriptableObject* (shared data container decoupled from scenes), *Addressables / Asset Bundle* (asynchronous asset delivery by address). 2) **Animation & Characters:** *Blend Tree* (parameter-driven interpolation between related clips), *Rigging* (skeletal bone/joint construction), *Skinning* (per-vertex weights binding mesh to skeleton), *Inverse Kinematics* (joint rotations solved from end-effector position). 3) **Physics & Navigation:** *Collider* (boundary shape for collision detection), *Rigidbody* (force/gravity-driven body), *Raycast* (ray intersection query), *NavMesh* (walkable-surface graph for AI pathfinding).

<!-- chunk
id: en-curated-performance-culture
topic: english-tech
tags: profiling, frame-budget, bottleneck, fillrate, overdraw, optimization-workflow
section: technical-vocabulary-profiling-and-budgets
entities: tech:frame-budget, tech:bottleneck, tech:overdraw, tech:fillrate
rules: en-vocab-realtime-graphics
-->
en-vocab-profiling: Profiling & Performance Culture Terminology: 1) **Budgets & Targets:** *Frame Budget* (max ms per frame to hold refresh target), *Frame time* (measured per-frame cost in ms). 2) **Cost Hotspots:** *Bottleneck* (stage restricting throughput — CPU vs GPU bound), *Overdraw* (same pixel shaded multiple times per frame), *Fillrate* (pixel/fragment throughput ceiling on mobile GPUs). 3) **Process Language:** describing measurements ("profiling revealed...", "we reduced draw calls by X%") and trade-off framing ("at the cost of slight motion blur").

<!-- chunk
id: en-curated-agile-business-communication
topic: english-business
tags: agile, standups, sprint-planning, blockers, bandwidth, trade-offs
section: agile-business-scenarios
entities: business:blocker, business:bandwidth, business:trade-off, business:scope-creep
rules: en-agile-communication-patterns
-->
en-agile-communication-patterns: High-Stakes Agile Business Communication & Standup Patterns: 1) **Daily Standup Cadence:** Crisp structure using Past (wrap up / closed task) $\to$ Present (tackling / focusing on feature) $\to$ Obstacles (*No blockers on my end* / *Blocked on endpoint*). 2) **Capacity & Planning:** Idiomatic expressions for load balancing: *That might stretch our bandwidth too thin*; *I suggest we descope feature X to safeguard our core milestone*. 3) **Diplomatic Negotiation:** Articulating architectural balance as *trade-offs* rather than generic compromises.

<!-- chunk
id: en-curated-precision-c1-and-false-friends
topic: english-precision
tags: collocations, phrasal-verbs, false-friends, formal-register, precision-c1
section: precision-c1-collocations-and-pitfalls
entities: linguistic:collocation, linguistic:phrasal-verb, linguistic:false-friend
rules: en-precision-c1-standards
-->
en-precision-c1-standards: C1 Precision Standards, Technical Collocations and False Friends: 1) **High-Value Collocations:** *Heavy lifting* (computational workload), *Dead code elimination*, *Strike a balance*, *Granular control*, *Battle-tested solution*. 2) **Workplace Phrasals:** *Drill down into* (investigate root cause), *Roll back* (revert version deployment), *Scale out* (horizontal expansion). 3) **Crucial False Friends (ES $\to$ EN):** *Actual* (real / in fact, NOT 'current'), *Compromise* (risk / concession, NOT 'commitment'), *Library* (software module, NOT 'bookstore').
