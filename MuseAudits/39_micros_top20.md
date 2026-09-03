# 39 — Micros top-20 (volumen, curaduría > exhaustividad)

> App "Plan Maestro OS", módulo gastronomía ↔ nutrición deportiva.
> Continúa a `26_gastronomia_cocina_ejecutable.md` §26.1 ("Micros: tabla solo para
> las 20 recetas propias top") y traza energía a `31_matematica_formulas.md` §31.3.
> Estado: esquema + 5 filas ejemplo `usda-estimado` + 6 alertas suaves + plan de
> curación de las 15 restantes. Nada de esto es consejo médico; son estimaciones
> de cocina para planificar volumen, no análisis de laboratorio.

## 39.0 Convenciones (anti-slop)

- Toda cifra visible traza a `sourceRef` (§31: "toda cifra visible traza a sección + `sourceRef`").
- Unidades SI salvo nota. Redondeo explícito: enteros o 1 decimal como máximo.
- Nada de falsa precisión: los micros son aproximados de dominio público
> (composición USDA / tablas de referencia), redondeados y etiquetados.
- `fuente` es obligatoria en cada fila. Sin fuente no se muestra la fila en UI.
- Severidad de alertas: solo `info` / `sugerencia`. Jamás bloquean ni diagnostican.

---

## 39.1 Esquema `MicronutrientRow` (A)

```ts
// impl/gastronomy/micros.ts
export type MicroFuente = 'usda-estimado' | 'rp-kitchen' | 'por-verificar';

export interface MicronutrientRow {
  recipeId: string;    // FK a Recipe.id (solo recetas propias top-20, archivo 26)
  hierroMg: number;    // mg, 1 decimal
  calcioMg: number;    // mg, entero
  magnesioMg: number;  // mg, entero
  zincMg: number;      // mg, 1 decimal
  vitD_ug: number;     // µg, 1 decimal
  vitC_mg: number;     // mg, entero
  b12_ug: number;      // µg, 1 decimal
  sodioMg: number;     // mg, entero
  potasioMg: number;   // mg, entero
  fibraG?: number;     // g, 1 decimal (necesaria para regla fibra-01, §39.3)
  fuente: MicroFuente; // regla cerrada, ver abajo
  sourceRef: string;   // ej. "USDA-SR + §31.3" / "RP Kitchen cap. X"
  porcionRef: string;  // ej. "150 g pollo cocido + 200 g arroz cocido + 150 g brócoli"
  actualizadoEn: string; // ISO date
}
```

Regla de `fuente` (cerrada, evaluable):

```ts
export function esFuenteValida(f: string): f is MicroFuente {
  return f === 'usda-estimado' || f === 'rp-kitchen' || f === 'por-verificar';
}

// Invariante de UI:
// - 'usda-estimado' → muestra con etiqueta "≈ estimado (USDA)".
// - 'rp-kitchen'    → muestra con etiqueta "RP Kitchen (libro)".
// - 'por-verificar' → NO muestra micros en ficha; muestra
//   "micros pendientes de curación" y oculta la fila del cómputo diario.
```

Reglas de validación (evaluables en `micros.ts`):

1. `todos_los_campos >= 0`; `NaN` o negativo → fila inválida.
2. Redondeo forzado al guardar: `hierroMg, zincMg, vitD_ug, b12_ug` a 1 decimal;
> `calcioMg, magnesioMg, vitC_mg, sodioMg, potasioMg` a entero.
3. `recipeId` debe existir en el top-20 propio (archivo 26). Nada de platos externos.
4. Si `fuente === 'por-verificar'`, los numéricos pueden ser `0` y se ignoran
> en sumas diarias; si es `usda-estimado` o `rp-kitchen`, ningún campo puede ser `null`.
5. Cada fila exige `porcionRef` + `sourceRef`; sin porción la cifra no significa nada.
> Formato de ejemplo: ver R1 en §39.2 (misma forma JSON).

---

## 39.2 Cinco filas ejemplo COMPLETAS (B) — `usda-estimado`, redondeadas

> Porciones de volumen (400-650 kcal). Macros calculados por suma de ingredientes
> (ver `calculateDailyMacros`, archivo 26 + TDEE/proteína §31.3). Micros aproximados
> de dominio público, redondeados, etiqueta `usda-estimado`. No son análisis de
> laboratorio: la cocción, la marca y la sal cambian sodio/potasio/vitC ±20-30%.

### R1 — `vol-pollo-arroz-brocoli` (referencia de volumen)

- Porción: 150 g pechuga de pollo cocida + 200 g arroz blanco cocido + 150 g brócoli cocido + 1 cdta aceite oliva.
- Macros: **620 kcal / 48 g prote / 72 g carbos / 9 g grasa** (redondeo a entero).
- Micros (`usda-estimado`):

```json
{
  "recipeId": "vol-pollo-arroz-brocoli",
  "hierroMg": 2.5, "calcioMg": 80, "magnesioMg": 100, "zincMg": 2.0,
  "vitD_ug": 0.2, "vitC_mg": 80, "b12_ug": 0.5,
  "sodioMg": 400, "potasioMg": 900, "fibraG": 6.0,
  "fuente": "usda-estimado",
  "sourceRef": "USDA-SR pollo/arroz/brócoli + §31.3",
  "porcionRef": "150 g pollo + 200 g arroz + 150 g brócoli + 1 cdta aceite",
  "actualizadoEn": "2026-09-03"
}
```

- Nota: plato ancla del plan `Volumen` (archivo 26). Buen hierro hemo + vitC del
> brócoli (sinergia, regla `hierro-vitc-01`). VitD casi nula: normal sin lácteo/pescado.

### R2 — `vol-huevos-avena` (desayuno denso)

- Porción: 3 huevos grandes (150 g) + 80 g avena en hojuelas + 200 ml agua + 1 banano pequeño (100 g).
- Macros: **640 kcal / 26 g prote / 78 g carbos / 24 g grasa**.
- Micros (`usda-estimado`):

```json
{
  "recipeId": "vol-huevos-avena",
  "hierroMg": 4.0, "calcioMg": 120, "magnesioMg": 130, "zincMg": 2.5,
  "vitD_ug": 2.5, "vitC_mg": 10, "b12_ug": 2.0,
  "sodioMg": 420, "potasioMg": 800, "fibraG": 9.0,
  "fuente": "usda-estimado",
  "sourceRef": "USDA-SR huevo/avena/banano + §31.3",
  "porcionRef": "3 huevos + 80 g avena + 1 banano 100 g",
  "actualizadoEn": "2026-09-03"
}
```

- Nota: mejor fila en vitD y B12 del grupo (huevo). VitC baja: combinar con fruta
> en otra comida si salta `hierro-vitc-01`. Fibra alta por avena.

### R3 — `vol-ensalada-atun` (alta prote, sin cocina)

- Porción: 1 lata atún en agua escurrido (120 g) + 150 g papa cocida + 100 g tomate + 50 g lechuga + 1 cda aceite oliva + limón.
- Macros: **450 kcal / 36 g prote / 35 g carbos / 16 g grasa**.
- Micros (`usda-estimado`):

```json
{
  "recipeId": "vol-ensalada-atun",
  "hierroMg": 2.0, "calcioMg": 60, "magnesioMg": 70, "zincMg": 1.0,
  "vitD_ug": 2.0, "vitC_mg": 30, "b12_ug": 3.0,
  "sodioMg": 600, "potasioMg": 900, "fibraG": 4.0,
  "fuente": "usda-estimado",
  "sourceRef": "USDA-SR atún/papa/tomate + §31.3",
  "porcionRef": "120 g atún + 150 g papa + 100 g tomate + 50 g lechuga + 1 cda aceite",
  "actualizadoEn": "2026-09-03"
}
```

- Nota: mejor B12 del grupo (pescado). Sodio alto por enlatado: enjuagar y no
> añadir sal; relevante para regla `sodio-potasio-01`. Mercurio: no más de
> 2-3 latas/semana (nota fija en ficha, no regla).

### R4 — `vol-batido-whey-banano-avena` (post-entreno)

- Porción: 1 scoop whey (30 g) + 1 banano (120 g) + 50 g avena + 300 ml leche entera.
- Macros: **650 kcal / 38 g prote / 88 g carbos / 12 g grasa**.
- Micros (`usda-estimado`):

```json
{
  "recipeId": "vol-batido-whey-banano-avena",
  "hierroMg": 2.0, "calcioMg": 450, "magnesioMg": 120, "zincMg": 2.0,
  "vitD_ug": 1.5, "vitC_mg": 10, "b12_ug": 1.5,
  "sodioMg": 350, "potasioMg": 1100, "fibraG": 6.0,
  "fuente": "usda-estimado",
  "sourceRef": "USDA-SR leche/banano/avena + etiqueta whey + §31.3",
  "porcionRef": "30 g whey + 120 g banano + 50 g avena + 300 ml leche",
  "actualizadoEn": "2026-09-03"
}
```

- Nota: mejor calcio + potasio del grupo (leche + banano). Activa sinergia
> `calcio-vitd-01`. El whey varía por marca ±20%: la fila usa promedio redondeado.

### R5 — `vol-lentejas-arroz-huevo` (económica, sin carne)

- Porción: 200 g lentejas cocidas + 150 g arroz blanco cocido + 1 huevo cocido (50 g) + 50 g cebolla/tomate sofrito ligero.
- Macros: **590 kcal / 26 g prote / 95 g carbos / 9 g grasa**.
- Micros (`usda-estimado`):

```json
{
  "recipeId": "vol-lentejas-arroz-huevo",
  "hierroMg": 6.0, "calcioMg": 70, "magnesioMg": 110, "zincMg": 2.5,
  "vitD_ug": 0.8, "vitC_mg": 8, "b12_ug": 0.5,
  "sodioMg": 350, "potasioMg": 800, "fibraG": 12.0,
  "fuente": "usda-estimado",
  "sourceRef": "USDA-SR lenteja/arroz/huevo + §31.3",
  "porcionRef": "200 g lentejas + 150 g arroz + 1 huevo + 50 g sofrito",
  "actualizadoEn": "2026-09-03"
}
```

- Nota: mejor hierro (no hemo) + fibra del grupo. Hierro vegetal: necesita vitC
> en el día (regla `hierro-vitc-01`). B12 baja: vigilar regla `b12-animal-01`.

Tabla resumen (macros + fuente):

| recipeId | kcal | prote | carbos | grasa | fuente |
|---|---|---|---|---|---|
| vol-pollo-arroz-brocoli | 620 | 48 g | 72 g | 9 g | usda-estimado |
| vol-huevos-avena | 640 | 26 g | 78 g | 24 g | usda-estimado |
| vol-ensalada-atun | 450 | 36 g | 35 g | 16 g | usda-estimado |
| vol-batido-whey-banano-avena | 650 | 38 g | 88 g | 12 g | usda-estimado |
| vol-lentejas-arroz-huevo | 590 | 26 g | 95 g | 9 g | usda-estimado |

---

## 39.3 Seis reglas de alerta suave (C) — formato regla-evaluable

> Todas `severity: info`, `display-only`, agregación diaria sobre recetas del día
> (suma de filas con `fuente != 'por-verificar'`). Ninguna diagnostica ni prescribe;
> solo sugieren combinar alimentos. Cada regla cita su base.

```yaml
- id: hierro-vitc-01
  cuando: "hierro_dia_mg >= 6 AND vitC_dia_mg < 40"
  mensaje: "Hoy hay hierro vegetal (lentejas/huevo) pero poca vitC. Añade 1 fruta o tomate/limón en la misma comida para ayudar a su absorción."
  cita: "USDA-SR + §31.3 (display-only; absorción hierro-no-hemo mejora con vitC)"
```

```yaml
- id: calcio-vitd-01
  cuando: "calcio_dia_mg >= 800 AND vitD_dia_ug < 5"
  mensaje: "Calcio alto (lácteos) con vitD estimada baja. Sal a luz diurna o valora pescado/huevo mañana; la vitD ayuda al uso del calcio."
  cita: "RP Kitchen / tablas referencia + §31.3 (display-only)"
```

```yaml
- id: sodio-potasio-01
  cuando: "sesion_sudor_alto == true AND (sodio_dia_mg < 1500 OR potasio_dia_mg < 2500)"
  mensaje: "Sesión con sudor alto y sales estimadas bajas. Añade una pizca de sal a la cena + 1 banano o papa, y bebe agua."
  cita: "§31.3 METs/TDEE + Maughan (sudor/sales, display-only)"
```

```yaml
- id: zinc-deficit-01
  cuando: "prote_dia_g < 1.6 * peso_kg AND zinc_dia_mg < 8"
  mensaje: "Proteína y zinc estimados bajos para volumen (1.6-2.2 g/kg, §31.3). Añade huevo, lácteo o carne/lenteja extra mañana."
  cita: "§31.3 proteína volumen 1.6-2.2 g/kg (display-only)"
```

```yaml
- id: b12-animal-01
  cuando: "porciones_origen_animal_dia == 0 OR b12_dia_ug < 1.0"
  mensaje: "Día casi sin alimento animal y B12 estimada < 1 µg. Si repites este patrón, incluye huevo/lácteo/atún o consulta profesional; la B12 viene de origen animal."
  cita: "USDA-SR B12-origen-animal (display-only, no diagnostica)"
```

```yaml
- id: fibra-min-01
  cuando: "fibra_dia_g < 15"
  mensaje: "Fibra estimada < 15 g hoy. Añade avena, lenteja, verdura o fruta con cáscara mañana (meta práctica 20-30 g/día)."
  cita: "RP Kitchen / guías fibra (display-only)"
```

Notas de implementación: ventana = día del `PlanBoard` (archivo 26). `sesion_sudor_alto`
> lo pone fitness (duración × METs §31.3 o flag manual); sin dato la regla no dispara.
> `porciones_origen_animal_dia` cuenta tag `animal`. Máximo 2 alertas/día en
> `GastronomyToday`; cada alerta muestra `cita` + `≈ estimado`.

---

## 39.4 Plan de curación de las 15 restantes (D)

> Objetivo: llegar a 20 filas con `fuente != 'por-verificar'`. Orden por impacto en
> volumen (proteína/kcal por COP + frecuencia en planes), no alfabético.

| Orden | recipeId probable | Fuente | Quién | Esfuerzo |
|---|---|---|---|---|
| 6 | vol-carne-molida-pasta | usda-estimado | dueño app | 30 min |
| 7 | vol-pollo-papa-zanahoria | usda-estimado | dueño app | 30 min |
| 8 | vol-arroz-huevo-queso | usda-estimado | dueño app | 20 min |
| 9 | vol-avena-leche-mani | usda-estimado | dueño app | 20 min |
| 10 | vol-sardina-arroz-ensalada | usda-estimado | dueño app | 30 min |
| 11 | vol-pasta-atun-tomate | usda-estimado | dueño app | 20 min |
| 12 | vol-frijol-arroz-aguacate | usda-estimado | dueño app | 30 min |
| 13 | vol-tortilla-huevo-queso | rp-kitchen | dueño app + libro | 40 min |
| 14 | vol-yogur-avena-miel | usda-estimado | dueño app | 20 min |
| 15 | vol-pollo-lenteja-arroz | usda-estimado | dueño app | 30 min |
| 16 | vol-cerdo-arroz-frijol | usda-estimado | dueño app | 30 min |
| 17 | vol-batido-leche-mani-banano | usda-estimado | dueño app | 20 min |
| 18 | vol-ensalada-huevo-papa | usda-estimado | dueño app | 20 min |
| 19 | vol-arroz-mixto-verduras-huevo | rp-kitchen | dueño app + libro | 40 min |
| 20 | vol-sopa-lenteja-papa-huevo | rp-kitchen | dueño app + libro | 40 min |

Protocolo por fila (quién/qué/cómo):

1. Quién: el dueño de la app (una persona, sin nutricionista). Duda >30% → `por-verificar`.
2. Qué fuente: primero `usda-estimado` (USDA-SR, promedio redondeado); `rp-kitchen`
> solo en las 3 marcadas (citar cap/pág); jamás inventar marca de whey/lácteo.
3. Orden: 6-12 primero (proteína barata del plan Volumen); 13-20 después. 3 filas/semana → 5 semanas.
4. Cada fila exige `porcionRef` en cocido + foto balanza (archivo 26) + `sourceRef` + fecha.
5. Aceptación: validación §39.1 en verde + 1 día en `GastronomyToday` sin >2 alertas falsas.
6. Deuda: sodio/potasio (sal) y vitD (marca lácteo/whey) llevan nota fija hasta `rp-kitchen`.

## 39.5 Conexión con la app y no-objetivos

- `GastronomyToday` suma solo `fuente != 'por-verificar'` y pinta `≈`; `PlanBoard`
> usa macros §31.3, micros solo decoran con §39.3; `SavedInbox` externo nunca genera fila.
- No-objetivos: sin suplementos, sin diagnóstico, sin %VD ni semáforos, sin tablas exhaustivas.
