# 29 — Auto-preguntas de usuario (el loop de cierre)

> Actué como el usuario y me hice todas las preguntas. Cada una tiene respuesta y
> puntero. Si una pregunta nueva no se responde con estos archivos, falta un archivo:
> crearlo antes de codificar.

## QUÉ

- ¿Qué es esta carpeta? El cerebro ejecutable: auditoría + decisiones + specs listos
  para despachar. Índice: `00_INDICE.md`.
- ¿Qué % está hecho? ~45-50% local; tabla por dominio en `01`.
- ¿Qué falta para "real"? 5 condiciones en `01` (ci verde, worker desplegado, UserState
  3 dominios, 100 reglas 2 semanas, 1 aplicación punta a punta).
- ¿Qué contratos mandan? Los del código (`14`); los docs que los contradigan están obsoletos.
- ¿Qué stores existen? Los 12 + 2 raw en `14 §14.2` con keys exactas.
- ¿Qué está mock? Worker, jobs, sync-write, `NotionSyncStatus`, speaking DE,
  `careerServiceAdapter`, samples gastro, copiado snapshot (`22, 23, 20, 19, 26, 21`).
- ¿Qué rutas existen? 39 `/app` listadas en auditoría + `qa.mjs`; las que faltan en
  nav están en `17 §17.4`.

## CÓMO

- ¿Cómo añado una regla? Prompt DESPACHO-5 §A + tipos `14 §14.1` + cita obligatoria (`07`).
- ¿Cómo conecto un dominio a Hoy? Extender `todayAdapter` + emitir eventos (`17`).
- ¿Cómo entra una lesión? `InjuryCheckin → top3 → reglas lesion:* → painLog` (`18`).
- ¿Cómo se genera un CV por empresa? `fitScore → composeVariant → checklist` (`19`).
- ¿Cómo despliego el worker? Contrato único + wrangler + tests (`22`).
- ¿Cómo activo sync real? Unificación + piloto 1 dominio (`23`).
- ¿Cómo cierro QA? `qa:app` + tests worker + validateGraph en `ci` (`24`).
- ¿Cómo importo wearable/báscula? `WearableDay` + CSV hoy, API/BLE después (`21`).
- ¿Cómo curo contenido? Pipeline v4 + ronda FINAL + ADR-8 (lotes, `16, 07`).

## PARA QUÉ / POR QUÉ

- ¿Para qué el grafo? Las 5 queries que nada más responde (`16 §16.4`).
- ¿Por qué IA separada de reglas? Para no alucinar donde hay salud/dinero (`07`, ADR-5).
- ¿Por qué ORQ primero? Sin Today no hay cerebro, solo secciones (`17`, ADR-7).
- ¿Por qué salud local-only? Privacidad + GDPR + confianza (`05, 25`, ADR-6).
- ¿Por qué no `apps/`? Rompe 100+ imports sin beneficio estático (ADR-1).

## CUÁNDO / DÓNDE / QUIÉN

- ¿Cuándo qué? S1-S6 / M1-M7 / L1-L6 en `09`; próximas 8 semanas en `28 §28.3`.
- ¿Dónde va cada cosa? Ownership por dominio en `28 §28.2` + NORMAS_ORQUESTADOR.
- ¿Quién decide precios/lanzamiento? Usuario: 15 confirmaciones consolidadas (`27`),
  rate card única (`27 §27.1`), cron mocks desactivados hasta worker real (`22`).
- ¿Dónde están los esqueletos de código? `13` (W1-W6) + firmas exactas en `14-23`.
- ¿Qué hago si algo contradice esta carpeta? Manda el código (`14`); actualizar el
  archivo correspondiente en el mismo encargo (DoD `24 §24.2.7`).

## Preguntas que aún necesitan AL USUARIO (no a los agentes)

1. Las 15 confirmaciones (links + CV) en 1 mensaje (`27 §27.1`).
2. Ratificar o vetar los 8 ADRs (`15`).
3. Rate card única + bandas COP + cuentas de cobro (bloquea precios públicos).
4. PDFs clínicos en `public/docs/` reales vs `sourcePdfUrl` rotos (`20 §20.2`).
5. `Grammatik_Aktiv_A1_A2.pdf` ausente (`20 §20.1`).
6. Alcance Tesis/TechArt y Portugués 2026 (`10` N5, `28`).
7. Quién genera cada modelo 3D pendiente + validación visual anatomía/cotizador.
