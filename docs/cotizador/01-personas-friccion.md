# Doc 1/3 — Investigación de usuarios: personas, conocimiento y fricción con el cotizador actual

> **Método**: role-playing estructurado de 4 perfiles reales del mercado objetivo (agencias de marketing, marcas, freelances). Cada sección responde: qué sabe, qué NO sabe, en qué términos hay que hablarle, qué ayudas visuales le sirven y dónde exactamente se frustre con el sistema actual (`/cotizador`).
>
> **Referencia de UI**: DirectCotizador.tsx — flujo actual: selector de servicio (28) → variables por servicio (sliders/toggles) → nivel derivado XS–XL → urgencia → moneda USD/COP → descuento lanzamiento → resultado con desglose por subtareas. Chat IA flotante.

---

## P1 — CEO / Fundador de agencia de marketing (decisor económico)

**Perfil**: 35–55 años, decide presupuesto pero nunca toca lo técnico. Compra para revender a su cliente final (white label) o para campañas propias. Piensa en márgenes, plazos de campaña y riesgo reputacional.

### Qué sabe
- Presupuestos, márgenes, facturación, anticipos (50/50).
- Calendarios de campaña y deadlines duros de clientes.
- Qué es un entregable "vendible" (video para redes, web interactiva, visor de producto).
- Negociar alcance, rondas de revisión y exclusividad.

### Qué NO sabe
- Diferencia entre render offline y tiempo real; qué es un asset "optimizado".
- Cuánto tarda producir un asset 3D o por qué.
- Qué significan tris, LODs, PBR, GLB, tier XS–XL, clases RC-*.
- Qué servicio del catálogo necesita: **piensa en proyectos, no en servicios**.

### En qué términos hablarle
| ✅ Funciona | ❌ No funciona |
|---|---|
| "Video 3D para redes de tu cliente" | "RND-02 Animación 3D" |
| "Precio cerrado / desde X" | Rangos amplios sin explicación (USD 300–2.000) |
| "Entrega en 2 semanas, 2 rondas incluidas" | "42 h de RC-RTA" |
| "White label, no aparecemos nosotros" | "Pipeline de ingesta", "Draco/KTX2" |
| ROI, caso de éxito, industria | Polígonos, presupuesto técnico |

### Ayudas visuales que le funcionan
1. **Casos por industria** (muebles, retail, medicina, industrial) con miniatura + resultado.
2. Video demo de 30 s por tipo de servicio.
3. Tabla simple: *"Quiero lograr X → esto es → desde USD Y → entrega Z"*.
4. Testimonios/marcas (aunque sean anónimos: "agencia de moda, Medellín").

### Fricciones específicas con el sistema actual
| # | Sección | Fricción | Severidad |
|---|---|---|---|
| F1.1 | Selector de servicio | 28 opciones con nombres técnicos; parálisis por elección; no sabe cuál pide para el proyecto de su cliente | 🔴 Crítica |
| F1.2 | Resultado | Rango min–max amplio sin explicación de qué lo mueve; no puede presupuestar a su cliente con eso | 🔴 Crítica |
| F1.3 | Resultado | **No hay CTA**: obtiene un número y queda en el aire. ¿Hablo? ¿Reservo? ¿Compromete algo? | 🔴 Crítica |
| F1.4 | Urgencia | "Crítico" deshabilitado sin explicación; sus campañas SÍ tienen deadlines | 🟡 Alta |
| F1.5 | Moneda | Ve COP mucho más barato que USD y sospecha ("¿es precio distinto para colombianos?") | 🟡 Media |
| F1.6 | Desglose | Subtareas técnicas + clases RC-* son ruido para él; quiere totales y fases | 🟡 Media |

**Cita típica**: *"Tengo un cliente de muebles que quiere mostrar su catálogo en la web con 3D. ¿Me dices tú qué necesito y cuánto, o tengo que adivinar cuál de estos 28 servicios es?"*

---

## P2 — Director de Arte de agencia (decisor técnico-visual)

**Perfil**: 28–45 años, aprueba la calidad visual, arma moodboards, habla con el cliente de look & feel. Es quien convence al CEO de P1 que la inversión vale.

### Qué sabe
- Estética, composición, iluminación, tipografía, motion.
- Leer y producir referencias (Behance, Pinterest, frames de películas).
- Formatos de entrega de imagen/video (resolución, codecs, relación de aspecto).
- Distinguir fotorrealismo de estilizado, y exigirlo.

### Qué NO sabe
- Qué determina las horas de producción (por eso los precios le parecen arbitrarios).
- Límites técnicos de WebGL (peso de archivos, móviles gama baja).
- Cómo se traduce su referencia visual a variables del cotizador.

### En qué términos hablarle
| ✅ Funciona | ❌ No funciona |
|---|---|
| "Fotorrealista estilo estudio de producto" | "Presupuesto poligonal: 50k tris" |
| "Nivel M ≈ como este ejemplo [imagen]" | "Tier derivado M por tus drivers" |
| "2 rondas de revisión de look" | "QA motor target" |
| Resolución 4K, EXR, versiones crop | Draco/KTX2, UV unwrap |
| Moodboard, referencias, paleta | Set dressing, HDRI |

### Ayudas visuales que le funcionan
1. **Galería comparativa por nivel** (mismo producto en S vs M vs L): lo que más lo ayuda a decidir.
2. Referencias estilo Behance por servicio con tags ("estilizado toon", "estudio neutro").
3. Antes/después (CAD crudo → asset web texturizado).
4. Frames de muestra con metadata legible (no técnica).

### Fricciones específicas con el sistema actual
| # | Sección | Fricción | Severidad |
|---|---|---|---|
| F2.1 | Variables | Los sliders le piden números técnicos que él piensa en imágenes ("¿cuántas 'vistas'?" — depende del guion visual que aún no existe) | 🔴 Crítica |
| F2.2 | Todo el flujo | **Cero ejemplos visuales**: no puede imaginar qué recibe en cada nivel; decide por fe | 🔴 Crítica |
| F2.3 | Nivel derivado | El badge XS–XL aparece sin rostro: ¿qué cambia visualmente entre M y L? | 🔴 Crítica |
| F2.4 | Variables | No puede adjuntar su moodboard/referencias en ninguna parte del flujo | 🟡 Alta |
| F2.5 | Desglose | Las subtareas le interesan (¡es su lenguaje de producción!) pero sin horas visibles por fase ni orden narrativo | 🟢 Menor |

**Cita típica**: *"Te puedo enseñar exactamente lo que quiero con tres referencias. Pero tu cotizador me pregunta cosas como 'número de materiales' cuando yo todavía estoy eligiendo la dirección de arte."*

---

## P3 — Diseñador/a gráfico o industrial (ejecutor/a, a veces cliente directo)

**Perfil**: 24–40 años, domina Illustrator/Figma, quizá Blender básico. A veces trae el modelo 3D o CAD hecho (suyo o del cliente). Cotiza también su propio trabajo, así que compara tarifas.

### Qué sabe
- Archivos fuente y sus formatos (.ai, .fig, .blend, .step, .stl).
- Conceptos parciales de 3D: texturas, UVs (de oídas), renders de Cycles/Eevee.
- Qué es una ronda de revisión y cómo se itera.

### Qué NO sabe
- Si su archivo sirve para web (topología, polycount, escala, jerarquía).
- Por qué un asset web cuesta lo que cuesta si "yo hago renders en Blender".
- Los tiempos reales de optimización (la parte invisible del trabajo).

### En qué términos hablarle
| ✅ Funciona | ❌ No funciona |
|---|---|
| "¿Tu modelo está listo para web? Haz este test" | "Presupuesto poligonal ≤10k tris/pieza" |
| Checklist: peso, escala, piezas nombradas | "Metadata por pieza", "LODs" |
| "Traes .step y lo convertimos" | "Pipeline CAD→WebGL" |
| Comparativa honesta de tarifas/hora | Clases RC-* sin contexto |

### Ayudas visuales que le funcionan
1. **Checklist autodiagnóstico de archivo** con capturas ("si pesa >100 MB, mira aquí").
2. Antes/después CAD→web con contador de piezas/tris visible.
3. Desglose transparente de fases (valora el oficio).

### Fricciones específicas con el sistema actual
| # | Sección | Fricción | Severidad |
|---|---|---|---|
| F3.1 | Variable "fuente del modelo" | Tiene el archivo pero no sabe responder si sirve; no hay guía de diagnóstico | 🔴 Crítica |
| F3.2 | Variables CAD | "Número de piezas" — no ha contado las del ensamblaje; no sabe cómo verlo | 🟡 Alta |
| F3.3 | Resultado | Quiere entender la estructura de costo (compara con su propia tarifa) pero RC-* y subtareas en inglés técnico lo confunden | 🟡 Media |
| F3.4 | Flujo completo | Sin forma de adjuntar el archivo ni recibir feedback previo al pago | 🟡 Alta |

**Cita típica**: *"Tengo el STEP del producto, pero no sé si sirve para web. ¿Con que lo suba me dices? Ahora mismo el cotizador me pregunta cosas que no sé y me quedé antes de empezar."*

---

## P4 — Marketing Manager de empresa (solicitante B2B interno)

**Perfil**: 27–40 años, gestiona campañas y lanzamientos dentro de una marca. Reporta a dirección. Necesita justificar el gasto con resultados y presentar propuestas internas.

### Qué sabe
- KPIs, conversiones, engagement, calendario editorial, Q3/Q4.
- Landing pages, A/B testing, assets para social (9:16, 1:1).
- Procesos de aprobación interna (presupuestos formales, proveedores).

### Qué NO sabe
- Todo lo 3D/webGL; distingue "video animado" y "3D" como categorías difusas.
- Qué es viable técnicamente y qué no (pide a veces lo imposible, rechaza lo fácil).

### En qué términos hablarle
| ✅ Funciona | ❌ No funciona |
|---|---|
| "Assets para tu launch de septiembre" | Servicios por código/nombre técnico |
| Impacto: engagement, conversión, dwell time | Métricas técnicas (tris, draw calls) |
| Documento compartible para aprobación interna | Un número en pantalla que no puede exportar |
| FAQ de proceso y garantías | Nada de proceso visible |

### Ayudas visuales que le funcionan
1. Casos por objetivo de campaña (launch, e-commerce, feria).
2. **PDF/link compartible de la cotización** para adjuntar en su solicitud interna.
3. Video corto explicando el proceso end-to-end.

### Fricciones específicas con el sistema actual
| # | Sección | Fricción | Severidad |
|---|---|---|---|
| F4.1 | Entrada | Llega con un objetivo de campaña; el sistema exige elegir servicio primero | 🔴 Crítica |
| F4.2 | Resultado | **No puede exportar/compartir la cotización** (ni PDF ni link) para su proceso interno de aprobación | 🔴 Crítica |
| F4.3 | Urgencia | Su calendario manda; "Crítico" deshabilitado rompe su flujo | 🟡 Alta |
| F4.4 | Todo | No hay FAQ/proceso/garantías: no puede responder las preguntas de su jefe | 🟡 Alta |

**Cita típica**: *"Necesito algo para el lanzamiento de octubre y un documento para pasar la compra interna. Tu página me da un número que no puedo ni guardar."*

---

## Síntesis transversal: top 8 fricciones del sistema actual

| Rank | Fricción | Personas afectadas | Sección actual |
|---|---|---|---|
| 1 | Entrada por catálogo técnico en vez de por objetivo de negocio | P1, P3, P4 | Selector de servicio |
| 2 | Sin ejemplos visuales por nivel: no se puede imaginar qué se compra | P2 (crítico), todas | Todo el flujo |
| 3 | Sin CTA post-presupuesto: dead-end total | Todas | Resultado |
| 4 | Sliders con parámetros técnicos que el cliente no conoce ni puede conocer | P2, P3 | Variables por servicio |
| 5 | Sin export/compartir/guardar la cotización | P4 (crítico), P1 | Resultado |
| 6 | Jerga en variables y desglose (tris, RC-*, Draco, QA) | Todas menos P3 parcial | Variables + Desglose |
| 7 | Sin ruta para adjuntar referencias/archivos (el idioma real del cliente) | P2, P3 | Ninguna (ausencia) |
| 8 | Urgencia crítica bloqueada sin explicación + sospecha sobre doble precio COP/USD | P1, P4 | Urgencia + Moneda |

**Hallazgo clave**: el cotizador actual está construido *de adentro hacia afuera* (refleja fielmente la estructura interna de servicios y horas). Los clientes operan *de afuera hacia adentro* (objetivo → referencias → presupuesto). La brecha entre ambos es el 100% de la fricción listada.
