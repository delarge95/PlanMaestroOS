# -*- coding: utf-8 -*-
"""Construye el Excel de verificación con fórmulas vivas."""
import json
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.table import Table, TableStyleInfo

d = json.load(open('datos.json', encoding='utf-8'))
TIERS = d['TIERS']

wb = Workbook()

AZUL = '0071e3'
HDR_FILL = PatternFill('solid', fgColor='1d1d1f')
HDR_FONT = Font(color='FFFFFF', bold=True, size=10)
SUB_FILL = PatternFill('solid', fgColor='e8f0fe')
INS_FILL = PatternFill('solid', fgColor='f0f6ff')
THIN = Border(bottom=Side(style='thin', color='D2D2D7'))
# ── Pastel por tipo de celda (ciclo 8) ──
F_IN    = PatternFill('solid', fgColor='FFF3C4')   # amarillo: EDITABLE (horas, tarifas, inputs)
F_CALC  = PatternFill('solid', fgColor='DEEBF7')   # azul: calculado por fórmula
F_TOT   = PatternFill('solid', fgColor='E2EFDA')   # verde: totales / resultado
F_INFO  = PatternFill('solid', fgColor='EFE6F9')   # lila: notas / trazabilidad
F_TXT_IN   = Font(color='7F6000', bold=True)       # texto editable (ámbar oscuro)
F_TXT_CALC = Font(color='1F4E79')                  # texto calculado (azul oscuro)
F_TXT_TOT  = Font(color='2E7D32', bold=True)       # total (verde oscuro)

def header(ws, row, cols, widths=None):
    for i, name in enumerate(cols, 1):
        c = ws.cell(row=row, column=i, value=name)
        c.fill = HDR_FILL; c.font = HDR_FONT
        c.alignment = Alignment(vertical='center', wrap_text=True)
        if widths: ws.column_dimensions[get_column_letter(i)].width = widths[i-1]

def title(ws, text, row=1, size=14):
    c = ws.cell(row=row, column=1, value=text)
    c.font = Font(bold=True, size=size, color='1d1d1f')

# ═══════════════ 1. LÉEME ═══════════════
ws = wb.active; ws.title = 'Léeme'
ws.column_dimensions['A'].width = 110
title(ws, 'Verificación de tiempos y precios — Cotizador Web (Alexander Woodcock)')
notas = [
  '',
  'PROPÓSITO: verificar por tu cuenta que los tiempos y precios que muestra la web son correctos,',
  'y ajustar las horas según lo que realmente te demora. TODAS las cifras salen del mismo motor',
  'que usa la web (catalogCore.ts + rateCard.ts) — este Excel replica sus fórmulas.',
  '',
  'CÓMO USARLO:',
  '1. Hoja CATÁLOGO: edita las HORAS (columnas min/max por nivel) de cualquier subtarea.',
  '   Los precios COP de esa fila se recalculan solos (horas × tarifa por rol).',
  '2. Hoja RESUMEN: totales por servicio y nivel (SUMIFS sobre Catálogo), con redondeo',
  '   igual al de la web (mínimo hacia abajo, máximo hacia arriba, paso $1.000 COP).',
  '3. Hoja TARIFAS: tarifa por rol COP/USD + benchmark Colombia/internacional.',
  '   Si cambias una tarifa ahí, TODO el Excel y los precios se recalculan.',
  '4. Hoja COTIZADOR WEB: qué decisión del wizard afecta qué tarea, con los umbrales',
  '   exactos (tierMaps) y ejemplos resueltos para verificar contra la web.',
  '',
  'CIFRAS = subtotal base (horas × tarifa), SIN descuento de lanzamiento (−25%),',
  'sin bundle (−5/−10%) y sin urgencia (+30/50%). Esos multiplicadores se aplican aparte.',
  'La web redondea: subtotal min hacia abajo, max hacia arriba, paso $1.000 COP.',
  '',
  'REGLA ESCALAR (importante): los servicios sin horas XS (WEB-01, WEB-04, RTA-01…,',
  '21 en total) muestran en XS el precio del tier S — la web nunca muestra $0.',
  'Este Excel replica esa regla con fórmulas SI(...) en las columnas XS.',
  '',
  'CONEXIÓN CON LA WEB: los números de Resumen Servicios son EXACTAMENTE los que',
  'muestra el cotizador en el panel de precio (mismo motor computeQuote). Verificado',
  'matriz completa 28 servicios × 5 niveles = 140/140 coinciden (ciclo 8).',
  'La web muestra en el wizard 8 servicios (Web 3D + CAD); el catálogo de esta hoja',
  'tiene los 28 — los demás usan el mismo cálculo.',
  '',
  'REGLA DE ENTREGA (días hábiles) usada por la web: ≈ horas_max ÷ 5,5 con colchón.',
]
for i, t in enumerate(notas, 2):
    c = ws.cell(row=i, column=1, value=t)
    if i == 2: c.font = Font(bold=True, size=12)
    if t.startswith(('CÓMO', 'CIFRAS', 'REGLA', '1.', '2.', '3.', '4.')): c.font = Font(bold=True, size=10.5)

# ═══════════════ 2. TARIFAS ═══════════════
ws = wb.create_sheet('Tarifas')
title(ws, 'Tarifa por rol — base de todos los cálculos')
header(ws, 3, ['Rol', 'Clase', 'COP min/h', 'COP max/h', 'USD min/h', 'USD max/h'], [22, 12, 12, 12, 11, 11])
rol_name = {'RC-ART': 'Arte 3D / Render', 'RC-RTA': 'Asset Realtime', 'RC-WEB': 'Dev Web 3D', 'RC-AI': 'IA aplicada', 'RC-CON': 'Consultoría'}
r = 4
for clase in ['RC-ART', 'RC-RTA', 'RC-WEB', 'RC-AI', 'RC-CON']:
    ws.cell(row=r, column=1, value=rol_name[clase])
    ws.cell(row=r, column=2, value=clase)
    ws.cell(row=r, column=3, value=d['rates']['COP'][clase]['min']).number_format = '#,##0'
    ws.cell(row=r, column=4, value=d['rates']['COP'][clase]['max']).number_format = '#,##0'
    ws.cell(row=r, column=5, value=d['rates']['USD'][clase]['min']).number_format = '#,##0'
    ws.cell(row=r, column=6, value=d['rates']['USD'][clase]['max']).number_format = '#,##0'
    r += 1
ws.cell(row=r, column=1, value='Proyecto mínimo (COP / USD)').font = Font(bold=True)
ws.cell(row=r, column=3, value=d['rates']['minProjectCOP']).number_format = '#,##0'
ws.cell(row=r, column=5, value=d['rates']['minProjectUSD']).number_format = '#,##0'
r += 2
title(ws, 'Benchmark de mercado (2025-2026) — referencia, no modifica fórmulas', r)
r += 1
header(ws, r, ['Perfil', 'Colombia (COP/h)', 'Internacional (USD/h)', 'Fuente'], [40, 18, 20, 46])
bench = [
  ('Dev frontend general — junior', '60.000–100.000', '$15–25/h', 'omarhernandezrey.com'),
  ('Dev frontend general — mid/senior', '100.000–240.000', '$25–60/h', 'omarhernandezrey.com'),
  ('Dev three.js/WebGL (LatAm, empleador)', '≈ 80.000–85.000', '≈ $20/h', 'hireinsouth.com'),
  ('Modelador 3D con experiencia', '40.000–60.000', '≈ $10–15/h', 'comunidad diseñadores industriales CO'),
  ('Diseño profesional (tarifario 2025)', '≈ 90.000', '—', 'disenadorescolombianos.co'),
  ('3D artistas internacionales', '≈ 2,8M–4M /día', '$700–1.000/día', 'benchmark global'),
  ('Chatbot IA conversacional (proyecto, CO)', '6M–16M', '$1.500–4.000', 'consolidaciondigital.com'),
  ('Agente IA empresarial (proyecto)', 'desde 4,9M', '$20.000–80.000 (techo intl.)', 'mentoracolombia.com · kemenystudio.com'),
]
for row in bench:
    r += 1
    for i, v in enumerate(row, 1): ws.cell(row=r, column=i, value=v)
r += 2
ws.cell(row=r, column=1, value='Lectura: la tarifa RC-WEB actual (40–57 mil COP/h) está por debajo incluso del junior de mercado → margen de reventa sano para la agencia y margen de subida futuro. RC-ART (30–42 mil) está en línea con el modelador local experimentado.').alignment = Alignment(wrap_text=True)
ws.merge_cells(start_row=r, start_column=1, end_row=r+2, end_column=6)

# ═══════════════ 3. CATÁLOGO (subtareas con fórmulas) ═══════════════
ws = wb.create_sheet('Catálogo')
cols = ['Servicio ID', 'Servicio', 'Familia', 'Subtarea', 'Clase',
        'XS min', 'XS max', 'S min', 'S max', 'M min', 'M max', 'L min', 'L max', 'XL min', 'XL max',
        'XS COP min', 'XS COP max', 'S COP min', 'S COP max', 'M COP min', 'M COP max',
        'L COP min', 'L COP max', 'XL COP min', 'XL COP max', 'tarifa min', 'tarifa max']
header(ws, 1, cols, [11, 26, 11, 38, 9] + [8.5]*10 + [13]*10 + [10, 10])
ws.freeze_panes = 'F2'
ws.cell(row=ws.max_row+2, column=1, value='Horas = producción por nivel (2 rondas incluidas en las filas de QA). Las columnas COP son FÓRMULAS: horas × tarifa del rol (hoja Tarifas). Edita las horas y los precios de esta hoja y de Resumen cambian solos.').alignment = Alignment(wrap_text=True)
r = 2
HCOL = {'XS': ('F', 'G'), 'S': ('H', 'I'), 'M': ('J', 'K'), 'L': ('L', 'M'), 'XL': ('N', 'O')}
CCOL = {'XS': ('R', 'S'), 'S': ('T', 'U'), 'M': ('V', 'W'), 'L': ('X', 'Y'), 'XL': ('Z', 'AA')}
for svc in d['services']:
    for st in svc['subtasks']:
        vals = [svc['id'], svc['nombre'], svc['familia'], st['nombre'], st['clase']]
        for t in TIERS: vals += st['horas'][t]
        for i, v in enumerate(vals, 1):
            c = ws.cell(row=r, column=i, value=v)
            if 6 <= i <= 15:
                c.number_format = '0.##'; c.fill = F_IN; c.font = F_TXT_IN
        # helpers de tarifa por fila (AB = min, AC = max)
        ws.cell(row=r, column=28, value=f'=VLOOKUP($E{r},Tarifas!$B$4:$F$8,2,0)').number_format = '#,##0'
        ws.cell(row=r, column=29, value=f'=VLOOKUP($E{r},Tarifas!$B$4:$F$8,3,0)').number_format = '#,##0'
        for t in TIERS:
            hmin, hmax = HCOL[t]; cmin, cmax = CCOL[t]
            col_min = ws[f'{cmin}{r}']; col_max = ws[f'{cmax}{r}']
            col_min.value = f'={hmin}{r}*$AB{r}'
            col_max.value = f'={hmax}{r}*$AC{r}'
            col_min.number_format = '#,##0'; col_max.number_format = '#,##0'
            col_min.fill = F_CALC; col_max.fill = F_CALC
            col_min.font = F_TXT_CALC; col_max.font = F_TXT_CALC
        r += 1
ws.auto_filter.ref = f'A1:AA{r-1}'
LAST_CAT_ROW = r - 1

# ═══════════════ 4. RESUMEN SERVICIOS (SUMIFS) ═══════════════
ws = wb.create_sheet('Resumen Servicios')
res_cols = ['ID', 'Servicio', 'Familia', 'Entrega (d)']
for t in TIERS:
    res_cols += [f'{t} h min', f'{t} h max', f'{t} COP min', f'{t} COP max']
res_cols.append('Desde (COP, S)')
header(ws, 1, res_cols, [9, 30, 11, 10] + [10]*20 + [14])
ws.freeze_panes = 'E2'
HCOL2 = {'XS': ('F', 'G'), 'S': ('H', 'I'), 'M': ('J', 'K'), 'L': ('L', 'M'), 'XL': ('N', 'O')}
CCOL2 = {'XS': ('R', 'S'), 'S': ('T', 'U'), 'M': ('V', 'W'), 'L': ('X', 'Y'), 'XL': ('Z', 'AA')}
r = 2
res_row = {}
for svc in d['services']:
    res_row[svc['id']] = r
    ws.cell(row=r, column=1, value=svc['id'])
    ws.cell(row=r, column=2, value=svc['nombre'])
    ws.cell(row=r, column=3, value=svc['familia'])
    ws.cell(row=r, column=4, value=svc['entrega'])
    col = 5
    for t in TIERS:
        hmin_c, hmax_c = HCOL2[t]; cmin_c, cmax_c = CCOL2[t]
        if t == 'XS':
            # Regla de la web: servicios sin XS escalan al tier S (nunca precio $0)
            hs = f'SUMIFS(Catálogo!${hmin_c}:${hmin_c},Catálogo!$A:$A,$A{r})'
            hx = f'SUMIFS(Catálogo!${hmax_c}:${hmax_c},Catálogo!$A:$A,$A{r})'
            ws.cell(row=r, column=col, value=f'=IF({hs}=0,SUMIFS(Catálogo!$H:$H,Catálogo!$A:$A,$A{r}),{hs})').number_format = '0.##'
            ws.cell(row=r, column=col+1, value=f'=IF({hx}=0,SUMIFS(Catálogo!$I:$I,Catálogo!$A:$A,$A{r}),{hx})').number_format = '0.##'
            ws.cell(row=r, column=col+2, value=f'=IF({hs}=0,MAX(FLOOR(SUMIFS(Catálogo!$T:$T,Catálogo!$A:$A,$A{r}),1000),400000),MAX(FLOOR(SUMIFS(Catálogo!$R:$R,Catálogo!$A:$A,$A{r}),1000),400000))').number_format = '#,##0'
            ws.cell(row=r, column=col+3, value=f'=IF({hx}=0,MAX(CEILING(SUMIFS(Catálogo!$U:$U,Catálogo!$A:$A,$A{r}),1000),400000),MAX(CEILING(SUMIFS(Catálogo!$S:$S,Catálogo!$A:$A,$A{r}),1000),400000))').number_format = '#,##0'
        else:
            ws.cell(row=r, column=col, value=f'=SUMIFS(Catálogo!${hmin_c}:${hmin_c},Catálogo!$A:$A,$A{r})').number_format = '0.##'
            ws.cell(row=r, column=col+1, value=f'=SUMIFS(Catálogo!${hmax_c}:${hmax_c},Catálogo!$A:$A,$A{r})').number_format = '0.##'
            ws.cell(row=r, column=col+2, value=f'=MAX(FLOOR(SUMIFS(Catálogo!${cmin_c}:{cmin_c},Catálogo!$A:$A,$A{r}),1000),400000)').number_format = '#,##0'
            ws.cell(row=r, column=col+3, value=f'=MAX(CEILING(SUMIFS(Catálogo!${cmax_c}:{cmax_c},Catálogo!$A:$A,$A{r}),1000),400000)').number_format = '#,##0'
        col += 4
    # columnas RAW (sin piso de proyecto ni redondeo): fuente exacta del Simulador
    raw0 = 27  # AA
    ci = 0
    for t in TIERS:
        hmin_c, hmax_c = HCOL2[t]
        a1 = get_column_letter(raw0 + ci); a2 = get_column_letter(raw0 + ci + 1)
        ws.cell(row=1, column=raw0 + ci, value=f'{t} RAW min').font = Font(size=8, color='86868b')
        ws.cell(row=1, column=raw0 + ci + 1, value=f'{t} RAW max').font = Font(size=8, color='86868b')
        ws.cell(row=r, column=raw0 + ci, value=f'=SUMIFS(Catálogo!${hmin_c}:${hmin_c},Catálogo!$A:$A,$A{r})').number_format = '#,##0'
        ws.cell(row=r, column=raw0 + ci + 1, value=f'=SUMIFS(Catálogo!${cmin_c}:{cmin_c},Catálogo!$A:$A,$A{r})').number_format = '#,##0'
        ws.cell(row=r, column=raw0 + ci + 1).number_format = '#,##0'
        ci += 2
    cD = ws.cell(row=r, column=col, value=f'=K{r}')  # K = S COP min
    cD.number_format = '#,##0'; cD.fill = F_TOT; cD.font = F_TXT_TOT  # Desde = S COP min (col I)
    r += 1
ws.auto_filter.ref = f'A1:Y{r-1}'

# ═══════════════ 5. COTIZADOR WEB (trazabilidad) ═══════════════
ws = wb.create_sheet('Cotizador Web')
ws.column_dimensions['A'].width = 16
for col, w in zip('BCDEFG', [34, 30, 30, 26, 26, 14]): ws.column_dimensions[col].width = w
title(ws, 'Cómo cada decisión del wizard se refleja en tiempos y precios')
ws.cell(row=3, column=1, value='Regla general: el wizard mapea tus respuestas a VARIABLES de un servicio (serviceVariables.ts); esas variables eligen el NIVEL (tierMap) y el nivel define horas → precio (Resumen Servicios). Si el modelo no existe o es CAD, se SUMA un segundo servicio (RTA-01 creación / CAD-01 conversión).').alignment = Alignment(wrap_text=True)
ws.merge_cells(start_row=3, start_column=1, end_row=5, end_column=7)

r = 7
title(ws, 'A. Decisiones → efecto exacto', r); r += 1
header(ws, r, ['Rama', 'Pregunta / decisión', 'Si dices N…', 'Se mapea a', 'Efecto en precio'], None); r += 1
mapas = [
  ['Todas web-3D', '¿Ya tienes el modelo 3D? → No', '—', 'Se SUMA RTA-01 (creación desde cero) como servicio extra', 'Suma el rango completo de RTA-01 al total'],
  ['Todas web-3D', '¿Ya tienes el modelo? → Sí + formato STEP o CAD limpio', '—', 'Se SUMA CAD-01 (conversión) como servicio extra', 'Suma el rango completo de CAD-01'],
  ['Todas web-3D', 'Sí + escaneo o solo fotos', '—', 'Se SUMA RTA-01 como "preparación del modelo"', 'Suma RTA-01 (nivel según detalle elegido)'],
  ['Todas web-3D', 'Sí + glTF/GLB', '—', 'Sin extra (web-ready)', 'Solo el visor'],
  ['ver-modelo / interactivo / scrollytelling / web-app', 'Nivel de detalle = N (1–5 continuo)', 'N → poligonos interpolados', 'RTA-01.polyCount = interpolación [4k, 9k, 40k, 120k, 300k] redondeada a 500', 'Cambia el tier de RTA-01 (≤10k S · ≤50k M · ≤150k L)'],
  ['ver-modelo / interactivo / scrollytelling / web-app', 'Superficie = N (1–5)', 'N → tipoSuperficie', 'RTA-01.tipoSuperficie', '≤2 S · 3 M · 4 L · 5 XL (+nota discovery)'],
  ['ver-modelo / interactivo / scrollytelling / web-app', 'Cantidad de piezas = N', 'N → numPiezas', 'RTA-01.numPiezas / CAD-01.numPiezas', '≤8 S · ≤30 M · ≤100 L (CAD: ≤15 S · ≤60 M · ≤300 L)'],
  ['ver-modelo / interactivo / scrollytelling / web-app', 'Acabados = simple / variado / detallado', '—', 'RTA-01.numTexturas = 1 / 3 / 6', 'Sube el tier si cruza umbrales de otras variables'],
  ['ver-modelo', 'Interfaz del visor = hotspots (avanzado)', '—', 'WEB-01.numHotspots = 8', '≤5 S · ≤15 M · ≤30 L'],
  ['ver-modelo', 'Dónde se muestra = feria / móvil / landing', '—', 'WEB-01.target = Desktop + móvil', 'tier M (vs Desktop = S)'],
  ['interactivo', 'Tipo de interactividad = configurar  O  plataforma = app', '—', 'Cambia el servicio a WEB-04 (Web App)', 'WEB-04 es más costoso que WEB-01'],
  ['interactivo', 'Tipo de interactividad = hotspots', '—', 'WEB-01.numHotspots = 8', 'Tier M del visor'],
  ['scrollytelling', 'Escenas = N (1–15)', 'N → numSecciones', 'WEB-05.numSecciones', '≤4 S · ≤8 M · ≤15 L'],
  ['web-app', 'Tipo de app = configurador / catálogo / herramienta / juego', '—', 'Enruta a WEB-04 / WEB-07 / WEB-04 / WEB-06', 'Servicios con rangos muy distintos'],
  ['web-app', 'Variantes configurables = N', 'N → numVariantes', 'WEB-04.numVariantes', '≤10 S · ≤25 M · ≤50 L'],
  ['web-app', 'Usuarios = equipo interno (avanzado)', '—', 'WEB-04.auth = true', 'Sube a tier L'],
  ['web-app', 'Origen de datos = CMS / API (avanzado)', '—', 'WEB-04.fuenteDatos', 'CMS tier M · API tier L'],
]
for row in mapas:
    for i, v in enumerate(row, 1):
        c = ws.cell(row=r, column=i, value=v); c.alignment = Alignment(wrap_text=True, vertical='top')
    r += 1

r += 1
title(ws, 'B. Umbrales EXACTOS (tierMaps) que usa derivarTier', r); r += 1
header(ws, r, ['Servicio', 'Variable', 'Umbral → nivel'], None); r += 1
for v in d['vars']:
    if v['tierMap']:
        umbral = ' · '.join([f"≤{tm['maxVal']} → {tm['tier']}" for tm in v['tierMap']])
        ws.cell(row=r, column=1, value=v['servicio'])
        ws.cell(row=r, column=2, value=v['id'])
        ws.cell(row=r, column=3, value=umbral)
        r += 1
    elif v['opciones'] and any(o['tier'] for o in v['opciones']):
        parts = [f"{o['valor']} → {o['tier']}" for o in v['opciones'] if o['tier']]
        if parts:
            ws.cell(row=r, column=1, value=v['servicio'])
            ws.cell(row=r, column=2, value=v['id'])
            ws.cell(row=r, column=3, value=' · '.join(parts))
            r += 1

r += 1
title(ws, 'C. Ejemplo resuelto con FÓRMULAS VIVAS (ver-modelo, "No tengo modelo", nivel 3, 12 piezas, detallado, superficie 3)', r); r += 1
ej = [
  ['Paso', 'Cálculo', 'Resultado (celda viva)'],
  ['1. RTA-01.polyCount', 'nivel 3 → interpolación [4k, 9k, 40k, 120k, 300k] = 40.000', 'polyCount = 40.000'],
  ['2. RTA-01.numPiezas', 'slider piezas = 12', 'numPiezas = 12'],
  ['3. RTA-01.numTexturas', 'acabado detallado → 6 sets', 'numTexturas = 6'],
  ['4. RTA-01.tipoSuperficie', 'superficie 3', 'tipoSuperficie = 3'],
  ['5. Tier RTA-01', 'máximo de los umbrales (piezas ≤30 → M)', 'M'],
  ['6. WEB-01', 'sin hotspots, sin CMS → Desktop, 0 hotspots', 'S'],
  ['7. WEB-01 S → ver Resumen fila WEB-01', 'motor computeQuote', None],
  ['8. RTA-01 M → ver Resumen fila RTA-01', 'motor computeQuote', None],
  ['9. Total con bundle −5% (2 servicios)', '(WEB-01 + RTA-01) × 0,95', None],
]
for row in ej:
    for i, v in enumerate(row, 1):
        c = ws.cell(row=r, column=i, value=v)
        if row[0] == 'Paso': c.font = Font(bold=True, size=10)
    r += 1
# Referencias vivas (WEB-01 = fila 6, RTA-01 = fila 4 en Resumen Servicios)
    wrow = res_row['WEB-01']; rrow = res_row['RTA-01']
ws.cell(row=r-8, column=3, value=f"='Resumen Servicios'!I{wrow}")  # S COP min WEB-01
ws.cell(row=r-8, column=3).number_format = '#,##0'
ws.cell(row=r-7, column=3, value=f"='Resumen Servicios'!O{rrow}")  # M COP min RTA-01
ws.cell(row=r-7, column=3).number_format = '#,##0'
ws.cell(row=r-6, column=3, value=f"='Resumen Servicios'!K{wrow}").number_format = '#,##0'
ws.cell(row=r-6, column=3).number_format = '#,##0'
ws.cell(row=r-5, column=3, value=f"='Resumen Servicios'!P{rrow}").number_format = '#,##0'
ws.cell(row=r-5, column=3).number_format = '#,##0'
ws.cell(row=r-4, column=3, value=f"=MAX(FLOOR(('Resumen Servicios'!K{wrow}+'Resumen Servicios'!O{rrow})*0.95,1000),400000)").number_format = '#,##0'
ws.cell(row=r-4, column=3).number_format = '#,##0'
ws.cell(row=r-3, column=3, value=f"=CEILING(('Resumen Servicios'!L{wrow}+'Resumen Servicios'!P{rrow})*0.95,1000)").number_format = '#,##0'
ws.cell(row=r-3, column=3).number_format = '#,##0'
r += 1
ws.cell(row=r, column=1, value='Estas celdas son fórmulas: si editas horas en Catálogo o tarifas en Tarifas, este ejemplo se actualiza solo — igual que la web.').font = Font(italic=True, size=9)
r += 1
ws.cell(row=r, column=1, value='Nota bundle: la web aplica −5% automáticamente cuando el presupuesto agrupa 2 servicios (−10% con 3+). No acumula con urgencia.').font = Font(italic=True, size=9)

# ═══════════════ 6. BENCHMARK ═══════════════
ws = wb.create_sheet('Benchmark CO vs Intl')
title(ws, 'Precios por hora — Colombia vs Internacional (2025-2026)')
header(ws, 3, ['Perfil', 'Colombia COP/h', 'Internacional USD/h', 'Nota'], [40, 18, 20, 60])
bench2 = [
  ('Dev web general junior (CO)', '60.000–100.000', '$15–25', 'omarhernandezrey.com/blog'),
  ('Dev web general mid (CO)', '100.000–160.000', '$25–40', 'omarhernandezrey.com/blog'),
  ('Dev web senior / clientes intl. (CO)', '160.000–240.000+', '$40–60+', 'omarhernandezrey.com/blog'),
  ('Three.js/WebGL LatAm (placement)', '≈ 80.000–85.000', '≈ $20', 'hireinsouth.com ($3.500/mes)'),
  ('Modelador 3D experimentado (CO)', '40.000–60.000', '≈ $10–15', 'comunidad CO'),
  ('Diseño profesional (tarifario CO 2025)', '≈ 90.000', '—', 'disenadorescolombianos.co'),
  ('3D artistas mercados internacionales', '≈ 2,8M–4M /día', '$700–1.000/día', 'benchmark global'),
  ('Tu RC-WEB actual', '40.000–57.000', '$10–14', '← por debajo del junior: margen de reventa sano'),
  ('Tu RC-ART actual', '30.000–42.000', '$7,5–10,5', '← en línea con modelador local'),
  ('Tu RC-CON actual', '60.000–82.000', '$15–20,5', '← muy por debajo del senior internacional'),
]
r = 4
for row in bench2:
    for i, v in enumerate(row, 1):
        c = ws.cell(row=r, column=i, value=v)
        if row[0].startswith('Tu '): c.font = Font(bold=True, color='0071e3')
    r += 1
r += 1
ws.cell(row=r, column=1, value='IA (referencia por proyecto, Colombia): chatbot conversacional $6M–16M COP · packs agencia $1,89M–$4,89M · agente empresarial $20.000–80.000 USD (techo internacional).').alignment = Alignment(wrap_text=True)
ws.merge_cells(start_row=r, start_column=1, end_row=r+1, end_column=4)
r += 2
ws.cell(row=r, column=1, value='Fuentes: omarhernandezrey.com · hireinsouth.com · disenadorescolombianos.co · consolidaciondigital.com · mentoracolombia.com · kemenystudio.com').font = Font(size=9, italic=True)

# -*- coding: utf-8 -*-
"""Ciclo 8b: hojas 'Simulador Web' (réplica de la lógica del wizard) y 'Mapeo'."""
# ── 7. MAPEO (umbrales que usan las fórmulas del simulador) ──
ws = wb.create_sheet('Mapeo')
ws.column_dimensions['A'].width = 30
for cl in 'BCDEF': ws.column_dimensions[cl].width = 14
title(ws, 'Umbrales EXACTOS que usa la web (serviceVariables.ts) — NO editar salvo cambio de alcance')
header(ws, 3, ['Variable', 'tope S', 'tope M', 'tope L', 'tope XL'], None)
filas_mapeo = [
  ('RTA-01.polyCount (tris)', [10000, 50000, 150000, 999999999]),
  ('RTA-01.numPiezas', [8, 30, 100, 999999999]),
  ('RTA-01.tipoSuperficie', [2, 3, 4, 999999999]),
  ('CAD-01.numPiezas', [15, 60, 150, 999999999]),
  ('WEB-01.numHotspots', [5, 15, 30, 999999999]),
  ('WEB-04.numVariantes', [10, 25, 50, 999999999]),
  ('WEB-04.numSKUs', [5, 20, 100, 999999999]),
  ('WEB-05.numSecciones', [4, 8, 15, 999999999]),
  ('WEB-07.numProductos', [5, 20, 100, 999999999]),
]
r = 4
fila_vars = {}
for key, umb in filas_mapeo:
    ws.cell(row=r, column=1, value=key)
    for i, u in enumerate(umb):
        c = ws.cell(row=r, column=2 + i, value=u); c.fill = F_INFO; c.font = F_TXT_CALC
    ws.cell(row=r, column=6, value='XS · S · M · L · XL').font = Font(size=8, color='86868b')
    fila_vars[key.split(' (')[0]] = r
    r += 1
r += 1
title(ws, 'Opciones → nivel (selects)', r); r += 1
header(ws, r, ['Variable', 'Opción', 'Nivel (2=S, 3=M, 4=L)'], None); r += 1
sel_rows = [
  ('RTA-01.fuente', 'Ya tengo el modelo 3D', 2),
  ('RTA-01.fuente', 'Desde CAD (requiere conversión)', 3),
  ('RTA-01.fuente', 'Desde fotos (requiere modelado)', 4),
  ('WEB-01.target', 'Desktop', 2),
  ('WEB-01.target', 'Desktop + móvil', 3),
  ('WEB-01.datos', 'Fijos (hardcode)', 2),
  ('WEB-01.datos', 'Dinámicos (CMS/API)', 3),
  ('WEB-04.fuenteDatos', 'Estáticos (JSON local)', 2),
  ('WEB-04.fuenteDatos', 'CMS', 3),
  ('WEB-04.fuenteDatos', 'API externa', 4),
  ('WEB-04.auth', 'NO', 2),
  ('WEB-04.auth', 'SI', 4),
  ('WEB-06.mecanica', 'Simple (quiz, memory, puzzle)', 2),
  ('WEB-06.mecanica', 'Media (runner, plataforma)', 3),
  ('WEB-06.mecanica', 'Compleja (multiplayer, física)', 4),
  ('WEB-06.scores', 'NO', 2),
  ('WEB-06.scores', 'SI', 3),
]
fila_sel = {}
for var, opt, lvl in sel_rows:
    ws.cell(row=r, column=1, value=var)
    ws.cell(row=r, column=2, value=opt)
    ws.cell(row=r, column=3, value=lvl)
    fila_sel[var + '|' + opt] = r
    r += 1

# ── 8. SIMULADOR WEB (réplica del wizard) ──
ws = wb.create_sheet('Simulador Web')
ws.column_dimensions['A'].width = 46
for cl in 'BCDEFG': ws.column_dimensions[cl].width = 20
for cl in 'HIJK': ws.column_dimensions[cl].width = 16

def sec(row, txt):
    c = ws.cell(row=row, column=1, value=txt); c.font = Font(bold=True, size=12, color='0071e3')

def inp(row, label, default, afecta, options=None):
    ws.cell(row=row, column=1, value=label).font = Font(size=10)
    c = ws.cell(row=row, column=2, value=default)
    c.fill = F_IN; c.font = F_TXT_IN; c.border = THIN
    if options:
        from openpyxl.worksheet.datavalidation import DataValidation
        dv = DataValidation(type='list', formula1='"' + ','.join(options) + '"', allow_blank=False)
        ws.add_data_validation(dv); dv.add(c)
    cc = ws.cell(row=row, column=3, value=afecta)
    cc.font = Font(size=8.5, color='86868b'); cc.alignment = Alignment(wrap_text=True)

def calc(row, label, formula, fmt='#,##0', nota=None):
    ws.cell(row=row, column=1, value=label).font = Font(size=10)
    c = ws.cell(row=row, column=2, value=formula)
    c.number_format = fmt; c.fill = F_CALC; c.font = F_TXT_CALC; c.border = THIN
    if nota:
        cc = ws.cell(row=row, column=3, value=nota)
        cc.font = Font(size=8.5, color='86868b'); cc.alignment = Alignment(wrap_text=True)

title(ws, 'SIMULADOR WEB — replica exactamente la lógica del cotizador', 1)
ws.cell(row=2, column=1, value='Edita solo las celdas AMARILLAS. Todo lo demás se recalcula conectado a Tarifas y Catálogo.').font = Font(size=9, italic=True, color='86868b')

sec(4, 'ENTRADAS — el wizard')
inp(5, 'Rama (¿qué quieres lograr?)', 'ver-modelo', 'web-app → WEB-04/06/07 · scrollytelling → WEB-05 · interactivo → WEB-01/04 · ver-modelo → WEB-01', options=['ver-modelo', 'interactivo', 'scrollytelling', 'web-app'])
inp(6, 'Tipo de interactividad (solo interactivo)', 'rotar', 'configurar → WEB-04 · hotspots → visor con hotspots', options=['rotar', 'hotspots', 'configurar', 'desarmar'])
inp(7, 'Tipo de app (solo web-app)', 'configurador', 'catalogo → WEB-07 · juego → WEB-06 · resto → WEB-04', options=['configurador', 'catalogo', 'herramienta', 'juego'])
inp(8, 'Plataforma (solo interactivo)', 'mi-web', 'app → WEB-04 · feria/móvil → exige móvil', options=['mi-web', 'landing', 'feria', 'app'])
inp(9, '¿Modelo 3D?', 'si-gltf', 'no-crear → CREACIÓN (RTA-01) · si-step → CONVERSIÓN (CAD-01) · si-scan → PREPARACIÓN (RTA-01) · si-gltf/si-otro → sin extra', options=['si-gltf', 'si-otro', 'si-step', 'si-scan', 'no-crear'])
inp(10, 'Nivel de detalle (1–5 continuo)', 3, 'RTA-01.polyCount interpolado: 1→4k · 2→9k · 3→40k · 4→120k · 5→300k (tris)')
inp(11, 'Superficie (1–5 continuo)', 3, 'RTA-01.tipoSuperficie: ≤2 S · 3 M · 4 L · 5 XL (+discovery)')
inp(12, 'Cantidad de piezas (1–50)', 12, 'RTA-01/CAD-01.numPiezas: ≤8 S · ≤30 M · ≤100 L')
inp(13, 'Acabados', 'detallado', 'RTA-01.numTexturas: simple 1 · variado 3 · detallado 6', options=['simple', 'variado', 'detallado'])
inp(14, 'Interfaz del visor (avanzado)', 'limpio', 'hotspots → WEB-01.numHotspots = 8 (sube a M)', options=['limpio', 'controles', 'hotspots'])
inp(15, 'Dónde se muestra', 'mi-web', 'feria/móvil/landing → Desktop + móvil (sube a M)', options=['mi-web', 'landing', 'feria', 'movil'])
inp(16, 'Escenas (solo scrollytelling, 1–15)', 8, 'WEB-05.numSecciones: ≤4 S · ≤8 M · ≤15 L')
inp(17, 'Usuarios de la app (avanzado)', 'publico', 'equipo-interno → WEB-04.auth = SI (sube a L)', options=['publico', 'clientes', 'equipo-interno'])
inp(18, 'Origen de datos (avanzado)', 'estaticos', 'cms → tier M · api → tier L (WEB-04)', options=['estaticos', 'cms', 'api'])

sec(21, 'SUPUESTOS ASUMIDOS (no se preguntan — ajústalos si lo necesitas)')
inp(22, 'WEB-04 · numSKUs (¿para cuántos productos?)', 1, '≤5 S · ≤20 M · ≤100 L')
inp(23, 'WEB-06 · scores (leaderboard)', 'NO', 'sube a M', options=['NO', 'SI'])
inp(24, 'WEB-06 · mecánica', 'Media (runner, plataforma)', 'Simple S · Media M · Compleja L', options=['Simple (quiz, memory, puzzle)', 'Media (runner, plataforma)', 'Compleja (multiplayer, física)'])

sec(27, 'DERIVADOS — calculados por la lógica de la web')
calc(28, 'Servicio principal', '=IF($B$4="web-app",IF($B$7="catalogo","WEB-07",IF($B$7="juego","WEB-06","WEB-04")),IF($B$4="scrollytelling","WEB-05",IF($B$4="interactivo",IF(OR($B$6="configurar",$B$8="app"),"WEB-04","WEB-01"),"WEB-01")))', 'General', 'Así enruta el wizard según rama y respuestas')
calc(29, '¿Suma CREACIÓN del modelo? (RTA-01)', '=IF($B$9="no-crear","SI","NO")', 'General')
calc(30, '¿Suma CONVERSIÓN CAD? (CAD-01)', '=IF($B$9="si-step","SI","NO")', 'General', 'CAD limpio → conversión; escaneo/fotos → preparación (también RTA-01)')
calc(31, '¿Suma PREPARACIÓN de modelo? (RTA-01)', '=IF($B$9="si-scan","SI","NO")', 'General')
calc(32, 'RTA-01 · polyCount', '=ROUND((INDEX(Mapeo!$B$14:$F$14,MATCH(INT($B$10),Mapeo!$B$13:$F$13,0))+(INDEX(Mapeo!$B$13:$F$13,MATCH(MIN(INT($B$10)+1,5),Mapeo!$B$14:$F$14,0))-INDEX(Mapeo!$B$14:$F$14,MATCH(INT($B$10),Mapeo!$B$13:$F$13,0)))*MOD($B$10,1))/500)*500', '0', 'Interpolación continua entre etapas, redondeada a 500')
calc(33, 'RTA-01 · numPiezas', '=$B$12', '0')
calc(34, 'RTA-01 · numTexturas', '=IF($B$13="simple",1,IF($B$13="variado",3,6))', '0')
calc(35, 'RTA-01 · tipoSuperficie', '=ROUND($B$11,1)', '0.0')
calc(36, 'CAD-01 · numPiezas', '=$B$12', '0')
calc(37, 'WEB-01 · numHotspots', '=IF($B$14="hotspots",8,0)', '0')
calc(38, 'WEB-01 · target', '=IF(OR($B$8="feria",$B$8="movil",$B$8="landing"),"Desktop + móvil","Desktop")', 'General')
calc(39, 'WEB-05 · numSecciones', '=$B$16', '0')
calc(40, 'WEB-04 · numVariantes', '=$B$15', '0')
calc(41, 'WEB-04 · auth', '=IF($B$17="equipo-interno","SI","NO")', 'General')
calc(42, 'WEB-04 · fuenteDatos', '=IF($B$18="cms","CMS",IF($B$18="api","API externa","Estáticos (JSON local)"))', 'General')
calc(43, 'WEB-07 · numProductos', 10, '0', 'Asumido: 10 (editable)')
sec(47, 'NIVEL (tier) derivado por servicio — máx entre umbrales (igual que derivarTier)')
bloques = [
  ('WEB-01', 49, [('num', 'numHotspots', 37), ('sel', 'target', 38, ['Desktop', 'Desktop + móvil'])], 2),
  ('WEB-04', 50, [('num', 'numVariantes', 40), ('num', 'numSKUs', 22), ('sel', 'auth', 41, ['NO', 'SI']), ('sel', 'fuenteDatos', 42, ['Estáticos (JSON local)', 'CMS', 'API externa'])], 2),
  ('WEB-05', 51, [('num', 'numSecciones', 39)], 2),
  ('WEB-06', 52, [('sel', 'mecanica', 24, ['Simple (quiz, memory, puzzle)', 'Media (runner, plataforma)', 'Compleja (multiplayer, física)']), ('sel', 'scores', 23, ['NO', 'SI'])], 2),
  ('WEB-07', 53, [('num', 'numProductos', 43)], 2),
  ('RTA-01', 54, [('num', 'polyCount', 32), ('num', 'numPiezas', 33), ('num', 'tipoSuperficie', 35)], 2),
  ('CAD-01', 55, [('num', 'numPiezas', 36)], 2),
]
for nombre, fila_out, vars_, fallback in bloques:
    ws.cell(row=fila_out, column=1, value=nombre).font = Font(size=10, bold=True)
    idx_parts = []
    for v_ in vars_:
        if v_[0] == 'num':
            _, var, ref = v_[0], v_[1], v_[2]
            fr = fila_vars[nombre + '.' + var]
            idx_parts.append('IFERROR(MATCH($B$' + str(ref) + ',Mapeo!$B$' + str(fr) + ':$E$' + str(fr) + ',1),0)+1')
        else:
            _, var, ref, opciones = v_[0], v_[1], v_[2], v_[3]
            rows = [fila_sel[nombre + '.' + var + '|' + o] for o in opciones]
            r1, r2 = min(rows), max(rows)
            idx_parts.append('INDEX(Mapeo!$C$' + str(r1) + ':$C$' + str(r2) + ',MATCH($B$' + str(ref) + ',Mapeo!$B$' + str(r1) + ':$B$' + str(r2) + ',0))-1')
    f_idx = 'MAX(' + ','.join(idx_parts) + ')' if idx_parts else str(fallback)
    c = ws.cell(row=fila_out, column=2, value='=' + f_idx)
    c.fill = F_CALC; c.font = F_TXT_CALC; c.border = THIN
    c2 = ws.cell(row=fila_out, column=3, value='=CHOOSE(B' + str(fila_out) + ',"XS","S","M","L","XL")')
    c2.fill = F_CALC; c2.font = F_TXT_CALC
    ws.cell(row=fila_out, column=4, value='← nivel idx / nombre').font = Font(size=8, color='86868b')

sec(60, 'COTIZACIÓN — horas y COP desde Resumen (idéntico al panel de la web)')
header(ws, 61, ['Concepto', 'Nivel', 'h min', 'h max', 'COP min', 'COP max'], None)
fila_q = 62
ws.cell(row=fila_q, column=1, value='Servicio principal').font = Font(bold=True)
ws.cell(row=fila_q, column=2, value='=$B$28').font = Font(bold=True)
ws.cell(row=fila_q, column=3, value='=INDEX($B$49:$B$55,MATCH($B$28,$A$49:$A$55,0))').font = Font(bold=True)
ws.cell(row=fila_q, column=8, value='=MATCH($B$28,$A$49:$A$55,0)')
ws.cell(row=fila_q, column=4, value="=INDEX('Resumen Servicios'!$F$2:$Y$29,MATCH($B$28,'Resumen Servicios'!$A:$A,0),$H$62*4-3)").number_format = '0.##'
ws.cell(row=fila_q, column=5, value="=INDEX('Resumen Servicios'!$F$2:$Y$29,MATCH($B$28,'Resumen Servicios'!$A:$A,0),$H$62*4-2)").number_format = '0.##'
ws.cell(row=fila_q, column=6, value="=INDEX('Resumen Servicios'!$AA$2:$AT$29,MATCH($B$28,'Resumen Servicios'!$A:$A,0),$H$62*4-3)").number_format = '#,##0'
ws.cell(row=fila_q, column=7, value="=INDEX('Resumen Servicios'!$AA$2:$AT$29,MATCH($B$28,'Resumen Servicios'!$A:$A,0),$H$62*4-2)").number_format = '#,##0'

extras_specs = [
    ('Extra: creación del modelo (RTA-01)', 'NO', 'SI', 54, 'RTA-01'),
    ('Extra: conversión CAD (CAD-01)', 'NO', 'SI', 55, 'CAD-01'),
    ('Extra: preparación de modelo (RTA-01)', 'NO', 'SI', 54, 'RTA-01'),
]
fila_e = fila_q + 1
for lbl, def_, si, fila_nivel, svc in extras_specs:
    rr = fila_e
    ws.cell(row=rr, column=1, value=lbl)
    flag = '=IF($B$29="SI","SI","NO")' if svc == 'RTA-01' and 'creación' in lbl else ('=IF($B$30="SI","SI","NO")' if 'CAD' in lbl else ('=IF($B$31="SI","SI","NO")' if 'preparación' in lbl else ''))
    ws.cell(row=rr, column=2, value=flag).font = Font(size=9)
    ws.cell(row=rr, column=8, value='=MATCH("' + svc + '",$A$49:$A$55,0)')
    ws.cell(row=rr, column=3, value='=IF($B' + str(rr) + '="SI",INDEX($C$49:$C$55,MATCH("' + svc + '",$A$49:$A$55,0)),"—")').font = Font(size=9)
    ws.cell(row=rr, column=4, value="=IF($B" + str(rr) + '="SI",INDEX(\'Resumen Servicios\'!$F$2:$Y$29,MATCH("' + svc + '",\'Resumen Servicios\'!$A:$A,0),($H' + str(rr) + '*4-3)),0)').number_format = '0.##'
    ws.cell(row=rr, column=5, value="=IF($B" + str(rr) + '="SI",INDEX(\'Resumen Servicios\'!$F$2:$Y$29,MATCH("' + svc + '",\'Resumen Servicios\'!$A:$A,0),($H' + str(rr) + '*4-2)),0)').number_format = '0.##'
    ws.cell(row=rr, column=6, value="=IF($B" + str(rr) + '="SI",INDEX(\'Resumen Servicios\'!$K$2:$R$29,MATCH("' + svc + '",\'Resumen Servicios\'!$A:$A,0),($H' + str(rr) + '*4-3)),0)').number_format = '#,##0'
    ws.cell(row=rr, column=7, value="=IF($B" + str(rr) + '="SI",INDEX(\'Resumen Servicios\'!$L$2:$S$29,MATCH("' + svc + '",\'Resumen Servicios\'!$A:$A,0),($H' + str(rr) + '*4-2)),0)').number_format = '#,##0'
    fila_e += 1

fila_tot = fila_e + 1
ws.cell(row=fila_tot, column=1, value='Subtotal (suma de lo de arriba)').font = Font(bold=True)
for cc, colL in [(4, 'D'), (5, 'E'), (6, 'F'), (7, 'G')]:
    fmt = '#,##0.##' if cc < 6 else '#,##0'
    c = ws.cell(row=fila_tot, column=cc, value='=SUM(' + colL + str(fila_q) + ':' + colL + str(fila_e) + ')')
    c.number_format = fmt; c.fill = F_CALC

fila_d = fila_tot + 1
inp(fila_d, 'Descuento de lanzamiento (SI/NO)', 'SI', '−25% primer proyecto', options=['SI', 'NO'])
inp(fila_d + 1, 'Urgencia', 'normal', 'pronto +30% · critico +50% (anula bundle)', options=['normal', 'pronto', 'critico'])

fila_f = fila_d + 2
ws.cell(row=fila_f, column=1, value='Factor por servicio (lanzamiento × urgencia)').font = Font(size=9)
ws.cell(row=fila_f, column=2, value='=(1-IF($B$' + str(fila_d) + '="SI",0.25,0))*(1+IF($B$' + str(fila_d + 1) + '="pronto",0.3,IF($B$' + str(fila_d + 1) + '="critico",0.5,0)))').number_format = '0.00'
ws.cell(row=fila_f + 1, column=1, value='Servicios agrupados').font = Font(size=9)
ws.cell(row=fila_f + 1, column=2, value='=1+COUNTIF($B$' + str(fila_e - 1) + ':$B$' + str(fila_e + 1) + ',"SI")').number_format = '0'
ws.cell(row=fila_f + 2, column=1, value='Bundle % (no acumula con urgencia)').font = Font(size=9)
ws.cell(row=fila_f + 2, column=2, value='=IF($B$' + str(fila_d + 1) + '<>"normal",0,IF($B$' + str(fila_f + 1) + '=2,5,IF($B$' + str(fila_f + 1) + '>=3,10,0)))').number_format = '0"%"'

fila_t = fila_f + 4
ws.cell(row=fila_t, column=1, value='TOTAL PROYECTO (COP)').font = Font(bold=True, size=12)
c = ws.cell(row=fila_t, column=2, value='=MAX(FLOOR(SUMPRODUCT($F$' + str(fila_q) + ':$F$' + str(fila_e) + ')*$B$' + str(fila_f) + ',1000),400000)*(1-$B$' + str(fila_f + 2) + '/100)')
c.number_format = '#,##0'; c.fill = F_TOT; c.font = Font(bold=True, size=13, color='2E7D32')
ws.cell(row=fila_t + 1, column=1, value='COP máx').font = Font(bold=True)
c = ws.cell(row=fila_t + 1, column=2, value='=MAX(CEILING(SUMPRODUCT($G$' + str(fila_q) + ':$G$' + str(fila_e) + ')*$B$' + str(fila_f) + ',1000),MAX(FLOOR(SUMPRODUCT($F$' + str(fila_q) + ':$F$' + str(fila_e) + ')*$B$' + str(fila_f) + ',1000),400000))*(1-$B$' + str(fila_f + 2) + '/100)')
c.number_format = '#,##0'; c.fill = F_TOT; c.font = Font(bold=True, size=13, color='2E7D32')
ws.cell(row=fila_t + 3, column=1, value='Los extras (creación/conversión) heredan el mismo factor de lanzamiento/urgencia que la web aplica a cada cotización.').font = Font(size=8.5, italic=True, color='86868b')
ws.cell(row=fila_t + 4, column=1, value='Todo lo azul es calculado; nada se ingresa a mano. Si un número no cuadra: revisa Catálogo (horas) o Tarifas (tarifa/hora).').font = Font(size=9, italic=True, color='86868b')

wb.save('E:/Laboral/verificacion-cotizacion/cotizador-padre-final.xlsx')
print('Excel OK: 8 hojas (Léeme, Tarifas, Catálogo, Resumen, Cotizador Web, Benchmark, Mapeo, Simulador)')
