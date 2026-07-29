# AUDIT-07: Accesibilidad Cognitiva para TDAH y Ansiedad Social
**Severidad:** CRÍTICA | **Impacto:** La app puede generar más estrés del que alivia

---

## Problema Identificado

La app está diseñada *para* un usuario con TDAH y ansiedad social, pero en su estado actual
va en contra de las necesidades clínicas de ese perfil:

### Problemas específicos de TDAH:
1. **Demasiados estímulos simultáneos** → paralysis de decisión / mental freeze
2. **Sin indicador único de "qué hacer ahora"** → el usuario no sabe por dónde empezar
3. **Textos largos sin scanability** → el TDAH escanea, no lee secuencialmente
4. **Sin feedback inmediato al completar** → el loop dopaminérgico no se cierra

### Problemas específicos de Ansiedad Social:
1. **Frases en mayúsculas con términos de presión** ("REGLA TDAH", "INVIOLABLE") → activan respuesta de amenaza
2. **Colores de alerta (rojo, naranja) usados decorativamente** → el sistema nervioso los lee como peligro aunque no lo sean
3. **Demasiadas opciones visibles** → sensación de que "lo estás haciendo mal" si no usas todo
4. **Ausencia de mensajes de validación** → no hay refuerzo positivo visible

---

## Solución Propuesta

### Para TDAH:

**Principio de Un Solo Trabajo:** La pantalla principal muestra UNA tarea con UNA acción.

**Principio de Scanability:** El texto clave de cada elemento debe ser legible en <2 segundos.
Máximo 6 palabras en títulos. Los subtítulos son opcionales y colapsados por defecto.

**Principio de Completion Loop:** Cada tarea completada debe mostrar una micro-animación
(✓ verde que aparece y desaparece en 1.5s). No una celebración larga, solo confirmación.

### Para Ansiedad Social:

**Principio de Lenguaje Neutro:** Reemplazar terminología que implica obligación absoluta
por terminología de intención.

| Texto actual | Texto propuesto |
|---|---|
| "PRIORIDADES INVIOLABLES DEL DÍA" | "Tareas del día" |
| "REGLA TDAH: MÁXIMO 3 TAREAS HOY" | "Hoy: 3 tareas" |
| "REGULACIÓN EMOCIONAL & PERMISO" | "Recordatorios" |
| "En curso" (badge urgente verde) | "Activa" |

**Principio de Escape Seguro:** Siempre debe haber una ruta visible de "no quiero hacer esto
ahora" que no sea destructiva. Un botón "Posponer 30 min" es menos ansioso que no tener
esa opción y tener que ignorar la tarea visualmente.

---

## Método de Ejecución

### Paso 1 — Implementar "Focus Card" como hero de la pantalla principal

Esta card ocupa el 50% del viewport y solo muestra:
- El nombre de la tarea actual (máx 6 palabras)
- El tiempo restante en el bloque
- DOS botones: "Iniciar" (primary) y "Posponer" (ghost)

```tsx
// src/components/clinical/FocusCard.tsx
export function FocusCard({ task, blockEndsAt, onStart, onDefer }: FocusCardProps) {
  return (
    <div style={{
      background: 'var(--color-surface-base)',
      border: '1px solid var(--color-border-subtle)',
      borderRadius: '20px',
      padding: 'var(--space-xl)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      minHeight: '200px',
      justifyContent: 'center',
    }}>
      <p style={{
        ...typo.micro,
        color: 'var(--color-text-tertiary)',
        margin: 0,
      }}>
        BLOQUE ACTUAL · hasta las {blockEndsAt}
      </p>

      <h2 style={{
        ...typo.display,
        color: 'var(--color-text-primary)',
        margin: 0,
        fontSize: '1.5rem',
        fontWeight: 700,
      }}>
        {task.name}
      </h2>

      <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
        <Button variant="primary" size="md" onClick={onStart}>
          Iniciar
        </Button>
        <Button variant="ghost" size="md" onClick={onDefer}>
          Posponer 30 min
        </Button>
      </div>
    </div>
  );
}
```

### Paso 2 — Agregar micro-animación de completion

**Archivo:** `src/styles/global.css` o equivalente

```css
@keyframes taskComplete {
  0%   { opacity: 0; transform: scale(0.8); }
  50%  { opacity: 1; transform: scale(1.05); }
  100% { opacity: 0; transform: scale(1.1); }
}

.task-complete-feedback {
  animation: taskComplete 1200ms ease-out forwards;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  pointer-events: none;
  z-index: 9999;
}
```

```tsx
// En el componente de tarea, al marcar como completa:
const [showComplete, setShowComplete] = useState(false);

const handleComplete = () => {
  setShowComplete(true);
  setTimeout(() => setShowComplete(false), 1200);
  onComplete(); // tu lógica existente
};

{showComplete && <div className="task-complete-feedback">✓</div>}
```

### Paso 3 — Auditar y reescribir todos los textos de la app

Hacer un listado de todos los strings visibles en la app que:
- Usen mayúsculas completas
- Contengan palabras como "INVIOLABLE", "OBLIGATORIO", "REGLA", "MÁXIMO", "DEBER"
- Tengan signos de exclamación

Reescribirlos en tono neutro-positivo: descriptivo, no prescriptivo.