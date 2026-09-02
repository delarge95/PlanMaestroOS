import subprocess, json, threading, time, base64, sys

CODE = r'''
import bpy, bmesh, math
from mathutils import Matrix, Vector
from math import pi, sin, cos, radians

COL_ORIGEN = "TripoxPartes"
COL_DESTINO = "TURB_ENSAMBLE"
EJE_Y = 8.0   # el ensamble vive en y=8 para no pisar nada

col = bpy.data.collections.get(COL_DESTINO)
if col is None:
    col = bpy.data.collections.new(COL_DESTINO)
    bpy.context.scene.collection.children.link(col)

def limpiar(ob):
    me = ob.data
    bm = bmesh.new(); bm.from_mesh(me)
    bmesh.ops.remove_doubles(bm, verts=list(bm.verts), dist=1e-4)
    bmesh.ops.delete(bm, geom=[v for v in bm.verts if not v.link_edges], context='VERTS')
    bmesh.ops.delete(bm, geom=[e for e in bm.edges if not e.link_faces], context='EDGES')
    bmesh.ops.dissolve_degenerate(bm, dist=1e-5, edges=list(bm.edges))
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    bm.to_mesh(me); bm.free(); me.update()

def dims_bbox(ob):
    pts = [ob.matrix_world @ Vector(c) for c in ob.bound_box]
    mins = [min(p[i] for p in pts) for i in range(3)]
    maxs = [max(p[i] for p in pts) for i in range(3)]
    return [maxs[i] - mins[i] for i in range(3)], mins, maxs

def preparar(nombre, destino_x, destino_r, eje_rev="min", escala_objetivo=None, offset_radial=(0.0, 0.0)):
    """Limpia, orienta eje de revolucion a X, escala, y posiciona en el ensamble.
       destino_r: radio/altura del centro (en YZ), offset_radial desplazamiento extra YZ."""
    ob = bpy.data.objects.get(nombre)
    if ob is None:
        return {"falta": nombre}
    limpiar(ob)
    dims, mins, maxs = dims_bbox(ob)

    # centro actual (mundo) -> mover origen al centroide bbox y transform identity
    centro = Vector(((mins[0]+maxs[0])/2, (mins[1]+maxs[1])/2, (mins[2]+maxs[2])/2))
    me = ob.data
    for v in me.vertices:
        v.co = ob.matrix_world @ v.co - centro
    ob.matrix_world = Matrix.Identity(4)
    me.update()
    dims, _, _ = dims_bbox(ob)

    # orientar eje de revolucion a X
    if eje_rev == "min":
        ax = dims.index(min(dims))
    elif eje_rev == "max":
        ax = dims.index(max(dims))
    else:
        ax = None
    if ax == 1:
        ob.data.transform(Matrix.Rotation(radians(-90), 4, 'Z'))   # Y -> X
    elif ax == 2:
        ob.data.transform(Matrix.Rotation(radians(90), 4, 'Y'))    # Z -> X
    dims, _, _ = dims_bbox(ob)

    # escala uniforme: la dimension del eje (X) al objetivo
    s = 1.0
    if escala_objetivo:
        s = escala_objetivo / max(dims[0], 1e-6)
        me.transform(Matrix.Diagonal(Vector((s, s, s, 1.0))))
        dims, _, _ = dims_bbox(ob)

    # posicionar: centro del eje en X=destino_x, radial en destino_r
    centro_final = Vector((destino_x, EJE_Y + offset_radial[0], offset_radial[1]))
    me.transform(Matrix.Translation(centro_final))
    ob.location = (0, 0, 0)
    for c in list(ob.users_collection):
        c.objects.unlink(ob)
    col.objects.link(ob)
    return {"objeto": ob.name, "escala": round(s, 3), "dims": [round(d, 3) for d in dims],
            "centro": [round(centro_final[i], 3) for i in range(3)],
            "tris": sum(len(p.vertices) - 2 for p in me.polygons)}

informe = {}
informe["fan_case"] = preparar("metal ring with fittings 3d model", -0.62, 0.0, "min", 0.62)
informe["impeller"] = preparar("turbine impeller 3d model", -0.22, 0.0, "min", 0.46)
informe["combustor"] = preparar("turbine engine 3d model.001", 0.10, 0.0, "min", 0.40)
informe["turbine_blisk"] = preparar("turbine rotor 3d model", 0.38, 0.0, "min", 0.46)
informe["gearbox"] = preparar("transmission case 3d model.001", 0.22, 0.0, "max", 0.34, (-0.42, -0.22))

# --- spinner: pieza principal del conical drill bit ---
informe["spinner"] = preparar("conical drill bit 3d model", -0.86, 0.0, "max", 0.32)

# --- fan: aspa master en +Z radial, luego 19 linked duplicates ---
master = bpy.data.objects.get("metal blade 3d model.001")
if master:
    limpiar(master)
    dims, _, _ = dims_bbox(master)
    ax_span = dims.index(max(dims))
    if ax_span == 1:
        master.data.transform(Matrix.Rotation(radians(-90), 4, 'Z'))
    elif ax_span == 2:
        master.data.transform(Matrix.Rotation(radians(-90), 4, 'X'))   # largo -> Z
    dims, _, _ = dims_bbox(master)
    s = 0.22 / max(dims[2], 1e-6)   # span (Z) a 0.22 m
    master.data.transform(Matrix.Diagonal(Vector((s, s, s, 1.0))))
    dims, _, _ = dims_bbox(master)
    # centro del aspa: radial en (0.30+0.22/2), eje X en -0.68
    c0 = Vector((-0.68, EJE_Y, 0.30 + dims[2]/2))
    me = master.data
    xs = [v.co.x for v in me.vertices]; ys = [v.co.y for v in me.vertices]; zs = [v.co.z for v in me.vertices]
    centro_actual = Vector(((min(xs)+max(xs))/2, (min(ys)+max(ys))/2, (min(zs)+max(zs))/2))
    me.transform(Matrix.Translation(c0 - centro_actual))
    for c in list(master.users_collection):
        c.objects.unlink(master)
    col.objects.link(master)
    master.data.materials.append(bpy.data.materials.get("JE_MetalGris") or bpy.data.materials.new("JE_MetalGris"))

    n = 20
    for i in range(1, n):
        dup = master.copy()
        dup.matrix_world = Matrix.Rotation(2*pi*i/n, 4, 'X')
        col.objects.link(dup)
    informe["fan_blades"] = {"master": master.name, "copias": n-1,
                             "tris_master": sum(len(p.vertices)-2 for p in me.polygons)}

# informe global de la coleccion
tris_total = 0; objs = []
for o in col.objects:
    if o.type == 'MESH':
        t = sum(len(p.vertices)-2 for p in o.data.polygons)
        tris_total += t
        objs.append((o.name, t))
result["ensamble"] = {"objetos": len(col.objects), "tris_totales": tris_total}
result["detalle"] = informe
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
