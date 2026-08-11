import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { Briefcase, ArrowRight, Layers, Award, BookOpen, Newspaper } from 'lucide-react';

export default function CareerToday() {
  const nextAction = 'Completar documentación de arquitectura TwinSight MVP';
  const applicationsThisWeekCount = 4;
  const pendingFollowups = [
    { id: 'f1', company: 'Epic Games', role: 'Tech Artist', dueDate: 'Hoy' },
    { id: 'f2', company: 'Ubisoft', role: 'Graphics Engineer', dueDate: 'Mañana' },
    { id: 'f3', company: 'Riot Games', role: 'VFX Artist', dueDate: 'En 3 días' }
  ];

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', maxWidth: '850px', margin: '0 auto', width: '100%' }}>

        {/* CABECERA PRESCRIPTIVA DE SECCIÓN LABORAL */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 'var(--space-xs)',
          borderBottom: '1px solid var(--color-border-subtle)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Briefcase size={22} style={{ color: 'var(--color-accent-primary)' }} />
            <div>
              <h1 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: 'var(--text)' }}>
                Laboral
              </h1>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                Gestión de carrera, portafolio & pipeline de empleo
              </span>
            </div>
          </div>

          <a href="/app/career/jobs" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm">
              <ArrowRight size={15} /> Abrir pipeline
            </Button>
          </a>
        </div>

        {/* NAVEGACIÓN A SUBVISTAS LABORALES */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
          <a href="/app/career/roadmap" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm"><Layers size={14} /> Roadmap</Button>
          </a>
          <a href="/app/career/portfolio" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm"><Award size={14} /> Portafolio y CV</Button>
          </a>
          <a href="/app/career/projects" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm"><Briefcase size={14} /> Proyectos</Button>
          </a>
          <a href="/app/career/learning" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm"><BookOpen size={14} /> Cursos</Button>
          </a>
          <a href="/app/career/news" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm"><Newspaper size={14} /> Noticias</Button>
          </a>
        </div>

        {/* PRÓXIMA ACCIÓN LABORAL (UNA SOLA) */}
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
              Próxima acción
            </span>
            <strong style={{ fontSize: '1rem', color: 'var(--text)', display: 'block', marginTop: '2px' }}>
              {nextAction}
            </strong>
          </div>

          <Button variant="secondary" size="sm">
            Empezar 10 min
          </Button>
        </div>

        {/* MÉTRICAS DE APLICACIONES Y SEGUIMIENTOS PENDIENTES */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-md)' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
              Aplicaciones esta semana
            </span>
            <strong style={{ fontSize: '1.8rem', color: 'var(--color-accent-primary)', display: 'block', marginTop: '2px' }}>
              {applicationsThisWeekCount}
            </strong>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
              Seguimientos pendientes ({pendingFollowups.length})
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {pendingFollowups.map((f) => (
                <div key={f.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', background: 'rgba(255,255,255,0.02)', padding: '4px 8px', borderRadius: '4px' }}>
                  <strong style={{ color: 'var(--text)' }}>{f.company} · {f.role}</strong>
                  <span style={{ color: 'var(--color-accent-warning)', fontWeight: 600 }}>{f.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </ErrorBoundary>
  );
}
