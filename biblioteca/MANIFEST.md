# MANIFEST — Biblioteca canónica de conocimiento (Plan Maestro OS)

> Mantenido por AG-BIB · rama `agent/biblioteca` · 2026-08-22
> Registro maestro de TODAS las fuentes de conocimiento (libros, papers, datasets, docs).
> Los `sourceId` son **estables y definitivos**: los consume el RAG v4 (`docs/agents/PLAN_MULTIAGENTE.md` §4). No cambian.
> Convención: slug `autor-titulo-edición` en minúsculas-guiones; papers `paper-<autor>-<año>-<tema>`.

## Leyenda de rutas

| Prefijo | Ruta absoluta |
|---|---|
| `L:` | `D:\Downloads\Libros\` |
| `L:F:` | `D:\Downloads\Libros\Faltan\` |
| `L:D:` | `D:\Downloads\Libros\_duplicados\` |
| `P:` | `D:\Downloads\Papers\` |
| `P:D:` | `D:\Downloads\Papers\_duplicados\` |
| `PA:` | `D:\Downloads\Papers absurdos\` (no renombrados salvo dups) |
| `JN:` | `D:\Downloads\JN Training Programs\` |
| `RP:` | `D:\Downloads\RP Training programs\` |
| `DL:` | `D:\Downloads\` (raíz) |
| `INV:` | `E:\Laboral\_pdf_biblia\Planeacion_Integral\investigacion\` (checkout principal) |
| `REPO:` | raíz del repo (worktree `agent/biblioteca`) |

⚠️ **Nota INV:** los PDF de `investigacion\` están ignorados por git (`*.pdf`) y existen solo en el checkout principal, donde NO se renombraron (protección de agentes en paralelo). Se indica nombre actual → nombre canónico propuesto. Aplicar el renombrado en el checkout principal tras el merge de esta rama.

## Estados de extracción

- `ok` — extracción consolidada en `biblioteca/extracciones/<sourceId>.md`
- `ok (chat)` — extracción recuperada de los exports de chat y consolidada en `biblioteca/extracciones/<sourceId>.md` (fuente única) o en un archivo de lote `chat-<id>-*.md` (varias fuentes por chat)
- `pendiente-gemini` — pendiente de extracción (ver lista priorizada al final)
- `no-aplica` — datasets/docs internos que se referencian tal cual

---

## 1. Libros — anatomía / bíblias (`Faltan`)

| sourceId | tipo | título | autor | año/edición | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `grays-anatomy-students-4ed` | libro | Gray's Anatomy for Students | Drake, Vogl, Mitchell et al. | 4ª ed. | anatomía | expert-book | `L:F:Drake-GraysAnatomyForStudents_4ed.pdf` | **ok** | 1234 p; extracción 100% completada en `grays-anatomy-students-4ed--*.md` (14 archivos con matriz de cobertura) |
| `moore-clinically-oriented-6ed` | libro | Clinically Oriented Anatomy | Moore, Dalley, Agur | 6ª ed. | anatomía | expert-book | `L:F:Moore-ClinicallyOrientedAnatomy_6ed.pdf` | **ok** | 1168 p; extracción 100% completada en `moore-clinically-oriented-6ed--*.md` (11 archivos con matriz de cobertura) |
| `macintosh-skeletal-muscle-2ed` | libro | Skeletal Muscle: Form and Function | MacIntosh, Gardiner, McComas | 2ª ed. 2006 | fisiología muscular | expert-book | `L:F:MacIntosh-SkeletalMuscleFormAndFunction_2ed_2006.pdf` | **ok** | 434 p; extracción 100% completada en `macintosh-skeletal-muscle-2ed--*.md` (14 archivos con matriz de cobertura) |
| `enoka-neuromechanics-4ed` | libro | Neuromechanics of Human Movement | Roger M. Enoka | 4ª ed. 2008 | control motor | expert-book | `L:F:Enoka-NeuromechanicsOfHumanMovement_4ed_2008.pdf` | **ok** | 568 p; extracción 100% completada en `enoka-neuromechanics-4ed--*.md` (7 archivos con matriz de cobertura) |
| `norkin-joint-structure-6ed` | libro | Joint Structure and Function: A Comprehensive Analysis | Levangie & Norkin | 6ª ed. 2019 | kinesiología/articulaciones | expert-book | `L:Norkin-JointStructureAndFunction_6ed_2019.pdf` | ok (chat) | 1756 p + atajo de texto `..._textolayer.txt` (usarlo como base) |

## 2. Libros — nutrición

| sourceId | tipo | título | autor | año/edición | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `bibliotex-sport-nutrition-2022` | libro | Sport Nutrition (volumen editado) | varios (3G E-learning/Bibliotex) | 2022 | nutrición | expert-book | `L:F:Bibliotex-SportNutrition_2022.pdf` | ok (chat) | 358 p; compilación de capítulos CC; referencia principal AG-NUTRI. Dup doble-compresión en `L:D:` |
| `maughan-nutrition-in-sport` | libro | Nutrition in Sport (IOC Encyclopaedia of Sports Medicine Vol. VII) | Maughan (ed.) | 2000 | nutrición | expert-book | `L:Maughan-NutritionInSport_IOC_2000.pdf` | **ok** | 698 p; extracción completa + tablas/figuras M1–M7 |
| `rp-renaissance-kitchen` | libro | The Renaissance Kitchen | Renaissance Periodization | s/f | nutrición/recetas | expert-book | `RP:RP-TheRenaissanceKitchen.pdf` | **ok** | 125 p; extracción completa en `rp-renaissance-kitchen.md` (macros por receta y sustitutos) |

## 3. Libros — fuerza / hipertrofia / prescripción

| sourceId | tipo | título | autor | año/edición | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `haff-essentials-strength-4ed` | libro | Essentials of Strength Training and Conditioning (NSCA) | Haff & Triplett (eds.) | 4ª ed. 2016 | fuerza/condicionamiento | expert-book | `L:Haff-EssentialsOfStrengthTrainingAndConditioning_4ed.pdf` | **ok** | 752 p; extracción completa + tablas/figuras N1–N6 |
| `acsm-exercise-testing-prescription-10ed` | libro | ACSM's Guidelines for Exercise Testing and Prescription | ACSM (Riebe, ed.) | 10ª ed. 2018 | fisiología/prescripción | expert-book | `L:ACSM-ExerciseTestingAndPrescription_10ed_2018.pdf` | ok (chat) | 651 p |
| `nippard-muscle-ladder-2024` | libro | The Muscle Ladder: Get Jacked Using Science | Jeff Nippard | 2024 | hipertrofia | expert-book | `JN:Nippard-MuscleLadder_2024.pdf` | ok (chat) | 664 p. Dup comprimido en `JN:_duplicados\` |
| `nippard-body-recomposition` | libro | The Ultimate Guide to Body Recomposition | Nippard & Barakat | ~2019 | recomposición corporal | expert-book | `JN:Nippard-UltimateGuideToBodyRecomposition.pdf` | **ok** | 268 p; extracción completa en `nippard-body-recomposition.md` |
| `nippard-fundamentals-hypertrophy` | libro-programa | Fundamentals Hypertrophy Program | Jeff Nippard | s/f | hipertrofia | expert-book | `JN:Nippard-FundamentalsHypertrophyProgram.pdf` | **ok** | 97 p; extracción completa en `nippard-fundamentals-hypertrophy.md` |
| `israetel-scientific-principles-hypertrophy` | libro | Scientific Principles of Hypertrophy Training | Israetel et al. (RP) | s/f | hipertrofia | expert-book | `RP:Israetel-ScientificPrinciplesOfHypertrophyTraining.pdf` | ok (chat) | |
| `israetel-scientific-principles-strength` | libro | Scientific Principles of Strength Training | Israetel et al. (RP) | s/f | fuerza | expert-book | `RP:Israetel-ScientificPrinciplesOfStrengthTraining.pdf` | ok (chat) | |
| `inda-fuerza-female-strength` | libro | FUERZA: A Female Guide to Strength and Physique | Marisa Inda | 2018 | fuerza (mujeres) | expert-book | `RP:Inda-FUERZA-FemaleGuideStrengthPhysique.pdf` | **ok** | 119 p; extracción completa en `inda-fuerza-female-strength.md` |

## 4. Libros — calistenia / postura / rehab (método Low + Squat University)

| sourceId | tipo | título | autor | año/edición | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `low-overcoming-gravity-2ed` | libro | Overcoming Gravity: A Systematic Approach to Gymnastics and Bodyweight Strength | Steven Low | 2ª ed. 2016 | calistenia | expert-book | `INV:Overcoming Gravity_ A Systematic Approach to Gymnastics and -- Low, Steven -- 2, 2016.pdf` → propuesto `Low-OvercomingGravity_2ed_2016.pdf` | **ok** | 600 p. Extracción consolidada (6 partes, `D:\Downloads\OG2E_extraccion_parte*.md`) en `biblioteca/extracciones/low-overcoming-gravity-2ed.md`. Copias alternas 976 p en `DL:_duplicados\` |
| `low-overcoming-poor-posture` | libro | Overcoming Poor Posture | Low & Ilano | 2017 | postura | expert-book | `L:Low-OvercomingPoorPosture_2017.pdf` | ok (chat) | 140 p |
| `low-overcoming-tendonitis-2019` | libro | Overcoming Tendonitis | Low & Skretch | 2019 | tendinopatías | expert-book | `INV:overcoming-tendonitis-...-(1).pdf` → propuesto `Low-OvercomingTendonitis_2019.pdf` | ok (chat) | 203 p. Autoridad en rehab tendinosa (AG-FIT F2). Dup byte-idéntico archivado en `L:D:` |
| `horschig-squat-bible` | libro | The Squat Bible | Horschig, Sonthana, Cooper | s/f | sentadilla/fuerza | expert-book | `L:Horschig-SquatBible.pdf` | ok (chat) | 141 p |
| `horschig-rebuilding-milo-2021` | libro | Rebuilding Milo: The Lifter's Guide to Fixing Common Injuries | Horschig & Sonthana | 2021 | rehab levantadores | expert-book | `L:Horschig-RebuildingMilo_2021.pdf` | ok (chat) | 585 p |
| `wilson-exercise-therapy-msk` | libro | Exercise Therapy in the Management of Musculoskeletal Disorders | Wilson, Gormley, Hussey (eds.) | s/f | fisioterapia | expert-book | `L:Wilson-ExerciseTherapyMusculoskeletalDisorders.pdf` | ok (chat) | 280 p |

## 5. Libros — running / ciclismo / resistencia

| sourceId | tipo | título | autor | año/edición | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `bangsbo-running-science` | libro | Running & Science — in an Interdisciplinary Perspective | Bangsbo & Larsen (eds.) | s/f | running | expert-book | `L:Bangsbo-RunningScience_Interdisciplinary.pdf` | ok (chat) | 178 p |
| `daniels-running-formula-4ed` | libro | Daniels' Running Formula | Jack Daniels | 4ª ed. | running | expert-book | `L:Daniels-DanielsRunningFormula_4ed.epub` | **ok** | 18 capítulos; extracción completa en `daniels-running-formula-4ed.md` (Sistema VDOT y zonas E/M/T/I/R) |
| `vandijk-secret-of-running` | libro | The Secret of Running | van Dijk & van Megen | s/f | running (potencia) | expert-book | `L:VanDijk-TheSecretOfRunning.pdf` | ok (chat) | 478 p. Dup comprimido en `L:D:` |
| `allen-power-meter-3ed` | libro | Training and Racing with a Power Meter | Allen, Coggan, McGregor | 3ª ed. 2019 | ciclismo (potencia) | expert-book | `L:Allen-TrainingAndRacingWithAPowerMeter_3ed_2019.pdf` | ok (chat) | 498 p. Dups epub+comprimido en `L:D:` |
| `wilkins-cycling-physiology-2021` | libro | Cycling Physiology & Training Science | Wilkins & Bell | 2021 | ciclismo | expert-book | `L:Wilkins-CyclingPhysiologyAndTrainingScience_2021.pdf` | ok (chat) | 283 p |

## 6. Libros — yoga / flexibilidad / danza / fisiología general

| sourceId | tipo | título | autor | año/edición | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `mitchell-yoga-biomechanics` | libro | Yoga Biomechanics: Stretching Redefined | Jules Mitchell | s/f | yoga/biomecánica | expert-book | `L:Mitchell-YogaBiomechanics-StretchingRedefined.pdf` | ok (chat) | 325 p |
| `bookey-physiology-of-yoga-resumen` | doc | The Physiology of Yoga — RESUMEN (Bookey) | Bookey (sobre McGonigle & Moses) | s/f | yoga/fisiología | expert-book | `L:Bookey-PhysiologyOfYoga_Resumen.pdf` | **ok** | 116 p; extracción completa en `bookey-physiology-of-yoga-resumen.md` (mitos vs ciencia, tono vagal y fascia) |
| `blahnik-full-body-flexibility-2ed` | libro | Full-Body Flexibility | Jay Blahnik | 2ª ed. | flexibilidad | expert-book | `L:Blahnik-FullBodyFlexibility_2ed.pdf` | **ok** | 272 p; extracción completada en `blahnik-full-body-flexibility-2ed.md` (3-Step System, RPE 6-8, rutinas express) |
| `macintosh-open-textbook-exphys` | libro | Open Textbook of Exercise Physiology | MacIntosh et al. (ed.) | s/f | fisiología del ejercicio | expert-book | `L:MacIntosh-OpenTextbookOfExercisePhysiology.pdf` | ok (chat) | 317 p; secundaria AG-ANATOM |
| `clippinger-dance-anatomy-kinesiology-2ed` | libro | Dance Anatomy and Kinesiology | Karen Sue Clippinger | 2ª ed. | danza/kinesiología | expert-book | `L:Clippinger-DanceAnatomyAndKinesiology_2ed.pdf` | ok (chat) | 546 p |
| `haas-dance-anatomy-2ed` | libro | Dance Anatomy | Jacqui Greene Haas | 2ª ed. | danza | expert-book | `L:Haas-DanceAnatomy_2ed.pdf` | ok (chat) | 272 p |
| `howse-dance-technique-3ed` | libro | Dance Technique and Injury Prevention | Justin Howse | 3ª ed. | danza/lesiones | expert-book | `L:Howse-DanceTechniqueAndInjuryPrevention_3ed.pdf` | ok (chat) | 232 p. 2 dups comprimidos en `L:D:` |
| `lott-biomechanics-of-dance` | libro | Biomechanics of Dance: Applications of Classical Mechanics | Melanie Lott | 2021 | danza/biomecánica | expert-book | `L:Lott-BiomechanicsOfDance_2021.pdf` | ok (chat) | 411 p |

## 7. Libros — artes marciales / combate

| sourceId | tipo | título | autor | año/edición | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `delp-muay-thai-2013` | libro | Muay Thai Training Exercises: The Ultimate Guide | Christoph Delp | 2013 | muay thai | expert-book | `L:Delp-MuayThaiTrainingExercises_2013.pdf` | ok (chat) | 414 p + `..._textolayer.txt` |
| `dias-training-conditioning-mma` | libro | Training and Conditioning for MMA: Programming of Champions | Dias, Oliveira, Brauer Jr. | s/f | MMA | expert-book | `L:Dias-TrainingAndConditioningForMMA_ProgrammingOfChampions.pdf` | ok (chat) | 433 p. Dup comprimido en `L:D:` |
| `tomlinson-evolution-martial-arts` | libro | The Evolution of Martial Arts in Combat Sports | Stuart Tomlinson | s/f | MA de combate | expert-book | `L:Tomlinson-EvolutionOfMartialArtsInCombatSports.pdf` | **ok** | 296 p; extracción completada en `tomlinson-evolution-martial-arts.md` |
| `wilson-boxing-science-intro` | doc | Boxing Science: Introduction to Strength and Conditioning | Wilson & Ruddock | s/f | boxeo | expert-book | `L:Wilson-BoxingScience-IntroStrengthConditioning.pdf` | ok (chat) | eBook 20 p |

## 8. Libros — salud sexual (dominio secundario deliberado)

| sourceId | tipo | título | autor | año/edición | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `metz-coping-pe-2003` | libro | Coping with Premature Ejaculation | Metz & McCarthy | 2003 | salud sexual | expert-book | `L:Metz-CopingWithPrematureEjaculation_2003.pdf` | ok (chat) | 186 p |
| `kaleb-kegel-men-2019` | libro | Kegel Exercise for Men | Vincent Kaleb | 2019 | salud sexual | expert-book | `L:Kaleb-KegelExerciseForMen_2019.pdf` | ok (chat) | 19 p. Dup epub en `L:D:` |
| `zilbergeld-new-male-sexuality-1992` | libro | The New Male Sexuality | Bernie Zilbergeld | 1992 (rev.) | salud sexual | expert-book | `L:Zilbergeld-TheNewMaleSexuality_1992_rev.pdf` | ok (chat) | 506 p. Dup epub en `L:D:` |
| `wuh-sexual-fitness-2002` | libro | Sexual Fitness: 7 Essential Elements | Wuh & Fox | 2002 | salud sexual | expert-book | `L:Wuh-SexualFitness_2002.pdf` | ok (chat) | 360 p |

## 9. Programas Nippard (fuentes de fitness en el repo)

| sourceId | tipo | título | autor | año/edición | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `nippard-min-max` | programa | The Min-Max Program | Jeff Nippard | s/f | entrenamiento minimalista | expert-book | `INV:The_Min-Max_Program_-_Jeff_Nippard.pdf` → propuesto `Nippard-MinMaxProgram.pdf` | ok (dataset) | 90 p. Ya ingestado como `INV:minmaxprogram.json`; docx+pdf comprimido a `INV:_duplicados\` (commit ag-bib) |
| `nippard-powerbuilding-4x` | programa | Powerbuilding System (4x/semana) | Jeff Nippard | 2020 | powerbuilding | expert-book | `INV:PowerbuildingSystem.pdf` → propuesto `Nippard-PowerbuildingSystem_4x_2020.pdf` | **ok** | 115 p; extracción completada en `nippard-powerbuilding-4x.md` (split 4x, DUP, LSRPE) |
| `nippard-glute-hypertrophy-program` | programa | Glute Hypertrophy Program | Jeff Nippard | s/f | glúteos | expert-book | `INV:jeffNippardGluteProgram.pdf` → propuesto `Nippard-GluteHypertrophyProgram.pdf` | **ok** | 36 p; extracción completada en `nippard-glute-hypertrophy-program.md` (3 vectores de fuerza) |
| `nippard-tbts-intermediate-advanced` | programa | The Bodybuilding Transformation System (Inter-Adv) | Jeff Nippard | s/f | culturismo | expert-book | `INV:TheBodyBuildingTransformationSystem.pdf` → propuesto `Nippard-BodybuildingTransformationSystem_InterAdv.pdf` | ok (dataset) | 63 p; ya ingestado como `INV:bodybuildingtransformationsystem.json`; copia idéntica en `JN:The Bodybuilding Transformation System\` |

## 10. Datasets / colecciones

| sourceId | tipo | título | autor | año/edición | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `dataset-jn-programs` | dataset | Colección completa programas Jeff Nippard (97 archivos) | Jeff Nippard | 2018–2024 | programas | internal-doc | `JN:` (subcarpetas) | no-aplica | Powerbuilding 1.0/2.0/3.0, Pure Bodybuilding Ph1/Ph2, PPL/Ultimate PPL, Essentials 2x–5x, Body-Part, Women/Buttermore, Specialization S/B, Hypertrophy Handbooks. Dups internos documentados (Get-Ready ×3, Technique Handbook ×3, manuales 2.0 ×2, Glute ×2) — no movidos para no romper la colección |
| `dataset-rp-templates` | dataset | RP templates: MPT/FPT/PL + dietas (xlsx, zip, rar) | Renaissance Periodization | 2017–2018 | plantillas de programa/dieta | internal-doc | `RP:` (raíz + `FEMALE Training programms\`) | no-aplica | Incluye RP Books.zip (sin descomprimir), RP Diet Cutting/Massing zips, unzipped V2 84-93kg. Dups internos de xlsx documentados |
| `dataset-minmax-json` | dataset | Min-Max Program estructurado | derivado de Nippard | 2024 (repo) | fitness | internal-doc | `REPO:_pdf_biblia/Planeacion_Integral/investigacion/minmaxprogram.json` | no-aplica | consumido por fitapp |
| `dataset-tbts-json` | dataset | Bodybuilding Transformation System estructurado | derivado de Nippard | 2024 (repo) | fitness | internal-doc | `REPO:...investigacion/bodybuildingtransformationsystem.json` | no-aplica | |
| `dataset-thenx-guides` | dataset | THENX technique guides (guías técnicas calistenia) | THENX | 2024 (repo) | calistenia | internal-doc | `REPO:...investigacion/thenx_technique_guides.json` | no-aplica | fuente citada por AG-FIT RAG |
| `dataset-thenx-routines` | dataset | THENX master routines | THENX | 2024 (repo) | calistenia | internal-doc | `REPO:...investigacion/thenxMasterRoutines.ts` | no-aplica | |

## 11. Docs internos (análisis / clínicos / planes)

| sourceId | tipo | título | autor | año | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `doc-exercise-muscle-analysis` | doc | Exercise and muscle library analysis | interno | 2025-08-11 | fitness | internal-doc | `REPO:...investigacion/exercise_and_muscle_library_analysis.md` | no-aplica | |
| `doc-loading-charts-analysis` | doc | Loading charts and analytics analysis | interno | 2025-08-11 | fitness | internal-doc | `REPO:...investigacion/loading_charts_and_analytics_analysis.md` | no-aplica | |
| `doc-heria-fitapp-roadmap` | doc | Integration roadmap HERIA + fitapp | interno | 2025-08-12 | fitness | internal-doc | `REPO:...investigacion/integration_roadmap_heria_and_fitapp.md` | no-aplica | |
| `doc-arquitectura-web` | doc | Arquitectura web plan maestro | interno | 2025-07-23 | arquitectura | internal-doc | `REPO:...investigacion/arquitectura_web_plan_maestro.md` | no-aplica | |
| `doc-auditoria-plan-maestro` | doc | Auditoría exhaustiva plan maestro OS + fitapp | interno | 2025-07-26 | auditoría | internal-doc | `REPO:...investigacion/auditoria_exhaustiva_plan_maestro_os_y_fitapp.md` | no-aplica | |
| `doc-auditoria-ux-clinica` | doc | Auditoría UX clínica | interno | 2025-07-24 | UX clínica | internal-doc | `REPO:...investigacion/auditoria_ux_clinica_plan_maestro_os.md` | no-aplica | |
| `doc-plan-fitness` | doc | Plan fitness v1 | interno | 2025-07-23 | fitness | internal-doc | `REPO:...investigacion/plan_fitness.md` | no-aplica | |
| `doc-plan-maestro-v2-v3` | doc | Plan maestro v2/v3 | interno | 2025-07-23 | plan | internal-doc | `REPO:...investigacion/plan_maestro_v2.md`, `plan_maestro_v3.md` | no-aplica | |
| `plan-accion-tdah-ansiedad` | doc | Plan de acción profesional TDAH/ansiedad social | clínico | 2026-05-01 | clínico | internal-doc | `REPO:...investigacion/plan_accion_tdah_ansiedad_social-1.pdf` | no-aplica | territorio AG-CLIN |
| `reporte-clinico-neurodesarrollo` | doc | Reporte clínico neurodesarrollo + ansiedad | clínico | 2026-05-01 | clínico | internal-doc | `REPO:...investigacion/reporte_clinico_neurodesarrollo_ansiedad.pdf` | no-aplica | territorio AG-CLIN |
| `doc-notas-scbjj` | doc | Notas Strength & Conditioning para BJJ | usuario | s/f | BJJ | internal-doc | `P:doc-notas-strength-conditioning-bjj.txt` | ok (chat) | adjuntado al chat 1787415076155 |

## 12. Papers — relevantes (combate / fuerza)

| sourceId | tipo | título | autor | año | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `paper-ruddock-2021-hiit-conditioning-combat` | paper | High-Intensity Conditioning for Combat Athletes: Practical Recommendations | Fixter, Ruddock, James, et al. (Appl. Sci.) | 2021 | combate/condicionamiento | observacional (revisión) | `P:paper-ruddock-2021-hiit-conditioning-combat.pdf` | ok (chat) | 15 p |
| `paper-james-bjj-evidence-based-training-plan` | paper | An Evidence-Based Training Plan for Brazilian Jiu-Jitsu | Lachlan P. James (Strength Cond. J.) | ~2014 | BJJ | observacional (revisión) | `P:paper-james-bjj-evidence-based-training-plan.pdf` | ok (chat) | 9 p |
| `paper-kostikiadis-2018-mma-specific-sc-training` | paper | Short-Term Sport-Specific S&C Training in Well-Trained MMA Athletes | Kostikiadis et al. (JSSM 17:348) | 2018 | MMA | rct (controlado 2 grupos, n=17) | `P:paper-kostikiadis-2018-mma-specific-sc-training.pdf` | ok (chat) | 11 p |
| `paper-lenetsky-punching-forces-combat` | paper | Assessment and Contributors of Punching Forces in Combat Sports Athletes | Lenetsky, Harris, Cohen (Strength Cond. J.) | ~2017 | combate | observacional (revisión) | `P:paper-lenetsky-punching-forces-combat.pdf` | ok (chat) | 7 p |
| `paper-prabowo-combat-physical-conditioning` | paper | Physical condition preparation of combat sport athletes for fighting simulation: coach perspectives | Trisnar Adi Prabowo (Pedagogy of Health) | ~2025 | combate | observacional (cualitativo) | `P:paper-prabowo-combat-physical-conditioning.pdf` | ok (chat) | 11 p |
| `paper-ricci-2021-issn-weight-cut-mma` | paper | ISSN Position Stand: nutrition and weight cut strategies for MMA/combat | Ricci et al. (JISSN) | 2021 | nutrición combate | observacional (position stand/consenso) | `P:paper-ricci-2021-issn-weight-cut-mma.pdf` | ok (chat) | 55 p (versión larga) |

## 13. Papers — relevantes (nutrición / danza / salud sexual)

| sourceId | tipo | título | autor | año | disciplina | evidenceTier | ruta_fuente | extraccion | notas |
|---|---|---|---|---|---|---|---|---|---|
| `paper-aragon-2017-issn-diets-body-composition` | paper | ISSN Position Stand: Diets and Body Composition | Aragon, Schoenfeld, Wildman, et al. (JISSN) | 2017 | nutrición | observacional (position stand; sintetiza MA/RCT) | `P:paper-aragon-2017-issn-diets-body-composition.pdf` | ok (chat) | 19 p; clave para AG-NUTRI |
| `paper-russell-2013-preventing-dance-injuries` | paper | Preventing Dance Injuries: Current Perspectives | Russell (OAJSM 4:199) | 2013 | danza/lesiones | observacional (revisión) | `P:paper-russell-2013-preventing-dance-injuries.pdf` | ok (chat) | 12 p |
| `paper-cooper-2015-pe-behavioral-therapies` | paper | Behavioral Therapies for Management of PE: A Systematic Review | Cooper, Martyn-St James, Kaltenthaler, et al. (Sexual Medicine) | 2015 | salud sexual | meta-analysis (SR) | `P:paper-cooper-2015-pe-behavioral-therapies.pdf` | ok (chat) | 15 p; dup con espacios en nombre archivado en `P:D:` |
| `paper-raveendran-2021-pe-narrative-review` | paper | Premature Ejaculation — Current Concepts in Management: Narrative Review | Raveendran & Agarwal (Int J Reprod BioMed 19:5) | 2021 | salud sexual | observacional (revisión narrativa) | `P:paper-raveendran-2021-pe-narrative-review.pdf` | ok (chat) | 18 p; el chat lo tituló "tendinitis de codo" por error |
| `paper-pearce-2015-sexual-dysfunction-prostate-surveillance` | paper | Longitudinal Predictors of Sexual Dysfunction in Men on Active Surveillance for Prostate Cancer | Pearce et al. (Sexual Medicine) | 2015 | salud sexual | observacional (longitudinal) | `P:paper-pearce-2015-sexual-dysfunction-prostate-surveillance.pdf` | ok (chat) | 9 p |
| `paper-pastuszak-2015-testosterone-preparations` | paper | Comparison of Testosterone Gels, Injections, and Pellets | Pastuszak et al. (Sexual Medicine) | 2015 | salud sexual | observacional (retrospectivo) | `P:paper-pastuszak-2015-testosterone-preparations.pdf` | ok (chat) | 9 p |
| `paper-helmer-2015-veterans-sexual-health` | paper | Sexual Health and Function of Recent Male Combat Veterans | Helmer et al. (Sexual Medicine) | 2015 | salud sexual | observacional (cualitativo) | `P:paper-helmer-2015-veterans-sexual-health.pdf` | ok (chat) | 10 p |
| `paper-veale-2015-bdd-sexual-functioning` | paper | Sexual Functioning and Behavior of Men with BDD vs Men Anxious about Penis Size | Veale et al. (Sexual Medicine) | 2015 | salud sexual | observacional (caso-control) | `P:paper-veale-2015-bdd-sexual-functioning.pdf` | ok (chat) | 9 p |

## 14. Papers — descartados (se conservan, no se extraen)

| sourceId | tipo | título | motivo de descarte | ruta_fuente |
|---|---|---|---|---|
| `paper-rydzik-2024-combat-specialissue-editorial` | paper | Special Issue "Athletes' Performance and Analysis in Combat Sports" (Appl. Sci. 14:543) | Editorial de convocatoria de número especial; sin datos primarios | `P:paper-rydzik-2024-combat-specialissue-editorial.pdf` |
| `paper-editorialboard-2015-sexualmedicine` | paper | Editorial Board (Sexual Medicine 2015) | Página de junta editorial; no es un paper | `P:paper-editorialboard-2015-sexualmedicine-descartado.pdf` |
| `paper-survey-2015-sexualmedicine` | paper | Survey of the Literature, September 2015 (Sexual Medicine) | Recopilación bibliográfica mensual; sin datos | `P:paper-survey-2015-sexualmedicine-descartado.pdf` |
| `paper-isenberg-2015-letter` | paper | Viewing Sexual Stimuli — Author's Response | Carta al editor (3 p) | `P:paper-isenberg-2015-letter-descartado.pdf` |
| `paper-dragomanov-2026-sport-governance-fragmento` | paper | Artículo sobre gobernanza del deporte (rev. ucraniana Dragomanov, 6(206) 2026, pp. 85–92) | Tema fuera de alcance (gobernanza deportiva, no entrenamiento) y además es un fragmento de páginas (arranca en la bibliografía) | `P:paper-dragomanov-2026-sport-governance-fragmento.pdf` |

## 15. Papers absurdos (carpeta `Papers absurdos\` — todos descartados)

> Verificados uno a uno: son papers-broma generados (autores ficticios: "Dr. Pancracio Melcocha", "Dra. Hermelinda Tostada", temas: lavadoras interdimensionales, zanahorias magnéticas, queso espectrométrico…). Ninguno tiene valor. Ninguno se borra. Duplicados movidos a `PA:_duplicados\` (refrigeradores (1), sombreros (2), creatin = academic research).

`Paper Científico sobre Armarios Sónicos / Bicicletas de Nube / Espectrometría de Queso y Pianos Voladores / Lavadoras Interdimensionales / Refrigeradores Cuánticos (×2) / Sillas de Gravedad Inversa / Sombreros de Melaza (×2) / Teteras Invisibles / Zanahorias Magnéticas / Research Movil thesis / academic research / research creatin monihidrate / research UNAD` — 15 archivos, 3 duplicados archivados.

## 16. Chats de extracción (mapeo fuente ↔ chat)

> Exports originales en `E:\Laboral\_pdf_biblia\Planeacion_Integral\chats_extraccion_libros\` (43 JSON, Qwen/Open WebUI). Copia de trabajo en `biblioteca/_chat-exports/` de esta rama.
> ✅ Las respuestas del asistente **sí viajan en los exports**, en `chat.messages[*].content_list[*].content` (el campo `content` legado está vacío — no confundir). Recuperadas y consolidadas en `biblioteca/extracciones/` (4,8 M chars en 42 archivos). Un único chat sin respuestas recuperables: 1787414852273 (web app, sin fuente de biblioteca).

| chat-export | fuente(s) adjunta(s) | sourceId(s) |
|---|---|---|
| 1787414852273 | (chat de app web, sin fuente) | — |
| 1787414858987 | OG 2ª ed + extracciones parciales | `low-overcoming-gravity-2ed` |
| 1787414859303 | (chat base de datos anatómica, sin archivo) | — (doc de diseño) |
| 1787414877041 | Running_Science.pdf | `bangsbo-running-science` |
| 1787414877077 | wilson exercise therapy | `wilson-exercise-therapy-msk` |
| 1787414884858 | Metz Coping PE | `metz-coping-pe-2003` |
| 1787414884878 | Survey + Viewing + Veale + Perspectives | `paper-survey-2015…`, `paper-isenberg-2015-letter`, `paper-veale-2015…`, `paper-helmer-2015…` |
| 1787414894461 | Testosterone + BehavioralTherapies + EditorialBoard | `paper-pastuszak-2015…`, `paper-cooper-2015…`, `paper-editorialboard-2015…` |
| 1787414900269 | applsci-14-00543 + Behavioral Therapies | `paper-rydzik-2024…`, `paper-cooper-2015…` |
| 1787414900440 | punching forces + Prabowo + 85-92 | `paper-lenetsky…`, `paper-prabowo…`, `paper-dragomanov-2026…` |
| 1787414908330 | ACSM 2018 | `acsm-exercise-testing-prescription-10ed` |
| 1787414976251 | Physiology of Yoga (Bookey) | `bookey-physiology-of-yoga-resumen` |
| 1787414976436 | Cycling Physiology | `wilkins-cycling-physiology-2021` |
| 1787414989201 | Muay Thai | `delp-muay-thai-2013` |
| 1787414989551 | Howse (compressed_02) | `howse-dance-technique-3ed` |
| 1787415001790 | clippinger | `clippinger-dance-anatomy-kinesiology-2ed` |
| 1787415002315 | Dias MMA (compressed) | `dias-training-conditioning-mma` |
| 1787415012710 | haas | `haas-dance-anatomy-2ed` |
| 1787415012817 | Power Meter (compressed) | `allen-power-meter-3ed` |
| 1787415020211 | Secret of Running (compressed) | `vandijk-secret-of-running` |
| 1787415025883 | Boxing Science | `wilson-boxing-science-intro` |
| 1787415026087 | Yoga Biomechanics | `mitchell-yoga-biomechanics` |
| 1787415035228 | Open Textbook ExPhys | `macintosh-open-textbook-exphys` |
| 1787415035759 | Maughan | `maughan-nutrition-in-sport` |
| 1787415041717 | Sexual Fitness | `wuh-sexual-fitness-2002` |
| 1787415048024 | Kegel pdf | `kaleb-kegel-men-2019` |
| 1787415048059 | New Male Sexuality pdf | `zilbergeld-new-male-sexuality-1992` |
| 1787415057183 | Haff (txt) | `haff-essentials-strength-4ed` |
| 1787415057262 | sport-nutrition (compressed) | `bibliotex-sport-nutrition-2022` |
| 1787415068653 | Pearce Longitudinal + applsci-11-10658 + bjj4 | `paper-pearce-2015…`, `paper-ruddock-2021…`, `paper-james-bjj…` |
| 1787415076155 | Notas S&C BJJ (txt) + jssm-17-348 | `doc-notas-scbjj`, `paper-kostikiadis-2018…` |
| 1787415076229 | s12970 + oajsm + RSSN | `paper-aragon-2017…`, `paper-russell-2013…`, `paper-ricci-2021…` |
| 1787415094594 | (chat de planificación, sin archivo) | — |
| 1787415094989 | ijrb-19-5 | `paper-raveendran-2021…` |
| 1787415101528 | levangie txt | `norkin-joint-structure-6ed` |
| 1787415101723 | overcoming tendonitis | `low-overcoming-tendonitis-2019` |
| 1787415112509 | Muscle Ladder | `nippard-muscle-ladder-2024` |
| 1787415112554 | Overcoming Poor Posture | `low-overcoming-poor-posture` |
| 1787415120635 | Squat Bible | `horschig-squat-bible` |
| 1787415126753 | Scientific Principles Hypertrophy | `israetel-scientific-principles-hypertrophy` |
| 1787415126946 | Rebuilding Milo | `horschig-rebuilding-milo-2021` |
| 1787415135322 | Biomechanics of Dance | `lott-biomechanics-of-dance` |
| 1787415135440 | Scientific Principles Strength | `israetel-scientific-principles-strength` |

## 17. Extracciones consolidadas (`biblioteca/extracciones/`)

> 43 archivos, ~4,8 M chars. Estructura de cada archivo: cabecera de procedencia (sourceId, chat de origen) + rondas de respuesta del asistente en orden cronológico (el propio chat ya aplicó la plantilla §0).

| grupo | archivos | origen |
|---|---|---|
| Extracción por libro (32) | `<sourceId>.md` p. ej. `norkin-joint-structure-6ed.md`, `acsm-exercise-testing-prescription-10ed.md`, `low-overcoming-tendonitis-2019.md`, `maughan-nutrition-in-sport.md`, `haff-essentials-strength-4ed.md`… | 1 chat → 1 fuente |
| Consolidación preexistente (1) | `low-overcoming-gravity-2ed.md` | 6 partes md de `D:\Downloads\OG2E_extraccion_parte*.md` |
| Lotes multi-fuente (8) | `chat-1787414858987-og-sistema-fitapp.md`, `chat-1787414884878-papers-salud-sexual-lote1.md`, `chat-1787414894461-papers-salud-sexual-lote2.md`, `chat-1787414900269-papers-pe-cooper-lote3.md`, `chat-1787414900440-papers-combate-lote1.md`, `chat-1787415068653-papers-combate-lote2.md`, `chat-1787415076155-papers-bjj-mma.md`, `chat-1787415076229-papers-nutricion-danza.md` | 1 chat → varias fuentes (papers agrupados) |
| Chats de diseño/planificación (2) | `chat-1787414859303-atlas-anatomico-fichas.md` (fichas JSON de músculos/nervios/articulaciones — insumo directo AG-ANATOM), `chat-1787415094594-plan-integracion-fitapp.md` | sin fuente de biblioteca, contenido preservado |

> Protocolo para normalizar nuevas extracciones: guardar el export en crudo en `biblioteca/_chat-exports/` y consolidar las respuestas a `biblioteca/extracciones/<sourceId>.md` aplicando la plantilla §0 de `docs/agents/PROMPTS_INICIALES.md` SIN inventar contenido faltante (marcar ⚠️ huecos).

## 18. Cola de extracción con Gemini (priorizada)

> Cada extracción se ejecuta sección por sección con el sub-prompt §0 de `docs/agents/PROMPTS_INICIALES.md` (una sección o rango de páginas por llamada; primero TOC → `00-indice.md`; al final `99-resumen.md` con matriz de cobertura). Salida: `biblioteca/extracciones/<sourceId>.md` (o `rag/<domain>/extracciones/` cuando el agente de dominio la ejecute).
> Estimación de secciones = nº de llamadas Gemini aproximado (sub-rangos de 15–30 p para bíblias gráficas).

### Bloque A — Estado de Ejecución de la Cola de Extracción

| # | sourceId | agente | capítulos objetivo | Estado | Archivos Generados / Notas |
|---|---|---|---|---|---|
| 1 | `grays-anatomy-students-4ed` | AG-ANATOM | Todas las regiones anatómicas (Ch 1 a 9 + Neuro) | **100% OK** | `grays-anatomy-students-4ed--*.md` (14 archivos con matriz de cobertura `99-cobertura-*.md`) |
| 2 | `norkin-joint-structure-6ed` | AG-ANATOM | Caps. por articulación y kinesiología articular | **100% OK** | `norkin-joint-structure-6ed.md` (recuperado y consolidado) |
| 3 | `macintosh-skeletal-muscle-2ed` | AG-ANATOM | Todas las partes (I, II, III: Caps 1 a 22) | **100% OK** | `macintosh-skeletal-muscle-2ed--*.md` (14 archivos con matriz de cobertura `99-cobertura-*.md`) |
| 4 | `enoka-neuromechanics-4ed` | AG-ANATOM | Todas las partes (I, II, III: Caps 1 a 9) | **100% OK** | `enoka-neuromechanics-4ed--*.md` (7 archivos con matriz de cobertura `99-cobertura-*.md`) |
| 5 | `moore-clinically-oriented-6ed` | AG-ANATOM | Introducción + Caps. 1 a 9 completos con Blue Boxes | **100% OK** | `moore-clinically-oriented-6ed--*.md` (11 archivos con matriz de cobertura `99-cobertura-*.md`) |
| 6 | `blahnik-full-body-flexibility-2ed` | AG-FIT | 3 ciclos de flexibilidad, repertorio regional y rutinas | **100% OK** | `blahnik-full-body-flexibility-2ed.md` |
| 7 | `tomlinson-evolution-martial-arts` | AG-FIT | Striking, Clinch, Grappling y S&C para combate | **100% OK** | `tomlinson-evolution-martial-arts.md` |
| 8 | `nippard-powerbuilding-4x` | AG-FIT | Manual completo de periodización 4x, DUP y LSRPE | **100% OK** | `nippard-powerbuilding-4x.md` |
| 9 | `nippard-glute-hypertrophy-program` | AG-FIT | Biomecánica de los 3 vectores de fuerza de glúteos | **100% OK** | `nippard-glute-hypertrophy-program.md` |
| 10 | `maughan-nutrition-in-sport` | AG-NUTRI | M1 a M7: Tablas y figuras completas (hidratación/CHO) | **100% OK** | `rag/nutricion/extracciones/maughan-nis-tablas-figuras-completas.md` |
| 11 | `haff-essentials-strength-4ed` | AG-NUTRI/FIT | N1 a N6: Tablas y figuras completas (DRIs/comida pre-evento) | **100% OK** | `rag/nutricion/extracciones/nsca-est4-tablas-figuras-completas.md` |
| 12 | `bibliotex-sport-nutrition-2022` | AG-NUTRI | G1 a G3: Pautas pre-evento, CHO diario y RED-S | **100% OK** | `rag/nutricion/extracciones/sportnutrition-3g-tablas-figuras-completas.md` |
| 13 | `daniels-running-formula-4ed` | AG-FIT | Sistema VDOT, zonas E/M/T/I/R y periodización de 4 fases | **100% OK** | `daniels-running-formula-4ed.md` |
| 14 | `bookey-physiology-of-yoga-resumen` | AG-FIT | Mitos vs ciencia, sistema musculoesquelético y tono vagal | **100% OK** | `bookey-physiology-of-yoga-resumen.md` |
| 15 | `rp-renaissance-kitchen` | AG-NUTRI/GASTRO | Recetario alto en proteína, sustitutos y macros | **100% OK** | `rp-renaissance-kitchen.md` |
| 16 | `nippard-body-recomposition` | AG-FIT/NUTRI | Guía definitiva de recomposición, partición y macros | **100% OK** | `nippard-body-recomposition.md` |
| 17 | `nippard-fundamentals-hypertrophy` | AG-FIT | Anatomía funcional y programas FullBody/UL/Split | **100% OK** | `nippard-fundamentals-hypertrophy.md` |
| 18 | `inda-fuerza-female-strength` | AG-FIT | Fuerza femenina, cues técnicos y macrociclo de 12 semanas | **100% OK** | `inda-fuerza-female-strength.md` |

### Bloque B — ~~`en-chat` SIN respuesta~~ ✅ RESUELTO (2026-08-22, segunda pasada)

> Las respuestas SÍ estaban en los exports (campo `chat.messages[*].content_list[*].content`; el `content` legado venía vacío y llevó al diagnóstico erróneo inicial). Todas las fuentes marcadas `ok (chat)` están recuperadas en `biblioteca/extracciones/`. La cola pendiente queda reducida al Bloque A.

## Extras e incidencias

1. **Exports de chat — RESUELTO en segunda pasada** (ver §16): las respuestas viven en `chat.messages[*].content_list[*].content`. Recuperadas 42/43 chats con contenido (4,8 M chars → `biblioteca/extracciones/`). El único chat sin respuestas es 1787414852273 (tema web app, sin fuente de biblioteca). Nota técnica para futuras importaciones: ignorar el campo `content`/`reasoning_content` legado (vacío) y leer `content_list`.
2. **Renombrado INV pendiente**: aplicar en `E:\Laboral\…\investigacion\` los nombres propuestos en §4/§9 tras el merge (los PDF están fuera de git por `*.pdf` en `.gitignore`; ya commiteado el renombrado de los docx trackeados a `_duplicados/`).
3. **Duplicados archivados** (nunca borrados): `L:D:` 14 archivos, `P:D:` 1, `PA:_duplicados` 3, `JN:_duplicados` 1, `DL:_duplicados` 2 (escaneo alterno 976 p de OG 2ª ed), `INV:_duplicados` 3 (commiteados). Dups internos de colecciones JN/RP documentados en §10 sin mover.
4. **Overcoming Gravity "1"** (`Overcoming_Gravity_-_Steven_Low_1.pdf`): pese al nombre, es la **2ª edición** (escaneo alterno de 976 p) → archivado como dup de `low-overcoming-gravity-2ed`.
5. **`paper-ricci-2021…` y `paper-prabowo…`**: años tomados de la publicación (JISSN 2021; Prabowo ~2025 por "Pedagogy of Health"). Verificar al extraer.
