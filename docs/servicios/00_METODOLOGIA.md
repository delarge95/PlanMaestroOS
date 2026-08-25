# 00 — Metodología de estimación y cobro (rate card v1)

> Fuente de verdad de tarifas y políticas de AG-SERV. Todo número del catálogo (`CATALOGO_SERVICIOS.md`)
> se reconstruye desde este documento: `subtarea → horas por tier × rateClass`.
> Versión 1.0 · 2026-08-25 · Revisión programada: trimestral o ante cambio del ancla.

---

## 1. Anclas de mercado citadas

| Ancla | Dato | Fuente |
|---|---|---|
| Contractor Unity medio, Colombia | **USD 27–35/h** | doc-03 §4.1/§5.1 citando Lemon.io (confianza media) |
| Freelance global | **USD 20–50/h** | doc-03 §4.1 matriz operativa "Global freelance" (confianza media) |
| Bandas LATAM software | junior 18–28k · mid 35–48k · senior 55–70k/año | doc-03 §4.1 citando Howdy payroll (confianza media-alta) |

No se introducen benchmarks externos nuevos en v1. Cualquier dato nuevo entra con fuente + fecha vía
nueva versión de esta rate card (regla de versionado: deprecación, nunca borrado).

## 2. Rate card R1–R4 (inferencia propia documentada desde las anclas)

| rateClass | Tipo de trabajo | USD/h min | USD/h max |
|---|---|---:|---:|
| **R1 básico** | Ejecución repetitiva/de bajo juicio: bakes estándar, exports, setup de entrega, QA checklist | 22 | 26 |
| **R2 estándar** | Producción 3D/web convencional con supervisión ligera: modelado, texturizado, iluminación, integraciones front estándar | 27 | 33 |
| **R3 avanzado** | Requiere criterio técnico: shaders, optimización, FX, bridges JS↔motor, automatización IA, camera tracking | 34 | 42 |
| **R4 experto** | Arquitectura de solución, decisiones de diseño no reversibles, consultoría, web apps complejas, adopción IA empresarial | 43 | 55 |

Justificación: R2 coincide exactamente con el ancla Lemon.io Colombia (27–35 → se toma 33 como
techo conservador); R1 cubre tareas delegables dentro de la banda freelance global baja (20–26);
R3/R4 escalan hacia el techo freelance global (50) + prima de especialización técnica documentada
como inferencia propia, revisable contra cotizaciones reales cerradas (Fase 4, `rag/services.json`).

## 3. Escala de tiers S/M/L/XL

Cada servicio define sus drivers concretos, pero la escala transversal es:

| Tier | Nombre | Criterio genérico |
|---|---|---|
| **S** | Simple | 1 objeto/flujo, referencias claras, ≤1 integración, baja ambigüedad |
| **M** | Medio | Varios objetos/secciones o 1 driver de complejidad (animación, interacción, CAD sucio) |
| **L** | Grande | Multi-elemento + ≥2 drivers (p. ej. interactivo + animado + muchas piezas) |
| **XL** | Complejo | Sistema/campaña completa, requisitos difusos o multi-stakeholder; se cotiza por fases |

Reglas: el tier se asigna **por subtarea**, no solo por paquete (una web app XL puede tener
subtareas R1). Si un caso queda entre dos tiers, se cotiza el inferior y se declara el factor que
podría escalarlo (transparencia con el cliente).

## 4. Fórmula de presupuesto

```
precio(subtarea, tier) = round10( horas_min|max(tier) × tarifa_min|max(rateClass(subtarea)) )
precio_paquete(tier)   = Σ precio(subtarea_i, tier)          [sin multiplicadores]
precio_final           = precio_paquete × multiplicadores aplicables (§5)
```

- `round10` = redondeo al múltiplo de 10 USD más cercano, aplicado **por subtarea**.
- Horas = trabajo activo neto (no calendario). Renders nocturnos/builds sin supervisión no facturan.
- Los rangos del catálogo son **estimación operativa para scoping**; la cotización cerrada se emite
  tras discovery por proyecto. Toda comunicación al cliente marca esa diferencia.

## 5. Multiplicadores y ajustes

| Concepto | Valor | Nota |
|---|---|---|
| Rush (entrega ≤7 días calendario) | ×1.25 total | sujeto a disponibilidad real de agenda |
| Rush extremo (≤48 h) | ×1.50 total | solo proyectos S/M |
| Ronda de revisión extra (beyond 2 incluidas) | re-estimación por tabla | típicamente subtareas de ajuste: 1–6 h según tier |
| Licencia extendida (resale/sublicencia) | +20% | licencia estándar incluida: uso comercial del cliente + portfolio propio |
| Licencia exclusiva (sector/región, 12 meses) | +50% | requiere cláusula escrita |
| Coordinación multi-stakeholder (>2 aprobadores) | +5–10% total | ciclos de feedback más largos |

## 6. Modelos de contratación

| Modelo | Cuándo | Estructura |
|---|---|---|
| **Paquete cerrado por hitos** (default) | alcance definible | precio del catálogo ± change orders |
| **Hora (R3/R4)** | consultoría, debugging, discovery abierta, alcance volátil | bloques mínimos de 4 h, reporte de horas |
| **Retainer mensual** | mantenimiento/soporte continuo | packs G4 del catálogo, no acumulable |

## 7. Términos de pago

1. **Hitos**: proyectos < USD 800 → 50% arranque / 50% entrega. ≥ USD 800 → 40% arranque /
   30% avance aprobado / 30% entrega. Ningún trabajo empieza sin anticipo recibido.
2. **Medios**: internacional Wise o Payoneer (preferentes por comisión/trazabilidad); transferencia
   local COP para clientes Colombia; PayPal aceptado con recargo de comisión (~5%). Sin cripto en v1.
3. **Facturación**: soporte documental según doc-03 §7 (READ): factura/contrato/SOW por proyecto;
   tratamiento fiscal y de exportación de servicios lo define el contador, no este documento.
4. **Validez de cotización**: 15 días naturales (la rate card puede cambiar en revisión trimestral).
5. **Change orders**: todo cambio de alcance se re-estima usando este catálogo antes de ejecutarse;
   sin change order firmado no hay trabajo fuera de alcance.
6. **Pausas por insumos faltantes**: el timeline se pausa; la reanudación se reagenda según agenda
   disponible, no retroactivamente.

## 8. Qué incluyen todos los paquetes (y qué no)

Incluido siempre:
- 2 rondas de revisión dentro del alcance acordado (feedback consolidado en un solo documento).
- QA técnico básico en navegadores/dispositivos target declarados.
- Handoff: archivos fuente + export final + guía breve de uso/edición.
- Derechos de portfolio propio del autor (con retardo razonable si hay NDA).

No incluido (add-on o a cargo del cliente):
- Hosting, dominios, servicios SaaS de terceros y sus licencias (visores embebidos, plugins).
- Costos de APIs de IA (modelo BYOK: el cliente paga consumo directo).
- Assets pagos de stock/HDRI/scans si el proyecto los requiere (se presupuestan aparte).
- Mantenimiento post-entrega (ver retainer G4).
- Producción de footage/referencias físicas (fotografía, video de origen) salvo pacto expreso.

## 9. Supuestos globales de estimación

Si estos supuestos fallan, el rango deja de aplicar y se re-estima:
- El cliente entrega brief, referencias e insumos completos al inicio (CAD limpio, footage estable,
  accesos, brand assets).
- Feedback consolidado: ≤2 rondas y ≤5 días hábiles por ronda.
- Un único canal de decisión del lado del cliente.
- Targets técnicos declarados upfront (navegadores, dispositivos, poly budget, tamaño máximo de build).

## 10. Gobernanza

- Cambios de tarifa o política → nueva versión minor de este archivo con changelog (§11).
- Cotizaciones cerradas reales alimentan la calibración (Fase 4): si 3+ casos cerrados caen fuera
  del rango publicado, el servicio se recalibra en la siguiente versión.
- Los servicios marcados ➕ en el catálogo son propuestas de AG-SERV sujetas a veto del usuario;
  el veto deprecada la entrada (se marca `deprecated` con fecha), nunca la borra.

## 11. Changelog

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0 | 2026-08-25 | Creación inicial: anclas doc-03, rate card R1–R4, fórmula, multiplicadores, términos |
