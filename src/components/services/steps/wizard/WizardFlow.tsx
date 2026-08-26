import { useState } from 'react';
import { SERVICE_CATALOG, getServiceById } from '../../../../data/services';
import type { LevelId } from '../../../../data/services';
import { LEVEL_SHORT, GOALS } from '../../../../lib/services/ui';
import { getUxSpec, PREGUNTAS_RUBRICA, DISCLAIMER_ESTIMACION } from '../../../../lib/services/ux';
import type { ControlSpec, RubricQuestion } from '../../../../lib/services/ux';
import { useQuoteStore } from '../../state/useQuoteStore';
import { DronePieces } from '../../visuals/DronePieces';
import { PolyDetail, ImageSequence } from '../../visuals/VisualAids';
import { SmartSlider } from '../../controls/SmartSlider';
import { ChoiceCards, Segmented } from '../../controls/Segmented';

const PASOS = ['Tu objetivo', 'El servicio', 'Configúralo', 'Contexto'] as const;

function Progreso({ paso }: { paso: number }) {
  return (
    <div style={{ marginBlock: 18 }}>
      <div style={{ fontSize: 13, opacity: 0.65, marginBottom: 4 }}>Paso {paso} de 4</div>
      <div style={{ height: 4, background: '#e5e5ea', borderRadius: 999 }}>
        <div
          style={{
            height: '100%',
            width: `${(paso / 4) * 100}%`,
            background: 'var(--accent,#0a84ff)',
            borderRadius: 999,
            transition: 'width 220ms',
          }}
        />
      </div>
    </div>
  );
}

function Nav({
  onBack,
  onNext,
  nextLabel = 'Siguiente',
  nextDisabled,
}: {
  onBack: () => void;
  onNext: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
      <button onClick={onBack} style={{ padding: '12px 18px', borderRadius: 10, border: '1px solid #d8d8de', background: '#fff', cursor: 'pointer', font: 'inherit' }}>
        ← Atrás
      </button>
      <button
        onClick={onNext}
        disabled={nextDisabled}
        style={{
          padding: '12px 22px',
          borderRadius: 10,
          border: 'none',
          background: nextDisabled ? '#c7c7cc' : 'var(--accent,#0a84ff)',
          color: '#fff',
          cursor: nextDisabled ? 'not-allowed' : 'pointer',
          font: 'inherit',
          fontWeight: 600,
        }}
      >
        {nextLabel} →
      </button>
    </div>
  );
}

export function WizardFlow() {
  const [paso, setPaso] = useState(1);
  const store = useQuoteStore();
  const family = store.wizard.family;

  const serviciosFamilia = family
    ? SERVICE_CATALOG.filter((s) => s.family === family)
    : [];

  const spec = store.wizard.serviceId ? getUxSpec(store.wizard.serviceId) : undefined;
  const svc = store.wizard.serviceId ? getServiceById(store.wizard.serviceId) : undefined;

  const renderControl = (c: ControlSpec) => {
    if (c.kind === 'slider-piezas') {
      return (
        <div key={c.kind}>
          <SmartSlider
            spec={c}
            value={store.pieces}
            onChange={(v) => {
              store.setPieces(v);
              const order: LevelId[] = ['XS', 'N1', 'N2', 'N3', 'N4'];
              const sugerido = v <= 15 ? 'N1' : v <= 60 ? 'N2' : v <= 150 ? 'N3' : 'N4';
              store.setWizard({ levelBase: order[order.indexOf(sugerido as LevelId)] ?? 'N2' });
            }}
            nivelSugerido={LEVEL_SHORT[store.wizard.levelBase]}
          />
          <DronePieces pieces={store.pieces} />
        </div>
      );
    }
    if (c.kind === 'slider-detalle') {
      return (
        <div key={c.kind}>
          <PolyDetail estado={store.detail} onEstado={(e) => { store.setDetail(e); }} />
        </div>
      );
    }
    if (c.kind === 'slider-segundos') {
      const frames = [0, 1, 2, 3, 4, 5].map((i) => (
        <svg viewBox="0 0 120 120" width="120" height="120" key={i}>
          <circle cx="60" cy="60" r="34" fill="#5b5bd6" opacity={0.85} />
          <rect x="56" y="10" width="8" height="16" rx="4" fill="#0a84ff" transform={`rotate(${i * 60} 60 60)`} />
          <text x="60" y="66" textAnchor="middle" fontSize="13" fill="#fff">{i * 15}°</text>
        </svg>
      ));
      return (
        <div key={c.kind}>
          <SmartSlider
            spec={c}
            value={store.seconds}
            onChange={(v) => { store.setSeconds(v); }}
            nivelSugerido={LEVEL_SHORT[store.wizard.levelBase]}
          />
          <ImageSequence frames={frames} value={store.seconds} max={90} />
        </div>
      );
    }
    if (c.kind === 'stepper-cantidad') {
      return (
        <div key={c.kind} style={{ marginBlock: 20 }}>
          <span style={{ fontSize: 18 }}>{c.preguntaEs}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 8 }}>
            <button onClick={() => store.setQuantity(store.quantity - 1)} style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid #d8d8de', background: '#fff', cursor: 'pointer', font: 'inherit' }}>−</button>
            <strong style={{ fontSize: 26 }}>{store.quantity}</strong>
            <button onClick={() => store.setQuantity(store.quantity + 1)} style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid #d8d8de', background: '#fff', cursor: 'pointer', font: 'inherit' }}>+</button>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderRubrica = () => {
    if (!spec) return null;
    return spec.preguntasRubrica.map((dimId) => {
      const q: RubricQuestion | undefined = PREGUNTAS_RUBRICA[dimId];
      if (!q) return null;
      const actual = store.wizard.qualitativeDeltas[dimId] ?? 0;
      return (
        <ChoiceCards
          key={dimId}
          preguntaEs={q.preguntaEs}
          value={actual}
          onChange={(v) => store.toggleQualitative(dimId, v)}
          opciones={q.opciones.map((o) => ({
            valor: o.delta,
            etiquetaEs: o.valorEs,
            ayudaEs: o.ayudaEs,
          }))}
        />
      );
    });
  };

  return (
    <section>
      <Progreso paso={paso} />

      {paso === 1 && (
        <>
          <h2>¿Qué quieres lograr?</h2>
          <div style={{ display: 'grid', gap: 12, marginBlock: 18 }}>
            {GOALS.map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  if (g.pushPresetId) {
                    store.selectPreset(g.pushPresetId);
                    return;
                  }
                  const primerServicio = SERVICE_CATALOG.find((s) => g.familyIds.includes(s.family));
                  store.setWizard({ family: g.familyIds[0], serviceId: primerServicio?.id });
                }}
                style={{
                  padding: '14px 18px',
                  borderRadius: 12,
                  border: family && g.familyIds.includes(family) ? '2px solid var(--accent,#0a84ff)' : '1px solid #d8d8de',
                  background: family && g.familyIds.includes(family) ? 'var(--accent-soft,#eef4ff)' : '#fff',
                  cursor: 'pointer',
                  font: 'inherit',
                  textAlign: 'left',
                }}
              >
                {g.labelEs}
              </button>
            ))}
          </div>
          <Nav
            onBack={() => store.go('entry')}
            onNext={() => setPaso(2)}
            nextDisabled={!family || serviciosFamilia.length === 0}
          />
        </>
      )}

      {paso === 2 && (
        <>
          <h2>Este servicio encaja con tu objetivo</h2>
          <div style={{ display: 'grid', gap: 12, marginBlock: 18 }}>
            {serviciosFamilia.map((s) => {
              const activo = store.wizard.serviceId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => store.setWizard({ serviceId: s.id })}
                  style={{
                    padding: 16,
                    borderRadius: 12,
                    textAlign: 'left',
                    cursor: 'pointer',
                    font: 'inherit',
                    border: activo ? '2px solid var(--accent,#0a84ff)' : '1px solid #d8d8de',
                    background: activo ? 'var(--accent-soft,#eef4ff)' : '#fff',
                  }}
                >
                  <strong>{s.nameEs}</strong>
                  <div style={{ fontSize: 12.5, opacity: 0.65, marginTop: 4 }}>{s.driversEs.join(' · ')}</div>
                </button>
              );
            })}
          </div>
          <Nav onBack={() => setPaso(1)} onNext={() => setPaso(3)} nextDisabled={!store.wizard.serviceId} />
        </>
      )}

      {paso === 3 && spec && svc && (
        <>
          <h2>Configúralo</h2>
          {spec.controles.map(renderControl)}
          {renderRubrica()}
          {svc.cotizador && svc.cotizador.addOns.length > 0 && (
            <div style={{ marginBlock: 22 }}>
              <span style={{ display: 'block', fontSize: 18, marginBottom: 10 }}>Extras opcionales</span>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {svc.cotizador.addOns.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => store.toggleAddon(a.id)}
                    title={a.delta}
                    style={{
                      padding: '8px 14px',
                      borderRadius: 999,
                      cursor: 'pointer',
                      font: 'inherit',
                      fontSize: 13,
                      border: store.wizard.addons.includes(a.id) ? '2px solid var(--accent,#0a84ff)' : '1px solid #d8d8de',
                      background: store.wizard.addons.includes(a.id) ? 'var(--accent-soft,#eef4ff)' : '#fff',
                    }}
                  >
                    {a.id} {a.delta ? `· ${a.delta}` : ''}
                  </button>
                ))}
              </div>
            </div>
          )}
          <p style={{ fontSize: 12.5, opacity: 0.65 }}>{DISCLAIMER_ESTIMACION}</p>
          <Nav onBack={() => setPaso(2)} onNext={() => setPaso(4)} />
        </>
      )}

      {paso === 4 && (
        <>
          <h2>Contexto</h2>
          <Segmented
            preguntaEs="¿Con qué urgencia lo necesitas?"
            value={
              store.modifiers.critical24h ? 'critico' : store.modifiers.urgent72h ? 'alta' : 'normal'
            }
            onChange={(v) => {
              if (v === 'critico') { store.setModifier('critical24h', true); store.setModifier('urgent72h', false); }
              else if (v === 'alta') { store.setModifier('urgent72h', true); store.setModifier('critical24h', false); }
              else { store.setModifier('urgent72h', false); store.setModifier('critical24h', false); }
            }}
            opciones={[
              { valor: 'normal', etiquetaEs: 'Sin apuro', ayudaEs: 'Precio normal' },
              { valor: 'alta', etiquetaEs: 'Pronto (<72 h)', ayudaEs: '+25 %' },
              {
                valor: 'critico',
                etiquetaEs: 'Crítico (<24 h)',
                ayudaEs: '+50 % · máx 1 vez por cliente',
              },
            ]}
            deshabilitarValores={['critico']}
            razonDeshabilitado="No disponible en servicios que requieren discovery"
          />
          <label style={{ display: 'flex', gap: 8, alignItems: 'center', marginBlock: 14 }}>
            <input
              type="checkbox"
              checked={store.modifiers.firstClientLaunch}
              onChange={(e) => store.setModifier('firstClientLaunch', e.target.checked)}
            />
            Aplicar descuento Lanzamiento primeros clientes (−25 %)
          </label>
          <Nav onBack={() => setPaso(3)} onNext={() => store.go('summary')} nextLabel="Ver resumen" />
        </>
      )}
    </section>
  );
}
