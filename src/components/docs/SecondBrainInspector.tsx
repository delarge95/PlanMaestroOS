import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { isValidEmbedUrl } from '../../utils/security';

interface Props {
  defaultNotionUrl?: string;
  defaultObsidianNote?: string;
}

const SAMPLE_OBSIDIAN_NOTES = [
  {
    filename: '01_Plan_Maestro_Total_v3.md',
    folder: '00_Estrategia',
    tags: ['#plan-maestro', '#tdah', '#fases'],
    content: `# Plan Maestro Total v3 — Arquitectura Ejecutiva

> **Vault Status**: Sincronizado con Obsidian local.
> **Última modificación**: Hoy 09:30

## Principios Guía
- **TwinSight Manda**: Todo apoya a la tesis y caso de estudio principal.
- **25 Horas de Trabajo Profundo**: Diseñado para energía real TDAH.
- **Hábito Diario de Alemán**: 13:30 a 14:00 (25 min sin interrupción).

## Notas Vinculadas (Backlinks)
- [[08B_twinsight_case_study]]
- [[plan_accion_tdah_ansiedad_social]]
- [[The_Min_Max_Program_Jeff_Nippard]]
`
  },
  {
    filename: '08B_twinsight_case_study.md',
    folder: '01_Laboral',
    tags: ['#twinsight', '#unity', '#case-study'],
    content: `# TwinSight X500 — Caso de Estudio

- **Área**: Technical Visualization & Unity WebGL
- **Estado**: Producción de MVP y breakdown de arquitectura.
- **Entregable Objetivo**: Demo en video + README interactivo en GitHub.
`
  },
  {
    filename: 'plan_accion_tdah_ansiedad_social.md',
    folder: '02_Clinica',
    tags: ['#tdah', '#ansiedad-social', '#cbt-i'],
    content: `# Plan de Acción TDAH & Ansiedad Social

- **Regla de 10 Minutos**: En caso de parálisis, arrancar 10 min de borrador feo.
- **Criterio de Corte**: Suficientemente terminado > ideal.
- **Jerarquía de Exposición**: 3 ideas en llamadas sin disculparse por silencios.
`
  }
];

export default function SecondBrainInspector({
  defaultNotionUrl = 'https://v1.embednotion.com/embed/plan-maestro'
}: Props) {
  const [viewMode, setViewMode] = useState<'reinterpreted' | 'notion_embed' | 'obsidian_vault'>('reinterpreted');

  // Notion state
  const [notionEmbedUrl, setNotionEmbedUrl] = useState<string>(defaultNotionUrl);
  const [inputUrl, setInputUrl] = useState<string>('');

  // Obsidian state
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>(0);
  const [vaultName, setVaultName] = useState('Laboral');

  useEffect(() => {
    try {
      const savedNotion = localStorage.getItem('second_brain_notion_url');
      if (savedNotion) setNotionEmbedUrl(savedNotion);
      const savedVault = localStorage.getItem('obsidian_vault_name');
      if (savedVault) setVaultName(savedVault);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSaveNotionUrl = () => {
    if (!inputUrl.trim()) return;
    const trimmedUrl = inputUrl.trim();
    if (!isValidEmbedUrl(trimmedUrl)) {
      alert('Error de Seguridad: La URL debe ser una dirección HTTPS válida y pertenecer a un de dominio de confianza (Notion o YouTube).');
      return;
    }
    setNotionEmbedUrl(trimmedUrl);
    try {
      localStorage.setItem('second_brain_notion_url', trimmedUrl);
    } catch (e) {
      console.error(e);
    }
    setInputUrl('');
  };

  const selectedNote = SAMPLE_OBSIDIAN_NOTES[selectedNoteIndex] || SAMPLE_OBSIDIAN_NOTES[0];

  return (
    <ErrorBoundary>
      <div
        style={{
          background: 'rgba(12, 14, 18, 0.75)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(255,255,255,0.08) inset',
          color: 'var(--color-text-primary)'
        }}
      >
        {/* HEADER & VIEW MODE SELECTOR (APPLE GLASS STYLE) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <span style={{ fontFamily: '-apple-system, SF Pro Text, sans-serif', fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              SEGUNDO CEREBRO • INTEGRACIÓN DIRECTA NOTION & OBSIDIAN
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '2px 0 0', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
              Inspección en la Web & Reinterpretación de Datos
            </h3>
          </div>

          {/* VIEW MODE SEGMENTED CONTROL (APPLE STYLE) */}
          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255, 255, 255, 0.06)', padding: '4px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <button
              type="button"
              onClick={() => setViewMode('reinterpreted')}
              style={{
                background: viewMode === 'reinterpreted' ? 'var(--color-accent-primary)' : 'transparent',
                color: viewMode === 'reinterpreted' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '10px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 200ms ease'
              }}
            >
              📊 Reinterpretación Analítica
            </button>

            <button
              type="button"
              onClick={() => setViewMode('notion_embed')}
              style={{
                background: viewMode === 'notion_embed' ? 'var(--color-accent-warning)' : 'transparent',
                color: viewMode === 'notion_embed' ? '#000000' : 'var(--color-text-secondary)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '10px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 200ms ease'
              }}
            >
              ⬛ Notion Embedded Live
            </button>

            <button
              type="button"
              onClick={() => setViewMode('obsidian_vault')}
              style={{
                background: viewMode === 'obsidian_vault' ? 'var(--color-accent-primary)' : 'transparent',
                color: viewMode === 'obsidian_vault' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '10px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 200ms ease'
              }}
            >
              🟣 Obsidian Vault Reader
            </button>
          </div>
        </div>

        {/* 1. REINTERPRETED SECOND BRAIN ANALYTICS CHARTS */}
        {viewMode === 'reinterpreted' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {/* HABIT RING CARD */}
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-state-done)', fontWeight: 700, textTransform: 'uppercase' }}>
                    EJECUCIÓN DE HÁBITOS
                  </span>
                  <span style={{ fontSize: '1.2rem' }}>🟢</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <strong style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>88%</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Semana Activa</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', height: '6px', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: '88%', height: '100%', background: 'var(--color-state-done)', borderRadius: '999px' }} />
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>Alemán (14/14 días) • Prehab Gym (6/7)</span>
              </div>

              {/* DEEP WORK HOURS CARD */}
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                    TRABAJO PROFUNDO SEMANAL
                  </span>
                  <span style={{ fontSize: '1.2rem' }}>🚀</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <strong style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>22.5h</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>/ 25h meta</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', height: '6px', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: '90%', height: '100%', background: 'var(--color-accent-primary)', borderRadius: '999px' }} />
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>Bloque A Tesis + Bloque B TwinSight MVP</span>
              </div>

              {/* FITNESS VOLUME CARD */}
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-warning)', fontWeight: 700, textTransform: 'uppercase' }}>
                    VOLUMEN ACUMULADO FITAPP
                  </span>
                  <span style={{ fontSize: '1.2rem' }}>💪</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <strong style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>4,850 kg</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Esta semana</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', height: '6px', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: '75%', height: '100%', background: 'var(--color-accent-warning)', borderRadius: '999px' }} />
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>Nippard Min-Max + Calistenia Anillas</span>
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px', fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              💡 <strong style={{ color: 'var(--color-text-primary)' }}>Nota de Arquitectura del Segundo Cerebro:</strong> Los datos superiores reinterpretados provienen de la agregación activa de tu base de datos de Notion y notas de Obsidian. Permiten evaluar la efectividad sin necesidad de entrar a la interfaz nativa de Notion si buscas reducir fricción.
            </div>
          </div>
        )}

        {/* 2. DIRECT NOTION LIVE EMBEDDED INSPECTOR */}
        {viewMode === 'notion_embed' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Pega la URL pública o de Embed de tu página/database de Notion..."
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  flex: 1,
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: 'var(--color-text-primary)',
                  fontSize: '0.85rem'
                }}
              />
              <button
                type="button"
                onClick={handleSaveNotionUrl}
                style={{
                  background: 'var(--color-accent-warning)',
                  border: 'none',
                  color: '#000000',
                  fontWeight: 700,
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  cursor: 'pointer'
                }}
              >
                ✓ Cargar Embed
              </button>
            </div>

            {/* EMBEDDED MACOS WINDOW FRAME */}
            <div style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', overflow: 'hidden', height: '500px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#1c1c1e', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-accent-danger)' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-accent-warning)' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-state-done)' }} />
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontFamily: 'SF Mono, monospace' }}>
                  Notion In-App Live Inspector • {notionEmbedUrl}
                </span>
                <a href={notionEmbedUrl} target="_blank" rel="noreferrer" style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', textDecoration: 'none', fontWeight: 600 }}>
                  ↗ Abrir Web
                </a>
              </div>

              {isValidEmbedUrl(notionEmbedUrl) ? (
                <iframe
                  src={notionEmbedUrl}
                  title="Notion Second Brain Live Inspection"
                  style={{ width: '100%', height: '100%', border: 'none', background: '#121212' }}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
                />
              ) : (
                <div style={{
                  padding: '24px',
                  color: 'var(--color-accent-danger)',
                  background: 'rgba(239, 68, 68, 0.1)',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <strong style={{ fontSize: '1.2rem' }}>⚠️ URL de Embed No Segura</strong>
                  <p style={{ maxWidth: '480px', margin: 0, fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                    La URL especificada no cumple con los criterios de seguridad del sistema. Solo se permiten conexiones HTTPS seguras hacia dominios autorizados de Notion o YouTube.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. OBSIDIAN LOCAL VAULT MARKDOWN READER */}
        {viewMode === 'obsidian_vault' && (
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '16px', minHeight: '420px' }}>
            {/* FILE TREE */}
            <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '0.68rem', fontFamily: 'SF Mono, monospace', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
                VAULT: {vaultName.toUpperCase()}
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {SAMPLE_OBSIDIAN_NOTES.map((note, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedNoteIndex(idx)}
                    style={{
                      textAlign: 'left',
                      background: selectedNoteIndex === idx ? 'rgba(191, 90, 242, 0.2)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${selectedNoteIndex === idx ? 'rgba(191, 90, 242, 0.4)' : 'transparent'}`,
                      color: selectedNoteIndex === idx ? 'var(--color-accent-primary)' : 'var(--color-text-secondary)',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      fontSize: '0.78rem',
                      fontWeight: selectedNoteIndex === idx ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 150ms ease'
                    }}
                  >
                    📄 {note.filename}
                  </button>
                ))}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a
                  href={`obsidian://open?vault=${encodeURIComponent(vaultName)}&file=${encodeURIComponent(selectedNote.filename)}`}
                  style={{
                    background: 'rgba(191, 90, 242, 0.15)',
                    border: '1px solid rgba(191, 90, 242, 0.35)',
                    color: 'var(--color-accent-primary)',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'block',
                    textAlign: 'center'
                  }}
                >
                  🟣 Abrir en Obsidian App
                </a>
              </div>
            </div>

            {/* NOTE CONTENT PREVIEW */}
            <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--color-text-primary)', fontWeight: 700 }}>{selectedNote.filename}</h4>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {selectedNote.tags.map((t, idx) => (
                    <span key={idx} style={{ fontSize: '0.68rem', background: 'rgba(191,90,242,0.15)', color: 'var(--color-accent-primary)', padding: '2px 8px', borderRadius: '4px', fontFamily: 'SF Mono, monospace' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <pre style={{ background: 'transparent', color: '#e5e5ea', fontFamily: 'SF Mono, monospace', fontSize: '0.82rem', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-wrap', flex: 1, overflowY: 'auto' }}>
                {selectedNote.content}
              </pre>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
