# PENDIENTES — Registro maestro de lo postergado (2026-09-09)

> Lista viva. Todo lo que estamos aplazando, con dueño y desbloqueo.
> Actualizada por el orquestador en cada despacho.

## A. Pendientes del USUARIO — ordenados por RAZONAMIENTO requerido (mayor→menor)

> Reordenado 2026-09-14 tras los despachos 6-9. A1 exige más criterio; A9 es
> copiar un archivo. Todas desbloquean valor distinto.

| # | Pendiente | Detalle | Desbloquea |
|---|---|---|---|
| U1 | **Catálogo de reglas (GLM 5.3 web)** | Pegar prompt de DESPACHO-5 §A y traer el output para verificar/importar | Motor de reglas completo (más allá de las 10 semilla de fitness) |
| U2 | **Gemini Spark configurado** | Tareas diarias leyendo las 4 DBs de Notion (Tasks, Career, Sessions, Measurements) — prompt en DESPACHO-5 §B | Automatización diaria: insights, revisión de pipeline, kcal |
| U3 | **Deploy del Worker IA** | `cd worker && npm i && npx wrangler secret put WORKER_SECRET_KEY && npx wrangler secret put GEMINI_API_KEY && npm run deploy` (llamada real a Gemini YA implementada, fallback determinista sin key) | Borradores automáticos: investigación de empresa, tailoring de CV, cartas |
| U4 | **PDFs comerciales de alemán** | Copiar a `public/library/languages/`: `Menschen_A1_1.pdf`, `Menschen_A1_2.pdf`, `Grammatik_Aktiv_A1_A2.pdf` | Anclaje a página exacta de las unidades A1.1 (hoy citan «por verificar») |
| U5 | **Datos del CV por confirmar (doc-17 §2)** | email, teléfono, URL portfolio, número final de triángulos, métricas SUS/NASA-TLX, fecha de grado | CV 100% final (hoy sale limpio pero con 4 claims sin confirmar) |
| U6 | ~~Validar WIP de agent/portfolio~~ **RESUELTO 2026-09-14**: auditoría del orquestador → NO merge (predaterría el barrido de diseño y trae tooling ajeno `.opencode`); rama archivada como referencia para cherry-pick futuro (SphericalGallery) | — |
| U7 | **Cotizador en chat separado** | Traer resultados de OX Alpha para verificación + merge final | Despliegue del cotizador público |
| U8 | **Instalar deps del worker** | `cd worker && npm i` (wrangler para deploy local) | Test local del worker con `npm run dev` |

## B. Deuda técnica documentada (auditoría DESPACHO-6, no corregida)

| # | Ítem | Riesgo |
|---|---|---|
| T1 | RoadmapBoard usa clave retirada `plan_maestro_career_goals` (doble fuente de verdad vs careerStore) | Pérdida de datos de goals al migrar |
| T2 | `cardio_session_history` nadie la escribe → feed de cardio del motor de reglas siempre vacío | Reglas de cardio nunca disparan |
| T3 | skillStateStore sin `version` en persist; careerStore sin `partialize` | Fragilidad ante cambios de shape |
| T4 | Doble subsistema de persistencia fitness (`fitapp_workout_history` vivo vs `fit_*_v1` huérfanas) | Confusión de fuentes; migración futura |
| T5 | `EnergyLevel` (canonicalDomainModel) y `PerceivedEnergy` (userState) duplicados sin puente | Type drift |
| T6 | Módulos huérfanos verificados: `src/lib/graph/**` (0 consumidores), `storage/idb+migrate`, `notionSyncService`, `FitAppWorkoutLogger`, `ExerciseDatabaseBrowser`, `injuryTriage`, `CustomRoutineBuilder` | Feature muerta o por cablear |
| T7 | Inglés académico: sin libro anclado (solo alemán tiene registro) — candidato: libro libre de gramática académica | — |

## C. Features postergadas (decisión de scope, no bugs)

| # | Feature | Estado |
|---|---|---|
| F1 | Sugerencias de CARRERA en el motor (hoy solo fitness + vocab) | **EN CURSO esta sesión** |
| F2 | Freelance para agencias industriales (WebGL/3D): offerings + targets + página | **EN CURSO esta sesión** |
| F3 | Portafolio modular público por variante (el brief interno existe; la página pública no) | Diseño pendiente |
| F4 | 3D anatomy viewer GLB — mergear trabajo del worktree anatomia ya está; faltan hotspots musculares en lecciones | Media |
| F5 | Notion push bidireccional (pull funciona; push de Tasks/Career desde la app al editar) | Baja (Spark puede sustituir) |
| F6 | Kitchen/gaming sections (mediano plazo, pedido explícito del usuario) | Baja prioridad confirmada |
| F7 | Deploy GitHub Pages del app completo | A pedido |

## D. Nota de deploy (F7)

`public/library/languages/Oxford_Living_Grammar_*.pdf` (219 MB, copyright del
usuario) están GITIGNORED: el visor los sirve en dev/build local pero **no se
publican**. El workflow de deploy público debe mantenerlos fuera (ya cubierto
al no commitearlos). FSI German (dominio público, 6.5 MB) sí viaja.
