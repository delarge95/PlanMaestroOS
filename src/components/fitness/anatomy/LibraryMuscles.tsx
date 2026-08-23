// src/components/fitness/anatomy/LibraryMuscles.tsx
// AG-ANATOM — renovación de la sección Músculos (mandato del usuario, TAREAS_USUARIO):
// navegación por zona corporal y por tipo de estructura (músculos por zona/acción/
// primarios, tendones, ligamentos, articulaciones con ROM, nervios con trayecto y
// vulnerabilidad, huesos). Datos: src/data/fitness/anatomy/** vía anatomyGraph.
import { useEffect, useMemo, useState } from 'react';
import { Search, X, ChevronDown, ChevronUp, Bone, Zap, Link2, Activity, Hand, Rotate3d } from 'lucide-react';
import useIsMobile from '../../ui/useIsMobile';
import {
  BODY_ZONES,
  BODY_ZONE_LABELS_ES,
  MUSCLE_ACTION_LABELS_ES,
  getMuscles,
  getTendons,
  getLigaments,
  getJoints,
  getNerves,
  getBones,
  getMusclesByAction,
  getStructureById,
  findExercisesForMuscle,
  anatomyViewerUrl,
  anatomyGraphStats,
} from '../../../data/fitness/anatomyGraph';
import type {
  AnatomyStructure,
  BodyZone,
  MuscleEntry,
  TendonEntry,
  NerveEntry,
  JointEntry,
  BoneEntry,
  LigamentEntry,
  StructureKind,
} from '../../../data/fitness/anatomy/types';

type TypeTab = StructureKind;
type MuscleView = 'zone' | 'action' | 'primary';

const TYPE_TABS: Array<{ key: TypeTab; label: string; icon: typeof Zap }> = [
  { key: 'muscle', label: 'Músculos', icon: Zap },
  { key: 'tendon', label: 'Tendones', icon: Link2 },
  { key: 'ligament', label: 'Ligamentos', icon: Activity },
  { key: 'joint', label: 'Articulaciones', icon: Rotate3d },
  { key: 'nerve', label: 'Nervios', icon: Hand },
  { key: 'bone', label: 'Huesos', icon: Bone },
];

const ZONE_ORDER: BodyZone[] = [
  'head-jaw', 'cervical', 'shoulder', 'chest', 'back', 'arm', 'forearm-hand',
  'core', 'spine', 'hip', 'thigh', 'knee', 'lower-leg', 'ankle-foot',
];

interface Props {
  /** estructura inicial (deep-link desde el visor ?structure=…) */
  initialStructure?: string;
}

export default function LibraryMuscles({ initialStructure }: Props) {
  const isMobile = useIsMobile();
  const stats = useMemo(() => anatomyGraphStats(), []);
  const [typeTab, setTypeTab] = useState<TypeTab>('muscle');
  const [muscleView, setMuscleView] = useState<MuscleView>('zone');
  const [zone, setZone] = useState<BodyZone | null>(null);
  const [actionTag, setActionTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(initialStructure ?? null);

  // deep-link desde el visor (/app/fitness/library/muscles?structure=…)
  useEffect(() => {
    const s = initialStructure ?? new URLSearchParams(window.location.search).get('structure');
    if (!s) return;
    const st = getStructureById(s);
    if (st) {
      setSelectedId(st.id);
      setZone(st.zone);
      setTypeTab(st.kind);
      if (st.kind === 'muscle') setMuscleView('zone');
    }
  }, [initialStructure]);

  // acciones disponibles en la zona activa (o global si no hay zona)
  const actionTags = useMemo(() => {
    const available = new Set<string>();
    for (const m of getMuscles(zone ?? undefined)) for (const t of m.actionTags) available.add(t);
    return Object.keys(MUSCLE_ACTION_LABELS_ES).filter((t) => available.has(t));
  }, [zone]);

  const structures: AnatomyStructure[] = useMemo(() => {
    let list: AnatomyStructure[] = [];
    if (typeTab === 'muscle') {
      if (muscleView === 'action' && actionTag) list = getMusclesByAction(actionTag, zone ?? undefined);
      else if (muscleView === 'primary') list = getMuscles(zone ?? undefined).filter((m) => m.primaryForTraining);
      else list = getMuscles(zone ?? undefined);
    } else if (typeTab === 'tendon') list = getTendons(zone ?? undefined);
    else if (typeTab === 'ligament') list = getLigaments(zone ?? undefined);
    else if (typeTab === 'joint') list = getJoints(zone ?? undefined);
    else if (typeTab === 'nerve') list = getNerves(zone ?? undefined);
    else list = getBones(zone ?? undefined);
    if (zone) list = list.filter((s) => s.zone === zone || s.zones?.includes(zone));
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((s) =>
        [s.nameEs, s.nameEn, ...s.synonyms].join(' ').toLowerCase().includes(q),
      );
    }
    return list;
  }, [typeTab, muscleView, actionTag, zone, query]);

  const selected = selectedId ? getStructureById(selectedId) : undefined;

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* CABECERA */}
      <div style={{ ...cardStyle, padding: '14px 16px' }}>
        <span style={kickerStyle}>Base de datos anatómica</span>
        <h2 style={{ margin: '2px 0 0', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          Músculos y estructuras
        </h2>
        <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
          {stats.total} estructuras · {stats.muscles} músculos · {stats.tendons} tendones · {stats.ligaments} ligamentos ·{' '}
          {stats.joints} articulaciones · {stats.nerves} nervios · {stats.bones} huesos · {stats.with3dMapping} en el visor 3D
        </p>
      </div>

      {/* BUSCADOR */}
      <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px' }}>
        <Search size={16} color="var(--text-tertiary)" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar estructura (español, inglés, sinónimos)…"
          style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '0.88rem' }}
        />
        {query && (
          <button type="button" onClick={() => setQuery('')} style={ghostBtnStyle}><X size={14} /></button>
        )}
      </div>

      {/* TIPOS */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {TYPE_TABS.map(({ key, label, icon: Icon }) => {
          const active = typeTab === key;
          return (
            <button key={key} type="button" onClick={() => { setTypeTab(key); setActionTag(null); }} style={active ? chipActiveStyle : chipStyle}>
              <Icon size={13} /> {label}
            </button>
          );
        })}
      </div>

      {/* SUB-VISTA MÚSCULOS: zona / acción / primarios */}
      {typeTab === 'muscle' && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
          {([['zone', 'Por zona'], ['action', 'Por acción'], ['primary', 'Primarios (entrenamiento)']] as Array<[MuscleView, string]>).map(
            ([k, label]) => (
              <button key={k} type="button" onClick={() => { setMuscleView(k); setActionTag(null); }} style={muscleView === k ? chipActiveSmallStyle : chipSmallStyle}>
                {label}
              </button>
            ),
          )}
        </div>
      )}

      {/* ZONAS */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        <button type="button" onClick={() => setZone(null)} style={!zone ? chipActiveSmallStyle : chipSmallStyle}>
          Todo el cuerpo
        </button>
        {ZONE_ORDER.map((z) => {
          const active = zone === z;
          return (
            <button key={z} type="button" onClick={() => setZone(active ? null : z)} style={active ? chipActiveSmallStyle : chipSmallStyle}>
              {BODY_ZONE_LABELS_ES[z]}
            </button>
          );
        })}
      </div>

      {/* ACCIONES (solo vista por acción) */}
      {typeTab === 'muscle' && muscleView === 'action' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {actionTags.map((t) => {
            const active = actionTag === t;
            return (
              <button key={t} type="button" onClick={() => setActionTag(active ? null : t)} style={active ? chipActiveSmallStyle : chipSmallStyle}>
                {MUSCLE_ACTION_LABELS_ES[t] ?? t}
              </button>
            );
          })}
        </div>
      )}

      {/* LISTA + FICHA */}
      <div style={{ display: 'flex', gap: 12, flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start' }}>
        <div style={{ ...cardStyle, flex: 1, minWidth: 0, padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '10px 14px 6px', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
            {structures.length} {structures.length === 1 ? 'estructura' : 'estructuras'}
            {zone ? ` · ${BODY_ZONE_LABELS_ES[zone]}` : ''}
          </div>
          <div style={{ maxHeight: isMobile ? 320 : 520, overflowY: 'auto', padding: '0 8px 10px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {structures.map((s) => {
              const active = selectedId === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedId(active ? null : s.id)}
                  style={{
                    textAlign: 'left', cursor: 'pointer', borderRadius: 8, padding: '7px 9px',
                    background: active ? 'rgba(53,208,255,0.12)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${active ? 'rgba(53,208,255,0.5)' : 'transparent'}`,
                    color: 'var(--text-primary)', display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center',
                  }}
                >
                  <span style={{ fontSize: '0.82rem', fontWeight: active ? 700 : 500 }}>
                    {s.nameEs}
                    {typeTab === 'muscle' && (s as MuscleEntry).primaryForTraining && (
                      <span title="Músculo primario de entrenamiento" style={{ marginLeft: 6, fontSize: '0.62rem', color: 'var(--accent, #0a84ff)', fontWeight: 700 }}>
                        ★
                      </span>
                    )}
                  </span>
                  <span style={{ fontSize: '0.62rem', color: 'var(--text-tertiary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 170 }}>
                    {subtitleFor(s) || BODY_ZONE_LABELS_ES[s.zone]}
                  </span>
                </button>
              );
            })}
            {!structures.length && (
              <p style={{ padding: 12, fontSize: '0.82rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>
                Sin resultados con los filtros actuales.
              </p>
            )}
          </div>
        </div>

        {/* FICHA */}
        <div style={{ width: isMobile ? '100%' : 360, minWidth: 0 }}>
          {selected ? (
            <StructureCard structure={selected} onClose={() => setSelectedId(null)} />
          ) : (
            <div style={{ ...cardStyle, padding: '18px 16px', color: 'var(--text-tertiary)', fontSize: '0.82rem' }}>
              Selecciona una estructura de la lista para ver su ficha (función, zona, ejercicios que la cargan y enlace al visor 3D).
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Ficha de estructura ───────────────────────────────────────────────────────

const KIND_LABELS: Record<StructureKind, string> = {
  muscle: 'Músculo', tendon: 'Tendón', ligament: 'Ligamento',
  joint: 'Articulación', nerve: 'Nervio', bone: 'Hueso',
};

/** subtítulo orientativo por tipo para las filas de la lista */
function subtitleFor(s: AnatomyStructure): string {
  switch (s.kind) {
    case 'muscle': return (s as MuscleEntry).actionTags.map((t) => MUSCLE_ACTION_LABELS_ES[t] ?? t).slice(0, 3).join(' · ');
    case 'joint': return (s as JointEntry).jointType;
    case 'nerve': return (s as NerveEntry).entrapmentSite;
    case 'tendon': return (s as TendonEntry).injuries;
    case 'bone': return (s as BoneEntry).note ?? '';
    default: return '';
  }
}

function StructureCard({ structure: s, onClose }: { structure: AnatomyStructure; onClose: () => void }) {
  const [open, setOpen] = useState(true);
  const row = (label: string, value?: string | string[]) => {
    if (!value || (Array.isArray(value) && !value.length)) return null;
    return (
      <div>
        <span style={kickerStyle}>{label}</span>
        <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
          {Array.isArray(value) ? value.join(' · ') : value}
        </p>
      </div>
    );
  };
  /** resuelve ids de estructuras relacionadas a nombres legibles */
  const namesOf = (ids?: string[]): string[] =>
    (ids ?? []).map((id) => getStructureById(id)?.nameEs ?? id);
  const viewerUrl = anatomyViewerUrl(s);
  return (
    <div style={{ ...cardStyle, borderColor: 'rgba(53,208,255,0.35)', padding: 0, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '12px 14px 4px' }}>
        <div>
          <span style={kickerStyle}>{KIND_LABELS[s.kind]} · {BODY_ZONE_LABELS_ES[s.zone]}</span>
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{s.nameEs}</h3>
          <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{s.nameEn}</p>
        </div>
        <button type="button" onClick={onClose} style={ghostBtnStyle}><X size={14} /></button>
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 14px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '0.74rem', fontWeight: 700 }}
      >
        Detalles {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {open && (
        <div style={{ padding: '0 14px 12px', display: 'flex', flexDirection: 'column', gap: 9 }}>
          {row('Zonas', s.zones?.map((z) => BODY_ZONE_LABELS_ES[z]))}
          {row('Sinónimos', s.synonyms)}
          {/* MÚSCULO */}
          {s.kind === 'muscle' && row('Origen', (s as MuscleEntry).origin)}
          {s.kind === 'muscle' && row('Inserción', (s as MuscleEntry).insertion)}
          {s.kind === 'muscle' && row('Inervación', (s as MuscleEntry).innervation)}
          {s.kind === 'muscle' && row('Acción', (s as MuscleEntry).action)}
          {s.kind === 'muscle' && row('Rol biomecánico', (s as MuscleEntry).biomechanicalRole)}
          {s.kind === 'muscle' && row('Ejercicios citados', (s as MuscleEntry).trainingExercises)}
          {s.kind === 'muscle' && row('Riesgo con', (s as MuscleEntry).riskExercises)}
          {s.kind === 'muscle' && row('Sinergistas', namesOf((s as MuscleEntry).synergists))}
          {s.kind === 'muscle' && row('Antagonistas', namesOf((s as MuscleEntry).antagonists))}
          {/* TENDÓN */}
          {s.kind === 'tendon' && row('Inserción', (s as TendonEntry).insertion)}
          {s.kind === 'tendon' && row('Músculos que lo forman', namesOf((s as TendonEntry).muscles))}
          {s.kind === 'tendon' && row('Lesiones típicas', (s as TendonEntry).injuries)}
          {s.kind === 'tendon' && row('Rehabilitación', (s as TendonEntry).rehab)}
          {s.kind === 'tendon' && row('Factores de riesgo', (s as TendonEntry).risks)}
          {/* LIGAMENTO */}
          {s.kind === 'ligament' && row('Estabiliza', namesOf([(s as LigamentEntry).jointId ?? '']))}
          {s.kind === 'ligament' && row('Nota', (s as LigamentEntry).note)}
          {/* ARTICULACIÓN (ROM por eje) */}
          {s.kind === 'joint' && row('Tipo articular', (s as JointEntry).jointType)}
          {s.kind === 'joint' && row('Huesos', (s as JointEntry).bones)}
          {s.kind === 'joint' && row('Movimientos / ROM por eje', (s as JointEntry).movements)}
          {s.kind === 'joint' && (s as JointEntry).romNote && row('ROM numérico (estado)', (s as JointEntry).romNote)}
          {s.kind === 'joint' && row('Estabilizadores', (s as JointEntry).stabilizers)}
          {s.kind === 'joint' && row('Lesiones', (s as JointEntry).lesions)}
          {s.kind === 'joint' && row('Riesgo bajo carga', (s as JointEntry).riskyUnderLoad)}
          {s.kind === 'joint' && row('Rehabilitación', (s as JointEntry).rehab)}
          {s.kind === 'joint' && row('Relacionadas', namesOf((s as JointEntry).relatedStructures))}
          {/* NERVIO (trayecto + vulnerabilidad) */}
          {s.kind === 'nerve' && row('Inerva / trayecto', (s as NerveEntry).innervates)}
          {s.kind === 'nerve' && row('Vulnerabilidad (atrapamiento)', (s as NerveEntry).entrapmentSite)}
          {s.kind === 'nerve' && row('Síntomas de afectación', (s as NerveEntry).symptoms)}
          {s.kind === 'nerve' && row('Contexto de lesión', (s as NerveEntry).lesionContext)}
          {s.kind === 'nerve' && row('Rehabilitación', (s as NerveEntry).rehab)}
          {s.kind === 'nerve' && row('Factores de riesgo', (s as NerveEntry).risks)}
          {s.kind === 'nerve' && row('Relacionadas', namesOf((s as NerveEntry).relatedStructures))}
          {/* HUESO */}
          {s.kind === 'bone' && row('Nota funcional', (s as BoneEntry).note)}

          {/* EJERCICIOS QUE LA CARGAN (exerciseDatabase READ) */}
          <ExercisesThatLoad structure={s} />

          {/* FUENTE CITADA */}
          <div>
            <span style={kickerStyle}>Fuente</span>
            {s.sourceRefs.map((r, i) => (
              <p key={i} style={{ margin: 0, fontSize: '0.72rem', color: 'var(--text-tertiary)', lineHeight: 1.4 }}>
                {r.locator ? `${r.sourceId} · ${r.locator}` : r.sourceId}
                {r.pending && (
                  <span style={{ marginLeft: 6, color: '#e8b26a', fontWeight: 700 }} title="Verificación capítulo/página contra la biblioteca pendiente (plan Gemini)">
                    verificación pendiente
                  </span>
                )}
                {r.note ? ` — ${r.note}` : ''}
              </p>
            ))}
          </div>

          {/* VER EN 3D */}
          {viewerUrl && (
            <a href={viewerUrl} style={{ ...primaryBtnStyle, textDecoration: 'none' }}>
              <Rotate3d size={14} /> Ver en 3D
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// ── Ejercicios que cargan la estructura (READ exerciseDatabase de AG-FIT) ─────

function ExercisesThatLoad({ structure }: { structure: AnatomyStructure }) {
  const exercises = useMemo(() => findExercisesForMuscle(structure, 10), [structure]);
  if (!exercises.length) return null;
  return (
    <div>
      <span style={kickerStyle}>Ejercicios que la cargan ({exercises.length})</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 3 }}>
        {exercises.map((e) => (
          <span
            key={e.name}
            title={e.strength ? 'Carga de fuerza' : 'Carga de estabilidad'}
            style={{
              fontSize: '0.7rem', padding: '3px 8px', borderRadius: 10, cursor: 'default',
              background: e.strength ? 'rgba(53,208,255,0.1)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${e.strength ? 'rgba(53,208,255,0.35)' : 'var(--color-border-subtle, rgba(255,255,255,0.1))'}`,
              color: e.strength ? '#7fdcff' : 'var(--text-secondary)',
            }}
          >
            {e.name}{e.strength ? ' · fuerza' : ' · estabilidad'}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── estilos ───────────────────────────────────────────────────────────────────

const cardStyle: React.CSSProperties = {
  background: 'var(--surface-1, #0d0d0f)',
  border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
  borderRadius: 16,
};

const kickerStyle: React.CSSProperties = {
  fontSize: '0.66rem', color: 'var(--accent, #0a84ff)', fontWeight: 700,
  textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block',
};

const chipStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 5, cursor: 'pointer',
  background: 'rgba(255,255,255,0.03)', color: 'var(--text-primary)',
  border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.1))',
  borderRadius: 18, padding: '6px 13px', fontSize: '0.8rem', fontWeight: 500,
};

const chipActiveStyle: React.CSSProperties = {
  ...chipStyle,
  background: 'var(--accent, #0a84ff)', color: '#fff',
  border: '1px solid var(--accent, #0a84ff)', fontWeight: 700,
};

const chipSmallStyle: React.CSSProperties = {
  ...chipStyle, padding: '4px 11px', fontSize: '0.74rem',
};

const chipActiveSmallStyle: React.CSSProperties = {
  ...chipSmallStyle,
  background: 'var(--accent, #0a84ff)', color: '#fff',
  border: '1px solid var(--accent, #0a84ff)', fontWeight: 700,
};

const ghostBtnStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  background: 'rgba(255,255,255,0.04)', border: 'none', color: 'var(--text-secondary)',
  borderRadius: 8, padding: 5, cursor: 'pointer',
};

const primaryBtnStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
  background: 'rgba(53,208,255,0.14)', border: '1px solid rgba(53,208,255,0.5)', color: '#7fdcff',
  borderRadius: 10, padding: '8px 14px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700,
};
