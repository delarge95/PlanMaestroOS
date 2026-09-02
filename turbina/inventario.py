import subprocess, json, threading, time, sys

CODE = r'''
import bpy
from mathutils import Vector

def bbox_info(ob):
    pts = [ob.matrix_world @ Vector(c) for c in ob.bound_box]
    mins = [min(p[i] for p in pts) for i in range(3)]
    maxs = [max(p[i] for p in pts) for i in range(3)]
    dims = [maxs[i] - mins[i] for i in range(3)]
    return {
        "dims": [round(d, 3) for d in dims],
        "centro": [round((mins[i] + maxs[i]) / 2, 3) for i in range(3)],
        "min": [round(m, 3) for m in mins], "max": [round(m, 3) for m in maxs],
    }

por_col = {}
for col in bpy.data.collections:
    meshes = [o for o in col.objects if o.type == 'MESH']
    if not meshes: continue
    lista = []
    for o in meshes:
        bb = bbox_info(o)
        lista.append({
            "nombre": o.name,
            "verts": len(o.data.vertices),
            "caras": len(o.data.polygons),
            "tris": sum(len(p.vertices) - 2 for p in o.data.polygons),
            "dims_XYZ": bb["dims"],
            "centro_XYZ": bb["centro"],
        })
    por_col[col.name] = lista

result["colecciones"] = {k: len(v) for k, v in por_col.items()}
result["piezas"] = por_col
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
def send(metodo, params, espera=90):
    nid[0] += 1
    i = nid[0]
    proc.stdin.write(json.dumps({"jsonrpc": "2.0", "id": i, "method": metodo, "params": params}) + "\n")
    proc.stdin.flush()
    deadline = time.time() + espera
    while time.time() < deadline and i not in out:
        time.sleep(0.2)
    return out.get(i, {})

send("initialize", {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "zcode", "version": "0"}})
time.sleep(1.5)
send("notifications/initialized", {})
r = send("tools/call", {"name": "execute_blender_code", "arguments": {"code": CODE}})
res = r.get("result", {})
text = next((c["text"] for c in res.get("content", []) if c.get("type") == "text"), "")
print("isError:", res.get("isError", False))
try:
    j = json.loads(text)
    rr = j.get("result", j)
    print("colecciones:", json.dumps(rr["colecciones"]))
    for colname, piezas in rr["piezas"].items():
        print(f"--- {colname} ({len(piezas)}) ---")
        for p in piezas:
            print(f"  {p['nombre'][:42]:42} | v{p['verts']:5} t{p['tris']:6} | dims {p['dims_XYZ']} | c {p['centro_XYZ']}")
except Exception as e:
    print("raw:", text[:2000])
proc.terminate(); proc.wait()
