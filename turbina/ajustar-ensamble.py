import subprocess, json, threading, time, base64, sys

CODE = r'''
import bpy, bmesh
from mathutils import Vector

def fijar_normales(ob):
    """recalc consistencia + volteo por shell segun volumen firmado (determinista)"""
    me = ob.data
    bm = bmesh.new(); bm.from_mesh(me)
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    bm.to_mesh(me); bm.free(); me.update()

    bm = bmesh.new(); bm.from_mesh(me)
    bm.verts.ensure_lookup_table()
    comp = {v: -1 for v in bm.verts}
    shells = []
    for v in bm.verts:
        if comp[v] != -1: continue
        idx = len(shells); pila = [v]; miem = []
        comp[v] = idx
        while pila:
            cur = pila.pop(); miem.append(cur)
            for e in cur.link_edges:
                o = e.other_vert(cur)
                if comp[o] == -1: comp[o] = idx; pila.append(o)
        shells.append(miem)
    caras_shell = {i: [] for i in range(len(shells))}
    for f in bm.faces:
        votes = [comp[v] for v in f.verts]
        caras_shell[max(set(votes), key=votes.count)].append(f)
    volteadas = 0
    for i, miem in enumerate(shells):
        caras = caras_shell[i]
        if not caras: continue
        v = 0.0
        for f in caras:
            vs = list(f.verts)
            for k in range(1, len(vs)-1):
                v += vs[0].co.dot(vs[k].co.cross(vs[k+1].co))
        if v < 0:
            for f in caras: f.normal_flip()
            volteadas += 1
    bm.to_mesh(me); bm.free(); me.update()
    return volteadas

# posiciones objetivo (centro en X) tras ver el solape combustor/turbina
POSICIONES = {
    "conical drill bit 3d model":        -0.86,
    "metal ring with fittings 3d model": -0.58,
    "turbine impeller 3d model":         -0.20,
    "turbine engine 3d model.001":        0.10,
    "turbine rotor 3d model":             0.46,
}
col = bpy.data.collections["TURB_ENSAMBLE"]
informe = {}

# mover a posicion y fijar normales
for ob in list(col.objects):
    if ob.name in POSICIONES:
        blanco = POSICIONES[ob.name]
        pts = [ob.matrix_world @ Vector(c) for c in ob.bound_box]
        mins = [min(p[i] for p in pts) for i in range(3)]
        maxs = [max(p[i] for p in pts) for i in range(3)]
        centro = Vector(((mins[0]+maxs[0])/2, (mins[1]+maxs[1])/2, (mins[2]+maxs[2])/2))
        delta = Vector((blanco, 0, 0)) - Vector((centro.x, 0, 0))
        ob.location = ob.location + delta
    volteadas = fijar_normales(ob)
    if volteadas:
        informe[ob.name] = f"normales: {volteadas} shells volteadas"

result["posiciones_aplicadas"] = list(POSICIONES.keys())
result["normales"] = informe

# estado final de centros X
finales = {}
for ob in col.objects:
    if ob.type != 'MESH': continue
    pts = [ob.matrix_world @ Vector(c) for c in ob.bound_box]
    xc = sum(p.x for p in pts) / 8
    finales[ob.name] = round(xc, 3)
result["centros_x"] = dict(sorted(finales.items(), key=lambda kv: kv[1]))
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
print(text[:1800])

# captura lateral final
r3 = send("tools/call", {"name": "get_screenshot_of_window_as_image", "arguments": {}})
for c in r3.get("result", {}).get("content", []):
    if c.get("type") == "image":
        open(r"E:\Laboral\turbina\ensamble-final.png", "wb").write(base64.b64decode(c["data"]))
        print("captura final guardada")
proc.terminate(); proc.wait()
