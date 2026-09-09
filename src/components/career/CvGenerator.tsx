// src/components/career/CvGenerator.tsx — Generador de CVs (doc-17).
//
// Dos modos:
// 1. Variante base — elige una de las 5 familias de rol.
// 2. Por aplicación — CV + brief de portafolio personalizados por empresa:
//    variante sugerida automáticamente desde el rol, keywords/énfasis extraídos
//    de la investigación (CompanyResearch) y sobreescrituras humanas.
//    Todo persiste en careerStore.applicationKits (ApplicationKit).

import React, { useMemo, useState } from 'react';
import { cvBase } from '../../data/career/cv/cvData';
import { cvVariants } from '../../data/career/cv/cvVariants';
import { renderCvMarkdown, stripEditorialNotes, countEditorialNotes } from '../../lib/career/cvRender';
import {
  applyTailoring,
  autoTailorFromResearch,
  createDraftKit,
  suggestVariant,
  type ApplicationKit,
} from '../../lib/career/cvTailor';
import { useCareerStore } from '../../data/career/careerStore';
import Button from '../ui/Button';
import { FileText, Printer, Copy, CheckCircle2, AlertCircle, Wand2, Save, Target } from 'lucide-react';

type Mode = 'base' | 'application';

const CONFIDENCE_LABEL: Record<ApplicationKit['variantConfidence'], string> = {
  explicit: 'match explícito',
  partial: 'match parcial',
  fallback: 'fallback (revisa)',
};

export default function CvGenerator() {
  const [mode, setMode] = useState<Mode>('base');
  const [variantId, setVariantId] = useState(cvVariants[0].id);
  const [includeKeywords, setIncludeKeywords] = useState(false);
  const [copied, setCopied] = useState(false);
  const [savedKit, setSavedKit] = useState(false);

  // ——— Por aplicación ———
  const [appId, setAppId] = useState('');
  const [kit, setKit] = useState<ApplicationKit | null>(null);

  const applications = useCareerStore((s) => s.applications);
  const companyResearch = useCareerStore((s) => s.companyResearch);
  const updateApplication = useCareerStore((s) => s.updateApplication);
  const upsertApplicationKit = useCareerStore((s) => s.upsertApplicationKit);

  const application = applications.find((a) => a.id === appId);
  const research = application
    ? companyResearch[application.companyName.toLowerCase()]
    : undefined;

  /** Al elegir aplicación: kit guardado o borrador automático. */
  const selectApplication = (id: string) => {
    setAppId(id);
    if (!id) { setKit(null); return; }
    const app = applications.find((a) => a.id === id);
    if (!app) { setKit(null); return; }
    const saved = useCareerStore.getState().applicationKits[id];
    setKit(saved ?? createDraftKit(id, app.roleTitle, companyResearch[app.companyName.toLowerCase()]));
  };

  /** Variante efectiva según el modo. */
  const activeVariant = useMemo(() => {
    const base = cvVariants.find((v) => v.id === variantId) ?? cvVariants[0];
    if (mode === 'base') return base;
    if (!kit) return base;
    const kitVariant = cvVariants.find((v) => v.id === kit.variantId) ?? base;
    return applyTailoring(kitVariant, kit, research);
  }, [mode, variantId, kit, research]);

  const markdown = useMemo(
    () => renderCvMarkdown(cvBase, activeVariant, { includeKeywords }),
    [activeVariant, includeKeywords],
  );

  /** Notas editoriales [verify…] del doc-17 presentes en los datos — aviso UI, nunca en el CV. */
  const pendingNotes = useMemo(() => {
    const texts = [
      ...cvBase.projects.flatMap((p) => [p.meta, ...p.bullets]),
      ...Object.values(activeVariant.projectBullets).flat(),
      ...cvBase.education.flatMap((e) => [e.degree, e.period ?? '', ...e.bullets]),
      ...cvBase.experience.flatMap((e) => [e.period, ...e.bullets]),
    ];
    return texts.reduce((n, t) => n + countEditorialNotes(t), 0);
  }, [activeVariant]);

  const companySlug = application ? application.companyName.toLowerCase().replace(/[^a-z0-9]+/g, '-') : null;
  const cvVersion = companySlug
    ? `${kit?.variantId ?? variantId}+${companySlug}-v1 (${new Date().toISOString().slice(0, 10)})`
    : `${activeVariant.id}-v1 (${new Date().toISOString().slice(0, 10)})`;

  const handlePrint = () => window.print();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        mode === 'application' && kit ? `${markdown}\n\n---\n\n${renderBriefMarkdown(kit, application?.companyName ?? '')}` : markdown,
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard bloqueado: contenido visible para copia manual.
    }
  };

  const handleSaveKit = () => {
    if (!kit) return;
    upsertApplicationKit({ ...kit, updatedAtIso: new Date().toISOString().slice(0, 10) });
    setSavedKit(true);
    setTimeout(() => setSavedKit(false), 2200);
  };

  const handleMarkSent = () => {
    if (!appId) return;
    updateApplication(appId, { cvVersionSent: cvVersion });
  };

  /** Re-sugerir variante + auto-tailoring desde la investigación actual. */
  const handleAutoTailor = () => {
    if (!application || !kit) return;
    const suggestion = suggestVariant(application.roleTitle);
    const auto = autoTailorFromResearch(research);
    setKit((k) =>
      k
        ? {
            ...k,
            variantId: suggestion.variantId,
            variantConfidence: suggestion.confidence,
            extraKeywords: [...new Set([...k.extraKeywords, ...auto.extraKeywords])],
            emphasisExtra: [...new Set([...k.emphasisExtra, ...auto.emphasisExtra])],
          }
        : k,
    );
  };

  // ——— Preview ———
  const previewProjects = useMemo(() => {
    const included = cvBase.projects.filter((p) => !p.optional);
    const order = activeVariant.projectOrder ?? included.map((p) => p.id);
    const inOrder = order.map((id) => included.find((p) => p.id === id)).filter((p): p is NonNullable<typeof p> => Boolean(p));
    return [...inOrder, ...included.filter((p) => !order.includes(p.id))];
  }, [activeVariant]);

  return (
    <div className="ds-stack">
      <div className="cv-no-print ds-stack-sm">
        <div className="ds-row-between" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <div>
            <span className="ds-eyebrow">Generador de CV</span>
            <h3 style={{ fontSize: 'var(--fs-section)', fontWeight: 700, margin: 0 }}>
              CV por familia de rol — doc-17
            </h3>
          </div>
          <div className="ds-row" style={{ gap: 'var(--space-1)' }}>
            <Button variant="secondary" size="sm" onClick={handleCopy}>
              {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
              {copied ? 'Copiado' : 'Copiar Markdown'}
            </Button>
            <Button variant="primary" size="sm" onClick={handlePrint}>
              <Printer size={14} /> Imprimir / PDF
            </Button>
          </div>
        </div>

        {/* Selector de modo */}
        <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)', width: 'fit-content' }}>
          {([['base', 'Variante base'], ['application', 'Por aplicación']] as const).map(([m, label]) => (
            <button
              key={m}
              type="button"
              onClick={() => { setMode(m); if (m === 'base') { setAppId(''); setKit(null); } }}
              style={{
                background: mode === m ? 'var(--color-accent-primary)' : 'transparent',
                color: mode === m ? '#000000' : 'var(--text-secondary)',
                border: 'none', padding: '6px 14px', borderRadius: '7px',
                fontSize: '0.78rem', fontWeight: mode === m ? 700 : 500, cursor: 'pointer',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {mode === 'base' && (
          <>
            <div className="ds-row" style={{ gap: '6px', flexWrap: 'wrap' }}>
              {cvVariants.map((v) => (
                <VariantChip key={v.id} active={v.id === variantId} label={v.name} secondary={v.secondaryRoute} onClick={() => setVariantId(v.id)} />
              ))}
            </div>
            <VariantInfo variantId={variantId} />
            <label className="ds-row" style={{ gap: '6px', fontSize: '0.78rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              <input type="checkbox" checked={includeKeywords} onChange={(e) => setIncludeKeywords(e.target.checked)} />
              Incluir línea de keywords al copiar
            </label>
          </>
        )}

        {mode === 'application' && (
          <div className="ds-stack-sm">
            {/* Paso 1: aplicación */}
            <div className="ds-row" style={{ gap: 'var(--space-2)', flexWrap: 'wrap', alignItems: 'center' }}>
              <Target size={14} style={{ color: 'var(--text-tertiary)' }} />
              <select
                value={appId}
                onChange={(e) => selectApplication(e.target.value)}
                style={{ background: 'var(--color-surface-2)', color: 'var(--text-primary)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-s)', padding: '6px 10px', fontSize: '0.8rem', minWidth: '260px' }}
              >
                <option value="">— elegir aplicación del pipeline —</option>
                {applications.filter((a) => a.stage !== 'Cerrado').map((a) => (
                  <option key={a.id} value={a.id}>{a.companyName} · {a.roleTitle}</option>
                ))}
              </select>
              {kit && (
                <Button variant="ghost" size="sm" onClick={handleAutoTailor}>
                  <Wand2 size={13} /> Auto-personalizar desde investigación
                </Button>
              )}
            </div>

            {application && !research && (
              <div className="ds-row" style={{ gap: '6px', fontSize: '0.76rem', color: 'var(--color-accent-warning)' }}>
                <AlertCircle size={13} />
                Sin investigación de {application.companyName} — complétala en Empleo → Base de datos para un mejor auto-tailoring.
              </div>
            )}

            {kit && (
              <>
                {/* Paso 2: variante (sugerida) */}
                <div className="ds-row" style={{ gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Variante:</span>
                  {cvVariants.map((v) => (
                    <VariantChip key={v.id} active={v.id === kit.variantId} label={v.name} secondary={v.secondaryRoute} onClick={() => setKit((k) => (k ? { ...k, variantId: v.id, variantConfidence: 'explicit' } : k))} />
                  ))}
                  <span className="ds-chip" style={{ fontSize: '0.68rem', border: '1px solid var(--color-border-subtle)' }}>
                    sugerida: {CONFIDENCE_LABEL[kit.variantConfidence]}
                  </span>
                </div>
                <VariantInfo variantId={kit.variantId} />

                {/* Paso 3: modificaciones personalizadas */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-2)' }}>
                  <KitField label={`Resumen a medida${research ? ' (auto-draftable con el botón)' : ''}`}>
                    <textarea rows={4} value={kit.summaryOverride ?? ''} placeholder={activeVariant.summary}
                      onChange={(e) => setKit((k) => (k ? { ...k, summaryOverride: e.target.value } : k))}
                      style={inputStyle} />
                  </KitField>
                  <KitField label="Keywords extra (coma-separated; del estudio/oferta)">
                    <textarea rows={2} value={kit.extraKeywords.join(', ')} placeholder="p.ej. digital twin, configurator"
                      onChange={(e) => setKit((k) => (k ? { ...k, extraKeywords: splitCsv(e.target.value) } : k))}
                      style={inputStyle} />
                  </KitField>
                  <KitField label="Énfasis extra (skills primero)">
                    <textarea rows={2} value={kit.emphasisExtra.join(', ')} placeholder="p.ej. three.js, cad"
                      onChange={(e) => setKit((k) => (k ? { ...k, emphasisExtra: splitCsv(e.target.value) } : k))}
                      style={inputStyle} />
                  </KitField>
                  <KitField label="Proyecto que encabeza">
                    <select value={kit.leadProjectId ?? ''} onChange={(e) => setKit((k) => (k ? { ...k, leadProjectId: e.target.value || undefined } : k))}
                      style={{ ...inputStyle, height: 'auto' }}>
                      <option value="">— orden de la variante —</option>
                      {cvBase.projects.filter((p) => !p.optional).map((p) => (
                        <option key={p.id} value={p.id}>{p.name.split(' — ')[0]}</option>
                      ))}
                    </select>
                  </KitField>
                  {/* Brief de portafolio modular */}
                  <KitField label="Brief: frase de apertura (por qué tú, para esta empresa)">
                    <textarea rows={2} value={kit.briefLead ?? ''} placeholder={research ? `Enfocado en lo que ${application?.companyName} busca…` : ''}
                      onChange={(e) => setKit((k) => (k ? { ...k, briefLead: e.target.value } : k))}
                      style={inputStyle} />
                  </KitField>
                  {cvBase.projects.filter((p) => !p.optional).map((p) => (
                    <KitField key={p.id} label={`Ángulo: ${p.name.split(' — ')[0]}`}>
                      <input value={kit.briefAngles[p.id] ?? ''} placeholder="por qué importa a esta empresa"
                        onChange={(e) => setKit((k) => (k ? { ...k, briefAngles: { ...k.briefAngles, [p.id]: e.target.value } } : k))}
                        style={inputStyle} />
                    </KitField>
                  ))}
                </div>

                <div className="ds-row" style={{ gap: 'var(--space-2)', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Button variant="secondary" size="sm" onClick={handleSaveKit}>
                    {savedKit ? <CheckCircle2 size={14} /> : <Save size={14} />} {savedKit ? 'Kit guardado' : 'Guardar kit de aplicación'}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleMarkSent}>
                    Registrar CV enviado ({cvVersion})
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* ——— PREVIEW DEL CV (única zona visible al imprimir) ——— */}
      <article className="cv-print-root" style={{
        background: '#ffffff', color: '#111111', borderRadius: 'var(--radius-m)',
        padding: 'clamp(20px, 4vw, 44px)', maxWidth: '820px', margin: '0 auto',
        fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: 1.45,
      }}>
        <header style={{ borderBottom: '2px solid #111', paddingBottom: '10px', marginBottom: '14px' }}>
          <h2 style={{ margin: 0, fontSize: '1.45rem', letterSpacing: '-0.01em' }}>{cvBase.profile.fullName}</h2>
          <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '2px' }}>{activeVariant.headerTitle}</div>
          <div style={{ fontSize: '0.78rem', color: '#444', marginTop: '6px' }}>
            {cvBase.profile.location} ·{' '}
            {cvBase.profile.links.filter((l) => l.url).map((l) => (
              <span key={l.label}><a href={l.url} style={{ color: '#0a5ab8', textDecoration: 'none' }}>{l.label}</a>{' '}</span>
            ))}
          </div>
        </header>

        <Section title="Professional Summary">
          <p style={{ margin: 0, fontSize: '0.84rem' }}>{stripEditorialNotes(activeVariant.summary)}</p>
        </Section>

        <Section title="Technical Skills">
          {activeVariant.skillsEmphasis.length > 0 && (
            <p style={{ margin: '0 0 6px', fontSize: '0.8rem' }}>
              <strong>Emphasis:</strong> {activeVariant.skillsEmphasis.join(', ')}
            </p>
          )}
          {cvBase.skills.map((g) => (
            <p key={g.group} style={{ margin: '0 0 4px', fontSize: '0.8rem' }}>
              <strong>{g.group}:</strong> {g.items.join(', ')}
            </p>
          ))}
        </Section>

        <Section title="Selected Projects">
          {previewProjects.map((p) => (
            <div key={p.id} style={{ marginBottom: '10px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.86rem' }}>{p.name}</div>
              <div style={{ fontSize: '0.74rem', color: '#555', fontStyle: 'italic' }}>{stripEditorialNotes(p.meta)}</div>
              <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                {(activeVariant.projectBullets[p.id] ?? p.bullets).map((b, i) => (
                  <li key={i} style={{ fontSize: '0.8rem', marginBottom: '2px' }}>{stripEditorialNotes(b)}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Experience">
          {cvBase.experience.map((e) => (
            <div key={e.id} style={{ marginBottom: '8px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.86rem' }}>{e.role}</div>
              <div style={{ fontSize: '0.74rem', color: '#555' }}>{e.org} | {e.period}</div>
              <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                {e.bullets.map((b, i) => <li key={i} style={{ fontSize: '0.8rem', marginBottom: '2px' }}>{b}</li>)}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Education">
          {cvBase.education.map((ed) => (
            <div key={ed.id} style={{ marginBottom: '8px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.86rem' }}>{ed.institution}</div>
              <div style={{ fontSize: '0.74rem', color: '#555' }}>{stripEditorialNotes(ed.period ? `${ed.degree} | ${ed.period}` : ed.degree)}</div>
              <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                {ed.bullets.map((b, i) => <li key={i} style={{ fontSize: '0.8rem', marginBottom: '2px' }}>{b}</li>)}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Languages">
          <ul style={{ margin: 0, paddingLeft: '16px' }}>
            {cvBase.languages.map((l) => <li key={l.language} style={{ fontSize: '0.8rem' }}>{l.language} — {l.level}</li>)}
          </ul>
        </Section>

        <Section title="Availability">
          <p style={{ margin: 0, fontSize: '0.8rem' }}>{cvBase.profile.availability}</p>
        </Section>

        {includeKeywords && activeVariant.keywords.length > 0 && (
          <p style={{ marginTop: '12px', fontSize: '0.7rem', color: '#666', borderTop: '1px solid #ddd', paddingTop: '8px' }}>
            Keywords: {activeVariant.keywords.join(', ')}
          </p>
        )}
      </article>

      {/* Brief de portafolio modular (visible solo en modo aplicación, no se imprime) */}
      {mode === 'application' && kit && application && (
        <div className="cv-no-print ds-card" style={{ padding: 'var(--space-3)' }}>
          <span className="ds-eyebrow">Brief de portafolio — {application.companyName}</span>
          <div style={{ fontSize: '0.84rem', marginTop: '6px' }}>
            {kit.briefLead || <em style={{ color: 'var(--text-tertiary)' }}>Frase de apertura pendiente (arrriba, en el kit).</em>}
          </div>
          <ol style={{ margin: '10px 0 0 18px', padding: 0, display: 'grid', gap: '6px' }}>
            {previewProjects.map((p) => (
              <li key={p.id} style={{ fontSize: '0.8rem' }}>
                <strong>{p.name.split(' — ')[0]}</strong>
                {kit.briefAngles[p.id] ? <> — {kit.briefAngles[p.id]}</> : <em style={{ color: 'var(--text-tertiary)' }}> — ángulo pendiente</em>}
              </li>
            ))}
          </ol>
          <span style={{ display: 'block', marginTop: '8px', fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
            El brief viaja con el markdown al copiar. Los ángulos se editan en el kit.
          </span>
        </div>
      )}

      <div className="cv-no-print ds-row" style={{ gap: '6px', alignItems: 'flex-start', color: 'var(--text-tertiary)', fontSize: '0.72rem' }}>
        <AlertCircle size={13} style={{ flexShrink: 0, marginTop: '1px' }} />
        <span>
          Pendientes de confirmar (doc-17 §2): email, teléfono y URL del portfolio viajan como
          placeholders y NO se renderizan hasta confirmarlos en{' '}
          <code>src/data/career/cv/cvData.ts</code>
          {pendingNotes > 0 && (
            <> — además hay <strong>{pendingNotes} dato(s) con nota «[verify…]»</strong> del
            doc-17 (triángulos finales, métricas SUS, fecha de grado): el CV sale limpio,
            pero confirma el número real antes de enviar.</>
          )}
          .
        </span>
      </div>
    </div>
  );
}

// ——————————————————— helpers de UI ———————————————————

const inputStyle: React.CSSProperties = {
  background: 'var(--color-surface-2)', color: 'var(--text-primary)',
  border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-s)',
  padding: '8px 10px', fontSize: '0.8rem', resize: 'vertical', fontFamily: 'inherit', width: '100%',
};

function splitCsv(s: string): string[] {
  return s.split(',').map((x) => x.trim()).filter(Boolean);
}

function VariantChip({ active, label, secondary, onClick }: { active: boolean; label: string; secondary?: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="ds-chip"
      style={{
        cursor: 'pointer',
        border: active ? '1px solid var(--color-accent-primary)' : '1px solid var(--color-border-subtle)',
        background: active ? 'var(--color-accent-primary)' : 'transparent',
        color: active ? '#000000' : 'var(--text-secondary)',
        display: 'inline-flex', alignItems: 'center', gap: '6px',
      }}>
      <FileText size={12} />
      {label}
      {secondary && <span style={{ opacity: 0.7 }}>(secundaria)</span>}
    </button>
  );
}

function VariantInfo({ variantId }: { variantId: string }) {
  const v = cvVariants.find((x) => x.id === variantId);
  if (!v) return null;
  return (
    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
      <strong style={{ color: 'var(--text-primary)' }}>Usar para:</strong> {v.targetRoles.join(' · ')}
      {v.skillsDeemphasize.length > 0 && (
        <span style={{ display: 'block', marginTop: '2px' }}><em>De-emfatizar: {v.skillsDeemphasize.join(', ')}</em></span>
      )}
    </div>
  );
}

function KitField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
      {label}
      {children}
    </label>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '12px' }}>
      <h3 style={{ margin: '0 0 6px', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #ddd', paddingBottom: '3px' }}>
        {title}
      </h3>
      {children}
    </section>
  );
}

/** Markdown del brief de portafolio (acompaña al CV al copiar). */
function renderBriefMarkdown(kit: ApplicationKit, companyName: string): string {
  const lines = [`# Portafolio para ${companyName || 'la aplicación'}`, ''];
  if (kit.briefLead) { lines.push(kit.briefLead, ''); }
  const angles = Object.entries(kit.briefAngles).filter(([, a]) => a.trim());
  for (const [pid, angle] of angles) {
    const p = cvBase.projects.find((x) => x.id === pid);
    if (p) lines.push(`- **${p.name.split(' — ')[0]}** — ${angle}`);
  }
  return lines.join('\n');
}
