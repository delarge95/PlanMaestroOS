import { useQuoteStore, type QuoteState } from './state/quoteStore';
import { getUxSpec, PREGUNTAS_RUBRICA, DISCLAIMER_ESTIMACION } from '../../lib/services/ux';
import { CATALOG_CORE } from '../../data/services';
import type { ServiceDefinition } from '../../data/services/types';

function formatMoney(currency: string, v: number): string {
  return new Intl.NumberFormat(currency === 'COP' ? 'es-CO' : 'en-US', {
    style: 'currency', currency, maximumFractionDigits: 0,
  }).format(v);
}

export function EstimatorApp() {
  const {
    serviceId, selectService,
    sliderValues, setSlider,
    rubricAnswers, setRubric,
    currency, setCurrency,
    firstClientLaunch, setLaunchDiscount,
    derivedLevel, result,
  }: QuoteState = useQuoteStore();

  const uxSpec = serviceId ? getUxSpec(serviceId) : null;
  const service = serviceId
    ? (CATALOG_CORE.find((s) => s.id === serviceId) as ServiceDefinition | undefined)
    : undefined;

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 16px', display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,.05)' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1a1d29', margin: '0 0 14px' }}>1. Elige tu servicio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 8 }}>
            {CATALOG_CORE.map((s) => (
              <button key={s.id} onClick={() => selectService(s.id)}
                style={{
                  padding: '10px 12px', fontSize: 13, borderRadius: 8, cursor: 'pointer', textAlign: 'left',
                  border: serviceId === s.id ? '2px solid #0a6cf5' : '1px solid #dde0e8',
                  background: serviceId === s.id ? '#e8f0fe' : '#fff',
                  color: '#1a1d29', font: 'inherit',
                }}>
                {s.nameEs}
              </button>
            ))}
          </div>
        </div>

        {service && uxSpec && (
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,.05)' }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1a1d29', margin: '0 0 6px' }}>2. Configura el proyecto</h2>
            <p style={{ fontSize: 13, color: '#5a5e6e', marginBottom: 16 }}>{service.driversEs.join(' · ')}</p>

            {uxSpec.controles.map((ctrl) => (
              <div key={ctrl.kind} style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1d29', marginBottom: 4 }}>
                  {ctrl.preguntaEs}:{' '}
                  <span style={{ fontWeight: 800, color: '#0a6cf5' }}>
                    {ctrl.unidadEs(sliderValues[ctrl.kind] ?? ctrl.min)}
                  </span>
                </label>
                <input type="range" min={ctrl.min} max={ctrl.max} step={ctrl.step}
                  value={sliderValues[ctrl.kind] ?? ctrl.min}
                  onChange={(e) => setSlider(ctrl.kind, Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#0a6cf5', height: 24, cursor: 'pointer' }} />
                {ctrl.umbrales && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#9ca3af', marginTop: 2 }}>
                    {ctrl.umbrales.map((u) => <span key={u.nivel}>{u.nivel}</span>)}
                  </div>
                )}
              </div>
            ))}

            {uxSpec.preguntasRubrica.map((dimId) => {
              const q = PREGUNTAS_RUBRICA[dimId];
              if (!q) return null;
              const current = rubricAnswers[dimId];
              return (
                <div key={dimId} style={{ marginBottom: 16 }}>
                  <span style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1d29', marginBottom: 6 }}>{q.preguntaEs}</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {q.opciones.map((opt) => (
                      <button key={opt.valorEs} onClick={() => setRubric(dimId, opt.valorEs)}
                        style={{
                          padding: '8px 14px', fontSize: 12.5, borderRadius: 999, cursor: 'pointer', font: 'inherit',
                          border: current === opt.valorEs ? '2px solid #0a6cf5' : '1px solid #dde0e8',
                          background: current === opt.valorEs ? '#e8f0fe' : '#f9fafb',
                          color: '#1a1d29', fontWeight: current === opt.valorEs ? 600 : 400,
                        }}>
                        {opt.valorEs}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div style={{ alignSelf: 'start', position: 'sticky', top: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1a1d29', color: '#fff', padding: '14px 18px', borderRadius: 12, marginBottom: 16 }}>
          <button onClick={() => setCurrency(currency === 'USD' ? 'COP' : 'USD')}
            style={{ padding: '6px 14px', background: '#374151', borderRadius: 8, border: 'none', cursor: 'pointer', font: 'inherit', fontWeight: 700, fontSize: 13, color: '#fff' }}>
            {currency}
          </button>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer', color: '#fff' }}>
            <input type="checkbox" checked={firstClientLaunch}
              onChange={(e) => setLaunchDiscount(e.target.checked)}
              style={{ accentColor: '#22c55e' }} />
            Lanzamiento (−25%)
          </label>
        </div>

        {result ? (
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20, boxShadow: '0 4px 12px rgba(0,0,0,.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 13, color: '#5a5e6e' }}>Nivel derivado</span>
              <span style={{ fontSize: 18, fontWeight: 800, fontFamily: 'monospace', background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: 8 }}>
                {derivedLevel}
              </span>
            </div>
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 14, marginBottom: 14 }}>
              <p style={{ fontSize: 13, color: '#5a5e6e', margin: 0 }}>Tiempo estimado</p>
              <p style={{ fontSize: 24, fontWeight: 800, color: '#1a1d29', margin: '4px 0' }}>
                {result.hoursMin} – {result.hoursMax} horas
              </p>
              {service?.entregaDiasEs && (
                <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>
                  ≈ {service.entregaDiasEs[0]}–{service.entregaDiasEs[1]} días hábiles
                </p>
              )}
            </div>
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 14 }}>
              <p style={{ fontSize: 13, color: '#5a5e6e', margin: 0 }}>Presupuesto orientativo</p>
              <p style={{ fontSize: 28, fontWeight: 800, color: '#1a1d29', margin: '4px 0', letterSpacing: '-0.02em' }}>
                {formatMoney(currency, result.totalMin)} – {formatMoney(currency, result.totalMax)}
              </p>
              {firstClientLaunch && (
                <p style={{ fontSize: 12, color: '#16a34a', marginTop: 4, fontWeight: 500 }}>
                  ✓ Descuento de lanzamiento −25% aplicado
                </p>
              )}
            </div>
            <div style={{ fontSize: 12, color: '#9ca3af', borderTop: '1px solid #e5e7eb', paddingTop: 12, marginTop: 12 }}>
              <p style={{ margin: '0 0 4px' }}>⚠️ {DISCLAIMER_ESTIMACION}</p>
            </div>
          </div>
        ) : (
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 32, textAlign: 'center', color: '#9ca3af', fontSize: 14 }}>
            Selecciona un servicio y configura los parámetros.
          </div>
        )}

        {service && service.entregablesEs && (
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20, marginTop: 16 }}>
            <strong style={{ fontSize: 13, color: '#374151' }}>📦 Recibes:</strong>
            <ul style={{ fontSize: 13, paddingLeft: 18, marginTop: 8, lineHeight: 1.8, color: '#1a1d29' }}>
              {service.entregablesEs.map((e: string) => <li key={e}>✓ {e}</li>)}
            </ul>
            {service.noIncluyeEs && (
              <>
                <strong style={{ fontSize: 13, color: '#b45309', display: 'block', marginTop: 12 }}>⚠️ NO incluido:</strong>
                <ul style={{ fontSize: 13, paddingLeft: 18, marginTop: 4, color: '#1a1d29' }}>
                  {service.noIncluyeEs.map((e: string) => <li key={e}>✗ {e}</li>)}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
