# 07 · Matriz de complejidad cualitativa

> v1.0 · 2026-08-25 · Owner: AG-SERV · Complementa [`01_modelo_cobro.md`](01_modelo_cobro.md) §3.
> Los drivers cuantitativos (nº piezas, segundos, vistas) fijan el nivel base; esta matriz captura las
> variables **cualitativas** que suben o bajan ese nivel. Implementación machine-readable:
> `src/data/services/complexityRubric.ts` (`RUBRICA_CUALITATIVA`, `aplicarRubrica()`).

---

## 1. Regla de aplicación

1. El intake fija el nivel **base** por los drivers cuantitativos de la ficha.
2. Cada dimensión de esta matriz se clasifica contra el brief → produce un delta (−1 / 0 / +1 nivel).
3. Se aplica la regla del **peor caso gobernante** (01 §11): si dos dimensiones empujan en direcciones
   distintas para la misma subtarea, gana la más exigente y se documenta en el SOW.
4. Límites duros: nunca bajar de **XS**, nunca subir de **XL**.

## 2. Dimensiones

### 2.1 Complejidad geométrica de las piezas *(asset-rt · datos · render)*

| Clase | Descriptor | Delta | Nota |
|---|---|---|---|
| Prismática | Cajas, placas, tubo recto, superficies duras tolerantes | 0 | El caso por defecto de CAD mecánico limpio |
| Freeform moderada | Carenas curvas, fillets múltiples, hélices, superficies suaves | +1 | Aplica si **>30 % de las piezas relevantes** la presentan |
| Orgánica/continua | Tela, líquido, esculpido, cables complejos trenzados | +1 | **Obligatoria aunque sea una sola pieza** |

Ejemplo (drone): 40 piezas prismáticas + carenas curvas = N2 base +1 → **N3**. Si además trae 3 roscas
reales, ver 2.3 (densidad funcional).

### 2.2 Acabado visual requerido *(render · asset-rt · vfx)*

| Clase | Descriptor | Delta |
|---|---|---|
| Viewport / thumbnail / vista a distancia | Sirve preview web, fondo de escena | −1 (habilita XS) |
| Marketing estándar | PBR limpio sobre HDRI, primer plano moderado | 0 |
| Close-up hero | Macro, SSS, cristal, tela en primer plano, reflejos críticos | +1 |

### 2.3 Densidad funcional por pieza *(datos · asset-rt)*

| Clase | Descriptor | Delta | Coste oculto |
|---|---|---|---|
| Pieza pasiva | Carcasa, tapa, panel, soporte | 0 | — |
| Pieza con mecánica real | Roscas verdaderas, engranajes dentados, articulaciones móviles | +1 si dominan | **Rosca real ≈ +2–4 h por pieza** aunque el nivel no cambie |

### 2.4 Exigencia técnica del target *(web-3d · asset-rt)*

| Clase | Descriptor | Delta |
|---|---|---|
| Desktop web estándar | Presupuesto de peso/perf convencional | 0 |
| Móvil exigente / peso agresivo / 60 fps garantizados | Presupuesto de rendimiento contractual | +1 (solo subtareas de perf/QA) |

## 3. Anclas rápidas por tipo de pieza (cheat-sheet de intake)

| Pieza típica | Clase geométrica | Señal de nivel |
|---|---|---|
| Tornillo, placa, bracket | Prismática | No sube |
| Carena curva, hélice | Freeform moderada | +1 si dominan |
| Rosca real (tornillería funcional) | Mecánica real | +2–4 h/pieza |
| Manguita/cable trenzado | Orgánica | Tratar como orgánica (+1) |
| Turbina/impelidor | Freeform + precisión | +1 |
| Textil/junta de goma | Orgánica | +1 |

## 4. XS — qué cabe en el nivel Micro

Pensado para entradas accesibles y volumen: micro-loops de producto de **2–3 s** (A2), thumbnails y
vistas viewport (A1/D1), props mini ≤2k tris (B), embeds ligeros ya servidos por plataforma (C1),
sets de textura simples (F2). En paquetes, XS habilita ofertas de lote económico (p. ej. PK-MICRO-LOOP).

## 5. Relación con el motor

- `complexityRubric.ts` exporta `RUBRICA_CUALITATIVA` (esta matriz, machine-readable) y
  `aplicarRubrica(nivelBase, deltas[])` con límites duros XS↔XL.
- El cotizador futuro usará estas dimensiones como **sliders/chips secundarios** tras el driver principal;
  cada delta queda registrado en la estimación (trazabilidad 01 §4.5).
