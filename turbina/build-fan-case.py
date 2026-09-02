import subprocess, json, threading, time, base64

CODE = r'''
import bpy, bmesh, math
from mathutils import Vector
from math import pi, sin, cos

perfil = [
    (0.02, 0.525), (0.005, 0.545), (-0.008, 0.565), (-0.022, 0.583),
    (-0.038, 0.595), (-0.052, 0.600), (-0.070, 0.598), (-0.120, 0.592),
    (-0.250, 0.588), (-0.400, 0.583), (-0.520, 0.578), (-0.600, 0.572),
    (-0.615, 0.560), (-0.615, 0.548), (-0.520, 0.553), (-0.400, 0.558),
    (-0.250, 0.562), (-0.120, 0.567), (-0.030, 0.560), (0.000, 0.545),
]
SEG = 48

m = bpy.data.materials.get("JE_TitanioCepillado")
if m is None:
    m = bpy.data.materials.new("JE_TitanioCepillado"); m.use_nodes = True
b = m.node_tree.nodes.get("Principled BSDF")
b.inputs["Base Color"].default_value = (0.60, 0.61, 0.63, 1.0)
b.inputs["Metallic"].default_value = 1.0
b.inputs["Roughness"].default_value = 0.28

bm = bmesh.new()
anillos = []
for (px, pr) in perfil:
    anillo = [bm.verts.new(Vector((px, pr*sin(2*pi*s/SEG), pr*cos(2*pi*s/SEG)))) for s in range(SEG)]
    anillos.append(anillo)
n = len(anillos)
for i in range(n):
    a, b2 = anillos[i], anillos[(i+1) % n]
    for s in range(SEG):
        bm.faces.new([a[s], a[(s+1)%SEG], b2[(s+1)%SEG], b2[s]])
bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))

me = bpy.data.meshes.new("pieza_fan_case")
bm.to_mesh(me); bm.free()
for p in me.polygons: p.use_smooth = True
me.update()

col = bpy.data.collections.get("TURB_PIEZAS_PROCEDURALES")
if col is None:
    col = bpy.data.collections.new("TURB_PIEZAS_PROCEDURALES")
    bpy.context.scene.collection.children.link(col)
ob = bpy.data.objects.new("pieza_fan_case", me)
col.objects.link(ob)
ob.location = (0, -5, 0)
me.materials.append(m)

for w in bpy.context.window_manager.windows:
    for a in w.screen.areas:
        if a.type == 'VIEW_3D':
            for s in a.spaces:
                if s.type == 'VIEW_3D' and s.region_3d:
                    s.region_3d.view_location = ob.location
                    s.region_3d.view_distance = 1.8
try: bpy.ops.object.mode_set(mode='OBJECT')
except Exception: pass

result["tris"] = sum(len(p.vertices) - 2 for p in me.polygons)
result["objeto"] = ob.name
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
print(text[:300])
r3 = send("tools/call", {"name": "get_screenshot_of_window_as_image", "arguments": {}})
saved = False
for c in r3.get("result", {}).get("content", []):
    if c.get("type") == "image":
        open(r"E:\Laboral\turbina\fan-case-procedural.png", "wb").write(base64.b64decode(c["data"]))
        saved = True
print("captura:", saved)
proc.terminate(); proc.wait()
