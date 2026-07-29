# AUDIT-06: Integración de FitApp — Features Faltantes o Mal Integrados
**Severidad:** MEDIA-ALTA | **Impacto:** Funcionalidad incompleta, flujo roto

---

## Estado Actual

El repo `PlanMaestroOS` contiene una sección `/app/fitness` (link visible en el sidebar).
El repo `FitApp-Free` (https://github.com/delarge95/FitApp-Free) es la app de fitness
independiente que debe estar completamente integrada.

Para realizar este audit correctamente, se necesita revisar:
- `src/pages/app/fitness.astro` o equivalente en PlanMaestroOS
- Los componentes bajo `src/components/` que correspondan a fitness
- El `src/data/` para ver si los modelos de datos de FitApp están importados

---

## Features de FitApp a Verificar (según repo FitApp-Free)

Basado en la estructura típica de una FitApp:

| Feature | ¿Presente en PlanMaestroOS? | Acción requerida |
|---|---|---|
| Registro de ejercicio diario | Verificar | Si no: importar componente |
| Timer/contador de sets/reps | Verificar | Si no: crear wrapper |
| Historial de entrenamientos | Verificar | Si no: integrar data layer |
| Rutinas predefinidas | Verificar | Si no: migrar datos |
| Progreso visual (charts) | Verificar | Si no: añadir |
| Nivel de energía post-entreno | Posiblemente ausente | Conectar con `EnergyLevel` de canonicalDomainModel |

---

## Método de Ejecución

### Paso 1 — Mapear qué existe en FitApp-Free

```bash
# En tu terminal local, clona ambos repos
git clone https://github.com/delarge95/FitApp-Free
git clone https://github.com/delarge95/PlanMaestroOS

# Lista los componentes de FitApp
ls FitApp-Free/src/
```

### Paso 2 — Identificar componentes de FitApp que NO están en PlanMaestroOS

Cada componente de FitApp que no tenga equivalente en PlanMaestroOS debe ser:
a) Copiado directamente a `PlanMaestroOS/src/components/fitness/`
b) Adaptado para usar los tokens de color/tipografía del nuevo sistema (AUDIT-01 y AUDIT-02)

### Paso 3 — Unificar el modelo de datos

**Archivo clave:** `PlanMaestroOS/src/data/canonicalDomainModel.ts`

FitApp probablemente tiene su propio modelo de datos (sets, reps, exercises). Estos deben
integrarse en `canonicalDomainModel.ts` para que:
- El nivel de energía post-entreno afecte al `EnergyLevel` global
- Los entrenamientos aparezcan en el timeline de "Hoy"

```typescript
// En canonicalDomainModel.ts — añadir:
export interface WorkoutSession {
  id: string;
  date: string; // ISO
  durationMinutes: number;
  exercises: Exercise[];
  perceivedEnergy: EnergyLevel; // conecta con el sistema clínico
  notes?: string;
}

export interface Exercise {
  name: string;
  sets: SetRecord[];
}

export interface SetRecord {
  reps?: number;
  weight?: number; // kg
  durationSeconds?: number;
  completed: boolean;
}
```

### Paso 4 — Conectar el bloque de Fitness en el timeline de /app/today

El timeline del día (`/app/today`) debe mostrar los bloques de fitness como bloques
de tiempo que, al completarse, actualizan el `WorkoutSession` en el estado global.

### Paso 5 — Aplicar el sistema de diseño (AUDIT-01 a 05) a los componentes importados

Todo componente copiado de FitApp debe tener:
- Colores reemplazados por los tokens de `tokens.css`
- Tipografía ajustada a la escala de 4 niveles
- Botones reemplazados por el componente `<Button>` unificado