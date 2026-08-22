# Modelos anatómicos 3D (AG-ANATOM)

Fuente: `_pdf_biblia/Planeacion_Integral/3D assets/` (copiados sin re-exportar — regla de la ficha §3.2B).

| Archivo | Peso | Contenido | Nombres anatómicos en |
|---|---|---|---|
| `overview-skeleton.glb` | 3.26 MB | Esqueleto completo (144 piezas: cráneo, C1–Coccyx, costillas, extremidades derechas) | nodos |
| `vertebrae.glb` | 0.20 MB | Vértebras C4, T7, L3 aisladas | nodos |
| `colored-skull-base.glb` | 1.10 MB | Cráneo 29 piezas coloreadas | nodos |
| `overview-colored-skull.glb` | 1.08 MB | Variante overview del cráneo coloreado | nodos |
| `exploded-skull.glb` | 1.15 MB | Cráneo "explosionado" (piezas ya desplazadas en el archivo) | nodos |
| `hand.glb` | 3.10 MB | Mano derecha: huesos + intrínsecos + vainas tendinosas | meshes |
| `upper-limb.glb` | 6.59 MB | Miembro superior derecho: huesos, músculos por cabezas, tendones, nervios, ligamentos, arterias | meshes |
| `lower-limb.glb` | 5.90 MB | Miembro inferior derecho: huesos, músculos, tendones, nervios | meshes |

## Requisitos de carga (visor)

- **Todos los modelos requieren decodificador Draco** (`KHR_draco_mesh_compression` es `extensionsRequired`). El visor usa `DRACOLoader` de three con decoder servido desde CDN (`www.gstatic.com/draco/v1/decoders/`) — ver `src/components/fitness/anatomy/AnatomyViewer.tsx`.
- `upper-limb`/`lower-limb`/`hand` usan además extensiones PBR (`KHR_materials_clearcoat`, `KHR_materials_specular`, `KHR_materials_ior`, `KHR_materials_transmission` en lower-limb); three las soporta de forma nativa vía `GLTFLoader` (se degradan con gracia si el dispositivo no las renderiza).

## Optimización

- Todos < 7 MB y ya Draco-comprimidos: sin acción este ciclo.
- PENDIENTE documentado: si el rendimiento mobile sufre con `upper-limb` (532 primitivas), evaluar `gltf-transform` (merge de primitivas por material + `KHR_texture_transform`) o re-exportar sin arterias/venas. No re-modelar (regla ficha §3.2B).
