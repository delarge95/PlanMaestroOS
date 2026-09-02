import subprocess, json, threading, time, base64, sys

CODE = r'''
import bpy, bmesh
from mathutils import Matrix, Vector
from math import pi, sin, cos, radians

def vol_sign(verts_pos, faces):
    v = 0.0
    for f in faces:
        vs = [verts_pos[i] for i in f]
        for k in range(1, len(vs) - 1):
            v += vs[0].dot(vs[k].cross(vs[k+1]))
    return v / 6.0

def blade_matrix(x, theta, r0, span, pitch_deg, chord, thick):
    return (Matrix.Translation(Vector((x, 0, 0))) @ Matrix.Rotation(theta, 4, 'X')
            @ Matrix.Translation(Vector((0, 0, r0 + span/2))) @ Matrix.Rotation(radians(pitch_deg), 4, 'Y')
            @ Matrix.Diagonal(Vector((chord, thick, span, 1.0))))

def cubo_coords(matrix):
    tb = bmesh.new()
    bmesh.ops.create_cube(tb, size=1.0, matrix=matrix)
    tb.verts.ensure_lookup_table()
    coords = [v.co.copy() for v in tb.verts]
    faces = []
    tb.faces.ensure_lookup_table()
    for f in tb.faces:
        faces.append(tuple(v.index for v in f.verts))
    tb.free()
    return coords, faces

def reconstruir(nombre, count, x, p1, p2, mat):
    viejo = bpy.data.objects.get(nombre)
    if viejo:
        me_v = viejo.data
        bpy.data.objects.remove(viejo, do_unlink=True)
        if me_v.users == 0: bpy.data.meshes.remove(me_v)

    c1, c2, faces, notas = [], [], [], []
    for i in range(count):
        theta = 2*pi*i/count
        cc1, fc = cubo_coords(blade_matrix(x, theta, *p1))
        cc2, _ = cubo_coords(blade_matrix(x, theta, *p2))
        v1 = vol_sign(cc1, fc)
        v2 = vol_sign(cc2, fc)
        if v1 * v2 < 0:
            # aspa del key con handedness opuesta: rotar el pitch 180 grados
            cc2, _ = cubo_coords(blade_matrix(x, theta, p2[0], p2[1], p2[2] + 180, p2[3], p2[4]))
            v2 = vol_sign(cc2, fc)
            notas.append(f"aspa {i}: pitch+180 (hand)")
        off = len(c1)
        c1.extend(cc1)
        c2.extend(cc2)
        faces.extend([[off + vi for vi in f] for f in fc])

    col = bpy.data.collections["TURB_MORFO"]
    me = bpy.data.meshes.new(nombre)
    bm = bmesh.new()
    bv = [bm.verts.new(c) for c in c1]
    for f in faces:
        try: bm.faces.new([bv[i] for i in f])
        except ValueError: pass
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    bm.to_mesh(me); bm.free(); me.update()
    ob = bpy.data.objects.new(nombre, me)
    col.objects.link(ob); ob.location = Vector((-7, 0, 0))
    if mat: me.materials.append(mat)
    ob.shape_key_add(name="Basis", from_mix=False)
    sk = ob.shape_key_add(name="N2_detalle", from_mix=False)
    for i, c in enumerate(c2):
        sk.data[i].co = c
    sk.value = 1.0

    # verificacion final: mismo signo de volumen en Basis y en el key
    bm2 = bmesh.new(); bm2.from_mesh(me)
    ok = mal = 0
    nb = 6
    for i in range(count):
        fcs_locales = [[vi - i*8 for vi in f] for f in faces[i*nb:(i+1)*nb]]
        v_basis = vol_sign(c1[i*8:(i+1)*8], fcs_locales)
        v_key = vol_sign([sk.data[i*8 + j].co for j in range(8)], fcs_locales)
        if v_basis * v_key > 0: ok += 1
        else: mal += 1
    bm2.free()
    return {"blades": count, "handedness_ok": ok, "mal": mal, "notas": notas}

gris = bpy.data.materials.get("JE_MetalGris")
oscuro = bpy.data.materials.get("JE_MetalOscuro")
r1 = reconstruir("morfo_fan_blades", 18, -0.66,
                 (0.30, 0.17, 22, 0.12, 0.030),
                 (0.295, 0.215, 38, 0.095, 0.015), gris)
r2 = reconstruir("morfo_turbine_blades", 12, 0.45,
                 (0.225, 0.095, -35, 0.075, 0.022),
                 (0.225, 0.115, -42, 0.055, 0.011), bronce if (bronce := bpy.data.materials.get("JE_MetalCalor")) else oscuro)
result["fan"] = r1
result["turbine"] = r2
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
print("isError:", res.get("isError", False))
print(text[:1500])
proc.terminate(); proc.wait()
