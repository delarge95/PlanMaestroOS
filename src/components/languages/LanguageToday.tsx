import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import SectionNav from '../ui/SectionNav';
import Button from '../ui/Button';
import { Languages, Flame } from 'lucide-react';

export interface LanguageTodayProps {
  currentPath?: string;
}

export default function LanguageToday({ currentPath = '/app/languages' }: LanguageTodayProps) {
  const [streakDays] = useState(12);
  const [enableEnglish] = useState(true);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>

        {/* NAVEGACIÓN NIVEL 2 */}
        <SectionNav sectionKey="languages" currentPath={currentPath} level={2} />

        {/* CABECERA PRESCRIPTIVA DE IDIOMAS */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 'var(--space-xs)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Languages size={22} style={{ color: 'var(--color-accent-primary)' }} />
            <div>
              <h1 style={{ fontSize: 'var(--fs-page, 1.75rem)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                Idiomas
              </h1>
              <span style={{ fontSize: 'var(--fs-meta, 0.8125rem)', color: 'var(--text-secondary)' }}>
                Práctica diaria de Alemán e Inglés profesional
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '4px 10px', borderRadius: '20px', border: '1px solid var(--color-border-subtle)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            <Flame size={15} style={{ color: 'var(--color-accent-warning)' }} />
            <span>Racha: {streakDays} días</span>
          </div>
        </div>

        {/* BLOQUE ALEMÁN HOY */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--color-accent-primary-soft)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-md)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div>
            <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
              Alemán hoy
            </span>
            <strong style={{ fontSize: '1rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
              Unidad 1: Präsens & Wechselpräpositionen (25 min)
            </strong>
          </div>

          <a href="/app/languages/german" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm">
              Empezar sesión
            </Button>
          </a>
        </div>

        {/* BLOQUE INGLÉS HOY (OPCIONAL CON TOGGLE) */}
        {enableEnglish && (
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-md)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
                Inglés hoy
              </span>
              <strong style={{ fontSize: '0.92rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
                Track Técnico: Vocabulario de Shaders & Render Pipeline (15 min)
              </strong>
            </div>

            <a href="/app/languages/english" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="sm">
                Empezar sesión
              </Button>
            </a>
          </div>
        )}

      </div>
    </ErrorBoundary>
  );
}
