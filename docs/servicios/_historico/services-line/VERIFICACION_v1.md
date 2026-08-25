> {0} Archivado en la consolidaci{1}n (ciclo 5): l{2}nea de cat{3}logo propia de agent/services. Contenido cubierto por los cat{3}logos can{1}nicos 01{4}07 de esta carpeta.

# Verificación v1 — Catálogo maestro + Metodología + Espejo TS

> Auditoría de consistencia interna solicitada por la regla "verificación por commit" (AG-SERV).
> Alcance: `CATALOGO_SERVICIOS.md` v1.0, `00_METODOLOGIA.md` v1, `01_render_3d.md` (C1), `src/data/services/rateCard.ts` + `types.ts` (sin commitear al momento de esta auditoría).
> Método: recomputación manual de sumas de módulos/subtareas por tier y contraste contra los totales publicados; contraste cruzado de rate cards. Sin modificar archivos canónicos (hay una sesión AG-SERV activa escribiendo el espejo TS; se evita colisión).
> Fecha: 2026-08-25 · Auditor: AG-SERV (instancia de verificación)

---

## 1. Hallazgo CRÍTICO — dos rate cards conviven

| | Tarjeta A ("catálogo") | Tarjeta B ("metodología") |
|---|---|---|
| Dónde vive | `CATALOGO_SERVICIOS.md` §1.2 **y** `src/data/services/rateCard.ts` (espejo TS ya lo codifica) | `00_METODOLOGIA.md` §2 **y** `01_render_3d.md` (C1 usa RC-ART para sus costos) |
| Clases | `ART 25–38` · `RT 28–45` · `AI 35–55` · `TL 32–48` | `RC-ART 20–28` · `RC-RTA 25–35` · `RC-WEB 27–38` · `RC-AI 28–40` · `RC-CON 40–55` |
| Redondeo declarado | múltiplos de **5 USD** por subtarea (cat §0) | múltiplos de **50 USD** (met §4) |

**Impacto:** las cifras de costo publicadas NO son reproducibles desde una única fuente hoy.
Ejemplo concreto: MOD-A tier A-S en `01_render_3d.md` publica `USD 60–225` (= 3–8 h × RC-ART 20–28,
redondeo 5). El mismo cálculo con la tarjeta del espejo TS daría `75–305`. La trazabilidad
`subtaskId → tier → rateClass → fuente` (requisito ficha §3.10) está rota hasta resolver.

**Decisión requerida del usuario (decisión de negocio, no técnica):**
- **Opción 1 — gana Tarjeta A (ART/RT/AI/TL)**: es la que ya vive en el espejo determinista
  (`rateCard.ts`) y en las tablas del catálogo maestro. Acción: reescribir `00_METODOLOGIA.md` §2
  como tabla-puntero a la tarjeta vigente + mapeo `RC-* → deprecada`; recostear C1 (`01_render_3d.md`).
- **Opción 2 — gana Tarjeta B (RC-\*)**: tarifas más conservadoras/pisos más bajos (mejor entrada
  competitiva). Acción: reescribir §1.2 del catálogo, `rateCard.ts`, y TODAS las columnas de costo
  del catálogo maestro antes de Fase 1.
- Unificar redondeo (se recomienda **5 USD** por granularidad de subtarea; el 50 era para paquetes).

Mientras no se decida: **ningún rango de costo debe publicarse hacia clientes** (las horas sí son
estables; solo la conversión hora→USD depende de esta decisión).

## 2. Verificaciones aritméticas realizadas

### 2.1 Consistentes (recomputadas OK)

| Bloque | Check | Resultado |
|---|---|---|
| B1 módulos BM1–BM6,BM9–BM11 | S 6–13 h · M 17–46 h | ✅ coincide con publicado |
| B2 (+BM12) | S 7–15 · M 19–50 | ✅ |
| B3/B4 (BM7+BM8 añadidos) | M 26–66 / 32–76 | ✅ |
| B5 shaders | S 6.5–14 → publ. 7–14 · M 14–32 | ✅ (min redondeado arriba) |
| C4 scrolly one-page M | 15–32 h | ✅ |
| C7 MVP M | 62–142 h **incluye C7.5 backend ligero** | ✅ con esa lectura (aclarar wording "sin backend pesado" → "backend ligero incluido") |
| B7 drone ejemplos slider | horas dentro de tier base + excedente por pieza | ✅ coherente |
| D1 shot simple/cinematográfico | sumas de D1.x por tier | ✅ |

### 2.2 Discrepantes (rangos publicados no reproducibles de las tablas)

| Ref | Publicado | Recomputado | Nota |
|---|---|---|---|
| E1 "Asistente FAQ S/M" | 14–51 h | S: 14–28 · M: 28–63 h | el techo 51 no sale de ninguna combinación obvia (¿S-max…M-medio?) |
| E1 "RAG multi-fuente L" | 63–124 h | 63–130 h | −6 h en techo (¿se excluyó E1.6 logging?) |
| C6 configurador M | ≈21–56 h | 23–56 h (incl. C6.5) | si C6.5 es opcional, documentarlo como excluido del mínimo |
| B6 explosión standalone S/L | 6–12 / 29–59 | 5–13 / 27–61 según módulos incluidos | definir explícitamente qué subtareas componen el "standalone" |

Ninguna discrepancia supera ~10 %; todas se resuelven declarando composición exacta del rango
(o regenerando desde el motor cuando exista, como ya anticipa la nota del catálogo §4).

### 2.3 Pendiente conocido (no es defecto nuevo)

Los rangos USD de los paquetes PK-01…PK-10 están marcados en el propio catálogo como
"DEBEN regenerarse desde el motor antes de publicarse" — correcto mantenerlos internos hasta Fase 1.

## 3. Hallazgos menores

1. **`E3.6 Mejora continua`** mezcla semántica h-mes/tier en una fila de tabla por tiers — separar
   en fila propia fuera de la matriz S/M/L/XL o expresarla como multiplicador del retainer F5.
2. **Mojibake UTF-8** en `docs/agents/STATUS-serv.md` (mismo patrón que el corregido en tickets.md
   en commit `933d587`). Re-guardar como UTF-8 sin BOM.
3. **Cobertura vs. mandato del usuario**: completa (A1/A2, B1–B7, C1–C8, D1, E1–E3, F1–F5 cubren
   render estático/animación, assets realtime interactivos/no y animados, shaders estilizados,
   exploded, three/babylon/Spline/Unity WebGL, web app 3D, footage real con reconocimiento de
   escena y planos, scrollytelling/minijuegos/catálogos, IA directa/indirecta/empresarial, FX,
   CAD→WebGL, texturas, presentaciones web). Extras propuestos por el agente que el usuario puede
   vetar: F3 Optimization Doctor, F4 consultoría empaquetada, F5 retainer mixto.
4. **No cubiertos aún (gap §7.3 del catálogo los anticipa)**: AR/USDZ quick-look, photogrammetry,
   virtual staging — añadir como filas nuevas con el formato estándar cuando se aprueben.

## 4. Estado de archivos al cierre de esta auditoría

| Archivo | Estado |
|---|---|
| `PLAN_MULTIAGENTE.md` §3.10 + §1.1 | commiteado (c657cad), ticket resuelto (933d587) — pendiente aprobación PR |
| `PROMPTS_INICIALES.md` §13 AG-SERV | commiteado (c657cad) |
| `00_METODOLOGIA.md` | v1 RC-* restaurada tras sobrescritura accidental (da9020e) — **pendiente decisión §1** |
| `CATALOGO_SERVICIOS.md` | v1.0 commiteada (becd6cb) — §1.2 divergente de metodología |
| `01_render_3d.md` (C1) | commiteado (370958a) — usa RC-* |
| `src/data/services/{types,rateCard}.ts` | sin commitear al auditar — usa tarjeta A |
