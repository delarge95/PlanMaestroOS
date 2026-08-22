# 00 — Deduplicación e identificación de fuentes (AG-NUTRI)

> Fecha: 2026-08-22. Método: lectura local con PyMuPDF (texto extraíble en los tres PDFs; sin OCR necesario).
> Offset de páginas citado abajo = fórmula para convertir página impresa ↔ página del PDF.

## Fuentes identificadas

### S1 — Sport Nutrition (3G E-learning / Bibliotex)

| Campo | Valor |
|---|---|
| Archivo | `D:\Downloads\Libros\Faltan\sport-nutrition_compress.pdf` (33 MB) |
| Título | *Sport Nutrition* |
| Autor/Editorial | 3G E-learning LLC (Bibliotex Digital Library), editorial board multi-autor (no son especialistas en nutrición deportiva: psicólogos, agrónomos, CS) |
| Edición/Año | e-book Edition 2022, ISBN 978-1-98467-526-2 |
| Extensión | 358 páginas PDF (7 capítulos + índice) |
| Idioma | EN |
| Offset | página impresa = página PDF − 16 (verificado: p.2 impresa = PDF 18) |
| Texto extraíble | Sí, completo (InDesign, texto limpio) |
| evidenceTier | **expert-book** (texto educativo recopilado; capítulos parecen derivar de fuentes abiertas/CC — calidad desigual, revisar cifras contra S2/S3) |
| Rol | Complementaria. Útil como texto didáctico y para glosario; NO canónica en ningún tema frente a S2 o S3. |

**Duplicado — descartado:** `D:\Downloads\Libros\sport-nutrition_compress_compressed.pdf` (3.5 MB) es el MISMO libro (mismos metadatos de creación `2021-10-26`, mismas 358 páginas, mismo ISBN en portada; solo cambia la fecha de re-compresión `2026-08-13`). No se extrae nada de él; S1 es la copia de referencia (mayor fidelidad de texto).

### S2 — Nutrition in Sport (Maughan, IOC Encyclopaedia)

| Campo | Valor |
|---|---|
| Archivo | `D:\Downloads\Libros\Nutrition In Sport - Maughan.pdf` (4 MB) |
| Título | *Nutrition in Sport* — Volume VII of the Encyclopaedia of Sports Medicine |
| Autor/Editorial | Editado por Ronald J. Maughan; IOC Medical Commission + Federation Internationale de Medecine du Sport; Blackwell Science |
| Edición/Año | 2000 (primera edición; existe re-impresión 2008 en metadatos, contenido idéntico al TOC de 2000) |
| Extensión | 698 páginas PDF, 51 capítulos en 4 partes |
| Idioma | EN |
| Offset | página impresa = página PDF − 18 (verificado en ch27 p.367=PDF 385, ch28 p.379=PDF 397, ch5 p.73=PDF 91) |
| Texto extraíble | Sí, completo (Distiller, texto limpio; figuras no) |
| evidenceTier | **expert-book** con capítulos escritos por investigadores líderes (Burke, Ivy, Hargreaves, Lemon, Maughan, Sawka, Shirreffs, Greenhaff, Spriet, Manore…) que citan RCTs/meta-análisis de primera línea. Tier del DATO a capturar por regla (meta-analysis/rct/observacional) cuando el texto lo declare. |
| Rol | **Canónica en: hidratación y electrolitos (ch15–17, 19), creatina (ch27), cafeína (ch28), carbohidratos peri-entreno y glucógeno (ch5, 7, 8), metabolismo proteico (ch10), ayudas ergogénicas (ch26), atleta con sobrepeso (ch35), eventos de fuerza/potencia (ch47).** Límite: año 2000 — donde S3 (2016) dé una cifra más moderna, gana S3 y se anota conflicto. |

### S3 — Essentials of Strength Training and Conditioning (NSCA, Haff & Triplett)

| Campo | Valor |
|---|---|
| Archivo | `D:\Downloads\Libros\haff_g_gregory_triplett_n_travis_eds_essentials_of_strength.pdf` (+ .txt residual de solo 10 KB — ignorado, capa de texto incompleta) |
| Título | *Essentials of Strength Training and Conditioning* |
| Autor/Editorial | Eds. G. Gregory Haff y N. Travis Triplett; NSCA — Human Kinetics |
| Edición/Año | 4ª edición, 2016 (estructura de 24 capítulos y extensión verificadas contra TOC del PDF) |
| Extensión | 752 páginas PDF |
| Idioma | EN |
| Offset | página impresa = página PDF − 16 (verificado: ch10 impresa 201 = PDF 217) |
| Texto extraíble | Sí, completo |
| evidenceTier | **expert-book** (consenso NSCA; cifra de referencia en fuerzas/potencia; citas a position stands) |
| Rol | **Canónica en: nutrición básica para salud (ch9), estrategias peri-competencia pre/durante/post (ch10), sustancias ergogénicas actuales — creatina, cafeína, β-alanina, etc. (ch11).** Al ser 16 años más moderna que S2, en conflicto de cifras gana S3 y se registra. |

Capítulos NSCA relevantes (páginas impresas): ch9 *Basic Nutrition Factors in Health* pp. 175–200; ch10 *Nutrition Strategies for Maximizing Performance* pp. 201–224; ch11 *Performance-Enhancing Substances and Methods* pp. 225–248.

## Matriz de canonicidad por tema (para resolución de conflictos)

| Tema | Canónica | Secundaria | Nota |
|---|---|---|---|
| Proteína total (g/kg) | S3 (ch9/10) | S2 (ch10 Lemon) | S2 (2000) da 1.2–1.7; consenso moderno de S3 se contrasta; el rango 1.2–2.0 se valida cruzando ambas + S1 |
| Distribución/timing proteico | S3 (ch10) | S1 (ch4 §4.2.4) | S2 ch10 es metabolismo, menos accionable |
| Carbohidratos peri-entreno | S2 (ch7 Ivy, ch8 Hargreaves) | S3 (ch10) | S2 canónica por profundidad; S3 por actualización de cifras |
| Energía por objetivo (déficit/superávit) | S2 (ch35 Manore) | S3 (ch9), S1 (ch5/6) | S2 ch35 es específico de atletas |
| Hidratación y electrolitos | S2 (ch15–17, 19) | S3 (ch10) | Maughan/Shirreffs/Sawka = la referencia |
| Creatina | S2 (ch27 Greenhaff) + S3 (ch11) | S1 (ch1 §1.5) | S2 para mecanismo, S3 para dosis consenso actual |
| Cafeína | S2 (ch28 Spriet) + S3 (ch11) | — | Ídem |
| Ayudas ergogénicas (general) | S3 (ch11) | S2 (ch26) | S3 más moderno y completo en β-alanina/HMB |
| Fuerza/potencia (deporte específico) | S2 (ch47 Rogozkin) | S3 (ch10) | Perfil del usuario de la app |

## Decisiones

1. **Se descarta `sport-nutrition_compress_compressed.pdf`** como fuente (duplicado bit-equivalente en contenido de S1). Si en el futuro se re-verifica, comparar hash de texto.
2. Citas siempre como `libro §capítulo p.impresa` usando el offset documentado arriba.
3. `evidenceTier` se declara POR REGLA (no por libro): cuando el texto fuente atribuye el dato a meta-análisis/RCT se captura; si no, `expert-book`.
4. El .txt del NSCA (10 KB) se ignora: la extracción se hace del PDF con PyMuPDF.
5. Extracción local (texto) cubre: proteína, carbohidratos, energía, hidratación, suplementos, timing. Pendiente para Gemini (gráficos/tablas pesadas): ver `plan-extraccion-gemini.md`.
