# Análisis de cotización — Tiempos por tarea y tarifas COP (Colombia)

> Insumo para la propuesta a la agencia. Fuentes: catálogo del proyecto (`src/data/services/`), rate card vigente y benchmark de mercado colombiano (fuentes al final). Trabajo de análisis — no toca la web.

## 1. Rate card actual vs. mercado colombiano (COP/hora)

| Rol | Tarifa actual | Mercado Colombia 2025 | Lectura |
|---|---|---|---|
| Arte 3D (RC-ART) | 30.000–42.000 | 40.000–60.000 (experimentado) · 90.000 (tarifario diseño pro) | Ligeramente por debajo del mercado local: margen para subir 10–15% sin salir de rango |
| Asset Realtime (RC-RTA) | 38.000–52.000 | 40.000–60.000 (base) · prima por especialidad realtime | Alineado al piso; el nicho realtime justifica el tope alto |
| Dev Web 3D (RC-WEB) | 40.000–57.000 | Dev general: junior 60–100k · mid 100–160k · senior 160–240k+; three.js tiene prima sobre frontend general | **Por debajo del mercado incluso junior.** Es tu mayor ventaja competitiva para la agencia (y tu mayor margen de subida a futuro) |
| IA aplicada (RC-AI) | 42.000–60.000 | Chatbot IA conversacional en Colombia: $6M–16M COP por proyecto; packs agencia: $1,89M (básico) – $4,89M (pro) | Por proyecto quedamos competitivos; por hora también por debajo de agencias |
| Consultoría (RC-CON) | 60.000–82.000 | Senior/internacional: 160–240k+ | Muy por debajo del senior internacional — defendible para mercado local |

**Conclusión**: la rate card actual es competitiva (por debajo del mid-level de mercado en desarrollo y en línea con arte 3D local). Para la agencia significa margen de reventa sano. Recomendación: congelar la tarjeta para esta propuesta y revisar alzas solo después de los primeros 5 proyectos (coherente con el descuento de lanzamiento −25%).

## 2. Tiempo por tarea (horas por nivel — producción completa, 2 rondas incluidas)

| Servicio | S | M | L | XL | Entrega (días hábiles) |
|---|---|---|---|---|---|
| Visor custom three.js | 7,5–20 | 20–40 | 42–88 | 88–181 | 2–21 |
| Visor embebido | 2–5 | 5–12 | 12–24 | 14–29 | 1–15 |
| Unity WebGL | 10–18 | 17–32 | 26–47 | 32–55 | 3–70 |
| Web App 3D | 21–45 | 45–114 | 114–245 | 245–480 | 7–112 |
| Scrollytelling 3D | 11–20 | 19–35 | 31–62 | 38–73 | 4–120 |
| Catálogo 3D | 18–42 | 40–85 | 85–160 | 102–186 | 10–160 |
| Minijuego web | 25–55 | 55–110 | 102–192 | 123–229 | 15–180 |
| CAD → Web (insignia) | 5–12 | 12–35 | 35–92 | 92–250 | 1–70 |

**Desglose de fases típicas** (para defender el tiempo ante la agencia):
- **Visor (WEB-01)**: spec/pipeline de carga → interacción + UI overlay → perf móvil + QA + entrega.
- **Web App (WEB-04)**: discovery/spec funcional → arquitectura + escena configurable → QA/E2E + perf + deploy. *El discovery es SIEMPRE tarifado en este servicio.*
- **Scrollytelling (WEB-05)**: storyboard técnico → timeline scroll-driven → sincronía DOM → perf/fallbacks → QA dispositivos.
- **CAD→Web (CAD-01)**: ingesta/QC → decimado/retopo por pieza → UVs + baking → texturas → metadata por pieza → LODs + compresión → QA visor.

Regla de tiempo de entrega: `⌈horas_max / 6⌉` días hábiles aprox. (capacidad ~6 h/día productivas con overhead) — los rangos del catálogo ya la aplican.

## 3. Rangos de precio COP por proyecto (tarjeta actual × horas)

| Servicio | S | M | L | XL |
|---|---|---|---|---|
| Visor custom | $400 mil – $1,14M | $800 mil – $2,28M | $1,68M – $5,02M | $3,52M – $10,3M |
| Visor embebido | desde $400 mil | $400–680 mil | $480 mil – $1,37M | $560 mil – $1,65M |
| Unity WebGL | $400 mil – $1,03M | $680 mil – $1,82M | $1,04M – $2,68M | $1,28M – $3,14M |
| Web App 3D | $840 mil – $2,57M | $1,8M – $6,5M | $4,56M – $13,9M | $9,8M – $27,4M |
| Scrollytelling | $440 mil – $1,14M | $760 mil – $2M | $1,24M – $3,53M | $1,52M – $4,16M |
| Catálogo 3D | $720 mil – $2,39M | $1,6M – $4,85M | $3,4M – $9,12M | $4,08M – $10,6M |
| Minijuego web | $1M – $3,14M | $2,2M – $6,27M | $4,08M – $10,9M | $4,92M – $13,1M |
| CAD → Web | $400–600 mil | $430 mil – $1,75M | $1,27M – $4,61M | $3,35M – $12,6M |

Nota WEB-02 S: el máximo crudo ($290 mil) queda por debajo del mínimo de proyecto ($400 mil) — se presenta como "desde $400 mil".

## 4. Referencias externas de IA (por si la agencia pregunta por el servicio AI-01)

- Chatbot IA conversacional en Colombia: **$6M–16M COP** por proyecto (Consolidación Digital).
- Packs de agencia: básico $1,89M · pro (agente + integraciones) $4,89M (Mentora Colombia).
- Nuestro AI-01 (chat RAG en sitio): S ≈ $1,5–3M · M ≈ $3–6M · L ≈ $6–12M (coherente con el mercado).

## Fuentes del benchmark

- [¿Cuánto cobra un desarrollador web freelance en Colombia?](https://omarhernandezrey.com/blog/cuanto-cobra-desarrollador-web-freelance-colombia) — junior $15 USD/h a senior $60+ USD/h.
- [HireInSouth — Three.js Developers](https://www.hireinsouth.com/roles/three-js-developer) — three.js LatAm ≈ $3.500 USD/mes (~$20/h).
- [Tarifario Diseñadores Colombianos 2025](https://disenadorescolombianos.co/tarifario-disenadores-colombianos-2025/) — diseño profesional base $90.000 COP/h.
- [Consolidación Digital — Cuánto cuesta un chatbot WhatsApp en Colombia](https://www.consolidaciondigital.com/blog/inteligencia-artificial/cuanto-cuesta-chatbot-whatsapp-colombia) — $300–800 USD básico · $1.500–4.000 IA conversacional.
- [Mentora Colombia — Automatización con IA](https://mentoracolombia.com/automatizacion) — packs $1,89M / $4,89M COP.
- [Kemeny Studio — Costo de implementación IA 2026](https://kemenystudio.com/es/blog/costo-implementacion-inteligencia-artificial-empresa-2026-03-24) — agentes empresariales $20–80k USD (referencia techo internacional).
