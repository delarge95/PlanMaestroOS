import React, { useState } from 'react';
import { initialPortfolioProjects, type PortfolioProjectItem } from '../../data/career/portfolioProjects';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { AlertCircle, Copy, Check, Palette, Share2, Code2, Globe } from 'lucide-react';

export default function PortfolioSimulator() {
  const [activeTab, setActiveTab] = useState<'artstation' | 'linkedin' | 'github' | 'web'>('artstation');
  const [projects, setProjects] = useState<PortfolioProjectItem[]>(initialPortfolioProjects);
  const [copied, setCopied] = useState(false);

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
    const text = `CHECKLIST DE PUBLICACIÓN EN ${activeTab.toUpperCase()}:\n` +
      projects.map((p, idx) => `${idx + 1}. Subir "${p.title}" (Categoría: ${p.category}) - Tags: ${p.tags.join(', ')}`).join('\n');

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
              </div>
            ))}
          </div>
        </div>

      </div>
    </ErrorBoundary>
  );
}
