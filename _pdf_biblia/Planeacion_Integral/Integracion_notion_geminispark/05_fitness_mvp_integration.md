# 05 · Fitness MVP dentro de Notion y Plan Maestro

## Objetivo
Mantener la arquitectura fitness ya construida y conectarla al ecosistema sin degradar registros, PRs, sustituciones ni habilidades. Fitness no debe convertirse en una tabla Notion ni depender de red durante una sesión.

## Fuente de verdad por dato
| Dato | Dueño MVP | Sincronización |
|---|---|---|
| Catálogo, ejercicios, progresiones y prescripciones | Repositorio/app | versionado en GitHub; snapshot de lectura opcional |
| Rutina activa, sets y sesión en curso | app local | backup/export; resumen al finalizar |
| Sesión completada, PR, peso, prehab | Notion + app | worker confirma/sincroniza con IDs estables |
| Datos clínicos/documentos sensibles | privado fuera de snapshots | no publicar ni enviar a IA por defecto |

## Integración Notion mínima
Sincronizar a Notion, al terminar una sesión:
- fecha, programa, semana, día y estado;
- RPE de sesión y nota breve opcional;
- número de ejercicios/sets completados;
- sustituciones relevantes;
- PRs nuevos;
- check-in de prehab y métricas corporales solo si el usuario las registra.

No sincronizar cada cambio de set ni cada interacción de UI en tiempo real.

## Reglas de habilidades
- Mantener `Mi práctica`, `Rutas` y `Registro` separados.
- La ruta es h1; el paso actual es h2.
- Ficha local suficiente incluso si FitApp externo está pendiente.
- No modificar FitApp-Free en esta fase; enlaces solo exactos/verificados.

## Métricas en Hoy
Mostrar como máximo:
- próxima sesión/rutina activa;
- última sesión registrada;
- un PR reciente, si existe;
- prehab pendiente solo si está configurado.

No mostrar peso, grasa, dolor o volúmenes completos en el dashboard principal sin intención explícita del usuario.

## Seguridad y límites
El sistema puede registrar síntomas subjetivos y ofrecer opciones de pausar/reducir dentro de configuraciones existentes. No diagnostica, no prescribe tratamiento y no modifica progresiones automáticamente por una señal aislada.

## Criterios de aceptación
- Una sesión completa puede registrarse offline/localmente y sincronizarse después sin duplicados.
- Un PR conserva ejercicio canónico y variante.
- Una sustitución conserva prescrito, ejecutado y motivo.
- La app sigue operativa si Notion/API no está disponible.

## Estado de Implementación
- **Persistencia Local Offline (Local-First)**: Implementado `src/data/fitness/fitnessStorageAdapter.ts` para guardar sesiones completadas, sustituciones de ejercicios (prescrito, ejecutado, motivo) y récords personales (PRs) de forma 100% offline sin dependencia de red durante el entrenamiento.
- **Puente de Sincronización a Notion**: Creado `src/data/fitness/fitnessSessionSyncBridge.ts` para consolidar y transmitir el resumen de la sesión a Notion (DB 7 `FitnessSessions`, DB 8 `FitnessMeasurements`, DB 9 `FitnessPRSnapshots`) únicamente al finalizar el entrenamiento y con llaves de idempotencia anti-duplicados.
- **Privacidad de Métricas en Hoy**: Configurado `src/data/adapters/todayAdapter.ts` y `domainContracts.ts` para restringir la vista en la pantalla "Hoy" únicamente a la rutina activa, última sesión y PR reciente, sin exponer peso corporal, grasa ni dolor.
