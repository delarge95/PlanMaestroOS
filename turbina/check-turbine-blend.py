import subprocess, json, threading, time, sys, os

env = {**os.environ, "BLENDER_PATH": r"D:\Program Files\Blender Foundation\Blender 5.2\blender.exe"}

CODE = r'''
import bpy
pieces = ["metal ring with fittings 3d model", "metal blade 3d model.001",
          "turbine impeller 3d model", "turbine rotor 3d model",
          "transmission case 3d model.001", "turbine engine 3d model.001",
          "conical drill bit 3d model", "conical drill bit 3d model.002",
          "metal blade 3d model", "turbine engine 3d model",
          "turbine rotor 3d model.001", "transmission case 3d model"]
info = {}
for p in pieces:
    ob = bpy.data.objects.get(p)
    if ob and ob.type == 'MESH':
        me = ob.data
        s = sum(v.co.x + v.co.y + v.co.z for v in me.vertices)
        info[p] = {"verts": len(me.vertices), "caras": len(me.polygons), "huella": round(s, 2)}
result["piezas"] = info
result["total"] = len(bpy.data.objects)
result["todos_meshes"] = sorted([o.name for o in bpy.data.objects if o.type == 'MESH'])[:60]
'''

proc = subprocess.Popen(["uv", "run", "blender-mcp"], stdin=subprocess.PIPE,
    stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, env=env,
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
def send(metodo, params, espera=300):
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
r = send("tools/call", {"name": "execute_blender_code_for_cli", "arguments": {
    "code": CODE, "blend_file": r"D:\mw\Documentos\Blender\Projects\turbine.blend"}}, espera=300)
res = r.get("result", {})
text = next((c["text"] for c in res.get("content", []) if c.get("type") == "text"), "")
print("isError:", res.get("isError", False))
print(text[:2500])
proc.terminate(); proc.wait()
