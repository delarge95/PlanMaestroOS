import subprocess, json, threading, time, base64, sys

PIEZAS = [
    ("blade",      Vector3 := (-0.058, 0.569, 0.298), "metal blade 3d model.001"),
    ("fancase",    (1.918, 0.0, 0.251),               "metal ring with fittings 3d model"),
    ("impeller",   (0.0, 0.0, 0.386),                 "turbine impeller 3d model"),
    ("turbeng",    (0.0, 3.584, 0.477),               "turbine engine 3d model.001"),
    ("rotor",      (0.0, 0.779, 0.33),                "turbine rotor 3d model"),
    ("transm",     (0.0, -3.471, 0.411),              "transmission case 3d model.001"),
    ("spinner",    (-2.226, -0.008, 0.353),           "conical drill bit 3d model"),
]

CODE_FRAME = '''
import bpy
from mathutils import Vector
target = Vector(__POS__)
ob = None
for o in bpy.context.scene.objects:
    if o.type == 'MESH':
        pts = [o.matrix_world @ Vector(c) for c in o.bound_box]
        c = sum(pts, Vector()) / 8
        if (c - target).length < 0.6:
            ob = o
            break
try: bpy.ops.object.mode_set(mode='OBJECT')
except Exception: pass
for w in bpy.context.window_manager.windows:
    for a in w.screen.areas:
        if a.type == 'VIEW_3D':
            for s in a.spaces:
                if s.type == 'VIEW_3D' and s.region_3d:
                    s.region_3d.view_location = target
                    s.region_3d.view_distance = 2.6
result["objeto_cercano"] = ob.name if ob else "ninguno"
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

for tag, pos, nombre in PIEZAS:
    code = CODE_FRAME.replace("__POS__", f"({pos[0]}, {pos[1]}, {pos[2]})")
    r = send("tools/call", {"name": "execute_blender_code", "arguments": {"code": code}})
    time.sleep(0.6)
    r3 = send("tools/call", {"name": "get_screenshot_of_window_as_image", "arguments": {}})
    saved = False
    for c in r3.get("result", {}).get("content", []):
        if c.get("type") == "image":
            open(rf"E:\Laboral\turbina\id-{tag}.png", "wb").write(base64.b64decode(c["data"]))
            saved = True
    print(tag, "->", "capturada" if saved else "FALLO")

proc.terminate(); proc.wait()
print("listo")
