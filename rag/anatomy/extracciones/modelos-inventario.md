# Inventario de modelos GLB — capa anatómica (ciclo 3, runtime names)

> Generado por `rag/anatomy/scripts/inventory-glb.mjs`. Fuente: `public/models/anatomy/`.
> **Los nombres listados son RUNTIME**: tal como el visor (three.js GLTFLoader)
> los nombra — `sanitizeNodeName` (espacios→`_`, sin `.:/[]`) + `createUniqueName`
> (sufijo `_N` en colisiones). El nombre del NODO prevalece siempre sobre el del
> meshDef (todos los nodos de estos GLB tienen nombre y 1 primitiva por mesh).

## Resumen

| Modelo | Peso | Nodos GLB | MeshDefs | Nombres runtime | Con geometría | Aux | Lat .r/.l | Raíces de categoría | Draco |
|---|---|---|---|---|---|---|---|---|---|
| colored-skull-base | 1.10 MB | 30 | 29 | 30 | 29 | 0 | 0/0 | Bones | sí |
| exploded-skull | 1.15 MB | 30 | 29 | 30 | 29 | 0 | 0/0 | Bones | sí |
| hand | 3.10 MB | 235 | 223 | 235 | 223 | 0 | 0/0 | Bones, Bursae, Muscles, Fascia, Overlays, Cartilages, Ligaments, Veins, Arteries, Nerves | sí |
| lower-limb | 5.90 MB | 462 | 452 | 462 | 452 | 0 | 1/0 | Bones, Cartilages, Ligaments, Muscles, Fascia, Arteries, Veins, Nerves, Bursae, Overlays | sí |
| overview-colored-skull | 1.08 MB | 31 | 29 | 31 | 29 | 0 | 0/0 | Bones, Bones_right | sí |
| overview-skeleton | 3.26 MB | 147 | 144 | 147 | 144 | 0 | 0/0 | Bones, Bones_right, Cartilages_right | sí |
| upper-limb | 6.59 MB | 575 | 532 | 575 | 532 | 0 | 0/0 | Back - bones, Arm - bones, Arm - muscles, Arm - nerves, Arm - veins, Arm - arteries, Arm - capsules, ligaments, fasciae, Arm - cartilages, Arm - synovia, bursae, Back - cartilages, Forearm - arteries, Forearm - bones, Forearm - capsules, ligaments, fasciae, Forearm - cartilages, Forearm - muscles, Forearm - nerves, Forearm - synovia, bursae, Forearm - veins, Hand and wrist - arteries, Hand and wrist - bones, Hand and wrist - capsules, ligaments, fasciae, Hand and wrist - cartilages, Hand and wrist - synovia, bursae, Hand and wrist - muscles, Hand and wrist - nerves, Hand and wrist - veins, Head and neck - arteries, Head and neck - bones, Head and neck - cartilages, Head and neck - nerves, Pectoral girdle - arteries, Pectoral girdle - bones, Pectoral girdle - capsules, ligaments, fasciae, Pectoral girdle - cartilages, Pectoral girdle - muscles, Pectoral girdle - nerves, Pectoral girdle - synovia, bursae, Pectoral girdle - veins, Thorax - arteries, Thorax - bones, Thorax - cartilages, Thorax - nerves, Thorax - veins | sí |
| vertebrae | 0.20 MB | 4 | 3 | 4 | 3 | 0 | 0/0 | Bones | sí |

## Convención de nombres por GLB

- **colored-skull-base** — Nodos Title Case en plural ("Temporal bones"); pares laterales como "Parietal bone.l/.r"; dientes "Upper/Lower …"; raíz única "Bones". meshDefs sin nombre anatómico ("mesh.NNN") — irrelevante en runtime.
- **exploded-skull** — Igual que colored-skull-base (misma nomenclatura, piezas separadas radialmente de fábrica). Raíz "Bones".
- **hand** — Sin lateralidad (pieza única derecha); músculos intrínsecos y vainas tendinosas con nombre completo ("Extensor pollicis longus tendon sheath"); nervios como prefijo "Median nerve …". Raíces de categoría: Bones/Muscles/…/Overlays.
- **lower-limb** — Lateralidad ".r" en casi todo; músculos por cabezas ("Lateral head of gastrocnemius.r"); bursas bajo raíz "Bursae" (sus meshDefs se llaman "Circle.NNN" — basura de Blender, en runtime heredan el nombre del nodo); raíces Bones/Cartilages/Ligaments/Muscles/Fascia/Arteries/Veins/Nerves/Bursae/Overlays.
- **overview-colored-skull** — Variante overview: lateralidad sufijo ".r" en piezas únicas ("Temporal bone.r", "Maxilla bone.r"); raíces "Bones"/"Bones_right".
- **overview-skeleton** — Lateralidad ".r" ("Femur.r"); vértebras en plural con nivel entre paréntesis ("Thoracic vertebrae (T7)"); parietales "Parietal bone left/right"; raíces "Bones"/"Bones_right"/"Cartilages_right".
- **upper-limb** — Lateralidad ".r"; músculos por partes ("Clavicular head of pectoralis major muscle.r", "Ascending part of Trapezius muscle.r"); raíces regionales "Arm - muscles", "Forearm - bones", "Hand and wrist - nerves"… (categoría tras el guion); plejos y raíces nerviosas ("C5 root.r", "Lateral cord of brachial plexus.r").
- **vertebrae** — Solo 3 piezas aisladas: "Cervical vertebra (C4)", "Thoracic vertebra (T7)", "Lumbar vertebra (L3)" + raíz "Bones".

## Correcciones sobre el inventario del ciclo 2

- El parser anterior leía `meshes[].name`: en cráneos/vertebrae los meshDefs no
  llevan nombre anatómico → "0 meshes"; en overview-skeleton un único meshDef
  "mesh". **Los nombres reales están en `nodes[].name`** y este inventario los
  recoge (sanitizados como en runtime).
- Los "43 meshes Circle.NNN" de lower-limb NO son piezas de relleno en la escena:
  son los meshDefs de las **bursas** (nodos correctamente nombrados bajo la raíz
  "Bursae"). En runtime ningún objeto se llama "Circle.NNN". La regla `aux` del
  catálogo queda como defensa ante geometría helper que sí llegue nombrada.
- El grafo (`modelMeshes`) del ciclo 2 usaba nombres crudos con espacios/puntos
  ("Temporal bones", "Flexor retinaculum of ankle") que en runtime no existen →
  remapeo a nombres runtime en `rag/anatomy/scripts/remap.ts` (tarea 3).

## Detalle por modelo

### colored-skull-base

- Nombres runtime: **30** (con geometría: 30 aproximados por contenedor) · aux: 0
- Raíces de categoría y nº de nodos: Bones(30)

### exploded-skull

- Nombres runtime: **30** (con geometría: 30 aproximados por contenedor) · aux: 0
- Raíces de categoría y nº de nodos: Bones(30)

### hand

- Nombres runtime: **235** (con geometría: 235 aproximados por contenedor) · aux: 0
- Raíces de categoría y nº de nodos: Bones(31), Bursae(2), Muscles(52), Fascia(4), Overlays(27), Cartilages(16), Ligaments(46), Veins(19), Arteries(21), Nerves(17)

### lower-limb

- Nombres runtime: **462** (con geometría: 462 aproximados por contenedor) · aux: 0
- Raíces de categoría y nº de nodos: Bones(41), Cartilages(37), Ligaments(73), Muscles(72), Fascia(15), Arteries(47), Veins(43), Nerves(48), Bursae(39), Overlays(47)

### overview-colored-skull

- Nombres runtime: **31** (con geometría: 31 aproximados por contenedor) · aux: 0
- Raíces de categoría y nº de nodos: Bones(9), Bones_right(22)

### overview-skeleton

- Nombres runtime: **147** (con geometría: 147 aproximados por contenedor) · aux: 0
- Raíces de categoría y nº de nodos: Bones(37), Bones_right(99), Cartilages_right(11)

### upper-limb

- Nombres runtime: **575** (con geometría: 575 aproximados por contenedor) · aux: 0
- Raíces de categoría y nº de nodos: Back - bones(19), Arm - bones(2), Arm - muscles(12), Arm - nerves(15), Arm - veins(8), Arm - arteries(13), Arm - capsules, ligaments, fasciae(11), Arm - cartilages(3), Arm - synovia, bursae(8), Back - cartilages(38), Forearm - arteries(10), Forearm - bones(3), Forearm - capsules, ligaments, fasciae(10), Forearm - cartilages(5), Forearm - muscles(27), Forearm - nerves(3), Forearm - synovia, bursae(4), Forearm - veins(5), Hand and wrist - arteries(16), Hand and wrist - bones(29), Hand and wrist - capsules, ligaments, fasciae(70), Hand and wrist - cartilages(13), Hand and wrist - synovia, bursae(13), Hand and wrist - muscles(29), Hand and wrist - nerves(14), Hand and wrist - veins(10), Head and neck - arteries(2), Head and neck - bones(8), Head and neck - cartilages(15), Head and neck - nerves(5), Pectoral girdle - arteries(13), Pectoral girdle - bones(3), Pectoral girdle - capsules, ligaments, fasciae(15), Pectoral girdle - cartilages(6), Pectoral girdle - muscles(25), Pectoral girdle - nerves(5), Pectoral girdle - synovia, bursae(8), Pectoral girdle - veins(2), Thorax - arteries(6), Thorax - bones(15), Thorax - cartilages(40), Thorax - nerves(14), Thorax - veins(3)

### vertebrae

- Nombres runtime: **4** (con geometría: 4 aproximados por contenedor) · aux: 0
- Raíces de categoría y nº de nodos: Bones(4)

