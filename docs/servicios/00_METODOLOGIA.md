# 00 · Metodología de estimación y cobro — AG-SERV

> Versión 1 · 2026-08-25 · Rate card v1 (`src/data/services/rateCard.ts` es la fuente determinista;
> este doc registra su derivación y las reglas de uso).
> **Alcance**: estimación operativa para scoping y publicación de rangos. La cotización cerrada se
> emite por proyecto tras discovery pago (ver §7.8).

---

## 1. Principios

1. **Trazabilidad numérica**: toda cifra publicada se reconstruye como `Σ(horas_subtarea × tarifa_clase)`.
   Nada de números "a ojo" sin tabla que los soporte.
2. **Rangos, nunca cifras únicas**: min–max en USD, con drivers objetivos que ubican un proyecto
   dentro del rango (§8).
3. **Desglose antes que precio**: ningún paquete sin su tabla de subtareas por tier.
4. **Anclaje a benchmark**: tarifas derivadas de `03_salary_benchmark_and_remote_colombia.md` (READ),
   con sección citada; lo no cubierto se marca como *inferencia propia documentada*.
5. **Versionado**: cambio de tarifas = rate card v2 citando fuente nueva. Deprecación, nunca borrado.

## 2. Anclas salariales (doc-03)

| Ancla | Valor | Sección/Nota doc-03 | Uso |
|---|---|---|---|
| Middle Unity Developer, contractor Colombia | **USD 27–35/h** (confianza alta, Lemon.io) | §4 tabla contractor / nota `lemon-core` | Clase RT |
| Freelance global | **USD 20–50/h** | §4 tabla "Global freelance" | Techo general |
| 3D Artist EE.UU. promedio | USD 82k/año (~39.5/h), rango 41k–142k | §6 / nota `zip-3dartist` | Clase ART |
| Python dev LATAM mid | ~USD 46k/año (empleado) | §5 / nota `hiretalent-python` | Clase AI (base) |
| Senior LATAM empleado | USD 55–70k/año (~26–34/h) + prima contractor 1.25–1.5× | §3 bandas Howdy + §7 | Clase TL |
| Horas facturables reales | 120–140 h/mes (no 160) | §2.2 | Overhead ya cargado en tarifas |
| Metas de ingreso | piso 1.5k · objetivo 3k · stretch 6k/mes | §9 | Sanity check: a 130 h/mes, la mezcla P50 del catálogo debe rendir ≥ 3k |

**Clases derivadas** (= `rateCard.ts` v1, citas íntegras en cada `derivationRef`):

| Clase | Nombre | USD/h | Derivación resumida |
|---|---|---|---|
| `ART` | Arte & Diseño | 25–38 | Freelance global 20–50 + promedio 3D Artist US ajustado a contractor LATAM |
| `RT` | Realtime & Dev | 28–45 | Middle Unity COL 27–35 + banda superior freelance global |
| `AI` | IA & Automatización | 35–55 | Base Python LATAM mid + prima IA en freelance (extremo alto banda global) |
| `TL` | Dirección Técnica | 32–48 | Senior LATAM 26–34/h × prima contractor 1.25–1.5× |

*Inferencia propia documentada*: la prima IA y el ajuste LATAM de promedios US son inferencias
operativas (no hay dato directo de mercado freelance IA-LATAM en doc-03); quedan marcadas aquí
y se recalibrarán con las primeras 5–10 cotizaciones reales.

## 3. Escala de complejidad S/M/L/XL

Definición única para todo el catálogo. Cuando una subtarea usa otra métrica (piezas CAD, segundos
de animación, nº de planos), su ficha lo declara y mapea a esta escala.

| Tier | Asset/escena | Criterios orientativos |
|---|---|---|
| **S** | Simple | ≤ 5 piezas o prop único; 1 familia de materiales; sin rig; integración estándar sin lógica custom |
| **M** | Medio | 5–25 piezas o producto completo; materiales PBR estándar; rig mecánico simple o 1–2 clips; interacción básica |
| **L** | Complejo | 25–100 piezas; shaders custom simples; optimización exigente (mobile); lógica de interacción media |
| **XL** | Muy complejo | > 100 piezas o sistema multi-escena; rigs avanzados; pipelines combinados; apps completas |

## 4. Subtareas: contrato

Cada subtarea declara: `id`, `name`, clase tarifaria, horas por tier aplicable (`undefined` = no aplica)
y opcionalmente `drivers` (qué mueve sus horas). Las tareas compuestas referencian módulos por id
(`ServiceTask.moduleIds`) en vez de duplicar tablas — p. ej. B2 = B1 + módulo de interactividad.

## 5. Fórmula de estimación y redondeo

```text
horas_rango(tarea, tier)   = Σ horas_min(subtareas) .. Σ horas_max(subtareas)
costo_raw                  = [ Σ(h_min_i × tarifa_min_clase_i) , Σ(h_max_i × tarifa_max_clase_i) ]
redondeo comercial         : min → floor a múltiplo de 25 ; max → round-half-up a múltiplo de 50
                             montos < 100 → múltiplos de 5
paquete combinado          = suma de partes YA redondeadas (trazabilidad pieza a pieza);
                             el descuento de bundle se aplica al final (§6.2)
```

Empates en el redondeo → al alza. El redondeo comercial es presentación; `PackageEstimate.raw`
conserva el valor exacto para auditoría.

## 6. Multiplicadores y descuentos

### 6.1 Multiplicadores
| Factor | Efecto | Condición |
|---|---|---|
| Urgencia | ×1.25–1.35 | Entrega < 72 h desde kickoff, calendario bloqueado |
| Fin de semana/nocturno crítico | ×1.20 | Solo hitos imposibles de mover; evitable por planificación |

### 6.2 Descuentos (aplican sobre publicado, nunca apilables entre sí — rige el mayor)
| Bundle | Dcto |
|---|---|
| Asset (familia ASRT) + su integración (WEB/EXP) | −10% |
| Render estático + animación (familia REND completa) | −5% |
| 3+ servicios en un mismo encargo | −12% máx. |
| Cliente recurrente (desde 2º proyecto) | −5% |

## 7. Políticas comerciales transversales

1. **Pagos**: anticipo 50%, saldo contra entrega. Encargos < $400: 100% por adelantado.
   Proyectos > $3,000: hitos 33/33/34 ligados a entregables.
2. **Revisiones**: incluidas **2 rondas** por entregable (una ronda = un set consolidado de feedback).
   Ronda extra: hora de la clase dominante de la tarea.
3. **Licencias**: licencia de uso estándar para el cliente incluida (sin revenda ni exclusividad).
   Exclusiva de mercado: +20–40% según alcance. Compra de archivos fuente: +25% (siempre sujeto a
   acuerdos con terceros si hay assets comprados).
4. **Validez** de presupuesto: 21 días (rate card vigente).
5. **Garantía técnica**: bugs de integración corregidos sin costo durante 30 días post-entrega.
   No cubre cambios de contenido ni nuevos requisitos.
6. **Kill fee**: cancelación a mitad de camino → se factura el trabajo realizado con mínimo 25%
   del total pactado.
7. **Exclusiones globales** (nunca incluidas salvo pacto expreso): música licenciada, voice-over,
   hosting/suscripciones mensuales, assets de terceros, costes de API de IA (los paga el cliente,
   BYOK), impuestos y cumplimiento fiscal local (doc-03 §7: validación con contador).
8. **Discovery**: proyectos WEB/EXP/IA ≥ tier M requieren discovery pago previo ($175–750 según
   alcance, acreditable al proyecto si se cierra dentro de 30 días). Sin discovery no hay cifra
   cerrada — solo el rango público de este catálogo.
9. **Fees de pasarela** (Wise/PayPal ~3–5%) asumidos dentro del precio publicado.

## 8. Drivers de variación (materia prima de los sliders futuros)

Cada familia documenta qué mueve el precio min→max. Ejemplos canónicos por familia (uno será el
slider de referencia de la web futura):

| Familia | Driver principal | Ejemplo min ↔ max |
|---|---|---|
| CAD | nº y clase de piezas, limpieza del CAD | drone básico 8–12 piezas ↔ drone pro 60–120 pzas c/gimbal y cableado |
| REND | duración, sims, resolución | loop 5–10 s ↔ pieza 45–90 s con FX |
| ASRT | interactividad, rig, shaders | prop estático ↔ máquina XL interactuable con exploded view |
| WEB | plataforma, lógica custom, perf móvil | embed visor ↔ web app configurador |
| EXP | coreografía scroll, gameplay, contenido | scrollytelling S ↔ minijuego L |
| IA | superficie (chat/RAG/automatización), integraciones | widget chat BYOK ↔ automatización multi-proceso con RAG interno |
| VFX | nº de planos, tracking, FX sobre toma | 1 plano simple ↔ secuencia multiclip con scene recon |

Los ejemplos visuales por tier usan **placeholders explícitos** hasta contar con assets reales
(coordinación con AG-PORT / sprint doc-33). Prohibido inventar URLs, clientes o demos.

## 9. Calibración

Tras cada 5–10 cotizaciones cerradas: comparar horas estimadas vs reales, ajustar la siguiente
versión de rate card citando evidencia. Meta de sanity: mezcla P50 del catálogo rinde ≥ USD 3k/mes
a 130 h facturables (doc-03 §9.2).
