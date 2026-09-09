// src/components/career/CvGenerator.tsx — Generador de CVs por variante (doc-17).
//
// - Selector de variante → preview fiel (una página, estilo Apple-minimal).
// - Exportar: imprimir/PDF (window.print + CSS de impresión), copiar markdown ATS.
// - Registrar: fija cvVersionSent en una aplicación del pipeline (trazabilidad).

import React, { useMemo, useState } from 'react';
import { cvBase } from '../../data/career/cv/cvData';
import { cvVariants } from '../../data/career/cv/cvVariants';
import { renderCvMarkdown } from '../../lib/career/cvRender';
import { useCareerStore } from '../../data/career/careerStore';
import Button from '../ui/Button';
import { FileText, Printer, Copy, CheckCircle2, AlertCircle } from 'lucide-react';

export default function CvGenerator() {
  const [variantId, setVariantId] = useState(cvVariants[0].id);
  const [includeKeywords, setIncludeKeywords] = useState(false);
  const [copied, setCopied] = useState(false);
  const [markedApp, setMarkedApp] = useState('');
  const [markedOk, setMarkedOk] = useState(false);

  const applications = useCareerStore((s) => s.applications);
  const updateApplication = useCareerStore((s) => s.updateApplication);

  const variant = useMemo(
    () => cvVariants.find((v) => v.id === variantId) ?? cvVariants[0],
    [variantId],
  );
  const markdown = useMemo(
    () => renderCvMarkdown(cvBase, variant, { includeKeywords }),
    [variant, includeKeywords],
  );

  const cvVersion = `${variant.id}-v1 (${new Date().toISOString().slice(0, 10)})`;

  const handlePrint = () => window.print();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard bloqueado: el markdown sigue visible para copia manual.
    }
  };

  const handleMarkSent = () => {
    if (!markedApp) return;
    updateApplication(markedApp, { cvVersionSent: cvVersion });
    setMarkedOk(true);
    setTimeout(() => setMarkedOk(false), 2600);
  };

  // Preview en HTML estructurado (mismo contenido que el markdown).
  const previewProjects = useMemo(() => {
    const included = cvBase.projects.filter((p) => !p.optional);
    const order = variant.projectOrder ?? included.map((p) => p.id);
    const inOrder = order
      .map((id) => included.find((p) => p.id === id))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));
    return [...inOrder, ...included.filter((p) => !order.includes(p.id))];
  }, [variant]);

  return (
    <div className="ds-stack">
      {/* ——— Controles (ocultos al imprimir) ——— */}
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

        {/* Chips de variante */}
        <div className="ds-row" style={{ gap: '6px', flexWrap: 'wrap' }}>
          {cvVariants.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setVariantId(v.id)}
              className="ds-chip"
              style={{
                cursor: 'pointer',
                border: v.id === variantId ? '1px solid var(--color-accent-primary)' : '1px solid var(--color-border-subtle)',
                background: v.id === variantId ? 'var(--color-accent-primary)' : 'transparent',
                color: v.id === variantId ? '#000000' : 'var(--text-secondary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <FileText size={12} />
              {v.name}
              {v.secondaryRoute && <span style={{ opacity: 0.7 }}>(secundaria)</span>}
            </button>
          ))}
        </div>

        {/* Roles objetivo de la variante */}
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Usar para:</strong>{' '}
          {variant.targetRoles.join(' · ')}
          {variant.skillsDeemphasize.length > 0 && (
            <span style={{ display: 'block', marginTop: '2px' }}>
              <em>De-emfatizar: {variant.skillsDeemphasize.join(', ')}</em>
            </span>
          )}
        </div>

        <label className="ds-row" style={{ gap: '6px', fontSize: '0.78rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
          <input type="checkbox" checked={includeKeywords} onChange={(e) => setIncludeKeywords(e.target.checked)} />
          Incluir línea de keywords al copiar
        </label>

        {/* Registrar versión enviada en una aplicación */}
        <div className="ds-card" style={{ padding: 'var(--space-3)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', alignItems: 'center' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            Registrar esta versión como enviada en:
          </span>
          <select
            value={markedApp}
            onChange={(e) => setMarkedApp(e.target.value)}
            className="ds-select"
            style={{ background: 'var(--color-surface-2)', color: 'var(--text-primary)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-s)', padding: '4px 8px', fontSize: '0.78rem' }}
          >
            <option value="">— elegir aplicación —</option>
            {applications
              .filter((a) => a.stage !== 'Cerrado')
              .map((a) => (
                <option key={a.id} value={a.id}>
                  {a.companyName} · {a.roleTitle}
                </option>
              ))}
          </select>
          <Button variant="ghost" size="sm" onClick={handleMarkSent} disabled={!markedApp}>
            {markedOk ? <CheckCircle2 size={14} /> : undefined} {markedOk ? 'Registrado' : 'Registrar'}
          </Button>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>{cvVersion}</span>
        </div>
      </div>

      {/* ——— PREVIEW DEL CV (única zona visible al imprimir) ——— */}
      <article className="cv-print-root" style={{
        background: '#ffffff',
        color: '#111111',
        borderRadius: 'var(--radius-m)',
        padding: 'clamp(20px, 4vw, 44px)',
        maxWidth: '820px',
        margin: '0 auto',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: 1.45,
      }}>
        <header style={{ borderBottom: '2px solid #111', paddingBottom: '10px', marginBottom: '14px' }}>
          <h2 style={{ margin: 0, fontSize: '1.45rem', letterSpacing: '-0.01em' }}>{cvBase.profile.fullName}</h2>
          <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '2px' }}>{variant.headerTitle}</div>
          <div style={{ fontSize: '0.78rem', color: '#444', marginTop: '6px' }}>
            {cvBase.profile.location} ·{' '}
            {cvBase.profile.links.filter((l) => l.url).map((l) => (
              <span key={l.label}>
                <a href={l.url} style={{ color: '#0a5ab8', textDecoration: 'none' }}>{l.label}</a>{' '}
              </span>
            ))}
          </div>
        </header>

        <Section title="Professional Summary">
          <p style={{ margin: 0, fontSize: '0.84rem' }}>{variant.summary}</p>
        </Section>

        <Section title="Technical Skills">
          {variant.skillsEmphasis.length > 0 && (
            <p style={{ margin: '0 0 6px', fontSize: '0.8rem' }}>
              <strong>Emphasis:</strong> {variant.skillsEmphasis.join(', ')}
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
              <div style={{ fontSize: '0.74rem', color: '#555', fontStyle: 'italic' }}>{p.meta}</div>
              <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                {(variant.projectBullets[p.id] ?? p.bullets).map((b, i) => (
                  <li key={i} style={{ fontSize: '0.8rem', marginBottom: '2px' }}>{b}</li>
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
                {e.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: '0.8rem', marginBottom: '2px' }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Education">
          {cvBase.education.map((ed) => (
            <div key={ed.id} style={{ marginBottom: '8px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.86rem' }}>{ed.institution}</div>
              <div style={{ fontSize: '0.74rem', color: '#555' }}>
                {ed.degree}{ed.period ? ` | ${ed.period}` : ''}
              </div>
              <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                {ed.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: '0.8rem', marginBottom: '2px' }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Languages">
          <ul style={{ margin: 0, paddingLeft: '16px' }}>
            {cvBase.languages.map((l) => (
              <li key={l.language} style={{ fontSize: '0.8rem' }}>{l.language} — {l.level}</li>
            ))}
          </ul>
        </Section>

        <Section title="Availability">
          <p style={{ margin: 0, fontSize: '0.8rem' }}>{cvBase.profile.availability}</p>
        </Section>

        {includeKeywords && variant.keywords.length > 0 && (
          <p style={{ marginTop: '12px', fontSize: '0.7rem', color: '#666', borderTop: '1px solid #ddd', paddingTop: '8px' }}>
            Keywords: {variant.keywords.join(', ')}
          </p>
        )}
      </article>

      {/* Aviso de datos por verificar (doc-17 §2) — nunca se imprime */}
      <div className="cv-no-print ds-row" style={{ gap: '6px', alignItems: 'flex-start', color: 'var(--text-tertiary)', fontSize: '0.72rem' }}>
        <AlertCircle size={13} style={{ flexShrink: 0, marginTop: '1px' }} />
        <span>
          Pendientes de confirmar (doc-17 §2): email, teléfono y URL del portfolio viajan como
          placeholders y NO se renderizan hasta confirmarlos en{' '}
          <code>src/data/career/cv/cvData.ts</code>.
        </span>
      </div>
    </div>
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
