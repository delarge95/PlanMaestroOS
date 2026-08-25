# Paquetes comerciales AG-SERV — bundles derivados del catálogo

> v1.0 · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Cada paquete ES una combinación de servicios de los catálogos `02`–`04`. Su presupuesto se calcula
> **sumando horas y aplicando las bandas del [`01_modelo_cobro.md`](01_modelo_cobro.md)** (guardarrail §5.2 de
> [`05_estimacion_ejemplos.md`](05_estimacion_ejemplos.md): nunca se suman rangos ya redondeados).
> Todo paquete incluye: intake, 2 rondas de revisión por entregable, QA y entrega documentada (§5/§8 modelo).

## Tabla de paquetes v1

| ID | Paquete | Composición | Horas totales | Presupuesto | Plazo |
|---|---|---|---|---|---|
| PK-01 | **Render Starter** | A1: hero + 2 ángulos mismo setup (N1–N2) | 6–29 h | **$160–1000** | 3–6 días |
| PK-02 | **Hero Film 30 s · tier N2** | A2 ×3 bloques 10 s, −15% lote (N2) | 46–105 h | **$1300–3700** | 2–4 semanas |
| PK-03 | **Hero Film 30 s · tier N3** | ídem con FX/sim (N3) | 104–247 h | **$3650–11100** | 4–8 semanas |
| PK-04 | **WebGL Showcase** | B1 asset RT + C2 visor custom (ambos N1–N2) | 13,5–70 h | **$340–2450** | 1–2 semanas |
| PK-05 | **Configurador e-commerce · N2** | B2 asset interactuable + C5 configurador | 41–92 h | **$1150–3200** | 3–5 semanas |
| PK-06 | **Configurador premium** | ídem con componentes N3 (escena o reglas complejas) | 72–158 h | **$2500–7100** | 4–8 semanas |
| PK-07 | **Experiencia de marca (scrollytelling)** | ~3 assets B (N1–N2) + C4 experiencia (N2–N3) | 41–157 h | **$1000–7100** | 4–8 semanas |
| PK-08 | **Digital Twin Pilot** | F1 CAD→WebGL (N2) + F3 gemelo con datos (N2) | 51–124 h | **$1400–4300** | 3–6 semanas |
| PK-09 | **AI Starter** | E1 chatbot RAG en sitio (N1–N2, BYOK) | 9–48 h | **$230–1700** | 1–2 semanas |
| PK-10 | **AI Office** | E2 automatización interna + E4 agente de agencia (N2) | 51–115 h | **$1400–4000** | 3–6 semanas |

Notas transversales:
- **AR add-on**: C9 N2 sobre cualquier paquete con asset RT: +8–19 h → **+$220–700**.
- Los paquetes asumen targets web estándar; requisitos móviles exigentes pueden subir el nivel de las subtareas de perf (se declara en SOW).
- Modificadores globales (urgencia, recurrente, licencias) aplican igual que en ventas à-la-carte (§4 modelo).
- API/LLM/compute SIEMPRE BYOK o traspasado con recibo (§3 modelo).

## Retainers (G3) — soporte y evolución continua

| Plan | Horas/mes | Presupuesto mensual | SLA respuesta | Uso típico |
|---|---|---|---|---|
| Lite | 4 h | **$110–140/mes** | <48 h hábiles | ajustes menores, actualización de assets |
| Standard | 8 h | **$220–280/mes** | <48 h hábiles | iteración de visor/configurador, contenido |
| Pro | 20 h | **$560–700/mes** | <24 h hábiles | evolución continua de web app / gemelo |

Reglas retainer: cobro mensual anticipado; horas no usadas rollean 50% máx. al mes siguiente; trabajo fuera de
las horas se cotiza aparte con −10% por ser cliente recurrente (§4 modelo).

## Cómo elegir paquete (guía interna de venta)

1. ¿El entregable es una IMAGEN/VIDEO? → PK-01..03.
2. ¿Es un PRODUCTO en la web? → PK-04 (mostrar) / PK-05..06 (vender con variantes).
3. ¿Es una EXPERIENCIA? → PK-07.
4. ¿Hay DATOS/CAD técnico detrás? → PK-08.
5. ¿El cliente quiere IA? → PK-09 (cara pública) / PK-10 (procesos internos).
6. ¿Relación de largo plazo? → cualquiera + retainer G3 (descuento recurrente automático).
