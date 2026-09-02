# -*- coding: utf-8 -*-
"""Ciclo 8 del Excel — lote 1: fix #N/A, pastel, helper tarifa, columnas RAW."""
p = 'build-xlsx.py'
with open(p, encoding='utf-8') as f: s = f.read()

def rep(a, b):
    global s
    assert a in s, 'NO: ' + a[:90]
    s = s.replace(a, b)

# ── FIX #N/A: el rango B5:F9 excluía RC-ART (fila 4) ──
while 'Tarifas!$B$5:$F$9' in s:
    s = s.replace('Tarifas!$B$5:$F$9', 'Tarifas!$B$4:$F$8')

# ── estilo pastel + colores de texto ──
rep("""AZUL = '0071e3'
HDR_FILL = PatternFill('solid', fgColor='1d1d1f')
HDR_FONT = Font(color='FFFFFF', bold=True, size=10)
SUB_FILL = PatternFill('solid', fgColor='e8f0fe')
INS_FILL = PatternFill('solid', fgColor='f0f6ff')
THIN = Border(bottom=Side(style='thin', color='D2D2D7'))""",
"""AZUL = '0071e3'
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
F_TXT_TOT  = Font(color='2E7D32', bold=True)       # total (verde oscuro)""")

# Catálogo: columnas extra — 2 helper de tarifa (AB, AC) para las fórmulas RAW del Resumen
rep("""        'XS COP min', 'XS COP max', 'S COP min', 'S COP max', 'M COP min', 'M COP max',
        'L COP min', 'L COP max', 'XL COP min', 'XL COP max']
header(ws, 1, cols, [11, 26, 11, 38, 9] + [8.5]*10 + [13]*10)""",
"""        'XS COP min', 'XS COP max', 'S COP min', 'S COP max', 'M COP min', 'M COP max',
        'L COP min', 'L COP max', 'XL COP min', 'XL COP max', 'tarifa min', 'tarifa max']
header(ws, 1, cols, [11, 26, 11, 38, 9] + [8.5]*10 + [13]*10 + [10, 10])""")

# Catálogo: COP con helper de tarifa (más simple y sin VLOOKUP repetido) + estilo
rep("""        for i, v in enumerate(vals, 1):
            c = ws.cell(row=r, column=i, value=v)
            if i >= 6: c.number_format = '0.##'
        for t in TIERS:
            hmin, hmax = HCOL[t]; cmin, cmax = CCOL[t]
            col_min = ws[f'{cmin}{r}']; col_max = ws[f'{cmax}{r}']
            col_min.value = f'={hmin}{r}*VLOOKUP($E{r},Tarifas!$B$4:$F$8,2,0)'
            col_max.value = f'={hmax}{r}*VLOOKUP($E{r},Tarifas!$B$4:$F$8,3,0)'
            col_min.number_format = '#,##0'; col_max.number_format = '#,##0'
        r += 1""",
"""        for i, v in enumerate(vals, 1):
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
        r += 1""")

# Resumen: horas/COP con estilo + columnas RAW (sin piso ni redondeo) al final
rep("""    ws.cell(row=r, column=col, value=f'=I{r}').number_format = '#,##0'  # Desde = S COP min (col I)""",
"""    # columnas RAW (sin piso de proyecto ni redondeo): fuente exacta del Simulador
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
    cD = ws.cell(row=r, column=col, value=f'=I{r}')
    cD.number_format = '#,##0'; cD.fill = F_TOT; cD.font = F_TXT_TOT  # Desde = S COP min (col I)""")

with open(p, 'w', encoding='utf-8', newline='') as f: f.write(s)
print('lote 1 v2 OK')
