# _attic — componentes clínicos archivados (REGLA DE ORO §0.9: nada se borra)

Archivados en el ciclo 1 de AG-CLIN (rama `agent/clinical`) tras auditoría de referencias
(grep en todo `src/`, incluido `schedules/`). Ninguno tenía importers vivos al momento del
archivo. Para revivir uno: moverlo de vuelta a `src/components/clinical/` y restaurar sus
rutas relativas (los imports externos fueron ajustados con un nivel extra de `../`).

| Archivo | Razón de archivo | Condición para revivir |
|---|---|---|
| `HomeClinicalDashboard.tsx` + `.module.css` | Duplica la superficie Hoy (ClinicalToday) y depende de estado legacy de `appStore` (currentEnergy/focus). Sus herramientas únicas (SecondBrainInspector, workflows mañana/tarde) no estaban cableadas. | Rediseño que aporte algo que ClinicalWorkspace no cubra. |
| `FocusCard.tsx` | Solo lo consumía HomeClinicalDashboard (archivado). Tarjeta de bloque enfocado redundante con DailyOperatingView (schedules). | Que schedules/clínico pida una tarjeta de foco propia. |
| `FocusModeShell.tsx` | Solo lo consumía HomeClinicalDashboard. Tareas hardcodeadas; el modo foco ya vive en `appStore` + vistas de schedules. | Un modo foco clínico real persistido (store propio). |
| `MorningEveningWorkflowsModal.tsx` | Solo lo consumía HomeClinicalDashboard. Concepto valioso: selecciona EnergyLevel (`canonicalDomainModel`: high/medium/low/crisis) para versión mínima/normal/extendida del día. | Fase 3 (modulación del sistema): cablearlo con clinicalStore + contrato UserState. NO reescribir desde cero. |
| `ClinicalCurrentBlockPanel.tsx` | Datos del bloque actual hardcodeados (mock "09:20–11:40 BLOQUE A") — viola la regla cero-mocks. Requiere el grid semanal real, territorio AG-ORQ. Su InertiaRescueModal sigue VIVO vía `schedules/DailyOperatingView`. | Contrato de bloque actual expuesto por AG-ORQ (hoyAdapter). |
| `ClinicalTabWorkspace.tsx` | Superseded: sus mejores partes se cablearon directo en `/app/clinical` (ClinicalExecutionHub como hub principal + ClinicalUncompletedTaskProtocol). La pestaña de módulos/exposición duplica el Hub y la página protocols; los docs siguen accesibles vía DomainDocAccordion. | Si se quiere una vista tabulada oficial, recomponerla sobre ClinicalWorkspace. |

## No archivados (verificación de la auditoría)

- `InertiaRescueModal.tsx` — **VIVO**: importado por `src/components/schedules/DailyOperatingView.tsx`.
- `ClinicalUncompletedTaskProtocol.tsx` — **CONECTADO** en `ClinicalWorkspace`.
- `StaleTaskCard.tsx` + `src/lib/clinical/staleTasksDetector.ts` — **CONECTADOS** en `ClinicalToday`.
