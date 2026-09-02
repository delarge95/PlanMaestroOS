import subprocess, json, threading, time, base64, sys

# ============================================================
# MODELO GENERAL — Orientacion y origenes de piezas (no destructivo)
#
# Convencion TURBINA:
#   * Eje del motor = +X global (fan/entrada hacia -X, escape hacia +X)
#   * Cada pieza: su eje de revolucion alineado a +X
#   * Sentido: el extremo de MAYOR radio hacia -X (boca/entrada);
#     conos (spinner): punta hacia -X, base hacia +X
#   * Origen: centro del bbox proyectado sobre el eje
#   * Aspas: span -> +Z, raiz en el eje (origen sobre el eje de giro),
#     borde de ataque hacia -X -> las copias orbitan con RotX(theta)
#   * Escala uniforme positiva (NUNCA espejo: no invierte normales)
#   * NO se toca winding ni normales: solo transforms de v.co
# ============================================================

CODE = r'''
import bpy, bmesh, math
import numpy as np
from mathutils import Matrix, Vector
from math import pi, sin, cos

def nube(ob):
    """nube de vertices en coords MUNDO (bake de transform)"""
    return np.array([(ob.matrix_world @ v.co)[:] for v in ob.data.vertices])

def pca(pts):
    """autovectores de la covarianza, ordenados por varianza descendente"""
    c = pts - pts.mean(axis=0)
    cov = np.cov(c.T)
    vals, vecs = np.linalg.eigh(cov)
    orden = np.argsort(vals)[::-1]
    return vals[orden], vecs[:, orden]

def radio_extremo(pts, x_min, x_max, lado_pos):
    """radio medio (dist al eje Y=Z=center) de los vertices en el 15% final de X"""
    xs = pts[:, 0]
    lim = x_max - 0.15 * (x_max - x_min) if lado_pos else x_min + 0.15 * (x_max - x_min)
    sel = pts[xs >= lim] if lado_pos else pts[xs <= lim]
    if len(sel) == 0: return 0.0
    return float(np.sqrt(np.mean(sel[:, 1] ** 2 + sel[:, 2] ** 2)))

def orientar(nombre, tipo, dim_objetivo, estacion_x, sentido=+1):
    ob = bpy.data.objects.get(nombre)
    if ob is None:
        return {"falta": nombre}
    try:
        bpy.ops.object.mode_set(mode='OBJECT')
    except Exception:
        pass

    pts = nube(ob)
    centro = pts.mean(axis=0)

    if tipo == 'caja':
        # bbox: dimension mayor -> X, sin PCA
        dims = pts.max(axis=0) - pts.min(axis=0)
        ax = Vector((1, 0, 0)) if int(np.argmax(dims)) == 0 else None
        R = Matrix.Identity(3)
    else:
        vals, vecs = pca(pts)
        if tipo in ('disco',):
            ax_vec = vecs[:, 2]   # menor varianza = eje del disco
        else:                     # 'tubo' / 'cono' / 'aspa': mayor varianza
            ax_vec = vecs[:, 0]
        ax = Vector((ax_vec[0], ax_vec[1], ax_vec[2])).normalized()
        R = Matrix.Identity(3)

    # llevar el eje principal a +X (o +Z para aspas) con rotacion pura
    if tipo == 'aspa':
        objetivo = Vector((0, 0, 1))
    else:
        objetivo = Vector((1, 0, 0))
    q = ax.rotation_difference(objetivo)
    R = q.to_matrix()

    # aplicar rotacion + recentrar al centroide (rotacion pura, origen luego)
    R4 = R.to_4x4()
    R4.translation = centro
    T = Matrix.Translation(-Vector(centro))
    ob.data.transform(T @ R4)
    ob.matrix_world = Matrix.Identity(4)

    pts = nube(ob)

    # sentido: para tubo/cono, comparar radio medio en extremos de X (con umbral anti-ruido)
    if tipo in ('tubo', 'cono'):
        mins, maxs = pts.min(axis=0), pts.max(axis=0)
        diag = float(np.linalg.norm(maxs - mins))
        r_pos = radio_extremo(pts, mins[0], maxs[0], True)
        r_neg = radio_extremo(pts, mins[0], maxs[0], False)
        # cono: punta (radio menor) hacia -X -> si punta esta en +X, girar 180 en Z
        # tubo: boca (radio mayor) hacia -X
        significativo = abs(r_pos - r_neg) > 0.02 * diag
        boca_mal = (tipo == 'cono' and r_pos < r_neg and sentido > 0 and significativo)
        boca_mal2 = (tipo == 'tubo' and r_pos > r_neg and sentido > 0 and significativo)
        if boca_mal or boca_mal2:
            F = Matrix.Rotation(pi, 4, 'Z')
            pts = pts @ F.T
            ob.data.transform(F)

    # recentrar: centro del bbox -> (0,0,0), aspas con raiz en el eje
    mins, maxs = pts.min(axis=0), pts.max(axis=0)
    c = (mins + maxs) / 2
    if tipo == 'aspa':
        shift = Vector((-c[0], -c[1], -mins[2]))   # raiz en z=0, centrado XY
    else:
        shift = Vector((-c[0], -c[1], -c[2]))
    ob.data.transform(Matrix.Translation(shift))

    # escala uniforme a dimension objetivo
    # disco: dim_objetivo = DIAMETRO (max radial) | tubo/cono/caja: = largo del eje
    dims = (pts.max(axis=0) - pts.min(axis=0))
    s = 1.0
    if dim_objetivo:
        if tipo == 'aspa':
            ref = dims[2]
        elif tipo == 'disco':
            ref = max(dims[1], dims[2])
        else:
            ref = dims[0]
        s = dim_objetivo / max(ref, 1e-6)
        ob.data.transform(Matrix.Diagonal(Vector((s, s, s, 1.0))))

    ob.matrix_world = Matrix.Identity(4)
    ob.location = Vector((estacion_x, 8.0, 0.0))

    pts2 = nube(ob)
    dims_f = [round(float(d), 3) for d in (pts2.max(axis=0) - pts2.min(axis=0))]
    return {"ok": True, "escala": round(s, 3), "dims_XYZ": dims_f,
            "estacion": estacion_x}

# ---- tabla de piezas (modelo general: editar solo esta tabla) ----
PIEZAS = [
    # (nombre, tipo, dim_objetivo_eje, estacion_x, sentido)
    # 'disco': eje de revolucion = MENOR varianza (anillos, carcasas, blisks)
    # 'tubo'/'cono': eje = MAYOR varianza (piezas alargadas)
    # 'caja': bbox mayor -> X | 'aspa': span -> +Z con raiz en el eje
    ("metal ring with fittings 3d model", "disco", 0.62, -0.58, +1),
    ("turbine impeller 3d model",         "disco", 0.46, -0.20, +1),
    ("turbine engine 3d model.001",       "disco", 0.40, 0.10, +1),
    ("turbine rotor 3d model",            "disco", 0.46, 0.46, +1),
    ("transmission case 3d model.001",    "caja", 0.34, 0.22, +1),
    ("conical drill bit 3d model",        "cono", 0.32, -0.86, +1),
    ("metal blade 3d model.001",          "aspa", 0.22, -0.68, +1),
]

informe = {}
for nombre, tipo, dim, est, sentido in PIEZAS:
    try:
        informe[nombre] = orientar(nombre, tipo, dim, est, sentido)
    except Exception as e:
        import traceback
        informe[nombre] = {"error": traceback.format_exc()[-300:]}
result["piezas"] = informe
'''

proc = subprocess.Popen(["uv", "run", "blender-mcp"], stdin=subprocess.PIPE,
    stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
    cwd=r"C:\blender\blender_mcp\mcp", text=True, encoding="utf-8")
out = {}
def rd():
    for line in proc.stdout:
        try:
            j = json.loads(line); out[j.get("id")] = j
        except Exception:
            pass
threading.Thread(target=rd, daemon=True).start()
nid = [0]
def send(metodo, params, espera=180):
    nid[0] += 1
    i = nid[0]
    proc.stdin.write(json.dumps({"jsonrpc": "2.0", "id": i, "method": metodo, "params": params}) + "\n")
    proc.stdin.flush()
    deadline = time.time() + espera
    while time.time() < deadline and i not in out:
        time.sleep(0.3)
    return out.get(i, {})

send("initialize", {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "zcode", "version": "0"}})
time.sleep(1.5)
send("notifications/initialized", {})
r = send("tools/call", {"name": "execute_blender_code", "arguments": {"code": CODE}})
res = r.get("result", {})
text = next((c["text"] for c in res.get("content", []) if c.get("type") == "text"), "")
print("isError:", res.get("isError", False))
print(text[:2500])
proc.terminate(); proc.wait()
