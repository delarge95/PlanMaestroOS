# Orden de ensamblaje del drone (ciclo 10) — LISTA FINAL

> **Propósito:** verificación del usuario en Blender. Este documento se generó
> desde los datos runtime reales del GLB (`window.__assmList`, posiciones en el
> espacio local del modelo normalizado, x=izq/der, z=frente/atrás). Si falta o
> sobra una pieza, corregir el orden aquí y pasarlo por escrito.

**Total GLB:** 264 meshes · **256 entradas** (246 consumen slider + 10 automáticas) · **Slider 1-50**, a 50 se ve TODO (etiqueta "50+").

## Reglas de revelado (implementadas)

1. **Cuadrante 1 (−x,−z)** consume slider: motor completo → base → hélice → tubo del brazo.
2. **Cuadrantes 2-4** (+(x,−z) → +(x,+z) → −(x,+z)) son entradas automáticas: NO consumen
   slider. Se revelan solos cuando el frame superior Y el inferior están revelados
   (slider k=20 con esta lista; gate = última entrada del frame inferior).
3. A **k=50** todo es visible, incluida la tornillería.
4. Orden de cuadrantes: **(−x,−z) → (+x,−z) → (+x,+z) → (−x,+z)**.

## Decisiones documentadas (verificar en Blender)

- **Tubo del brazo TUBE300 (2 mallas largas que cruzan el centro):**
  - `CARBON-FIBER-TUBE300002_low` (pos (0.004, 0.016, -0.03)) → **cuadrante 1 (−x,−z)**, entrada 4.
  - `CARBON-FIBER-TUBE300_001_low` (pos (0.004, 0.016, 0.03)) → **cuadrante 3 (+x,+z)**, automática — diagonales opuestas del chasis en X.
- **Tubos cortos del frame** (`CARBON-FIBER-TUBE`, 2, cerca del centro, y≈−0.18): van con el
  frame (entradas 15-16, antes del frame superior).
- **Gate de instancias:** con el frame inferior revelado (slider k=20) aparecen las
  16 meshes de los cuadrantes 2-4 automáticamente.

## Lista completa

| # | Pieza | Consumo | Cuadrante | Pos (x, y, z) | Meshes | Nombres de nodo GLB |
|---|-------|---------|-----------|---------------|--------|---------------------|
| 1 | Motor | slider | (-x,-z) | (-0.178, 0.066, -0.178) | 2 | DJ-2216-KV880019 + DJ-2216-KV880019_1 |
| 2 | Base del motor | slider | (-x,-z) | (-0.179, 0.038, -0.178) | 1 | HMX5V-DIGAI-DIANJIZUO-MUJU_001_low |
| 3 | Hélice | slider | (-x,-z) | (-0.177, 0.093, -0.176) | 2 | mesh002 + mesh002_1 |
| 4 | Tubo del brazo | slider | (-x,-z) | (0.004, 0.016, -0.03) | 1 | CARBON-FIBER-TUBE300002_low |
| 5 | Motor | auto (con frames) | (+x,-z) | (0.177, 0.066, -0.178) | 2 | DJ-2216-KV880019 + DJ-2216-KV880019_1 |
| 6 | Base del motor | auto (con frames) | (+x,-z) | (0.177, 0.038, -0.178) | 1 | HMX5V-DIGAI-DIANJIZUO-MUJU004_low |
| 7 | Hélice | auto (con frames) | (+x,-z) | (0.176, 0.093, -0.177) | 2 | mesh002 + mesh002_1 |
| 8 | Motor | auto (con frames) | (+x,+z) | (0.177, 0.066, 0.177) | 2 | DJ-2216-KV880019 + DJ-2216-KV880019_1 |
| 9 | Base del motor | auto (con frames) | (+x,+z) | (0.177, 0.038, 0.178) | 1 | HMX5V-DIGAI-DIANJIZUO-MUJU003_low |
| 10 | Hélice | auto (con frames) | (+x,+z) | (0.177, 0.093, 0.176) | 2 | mesh002 + mesh002_1 |
| 11 | Tubo del brazo | auto (con frames) | (+x,+z) | (0.004, 0.016, 0.03) | 1 | CARBON-FIBER-TUBE300_001_low |
| 12 | Motor | auto (con frames) | (-x,+z) | (-0.178, 0.066, 0.177) | 2 | DJ-2216-KV880019 + DJ-2216-KV880019_1 |
| 13 | Base del motor | auto (con frames) | (-x,+z) | (-0.179, 0.038, 0.178) | 1 | HMX5V-DIGAI-DIANJIZUO-MUJU002_low |
| 14 | Hélice | auto (con frames) | (-x,+z) | (-0.176, 0.093, 0.177) | 2 | mesh002 + mesh002_1 |
| 15 | Tubo del frame | slider | — | (-0.001, -0.177, 0.12) | 1 | CARBON-FIBER-TUBE002_low |
| 16 | Tubo del frame | slider | — | (-0.001, -0.177, -0.12) | 1 | CARBON-FIBER-TUBE_001_low |
| 17 | Frame superior | slider | — | (-0.001, 0.06, 0) | 1 | TOP-PLATE-X500-V5_001_low |
| 18 | Frame inferior | slider | — | (-0.001, 0.03, 0) | 1 | BOTTOM-PLATE-X500-V5_001_low |
| 19 | Frame inferior | slider | — | (-0.001, -0.072, 0.086) | 1 | GUAN-CHENG002_low |
| 20 | Frame inferior | slider | — | (-0.001, -0.072, -0.087) | 1 | GUAN-CHENG_001_low |
| 21 | Frame inferior | slider | — | (0.049, 0.017, -0.03) | 1 | JIA-GUAN002_low |
| 22 | Frame inferior | slider | — | (-0.051, 0.017, 0.03) | 1 | JIA-GUAN003_low |
| 23 | Frame inferior | slider | — | (-0.051, 0.017, -0.03) | 1 | JIA-GUAN004_low |
| 24 | Frame inferior | slider | — | (0.116, 0.014, 0.029) | 1 | JIA-GUAN005_low |
| 25 | Frame inferior | slider | — | (0.116, 0.014, -0.03) | 1 | JIA-GUAN006_low |
| 26 | Frame inferior | slider | — | (0.08, 0.014, 0.029) | 1 | JIA-GUAN007_low |
| 27 | Frame inferior | slider | — | (0.08, 0.014, -0.03) | 1 | JIA-GUAN008_low |
| 28 | Frame inferior | slider | — | (0.049, 0.017, 0.03) | 1 | JIA-GUAN_001_low |
| 29 | Frame inferior | slider | — | (-0.001, 0.018, 0.055) | 1 | JIA-LIANJIE002_low |
| 30 | Frame inferior | slider | — | (-0.001, 0.018, -0.056) | 1 | JIA-LIANJIE_001_low |
| 31 | Tren de aterrizaje | slider | — | (0.049, 0.016, -0.03) | 1 | HUAN-GUIJIAO002_low |
| 32 | Tren de aterrizaje | slider | — | (-0.051, 0.016, 0.03) | 1 | HUAN-GUIJIAO003_low |
| 33 | Tren de aterrizaje | slider | — | (-0.051, 0.016, -0.03) | 1 | HUAN-GUIJIAO004_low |
| 34 | Tren de aterrizaje | slider | — | (0.116, 0.016, 0.029) | 1 | HUAN-GUIJIAO005_low |
| 35 | Tren de aterrizaje | slider | — | (0.116, 0.016, -0.03) | 1 | HUAN-GUIJIAO006_low |
| 36 | Tren de aterrizaje | slider | — | (0.08, 0.016, 0.029) | 1 | HUAN-GUIJIAO007_low |
| 37 | Tren de aterrizaje | slider | — | (0.08, 0.016, -0.03) | 1 | HUAN-GUIJIAO008_low |
| 38 | Tren de aterrizaje | slider | — | (0.049, 0.016, 0.03) | 1 | HUAN-GUIJIAO_001_low |
| 39 | Tren de aterrizaje | slider | — | (0.067, -0.177, -0.12) | 1 | JIAO-EVA015 |
| 40 | Tren de aterrizaje | slider | — | (0.067, -0.177, -0.12) | 1 | JIAO-EVA015_1 |
| 41 | Tren de aterrizaje | slider | — | (0.067, -0.177, 0.12) | 1 | JIAO-EVA015 |
| 42 | Tren de aterrizaje | slider | — | (0.067, -0.177, 0.12) | 1 | JIAO-EVA015_1 |
| 43 | Tren de aterrizaje | slider | — | (-0.068, -0.177, 0.12) | 1 | JIAO-EVA015 |
| 44 | Tren de aterrizaje | slider | — | (-0.068, -0.177, 0.12) | 1 | JIAO-EVA015_1 |
| 45 | Tren de aterrizaje | slider | — | (-0.068, -0.177, -0.12) | 1 | JIAO-EVA015 |
| 46 | Tren de aterrizaje | slider | — | (-0.068, -0.177, -0.12) | 1 | JIAO-EVA015_1 |
| 47 | Tren de aterrizaje | slider | — | (-0.001, -0.167, 0.114) | 1 | JIAO-LIANJIE002_low |
| 48 | Tren de aterrizaje | slider | — | (-0.001, -0.167, -0.115) | 1 | JIAO-LIANJIE_001_low |
| 49 | Tren de aterrizaje | slider | — | (0.12, -0.177, -0.12) | 1 | MAO-JIAO002_low |
| 50 | Tren de aterrizaje | slider | — | (0.12, -0.177, 0.12) | 1 | MAO-JIAO003_low |
| 51 | Tren de aterrizaje | slider | — | (-0.121, -0.177, 0.12) | 1 | MAO-JIAO004_low |
| 52 | Tren de aterrizaje | slider | — | (-0.121, -0.177, -0.12) | 1 | MAO-JIAO_001_low |
| 53 | Tren de aterrizaje | slider | — | (-0.036, 0.004, 0) | 1 | PYLONS-X500002_low |
| 54 | Tren de aterrizaje | slider | — | (0.034, 0.004, 0) | 1 | PYLONS-X500_001_low |
| 55 | Electrónica | slider | — | (-0.016, 0.039, 0.005) | 1 | BM06B-WO_001_low |
| 56 | Electrónica | slider | — | (0, 0.064, 0) | 1 | DIKE-PIXHAWK6C-LV-C1_001_low |
| 57 | Electrónica | slider | — | (-0.106, -0.02, 0) | 1 | GAI-GUANGLIU_001_low |
| 58 | Electrónica | slider | — | (0.098, 0.08, 0) | 1 | GAN-GPSV5-ZHIJIA_001_low |
| 59 | Electrónica | slider | — | (0.098, 0.023, 0) | 1 | GPS-ZHIJIA-ZHUANJIETOU_001_low |
| 60 | Electrónica | slider | — | (0.098, 0.012, 0) | 1 | GPS-ZHIJIA-ZUO_001_low |
| 61 | Electrónica | slider | — | (0.098, 0.02, 0) | 1 | GPSV5-ZHIJIA-LUOMAO_001_low |
| 62 | Electrónica | slider | — | (0.098, 0.131, 0) | 1 | GPSV5-ZHIJIA-TUOPAN_001_low |
| 63 | Electrónica | slider | — | (0.024, 0.069, 0) | 1 | IMU-PIXHAWK6C_001_low |
| 64 | Electrónica | slider | — | (0, 0.068, 0) | 1 | MIANKE-PIXHAWK6C-LV-C1_001_low |
| 65 | Electrónica | slider | — | (0, 0.066, 0) | 1 | PCB-PIXHAWK6C-F1_001_low |
| 66 | Electrónica | slider | — | (0.009, 0.038, 0) | 1 | PCB-PM06_001_low |
| 67 | Electrónica | slider | — | (0.029, 0.021, 0.047) | 1 | TOU-XT60H-M-14AWG_001_low |
| 68 | Electrónica | slider | — | (0.029, 0.024, 0.047) | 1 | X500-TAO-XT60_001_low |
| 69 | Electrónica | slider | — | (0.097, 0.143, 0) | 1 | x500v2_gps_m10_PROXY_low |
| 70 | Electrónica | slider | — | (-0.009, 0.095, 0.054) | 1 | x500v2_telemetry_radio_PROXY_low |
| 71 | Electrónica | slider | — | (-0.101, 0.002, 0) | 1 | ZHIJIA-CAMERA-INTEL_001_low |
| 72 | Batería | slider | — | (-0.001, -0.017, 0) | 1 | BATTERY-MOUNTING-PLAT_001_low |
| 73 | Batería | slider | — | (-0.001, -0.019, 0) | 1 | BATTERY-PAD_001_low |
| 74 | Batería | slider | — | (-0.001, -0.036, 0) | 1 | x500v2_battery_PROXY_low |
| 75 | Plataforma superior | slider | — | (0.098, 0.002, 0) | 1 | PLATFORM-PLAT-X500_001_low |
| 76 | Tornillería | slider | — | (-0.174, 0.05, 0.173) | 1 | BAN-DJ-DIAN-F2002_low |
| 77 | Tornillería | slider | — | (0.173, 0.05, 0.173) | 1 | BAN-DJ-DIAN-F2003_low |
| 78 | Tornillería | slider | — | (0.173, 0.05, -0.174) | 1 | BAN-DJ-DIAN-F2004_low |
| 79 | Tornillería | slider | — | (-0.174, 0.05, -0.174) | 1 | BAN-DJ-DIAN-F2_001_low |
| 80 | Tornillería | slider | — | (-0.187, 0.05, -0.177) | 1 | GB70-M3-6001_low_PRIM |
| 81 | Tornillería | slider | — | (-0.168, 0.05, -0.177) | 1 | GB70-M3-6002_low_PRIM |
| 82 | Tornillería | slider | — | (-0.178, 0.05, -0.169) | 1 | GB70-M3-6003_low_PRIM |
| 83 | Tornillería | slider | — | (-0.178, 0.05, -0.185) | 1 | GB70-M3-6004_low_PRIM |
| 84 | Tornillería | slider | — | (-0.178, 0.05, 0.186) | 1 | GB70-M3-6005_low_PRIM |
| 85 | Tornillería | slider | — | (-0.178, 0.05, 0.167) | 1 | GB70-M3-6006_low_PRIM |
| 86 | Tornillería | slider | — | (-0.17, 0.05, 0.176) | 1 | GB70-M3-6007_low_PRIM |
| 87 | Tornillería | slider | — | (-0.186, 0.05, 0.176) | 1 | GB70-M3-6008_low_PRIM |
| 88 | Tornillería | slider | — | (0.186, 0.05, 0.176) | 1 | GB70-M3-6009_low_PRIM |
| 89 | Tornillería | slider | — | (0.167, 0.05, 0.176) | 1 | GB70-M3-6010_low_PRIM |
| 90 | Tornillería | slider | — | (0.176, 0.05, 0.168) | 1 | GB70-M3-6011_low_PRIM |
| 91 | Tornillería | slider | — | (0.176, 0.05, 0.184) | 1 | GB70-M3-6012_low_PRIM |
| 92 | Tornillería | slider | — | (0.176, 0.05, -0.187) | 1 | GB70-M3-6013_low_PRIM |
| 93 | Tornillería | slider | — | (0.176, 0.05, -0.168) | 1 | GB70-M3-6014_low_PRIM |
| 94 | Tornillería | slider | — | (0.168, 0.05, -0.177) | 1 | GB70-M3-6015_low_PRIM |
| 95 | Tornillería | slider | — | (0.184, 0.05, -0.177) | 1 | GB70-M3-6016_low_PRIM |
| 96 | Tornillería | slider | — | (-0.013, -0.157, -0.115) | 1 | GB70-M3-8-DING001_low_PRIM |
| 97 | Tornillería | slider | — | (0.011, -0.158, -0.113) | 1 | GB70-M3-8-DING002_low_PRIM |
| 98 | Tornillería | slider | — | (-0.013, -0.158, 0.114) | 1 | GB70-M3-8-DING003_low_PRIM |
| 99 | Tornillería | slider | — | (0.011, -0.158, 0.114) | 1 | GB70-M3-8-DING004_low_PRIM |
| 100 | Tornillería | slider | — | (0.013, 0.028, 0.068) | 1 | GB70-M3-8-DING005_low_PRIM |
| 101 | Tornillería | slider | — | (-0.014, 0.028, 0.068) | 1 | GB70-M3-8-DING006_low_PRIM |
| 102 | Tornillería | slider | — | (-0.014, 0.028, 0.043) | 1 | GB70-M3-8-DING007_low_PRIM |
| 103 | Tornillería | slider | — | (0.013, 0.028, 0.043) | 1 | GB70-M3-8-DING008_low_PRIM |
| 104 | Tornillería | slider | — | (-0.014, 0.028, -0.068) | 1 | GB70-M3-8-DING009_low_PRIM |
| 105 | Tornillería | slider | — | (0.013, 0.028, -0.068) | 1 | GB70-M3-8-DING010_low_PRIM |
| 106 | Tornillería | slider | — | (0.013, 0.028, -0.043) | 1 | GB70-M3-8-DING011_low_PRIM |
| 107 | Tornillería | slider | — | (-0.014, 0.028, -0.043) | 1 | GB70-M3-8-DING012_low_PRIM |
| 108 | Tornillería | slider | — | (-0.001, -0.17, -0.12) | 1 | GB70-M3-21-DING001_low_PRIM |
| 109 | Tornillería | slider | — | (-0.001, -0.169, 0.118) | 1 | GB70-M3-21-DING002_low_PRIM |
| 110 | Tornillería | slider | — | (-0.001, 0.016, -0.059) | 1 | GB70-M3-25-DING001_low_PRIM |
| 111 | Tornillería | slider | — | (0, 0.016, 0.058) | 1 | GB70-M3-25-DING002_low_PRIM |
| 112 | Tornillería | slider | — | (-0.067, 0.043, -0.051) | 1 | GB70-M3-38001_low_PRIM |
| 113 | Tornillería | slider | — | (-0.052, 0.043, -0.067) | 1 | GB70-M3-38002_low_PRIM |
| 114 | Tornillería | slider | — | (-0.043, 0.043, -0.059) | 1 | GB70-M3-38003_low_PRIM |
| 115 | Tornillería | slider | — | (-0.059, 0.043, -0.043) | 1 | GB70-M3-38004_low_PRIM |
| 116 | Tornillería | slider | — | (-0.052, 0.043, 0.066) | 1 | GB70-M3-38005_low_PRIM |
| 117 | Tornillería | slider | — | (-0.067, 0.043, 0.051) | 1 | GB70-M3-38006_low_PRIM |
| 118 | Tornillería | slider | — | (-0.059, 0.043, 0.042) | 1 | GB70-M3-38007_low_PRIM |
| 119 | Tornillería | slider | — | (-0.043, 0.043, 0.058) | 1 | GB70-M3-38008_low_PRIM |
| 120 | Tornillería | slider | — | (0.066, 0.043, 0.051) | 1 | GB70-M3-38009_low_PRIM |
| 121 | Tornillería | slider | — | (0.05, 0.043, 0.066) | 1 | GB70-M3-38010_low_PRIM |
| 122 | Tornillería | slider | — | (0.042, 0.043, 0.058) | 1 | GB70-M3-38011_low_PRIM |
| 123 | Tornillería | slider | — | (0.057, 0.043, 0.042) | 1 | GB70-M3-38012_low_PRIM |
| 124 | Tornillería | slider | — | (0.05, 0.043, -0.067) | 1 | GB70-M3-38013_low_PRIM |
| 125 | Tornillería | slider | — | (0.066, 0.043, -0.051) | 1 | GB70-M3-38014_low_PRIM |
| 126 | Tornillería | slider | — | (0.057, 0.043, -0.043) | 1 | GB70-M3-38015_low_PRIM |
| 127 | Tornillería | slider | — | (0.042, 0.043, -0.059) | 1 | GB70-M3-38016_low_PRIM |
| 128 | Tornillería | slider | — | (0.049, 0.029, 0.037) | 1 | GB70-M25-6001_low_PRIM |
| 129 | Tornillería | slider | — | (0.049, 0.029, 0.023) | 1 | GB70-M25-6002_low_PRIM |
| 130 | Tornillería | slider | — | (0.049, 0.029, -0.023) | 1 | GB70-M25-6003_low_PRIM |
| 131 | Tornillería | slider | — | (0.049, 0.029, -0.037) | 1 | GB70-M25-6004_low_PRIM |
| 132 | Tornillería | slider | — | (-0.051, 0.029, 0.037) | 1 | GB70-M25-6005_low_PRIM |
| 133 | Tornillería | slider | — | (-0.051, 0.029, 0.023) | 1 | GB70-M25-6006_low_PRIM |
| 134 | Tornillería | slider | — | (-0.051, 0.029, -0.023) | 1 | GB70-M25-6007_low_PRIM |
| 135 | Tornillería | slider | — | (-0.051, 0.029, -0.037) | 1 | GB70-M25-6008_low_PRIM |
| 136 | Tornillería | slider | — | (-0.197, 0.049, -0.177) | 1 | GB70-M25-6009_low_PRIM |
| 137 | Tornillería | slider | — | (-0.178, 0.049, -0.197) | 1 | GB70-M25-6010_low_PRIM |
| 138 | Tornillería | slider | — | (-0.197, 0.039, -0.177) | 1 | GB70-M25-6011_low_PRIM |
| 139 | Tornillería | slider | — | (-0.178, 0.039, -0.197) | 1 | GB70-M25-6012_low_PRIM |
| 140 | Tornillería | slider | — | (-0.178, 0.049, 0.196) | 1 | GB70-M25-6013_low_PRIM |
| 141 | Tornillería | slider | — | (-0.197, 0.049, 0.176) | 1 | GB70-M25-6014_low_PRIM |
| 142 | Tornillería | slider | — | (-0.178, 0.039, 0.196) | 1 | GB70-M25-6015_low_PRIM |
| 143 | Tornillería | slider | — | (-0.197, 0.039, 0.176) | 1 | GB70-M25-6016_low_PRIM |
| 144 | Tornillería | slider | — | (0.196, 0.049, 0.176) | 1 | GB70-M25-6017_low_PRIM |
| 145 | Tornillería | slider | — | (0.176, 0.049, 0.196) | 1 | GB70-M25-6018_low_PRIM |
| 146 | Tornillería | slider | — | (0.196, 0.039, 0.176) | 1 | GB70-M25-6019_low_PRIM |
| 147 | Tornillería | slider | — | (0.176, 0.039, 0.196) | 1 | GB70-M25-6020_low_PRIM |
| 148 | Tornillería | slider | — | (0.176, 0.049, -0.197) | 1 | GB70-M25-6021_low_PRIM |
| 149 | Tornillería | slider | — | (0.196, 0.049, -0.177) | 1 | GB70-M25-6022_low_PRIM |
| 150 | Tornillería | slider | — | (0.176, 0.039, -0.197) | 1 | GB70-M25-6023_low_PRIM |
| 151 | Tornillería | slider | — | (0.196, 0.039, -0.177) | 1 | GB70-M25-6024_low_PRIM |
| 152 | Tornillería | slider | — | (-0.149, 0.045, -0.132) | 1 | GB70-M25-10001_low_PRIM |
| 153 | Tornillería | slider | — | (-0.132, 0.045, -0.149) | 1 | GB70-M25-10002_low_PRIM |
| 154 | Tornillería | slider | — | (-0.132, 0.045, 0.148) | 1 | GB70-M25-10003_low_PRIM |
| 155 | Tornillería | slider | — | (-0.149, 0.045, 0.131) | 1 | GB70-M25-10004_low_PRIM |
| 156 | Tornillería | slider | — | (0.148, 0.045, 0.131) | 1 | GB70-M25-10005_low_PRIM |
| 157 | Tornillería | slider | — | (0.131, 0.045, 0.148) | 1 | GB70-M25-10006_low_PRIM |
| 158 | Tornillería | slider | — | (0.131, 0.045, -0.149) | 1 | GB70-M25-10007_low_PRIM |
| 159 | Tornillería | slider | — | (0.148, 0.045, -0.132) | 1 | GB70-M25-10008_low_PRIM |
| 160 | Tornillería | slider | — | (-0.168, 0.046, -0.15) | 1 | GB70-M25-12001_low_PRIM |
| 161 | Tornillería | slider | — | (0.127, -0.002, -0.043) | 1 | GB70-M25-12002_low_PRIM |
| 162 | Tornillería | slider | — | (0.069, -0.002, -0.043) | 1 | GB70-M25-12003_low_PRIM |
| 163 | Tornillería | slider | — | (0.069, -0.002, 0.043) | 1 | GB70-M25-12004_low_PRIM |
| 164 | Tornillería | slider | — | (-0.168, 0.046, -0.15) | 1 | GB70-M25-12005_low_PRIM |
| 165 | Tornillería | slider | — | (-0.151, 0.046, -0.167) | 1 | GB70-M25-12006_low_PRIM |
| 166 | Tornillería | slider | — | (-0.151, 0.046, 0.167) | 1 | GB70-M25-12007_low_PRIM |
| 167 | Tornillería | slider | — | (-0.168, 0.046, 0.15) | 1 | GB70-M25-12008_low_PRIM |
| 168 | Tornillería | slider | — | (0.166, 0.046, 0.15) | 1 | GB70-M25-12009_low_PRIM |
| 169 | Tornillería | slider | — | (0.149, 0.046, 0.167) | 1 | GB70-M25-12010_low_PRIM |
| 170 | Tornillería | slider | — | (0.149, 0.046, -0.167) | 1 | GB70-M25-12011_low_PRIM |
| 171 | Tornillería | slider | — | (0.166, 0.046, -0.15) | 1 | GB70-M25-12012_low_PRIM |
| 172 | Tornillería | slider | — | (0.127, -0.002, 0.043) | 1 | GB70-M25-12013_low_PRIM |
| 173 | Tornillería | slider | — | (-0.106, 0.045, 0.104) | 1 | HMX5V-GUAN-DINGWEI002_low |
| 174 | Tornillería | slider | — | (0.104, 0.045, 0.104) | 1 | HMX5V-GUAN-DINGWEI003_low |
| 175 | Tornillería | slider | — | (0.104, 0.045, -0.105) | 1 | HMX5V-GUAN-DINGWEI004_low |
| 176 | Tornillería | slider | — | (-0.106, 0.045, -0.105) | 1 | HMX5V-GUAN-DINGWEI_001_low |
| 177 | Tornillería | slider | — | (-0.056, 0.052, -0.056) | 1 | HMX5V-JIBI-JIA-MUJU002_low |
| 178 | Tornillería | slider | — | (-0.056, 0.038, 0.055) | 1 | HMX5V-JIBI-JIA-MUJU003_low |
| 179 | Tornillería | slider | — | (-0.056, 0.052, 0.055) | 1 | HMX5V-JIBI-JIA-MUJU004_low |
| 180 | Tornillería | slider | — | (0.055, 0.038, 0.055) | 1 | HMX5V-JIBI-JIA-MUJU005_low |
| 181 | Tornillería | slider | — | (0.055, 0.052, 0.055) | 1 | HMX5V-JIBI-JIA-MUJU006_low |
| 182 | Tornillería | slider | — | (0.055, 0.038, -0.056) | 1 | HMX5V-JIBI-JIA-MUJU007_low |
| 183 | Tornillería | slider | — | (0.055, 0.052, -0.056) | 1 | HMX5V-JIBI-JIA-MUJU008_low |
| 184 | Tornillería | slider | — | (-0.056, 0.038, -0.056) | 1 | HMX5V-JIBI-JIA-MUJU_001_low |
| 185 | Tornillería | slider | — | (-0.165, 0.045, 0.164) | 1 | HMX5V-ZUO-DJ-MUJU002_low |
| 186 | Tornillería | slider | — | (0.163, 0.045, 0.164) | 1 | HMX5V-ZUO-DJ-MUJU003_low |
| 187 | Tornillería | slider | — | (0.163, 0.045, -0.165) | 1 | HMX5V-ZUO-DJ-MUJU004_low |
| 188 | Tornillería | slider | — | (-0.165, 0.045, -0.165) | 1 | HMX5V-ZUO-DJ-MUJU_001_low |
| 189 | Tornillería | slider | — | (-0.011, 0.016, -0.059) | 1 | LM-M3-DING001_low_PRIM |
| 190 | Tornillería | slider | — | (0.011, -0.159, -0.112) | 1 | LM-M3-DING002_low_PRIM |
| 191 | Tornillería | slider | — | (-0.013, -0.159, -0.112) | 1 | LM-M3-DING003_low_PRIM |
| 192 | Tornillería | slider | — | (-0.001, -0.167, -0.126) | 1 | LM-M3-DING004_low_PRIM |
| 193 | Tornillería | slider | — | (-0.013, -0.159, 0.111) | 1 | LM-M3-DING005_low_PRIM |
| 194 | Tornillería | slider | — | (0.011, -0.159, 0.111) | 1 | LM-M3-DING006_low_PRIM |
| 195 | Tornillería | slider | — | (-0.001, -0.167, 0.125) | 1 | LM-M3-DING007_low_PRIM |
| 196 | Tornillería | slider | — | (0.01, 0.016, 0.058) | 1 | LM-M3-DING008_low_PRIM |
| 197 | Tornillería | slider | — | (-0.106, -0.011, -0.014) | 1 | LM-M3-NILONG001_low_PRIM |
| 198 | Tornillería | slider | — | (-0.106, -0.011, 0.014) | 1 | LM-M3-NILONG002_low_PRIM |
| 199 | Tornillería | slider | — | (0.11, 0.004, 0.011) | 1 | M3-10-PAN-DING001_low_PRIM |
| 200 | Tornillería | slider | — | (0.087, 0.004, 0.011) | 1 | M3-10-PAN-DING002_low_PRIM |
| 201 | Tornillería | slider | — | (0.087, 0.004, -0.012) | 1 | M3-10-PAN-DING003_low_PRIM |
| 202 | Tornillería | slider | — | (0.11, 0.004, -0.012) | 1 | M3-10-PAN-DING004_low_PRIM |
| 203 | Tornillería | slider | — | (0.014, 0.035, -0.016) | 1 | M3-14-PAN001_low_PRIM |
| 204 | Tornillería | slider | — | (-0.016, 0.035, -0.016) | 1 | M3-14-PAN002_low_PRIM |
| 205 | Tornillería | slider | — | (-0.016, 0.035, 0.015) | 1 | M3-14-PAN003_low_PRIM |
| 206 | Tornillería | slider | — | (0.014, 0.035, 0.015) | 1 | M3-14-PAN004_low_PRIM |
| 207 | Tornillería | slider | — | (-0.106, -0.013, 0.014) | 1 | M3-16-CHEN-LIU001_low_PRIM |
| 208 | Tornillería | slider | — | (-0.106, -0.013, -0.014) | 1 | M3-16-CHEN-LIU002_low_PRIM |
| 209 | Tornillería | slider | — | (0.116, 0.004, 0.036) | 1 | M25-6-CHEN-LIU001_low_PRIM |
| 210 | Tornillería | slider | — | (0.116, 0.004, 0.022) | 1 | M25-6-CHEN-LIU002_low_PRIM |
| 211 | Tornillería | slider | — | (0.116, 0.004, -0.023) | 1 | M25-6-CHEN-LIU003_low_PRIM |
| 212 | Tornillería | slider | — | (0.116, 0.004, -0.037) | 1 | M25-6-CHEN-LIU004_low_PRIM |
| 213 | Tornillería | slider | — | (0.08, 0.004, 0.036) | 1 | M25-6-CHEN-LIU005_low_PRIM |
| 214 | Tornillería | slider | — | (0.08, 0.004, 0.022) | 1 | M25-6-CHEN-LIU006_low_PRIM |
| 215 | Tornillería | slider | — | (0.08, 0.004, -0.023) | 1 | M25-6-CHEN-LIU007_low_PRIM |
| 216 | Tornillería | slider | — | (0.08, 0.004, -0.037) | 1 | M25-6-CHEN-LIU008_low_PRIM |
| 217 | Tornillería | slider | — | (0.034, -0.015, -0.013) | 1 | M25-6-CHEN-LIU009_low_PRIM |
| 218 | Tornillería | slider | — | (0.034, -0.015, 0.012) | 1 | M25-6-CHEN-LIU010_low_PRIM |
| 219 | Tornillería | slider | — | (-0.036, -0.015, -0.013) | 1 | M25-6-CHEN-LIU011_low_PRIM |
| 220 | Tornillería | slider | — | (-0.036, -0.015, 0.012) | 1 | M25-6-CHEN-LIU012_low_PRIM |
| 221 | Tornillería | slider | — | (0.014, 0.033, -0.016) | 1 | NILONGZHU-M3-5001_low_PRIM |
| 222 | Tornillería | slider | — | (-0.016, 0.033, -0.016) | 1 | NILONGZHU-M3-5002_low_PRIM |
| 223 | Tornillería | slider | — | (-0.016, 0.033, 0.015) | 1 | NILONGZHU-M3-5003_low_PRIM |
| 224 | Tornillería | slider | — | (0.014, 0.033, 0.015) | 1 | NILONGZHU-M3-5004_low_PRIM |
| 225 | Tornillería | slider | — | (0.127, -0.002, 0.043) | 1 | NILONGZHU-M25-5001_low_PRIM |
| 226 | Tornillería | slider | — | (0.127, -0.002, -0.043) | 1 | NILONGZHU-M25-5002_low_PRIM |
| 227 | Tornillería | slider | — | (0.069, -0.002, -0.043) | 1 | NILONGZHU-M25-5003_low_PRIM |
| 228 | Tornillería | slider | — | (0.069, -0.002, 0.043) | 1 | NILONGZHU-M25-5004_low_PRIM |
| 229 | Tornillería | slider | — | (0.014, 0.039, 0.015) | 1 | ZSLM-M3-DING001_low_PRIM |
| 230 | Tornillería | slider | — | (0.014, 0.039, -0.016) | 1 | ZSLM-M3-DING002_low_PRIM |
| 231 | Tornillería | slider | — | (-0.016, 0.039, -0.016) | 1 | ZSLM-M3-DING003_low_PRIM |
| 232 | Tornillería | slider | — | (-0.016, 0.039, 0.015) | 1 | ZSLM-M3-DING004_low_PRIM |
| 233 | Tornillería | slider | — | (0.11, 0.007, 0.011) | 1 | ZSLM-M3-DING005_low_PRIM |
| 234 | Tornillería | slider | — | (0.11, 0.007, -0.012) | 1 | ZSLM-M3-DING006_low_PRIM |
| 235 | Tornillería | slider | — | (0.087, 0.007, -0.012) | 1 | ZSLM-M3-DING007_low_PRIM |
| 236 | Tornillería | slider | — | (0.087, 0.007, 0.011) | 1 | ZSLM-M3-DING008_low_PRIM |
| 237 | Tornillería | slider | — | (-0.059, 0.026, -0.043) | 1 | ZSLM-M3-FALAN001_low_PRIM |
| 238 | Tornillería | slider | — | (-0.067, 0.026, -0.051) | 1 | ZSLM-M3-FALAN002_low_PRIM |
| 239 | Tornillería | slider | — | (-0.052, 0.026, -0.067) | 1 | ZSLM-M3-FALAN003_low_PRIM |
| 240 | Tornillería | slider | — | (-0.043, 0.026, -0.059) | 1 | ZSLM-M3-FALAN004_low_PRIM |
| 241 | Tornillería | slider | — | (-0.043, 0.026, 0.058) | 1 | ZSLM-M3-FALAN005_low_PRIM |
| 242 | Tornillería | slider | — | (-0.052, 0.026, 0.066) | 1 | ZSLM-M3-FALAN006_low_PRIM |
| 243 | Tornillería | slider | — | (-0.067, 0.026, 0.051) | 1 | ZSLM-M3-FALAN007_low_PRIM |
| 244 | Tornillería | slider | — | (-0.059, 0.026, 0.042) | 1 | ZSLM-M3-FALAN008_low_PRIM |
| 245 | Tornillería | slider | — | (0.057, 0.026, 0.042) | 1 | ZSLM-M3-FALAN009_low_PRIM |
| 246 | Tornillería | slider | — | (0.066, 0.026, 0.051) | 1 | ZSLM-M3-FALAN010_low_PRIM |
| 247 | Tornillería | slider | — | (0.05, 0.026, 0.066) | 1 | ZSLM-M3-FALAN011_low_PRIM |
| 248 | Tornillería | slider | — | (0.042, 0.026, 0.058) | 1 | ZSLM-M3-FALAN012_low_PRIM |
| 249 | Tornillería | slider | — | (0.042, 0.026, -0.059) | 1 | ZSLM-M3-FALAN013_low_PRIM |
| 250 | Tornillería | slider | — | (0.05, 0.026, -0.067) | 1 | ZSLM-M3-FALAN014_low_PRIM |
| 251 | Tornillería | slider | — | (0.066, 0.026, -0.051) | 1 | ZSLM-M3-FALAN015_low_PRIM |
| 252 | Tornillería | slider | — | (0.057, 0.026, -0.043) | 1 | ZSLM-M3-FALAN016_low_PRIM |
| 253 | Tornillería | slider | — | (0.127, -0.008, 0.043) | 1 | ZSLM-M25001_low_PRIM |
| 254 | Tornillería | slider | — | (0.127, -0.008, -0.043) | 1 | ZSLM-M25002_low_PRIM |
| 255 | Tornillería | slider | — | (0.069, -0.008, -0.043) | 1 | ZSLM-M25003_low_PRIM |
| 256 | Tornillería | slider | — | (0.069, -0.008, 0.043) | 1 | ZSLM-M25004_low_PRIM |

## Resumen por familia

| Familia | Entradas | Meshes |
|---------|----------|--------|
| Motor | 4 | 8 |
| Base del motor | 4 | 4 |
| Hélice | 4 | 8 |
| Tubo del brazo | 2 | 2 |
| Tubo del frame | 2 | 2 |
| Frame superior | 1 | 1 |
| Frame inferior | 13 | 13 |
| Tren de aterrizaje | 24 | 24 |
| Electrónica | 17 | 17 |
| Batería | 3 | 3 |
| Plataforma superior | 1 | 1 |
| Tornillería | 181 | 181 |

## Verificación QA (probe)

- k=1 → 2 meshes visibles (motor completo) · k=2 → 3 · k=3 → 5 · k=4 → 6 (cuadrante 1 completo).
- k=19 → 21 · **k=20 → 38** (22 del slider + 16 instancias automáticas) · k=50 → 264 (todo).
- Nota: la especificación "con TOP-PLATE revelado → >60 visibles" se cumple a k=50
  (264 visibles); en el gate de frames el salto es exactamente el de las instancias
  (+16 meshes) — las >60 llegan al revelar el tren de aterrizaje.
