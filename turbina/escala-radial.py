import subprocess, json, threading, time, base64, sys

CODE = r'''
import bpy, bmesh
from mathutils import Matrix, Vector

# (nombre, diametro_objetivo) — escala uniforme para que max(Y,Z) = diametro
DIAMETROS = {
    "metal ring with fittings 3d model": 1.20,
    "turbine impeller 3d model": 0.46,
    "turbine engine 3d model.001": 0.40,
    "turbine rotor 3d model": 0.46,
}
result = {}
col = bpy.data.collections["TURB_ENSAMBLE"]
for nombre, diam in DIAMETROS.items():
    ob = bpy.data.objects.get(nombre)
    if ob is None:
        result[nombre] = "NO ESTA"; continue
    pts = [ (ob.matrix_world @ v.co) for v in ob.data.vertices ]
    ys = [p.y for p in pts]; zs = [p.z for p in pts]
    radial = max(max(ys) - min(ys), max(zs) - min(zs))
    s = diam / max(radial, 1e-6)
    ob.data.transform(Matrix.Diagonal(Vector((s, s, s, 1.0))))
    pts = [ (ob.matrix_world @ v.co) for v in ob.data.vertices ]
    xs = [p.x for p in pts]
    result[nombre] = {"escala": round(s, 3), "diam_final": round(max(max(p.y for p in pts)-min(p.y for p in pts), max(p.z for p in pts)-min(p.z for p in pts)), 3), "largo_x": round(max(xs)-min(xs), 3)}
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
def send(metodo, params, espera=120):
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
print(text[:800])

# captura lateral
r3 = send("tools/call", {"name": "get_screenshot_of_window_as_image", "arguments": {}})
for c in r3.get("result", {}).get("content", []):
    if c.get("type") == "image":
        open(r"E:\Laboral\turbina\escala-final.png", "wb").write(base64.b64decode(c["data"]))
        print("captura guardada")
proc.terminate(); proc.wait()
