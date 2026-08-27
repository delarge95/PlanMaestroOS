# AG-SERV · C1 — Render 3D offline (estático y animación)

> Owner: AG-SERV · v1 · 2026-08-25 · Tarifas y políticas: ver `00_METODOLOGIA.md` (rate card v1)
> Clase dominante: **RC-ART** (USD 20–28/h). Los rangos son estimación operativa, no cotización cerrada (metodología §1.5).

---

## Módulos reutilizables (citados por otros catálogos)

### MOD-A · Modelado desde cero (hard surface: producto, objeto, máquina)

Se cota aparte cuando el cliente no aporta modelo 3D. Si el modelo ya existe (CAD, GLB, OBJ), no aplica: se usa el pipeline de limpieza correspondiente (C6/C2).

| Tier | Criterio | Horas | Costo (RC-ART) |
|---|---|---|---|
| A-S | Objeto simple, ≤8 piezas, formas mayormente prismáticas | 3–8 h | USD 60–225 |
| A-M | 9–30 piezas, bevels limpios, detalle medio | 8–20 h | USD 160–560 |
| A-L | 31–80 piezas o superficies curvas complejas | 20–45 h | USD 400–1260 |

Personajes/orgánicos: **discovery obligatorio** (no hay tabla). No es servicio principal del posicionamiento (doc-03 §4.9); se acepta caso a caso.

### MOD-B · Rigging + animación orgánica

Discovery obligatorio. Fuera de tablas de este catálogo.

---

## RND-01 · Render estático

**Qué es:** imágenes fotorrealistas o estilizadas de un producto/objeto/escena, para e-commerce, marketing, presentaciones o print.

**Entregables:** imágenes en resolución y formatos acordados (PNG/JPG/EXR; ≤4K en rangos base), versión con y sin marca de agua durante revisión.

**Variables que mueven el precio:** número de imágenes, cantidad y complejidad de materiales, necesidad de set dressing, si hay modelo 3D aportado o se usa MOD-A, resolución final.

### Subtareas × tier (horas)

| Subtarea | S | M | L |
|---|---|---|---|
| Brief técnico + moodboard/referencias | 0.5–1 | 0.5–1.5 | 1–3 |
| Setup de escena (import/limpieza, escala, cámaras) | 1–2 | 1.5–3 | 2–5 |
| Iluminación y ambiente (HDRI/studio) | 1–2 | 2–4 | 3–6 |
| Lookdev: materiales y texturizado | 1–3 | 2–6 | 4–10 |
| Set dressing / props | — | — | 2–8 |
| Render passes + denoise | 0.5–1 | 1–2 | 1.5–4 |
| Post-producción (grade, composición 2D) | 0.5–1 | 1–2 | 2–4 |
| QA + export de formatos | 0.5–1 | 0.5–1 | 0.5–1 |

### Definición de tiers

| Tier | Criterios |
|---|---|
| S | 1–2 imágenes hero de un objeto; ≤3 materiales; fondo estudio/HDRI; modelo aportado o MOD-A A-S aparte |
| M | Hasta 5 imágenes o escena con contexto simple (superficie + props mínimos); ≤6 materiales |
| L | Campaña de 6–12 imágenes con look consistente; set dressing completo; lookdev avanzado (>6 materiales, desgaste) |

### Paquetes

| Tier | Total horas | Precio | Plazo |
|---|---|---|---|
| S | 5–11 h | **USD 100–300** | 2–3 días hábiles |
| M | 9–20 h | **USD 200–550** | 4–7 días hábiles |
| L | 16–41 h | **USD 300–1.150** | 8–14 días hábiles |
| XL (escena completa, arquitectura, >12 imágenes) | discovery | discovery fijo 4–8 h (RC-CON: USD 160–440) + cotización por hitos | por hitos |

**Ejemplo ilustrativo S:** render hero de una carcasa de drone aportada en STEP/OBJ, 2 ángulos, fondo estudio. *(Placeholder visual hasta tener asset propio publicable — regla anti-URLs-inventadas.)*

---

## RND-02 · Animación 3D (render offline)

**Qué es:** video renderizado (producto girando, ensamblaje, secuencia narrativa corta) para social, web o presentaciones.

**Entregables:** video master (H.264/H.265 o ProRes acordado) + versiones recortadas para plataformas (16:9, 1:1, 9:16 cuando aplique).

**Variables que mueven el precio:** duración total, número de shots, tipo de animación (cámara vs objetos vs simulaciones), audio a sincronizar (el archivo lo aporta el cliente).

### Subtareas × tier (horas)

| Subtarea | S | M | L |
|---|---|---|---|
| Storyboard / previs | 2–4 | 3–6 | 4–8 |
| Layout de escena y cámaras | 1–2 | 2–4 | 3–6 |
| Animación (cámara/objetos mecánicos) | 4–8 | 8–16 | 12–24 |
| Simulaciones básicas (partículas simples) | — | 0–6 | 4–10 |
| Iluminación + lookdev | 2–4 | 4–7 | 5–10 |
| Gestión de renders/passes | 2–3 | 3–5 | 4–8 |
| Composición, edit final y grade | 2–3 | 3–5 | 4–8 |
| Entregables multi-formato | 0.5–1 | 0.5–1 | 0.5–1 |

### Definición de tiers

| Tier | Criterios |
|---|---|
| S | ≤10 s totales; 1–2 shots; animación de cámara u objeto simple; sin sims |
| M | 15–30 s; 2–4 shots; animación mecánica simple; partículas básicas opcionales |
| L | 30–90 s narrativos; ≥4 shots; sims moderadas; integración de audio |

### Paquetes

| Tier | Total horas | Precio | Plazo |
|---|---|---|---|
| S | 13.5–25 h | **USD 250–700** | 5–8 días hábiles |
| M | 23.5–50 h | **USD 450–1.400** | 2–3 semanas |
| L | 36.5–75 h | **USD 750–2.100** | 3–5 semanas |
| Con personaje riggado o FX pesados | discovery | MOD-B / ver C5 | por hitos |

**Notas:**
- Turntables automáticos de producto (cámara orbital única, sin edit) son el piso real del tier S; si el cliente solo necesita eso, conviene ofrecerlo como variante mínima de RND-02 S.
- Sims complejas (fluidos, destrucción, tela) no están en esta tabla: se estiman como shot FX vía C5-VFX-02.

---

## Fuentes y trazabilidad

- Tarifas: rate card v1 (`00_METODOLOGIA.md` §2), anclada a doc-03 §4.1 [lemon-core], §4.9 [zip-3dartist], §9.1–9.3.
- Horas: inferencia propia documentada de AG-SERV sobre pipeline Blender/Cycles estándar; primera calibración contra tiempo real pendiente hasta cerrar los primeros proyectos (se registrará en rag/services.json cuando exista).
