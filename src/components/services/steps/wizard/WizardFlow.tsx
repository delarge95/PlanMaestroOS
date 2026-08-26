import { useState } from 'react';
import { SERVICE_CATALOG } from '../../../../data/services';
import type { LevelId } from '../../../../data/services';
import { LEVEL_SHORT, GOALS } from '../../../../lib/services/ui';
import { getUxSpec, PREGUNTAS_RUBRICA } from '../../../../lib/services/ux';
import { useQuoteStore } from '../../state/useQuoteStore';
import { DronePieces } from '../../visuals/DronePieces';
import { PolyDetail } from '../../visuals/VisualAids';
import { SmartSlider } from '../../controls/SmartSlider';
import { ChoiceCards } from '../../controls/Segmented';

const btnSec = 'cx-btn-secondary';
const btnPri = 'cx-btn-primary';

function Nav({ onBack, onNext, nextDisabled, nextLabel = 'Siguiente' }: { onBack: () => void; onNext: () => void; nextDisabled?: boolean; nextLabel?: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
      <button className={btnSec} onClick={onBack}>← Atrás</button>
      <button className={btnPri} onClick={onNext} disabled={nextDisabled}
        style={{ opacity: nextDisabled ? 0.5 : 1, cursor: nextDisabled ? 'not-allowed' : 'pointer' }}>
        Siguiente →
      </button>
    </div>
  );
}

function Bar({ paso }: { paso: number }) {
  return (
    <div style={{ marginBlock: 16 }}>
      <div style={{ fontSize: 12, opacity: 0.6 }}>Paso {paso} de 4 — {['Tu objetivo', 'El servicio', 'Configúralo', 'Contexto'][paso - 1]}</div>
      <div style={{ height: 3, background: '#e0e0e6', borderRadius: 99 }}>
        <div style={{ height: '100%', width: `${(paso / 4) * 100}%`, background: 'var(--c-accent,#0a84ff)', borderRadius: 99, transition: 'width 200ms' }} />
      </div>
    </div>
  );
}

export function WizardFlow() {
  const [paso, setPaso] = useState(1);
  const st = useQuoteStore();
  const family = st.family ?? '';

  // Paso 1: objetivo
  const serviciosFamilia = family ? SERVICE_CATALOG.filter((svc) => svc.family === family) : [];

  // Paso 3: spec del servicio seleccionado
  const uxSpec = st.serviceId ? getUxSpec(st.serviceId) : undefined;

  return (
    <section>
      <Bar paso={paso} />

      {paso === 1 && (
        <>
          <h2>¿Qué quieres lograr?</h2>
          <div style={{ display: 'grid', gap: 10, marginBlock: 16 }}>
            {GOALS.map((g) => (
              <button key={g.id} className="cx-card"
                style={{
                  borderColor: family && g.familyIds.includes(family) ? 'var(--c-accent,#0a84ff)' : undefined,
                  borderWidth: family && g.familyIds.includes(family) ? 2 : 1,
                  background: family && g.familyIds.includes(family) ? 'var(--c-accent-soft,#e8f0fe)' : undefined,
                }}
                onClick={() => {
                  if (g.pushPresetId) { st.selectPreset(g.pushPresetId); return; }
                  const first = SERVICE_CATALOG.find((x) => g.familyIds.includes(x.family));
                  if (first) st.setService(first.id, 'N2');
                  else st.setService('f1-cad-webgl-ready', 'N2');
                }}
              >
                <strong>{g.labelEs}</strong>
              </button>
            ))}
          </div>
          <Nav onBack={() => st.go('entry')} onNext={() => setPaso(2)} nextDisabled={!st.serviceId} />
        </>
      )}

      {paso === 2 && (
        <>
          <h2>Elige el servicio específico</h2>
          <div style={{ display: 'grid', gap: 10, marginBlock: 14 }}>
            {serviciosFamilia.map((svc) => (
              <button key={svc.id} className="cx-card"
                style={{
                  borderColor: st.serviceId === svc.id ? 'var(--c-accent,#0a84ff)' : undefined,
                  borderWidth: st.serviceId === svc.id ? 2 : 1,
                  background: st.serviceId === svc.id ? 'var(--c-accent-soft,#e8f0fe)' : undefined,
                }}
                onClick={() => st.setService(svc.id, 'N2')}
              >
                <strong>{svc.nameEs}</strong>
                <div style={{ fontSize: 12, opacity: 0.6 }}>{svc.driversEs.join(' · ')}</div>
              </button>
            ))}
          </div>
          <Nav onBack={() => setPaso(1)} onNext={() => setPaso(3)} nextDisabled={!st.serviceId} />
        </>
      )}

      {paso === 3 && (
        <>
          <h2>Ajusta los detalles</h2>
          {(() => {
            const spec = st.serviceId ? getUxSpec(st.serviceId) : undefined;
            if (!spec) return null;

            return (
              <>
                {spec.controles.map((c) => {
                  if (c.kind === 'slider-piezas') {
                    const sugerido = st.pieces <= 15 ? 'N1' : st.pieces <= 60 ? 'N2' : st.pieces <= 150 ? 'N3' : 'N4';
                    return (
                      <div key={c.kind}>
                        <SmartSlider spec={c} value={st.pieces} nivelSugerido={LEVEL_SHORT[sugerido as LevelId]}
                          onChange={(v) => { st.setPieces(v); }} />
                        <DronePieces pieces={st.pieces} />
                      </div>
                    );
                  }
                  if (c.kind === 'slider-detalle') {
                    return <PolyDetail key="pd" estado={st.detail} onEstado={(e) => st.setDetail(e)} />;
                  }
                  return null;
                })}
                {spec.preguntasRubrica.map((dimId) => {
                  const q = PREGUNTAS_RUBRICA[dimId];
                  if (!q) return null;
                  const actual = st.qualitativeDeltas[dimId] ?? 0;
                  return (
                    <ChoiceCards key={dimId} preguntaEs={q.preguntaEs} value={actual}
                      onChange={(v) => st.setQualitative(dimId, v)}
                      opciones={q.opciones.map((o) => ({ valor: o.delta as -1 | 0 | 1, etiquetaEs: o.valorEs, ayudaEs: o.ayudaEs }))} />
                  );
                })}
                {!spec.controles.length && !spec.preguntasRubrica.length && (
                  <p style={{ opacity: 0.65 }}>Este servicio no requiere configuración adicional. Continúa al siguiente paso.</p>
                )}
              </>
            );
          })()}
          <Nav onBack={() => setPaso(2)} onNext={() => setPaso(4)} />
        </>
      )}

      {paso === 4 && (
        <>
          <h2>Últimos detalles</h2>

          <div style={{ marginBlock: 16 }}>
            <span style={{ fontSize: 15, fontWeight: 600 }}>¿Con qué urgencia?</span>
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              {[
                { id: 'none', label: 'Sin apuro' },
                { id: '72h', label: '<72 h (+25 %)' },
                { id: '24h', label: '<24 h (+50 %)', disabled: true, reason: 'Requiere discovery previo' },
              ].map((o) => {
                const active =
                  (o.id === 'none' && !st.urgent72h && !st.critical24h) ||
                  (o.id === '72h' && st.urgent72h) ||
                  (o.id === '24h' && st.critical24h);
                return (
                  <button key={o.id} className="cx-card"
                    style={{
                      flex: 1, padding: '10px 14px',
                      borderColor: active ? 'var(--c-accent,#0a84ff)' : undefined,
                      borderWidth: active ? 2 : 1,
                      background: active ? 'var(--c-accent-soft,#e8f0fe)' : undefined,
                      cursor: o.disabled ? 'not-allowed' : 'pointer',
                      opacity: (o as { disabled?: boolean }).disabled ? 0.45 : 1,
                    }}
                    disabled={(o as { disabled?: boolean }).disabled}
                    onClick={() => st.setUrgency(o.id as 'none' | '72h' | '24h')}>
                    <strong style={{ fontSize: 13 }}>{o.label}</strong>
                    {(o as { reason?: string }).reason && (
                      <div style={{ fontSize: 11, opacity: 0.6 }}>{(o as { reason?: string }).reason}</div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <label style={{ display: 'flex', gap: 8, alignItems: 'center', marginBlock: 12 }}>
            <input type="checkbox" checked={st.firstClientLaunch} onChange={() => st.toggleLaunch()} />
            <span>Aplicar descuento Lanzamiento primeros clientes (<strong>−25 %</strong>)</span>
          </label>

          <label style={{ display: 'flex', gap: 8, alignItems: 'center', marginBlock: 12 }}>
            <input type="checkbox" checked={st.recurringClient} onChange={() => st.toggleRecurring()} />
            <span>Soy cliente recurrente (−5 % adicional)</span>
          </label>

          <p style={{ fontSize: 12.5, opacity: 0.65, marginBlock: 16 }}>
            Rango orientativo, no cotización. La cifra firme se cierra en un SOW tras discovery.
          </p>

          <Nav onBack={() => setPaso(3)} onNext={() => st.go('summary')} nextLabel="Ver resumen" />
        </>
      )}
    </section>
  );
}
