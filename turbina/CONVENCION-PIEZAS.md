# CONVENCIÓN DE ORIENTACIÓN Y ORÍGENES — Piezas de la turbina

**Regla de oro**: la orientación usa SOLO transforms de vértices (rotación, escala positiva,
traslación) — **jamás toca winding ni normales**. Tus correcciones manuales de normales quedan intactas.

## Convención global

| Regla | Valor |
|---|---|
| Eje del motor | **+X global** (entrada/fan hacia **−X**, escape hacia **+X**) |
| Eje de cada pieza | Alineado a **+X** (analizado por PCA de la nube de vértices) |
| Sentido | Extremo de **mayor radio hacia −X** (boca/entrada); conos: **punta hacia −X** |
| Origen | **Centro del bbox** de la pieza, en el eje → se posiciona por `location` |
| Escala | Uniforme positiva, en **metros reales** (diámetro objetivo para piezas de revolución) |
| Aspas | Span → **+Z** con la **raíz en z=0** y el origen **sobre el eje de giro** → las copias orbitan con RotX(θ) |

## Tabla de estaciones (dónde va cada pieza)

| Pieza | Estación X | Ø objetivo | Largo eje |
|---|---|---|---|
| spinner | −0.86 | Ø base 0.52 | 0.32 |
| fan_case | −0.58 | Ø 1.20 | 0.24 |
| fan blades (×20) | −0.68 | span 0.22 (raíz z=0) | — |
| impeller HP | −0.20 | Ø 0.46 | 0.09 |
| combustor | +0.10 | Ø 0.40 | 0.43 |
| gearbox | +0.22 (y−0.42, z−0.22) | 0.34 | — |
| turbine blisk | +0.46 | Ø 0.46 | 0.08 |
| exhaust_case | +0.70 | — (pendiente generar) | — |

## Cómo funciona el análisis (orientar-piezas.py)

1. **Nube de vértices** en coords mundo → centroide.
2. **PCA (autovectores de la covarianza)**:
   - Piezas alargadas (`tubo`/`cono`/`aspa`): eje principal = **mayor varianza**.
   - Anillos/discos/carcasas (`disco`): eje de revolución = **menor varianza** (el diámetro siempre varía más que el largo).
   - `caja`: bbox mayor → X (sin PCA).
3. **Rotación pura** que lleva ese eje a +X (aspas: a +Z), alrededor del centroide.
4. **Sentido**: radio medio de los extremos de X; si la boca/punta quedó al lado equivocado
   (y la diferencia supera el umbral anti-ruido del 2%), se gira 180° en Z (rotación válida, no espejo).
5. **Origen**: bbox centrado en (0,0,0) → `location` = estación.
6. **Escala**: uniforme positiva al diámetro/largo objetivo.

## Uso

```bash
python orientar-piezas.py
```
Editar solo la tabla `PIEZAS` del script para: nombre, tipo (`disco`/`tubo`/`cono`/`caja`/`aspa`),
dimensión objetivo, estación X, sentido (+1 convención normal).
