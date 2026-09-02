import subprocess, json, threading, time, sys

CODE = r'''
import bpy
from mathutils import Vector
ob = bpy.data.objects.get("morfo_fan_blades")
me = ob.data
xs = [v.co.x for v in me.vertices]
ys = [v.co.y for v in me.vertices]
zs = [v.co.z for v in me.vertices]
bbox = {"min": [round(min(xs),3), round(min(ys),3), round(min(zs),3)],
        "max": [round(max(xs),3), round(max(ys),3), round(max(zs),3)]}
sk = me.shape_keys.key_blocks["N2_detalle"]
xs2 = [c.co.x for c in sk.data]
ys2 = [c.co.y for c in sk.data]
zs2 = [c.co.z for c in sk.data]
bbox2 = {"min": [round(min(xs2),3), round(min(ys2),3), round(min(zs2),3)],
         "max": [round(max(xs2),3), round(max(ys2),3), round(max(zs2),3)]}
primeros = [tuple(round(c, 3) for c in v.co) for v in me.vertices[:8]]
primeros_key = [(round(c.co.x,3), round(c.co.y,3), round(c.co.z,3)) for c in sk.data[:8]]
result["bbox_basis"] = bbox
result["bbox_key"] = bbox2
result["primeros_8_basis"] = primeros
result["primeros_8_key"] = primeros_key
result["loc"] = list(ob.location)
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
print(text[:1200])
proc.terminate(); proc.wait()
