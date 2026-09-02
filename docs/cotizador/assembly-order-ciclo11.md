# Orden de ensamblaje del drone (ciclo 11) — ORDEN DEFINITIVO

> **Propósito:** verificación del usuario en Blender. Alexander entregó por
> escrito el orden DEFINITIVO de aparición en el selector de piezas (verificó
> los nombres de nodo directamente en Blender); este documento lo registra
> junto con los nombres reales del GLB y los checks de runtime. Reemplaza al
> orden por buckets+cuadrantes del [ciclo 10](assembly-order-ciclo10.md).

**Total GLB:** 264 meshes · **57 entradas** (todas consumen slider) · **Slider 1-50**, a 50 se ve TODO (etiqueta "50+").
**Overlay:** `nombre del paso · k/57` (a 50: `· 50+/57`).

## Mecanismos

1. **Pasos 1-7 — cuadrante (−x,−z):** motor → placa → soporte → hélice → base →
   tubo de posicionamiento → abrazadera del brazo. El motor y la hélice son
   grupos multi-primitiva: sus 2 sub-mallas viajan en `with` (1 entrada).
2. **Paso 9 (Frame inferior) — instancias automáticas:** el campo `with` del
   paso 9 arrastra TODAS las demás instancias de las piezas de los pasos 1-7
   (30 meshes: los otros 3 motores + sus BAN/ZUO/DIGAI/GUAN-DINGWEI + hélices +
   JIBI-JIA restantes). Aparecen solas al revelar el paso 9, SIN consumir slider.
   En runtime: k=8 → 11 meshes visibles; k=9 → 42 (+31).
3. **Pasos 38-57 — tornillería por SETS COMPLETOS:** una entrada por TIPO
   (regex anclado por prefijo del nombre de nodo), ordenados de mayor a menor
   cantidad según el GLB. El label humanizado lleva el conteo.
4. **A 50+:** todo visible (264/264), incluida tornillería.

## Nota técnica sobre nombres

GLTFLoader sanea los nombres de nodo con `PropertyBinding.sanitizeNodeName`,
que **elimina los puntos**: `GB70-M3-6.001_low_PRIM` llega a three.js como
`GB70-M3-6001_low_PRIM`. En la tabla, la columna "Nodo (GLB/Blender)" usa el
nombre original con puntos (el que se ve en Blender); los regex del código son
prefijos anclados disjuntos (`/^GB70-M25-10/` etc.), inmunes a esa sanitización.

## Lista completa (57 entradas)

| # | Paso | Nodo (GLB/Blender) | Meshes | Notas |
|---|------|--------------------|--------|-------|
| 1 | Motor | DJ-2216-KV880_001_low | 2 | grupo multi-prim (sub-mallas DJ-2216-KV880.019 + .019_1); cuadrante (−x,−z) |
| 2 | Placa del motor | BAN-DJ-DIAN-F2_001_low | 1 | cuadrante (−x,−z) |
| 3 | Soporte del motor | HMX5V-ZUO-DJ-MUJU_001_low | 1 | cuadrante (−x,−z) |
| 4 | Hélice | x500v2_propeller_low | 2 | grupo multi-prim (sub-mallas mesh.002 + .002_1); cuadrante (−x,−z) |
| 5 | Base del motor | HMX5V-DIGAI-DIANJIZUO-MUJU_001_low | 1 | cuadrante (−x,−z) |
| 6 | Tubo de posicionamiento | HMX5V-GUAN-DINGWEI_001_low | 1 | cuadrante (−x,−z) |
| 7 | Abrazadera del brazo | HMX5V-JIBI-JIA-MUJU.001_low **y** .002_low | 2 | JUNTAS en una entrada (usuario); cuadrante (−x,−z) |
| 8 | Frame superior | TOP-PLATE-X500-V5_001_low | 1 | |
| 9 | Frame inferior | BOTTOM-PLATE-X500-V5_001_low | 1+30 | `with` = 30 meshes: motores .002/.003/.004 (6) + hélices instancias (6) + BAN-DJ-DIAN-F2.002/.003/.004 (3) + HMX5V-ZUO-DJ-MUJU.002/.003/.004 (3) + HMX5V-DIGAI-DIANJIZUO-MUJU.002/.003/.004 (3) + HMX5V-GUAN-DINGWEI.002/.003/.004 (3) + HMX5V-JIBI-JIA-MUJU.003…008 (6) |
| 10 | Pilones | PYLONS-X500_001_low **y** .002_low | 2 | JUNTAS |
| 11 | Abrazadera de tubo | JIA-GUAN.001/.002/.003/.004_low | 4 | las 4 primeras juntas |
| 12 | Anillo del tren de aterrizaje | HUAN-GUIJIAO.001…008_low | 8 | TODAS |
| 13 | Tubo del brazo | CARBON-FIBER-TUBE300_001_low **y** .002_low | 2 | JUNTAS |
| 14 | Soporte de cámara Intel | ZHIJIA-CAMERA-INTEL_001_low | 1 | |
| 15 | Tapa de flujo óptico | GAI-GUANGLIU_001_low | 1 | |
| 16 | Plataforma superior | PLATFORM-PLAT-X500_001_low **+ JIA-GUAN restantes** | 1+4 | `with` = JIA-GUAN.005/.006/.007/.008 (el GLB trae 8; 4 en el paso 11) |
| 17 | Placa de montaje de batería | BATTERY-MOUNTING-PLAT_001_low | 1+1 | `with` = BATTERY-PAD_001_low (no mencionada por el usuario → va con su familia) |
| 18 | Batería | x500v2_battery_PROXY_low | 1 | |
| 19 | Soporte GPS | GPS-ZHIJIA-ZUO_001_low | 1+1 | `with` = GPS-ZHIJIA-ZHUANJIETOU_001_low (no mencionada → con su familia) |
| 20 | Tuerca del soporte GPS | GPSV5-ZHIJIA-LUOMAO_001_low | 1 | |
| 21 | Poste del GPS | GAN-GPSV5-ZHIJIA_001_low | 1 | |
| 22 | Bandeja del GPS | GPSV5-ZHIJIA-TUOPAN_001_low | 1 | |
| 23 | Módulo GPS (M10) | x500v2_gps_m10_PROXY_low | 1 | |
| 24 | Conector del frame | JIA-LIANJIE.001/.002_low | 2 | TODAS |
| 25 | Manguito del frame | GUAN-CHENG.001/.002_low | 2 | TODAS |
| 26 | Conexión de pata | JIAO-LIANJIE.001/.002_low | 2 | TODAS |
| 27 | Tubo del frame | CARBON-FIBER-TUBE_001_low **y** .002_low | 2 | los cortos del centro, JUNTOS |
| 28 | Patas de EVA | JIAO-EVA.001/.002/.003/.004_low | 4 nodos → 8 | 4 objetos multi-prim (el usuario cuenta 4; 8 sub-mallas) |
| 29 | Remates de pata | MAO-JIAO.001/.002/.003/.004_low | 4 | TODAS |
| 30 | Radio de telemetría | x500v2_telemetry_radio_PROXY_low | 1 | |
| 31 | Base de Pixhawk 6C | DIKE-PIXHAWK6C-LV-C1_001_low | 1 | |
| 32 | PCB de Pixhawk 6C | PCB-PIXHAWK6C-F1_001_low | 1 | |
| 33 | IMU de Pixhawk 6C | IMU-PIXHAWK6C_001_low | 1 | |
| 34 | Tapa de Pixhawk 6C | MIANKE-PIXHAWK6C-LV-C1_001_low | 1 | |
| 35 | Módulo de potencia PM06 | PCB-PM06_001_low | 1 | |
| 36 | Conector XT60 (14 AWG) | TOU-XT60H-M-14AWG_001_low | 1 | |
| 37 | Cubierta XT60 | X500-TAO-XT60_001_low | 1 | |
| 38 | Tornillos M25×10 (8) | GB70-M25-10.001…008_low_PRIM | 8 | set completo |
| 39 | Tornillos M25×12 (13) | GB70-M25-12.001…013_low_PRIM | 13 | set completo |
| 40 | Tornillos M25×6 (24) | GB70-M25-6.001…024_low_PRIM | 24 | set completo |
| 41 | Tornillos M3×21 DING (2) | GB70-M3-21-DING.001/.002_low_PRIM | 2 | set completo |
| 42 | Tornillos M3×25 DING (2) | GB70-M3-25-DING.001/.002_low_PRIM | 2 | set completo |
| 43 | Tornillos M3×38 (16) | GB70-M3-38.001…016_low_PRIM | 16 | set completo |
| 44 | Tornillos M3×6 (16) | GB70-M3-6.001…016_low_PRIM | 16 | set completo |
| 45 | Tornillos M3×8 DING (12) | GB70-M3-8-DING.001…012_low_PRIM | 12 | set completo |
| 46 | Remaches M3 DING (8) | LM-M3-DING.001…008_low_PRIM | 8 | set completo |
| 47 | Remaches M3 nylon (2) | LM-M3-NILONG.001/.002_low_PRIM | 2 | set completo |
| 48 | Tornillos M25×6 avellanados (12) | M25-6-CHEN-LIU.001…012_low_PRIM | 12 | set completo |
| 49 | Tornillos M3×10 pan (4) | M3-10-PAN-DING.001…004_low_PRIM | 4 | set completo |
| 50 | Tornillos M3×14 pan (4) | M3-14-PAN.001…004_low_PRIM | 4 | set completo |
| 51 | Tornillos M3×16 avellanados (2) | M3-16-CHEN-LIU.001/.002_low_PRIM | 2 | set completo |
| 52 | Postes nylon M25×5 (4) | NILONGZHU-M25-5.001…004_low_PRIM | 4 | set completo |
| 53 | Postes nylon M3×5 (4) | NILONGZHU-M3-5.001…004_low_PRIM | 4 | set completo |
| 54 | Tuercas M25 autoblocantes (4) | ZSLM-M25.001…004_low_PRIM | 4 | set completo |
| 55 | Tuercas M3 DING (8) | ZSLM-M3-DING.001…008_low_PRIM | 8 | set completo |
| 56 | Tuercas M3 con brida (16) | ZSLM-M3-FALAN.001…016_low_PRIM | 16 | set completo |
| 57 | Conector BM06B (1) | BM06B-WO_001_low | 1 | set completo |

## Decisiones humanizadas (provisionales — corregir si el usuario lo indica)

- **BAN-DJ-DIAN-F2** → "Placa del motor" (板, placa bajo el motor).
- **HMX5V-ZUO-DJ-MUJU** → "Soporte del motor" (座, asiento).
- **HMX5V-GUAN-DINGWEI** → "Tubo de posicionamiento" (管-定位).
- **HMX5V-JIBI-JIA-MUJU** → "Abrazadera del brazo" (夹-母件).
- **JIA-GUAN** → "Abrazadera de tubo" · **HUAN-GUIJIAO** → "Anillo del tren de aterrizaje".
- **GUAN-CHENG** → "Manguito del frame" · **JIA-LIANJIE** → "Conector del frame".
- **JIAO-EVA** → "Patas de EVA" · **MAO-JIAO** → "Remates de pata" · **JIAO-LIANJIE** → "Conexión de pata".
- **DIKE** → "Base", **MIANKE** → "Tapa" (carcasa inferior/superior de Pixhawk).
- **CHEN-LIU** → "avellanado", **PAN** → "cabeza pan", **FALAN** → "brida",
  **NILONG(ZHU)** → "nylon (poste)", **DING** se conserva verbatim (dudoso:
  顶 grub vs 垫 arandela — aclarar en Blender).

## Desviaciones documentadas respecto a la lista del usuario

1. **BATTERY-PAD_001_low** (no listada) → añadida como `with` del paso 17
   (misma familia, batería). Sin ella quedarían 263/264 meshes.
2. **GPS-ZHIJIA-ZHUANJIETOU_001_low** (no listada) → añadida como `with` del
   paso 19 (familia GPS). Sin ella quedarían 263/264 meshes.
3. El usuario contó "40 pasos"; con las 2 piezas anteriores la cuenta cierra en
   **37 pasos + 20 sets = 57 entradas** (la spec estimaba "~50-55" — 57 entra
   en el rango de verificación del QA).

## Checks de runtime (qa-ciclo11-verify.mjs — 41/41 PASS)

- k=1 → 2 visibles (motor completo) · k=8 → 11 · **k=9 → 42** (salto de +31:
  BOTTOM + 30 instancias) · **k=50 → 264/264**.
- Entrada 1 = DJ-2216-KV880_001_low en cuadrante (−x,−z) (confirmado contra el
  chunk JSON del GLB: translation (−0.178, 0.066, −0.178)).
- Hélice Q1 = `x500v2_propeller_low` (translation (−0.177, 0.093, −0.176));
  las instancias 2-4 son `x500v2_propeller_instance_1/2/3`.
- Overlay: `Frame inferior · 9/57` → `Tornillos M3×14 pan (4) · 50+/57`.
