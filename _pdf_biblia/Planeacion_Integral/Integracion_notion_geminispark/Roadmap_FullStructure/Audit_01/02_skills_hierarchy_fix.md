# FIX 02 — Jerarquía de progresiones (corrección definitiva)

## Problema
Es la tercera vez que se pide. La ruta debe ser el elemento principal y el paso actual un
sub-elemento. El usuario confirma que sigue mal. Esta vez el PR no se acepta sin capturas.

## Estado objetivo EXACTO

### Vista "Mi práctica" (donde se muestre el paso activo)
```text
Habilidad activa                    ← eyebrow, 12px, gris
Dominada básica y tracción          ← h1: 24–28px, bold   (LA RUTA DOMINA)
Paso actual · 1 de 5                ← meta, 13px, gris

Colgado activo y control escapular  ← h2: 17–18px, semibold (EL PASO ES SECUNDARIO)
Objetivo de hoy · 3 series de 30–45 s

[Practicar hoy]                     ← única acción primaria
[Ver ejercicio]  [Cambiar ruta]     ← secundarias
```

### Vista de rutas (SkillsHub)
```text
Dominada básica y tracción          ← título de ruta 20–24px semibold
5 pasos · Barra o anillas           ← meta 13px

01  Colgado activo y control escapular      Activo hoy   ← fila compacta ~52px
02  Remo inclinado
03  Remo horizontal en anillas
04  Dominada asistida
05  Dominada estricta
```

## Reglas de implementación (verificar en el DOM, no solo en el CSS)

1. En `MyPracticeSummary.tsx` y en el detalle de ruta de `SkillsHub.tsx`:
   - El nombre de la RUTA usa `<h1>` o `<h2>` real (según contexto de página) con clase
     `pathTitle` (font-size ≥ 24px, font-weight 700).
   - El nombre del PASO usa el siguiente nivel de heading con clase `stepTitle`
     (font-size ≤ 18px, font-weight 600).
   - Prohibido: la ruta como label en mayúsculas pequeñas azules arriba y el paso en grande.
2. Los pasos de una ruta son filas `ListRow` con separador 1px, NO tarjetas con borde completo
   ni sombra. Altura objetivo 48–56px.
3. Quitar cualquier prefijo `Paso N:` del texto; el número va en una columna `01`, `02`…
4. Solo el paso activo lleva badge `Activo hoy`; los demás no tienen badge.
5. Chip `Paso X de Y` junto al meta de la ruta, nunca flotando a la derecha compitiendo con el título.

### Snippet de referencia

```tsx
// MyPracticeSummary.tsx
<section aria-labelledby="active-path-title" className={styles.practice}>
  <p className={styles.eyebrow}>Habilidad activa</p>
  <h2 id="active-path-title" className={styles.pathTitle}>{path.title}</h2>
  <p className={styles.pathMeta}>Paso actual · {step.order} de {total}</p>

  <div className={styles.currentStep}>
    <h3 className={styles.stepTitle}>{step.title}</h3>
    <p className={styles.stepMeta}>Objetivo de hoy · {formatPractice(step.practice)}</p>
  </div>

  <div className={styles.actions}>
    <Button variant="primary" onClick={startPractice}>Practicar hoy</Button>
    <Button variant="secondary" onClick={openExercise}>Ver ejercicio</Button>
    <Button variant="ghost" onClick={openPathPicker}>Cambiar ruta</Button>
  </div>
</section>
```

```css
.pathTitle { font-size: clamp(1.375rem, 3.5vw, 1.75rem); font-weight: 700; line-height: 1.2; margin: 0; }
.pathMeta  { font-size: .8125rem; color: var(--text-secondary); margin: .25rem 0 1rem; }
.stepTitle { font-size: 1.0625rem; font-weight: 600; line-height: 1.35; margin: 0; }
.stepMeta  { font-size: .8125rem; color: var(--text-secondary); }
```

## Verificación obligatoria antes de mergear

Ejecutar y pegar resultados en el PR:

```bash
# 1. El heading visualmente dominante es la ruta, no el paso
grep -n "pathTitle\|stepTitle" src/components/fitness/MyPracticeSummary.tsx src/components/fitness/SkillsHub.tsx

# 2. No quedan prefijos "Paso N:" en textos de pasos
grep -rn "Paso [0-9]" src/components/fitness/ || echo "OK: sin prefijos"
```

Y adjuntar **3 capturas**: Mi práctica desktop, Mi práctica 375px, SkillsHub con ruta expandida.
Criterio de aceptación: en las capturas, el ojo debe ir primero al nombre de la ruta.
Si el paso actual es lo más grande de la pantalla → PR rechazado.
