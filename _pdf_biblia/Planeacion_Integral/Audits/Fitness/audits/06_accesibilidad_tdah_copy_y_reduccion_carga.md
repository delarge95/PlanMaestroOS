# 06 · Accesibilidad, TDAH, copy y reducción de carga

## Objetivo
Aplicar una experiencia calmada, predecible y accionable. El diseño no debe asumir que el usuario recuerda contexto entre pantallas ni exigir que procese muchas decisiones simultáneas.

## Reglas de oro
1. Una pantalla tiene una pregunta principal y una acción primaria.
2. El contenido secundario empieza oculto o resumido.
3. Los mismos conceptos usan el mismo nombre en toda Fitness.
4. Estado, siguiente acción y guardado son visibles sin depender de memoria.
5. El usuario puede pausar, volver o corregir sin perder progreso.

## Diccionario de copy
| Evitar | Usar |
|---|---|
| Ver PDF oficial del programa (…) | Ver PDF |
| Ver nota del PDF | Nota |
| Cambiar | Cambiar rutina / Cambiar ruta / Cambiar ejercicio |
| Recomendado por el PDF | Recomendada |
| Paso 1: Nombre | 01 Nombre |
| Sem. 1, Sem. 2 | Semana: 1, 2 |

## Biblioteca de patrones
- `PrimaryButton`: única acción principal del contexto.
- `SecondaryButton`: acciones complementarias.
- `Disclosure`: notas, explicaciones, criterios y detalles no esenciales.
- `Sheet/Drawer`: sustituciones, selector de ruta o detalle secundario; debe poder cerrarse con Escape y gesto/acción visible.
- `ListRow`: navegación entre pasos, días o ejercicios; chevron solo si abre algo.
- `StatusBadge`: estados cortos (`Activo hoy`, `Recomendada`, `Guardado`), nunca párrafos como badges.

## Densidad y jerarquía
- No más de tres bloques de información visibles antes del primer CTA relevante.
- Títulos describen entidad principal; subtítulos aportan contexto, no la repiten.
- Evitar carruseles, chips interminables y scroll horizontal sin alternativa.
- En móvil, filtros amplios van en un sheet `Filtrar`, no en una fila truncada.
- Usar espacios y separadores sutiles; no una tarjeta pesada por cada ítem.

## Feedback y prevención de errores
- Guardado: feedback inline y persistente hasta confirmación.
- Errores: decir qué pasó y cómo recuperarse.
- Acciones destructivas o cambio de rutina con sesión pendiente: pedir confirmación concreta.
- No usar confeti, alarmas repetitivas ni toasts encadenados.

## Accesibilidad
- Headings semánticos en orden.
- Objetivos táctiles de al menos 44px.
- Contraste y foco visible.
- Todo control funciona con teclado y lector de pantalla.
- No depender solo de color para estado.
- Respetar `prefers-reduced-motion`.

## Checklist por pantalla
- ¿Sé dónde estoy?
- ¿Entiendo qué es lo principal?
- ¿Veo qué puedo hacer ahora?
- ¿El detalle está disponible sin imponerse?
- ¿Puedo salir o volver sin perder contexto?
- ¿Hay una sola acción primaria?
- ¿Funciona a 320px y con teclado?
