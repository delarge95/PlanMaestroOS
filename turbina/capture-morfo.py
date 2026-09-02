import subprocess, json, threading, time, base64, sys

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

def texto(resp):
    return next((c["text"] for c in resp.get("result", {}).get("content", []) if c.get("type") == "text"), "")

send("initialize", {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "zcode", "version": "0"}})
time.sleep(1.5)
send("notifications/initialized", {})

CODE_SET = '''
import bpy
val = __VALOR__
for ob in bpy.data.collections["TURB_MORFO"].objects:
    for sk in ob.data.shape_keys.key_blocks:
        if sk.name == "N2_detalle":
            sk.value = val
colA = bpy.data.collections["TURB_N2_addons"]
for ob in colA.objects:
    try: ob.hide_set(val == 0.0)
    except Exception: pass
bpy.context.view_layer.update()
result["aplicado"] = val
'''
CODE_READ = '''
import bpy
vals = [sk.value for ob in bpy.data.collections["TURB_MORFO"].objects
        for sk in ob.data.shape_keys.key_blocks if sk.name == "N2_detalle"]
vis = [not ob.hide_get() for ob in bpy.data.collections["TURB_N2_addons"].objects]
result["keys"] = vals
result["addons_visibles"] = vis
'''
CODE_VISTA = '''
import bpy
try: bpy.ops.object.mode_set(mode='OBJECT')
except Exception: pass
for w in bpy.context.window_manager.windows:
    for a in w.screen.areas:
        if a.type == 'VIEW_3D':
            for s in a.spaces:
                if s.type == 'VIEW_3D' and s.region_3d:
                    s.region_3d.view_location = (-7.0, 0.0, 0.0)
                    s.region_3d.view_distance = 4.5
result["vista"] = True
'''

for valor, archivo in ((0.0, "morfo-N1.png"), (1.0, "morfo-N2.png")):
    r = texto(send("tools/call", {"name": "execute_blender_code", "arguments": {"code": CODE_SET.replace("__VALOR__", repr(valor))}}))
    r2 = texto(send("tools/call", {"name": "execute_blender_code", "arguments": {"code": CODE_READ}}))
    send("tools/call", {"name": "execute_blender_code", "arguments": {"code": CODE_VISTA}})
    time.sleep(1.0)
    send("tools/call", {"name": "get_screenshot_of_window_as_image", "arguments": {}})
    if "aplicado" not in r or "keys" not in r2:
        print(f"estado {valor}: SIN CONFIRMACION — {r[:120]} | {r2[:120]}")
        continue
    rr = json.loads(r2)
    rr = rr.get("result", rr)
    print(f"estado {valor}: keys={set(rr['keys'])} addons_visibles={set(rr['addons_visibles'])}")
    resp = out.get(nid[0], {})
    for c in resp.get("result", {}).get("content", []):
        if c.get("type") == "image":
            open(rf"E:\Laboral\turbina\{archivo}", "wb").write(base64.b64decode(c["data"]))
            print("  captura:", archivo)

proc.terminate(); proc.wait()
print("listo")
