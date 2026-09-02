import subprocess, json, threading, time, sys

CODE = r'''
import bpy, bmesh, math
from mathutils import Matrix, Vector
from math import pi, sin, cos, radians

for cn in ("TURBINA_N1_silueta", "TURBINA_N2_primitivas"):
    c = bpy.data.collections.get(cn)
    if c: c.hide_viewport = True

def tube_pair(xs, r1s, r2s, seg, caps):
    c1, c2, faces = [], [], []
    apex = r1s[0] == 0 and r2s[0] == 0
    if apex:
        c1.append(Vector((xs[0], 0, 0)))
        c2.append(Vector((xs[0], 0, 0)))
    ini = 1 if apex else 0
    for i in range(ini, len(xs)):
        for s in range(seg):
            ang = 2*pi*s/seg
            c1.append(Vector((xs[i], r1s[i]*sin(ang), r1s[i]*cos(ang))))
            c2.append(Vector((xs[i], r2s[i]*sin(ang), r2s[i]*cos(ang))))
    n_r = len(xs) - (1 if apex else 0)
    off = 1 if apex else 0
    def ring(i):
        return [off + i*seg + s for s in range(seg)]
    for i in range(n_r - 1):
        A, B = ring(i), ring(i+1)
        for s in range(seg):
            faces.append([A[s], A[(s+1)%seg], B[(s+1)%seg], B[s]])
    if apex:
        r0 = ring(0)
        for s in range(seg):
            faces.append([0, r0[(s+1)%seg], r0[s]])
    if caps[0] and not apex:
        faces.append(ring(0)[::-1])
    if caps[1]:
        faces.append(ring(n_r-1))
    return c1, c2, faces

def blades_pair(count, x, p1, p2):
    coords1, coords2, faces = [], [], []
    for i in range(count):
        th = 2*pi*i/count
        rad = Vector((0, sin(th), cos(th)))
        tan = Vector((0, cos(th), -sin(th)))
        base1 = len(coords1); base2 = len(coords2)
        for params, store in ((p1, coords1), (p2, coords2)):
            r0, span, chord, thick, pitch = params
            center = Vector((x, 0, 0)) + rad * (r0 + span/2)
            ch = cos(pitch)*Vector((1,0,0)) + sin(pitch)*tan
            t2 = rad.cross(ch).normalized()
            for a in (-1, 1):
                for b in (-1, 1):
                    for c in (-1, 1):
                        store.append(center + ch*(a*chord/2) + rad*(b*span/2) + t2*(c*thick/2))
        for q in [(0,1,2,3), (4,5,6,7), (0,1,5,4), (1,2,6,5), (2,3,7,6), (3,0,4,7)]:
            faces.append([base1 + v for v in q])
    return coords1, coords2, faces

def mat_simple(name, color, metal=0.85, rough=0.4):
    m = bpy.data.materials.get(name)
    if m is None:
        m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes.get("Principled BSDF")
    b.inputs["Base Color"].default_value = (*color, 1.0)
    b.inputs["Metallic"].default_value = metal
    b.inputs["Roughness"].default_value = rough
    return m

colM = bpy.data.collections.new("TURB_MORFO")
bpy.context.scene.collection.children.link(colM)
colA = bpy.data.collections.new("TURB_N2_addons")
bpy.context.scene.collection.children.link(colA)
gris = mat_simple("JE_MetalGris", (0.58, 0.60, 0.63))
oscuro = mat_simple("JE_MetalOscuro", (0.16, 0.17, 0.19), rough=0.5)
bronce = mat_simple("JE_MetalCalor", (0.45, 0.30, 0.22), rough=0.45)
LOC = Vector((-7, 0, 0))
creados = []

def crear_morfo(nombre, coords1, coords2, faces, mat):
    me = bpy.data.meshes.new(nombre)
    bm = bmesh.new()
    bv = [bm.verts.new(c) for c in coords1]
    for f in faces:
        try: bm.faces.new([bv[i] for i in f])
        except ValueError: pass
    bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.new(nombre, me)
    colM.objects.link(ob); ob.location = LOC
    ob.data.materials.append(mat)
    ob.shape_key_add(name="Basis", from_mix=False)
    sk = ob.shape_key_add(name="N2_detalle", from_mix=False)
    for i, c in enumerate(coords2):
        sk.data[i].co = c
    sk.value = 0.0
    creados.append(nombre)

c1, c2, f = tube_pair([-1.0, -0.88, -0.30, 0.20, 0.62], [0.46, 0.48, 0.46, 0.43, 0.40], [0.50, 0.50, 0.46, 0.43, 0.36], 32, (False, False))
crear_morfo("morfo_nacelle", c1, c2, f, gris)
c1, c2, f = tube_pair([-0.98, -0.90, -0.82, -0.75, -0.70], [0, 0.08, 0.15, 0.21, 0.26], [0, 0.13, 0.205, 0.245, 0.26], 24, (False, False))
crear_morfo("morfo_spinner", c1, c2, f, gris)
c1, c2, f = tube_pair([-0.66, -0.30, 0.10, 0.42, 0.62], [0.28, 0.29, 0.29, 0.29, 0.29], [0.28, 0.245, 0.205, 0.225, 0.33], 32, (True, True))
crear_morfo("morfo_core", c1, c2, f, oscuro)
c1, c2, f = blades_pair(18, -0.66, (0.30, 0.17, 0.12, 0.030, radians(22)), (0.295, 0.215, 0.095, 0.015, radians(38)))
crear_morfo("morfo_fan_blades", c1, c2, f, gris)
c1, c2, f = blades_pair(12, 0.45, (0.225, 0.095, 0.075, 0.022, radians(-35)), (0.225, 0.115, 0.055, 0.011, radians(-42)))
crear_morfo("morfo_turbine_blades", c1, c2, f, bronce)
c1, c2, f = tube_pair([0.62, 0.72, 0.82, 0.95], [0.33, 0.31, 0.28, 0.24], [0.33, 0.30, 0.27, 0.25], 32, (False, False))
crear_morfo("morfo_exhaust", c1, c2, f, bronce)

bm = bmesh.new()
def cone(bm, r1, r2, depth, seg, x=0.0):
    M = Matrix.Translation(Vector((x, 0, 0))) @ Matrix.Rotation(radians(90), 4, 'Y')
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=seg, radius1=r1, radius2=r2, depth=depth, matrix=M)
def cube(bm, size, x, theta=0.0, r=0.0, pitch=0.0, scale=(1,1,1)):
    M = (Matrix.Translation(Vector((x, 0, 0))) @ Matrix.Rotation(theta, 4, 'X')
         @ Matrix.Translation(Vector((0, 0, r))) @ Matrix.Rotation(pitch, 4, 'Y')
         @ Matrix.Diagonal(Vector((scale[0], scale[1], scale[2], 1.0))))
    bmesh.ops.create_cube(bm, size=1.0, matrix=M)
def toro(bm, R, tube, seg, rings, x=0.0):
    prev = None; primero = None
    for i in range(rings):
        a = 2*pi*i/rings
        rad = Vector((0, sin(a), cos(a)))
        ci = Vector((x, 0, 0)) + rad * R
        nuevos = [bm.verts.new(ci + rad*(tube*cos(2*pi*j/seg)) + Vector((tube*sin(2*pi*j/seg), 0, 0))) for j in range(seg)]
        if prev:
            for j in range(seg): bm.faces.new([prev[j], prev[(j+1)%seg], nuevos[(j+1)%seg], nuevos[j]])
        else: primero = nuevos
        prev = nuevos
    for j in range(seg): bm.faces.new([prev[j], prev[(j+1)%seg], primero[(j+1)%seg], primero[j]])

for i in range(24):
    cube(bm, 0.05, x=-0.30, theta=2*pi*i/24, r=0.315, pitch=radians(30), scale=(0.02, 0.30, 0.012))
for i in range(24):
    cube(bm, 0.024, x=-0.98, theta=2*pi*i/24, r=0.465, scale=(0.02, 0.024, 0.024))
for i in range(24):
    cube(bm, 0.024, x=0.08, theta=2*pi*i/24, r=0.40, scale=(0.02, 0.024, 0.024))
toro(bm, 0.20, 0.075, 24, 12, x=0.05)
for i in range(12):
    cube(bm, 0.05, x=0.05, theta=2*pi*i/12, r=0.29, scale=(0.05, 0.03, 0.03))
for i in range(12):
    cube(bm, 0.012, x=0.56, theta=2*pi*i/12 + pi/12, r=0.21, pitch=radians(-40), scale=(0.05, 0.01, 0.04))
cone(bm, 0.07, 0.07, 1.30, 16, x=-0.10)
cube(bm, 0.02, x=0.18, scale=(0.30, 0.24, 0.20))
for gx, gy, gz, gr, gt in [(0.08, -0.13, -0.10, 0.055, 14), (0.24, -0.13, -0.06, 0.038, 10), (0.30, -0.10, 0.02, 0.030, 8)]:
    cone(bm, gr, gr, 0.04, 20, x=gx)
    for i in range(gt):
        cube(bm, 0.015, x=gx, theta=2*pi*i/gt, r=gr+0.012, scale=(0.036, 0.028, 0.028))
cone(bm, 0.055, 0.055, 0.14, 16, x=-0.05)
cone(bm, 0.045, 0.045, 0.12, 16, x=0.38)
cone(bm, 0.018, 0.018, 0.30, 8, x=0.18)
cone(bm, 0.014, 0.014, 0.24, 8, x=0.30)
cube(bm, 0.30, x=-0.55, scale=(0.18, 0.06, 0.30))
cube(bm, 0.30, x=-0.55, scale=(0.18, 0.30, 0.06))
me_a = bpy.data.meshes.new("TURB_N2_addons")
bm.to_mesh(me_a); bm.free(); me_a.update()
ob_a = bpy.data.objects.new("TURB_N2_addons", me_a)
colA.objects.link(ob_a); ob_a.location = LOC
ob_a.data.materials.append(gris)
result["morfos"] = creados
result["addons_tris"] = sum(len(p.vertices) - 2 for p in me_a.polygons)
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
deadline = time.time() + 120
while time.time() < deadline and 2 not in out:
    time.sleep(0.5)
proc.terminate(); proc.wait()

res = out[2].get("result", {})
text = next((c["text"] for c in res.get("content", []) if c.get("type") == "text"), "")
print("isError:", res.get("isError", False))
print(text[:1500])
