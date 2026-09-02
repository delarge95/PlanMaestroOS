# -*- coding: utf-8 -*-
"""Fix repair de Excel (CHOOSE) + extras con idx numérico + guardado robusto."""
p = 'build-xlsx.py'
with open(p, encoding='utf-8') as f:
    s = f.read()

Q = chr(39)  # apóstrofe

def rep(a, b):
    global s
    assert a in s, 'NO: ' + a[:90]
    s = s.replace(a, b, 1)

# 1) CHOOSE en vez de array constante de texto (causa del "Removed Records")
rep("    c2 = ws.cell(row=fila_out, column=3, value='=INDEX({' + chr(34) + 'XS" + chr(34) + "," + chr(34) + "S" + chr(34) + ",' + ...)",
    "    c2 = ws.cell(row=fila_out, column=3, value='=CHOOSE(B' + str(fila_out) + ',' + Q + 'XS' + Q + ',' + Q + 'S' + Q + ',' + Q + 'M' + Q + ',' + Q + 'L' + Q + ',' + Q + 'XL' + Q + ')')")

# 2) principal: derivar del idx numérico (helper H62)
rep("ws.cell(row=fila_q, column=3, value='=INDEX($B$49:$B$55,MATCH($B$28,$A$49:$A$55,0))').font = Font(bold=True)",
    "ws.cell(row=fila_q, column=3, value='=INDEX($B$49:$B$55,MATCH($B$28,$A$49:$A$55,0))').font = Font(bold=True)\n"
    "ws.cell(row=fila_q, column=8, value='=MATCH($B$28,$A$49:$A$55,0)').number_format = '0'")
rep("($C62-1)*4+1", "$H$62*4-3")
rep("($C62-1)*4+2", "$H$62*4-2")

# 3) extras: idx numérico en helper H, y aritmética sobre él
rep("""    ws.cell(row=rr, column=3, value='=IF($B'""",
"""    ws.cell(row=rr, column=8, value='=MATCH("'""")

with open(p, 'w', encoding='utf-8', newline='') as f:
    f.write(s)
print('paso 1 OK')
