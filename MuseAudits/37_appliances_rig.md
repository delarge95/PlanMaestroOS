# 37 — Matriz Appliances cocina volumen + RigSpec Technical Artist + Laboratorio gaming

> App: Plan Maestro OS — usuario Colombia (precios COP) — objetivo: volumen muscular + cocina pro + workstation Technical Artist (Unity WebGL / Three.js).
> Hereda de `11_gastronomia_hardware_gaming_cocina.md`: esquema `Appliance`, niveles esencial → pro, `Device`, `Peripheral`, `Plan { goal: volumen }`.
> Moneda: todos los rangos en COP amplios y marcados `por-verificar 2026`. No hay precios exactos en este documento.

## 0. Cómo leer este archivo

- Parte (A): matriz de 20 equipos de cocina priorizada para volumen.
- Parte (B): RigSpec workstation Technical Artist con mínimo / recomendado + ROI de compra.
- Parte (C): laboratorio gaming como biblioteca visual TechArt, sin afirmar cifras no verificadas.
- Convención de niveles (de 11): `esencial` = cocina funcional volumen desde día 1; `pro` = precisión, escala y repetibilidad.
- Convención de prioridad: `P01` = comprar primero para volumen, `P20` = comprar al final.
- Regla de integración (de 11): cada dominio nace con `{ modelo, 1 vista Hoy, 1 RAG mini, aristas al grafo }`.

## 1. Modelo Appliance aplicado a volumen

```ts
Appliance { id, name, functions[], capacity, powerW, footprint, recipesFit[] }
Plan { goal: volumen, days[], macrosDay } // volumen = superávit + proteína alta + meal-prep
Peripheral { type, model, switches/layout/dpi, price, review }
Device { cpu, gpu, ram, storage, os }
```

- `functions[]`: qué hace el equipo (cocción precisa, triturado, sellado, porcionado, conservación).
- `capacity`: porciones por tanda (volumen exige 4–8 porciones por tanda).
- `powerW`: orientativo para placa / horno / batidora / procesador (a verificar en ficha técnica).
- `footprint`: encimera vs. alacena vs. cajón (cocina real colombiana, no cocina ideal).
- `recipesFit[]`: recetas del plan volumen que habilita o mejora.
- Prioridad volumen (regla de 11): balanza + containers meal-prep primero, luego proteína fiable (sous-vide + termómetro + hierro fundido), luego escala (olla presión + horno + procesador).

## (A) Matriz 20 equipos — cocina volumen

### A.1 Tabla resumen (20 equipos)

| P | Equipo | Función culinaria | Recetas volumen que habilita | Nivel | Rango COP aproximado por-verificar 2026 |
|---|--------|-------------------|------------------------------|-------|------------------------------------------|
| P01 | Báscula doble rango | Pesar 1 g–5 kg con precisión | Todas: arroz, avena, pollo, pasta, batidos | esencial | $80.000 – $250.000 por-verificar 2026 |
| P02 | Containers meal-prep | Porcionar y conservar 4–7 días | Meal-prep pollo + arroz, pasta boloñesa, overnight oats | esencial | $60.000 – $250.000 por-verificar 2026 |
| P03 | Olla a presión | Cocción rápida de granos y carnes duras | Fríjoles, lentejas, garbanzos, pecho, caldo base | esencial | $200.000 – $600.000 por-verificar 2026 |
| P04 | Sartén hierro fundido | Sellado fuerte y retención de calor | Pechuga jugosa, carne molida, arepa proteica, vegetales salteados | esencial | $120.000 – $450.000 por-verificar 2026 |
| P05 | Termómetro sonda | Temperatura interna exacta | Pollo, cerdo, roast beef volumen, pan de carne | esencial | $60.000 – $250.000 por-verificar 2026 |
| P06 | Batidora alta potencia | Triturar avena, maní, congelados | Batido 800–1000 kcal, mantequilla maní, hummus, pancakes | esencial | $250.000 – $900.000 por-verificar 2026 |
| P07 | Tablas (set + colores) | Higiene y flujo por proteína/verdura | Todas (corte seguro pollo/carne/verdura) | esencial | $50.000 – $200.000 por-verificar 2026 |
| P08 | Cuchillería base | Corte eficiente y seguro en volumen | Pollo en cubos, res, pescado, picado grande semanal | esencial | $150.000 – $600.000 por-verificar 2026 |
| P09 | Sartén acero multicapa | Dorado limpio y fondos para salsas | Pasta alta proteína, salteados, salsas para arroz | esencial | $200.000 – $700.000 por-verificar 2026 |
| P10 | Chino + coladores | Filtrar, escurrir, texturizar | Pasta, arroz, caldos, batidos sin grumos | esencial | $40.000 – $180.000 por-verificar 2026 |
| P11 | Sous-vide (circulador) | Cocción a baja temperatura precisa | Pechuga 65 °C, cerdo, huevos 6 min equivalentes, meal-prep proteico | pro | $300.000 – $900.000 por-verificar 2026 |
| P12 | Envasadora al vacío | Conservar y porcionar proteína semanal | Pollo sous-vide, carne porcionada, pescado, congelados | pro | $250.000 – $800.000 por-verificar 2026 |
| P13 | Procesador de alimentos | Picar, rallar, amasar en lote | Albóndigas, hamburguesas caseras, faláfel, masa pancakes | pro | $250.000 – $800.000 por-verificar 2026 |
| P14 | Placa inducción portátil | Segundo fuego preciso y eficiente | Doble tanda arroz + proteína, avena nocturna sin ocupar estufa | pro | $200.000 – $700.000 por-verificar 2026 |
| P15 | Horno con vapor / horno preciso | Horneado húmedo y rostizado parejo | Pan proteico, lasaña volumen, pollo entero, papa rostizada | pro | $900.000 – $3.500.000 por-verificar 2026 |
| P16 | Mandolina + guardas | Corte uniforme para cocción pareja | Papa/camote chips horneados, gratinados, ensalada repollo | pro | $60.000 – $250.000 por-verificar 2026 |
| P17 | Batidora de varilla | Emulsionar y airear | Claras, pancakes esponjosos, salsas yogur, postre proteico | pro | $80.000 – $300.000 por-verificar 2026 |
| P18 | Piedras de afilar | Mantener filo cuchillería | Soporte a todo corte semanal (no receta directa) | pro | $50.000 – $220.000 por-verificar 2026 |
| P19 | Temporizador dedicado | Control de tiempos sin depender del móvil | Arroz, huevos, horno, sous-vide, intervalos cocina | pro | $30.000 – $120.000 por-verificar 2026 |
| P20 | Sartén antiadherente sana | Cocinar bajo en grasa sin pegar | Huevos, tortillas avena, pescado delicado, pancakes | esencial | $100.000 – $400.000 por-verificar 2026 |

### A.2 Fichas por equipo (función + recetas + nivel + footprint)

#### P01 — Báscula doble rango — esencial

- Función culinaria: pesar con resolución fina (1 g) y capacidad alta (hasta 5 kg).
- Qué recetas volumen habilita: todas las de superávit controlado (arroz 80–120 g en seco, avena 80–100 g, pollo 150–200 g en crudo, pasta, maní).
- Por qué P01 en volumen: sin báscula no hay superávit medible; es el `kcalEstimator` físico.
- Footprint: cajón, pila/batería de repuesto.
- Rango: $80.000 – $250.000 por-verificar 2026.
- Arista Plan Maestro OS: `Báscula → Plan.macrosDay → lista de compra`.

#### P02 — Containers meal-prep — esencial

- Función: porcionar, apilar, refrigerar/congelar, recalentar sin mezclar sabores.
- Recetas: tupper pollo + arroz + brócoli, pasta boloñesa alta proteína, overnight oats x5, fríjol + carne.
- Por qué P02: volumen = 4–5 comidas/día; sin containers no hay adherencia semanal.
- Capacidad sugerida: set 10–20 piezas vidrio + tapa hermética para casa, plástico BPA-free para transporte.
- Rango set: $60.000 – $250.000 por-verificar 2026.
- Nota: vidrio para recalentar, plástico liviano para llevar al trabajo/gym.

#### P03 — Olla a presión — esencial

- Función: ablandar legumbres y cortes económicos en fracción del tiempo.
- Recetas: fríjoles cargados, lentejas con carne molida, garbanzo para hummus, caldo de hueso base.
- Por qué P03: proteína barata en Colombia = legumbre + corte duro; presión = volumen económico.
- Footprint: alacena grande, tapa y empaque aparte.
- Rango: $200.000 – $600.000 por-verificar 2026.

#### P04 — Hierro fundido (skillet 26–30 cm) — esencial

- Función: sellado a alta temperatura, antiadherencia natural curada, horno + estufa.
- Recetas: pechuga sellada + terminada al horno, carne molida suelta, arepa con queso + huevo, vegetales carbonizados.
- Por qué P04: reemplaza 2–3 sartenes baratas que se deforman; dura décadas con curado.
- Mantenimiento: secado al fuego + capa fina aceite (tarea recurrente al Hoy).
- Rango: $120.000 – $450.000 por-verificar 2026.

#### P05 — Termómetro sonda — esencial

- Función: medir centro de proteína, leche, pan y caramelo ligero.
- Recetas: pechuga no seca, cerdo seguro y jugoso, pan de carne, yogur casero tibio.
- Por qué P05: volumen exige 1,6–2,2 g proteína/kg sin odiar el pollo seco; sonda = jugosidad repetible.
- Calibración: hielo + agua hirviendo según altitud (Bogotá/Medellín difieren).
- Rango: $60.000 – $250.000 por-verificar 2026.

#### P06 — Batidora alta potencia — esencial

- Función: triturar avena, hielo, congelados, frutos secos.
- Recetas: batido 800–1000 kcal (leche + avena + banano + maní + whey), mantequilla de maní, hummus lote, masa pancakes.
- Por qué P06 en volumen: 1 batido/día cubre 30–40% del superávit sin masticar 1 hora.
- PowerW orientativo: buscar ficha 800 W o más, vaso grande, a verificar en tienda.
- Rango: $250.000 – $900.000 por-verificar 2026.

#### P07 — Tablas (set, ideal colores) — esencial

- Función: separar crudo/cocido, carne/verdura, evitar contaminación cruzada.
- Recetas: soporte transversal a todo el plan (pollo, pescado, tubérculos).
- Por qué P07: con 2–3 kg de pollo semanal, higiene = no enfermarse = no perder semana de entreno.
- Footprint: ranura vertical, fácil lavado.
- Rango: $50.000 – $200.000 por-verificar 2026.

#### P08 — Cuchillería base (chef + puntilla + pan) — esencial

- Función: corte rápido y seguro en lote (mise en place 60–90 min/semana).
- Recetas: pollo en cubos, res en tiras, cebolla/zanahoria en volumen, pan proteico en rebanadas.
- Mínimo viable: chef 20 cm + puntilla + pan; bloque grande es opcional.
- Rango set base: $150.000 – $600.000 por-verificar 2026.
- Arista: `Cuchillería → Piedras afilar → temporizador batch`.

#### P09 — Sartén acero multicapa — esencial

- Función: dorado Maillard real y desglasado para salsas.
- Recetas: boloñesa alta proteína, pollo en salsa yogur, estofado rápido, arroz frito volumen.
- Por qué P09: el fondo pegado es sabor; el hierro sella, el acero hace salsa.
- Rango: $200.000 – $700.000 por-verificar 2026.

#### P10 — Chino + coladores — esencial

- Función: escurrir, filtrar, tamizar.
- Recetas: pasta 500 g–1 kg, arroz suelto, caldo limpio, batidos sin grumos avena.
- Rango: $40.000 – $180.000 por-verificar 2026.
- Nota: un chino fino + un colador grande cubren 95% de volumen.

#### P11 — Sous-vide (circulador inmersión) — pro

- Función culinaria: cocción a temperatura controlada en baño de agua + bolsa.
- Recetas: pechuga 65 °C jugosa x6, lomo cerdo, huevos textura natilla, zanahoria mantequilla en lote.
- Por qué pro y no esencial: exige envasadora o bolsas + olla alta + tiempo planificado.
- Para volumen: permite 2 kg de pollo idénticos cada domingo sin vigilar.
- Rango: $300.000 – $900.000 por-verificar 2026.
- Arista: `Sous-vide → Envasadora → Containers → macrosDay`.

#### P12 — Envasadora al vacío — pro

- Función: porcionar, extender vida útil refrigerada/congelada, preparar sous-vide.
- Recetas: pollo porcionado 180 g, carne molida plana para descongelar rápido, pescado, sofrito congelado.
- Por qué P12 junto a P11: sin vacío el sous-vide es improvisado y el congelador quema proteína.
- Rango: $250.000 – $800.000 por-verificar 2026 (más bolsas/rollos, costo recurrente).

#### P13 — Procesador de alimentos — pro

- Función: picar/volumen, rallar, mezclar masas densas.
- Recetas: albóndigas x30, hamburguesas pollo/res, faláfel horneado, masa arepa/pancake en lote.
- Diferencia con batidora: procesador = sólido/lote, batidora = líquido/fino.
- Rango: $250.000 – $800.000 por-verificar 2026.

#### P14 — Placa inducción portátil — pro

- Función: segundo fuego estable, temporizador, bajo consumo relativo.
- Recetas: arroz mientras se sella carne, avena nocturna, doble tanda pasta, calentar caldo sin ocupar estufa.
- Requisito: ollas ferromagnéticas; verificar compatibilidad antes de comprar.
- Rango: $200.000 – $700.000 por-verificar 2026.

#### P15 — Horno con vapor / horno preciso — pro

- Función: rostizado parejo + panificación hidratada + regenerado sin secar.
- Recetas: pollo entero domingo, lasaña 8 porciones, pan proteico, papa/camote rostizado 2 kg.
- Por qué P15 es tardío en ROI volumen: gran inversión y footprint; olla + sartén cubren 80% antes.
- Si ya hay horno a gas: termómetro de horno barato + bandejas + vapor manual (agua en bandeja) aplazan esta compra.
- Rango: $900.000 – $3.500.000 por-verificar 2026.

#### P16 — Mandolina + guardas — pro

- Función: láminas uniformes 2–4 mm para cocción pareja.
- Recetas: papas horneadas crocantes, gratinado papa/yuca, repollo ensalada volumen, chips camote.
- Seguridad: usar siempre guarda/guante; corte mandolina = semana sin gym.
- Rango: $60.000 – $250.000 por-verificar 2026.

#### P17 — Batidora de varilla (mano) — pro

- Función: airear y emulsionar sin sobar batidora grande.
- Recetas: claras a nieve para pancakes altos, salsa yogur-mostaza, postre skyr + whey, puré liviano.
- Rango: $80.000 – $300.000 por-verificar 2026.

#### P18 — Piedras de afilar (grano medio + fino) — pro

- Función: mantener filo, no comprar cuchillos cada año.
- Recetas: ninguna directa; habilita velocidad y seguridad de todo corte.
- Tarea Hoy: afilado ligero mensual + asentado semanal.
- Rango: $50.000 – $220.000 por-verificar 2026.

#### P19 — Temporizador dedicado — pro

- Función: tiempos audibles multi-tanda sin manos ni móvil engrasado.
- Recetas: arroz 20 min, huevos 6–9 min, horno, intervalos sous-vide.
- Por qué dedicado: el móvil con manos de pollo es contaminación + distracción.
- Rango: $30.000 – $120.000 por-verificar 2026.

#### P20 — Sartén antiadherente sana (sin PFOA, recambio) — esencial por uso, P20 por orden

- Función: huevos, pescado y pancakes con poco aceite.
- Recetas: tortilla 3 huevos + avena, tilapia/salmón, pancakes banano-avena.
- Por qué última en orden aunque sea esencial: comprar primero acero + hierro; la antiadherente se compra una vez se cocina a diario y se sabe qué diámetro se usa (24–28 cm).
- Regla sana: no sobrecalentar vacía, utensilios madera/silicona, recambio cuando se raye.
- Rango: $100.000 – $400.000 por-verificar 2026.

### A.3 Orden de compra sugerido por fases (volumen Colombia)

- Fase 1 (semana 1–2, esencial barato): P01 báscula + P02 containers + P07 tablas + P10 coladores + P19 temporizador.
- Fase 2 (mes 1, proteína fiable): P05 sonda + P04 hierro + P09 acero + P08 cuchillería.
- Fase 3 (mes 2–3, escala): P03 presión + P06 batidora + P20 antiadherente + P13 procesador.
- Fase 4 (pro, cuando hay batch semanal real): P11 sous-vide + P12 vacío + P14 inducción + P16 mandolina + P17 varilla + P18 piedras.
- Fase 5 (inversión cocina): P15 horno vapor solo si el horno actual limita (pan seco, rostizado disparejo 3 veces seguidas).

## (B) RigSpec workstation Technical Artist (Unity WebGL / Three.js)

> Uso: Unity editor + WebGL builds, Three.js / React Three Fiber, Blender ligero, Substance, VS Code, navegador con 20+ pestañas, OBS ocasional.
> Restricción Colombia: priorizar disponibilidad local, garantía y repuestos; precios solo en rangos `por-verificar 2026`.

### B.1 Tabla RigSpec (mínimo / recomendado / justificación)

#### B11. CPU — cómputo compilación + baking ligero

- Mínimo: 8 núcleos / 16 hilos moderno, boost sostenido, cooler torre decente.
- Recomendado: 12–16 núcleos / 24–32 hilos moderno, placa con buenos VRM y BIOS actualizable.
- Justificación: Unity import + lightmap bake + shaders compilan en paralelo; WebGL IL2CPP es CPU-bound monohilo a ratos, multinúcleo el resto.
- Qué verificar en tienda Colombia: socket vigente, garantía CPU + placa, RAM QVL.
- Orden ROI: #4 (después de RAM + NVMe + monitor si ya hay PC que enciende).

#### B12. GPU — viewport, shaders y test WebGL real

- Mínimo: GPU dedicada gama media con 8 GB VRAM y drivers estables, salida DisplayPort.
- Recomendado: GPU gama media-alta con 12–16 GB VRAM, buena disipación 2–3 ventiladores.
- Justificación: Three.js con PBR + sombras + postprocess y Unity URP/HDRP preview piden VRAM; 8 GB es piso para no paginar texturas 2K/4K.
- Nota WebGL: probar siempre en GPU real + integrada (muchos usuarios finales no tienen dedicada).
- Orden ROI: #5 si el foco es shader/viewport; #2 si la GPU actual tiene menos de 8 GB VRAM.

#### B13. RAM — el cuello de botella #1 en TechArt

- Mínimo: 32 GB DDR4/DDR5 en dual-channel (2x16).
- Recomendado: 64 GB DDR5 en dual-channel (2x32), dejando 2 slots libres si la placa es 4-slot.
- Justificación: Unity + Blender + Chrome + Figma + build WebGL superan 16 GB sin aviso; con 32 GB se trabaja, con 64 GB se hace batch (bake + build + navegador) sin cerrar nada.
- Orden ROI: #1 (el upgrade más barato que más horas salva).

#### B14. NVMe — iteración y builds

- Mínimo: 1 TB NVMe PCIe 3.0/4.0 para OS + proyecto activo + caché Unity/Library.
- Recomendado: 1 TB NVMe rápido OS + 2 TB NVMe proyecto + HDD/NAS externo para archivo; disipador incluido.
- Justificación: `Library/`, `ShaderCache`, `node_modules` y builds WebGL son miles de archivos pequeños; NVMe recorta import y switch platform.
- Orden ROI: #2 (junto a RAM; si solo hay SATA/HDD, pasa a #1).

#### B15. Monitor — precisión color + código + timeline

- Mínimo: 27" 1440p IPS con buena cobertura sRGB, altura ajustable o brazo.
- Recomendado: 27–32" 1440p/4K IPS calibrado sRGB + segundo vertical 24" 1080p/1440p para código/docs.
- Justificación: TechArt vive entre inspector, shader graph y navegador; 1080p único obliga a alt-tab constante y esconde banding/compresión WebGL.
- Qué verificar: perfiles sRGB, sin PWM agresivo, DisplayPort + HDMI, garantía píxeles Colombia.
- Orden ROI: #3 (un buen 1440p rinde más que +10% CPU).

#### B16. Teclado — escritura + shortcuts Unity/Blender

- Mínimo: membrana/óptico full o TKL cómodo, layout ES/Latam que ya domines, inclinación sana.
- Recomendado: mecánico hot-swap TKL/75% switches táctiles suaves + keycaps PBT + layout constante entre casa/estudio.
- Justificación: miles de pulsaciones/día (código + renombrado + atajos); hot-swap evita cambiar teclado por un switch.
- Orden ROI: #7 (ergonomía, no FPS).

#### B17. Ratón — viewport 3D + precisión UI

- Mínimo: óptico 5+ botones, sensor sin aceleración, agarre cómodo 8 h.
- Recomendado: mismo + DPI ajustable por botón, rueda precisa, alfombrilla XL gruesa.
- Justificación: orbit/pan/zoom + selección vértices + timeline piden botones laterales y DPI conmutable (viewport rápido, UV lento).
- Orden ROI: #8 junto a teclado.

#### B18. Tableta gráfica — sculpt, texturizado, mograph

- Mínimo: tableta sin pantalla tamaño M con lápiz sin batería, 2+ botones.
- Recomendado: misma + pantalla 13–16" o tableta M de gama alta + brazo/stand, punta de repuesto local.
- Justificación: para TechArt shader/VFX es opcional; para trim sheets, máscaras Substance y retoque texturas es 3x vs. ratón.
- Orden ROI: #9 (sube a #4 si haces texturizado semanal).

#### B19. Silla + escritorio — sostener volumen + 8 h sentado

- Mínimo: silla ergonómica con soporte lumbar real, escritorio 140 cm estable, monitor a altura ojos.
- Recomendado: silla con lumbar ajustable + apoyabrazos 3D + escritorio altura ajustable o módulos + reposapiés.
- Justificación: volumen = sentadilla/peso muerto + 8 h sentado; lumbar mala = semana sin pierna. ROI salud > ROI FPS.
- Orden ROI: #3 empatado con monitor si la silla actual duele (dolor manda sobre hardware).

#### B110. Audio — mezcla ligera, calls, referencia gaming

- Mínimo: audífonos cerrados cómodos + micrófono USB decente o headset digno.
- Recomendado: audífonos abiertos/planos para mezcla + cerrados para grabar + interfaz simple + monitores solo si hay cuarto tratado.
- Justificación: detectar clipping, loops y compresión WebGL (OGG/Vorbis) exige respuesta plana; el mic define cómo te perciben en remoto.
- Orden ROI: #10 salvo que hagas audio/voice semanal.

#### B111. Red + respaldo — builds WebGL y entregas

- Mínimo: fibra estable + cable Ethernet al PC + regleta/UPS básico + disco externo 1–2 TB.
- Recomendado: Ethernet + UPS 600–1000 VA + NAS o disco 4 TB + regla 3-2-1 (proyecto en NVMe + externo + nube).
- Justificación: un build WebGL de 200–500 MB que se corrompe sin backup cuesta un día; un apagón en Colombia sin UPS puede llevarse NVMe/placa.
- Orden ROI: #6 (barato y evita catástrofes; sube a #1 si hay cortes frecuentes).

### B.2 Orden de compra por ROI (desde cero vs. upgrade)

- Upgrade con PC que enciende: 1) RAM 32–64 GB, 2) NVMe 1–2 TB, 3) monitor 1440p / silla si duele, 4) CPU+placa, 5) GPU, 6) red+UPS+backup, 7) teclado, 8) ratón, 9) tableta, 10) audio.
- Setup desde cero Colombia: caja+fuente certificada con margen + placa vigente primero (no escatimar fuente), luego CPU, RAM 32 GB, NVMe 1 TB, GPU según VRAM, monitor, silla, red/UPS.
- Regla Plan Maestro OS: `Device → SkillStack → oferta`: no comprar GPU tope si la oferta objetivo pide WebGL ligero y 32 GB RAM; comprar VRAM solo cuando el proyecto usa texturas 4K reales.

## (C) Laboratorio gaming — qué medir y 5 análisis de referencia

### C.1 Qué medir (metodología, no cifras)

- FPS promedio + FPS 1% lows + FPS 0.1% lows en escena fija repetible (misma ruta, misma hora, sin fondo pesado).
- Stutter: picos de frametime (ms) y su causa probable (compilación shaders, streaming texturas, autosave, GC).
- Latencia: input-to-photon percibida (respuesta mando/ratón) + latencia red solo en multi (ping + jitter + pérdida).
- Carga: CPU/GPU/RAM/VRAM por núcleo y por escena; temperatura y throttling sostenido 20+ min.
- Artefactos visuales: popping LOD, shimmering, aliasing, banding en degradados, tearing vs. VSync.
- Protocolo mínimo: 3 corridas por escena, calentar 5 min, anotar build/parche/driver, captura con overlay frametime.
- Prohibido en este archivo: afirmar FPS/latencia de juegos concretos sin medición propia; aquí se describe QUÉ observar, no números.

### C.2 Cinco análisis de referencia (enfoque TechArt, qué observar)

#### R1 — Mundo abierto con streaming (tipo GTA V / Red Dead 2) — qué observar

- Qué medir: 1% lows al conducir rápido entre distritos/biomas, picos al girar cámara 180°.
- Pipeline: streaming de geometría/texturas por chunks, LODs y HLODs, popping en lejanía.
- Shaders: iluminación diferida vs. forward en ciudad/noche, reflejos pantalla vs. cubemaps.
- Para WebGL: lección de presupuestos (densidad objetos por celda, atlas texturas, oclusión) aplicable a mapas Three.js grandes.

#### R2 — Shooter competitivo (tipo Valorant / CS2 / Apex) — qué observar

- Qué medir: estabilidad frametime y latencia input en pelea con utilidades/humo, no solo FPS en lobby.
- Pipeline: por qué priorizan forward simple, baja complejidad shader y tickrate servidor.
- Shaders: readability (siluetas, contraste) sobre fotorrealismo; efectos translúcidos baratos.
- Para TechArt: cómo diseñar VFX legibles a 144 Hz+ que escalan a WebGL móvil.

#### R3 — RPG denso con interiores/exteriores (tipo Skyrim / The Witcher 3) — qué observar

- Qué medir: transiciones interior/exterior, carga celdas, stutter al abrir inventario/mapa.
- Pipeline: portales/oclusión, precomputed lighting en interiores + dinámico fuera, LOD vegetación.
- Shaders: piel, pelo, agua y clima (lluvia/niebla) como sistemas, no materiales sueltos.
- Para Unity: cómo partir escena WebGL pesada en Additive Scenes + Addressables con la misma lógica.

#### R4 — Plataforma/sandbox estilizado (tipo Zelda BOTW/TOTK / Fortnite) — qué observar

- Qué medir: consistencia artística con hardware modesto, escalado resolución dinámica.
- Pipeline: toon/PBR estilizado, césped/agua procedural de bajo costo, física simple masiva.
- Shaders: rampas color, fresnel suave, outlines, viento en vegetación por vértices.
- Para Three.js: referencia directa de cómo lograr belleza WebGL sin 4K ni trazado pesado.

#### R5 — Terror/pasillo con iluminación (tipo P.T. / Resident Evil / Alan Wake 2) — qué observar

- Qué medir: costo por luz/sombra en pasillos, ruido/denoise si hay GI, banding en negros.
- Pipeline: clustered/forward+ para muchas luces, lightmaps + sondas, volumétricos localizados.
- Shaders: SSS piel, condensación, polvo volumétrico, degradados oscuros sin banding.
- Para TechArt: cómo vender atmósfera con 2–3 luces bien puestas en WebGL en vez de 20 mal puestas.

### C.3 Plantilla análisis (copiar por juego)

- Juego / build / parche / plataforma / driver:
- Escena ruta fija (30–60 s repetible):
- Métricas: FPS avg, 1% low, 0.1% low, frametime picos, latencia percibida:
- Pipeline observado (streaming, LOD, oclusión, forward/deferred):
- Shaders/materiales (3 a destacar + costo estimado alto/medio/bajo):
- Lección para proyecto Unity WebGL/Three.js propio:

## 2. Mantenimiento y vista Hoy (cocina + rig)

- Cocina semanal: afilar ligero, lavar containers con tapa abierta, calibrar sonda, curar hierro si se lava fuerte.
- Cocina mensual: revisar antiadherente (rayones = recambio), empaque olla presión, filo cuchillos, inventario especias/aceite.
- Rig mensual: drivers GPU estables (no beta día 1), limpieza polvo/filtros, SMART NVMe, backup externo verificado.
- Vista Hoy sugerida: `batch domingo (presión + sous-vide + horno) → porciones restantes → próxima proteína a descongelar → backup proyecto → driver pendiente`.
- RAG mini: 20 recetas volumen propias con micros top (hierro, calcio) + 5 análisis gaming como `Game -inspires→ Project`.

## 3. Lista de compra Colombia (sin precios exactos)

- Llevar a tienda/marketplace: diámetro olla, porciones/semana, foto encimera, lista ollas compatibles inducción, socket placa y QVL RAM.
- Preguntar siempre: garantía real Colombia, repuestos (empaques, bolsas vacío, puntas lápiz), factura, costo consumibles.
- No comprar por impulso: horno vapor, GPU tope y tableta pantalla hasta validar uso semanal 4 semanas seguidas.
- Todos los valores de este archivo son rangos amplios `por-verificar 2026`; verificar en 2–3 tiendas locales antes de decidir.
