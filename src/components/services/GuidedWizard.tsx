/**
 * GuidedWizard.tsx — Cotizador guiado por árbol de decisión.
 * Nivel 1: ¿Qué quieres lograr? → Nivel 2: tipo de experiencia → Nivel 3: detalles.
 * Preview 3D interactiva que cambia con los sliders + i18n ES/EN (ciclo 2.1).
 */

import { useState, useMemo, useEffect } from 'react';
import type { CSSProperties } from 'react';
import { ROOT_OPTIONS, WEB3D_LEVEL2, WEB3D_BRANCHES } from '../../data/services/decisionTree';
import type { TreeQuestion, TreeBranch, TreeOption } from '../../data/services/decisionTree';
import { planFromTreeAnswers } from '../../data/services/treeToQuote';
import type { WizardQuotePlan } from '../../data/services/treeToQuote';
import { EN, TREE_EN, VARIANTES } from '../../data/services/i18n';
import type { Lang } from '../../data/services/i18n';
import { BRAND } from '../../data/services/branding';
import { ModelPreview } from './ModelPreview';
import type { PreviewMode } from './ModelPreview';
import { TreeIcon, ChatIcon, MailIcon, GearIcon } from './icons';

type Answers = Record<string, string | number | boolean>;

/** Espejo EN de una rama (tipado laxo: ids dinámicos, fallback a ES). */
type BranchEn = {
  title?: string; subtitle?: string;
  questions?: Record<string, {
    question?: string; help?: string; unit?: string;
    options?: Record<string, { label: string; desc?: string }>;
    advanced?: Record<string, { label?: string; help?: string; options?: Record<string, string> }>;
  }>;
};
const branchEn = (id: string): BranchEn | undefined =>
  (TREE_EN.branches as Record<string, BranchEn | undefined>)[id];

export function GuidedWizard({ onComplete, lang = 'es' }: { onComplete?: (plan: WizardQuotePlan) => void; lang?: Lang }) {
  const [level, setLevel] = useState(1);
  const [rootChoice, setRootChoice] = useState('');
  const [subChoice, setSubChoice] = useState('');
  const [answers, setAnswers] = useState<Answers>({});
  const [showAdvanced, setShowAdvanced] = useState(false);
  const en = lang === 'en';
  const W = EN.wizard;

  const branch: TreeBranch | null = useMemo(() => {
    if (rootChoice === 'web-3d' && subChoice) return WEB3D_BRANCHES[subChoice] ?? null;
    return null;
  }, [rootChoice, subChoice]);

  const set = (id: string, val: string | number | boolean) =>
    setAnswers(p => ({ ...p, [id]: val }));

  /** Texto ES/EN de una opción del árbol (raíz, nivel 2 o pregunta de rama). */
  const optText = (scope: '__root' | '__level2' | { branchId: string; qId: string }, o: TreeOption): { label: string; desc?: string } => {
    if (!en) return { label: o.label, desc: o.desc };
    if (typeof scope === 'string') {
      const table = scope === '__root'
        ? (TREE_EN.root as Record<string, { label: string; desc?: string }>)
        : (TREE_EN.level2 as Record<string, { label: string; desc?: string }>);
      const t = table[o.id];
      return { label: t?.label ?? o.label, desc: t?.desc ?? o.desc };
    }
    const t = branchEn(scope.branchId)?.questions?.[scope.qId]?.options?.[o.id];
    return { label: t?.label ?? o.label, desc: t?.desc ?? o.desc };
  };

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 20px 80px' }}>
      {/* ═══ NIVEL 1: ¿Qué quieres lograr? ═══ */}
      {level === 1 && (
        <div style={{ paddingTop: 60 }}>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700,
            letterSpacing: '-0.03em', color: 'var(--cx-text)', textAlign: 'center',
            margin: '0 0 12px', lineHeight: 1.1,
          }}>{en ? W.l1Title : '¿Qué quieres lograr?'}</h1>
          <p style={{ fontSize: 17, color: 'var(--cx-muted)', textAlign: 'center', margin: '0 0 48px' }}>
            {en ? W.l1Sub : 'Elige una opción y te guiamos paso a paso.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
            {ROOT_OPTIONS.filter(o => o.id !== 'no-se').map((o, i) => {
              const t = optText('__root', o);
              return (
                <button key={o.id}
                  onClick={() => { setRootChoice(o.id); setLevel(o.id === 'no-se' ? 1 : 2); }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14, padding: '20px 22px',
                    background: 'var(--cx-card)', backdropFilter: 'blur(12px)',
                    border: '1px solid var(--cx-border)', borderRadius: 20,
                    cursor: 'pointer', font: 'inherit', textAlign: 'left',
                    transition: 'transform 0.25s cubic-bezier(0.25,0.8,0.4,1), box-shadow 0.25s',
                    animation: `cardIn 0.4s ${i * 0.06}s cubic-bezier(0.25,0.8,0.4,1) both`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--cx-shadow-hover)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  <span style={{ color: 'var(--cx-accent)', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <TreeIcon name={o.icon ?? ''} size={26} />
                  </span>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--cx-text)', letterSpacing: '-0.01em' }}>{t.label}</div>
                    <div style={{ fontSize: 13, color: 'var(--cx-muted)', marginTop: 3, lineHeight: 1.4 }}>{t.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <button onClick={() => setRootChoice('no-se')}
              style={{ font: '500 15px inherit', color: 'var(--cx-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 20px' }}>
              {en ? W.notSure : 'No estoy seguro — ayúdame a decidir →'}
            </button>
          </div>
        </div>
      )}

      {/* NO ESTOY SEGURO */}
      {level === 1 && rootChoice === 'no-se' && (
        <div style={{ paddingTop: 60, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--cx-text)', margin: '0 0 8px' }}>{en ? W.ideaTitle : 'Cuéntame tu idea'}</h2>
          <p style={{ fontSize: 15, color: 'var(--cx-muted)', margin: '0 0 40px' }}>{en ? W.ideaSub : 'No necesitas saber cómo se llama — describe lo que imaginas.'}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14, maxWidth: 520, margin: '0 auto' }}>
            <a href={`https://wa.me/${BRAND.whatsappNumber}`} target='_blank' rel='noopener noreferrer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '28px 24px', background: 'var(--cx-card)', backdropFilter: 'blur(12px)', border: '1px solid var(--cx-border)', borderRadius: 20, textDecoration: 'none', font: 'inherit', textAlign: 'center' }}>
              <span style={{ color: 'var(--cx-accent)', display: 'flex' }}><ChatIcon size={30} /></span>
              <strong style={{ fontSize: 17, fontWeight: 700, color: 'var(--cx-text)' }}>{en ? W.whatsapp : 'WhatsApp'}</strong>
              <span style={{ fontSize: 13, color: 'var(--cx-muted)' }}>{en ? W.ideaWa : 'Describe tu idea y te respondo'}</span>
            </a>
            <a href={`mailto:${BRAND.contactEmail}?subject=${encodeURIComponent(en ? 'Project idea' : 'Idea de proyecto')}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '28px 24px', background: 'var(--cx-card)', backdropFilter: 'blur(12px)', border: '1px solid var(--cx-border)', borderRadius: 20, textDecoration: 'none', font: 'inherit', textAlign: 'center' }}>
              <span style={{ color: 'var(--cx-accent)', display: 'flex' }}><MailIcon size={30} /></span>
              <strong style={{ fontSize: 17, fontWeight: 700, color: 'var(--cx-text)' }}>{en ? W.email : 'Correo'}</strong>
              <span style={{ fontSize: 13, color: 'var(--cx-muted)' }}>{en ? W.ideaMail : 'Adjunta archivos si los tienes'}</span>
            </a>
          </div>
          <button onClick={() => setRootChoice('')} style={{ marginTop: 20, font: '600 14px inherit', color: 'var(--cx-accent)', background: 'none', border: 'none', cursor: 'pointer' }}>{en ? W.back : '← Volver'}</button>
        </div>
      )}

      {/* RAMAS PRÓXIMAMENTE (video / imágenes / IA): contacto directo, sin dead-end */}
      {level === 2 && rootChoice !== 'web-3d' && (
        <div style={{ paddingTop: 60, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--cx-text)', margin: '0 0 8px' }}>{en ? W.comingTitle : 'Te cotizo esto personalmente'}</h2>
          <p style={{ fontSize: 15, color: 'var(--cx-muted)', margin: '0 auto 40px', maxWidth: 440, lineHeight: 1.5 }}>
            {en ? W.comingSub : 'El cotizador guiado cubre webs con 3D. Para video, imágenes o IA escríbeme directamente y te respondo con una propuesta en menos de 24 h.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14, maxWidth: 520, margin: '0 auto' }}>
            <a href={`https://wa.me/${BRAND.whatsappNumber}`} target='_blank' rel='noopener noreferrer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '28px 24px', background: 'var(--cx-card)', backdropFilter: 'blur(12px)', border: '1px solid var(--cx-border)', borderRadius: 20, textDecoration: 'none', font: 'inherit', textAlign: 'center' }}>
              <span style={{ color: 'var(--cx-accent)', display: 'flex' }}><ChatIcon size={30} /></span>
              <strong style={{ fontSize: 17, fontWeight: 700, color: 'var(--cx-text)' }}>{en ? W.whatsapp : 'WhatsApp'}</strong>
              <span style={{ fontSize: 13, color: 'var(--cx-muted)' }}>{en ? W.comingWa : 'Cuéntame tu proyecto'}</span>
            </a>
            <a href={`mailto:${BRAND.contactEmail}?subject=${encodeURIComponent(en ? 'Project quote' : 'Cotización de proyecto')}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '28px 24px', background: 'var(--cx-card)', backdropFilter: 'blur(12px)', border: '1px solid var(--cx-border)', borderRadius: 20, textDecoration: 'none', font: 'inherit', textAlign: 'center' }}>
              <span style={{ color: 'var(--cx-accent)', display: 'flex' }}><MailIcon size={30} /></span>
              <strong style={{ fontSize: 17, fontWeight: 700, color: 'var(--cx-text)' }}>{en ? W.email : 'Correo'}</strong>
              <span style={{ fontSize: 13, color: 'var(--cx-muted)' }}>{en ? W.comingMail : 'Con referencias si tienes'}</span>
            </a>
          </div>
          <button onClick={() => setLevel(1)} style={{ marginTop: 20, font: '600 14px inherit', color: 'var(--cx-accent)', background: 'none', border: 'none', cursor: 'pointer' }}>{en ? W.back : '← Volver'}</button>
        </div>
      )}

      {/* ═══ NIVEL 2 (web-3d): ¿Qué tipo de experiencia? ═══ */}
      {level === 2 && rootChoice === 'web-3d' && (
        <div style={{ paddingTop: 40 }}>
          <button onClick={() => setLevel(1)}
            style={{ font: '600 14px inherit', color: 'var(--cx-accent)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 20 }}>{en ? W.back : '← Atrás'}</button>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--cx-text)', margin: '0 0 8px' }}>
            {en ? W.l2Title : '¿Qué tipo de web con 3D?'}
          </h2>
          <p style={{ fontSize: 15, color: 'var(--cx-muted)', margin: '0 0 32px' }}>{en ? W.l2Sub : 'No necesitas saber términos técnicos — describe lo que imaginas.'}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
            {WEB3D_LEVEL2.map((o, i) => {
              const t = optText('__level2', o);
              return (
                <button key={o.id}
                  onClick={() => { setSubChoice(o.id); setLevel(3); }}
                  style={{
                    display: 'flex', flexDirection: 'column', gap: 6, padding: '22px 20px',
                    background: 'var(--cx-card)', backdropFilter: 'blur(12px)',
                    border: '1px solid var(--cx-border)', borderRadius: 20,
                    cursor: 'pointer', font: 'inherit', textAlign: 'left',
                    animation: `cardIn 0.4s ${i * 0.06}s both`,
                  }}>
                  <span style={{ color: 'var(--cx-accent)', display: 'flex', marginBottom: 8 }}>
                    <TreeIcon name={o.icon ?? ''} size={24} />
                  </span>
                  <strong style={{ fontSize: 17, fontWeight: 700, color: 'var(--cx-text)', letterSpacing: '-0.01em' }}>{t.label}</strong>
                  <span style={{ fontSize: 13, color: 'var(--cx-muted)', lineHeight: 1.45 }}>{t.desc}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══ NIVEL 3: Preguntas específicas de la rama ═══ */}
      {level === 3 && branch && (
        <div style={{ paddingTop: 40 }}>
          <button onClick={() => setLevel(2)}
            style={{ font: '600 14px inherit', color: 'var(--cx-accent)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 20 }}>{en ? W.back : '← Atrás'}</button>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--cx-text)', margin: '0 0 6px' }}>
            {en ? branchEn(branch.id)?.title ?? branch.title : branch.title}
          </h2>
          <p style={{ fontSize: 15, color: 'var(--cx-muted)', margin: '0 0 36px' }}>
            {en ? branchEn(branch.id)?.subtitle ?? branch.subtitle : branch.subtitle}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {branch.questions.filter(q => !q.advanced || showAdvanced).map((q) => (
              <QuestionCard key={q.id} q={q} answers={answers} onAnswer={set} lang={lang} branchId={branch.id} />
            ))}

            {/* Opciones avanzadas */}
            {branch.questions.some(q => q.advanced) && !showAdvanced && (
              <button onClick={() => setShowAdvanced(true)}
                style={{
                  alignSelf: 'center', display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '10px 24px', borderRadius: 999,
                  font: '600 14px inherit', color: 'var(--cx-accent)',
                  background: 'none', border: '1px solid var(--cx-accent-border)', cursor: 'pointer',
                }}>
                <GearIcon size={16} /> {en ? W.opcionesTecnicas : 'Opciones técnicas'}
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
            onMouseEnter={e => e.currentTarget.style.background = 'var(--cx-accent-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = '#0071e3'}
          >
            {en ? W.verPrecio : 'Ver precio estimado →'}
          </button>
          <p style={{ fontSize: 12, color: 'var(--cx-faint)', textAlign: 'center', margin: '10px 0 0' }}>
            {en ? W.hint : 'Si algo quedó sin responder usamos un valor recomendado — después lo ajustas.'}
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
function QuestionCard({ q, answers, onAnswer, lang, branchId }: {
  q: TreeQuestion; answers: Answers; onAnswer: (id: string, val: string | number | boolean) => void; lang: Lang; branchId: string;
}) {
  const current = answers[q.id];
  const en = lang === 'en';
  const qEn = en ? branchEn(branchId)?.questions?.[q.id] : undefined;

  return (
    <div style={{
      background: 'var(--cx-card)', backdropFilter: 'blur(12px)',
      border: '1px solid var(--cx-border)', borderRadius: 20, padding: 24,
    }}>
      <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--cx-text)', marginBottom: 4 }}>{qEn?.question ?? q.question}</div>
      {(qEn?.help ?? q.help) && <div style={{ fontSize: 13, color: 'var(--cx-muted)', marginBottom: 14, lineHeight: 1.45 }}>{qEn?.help ?? q.help}</div>}

      {/* Preview de tarjetas: acabados con el modelo real (HolyBro X500) */}
      {q.type === 'cards' && q.preview === 'finish' && (
        <div style={{ marginBottom: 14 }}>
          <ModelPreview mode="finish" finish={(typeof current === 'string' && ['simple', 'variado', 'detallado'].includes(current) ? current : 'variado') as 'simple' | 'variado' | 'detallado'} lang={lang} height={160} />
          <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--cx-muted)', marginTop: 2 }}>
            {en ? 'Real model (HolyBro X500) with the selected finish' : 'Modelo real (HolyBro X500) con el acabado elegido'}
          </div>
        </div>
      )}

      {/* CARDS */}
      {q.type === 'cards' && q.options && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
          {q.options.map(o => {
            const t = en
              ? { label: qEn?.options?.[o.id]?.label ?? o.label, desc: qEn?.options?.[o.id]?.desc ?? o.desc }
              : { label: o.label, desc: o.desc };
            return (
              <button key={o.id} onClick={() => onAnswer(q.id, o.id)}
                style={{
                  padding: '16px 18px', borderRadius: 16, font: 'inherit', cursor: 'pointer', textAlign: 'left',
                  border: current === o.id ? '2px solid var(--cx-accent)' : '1px solid var(--cx-border)',
                  background: current === o.id ? 'var(--cx-accent-soft)' : 'var(--cx-card-solid)',
                  color: 'var(--cx-text)',
                  transition: 'border-color 0.2s, background 0.2s',
                }}>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{t.label}</div>
                {t.desc && <div style={{ fontSize: 12, color: 'var(--cx-muted)', marginTop: 2, lineHeight: 1.4 }}>{t.desc}</div>}
              </button>
            );
          })}
        </div>
      )}

      {/* SLIDER */}
      {q.type === 'slider' && q.slider && (
        <SliderWithPreview
          branchId={branchId}
          questionId={q.id}
          config={q.slider}
          value={typeof current === 'number' ? current : q.slider.min}
          onChange={(n) => onAnswer(q.id, n)}
          lang={lang}
        />
      )}

      {/* SELECT */}
      {q.type === 'select' && q.options && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {q.options.map(o => {
            const label = en ? qEn?.options?.[o.id]?.label ?? o.label : o.label;
            return (
              <button key={o.id} onClick={() => onAnswer(q.id, o.id)}
                style={{
                  padding: '10px 20px', borderRadius: 999, font: `500 14px inherit`, cursor: 'pointer',
                  border: current === o.id ? '2px solid var(--cx-accent)' : '1px solid var(--cx-border-strong)',
                  background: current === o.id ? 'var(--cx-accent-soft)' : 'var(--cx-card-solid)', color: 'var(--cx-text)',
                }}>{label}</button>
            );
          })}
        </div>
      )}

      {/* TOGGLE (avanzado) */}
      {q.type === 'toggle' && (
        <div onClick={() => onAnswer(q.id, !current)}
          style={{
            width: 48, height: 28, borderRadius: 14, cursor: 'pointer', position: 'relative',
            background: current ? '#30d158' : 'var(--cx-soft)', transition: 'background 0.25s',
          }}>
          <div style={{
            position: 'absolute', top: 2, left: current ? 22 : 2, width: 24, height: 24,
            borderRadius: '50%', background: 'var(--cx-card-solid)', boxShadow: 'var(--cx-shadow-knob)',
            transition: 'left 0.25s cubic-bezier(0.3,0.9,0.4,1)',
          }} />
        </div>
      )}
      <details style={{ marginTop: 12 }}>
        <summary style={{ cursor: 'pointer', fontSize: 12, color: 'var(--cx-faint)', listStyle: 'none', userSelect: 'none' }}>
          {en ? EN.wizard.detalles : '+ Detalles técnicos (opcional)'}
        </summary>
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px dashed var(--cx-soft)', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {(q.advancedOptions || []).map((adv) => {
            const aEn = en ? qEn?.advanced?.[adv.id] : undefined;
            return (
              <div key={adv.id}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--cx-muted)' }}>{aEn?.label ?? adv.label}</div>
                {(aEn?.help ?? adv.help) && <div style={{ fontSize: 11, color: 'var(--cx-faint)', marginBottom: 4 }}>{aEn?.help ?? adv.help}</div>}
                {adv.type === 'select' && adv.options && (
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {adv.options.map((o) => (
                      <button key={o.id} onClick={() => onAnswer(adv.id, o.id)} style={{ padding: '5px 12px', borderRadius: 8, font: '400 12px inherit', cursor: 'pointer', border: answers[adv.id] === o.id ? '1.5px solid var(--cx-accent)' : '1px solid var(--cx-border)', background: answers[adv.id] === o.id ? 'var(--cx-accent-soft)' : 'var(--cx-tile)', color: answers[adv.id] === o.id ? 'var(--cx-accent)' : 'var(--cx-muted)' }}>{aEn?.options?.[o.id] ?? o.label}</button>
                    ))}
                  </div>
                )}
                {adv.type === 'slider' && (() => {
                  const av = answers[adv.id];
                  return (
                    <input type='range' min={adv.min || 1} max={adv.max || 5} step={adv.step || 1}
                      value={typeof av === 'number' ? av : adv.defaultValue ?? adv.min ?? 1}
                      onChange={e => onAnswer(adv.id, Number(e.target.value))}
                      style={{ width: '100%', height: 4, accentColor: '#0071e3' }} />
                  );
                })()}
              </div>
            );
          })}
          {!(q.advancedOptions || []).length && <span style={{ fontSize: 12, color: 'var(--cx-faint)' }}>{en ? EN.wizard.sinOpciones : 'Sin opciones para esta pregunta.'}</span>}
        </div>
      </details>
    </div>
  );
}

// ═══ Slider con Preview 3D procedural ═══
function SliderWithPreview({ branchId, questionId, config, value, onChange, lang }: {
  branchId: string; questionId: string; config: NonNullable<TreeQuestion['slider']>;
  value: number; onChange: (n: number) => void; lang: Lang;
}) {
  const en = lang === 'en';
  const qEn = en ? branchEn(branchId)?.questions?.[questionId] : undefined;
  const tierHint = config.tierMap?.find(t => value <= t.max)?.tier ?? '';
  const preview = config.preview;
  const continuous = config.continuous === true;
  const shown = continuous ? Math.round(value * 10) / 10 : value;
  const pct = ((shown - config.min) / (config.max - config.min)) * 100;
  const unit = qEn?.unit ?? config.unit;

  // 1.1: snapping magnético a los puntos discretos al soltar
  const snapOnRelease = () => {
    if (!continuous) return;
    const snapped = Math.round(value);
    if (Math.abs(value - snapped) <= 0.25) onChange(snapped);
  };

  const applyValue = (clientX: number, el: HTMLDivElement) => {
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    const raw = config.min + p * (config.max - config.min);
    const step = continuous ? 0.1 : config.step;
    onChange(Math.round(raw / step) * step);
  };

  // 1.4: selección del configurador (interactiva, sembrada por el slider)
  const [sel, setSel] = useState({ c: 0, m: 0, a: 0 });
  useEffect(() => {
    const vi = Math.max(0, value - 1);
    setSel({
      c: vi % VARIANTES.colores.length,
      m: Math.floor(vi / VARIANTES.colores.length) % VARIANTES.materiales.length,
      a: Math.floor(vi / (VARIANTES.colores.length * VARIANTES.materiales.length)) % VARIANTES.accesorios.length,
    });
  }, [value]);

  let mode: PreviewMode | undefined;
  let caption = '';
  if (preview === 'detail-level') {
    mode = 'detail';
    const caps = en ? EN.wizard.detailCaptions : ['Boceto — solo geometría', 'Base — formas simples', 'Web — listo para producción', 'Alto — detalles finos', 'Máximo — nivel fotorrealista'];
    caption = caps[Math.round(Math.min(5, Math.max(1, value))) - 1];
  } else if (preview === 'piece-count') {
    mode = 'pieces';
    caption = en ? `${value} ${value === 1 ? EN.wizard.pieceSingular : EN.wizard.piecePlural}` : `${value} ${value === 1 ? 'pieza en el ensamblaje' : 'piezas en el ensamblaje'}`;
  } else if (preview === 'story') {
    mode = 'story';
    caption = en
      ? `Your page will play ${value} animated moment${value === 1 ? '' : 's'} — they play in sequence`
      : `Tu página reproducirá ${value} momento${value === 1 ? '' : 's'} animado${value === 1 ? '' : 's'} — se reproducen en secuencia`;
  } else if (preview === 'variant-swirl') {
    mode = 'variants';
  } else if (preview === 'assembly') {
    mode = 'assembly';
    caption = en
      ? 'Real model (HolyBro X500): big parts first, instances count once'
      : 'Modelo real (HolyBro X500): primero las piezas grandes; las instancias cuentan una vez';
  } else if (preview === 'shader-dial') {
    mode = 'shader-dial';
    const caps = en
      ? ['Photoreal (PBR)', 'Product — clean studio', 'Semi-real grading', 'Toon / stylized', 'Hologram — full effect']
      : ['Fotorrealista (PBR)', 'Producto — estudio limpio', 'Semirrealista', 'Toon / estilizado', 'Holograma — efecto completo'];
    caption = caps[Math.round(Math.min(5, Math.max(1, value))) - 1];
  } else if (preview === 'surface-morph') {
    mode = 'surface';
    const caps = en
      ? ['Hard prismatic', 'Softening edges', 'Curved surfaces', 'Complex freeform', 'Sculpted — quoted via discovery']
      : ['Prismática dura', 'Bordes suavizándose', 'Curvas complejas', 'Freeform compleja', 'Esculpidas — se acota en discovery'];
    caption = caps[Math.round(Math.min(5, Math.max(1, value))) - 1];
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Preview WebGL procedural — reacciona al slider, se puede arrastrar */}
      {mode && (
        <div>
          <ModelPreview mode={mode} detail={shown} pieces={value} story={value} surface={value} variantSel={sel} lang={lang} height={mode === 'story' ? 165 : 150} />
          {mode !== 'variants' && (
            <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--cx-muted)', marginTop: 2 }}>{caption}</div>
          )}
        </div>
      )}

      {/* 1.4 rework: configurador interactivo — chips clickeables con DESBLOQUEO progresivo */}
      {mode === 'variants' && (() => {
        // orden de desbloqueo: colores 0..5, material 1, material 2, accesorio 1, accesorio 2
        const unlocked = Math.max(0, value - 1); // slot 0 de cada eje siempre activo
        const orderOf = (axis: number, i: number) => (i === 0 ? -1 : axis === 0 ? i - 1 : axis === 1 ? 5 + i : 7 + i);
        const locked = (axis: number, i: number) => orderOf(axis, i) >= unlocked;
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 12.5, color: 'var(--cx-accent)', fontWeight: 600, textAlign: 'center' }}>
              {en ? 'Try it — this is how your customer will configure the product' : 'Pruébalo — así configurará tu cliente el producto'}
            </div>
            {([
              { axis: 0, label: en ? 'Color' : 'Color', opts: en ? EN.variantes.colores : VARIANT_AXIS_ES.colores, selIdx: sel.c, colors: VARIANTES.colores, set: (i: number) => setSel(s => ({ ...s, c: i })) },
              { axis: 1, label: en ? 'Material' : 'Material', opts: en ? EN.variantes.materiales : VARIANT_AXIS_ES.materiales, selIdx: sel.m, colors: undefined, set: (i: number) => setSel(s => ({ ...s, m: i })) },
              { axis: 2, label: en ? 'Accessory' : 'Accesorio', opts: en ? EN.variantes.accesorios : VARIANT_AXIS_ES.accesorios, selIdx: sel.a, colors: undefined, set: (i: number) => setSel(s => ({ ...s, a: i })) },
            ] as const).map(axis => (
              <div key={axis.label} style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--cx-faint)', textTransform: 'uppercase', letterSpacing: '0.05em', width: 74, textAlign: 'right' }}>{axis.label}</span>
                {axis.opts.map((o, i) => {
                  const isLocked = locked(axis.axis, i);
                  return (
                    <button key={o} onClick={() => !isLocked && axis.set(i)} disabled={isLocked} title={isLocked ? (en ? 'Unlocks with more variants' : 'Se desbloquea con más variantes') : undefined}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500,
                        cursor: isLocked ? 'not-allowed' : 'pointer',
                        padding: '4px 12px', borderRadius: 999, font: 'inherit',
                        border: !isLocked && axis.selIdx === i ? '1.5px solid var(--cx-accent)' : '1px solid var(--cx-border)',
                        background: !isLocked && axis.selIdx === i ? 'var(--cx-accent-soft)' : 'var(--cx-card-solid)',
                        color: isLocked ? 'var(--cx-faint)' : !isLocked && axis.selIdx === i ? 'var(--cx-accent)' : 'var(--cx-muted)',
                        opacity: isLocked ? 0.45 : 1,
                      }}>
                      {axis.colors && <span style={{ width: 10, height: 10, borderRadius: '50%', background: axis.colors[i], display: 'inline-block' }} />}
                      {o}
                    </button>
                  );
                })}
              </div>
            ))}
            <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--cx-muted)' }}>
              {en
                ? `With ${value} variants, ${Math.min(value, 12)} of the 12 base combinations unlock — more variants, more options for your customer`
                : `Con ${value} variantes se desbloquean ${Math.min(value, 12)} de las 12 combinaciones base — más variantes, más opciones para tu cliente`}
            </div>
          </div>
        );
      })()}

      {/* Valor actual */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <strong style={{ fontSize: 24, fontWeight: 700, color: 'var(--cx-accent)', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
          {shown}
          <span style={{ fontSize: 14, color: 'var(--cx-muted)', fontWeight: 400, marginLeft: 6 }}>{unit}</span>
        </strong>
        {tierHint && (
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--cx-accent)', background: 'var(--cx-accent-soft)', padding: '2px 10px', borderRadius: 6 }}>
            {tierHint}
          </span>
        )}
      </div>

      {/* Track — con puntos de snapping visibles en los sliders continuos */}
      <div
        style={{ position: 'relative', height: 6, borderRadius: 3, background: 'var(--cx-soft)', cursor: 'pointer', touchAction: 'none' }}
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); applyValue(e.clientX, e.currentTarget); }}
        onPointerMove={(e) => { if (e.buttons !== 1) return; applyValue(e.clientX, e.currentTarget); }}
        onPointerUp={snapOnRelease}
      >
        <div style={{
          position: 'absolute', left: 0, top: 0, height: '100%', borderRadius: 3,
          width: `${pct}%`, background: 'linear-gradient(90deg, #0071e3, #5ac8fa)',
        }} />
        {continuous && Array.from({ length: Math.round(config.max - config.min) + 1 }, (_, i) => {
          const sp = config.min + i;
          const spct = ((sp - config.min) / (config.max - config.min)) * 100;
          return <div key={sp} style={{ position: 'absolute', top: 1, left: `calc(${spct}% - 2.5px)`, width: 5, height: 5, borderRadius: '50%', background: 'var(--cx-card-solid)', boxShadow: '0 0 0 1px var(--cx-border-strong)' }} />;
        })}
        <div style={{
          position: 'absolute', top: -8, left: `calc(${pct}% - 11px)`, width: 22, height: 22,
          borderRadius: '50%', background: 'var(--cx-card-solid)', border: '0.5px solid var(--cx-border)',
          boxShadow: 'var(--cx-shadow-knob)',
        }} />
      </div>

      {/* Labels min/max */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--cx-faint)' }}>
        <span>{config.min} {unit}</span>
        <span>{config.max} {unit}</span>
      </div>
    </div>
  );
}

/** Nombres ES de los ejes de variante (los EN viven en i18n). */
const VARIANT_AXIS_ES = {
  colores: ['Grafito', 'Blanco ártico', 'Azul océano', 'Coral', 'Verde bosque', 'Arena'],
  materiales: VARIANTES.materiales.map(m => m.es),
  accesorios: VARIANTES.accesorios.map(a => a.es),
};
