import React, { useState } from 'react';
import { initialPortfolioProjects, type PortfolioProjectItem } from '../../data/career/portfolioProjects';
import {
  pendingPortfolioAssetCount,
  pendingPortfolioAssets,
  artstationBreakdownSpecs,
  artstationProfileChecklist,
  artstationChecklistAreas,
  type PortfolioAssetPlatform,
  type ArtStationBreakdownSpec
} from '../../data/career/portfolioChecklist';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { AlertCircle, Copy, Check, Palette, Share2, Code2, Globe, ListChecks, Layers } from 'lucide-react';

const PLATFORM_LABEL: Record<PortfolioAssetPlatform, string> = {
  artstation: 'ArtStation',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  web: 'Web'
};

const KIND_BADGE: Partial<Record<string, string>> = {
  'before-after': 'Antes/Después',
  wireframe: 'Wireframe',
  pipeline: 'Hitos',
  'sculpt-stages': 'Hitos',
  software: 'Software'
};

const REQUIREMENT_LABEL: Record<string, string> = {
  required: 'Obligatorio',
  recommended: 'Recomendado',
  optional: 'Opcional'
};

export default function PortfolioSimulator() {
  const [activeTab, setActiveTab] = useState<'artstation' | 'linkedin' | 'github' | 'web'>('artstation');
  const [projects, setProjects] = useState<PortfolioProjectItem[]>(initialPortfolioProjects);
  const [copied, setCopied] = useState(false);
  const [selectedSpecId, setSelectedSpecId] = useState<ArtStationBreakdownSpec['id']>('twinsight-x500');

  const selectedSpec = artstationBreakdownSpecs.find((spec) => spec.id === selectedSpecId) ?? artstationBreakdownSpecs[0];

  const moveOrder = (index: number, direction: 'up' | 'down') => {
    const next = [...projects];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= next.length) return;
    const temp = next[index];
    next[index] = next[targetIndex];
    next[targetIndex] = temp;
    setProjects(next);
  };

  const handleExportChecklist = () => {
    const projectLines = projects.map((p, idx) => `${idx + 1}. Subir "${p.title}" (Categoría: ${p.category}) - Tags: ${p.tags.join(', ')}`).join('\n');

    let text = `CHECKLIST DE PUBLICACIÓN EN ${activeTab.toUpperCase()}:\n` + projectLines;

    if (activeTab === 'artstation') {
      text +=
        `\n\nESTRUCTURA DE BREAKDOWN (${selectedSpec.title}):\n` +
        selectedSpec.sections.map((s) => `${String(s.order).padStart(2, '0')}. [${REQUIREMENT_LABEL[s.requirement]}] ${s.title} — ${s.guidance} (${s.source})`).join('\n') +
        `\nSoftware: ${selectedSpec.software.join(', ')}\nTags: ${selectedSpec.tags.join(', ')}` +
        `\n\nCHECKLIST DE PERFIL (doc-28E):\n` +
        artstationProfileChecklist.map((item) => `- [${artstationChecklistAreas.find((a) => a.area === item.area)?.label ?? item.area}] ${item.title}: ${item.detail} (${item.source})`).join('\n');
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
        
        {/* BANNER PERMANENTE DE ADVERTENCIA PRESCRIPTIVO */}
        <div style={{
          background: 'rgba(255,159,10,0.08)',
          border: '1px solid var(--color-accent-warning)',
          borderRadius: 'var(--radius-md)',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle size={16} style={{ color: 'var(--color-accent-warning)' }} />
            <strong style={{ fontSize: '0.82rem', color: 'var(--text)' }}>
              Simulación de referencia — no es la plataforma real
            </strong>
          </div>

          <Button variant="secondary" size="sm" onClick={handleExportChecklist}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>Exportar checklist</span>
          </Button>
        </div>

        {/* CUENTA DE ASSETS PENDIENTES (doc-33 sprint) */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          <ListChecks size={16} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
          <strong style={{ fontSize: '0.82rem', color: 'var(--text)' }}>
            Assets pendientes (doc-33): {pendingPortfolioAssetCount}
          </strong>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
            {(['artstation', 'github', 'linkedin', 'web'] as PortfolioAssetPlatform[])
              .map(
                (platform) =>
                  `${PLATFORM_LABEL[platform]}: ${pendingPortfolioAssets.filter((item) => item.platform === platform).length}`
              )
              .join(' · ')}
          </span>
        </div>

        {/* NAVEGACIÓN DE 4 PESTAÑAS (ArtStation, LinkedIn, GitHub, Web) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Portafolio y CV
          </h2>

          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)' }}>
            <button
              type="button"
              onClick={() => setActiveTab('artstation')}
              style={{
                background: activeTab === 'artstation' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'artstation' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'artstation' ? 700 : 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Palette size={14} /> ArtStation
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('linkedin')}
              style={{
                background: activeTab === 'linkedin' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'linkedin' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'linkedin' ? 700 : 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Share2 size={14} /> LinkedIn
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('github')}
              style={{
                background: activeTab === 'github' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'github' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'github' ? 700 : 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Code2 size={14} /> GitHub
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('web')}
              style={{
                background: activeTab === 'web' ? 'var(--color-accent-primary)' : 'transparent',
                color: activeTab === 'web' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: activeTab === 'web' ? 700 : 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Globe size={14} /> Web Personal
            </button>
          </div>
        </div>

        {/* ORDEN DE PROYECTOS Y SIMULADOR */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent-primary)', textTransform: 'uppercase' }}>
            Orden de proyectos ({activeTab.toUpperCase()})
          </span>

          {activeTab === 'artstation' && (
            <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', margin: 0 }}>
              Orden específico ArtStation (doc-29C §19.2): 1) TwinSight technical breakdown · 2) Blender portrait breakdown · 3) estudios de shader/modos visuales si se separan.
            </span>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-sm)' }}>
            {projects.map((p, idx) => (
              <div
                key={p.id}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', fontWeight: 700 }}>
                    #{idx + 1}
                  </span>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button type="button" onClick={() => moveOrder(idx, 'up')} disabled={idx === 0} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>↑</button>
                    <button type="button" onClick={() => moveOrder(idx, 'down')} disabled={idx === projects.length - 1} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>↓</button>
                  </div>
                </div>

                <strong style={{ fontSize: '0.88rem', color: 'var(--text)' }}>
                  {p.title}
                </strong>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', margin: 0 }}>
                  {p.summary}
                </p>

                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', paddingTop: '4px' }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{ fontSize: '0.65rem', background: 'rgba(255,255,255,0.04)', padding: '1px 5px', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', margin: 0, paddingTop: '2px' }}>
                  {p.positioning} ({p.source})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PESTAÑA ARTSTATION: ESTRUCTURA DE BREAKDOWN (doc 29C) + CHECKLIST DE PERFIL (doc 28E) */}
        {activeTab === 'artstation' && (
          <>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Layers size={16} style={{ color: 'var(--color-accent-primary)' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent-primary)', textTransform: 'uppercase' }}>
                    Estructura del post (breakdown) — doc-29C
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)' }}>
                  {artstationBreakdownSpecs.map((spec) => (
                    <button
                      key={spec.id}
                      type="button"
                      onClick={() => setSelectedSpecId(spec.id)}
                      style={{
                        background: selectedSpecId === spec.id ? 'var(--color-accent-primary)' : 'transparent',
                        color: selectedSpecId === spec.id ? '#000000' : 'var(--text-secondary)',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '7px',
                        fontSize: '0.72rem',
                        fontWeight: selectedSpecId === spec.id ? 700 : 500,
                        cursor: 'pointer'
                      }}
                    >
                      {spec.id === 'twinsight-x500' ? 'TwinSight X500' : 'Blender Portrait'}
                    </button>
                  ))}
                </div>
              </div>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                {selectedSpec.positioning} <span style={{ color: 'var(--text-tertiary)' }}>({selectedSpec.source})</span>
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {selectedSpec.sections.map((section) => (
                  <div
                    key={section.id}
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '10px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', fontWeight: 700 }}>
                        {String(section.order).padStart(2, '0')}
                      </span>
                      <strong style={{ fontSize: '0.8rem', color: 'var(--text)' }}>{section.title}</strong>
                      {KIND_BADGE[section.kind] && (
                        <span style={{ fontSize: '0.62rem', background: 'rgba(10,132,255,0.12)', color: 'var(--color-accent-primary)', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>
                          {KIND_BADGE[section.kind]}
                        </span>
                      )}
                      <span
                        style={{
                          fontSize: '0.62rem',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          fontWeight: 700,
                          background: section.requirement === 'required' ? 'rgba(52,199,89,0.12)' : 'rgba(255,255,255,0.05)',
                          color: section.requirement === 'required' ? 'var(--color-accent-success, #34c759)' : 'var(--text-tertiary)'
                        }}
                      >
                        {REQUIREMENT_LABEL[section.requirement]}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.73rem', color: 'var(--text-tertiary)', margin: 0 }}>
                      {section.guidance} <span style={{ opacity: 0.7 }}>[{section.source}]</span>
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '4px', borderTop: '1px solid var(--color-border-subtle)' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', fontWeight: 700 }}>
                  Software del asset (solo herramientas realmente usadas — doc-29C §12):
                </span>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {selectedSpec.software.map((tool) => (
                    <span key={tool} style={{ fontSize: '0.65rem', background: 'rgba(255,255,255,0.04)', padding: '1px 6px', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                      {tool}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', fontWeight: 700, paddingTop: '4px' }}>
                  Tags del post:
                </span>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {selectedSpec.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: '0.65rem', background: 'rgba(255,159,10,0.08)', padding: '1px 6px', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent-primary)', textTransform: 'uppercase' }}>
                Checklist de publicación del perfil — doc-28E
              </span>

              {artstationChecklistAreas.map(({ area, label }) => (
                <div key={area} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    {label}
                  </span>
                  {artstationProfileChecklist
                    .filter((item) => item.area === area)
                    .map((item) => (
                      <div
                        key={item.id}
                        style={{
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid var(--color-border-subtle)',
                          borderRadius: 'var(--radius-md)',
                          padding: '8px 12px'
                        }}
                      >
                        <strong style={{ fontSize: '0.78rem', color: 'var(--text)' }}>{item.title}</strong>
                        <p style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', margin: '2px 0 0 0' }}>
                          {item.detail} <span style={{ opacity: 0.7 }}>[{item.source}]</span>
                        </p>
                      </div>
                    ))}
                </div>
              ))}

              <p style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', margin: 0, fontStyle: 'italic' }}>
                Estructura simulada con fines de planificación: usa la estructura y el orden, no el branding de la plataforma. Los textos copy-pasteable viven en doc-28E.
              </p>
            </div>
          </>
        )}

      </div>
    </ErrorBoundary>
  );
}
