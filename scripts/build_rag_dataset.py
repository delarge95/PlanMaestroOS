import json
import os
import glob

def build_full_rag():
    rag_data = {
        "version": "3.0.0",
        "generated_at": "2026-07-24",
        "system_info": {
            "app_name": "Plan Maestro Total OS",
            "owner": "Alexander Woodcock",
            "role": "Unity Technical Artist / Real-Time 3D Developer",
            "target_income": "$1000 - $1500 USD / mes (Remoto Internacional)"
        },
        "sources": [
            {
                "id": "src-min-max",
                "title": "The Min-Max Program",
                "author": "Jeff Nippard",
                "type": "Libro PDF",
                "path": "_pdf_biblia/Planeacion_Integral/investigacion/The_Min-Max_Program_-_Jeff_Nippard.pdf",
                "description": "Programa de 12 semanas (2 bloques de 6 semanas) basado en entrenamiento de bajo volumen y alta intensidad (1-2 series por ejercicio a RIR 0-1)."
            },
            {
                "id": "src-overcoming-gravity",
                "title": "Overcoming Gravity: A Systematic Approach to Gymnastics and Bodyweight Strength",
                "author": "Steven Low",
                "type": "Libro PDF",
                "path": "_pdf_biblia/Planeacion_Integral/investigacion/Overcoming Gravity_ A Systematic Approach to Gymnastics and -- Low, Steven -- 2, 2016.pdf",
                "description": "Manual técnico de progresiones en calistenia y gimnasia: parada de manos, plancha, muscle-up, anillas y estabilidad articular."
            },
            {
                "id": "src-overcoming-tendonitis",
                "title": "Overcoming Tendonitis: A Systematic Approach to Evidence-Based Treatment",
                "author": "Steven Low",
                "type": "Libro PDF",
                "path": "_pdf_biblia/Planeacion_Integral/investigacion/overcoming-tendonitis-a-systematic-approach-to-the-evidence-based-treatment-of-tendinopathy-4-pdf-free (1).pdf",
                "description": "Protocolos de rehabilitación tendinosa: cargas isométricas (Spanish Squats 3-5x45s), Heavy Slow Resistance (HSR) y tempo 3-0-3."
            },
            {
                "id": "src-reporte-clinico",
                "title": "Reporte Clínico de Neurodesarrollo y Ansiedad",
                "author": "Equipo Clínico Profesional",
                "type": "Reporte PDF",
                "path": "_pdf_biblia/Planeacion_Integral/investigacion/reporte_clinico_neurodesarrollo_ansiedad.pdf",
                "description": "Diagnóstico de TDAH Inatento, Ansiedad Social de Desempeño, insomnio subclínico y posible perfil TEA."
            },
            {
                "id": "src-plan-accion-tdah",
                "title": "Plan de Acción Conductual para TDAH y Ansiedad Social",
                "author": "Equipo Clínico Profesional",
                "type": "Plan PDF",
                "path": "_pdf_biblia/Planeacion_Integral/investigacion/plan_accion_tdah_ansiedad_social-1.pdf",
                "description": "Módulos conductuales A-F de TDAH y A-F de Ansiedad Social, jerarquía de exposición de 9 niveles, video feedback y control de rumiación."
            },
            {
                "id": "src-plan-maestro-v3",
                "title": "Plan Maestro v3",
                "author": "Alexander Woodcock",
                "type": "Documento Markdown",
                "path": "_pdf_biblia/Planeacion_Integral/investigacion/plan_maestro_v3.md",
                "description": "Documento consolidador v3 con arquitectura de prioridades, rutina diaria base, hábito de Alemán y reglas de rescate."
            },
            {
                "id": "src-plan-fitness",
                "title": "Plan Fitness, Calistenia Híbrida y Rehabilitación",
                "author": "Alexander Woodcock",
                "type": "Documento Markdown",
                "path": "_pdf_biblia/Planeacion_Integral/investigacion/plan_fitness.md",
                "description": "Plan físico de 3 fases combinando Nippard Min-Max con calistenia en anillas y rehabilitación tendinosa."
            },
            {
                "id": "src-horarios-fase",
                "title": "Manual Operativo y Cronograma Maestro Fase por Fase (v3)",
                "author": "Alexander Woodcock",
                "type": "Documento Markdown",
                "path": "_pdf_biblia/Planeacion_Integral/horarios_maestros_fase_por_fase.md",
                "description": "Manual operativo completo hora por hora y día por día con explicaciones pedagógicas, clínicas y físicas."
            },
            {
                "id": "src-horarios-grid",
                "title": "Matriz Semanal Grid de Horarios Integrados (v3)",
                "author": "Alexander Woodcock",
                "type": "Documento Markdown",
                "path": "_pdf_biblia/Planeacion_Integral/horarios_matriz_semanal_grid.md",
                "description": "Matriz semanal tipo hoja de cálculo (Excel) con días en la primera fila y horas a la izquierda."
            },
            {
                "id": "src-biblia-pdf",
                "title": "Biblia de Carrera Profesional",
                "author": "Alexander Woodcock",
                "type": "Documento PDF",
                "path": "_pdf_biblia/build_complete/biblia.pdf",
                "description": "Biblia de posicionamiento laboral, análisis de mercado, Paquete Mínimo Vendible y estandarización."
            },
            {
                "id": "src-roadmap-pdf",
                "title": "Roadmap Laboral de 16 Semanas",
                "author": "Alexander Woodcock",
                "type": "Documento PDF",
                "path": "_roadmap_laboral/build/roadmap.pdf",
                "description": "Plan paso a paso de 16 semanas para lanzamiento público, aplicaciones cualificadas y contratación remota."
            }
        ],
        "minmax_program": {
            "description": "Cuadros calcados del programa The Min-Max Program de Jeff Nippard con sustitución directa de Calistenia / Anillas para Alexander.",
            "weeks": [
                {
                    "week_number": 1,
                    "block": 1,
                    "days": [
                        {
                            "day_name": "Day 1: Upper 1",
                            "exercises": [
                                {
                                    "name": "DB Incline Press / Barbell Bench Press",
                                    "calisthenics_substitution": "Pseudo Planche Pushups / Fondos en Anillas",
                                    "reason": "Permite rotación articular natural del hombro izquierdo evitando dolor por abducción fija.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "Cable Flye",
                                    "calisthenics_substitution": "Ring Chest Flyes / Aperturas en Anillas",
                                    "reason": "Tensión constante en pectoral con peso corporal y apoyo en suspensión.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "Machine Lateral Raise",
                                    "calisthenics_substitution": "Ring Lateral Leans / Elevar lateral en paralelas",
                                    "reason": "Aislamiento de deltoides lateral adaptado.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "1-Arm Cable Overhead Triceps Extension",
                                    "calisthenics_substitution": "Ring Triceps Extensions (Extensión de tríceps en anillas)",
                                    "reason": "Carga directa al tríceps manteniendo codo protegido.",
                                    "sets": 2,
                                    "rir": "1-2"
                                }
                            ]
                        },
                        {
                            "day_name": "Day 2: Lower 1",
                            "exercises": [
                                {
                                    "name": "Nordic Ham Curl / Lying Leg Curl",
                                    "calisthenics_substitution": "Nordic Hamstring Curls en suelo con apoyo",
                                    "reason": "Fuerza excéntrica pura en isquiotibiales para salud de rodilla.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "Barbell Lunge / Leg Press",
                                    "calisthenics_substitution": "Progresiones de Pistol Squat (Sentadilla a 1 pierna)",
                                    "reason": "Fuerza unilateral de cuádriceps sin comprimir la columna lumbar.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "Sissy Squat / Leg Extension",
                                    "calisthenics_substitution": "Spanish Squats Isométricos (3-5x45s) / Sissy Squats libres",
                                    "reason": "Anestesia y fortalecimiento aislado del tendón rotuliano.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "Donkey Calf Raise / Seated Calf Raise",
                                    "calisthenics_substitution": "Elevaciones de talón unilaterales en escalón",
                                    "reason": "Aislamiento de sóleo y gemelos.",
                                    "sets": 2,
                                    "rir": "1-2"
                                }
                            ]
                        },
                        {
                            "day_name": "Day 3: Upper 2",
                            "exercises": [
                                {
                                    "name": "1-Arm Cable Pulldown / Lat Pulldown",
                                    "calisthenics_substitution": "Dominadas Pronadas Lastradas / Dominadas en Anillas",
                                    "reason": "Tirón vertical de máxima sobrecarga para dorsal ancho.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "Chest-Supported DB Row / Seated Row",
                                    "calisthenics_substitution": "Archer Ring Rows (Remos en anillas estilo arquero)",
                                    "reason": "Tirón horizontal unilateral con activación de romboides y escápula.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "Cable Shrug-In",
                                    "calisthenics_substitution": "Encogimientos escapulares en barra / anillas",
                                    "reason": "Estabilidad de trapecio superior y cuello.",
                                    "sets": 2,
                                    "rir": "1-2"
                                }
                            ]
                        },
                        {
                            "day_name": "Day 4: Lower 2",
                            "exercises": [
                                {
                                    "name": "Sissy Squat / Hack Squat",
                                    "calisthenics_substitution": "Spanish Squats cargados con tempo 3-0-3",
                                    "reason": "Estímulo de cuádriceps sin agravar la tendinopatía rotuliana.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "Seated Cable Deadlift / Romanian Deadlift",
                                    "calisthenics_substitution": "Single-Leg Romanian Deadlift (Peso muerto rumano a 1 pierna)",
                                    "reason": "Trabajo de glúteo e isquios en bisagra de cadera.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "45° Hyperextension",
                                    "calisthenics_substitution": "Reverse Hyperextensions / Elephant Walks 3x20",
                                    "reason": "Descompresión lumbar y flexibilidad activa de la cadena posterior.",
                                    "sets": 2,
                                    "rir": "1-2"
                                }
                            ]
                        },
                        {
                            "day_name": "Day 5: Arms + Delts",
                            "exercises": [
                                {
                                    "name": "Standing DB Curl / Incline DB Curl",
                                    "calisthenics_substitution": "Pelican Curls / Ring Biceps Curls en anillas",
                                    "reason": "Flexión de codo con peso corporal y rotación neutra.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "Skull Crusher / Cable Pushdown",
                                    "calisthenics_substitution": "Bodyweight Triceps Extensions en barra baja / anillas",
                                    "reason": "Sobrecarga en tríceps con alineación de muñecas.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "Preacher Hammer Curl",
                                    "calisthenics_substitution": "Ring Hammer Curls agarre neutro",
                                    "reason": "Trabajo del braquial anterior sin estrés en la muñeca.",
                                    "sets": 2,
                                    "rir": "1-2"
                                },
                                {
                                    "name": "Close Grip Dip",
                                    "calisthenics_substitution": "Fondos en Anillas con rotación externa al subir",
                                    "reason": "Empuje vertical en suspensión desarrollando manguito rotador.",
                                    "sets": 2,
                                    "rir": "1-2"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "clinical_modules": [
            {
                "id": "tdah-modulo-a",
                "title": "Módulo A TDAH: Sistema Externo Único",
                "exercises": [
                    "Agenda / Calendario Único (una sola fuente de verdad)",
                    "Lista Maestra de Proyectos en Notion/Obsidian",
                    "Lista Diaria Máxima de 3 Tareas en la planeación matutina",
                    "Revisión Semanal Fija los Sábados de 09:00 a 11:00"
                ]
            },
            {
                "id": "tdah-modulo-b",
                "title": "Módulo B TDAH: Inicio de Tareas (Anti-Inercia)",
                "exercises": [
                    "Definir micro-tarea de los primeros 10 minutos",
                    "Abrir archivo/software exacto sin pestañas secundarias",
                    "Ejecutar 'Versión Mala' inicial para romper parálisis",
                    "Registrar la fricción mental en 1 línea sin juzgar",
                    "Escribir frase exacta de reentrada para la siguiente sesión"
                ]
            },
            {
                "id": "ansiedad-modulo-e",
                "title": "Módulo E Ansiedad Social: Exposición Graduada (9 Niveles)",
                "levels": [
                    "Nivel 1: Explicar tema de 3 min en voz alta a solas",
                    "Nivel 2: Grabar audio de 5 min y escucharlo sin juzgar",
                    "Nivel 3: Grabar video de 5 min y hacer video feedback",
                    "Nivel 4: Presentar 3 diapos a 1 persona segura (pareja/amigo)",
                    "Nivel 5: Presentar demo imperfecta tolerando errores visibles",
                    "Nivel 6: Presentar a grupo pequeño de 2-3 personas",
                    "Nivel 7: Simular jurado hostil con preguntas incómodas",
                    "Nivel 8: Ensayo completo de 20 min sin leer diapositivas",
                    "Nivel 9: Sustentación real / Entrevista laboral de alta presión"
                ]
            }
        ],
        "german_module": {
            "schedule": "13:30 – 14:00 (Lunes a Domingo)",
            "daily_minutes": 30,
            "components": [
                {"name": "Duolingo", "duration": "5 min", "objective": "Vocabulario, racha diaria y fijación de palabras"},
                {"name": "Libros A1 + Audios", "duration": "15-20 min", "objective": "Lectura y escucha activa con Menschen A1 o Grammatik Aktiv"},
                {"name": "IA Conversacional", "duration": "5-10 min", "objective": "Micro-interacción de voz/chat en alemán básico A1 con corrección"}
            ]
        }
    }

    # Attach all career audit docs
    md_files = sorted(glob.glob("e:/Laboral/[0-3][0-9]*.md"))
    rag_data["career_docs"] = []
    for filepath in md_files:
        fname = os.path.basename(filepath)
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        first_line = content.split('\n')[0].replace('#', '').strip()
        rag_data["career_docs"].append({
            "id": fname.replace('.md', ''),
            "filename": fname,
            "title": first_line if first_line else fname,
            "path": fname,
            "size_bytes": os.path.getsize(filepath),
            "content": content
        })

    os.makedirs("e:/Laboral/src/data", exist_ok=True)
    with open("e:/Laboral/src/data/master_rag_dataset.json", "w", encoding="utf-8") as f:
        json.dump(rag_data, f, ensure_ascii=False, indent=2)

    print("Master RAG dataset compiled successfully with", len(rag_data["career_docs"]), "audit docs!")

if __name__ == "__main__":
    build_full_rag()
