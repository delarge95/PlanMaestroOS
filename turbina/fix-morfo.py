import subprocess, json, threading, time, base64, sys

CODE = r'''
import bpy, bmesh

# 1) excluir colecciones viejas de la view layer
for cn in ("TURBINA_N1_silueta", "TURBINA_N2_primitivas"):
    c = bpy.data.collections.get(cn)
    if c:
        c.hide_viewport = True
        lc = bpy.context.view_layer.layer_collection.children.get(cn)
        if lc: lc.exclude = True

# 2) normales correctas en los morfos (volumenes simples: recalc determinista)
for ob in bpy.data.collections["TURB_MORFO"].objects:
    bm = bmesh.new(); bm.from_mesh(ob.data)
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    bm.to_mesh(ob.data); bm.free()

# 3) normales del addon N2 (toro y demas)
ob_a = bpy.data.objects.get("TURB_N2_addons")
if ob_a:
    bm = bmesh.new(); bm.from_mesh(ob_a.data)
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    bm.to_mesh(ob_a.data); bm.free()

# 4) estado del slider a N2 completo
for ob in bpy.data.collections["TURB_MORFO"].objects:
    for sk in ob.data.shape_keys.key_blocks:
        if sk.name == "N2_detalle":
            sk.value = 1.0
for ob in bpy.data.collections["TURB_N2_addons"].objects:
    try: ob.hide_set(False)
    except Exception: pass
try:
    bpy.ops.object.mode_set(mode='OBJECT')
except Exception:
    pass
for w in bpy.context.window_manager.windows:
    for a in w.screen.areas:
        if a.type == 'VIEW_3D':
            for s in a.spaces:
                if s.type == 'VIEW_3D' and s.region_3d:
                    s.region_3d.view_location = (-7.0, 0.0, 0.0)
                    s.region_3d.view_distance = 4.5
result["fix"] = "ok"
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
def send(o):
    proc.stdin.write(json.dumps(o) + "\n")
    proc.stdin.flush()

send({"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "zcode", "version": "0"}}})
time.sleep(2)
send({"jsonrpc": "2.0", "method": "notifications/initialized"})
send({"jsonrpc": "2.0", "id": 2, "method": "tools/call", "params": {"name": "execute_blender_code", "arguments": {"code": CODE}}})
time.sleep(3)
send({"jsonrpc": "2.0", "id": 3, "method": "tools/call", "params": {"name": "get_screenshot_of_window_as_image", "arguments": {}}})
deadline = time.time() + 60
while time.time() < deadline and 3 not in out:
    time.sleep(0.5)
proc.terminate(); proc.wait()

res = out.get(2, {}).get("result", {})
text = next((c["text"] for c in res.get("content", []) if c.get("type") == "text"), "")
print("fix:", text[:200])
res3 = out.get(3, {}).get("result", {})
saved = False
for c in res3.get("content", []):
    if c.get("type") == "image":
        open(r"E:\Laboral\turbina\morfo-N2-fix.png", "wb").write(base64.b64decode(c["data"]))
        saved = True
if saved:
    from PIL import Image
    im = Image.open(r"E:\Laboral\turbina\morfo-N2-fix.png").convert("RGB")
    rojos = sum(1 for p in im.getdata() if p[0] > 180 and p[1] < 130 and p[2] < 130)
    print(f"pixeles rojos en ventana: {rojos}")
else:
    print("sin captura")
