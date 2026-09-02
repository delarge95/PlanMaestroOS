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
for nombre, umb in filas_mapeo:
    ws.cell(row=r, column=1, value=nombre)
    for i, u in enumerate(umb):
        c = ws.cell(row=r, column=2 + i, value=u); c.fill = F_INFO; c.font = F_TXT_CALC
    ws.cell(row=r, column=6, value='XS · S · M · L · XL').font = Font(size=8, color='86868b')
    fila_vars[nombre] = r
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
calc(32, 'RTA-01 · polyCount', '=ROUND((LOOKUP($B$10,{1,2,3,4,5},{4000,9000,40000,120000,300000})+(LOOKUP($B$10+0.5,{1,2,3,4,5},{4000,9000,40000,120000,300000})-LOOKUP($B$10,{1,2,3,4,5},{4000,9000,40000,120000,300000}))*MOD($B$10,1))/500)*500', '0', 'Interpolación continua entre etapas, redondeada a 500')
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
  ('WEB-01', 49, [('numHotspots', 37), ('target', 38)]),
  ('WEB-04', 50, [('numVariantes', 40), ('numSKUs', 22), ('auth', 41), ('fuenteDatos', 42)]),
  ('WEB-05', 51, [('numSecciones', 39)]),
  ('WEB-06', 52, [('mecanica', 24), ('scores', 23)]),
  ('WEB-07', 53, [('numProductos', 43)]),
  ('RTA-01', 54, [('polyCount', 32), ('numPiezas', 33), ('tipoSuperficie', 35)]),
  ('CAD-01', 55, [('numPiezas', 36)]),
]
for nombre, fila_out, vars_ in bloques:
    ws.cell(row=fila_out, column=1, value='Nivel ' + nombre).font = Font(size=10)
    idx_parts = []
    for var, ref in vars_:
        key = nombre + '.' + var
        if key in fila_vars:
            fr = fila_vars[key]
            idx_parts.append('IFERROR(MATCH($B$' + str(ref) + ',Mapeo!$B$' + str(fr) + ':$E$' + str(fr) + ',1),0)+1')
        else:
            selkey = nombre + '.' + var + '|' + str(ref)
            if selkey in fila_sel:
                fr2 = fila_sel[selkey]
                idx_parts.append('INDEX(Mapeo!$C$' + str(fr2) + ':$C$' + str(fr2) + ',MATCH($B$' + str(ref) + ',Mapeo!$B$' + str(fr2) + ':$B$' + str(fr2) + ',0))-1')
    if nombre == 'WEB-01':
        idx_parts.append('2')  # datos asumido Fijos → idx S
    f_idx = 'MAX(' + ','.join(idx_parts) + ')'
    c = ws.cell(row=fila_out, column=2, value='=' + f_idx)
    c.fill = F_CALC; c.font = F_TXT_CALC; c.border = THIN
    c2 = ws.cell(row=fila_out, column=3, value='=INDEX({"XS","S","M","L","XL"},B' + str(fila_out) + ')')
    c2.fill = F_CALC; c2.font = F_TXT_CALC
    ws.cell(row=fila_out, column=4, value='← nivel idx / nombre').font = Font(size=8, color='86868b')

sec(60, 'COTIZACIÓN — horas y COP desde Resumen (idéntico al panel de la web)')
header(ws, 61, ['Concepto', 'Nivel', 'h min', 'h max', 'COP min', 'COP max'], None)
fila_q = 62
ws.cell(row=fila_q, column=1, value='Servicio principal').font = Font(bold=True)
ws.cell(row=fila_q, column=2, value='=$B$28').font = Font(bold=True)
ws.cell(row=fila_q, column=3, value='=INDEX($B$49:$B$55,MATCH($B$28,$A$49:$A$55,0))').font = Font(bold=True)
ws.cell(row=fila_q, column=4, value="=INDEX('Resumen Servicios'!$F$2:$Y$29,MATCH($B$28,'Resumen Servicios'!$A:$A,0),($C62-1)*4+1)").number_format = '0.##'
ws.cell(row=fila_q, column=5, value="=INDEX('Resumen Servicios'!$F$2:$Y$29,MATCH($B$28,'Resumen Servicios'!$A:$A,0),($C62-1)*4+2)").number_format = '0.##'
ws.cell(row=fila_q, column=6, value="=INDEX('Resumen Servicios'!$K$2:$R$29,MATCH($B$28,'Resumen Servicios'!$A:$A,0),($C62-1)*4+1)").number_format = '#,##0'
ws.cell(row=fila_q, column=7, value="=INDEX('Resumen Servicios'!$L$2:$S$29,MATCH($B$28,'Resumen Servicios'!$A:$A,0),($C62-1)*4+2)").number_format = '#,##0'

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
    ws.cell(row=rr, column=3, value='=IF($B' + str(rr) + '="SI",INDEX($C$49:$C$55,MATCH("' + svc + '",$A$49:$A$55,0)),"—")').font = Font(size=9)
    ws.cell(row=rr, column=4, value="=IF($B" + str(rr) + '="SI",INDEX(\'Resumen Servicios\'!$F$2:$Y$29,MATCH("' + svc + '",\'Resumen Servicios\'!$A:$A,0),($C' + str(rr) + '-1)*4+1),0)').number_format = '0.##'
    ws.cell(row=rr, column=5, value="=IF($B" + str(rr) + '="SI",INDEX(\'Resumen Servicios\'!$F$2:$Y$29,MATCH("' + svc + '",\'Resumen Servicios\'!$A:$A,0),($C' + str(rr) + '-1)*4+2),0)').number_format = '0.##'
    ws.cell(row=rr, column=6, value="=IF($B" + str(rr) + '="SI",INDEX(\'Resumen Servicios\'!$K$2:$R$29,MATCH("' + svc + '",\'Resumen Servicios\'!$A:$A,0),($C' + str(rr) + '-1)*4+1),0)').number_format = '#,##0'
    ws.cell(row=rr, column=7, value="=IF($B" + str(rr) + '="SI",INDEX(\'Resumen Servicios\'!$L$2:$S$29,MATCH("' + svc + '",\'Resumen Servicios\'!$A:$A,0),($C' + str(rr) + '-1)*4+2),0)').number_format = '#,##0'
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
