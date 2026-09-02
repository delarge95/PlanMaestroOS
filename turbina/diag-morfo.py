import subprocess, json, threading, time, sys

CODE = r'''
import bpy
cols = {}
for c in bpy.data.collections:
    objs = [o.name for o in c.objects]
    cols[c.name] = {"n": len(objs), "objetos": objs[:8], "usuarios": c.users}

def info(nombre):
    ob = bpy.data.objects.get(nombre)
    if ob is None: return "NO EXISTE"
    d = ob.data
    return {"verts": len(d.vertices), "caras": len(d.polygons),
            "shape_keys": [k.name for k in d.shape_keys.key_blocks] if d.shape_keys else []}

result["colecciones"] = cols
result["morfo_turbine_blades"] = info("morfo_turbine_blades")
result["morfo_turbine_blades_dup"] = info("morfo_turbine_blades.001")
result["morfo_fan_blades"] = info("morfo_fan_blades")
result["morfo_fan_blades_dup"] = info("morfo_fan_blades.001")
result["total_objetos_escena"] = len(bpy.context.scene.objects)
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
try:
    j = json.loads(text)
    rr = j.get("result", j)
    print("colecciones:")
    for k, v in rr["colecciones"].items():
        print(f"  {k}: n={v['n']} usuarios={v['usuarios']} {v['objetos'][:4]}")
    for k in ("morfo_turbine_blades", "morfo_turbine_blades_dup", "morfo_fan_blades", "morfo_fan_blades_dup"):
        print(k, "->", rr[k])
    print("total objetos escena:", rr["total_objetos_escena"])
except Exception as e:
    print("parse fail:", e)
    print(text[:1500])
proc.terminate(); proc.wait()
