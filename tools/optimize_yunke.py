"""
optimize_yunke.py — Optimiza public/cotizador/models/yunke.glb (53MB → <10MB).

Estrategia:
1. Importa el GLB (Blender headless).
2. Conserva SOLO el objeto 'ANVIL LOW POLI' (el yunque con sus 2 shape keys
   'Key 1'/'Key 2'); elimina suelo/planes/cylinders de la escena del curso.
3. Re-escala todas las texturas a máximo 1024px (mantiene aspect ratio).
4. Re-exporta GLB con morph targets (shape keys) intactos.

No se decima la malla del yunque: los modificadores que preservan shape keys
son restrictivos y arriesgados; la reducción real está en las texturas 3K.
"""
import bpy
import os

INPUT = r"E:\Laboral\.worktrees\servicios\public\cotizador\models\yunke.glb"
OUTPUT = r"E:\Laboral\.worktrees\servicios\public\cotizador\models\yunke.glb"
TMP = OUTPUT + ".tmp.glb"
MAX_EDGE = 1024

KEEP_OBJ = "ANVIL LOW POLI"

# ── 1. Importar ──
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=INPUT)

print("=== objetos importados ===")
for o in bpy.context.scene.objects:
    print("  obj:", repr(o.name), "type:", o.type, "has_shape_keys:", bool(o.data and hasattr(o.data, "shape_keys") and o.data.shape_keys))

# ── 2. Conservar solo el yunque con morphs ──
keep = None
for o in list(bpy.context.scene.objects):
    if o.name == KEEP_OBJ:
        keep = o
        continue
    bpy.data.objects.remove(o, do_unlink=True)

if keep is None:
    raise SystemExit("NO se encontró el objeto 'ANVIL LOW POLI'")

# Verificar shape keys del objeto conservado
if keep.data and hasattr(keep.data, "shape_keys") and keep.data.shape_keys:
    print("shape keys:", [kb.name for kb in keep.data.shape_keys.key_blocks])
else:
    print("WARN: el objeto conservado NO tiene shape keys")

# ── 3. Re-escalar texturas a máx 1024 ──
resized = []
for img in bpy.data.images:
    w, h = img.size
    mx = max(w, h)
    if mx <= MAX_EDGE:
        print("  textura", repr(img.name), f"{w}x{h}", "(ya <=1024)")
        continue
    nw = max(1, round(w * MAX_EDGE / mx))
    nh = max(1, round(h * MAX_EDGE / mx))
    img.scale(nw, nh)
    resized.append((img.name, w, h, nw, nh))
    print("  textura", repr(img.name), f"{w}x{h} -> {nw}x{nh}")

# ── 4. Exportar GLB ──
bpy.ops.export_scene.gltf(
    filepath=TMP,
    export_format='GLB',
    export_morph_normal=True,   # preserva normales de morph targets
    export_texcoords=True,
    export_normals=True,
    use_selection=False,
    export_apply=False,         # no aplicar modificadores/transforms (preservar shape keys)
)

# reemplazo atómico
if os.path.exists(TMP):
    os.replace(TMP, OUTPUT)
    print("EXPORTADO:", OUTPUT, os.path.getsize(OUTPUT), "bytes")
else:
    raise SystemExit("export falló: no se generó el archivo temporal")
