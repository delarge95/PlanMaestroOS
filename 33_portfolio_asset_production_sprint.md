# 33_portfolio_asset_production_sprint

## 0. Module status

```text
Module: 33_portfolio_asset_production_sprint.md
Date generated: 2026-06-12
Status: Complete v1
Purpose: Execute the production of portfolio assets needed before serious applications
Inputs: 08B, 19B, 20B, 21B, 29, 29B, 29C, 30, 31, 32
Use: production sprint for TwinSight media, GitHub media, portfolio visuals, ArtStation breakdown, LinkedIn proof
```

---

# 1. Purpose

This module converts the strategy and copy files into a concrete asset-production sprint.

The objective is to produce the public proof package required for applications:

```text
TwinSight video
portfolio media
GitHub media
ArtStation breakdown images
LinkedIn Featured assets
CV/portfolio visual proof
```

The bottleneck is no longer research.

The bottleneck is public, visible evidence.

---

# 2. Sprint goal

## 2.1 Final sprint outcome

By the end of the sprint, Alexander should have:

```text
1. a 90-second TwinSight demo video;
2. a 30-second teaser;
3. a strong thumbnail;
4. a screenshot package;
5. a visual modes grid;
6. a metrics card;
7. a CAD-to-realtime pipeline diagram;
8. an architecture diagram;
9. a GitHub /media folder;
10. a portfolio-ready media folder;
11. an ArtStation breakdown image set;
12. a LinkedIn Featured media package.
```

## 2.2 Minimum viable output

If time is limited, produce only:

```text
[ ] 90-second demo video
[ ] thumbnail
[ ] 8 screenshots
[ ] visual modes grid
[ ] metrics card
[ ] GitHub media folder
[ ] portfolio media folder
```

## 2.3 Strong output

```text
[ ] 90-second demo video
[ ] 30-second teaser
[ ] 4–7 minute technical breakdown
[ ] 12–20 screenshots
[ ] visual modes grid
[ ] optimization before/after
[ ] pipeline diagram
[ ] architecture diagram
[ ] metrics card
[ ] ArtStation breakdown package
[ ] LinkedIn teaser post package
```

---

# 3. Asset inventory

## 3.1 Required video assets

| Asset | File name | Duration | Use | Priority |
|---|---|---:|---|---:|
| Main demo | `twinsight_x500_demo_90s.mp4` | 90–120 s | portfolio, LinkedIn Featured, GitHub | 1 |
| Short teaser | `twinsight_x500_teaser_30s.mp4` | 30–45 s | LinkedIn post, homepage | 2 |
| Technical breakdown | `twinsight_x500_technical_breakdown_5min.mp4` | 4–7 min | interviews, GitHub, technical review | 3 |
| GIF preview | `twinsight_x500_preview.gif` | 5–8 s | GitHub README | 3 |

## 3.2 Required image assets

| Asset | File name | Use | Priority |
|---|---|---|---:|
| Thumbnail | `twinsight_x500_thumbnail.jpg` | YouTube/GitHub/portfolio | 1 |
| Hero viewer | `01_hero_view.jpg` | portfolio hero | 1 |
| Browser proof | `02_browser_webgl_view.jpg` | WebGL proof | 1 |
| Component selection | `03_component_selection.jpg` | feature card | 1 |
| Technical panel | `04_technical_panel.jpg` | UI proof | 1 |
| Exploded view | `05_exploded_view.jpg` | feature card | 1 |
| Cross-section | `06_cross_section.jpg` | feature card | 1 |
| Visual modes grid | `07_visual_modes_grid.jpg` | technical art proof | 1 |
| CAD optimization | `08_cad_optimization_before_after.jpg` | pipeline proof | 1 |
| Metrics card | `09_metrics_card.jpg` | validation proof | 1 |
| Pipeline diagram | `10_pipeline_diagram.jpg` | technical pipeline | 2 |
| Architecture diagram | `11_architecture_diagram.jpg` | Unity systems | 2 |
| Blender cleanup | `12_blender_cleanup.jpg` | process proof | 2 |
| Unity editor | `13_unity_editor.jpg` | implementation proof | 2 |
| GitHub preview | `14_github_readme_preview.jpg` | proof loop | 3 |
| ArtStation cover | `15_artstation_cover.jpg` | ArtStation | 2 |

---

# 4. Folder structure

## 4.1 Master production folder

```text
twinsight_media_production/
├── 00_raw_capture/
│   ├── browser/
│   ├── unity_editor/
│   ├── blender/
│   └── metrics/
├── 01_selects/
├── 02_video_project/
├── 03_exports/
│   ├── video/
│   ├── images/
│   └── gifs/
├── 04_portfolio/
├── 05_github_media/
├── 06_artstation/
├── 07_linkedin/
└── 08_archive/
```

## 4.2 GitHub media folder

```text
media/
├── twinsight-demo-thumbnail.jpg
├── 01_viewer.jpg
├── 02_exploded_view.jpg
├── 03_cross_section.jpg
├── 04_visual_modes_grid.jpg
├── 05_technical_ui.jpg
├── 06_cad_optimization.jpg
├── 07_pipeline_diagram.jpg
├── 08_metrics_card.jpg
└── twinsight-preview.gif
```

## 4.3 Portfolio media folder

```text
portfolio/projects/twinsight-x500/
├── hero.jpg
├── demo_90s.mp4
├── teaser_30s.mp4
├── thumbnail.jpg
├── feature_component_selection.jpg
├── feature_exploded_view.jpg
├── feature_cross_section.jpg
├── visual_modes_grid.jpg
├── cad_optimization.jpg
├── pipeline_diagram.jpg
├── architecture_diagram.jpg
└── metrics_card.jpg
```

---

# 5. Capture preparation

## 5.1 Before recording

```text
[ ] final WebGL build opens reliably
[ ] local build or hosted build tested
[ ] browser zoom set to readable scale
[ ] UI text is readable at 1080p
[ ] no debug UI visible unless intentional
[ ] final materials assigned
[ ] visual modes working
[ ] exploded view working
[ ] clipping tool working
[ ] component selection working
[ ] technical panels populated
[ ] browser performance acceptable
[ ] recording software tested
[ ] screen resolution fixed at 1920×1080 or higher
```

## 5.2 Build cleanup

```text
[ ] remove placeholder labels
[ ] remove console errors where possible
[ ] remove incomplete features from visible UI
[ ] hide unfinished buttons
[ ] ensure selected objects highlight cleanly
[ ] verify clipping plane does not break composition
[ ] reset default camera position
[ ] set default view to best hero angle
```

## 5.3 Visual cleanup

```text
[ ] consistent lighting
[ ] neutral background
[ ] no distracting browser tabs
[ ] no desktop notifications
[ ] clean cursor movement
[ ] readable color contrast
[ ] stable camera speed
```

---

# 6. Capture order

## 6.1 Capture sequence

Record in this order:

```text
1. hero orbit
2. browser/WebGL proof
3. navigation
4. component hover/select
5. technical panel
6. exploded view
7. exploded view close-up
8. clipping plane
9. cross-section internal view
10. visual modes one by one
11. visual modes grid source shots
12. CAD/high-poly source
13. optimized model / wireframe
14. Blender cleanup
15. Unity editor scene
16. metrics cards
17. GitHub README preview
```

## 6.2 Why this order

This matches the final video structure and reduces editing complexity.

Do not capture randomly.

---

# 7. Required shots

## 7.1 Hero shot

| Requirement | Specification |
|---|---|
| Composition | drone centered, UI visible but not cluttered |
| Motion | slow orbit or camera pan |
| Duration | 5–8 s raw |
| Output | hero image + opening video |
| Acceptance | understandable at thumbnail size |

## 7.2 Browser proof shot

| Requirement | Specification |
|---|---|
| Composition | browser frame visible |
| Motion | simple interaction |
| Duration | 5–8 s |
| Purpose | prove WebGL/no-install |
| Caption | Browser-based Unity WebGL viewer |

## 7.3 Component selection shot

| Requirement | Specification |
|---|---|
| Action | hover/select component |
| UI | highlight + panel appears |
| Duration | 6–10 s |
| Purpose | interaction proof |
| Caption | Component-level selection |

## 7.4 Exploded view shot

| Requirement | Specification |
|---|---|
| Action | activate exploded view |
| Motion | smooth separation |
| Duration | 8–12 s |
| Purpose | assembly hierarchy proof |
| Caption | Exploded assembly view |

## 7.5 Cross-section shot

| Requirement | Specification |
|---|---|
| Action | move clipping plane |
| View | internal structures visible |
| Duration | 8–12 s |
| Purpose | inspection proof |
| Caption | Cross-section inspection |

## 7.6 Visual modes shot

| Requirement | Specification |
|---|---|
| Modes | realistic, X-ray, ghosted, blueprint, wireframe, solid, thermal-style |
| Motion | switch modes cleanly |
| Duration | 2–4 s per mode |
| Purpose | technical art proof |
| Caption | Multiple inspection modes |

## 7.7 Optimization shot

| Requirement | Specification |
|---|---|
| Content | CAD/high-poly vs optimized |
| View | wireframe or triangle comparison |
| Duration | 5–8 s |
| Purpose | CAD-to-realtime proof |
| Caption | CAD-derived assets optimized for WebGL |

## 7.8 Metrics shot

| Requirement | Specification |
|---|---|
| Content | triangle count, SUS, NASA-TLX |
| Format | clean metric cards |
| Duration | 5–8 s |
| Purpose | validation proof |
| Caption | Formative usability/workload evaluation |

---

# 8. Screenshot package

## 8.1 Minimum screenshots

```text
01_hero_view.jpg
02_browser_webgl_view.jpg
03_component_selection.jpg
04_technical_panel.jpg
05_exploded_view.jpg
06_cross_section.jpg
07_visual_modes_grid.jpg
08_cad_optimization_before_after.jpg
09_metrics_card.jpg
10_pipeline_diagram.jpg
```

## 8.2 Screenshot requirements

| Requirement | Standard |
|---|---|
| Resolution | 1920×1080 minimum |
| UI | readable |
| Compression | high quality JPG or PNG |
| Color | consistent |
| Naming | numbered and descriptive |
| Cropping | consistent |
| Text | minimal and readable |
| Artifacts | none visible |

## 8.3 Screenshot rejection criteria

Reject screenshot if:

```text
UI is unreadable
cursor blocks important detail
model is cropped poorly
lighting hides geometry
debug artifacts visible
text is too small
camera angle is ambiguous
feature is not understandable
```

---

# 9. Visual modes grid

## 9.1 Required grid

Create a 3×3 grid:

```text
Realistic | X-ray | Ghosted
Blueprint | Wireframe | Solid
Thermal-style | Clipping | Exploded
```

## 9.2 Grid requirements

| Requirement | Standard |
|---|---|
| Same camera angle | yes |
| Same crop | yes |
| Labels | short |
| Resolution | 1920×1080 or 2400×1600 |
| Background | consistent |
| Text | readable |
| Use | portfolio, ArtStation, GitHub |

## 9.3 Thermal-style disclaimer

Include near the grid:

```text
Thermal-style is a qualitative visual mode, not a physical simulation.
```

---

# 10. Metrics card

## 10.1 Required metrics card

Use these values:

```text
95,617 optimized triangles
6.5M+ CAD source triangle routes
12 participants
SUS average: 91.88
NASA-TLX Raw: 8.69 viewer vs 19.89 2D support
96 task-condition records
```

## 10.2 Layout

Recommended layout:

```text
Top: TwinSight X500 — Evaluation & Optimization
Left: CAD optimization metrics
Right: usability/workload metrics
Bottom: academic/portfolio prototype note
```

## 10.3 Safe footer

```text
Formative academic evaluation; results apply to tested tasks and participant sample.
```

---

# 11. Pipeline diagram

## 11.1 Required diagram

```text
CAD-derived source
        ↓
Tessellation / conversion
        ↓
Blender cleanup + optimization
        ↓
UV / bake / materials
        ↓
Unity import + scene organization
        ↓
Runtime interaction systems
        ↓
UI Toolkit + visual modes
        ↓
WebGL build
        ↓
SUS / NASA-TLX / Think-Aloud evaluation
```

## 11.2 Diagram requirements

| Requirement | Standard |
|---|---|
| Orientation | horizontal or vertical |
| Labels | concise |
| Tools | visible but not cluttered |
| Export | PNG/SVG |
| Use | portfolio + GitHub |
| Style | match portfolio theme |

## 11.3 Tool accuracy rule

Only include:

```text
Marmoset
RizomUV
Substance
```

if actually used.

If planned but not used, omit or mark separately.

---

# 12. Architecture diagram

## 12.1 Required diagram

```text
User input
   ↓
Interaction controller
   ↓
Selection / camera / clipping / exploded states
   ↓
Visualization systems
   ↓
UI Toolkit panels + 3D feedback
   ↓
WebGL runtime
```

## 12.2 Optional expanded version

```text
Input Layer
Camera Controller
Selection System
State Managers
Visualization Mode Manager
Clipping Controller
Exploded View Controller
Part Metadata System
UI Toolkit
WebGL Build
```

## 12.3 Use

| Use | Diagram version |
|---|---|
| portfolio | simple |
| GitHub | medium |
| technical breakdown video | expanded |
| interview | expanded |

---

# 13. Video production

## 13.1 90-second demo timeline

```text
00–05 s   Hero / title
05–12 s   Problem
12–22 s   Solution / WebGL
22–34 s   Component selection
34–46 s   Exploded view
46–58 s   Cross-section
58–68 s   Visual modes
68–78 s   CAD optimization
78–86 s   Evaluation metrics
86–90 s   Stack / links
```

## 13.2 30-second teaser timeline

```text
00–03 s   Hero
03–07 s   Select component
07–12 s   Exploded view
12–17 s   Clipping
17–22 s   Visual modes
22–27 s   Metrics
27–30 s   CTA
```

## 13.3 5-minute technical breakdown

```text
00:00–00:30   overview
00:30–01:10   problem
01:10–02:00   CAD optimization
02:00–02:50   Blender workflow
02:50–03:40   Unity architecture
03:40–04:30   interaction systems
04:30–05:10   visual modes
05:10–05:50   UI + evaluation
05:50–06:30   limitations / next steps
```

---

# 14. Captions

## 14.1 Main captions

```text
TwinSight X500
Unity WebGL technical visualization
From static 2D docs to spatial understanding
Browser-based drone assembly inspection
Component-level selection
Technical part information
Exploded assembly view
Cross-section inspection
Multiple visual modes
CAD-derived assets optimized for WebGL
SUS 91.88 · NASA-TLX Raw 8.69 vs 19.89
Unity · C# · WebGL · URP · UI Toolkit · Blender
```

## 14.2 Caption rules

```text
[ ] max 6–10 words
[ ] readable at mobile size
[ ] consistent position
[ ] high contrast
[ ] no paragraphs
[ ] no academic jargon in main reel
```

---

# 15. Thumbnail production

## 15.1 Recommended thumbnail

```text
Exploded drone view + UI panel + title
```

Text:

```text
TwinSight X500
Unity WebGL Technical Visualization
```

## 15.2 Thumbnail requirements

| Requirement | Standard |
|---|---|
| readable at small size | yes |
| not too much text | yes |
| strong contrast | yes |
| shows actual project | yes |
| no stock imagery | yes |
| no academic title slide | yes |

## 15.3 Thumbnail variants

```text
thumbnail_hero.jpg
thumbnail_exploded.jpg
thumbnail_cross_section.jpg
thumbnail_visual_modes.jpg
```

Pick one primary.

---

# 16. ArtStation package

## 16.1 Required ArtStation images

```text
01_cover.jpg
02_final_view.jpg
03_video_thumbnail.jpg
04_component_selection.jpg
05_exploded_view.jpg
06_cross_section.jpg
07_visual_modes_grid.jpg
08_cad_optimization.jpg
09_wireframe_comparison.jpg
10_ui_breakdown.jpg
11_metrics_card.jpg
12_tools_pipeline.jpg
```

## 16.2 ArtStation order

```text
cover
short video
final screenshots
feature breakdown
CAD optimization
visual modes grid
UI / interaction
metrics
tools
links
```

## 16.3 ArtStation text blocks

Use copy from:

```text
29C_artstation_breakdown_benchmark.md
```

Do not rewrite from scratch.

---

# 17. LinkedIn package

## 17.1 Required LinkedIn assets

```text
twinsight_teaser_30s.mp4
twinsight_thumbnail.jpg
twinsight_metrics_card.jpg
twinsight_visual_modes_grid.jpg
portfolio link
GitHub link
```

## 17.2 LinkedIn post package

Use:

```text
video teaser
short post
project link
3–5 hashtags
```

Recommended hashtags:

```text
#Unity3D
#TechnicalArt
#WebGL
#Realtime3D
#TechnicalVisualization
```

Use 3–5, not 15.

## 17.3 Featured section

Add in this order:

```text
1. TwinSight case study
2. TwinSight 90-second demo
3. GitHub repository
4. ArtStation breakdown
```

---

# 18. GitHub package

## 18.1 Required files

```text
media/twinsight-demo-thumbnail.jpg
media/01_viewer.jpg
media/02_exploded_view.jpg
media/03_cross_section.jpg
media/04_visual_modes_grid.jpg
media/05_technical_ui.jpg
media/06_cad_optimization.jpg
media/07_pipeline_diagram.jpg
media/08_metrics_card.jpg
media/twinsight-preview.gif
```

## 18.2 README update

Use:

```text
19B_github_readme_twinsight_final.md
```

## 18.3 GitHub acceptance criteria

```text
[ ] README explains project in first screen
[ ] demo thumbnail visible
[ ] screenshots visible
[ ] stack visible
[ ] metrics visible
[ ] limitations visible
[ ] links working
[ ] repository topics added
```

---

# 19. Portfolio package

## 19.1 Required media

```text
hero.jpg
demo_90s.mp4
teaser_30s.mp4
visual_modes_grid.jpg
metrics_card.jpg
pipeline_diagram.jpg
architecture_diagram.jpg
cad_optimization.jpg
feature screenshots
```

## 19.2 Copy source

Use:

```text
20B_portfolio_page_implementation_copy.md
```

## 19.3 Case-study structure source

Use:

```text
08B_twinsight_case_study_final_structure.md
```

---

# 20. Quality gates

## 20.1 Gate 1 — visual clarity

Pass if:

```text
[ ] a non-technical viewer understands it is a drone viewer
[ ] a technical viewer understands it is Unity/WebGL
[ ] UI is readable
[ ] features are visually obvious
```

## 20.2 Gate 2 — technical proof

Pass if:

```text
[ ] CAD optimization shown
[ ] runtime interaction shown
[ ] visual modes shown
[ ] evaluation shown
[ ] stack shown
```

## 20.3 Gate 3 — claim safety

Pass if:

```text
[ ] no full digital twin claim
[ ] no IoT claim
[ ] no real thermal simulation claim
[ ] no production deployment claim
[ ] no seniority overclaim
```

## 20.4 Gate 4 — application readiness

Pass if:

```text
[ ] portfolio page public
[ ] GitHub README public
[ ] demo video public
[ ] LinkedIn Featured updated
[ ] CV links point to working pages
```

---

# 21. 5-day compressed sprint

## Day 1 — capture

```text
Record:
- hero
- browser
- selection
- exploded
- clipping
- visual modes
- CAD/Blender/Unity proof
```

## Day 2 — edit

```text
Export:
- 90-second demo
- thumbnail
- 30-second teaser rough cut
```

## Day 3 — visual assets

```text
Create:
- screenshots
- visual modes grid
- metrics card
- pipeline diagram
- architecture diagram
```

## Day 4 — integration

```text
Update:
- portfolio
- GitHub README
- ArtStation draft
- LinkedIn Featured
```

## Day 5 — QA and publish

```text
Check:
- all links
- all captions
- mobile readability
- claim safety
- application tracker links
```

---

# 22. 10-day full sprint

| Day | Deliverable |
|---:|---|
| 1 | footage capture |
| 2 | 90-second demo edit |
| 3 | 30-second teaser + thumbnail |
| 4 | screenshot package |
| 5 | visual modes grid + metrics card |
| 6 | pipeline + architecture diagrams |
| 7 | GitHub media folder + README |
| 8 | portfolio page media integration |
| 9 | ArtStation breakdown |
| 10 | LinkedIn Featured + QA |

---

# 23. Done definition

This sprint is complete when:

```text
[ ] TwinSight can be understood from the demo video alone.
[ ] TwinSight can be understood from the portfolio page alone.
[ ] TwinSight can be understood from the GitHub README alone.
[ ] The same positioning appears across portfolio, GitHub, LinkedIn and ArtStation.
[ ] Claims are safe and defensible.
[ ] Links are working.
[ ] Application tracker can use the project links.
```

---

# 24. Next module

Proceed with:

```text
34_weekly_application_execution_system.md
```

## Tool recommendation

| Tool | Use |
|---|---:|
| Agent mode | No |
| Deep Research | No |

## Purpose

Create the weekly operating system for:

```text
searching roles
scoring roles
applying
following up
updating the tracker
reviewing metrics
improving materials
```

This should connect modules:

```text
25 tracker
26 dashboard
30 market snapshot
31 targeting matrix
32 material gaps
33 asset sprint
```
