import subprocess, json, threading, time, base64

CODE_VISTA = '''
import bpy
from math import radians
from mathutils import Euler
try: bpy.ops.object.mode_set(mode='OBJECT')
except Exception: pass
for w in bpy.context.window_manager.windows:
    for a in w.screen.areas:
        if a.type == 'VIEW_3D':
            for s in a.spaces:
                if s.type == 'VIEW_3D' and s.region_3d:
                    s.region_3d.view_location = (-0.3, 8.0, 0.0)
                    s.region_3d.view_distance = __DIST__
                    s.region_3d.view_rotation = Euler((__EULER__)).to_quaternion()
result["ok"] = True
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

VISTAS = [
    ("ensamble-lateral.png", "(radians(90), 0, 0)", 3.6),          # vista lateral (a lo largo de Y)
    ("ensamble-frontal.png", "(radians(90), 0, radians(90))", 3.6) # vista frontal (a lo largo de X)
]
for archivo, euler, dist in VISTAS:
    code = CODE_VISTA.replace("__DIST__", str(dist)).replace("__EULER__", euler)
    send("tools/call", {"name": "execute_blender_code", "arguments": {"code": code}})
    time.sleep(1.2)
    r3 = send("tools/call", {"name": "get_screenshot_of_window_as_image", "arguments": {}})
    saved = False
    for c in r3.get("result", {}).get("content", []):
        if c.get("type") == "image":
            open(rf"E:\Laboral\turbina\{archivo}", "wb").write(base64.b64decode(c["data"]))
            saved = True
    print(archivo, "->", "ok" if saved else "fallo")

proc.terminate(); proc.wait()
