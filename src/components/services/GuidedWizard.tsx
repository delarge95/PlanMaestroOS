/**
 * GuidedWizard.tsx — Cotizador guiado por árbol de decisión.
 * Nivel 1: ¿Qué quieres lograr? → Nivel 2: tipo de experiencia → Nivel 3: detalles.
 * Preview 3D interactiva que cambia con los sliders.
 */

import { useState, useMemo, useRef } from 'react';
import { ROOT_OPTIONS, WEB3D_LEVEL2, WEB3D_BRANCHES } from '../../data/services/decisionTree';
import type { TreeQuestion, TreeBranch } from '../../data/services/decisionTree';
import { planFromTreeAnswers } from '../../data/services/treeToQuote';
import type { WizardQuotePlan } from '../../data/services/treeToQuote';
import { BRAND } from '../../data/services/branding';

type Answers = Record<string, string | number | boolean>;

export function GuidedWizard({ onComplete }: { onComplete?: (plan: WizardQuotePlan) => void }) {
  const [level, setLevel] = useState(1);
  const [rootChoice, setRootChoice] = useState('');
  const [subChoice, setSubChoice] = useState('');
  const [answers, setAnswers] = useState<Answers>({});
  const [showAdvanced, setShowAdvanced] = useState(false);

  const branch: TreeBranch | null = useMemo(() => {
    if (rootChoice === 'web-3d' && subChoice) return WEB3D_BRANCHES[subChoice] ?? null;
    return null;
  }, [rootChoice, subChoice]);

  const set = (id: string, val: string | number | boolean) =>
    setAnswers(p => ({ ...p, [id]: val }));

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 20px 80px' }}>
      {/* ═══ NIVEL 1: ¿Qué quieres lograr? ═══ */}
      {level === 1 && (
        <div style={{ paddingTop: 60 }}>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700,
            letterSpacing: '-0.03em', color: '#1d1d1f', textAlign: 'center',
            margin: '0 0 12px', lineHeight: 1.1,
          }}>¿Qué quieres lograr?</h1>
          <p style={{ fontSize: 17, color: '#86868b', textAlign: 'center', margin: '0 0 48px' }}>
            Elige una opción y te guiamos paso a paso.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
            {ROOT_OPTIONS.filter(o => o.id !== 'no-se').map((o, i) => (
              <button key={o.id}
                onClick={() => { setRootChoice(o.id); setLevel(o.id === 'no-se' ? 1 : 2); }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 14, padding: '20px 22px',
                  background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,0,0,0.05)', borderRadius: 20,
                  cursor: 'pointer', font: 'inherit', textAlign: 'left',
                  transition: 'transform 0.25s cubic-bezier(0.25,0.8,0.4,1), box-shadow 0.25s',
                  animation: `cardIn 0.4s ${i * 0.06}s cubic-bezier(0.25,0.8,0.4,1) both`,
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <span style={{ fontSize: 28, lineHeight: 1 }}>{o.icon}</span>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.01em' }}>{o.label}</div>
                  <div style={{ fontSize: 13, color: '#86868b', marginTop: 3, lineHeight: 1.4 }}>{o.desc}</div>
                </div>
              </button>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <button onClick={() => setRootChoice('no-se')}
              style={{ font: '500 15px inherit', color: '#86868b', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 20px' }}>
              No estoy seguro — ayúdame a decidir →
            </button>
          </div>
        </div>
      )}

      {/* NO ESTOY SEGURO */}
      {level === 1 && rootChoice === 'no-se' && (
        <div style={{ paddingTop: 60, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', margin: '0 0 8px' }}>Cuéntame tu idea</h2>
          <p style={{ fontSize: 15, color: '#86868b', margin: '0 0 40px' }}>No necesitas saber cómo se llama — describe lo que imaginas.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14, maxWidth: 520, margin: '0 auto' }}>
            <a href='https://wa.me/573054396581' target='_blank' rel='noopener noreferrer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '28px 24px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 20, textDecoration: 'none', font: 'inherit', textAlign: 'center' }}>
              <span style={{ fontSize: 32 }}>💬</span>
              <strong style={{ fontSize: 17, fontWeight: 700, color: '#1d1d1f' }}>WhatsApp</strong>
              <span style={{ fontSize: 13, color: '#86868b' }}>Describe tu idea y te respondo</span>
            </a>
            <a href='mailto:alexwssonn@hotmail.com?subject=Idea%20de%20proyecto' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '28px 24px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 20, textDecoration: 'none', font: 'inherit', textAlign: 'center' }}>
              <span style={{ fontSize: 32 }}>📧</span>
              <strong style={{ fontSize: 17, fontWeight: 700, color: '#1d1d1f' }}>Correo</strong>
              <span style={{ fontSize: 13, color: '#86868b' }}>Adjunta archivos si los tienes</span>
            </a>
          </div>
          <button onClick={() => setRootChoice('')} style={{ marginTop: 20, font: '600 14px inherit', color: '#0071e3', background: 'none', border: 'none', cursor: 'pointer' }}>← Volver</button>
        </div>
      )}

      {/* ═══ NIVEL 2: Sub-categoría (ej: web-3d → tipo de experiencia) ═══ */}
      {level === 2 && rootChoice === 'web-3d' && (
        <div style={{ paddingTop: 40 }}>
          <button onClick={() => setLevel(1)}
            style={{ font: '600 14px inherit', color: '#0071e3', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 20 }}>← Atrás</button>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', margin: '0 0 8px' }}>
            ¿Qué tipo de web con 3D?
          </h2>
          <p style={{ fontSize: 15, color: '#86868b', margin: '0 0 32px' }}>No necesitas saber términos técnicos — describe lo que imaginas.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
            {WEB3D_LEVEL2.map((o, i) => (
              <button key={o.id}
                onClick={() => { setSubChoice(o.id); setLevel(3); }}
                style={{
                  display: 'flex', flexDirection: 'column', gap: 6, padding: '22px 20px',
                  background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,0,0,0.05)', borderRadius: 20,
                  cursor: 'pointer', font: 'inherit', textAlign: 'left',
                  animation: `cardIn 0.4s ${i * 0.06}s both`,
                }}>
                <span style={{ fontSize: 26 }}>{o.icon}</span>
                <strong style={{ fontSize: 17, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.01em' }}>{o.label}</strong>
                <span style={{ fontSize: 13, color: '#86868b', lineHeight: 1.45 }}>{o.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ═══ NIVEL 3: Preguntas específicas de la rama ═══ */}
      {level === 3 && branch && (
        <div style={{ paddingTop: 40 }}>
          <button onClick={() => setLevel(2)}
            style={{ font: '600 14px inherit', color: '#0071e3', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 20 }}>← Atrás</button>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#1d1d1f', margin: '0 0 6px' }}>
            {branch.title}
          </h2>
          <p style={{ fontSize: 15, color: '#86868b', margin: '0 0 36px' }}>{branch.subtitle}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {branch.questions.filter(q => !q.advanced || showAdvanced).map((q) => (
              <QuestionCard key={q.id} q={q} answers={answers} onAnswer={set} />
            ))}

            {/* Opciones avanzadas */}
            {branch.questions.some(q => q.advanced) && !showAdvanced && (
              <button onClick={() => setShowAdvanced(true)}
                style={{
                  alignSelf: 'center', padding: '10px 24px', borderRadius: 999,
                  font: '600 14px inherit', color: '#0071e3',
                  background: 'none', border: '1px solid rgba(0,113,227,0.3)', cursor: 'pointer',
                }}>
                ⚙️ Opciones técnicas
              </button>
            )}
          </div>

          {/* Ver precio → mapea respuestas a servicios y cotiza */}
          <button
            onClick={() => onComplete?.(planFromTreeAnswers(rootChoice, subChoice, answers))}
            style={{
              marginTop: 32, width: '100%', padding: '16px', borderRadius: 999,
              background: '#0071e3', color: '#fff', border: 'none',
              font: '700 16px inherit', letterSpacing: '-0.01em', cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#0077ed'}
            onMouseLeave={e => e.currentTarget.style.background = '#0071e3'}
          >
            Ver precio estimado →
          </button>
          <p style={{ fontSize: 12, color: '#aeaeb2', textAlign: 'center', margin: '10px 0 0' }}>
            Si algo quedó sin responder usamos un valor recomendado — después lo ajustas.
          </p>
        </div>
      )}

      <style>{`
        @keyframes cardIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}

// ═══ Question Card — renderiza según tipo ═══
function QuestionCard({ q, answers, onAnswer }: {
  q: TreeQuestion; answers: Answers; onAnswer: (id: string, val: string | number | boolean) => void;
}) {
  const current = answers[q.id];

  return (
    <div style={{
      background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)',
      border: '1px solid rgba(0,0,0,0.04)', borderRadius: 20, padding: 24,
    }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: '#1d1d1f', marginBottom: 4 }}>{q.question}</div>
      {q.help && <div style={{ fontSize: 13, color: '#86868b', marginBottom: 14, lineHeight: 1.45 }}>{q.help}</div>}

      {/* CARDS */}
      {q.type === 'cards' && q.options && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
          {q.options.map(o => (
            <button key={o.id} onClick={() => onAnswer(q.id, o.id)}
              style={{
                padding: '16px 18px', borderRadius: 16, font: 'inherit', cursor: 'pointer', textAlign: 'left',
                border: current === o.id ? '2px solid #0071e3' : '1px solid rgba(0,0,0,0.06)',
                background: current === o.id ? '#e8f0fe' : '#fff',
                transition: 'border-color 0.2s, background 0.2s',
              }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#1d1d1f' }}>{o.label}</div>
              {o.desc && <div style={{ fontSize: 12, color: '#86868b', marginTop: 2, lineHeight: 1.4 }}>{o.desc}</div>}
            </button>
          ))}
        </div>
      )}

      {/* SLIDER */}
      {q.type === 'slider' && q.slider && (
        <SliderWithPreview
          questionId={q.id}
          config={q.slider}
          value={typeof current === 'number' ? current : q.slider.min}
          onChange={(n) => onAnswer(q.id, n)}
        />
      )}

      {/* SELECT */}
      {q.type === 'select' && q.options && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {q.options.map(o => (
            <button key={o.id} onClick={() => onAnswer(q.id, o.id)}
              style={{
                padding: '10px 20px', borderRadius: 999, font: `500 14px inherit`, cursor: 'pointer',
                border: current === o.id ? '2px solid #0071e3' : '1px solid rgba(0,0,0,0.08)',
                background: current === o.id ? '#e8f0fe' : '#fff', color: '#1d1d1f',
              }}>{o.label}</button>
          ))}
        </div>
      )}

      {/* TOGGLE (avanzado) */}
      {q.type === 'toggle' && (
        <div onClick={() => onAnswer(q.id, !current)}
          style={{
            width: 48, height: 28, borderRadius: 14, cursor: 'pointer', position: 'relative',
            background: current ? '#30d158' : 'rgba(0,0,0,0.08)', transition: 'background 0.25s',
          }}>
          <div style={{
            position: 'absolute', top: 2, left: current ? 22 : 2, width: 24, height: 24,
            borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
            transition: 'left 0.25s cubic-bezier(0.3,0.9,0.4,1)',
          }} />
        </div>
      )}
      <details style={{ marginTop: 12 }}>
        <summary style={{ cursor:'pointer', fontSize:12, color:'#aeaeb2', listStyle:'none', userSelect:'none' }}>+ Detalles técnicos (opcional)</summary>
        <div style={{ marginTop:10, paddingTop:10, borderTop:'1px dashed rgba(0,0,0,0.06)', display:'flex', flexDirection:'column', gap:10 }}>
          {(q.advancedOptions||[]).map((adv: any) => (
            <div key={adv.id}>
              <div style={{ fontSize:13, fontWeight:500, color:'#86868b' }}>{adv.label}</div>
              {adv.help && <div style={{ fontSize:11, color:'#aeaeb2', marginBottom:4 }}>{adv.help}</div>}
              {adv.type==='select' && adv.options && (
                <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                  {adv.options.map((o: any) => (
                    <button key={o.id} onClick={()=>onAnswer(adv.id,o.id)} style={{ padding:'5px 12px', borderRadius:8, font:'400 12px inherit', cursor:'pointer', border:answers[adv.id]===o.id?'1.5px solid #0071e3':'1px solid rgba(0,0,0,0.06)', background:answers[adv.id]===o.id?'#e8f0fe':'#fafafa', color:answers[adv.id]===o.id?'#0071e3':'#86868b' }}>{o.label}</button>
                  ))}
                </div>
              )}
              {adv.type==='slider' && (
                <input type='range' min={adv.min||1} max={adv.max||5} step={adv.step||1}
                  value={answers[adv.id]||adv.defaultValue||adv.min||1}
                  onChange={e=>onAnswer(adv.id,Number(e.target.value))}
                  style={{ width:'100%', height:4, accentColor:'#0071e3' }} />
              )}
            </div>
          ))}
          {!(q.advancedOptions||[]).length && <span style={{ fontSize:12, color:'#aeaeb2' }}>Sin opciones para esta pregunta.</span>}
        </div>
      </details>
    </div>
  );
}

// ═══ Slider con Preview 3D conceptual ═══
function SliderWithPreview({ questionId, config, value, onChange }: {
  questionId: string; config: NonNullable<TreeQuestion['slider']>; value: number; onChange: (n: number) => void;
}) {
  const pct = ((value - config.min) / (config.max - config.min)) * 100;
  const tierHint = config.tierMap?.find(t => value <= t.max)?.tier ?? '';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Preview visual conceptual (CSS, no WebGL para simplicidad) */}
      {config.preview === 'detail-level' && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
          <svg width="200" height="80" viewBox="0 0 200 80">
            {value === 1 && (
              <polygon points="100,10 150,40 100,70 50,40" fill="none" stroke="#0071e3" strokeWidth="2" strokeDasharray="4,4" />
            )}
            {value === 2 && (
              <>
                <polygon points="100,10 150,40 100,70 50,40" fill="#e8f0fe" stroke="#0071e3" strokeWidth="1.5" />
                <line x1="100" y1="10" x2="100" y2="70" stroke="#0071e3" strokeWidth="0.8" opacity="0.5" />
                <line x1="50" y1="40" x2="150" y2="40" stroke="#0071e3" strokeWidth="0.8" opacity="0.5" />
              </>
            )}
            {value === 3 && (
              <>
                <polygon points="100,8 155,38 100,72 45,38" fill="#0071e3" opacity="0.15" stroke="#0071e3" strokeWidth="1" />
                {Array.from({ length: 8 }, (_, i) => {
                  const cx = 100 + Math.cos(i * Math.PI / 4) * 40;
                  const cy = 40 + Math.sin(i * Math.PI / 4) * 25;
                  return <circle key={i} cx={cx} cy={cy} r="3" fill="#0071e3" opacity="0.6" />;
                })}
                <circle cx="100" cy="40" r="4" fill="#0071e3" />
              </>
            )}
            <text x="100" y="79" textAnchor="middle" fontSize="9" fill="#86868b" fontFamily="inherit">
              {value === 1 ? 'Boceto — solo geometría' : value === 2 ? 'Medio — materiales simples' : 'Detalle — realista'}
            </text>
          </svg>
        </div>
      )}
      {config.preview === 'piece-count' && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, padding: '16px 0', flexWrap: 'wrap' }}>
          {Array.from({ length: Math.min(value, 12) }, (_, i) => (
            <div key={i} style={{
              width: 20, height: 20, borderRadius: 5,
              background: `hsl(${211 + i * 12}, 80%, ${65 - i * 2}%)`,
              opacity: 0.8, animation: `pieceIn 0.3s ${i * 0.03}s both`,
            }} />
          ))}
          {value > 12 && <span style={{ fontSize: 12, color: '#86868b' }}>+{value - 12} más</span>}
        </div>
      )}

      {/* Valor actual */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <strong style={{ fontSize: 24, fontWeight: 700, color: '#0071e3', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
          {value}
          <span style={{ fontSize: 14, color: '#86868b', fontWeight: 400, marginLeft: 6 }}>{config.unit}</span>
        </strong>
        {tierHint && (
          <span style={{ fontSize: 12, fontWeight: 600, color: '#0071e3', background: '#e8f0fe', padding: '2px 10px', borderRadius: 6 }}>
            {tierHint}
          </span>
        )}
      </div>

      {/* Track */}
      <div
        style={{ position: 'relative', height: 6, borderRadius: 3, background: 'rgba(0,0,0,0.06)', cursor: 'pointer' }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          const r = e.currentTarget.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
          onChange(Math.round((config.min + p * (config.max - config.min)) / config.step) * config.step);
        }}
        onPointerMove={(e) => {
          if (e.buttons !== 1) return;
          const r = e.currentTarget.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
          onChange(Math.round((config.min + p * (config.max - config.min)) / config.step) * config.step);
        }}
      >
        <div style={{
          position: 'absolute', left: 0, top: 0, height: '100%', borderRadius: 3,
          width: `${pct}%`, background: 'linear-gradient(90deg, #0071e3, #5ac8fa)',
          transition: 'width 0.2s cubic-bezier(0.25,0.8,0.4,1)',
        }} />
        <div style={{
          position: 'absolute', top: -8, left: `calc(${pct}% - 11px)`, width: 22, height: 22,
          borderRadius: '50%', background: '#fff', border: '0.5px solid rgba(0,0,0,0.04)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)', transition: 'left 0.2s cubic-bezier(0.25,0.8,0.4,1)',
        }} />
      </div>

      {/* Labels min/max */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#aeaeb2' }}>
        <span>{config.min} {config.unit}</span>
        <span>{config.max} {config.unit}</span>
      </div>

      <style>{`@keyframes pieceIn { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: scale(1); } }`}</style>
    </div>
  );
}
