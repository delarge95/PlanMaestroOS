import React, { useState } from 'react';
import { useAppStore } from '../../store/appStore';
import Sheet from '../ui/Sheet';
import ListRow from '../ui/ListRow';
import Button from '../ui/Button';

export interface NavigationShellProps {
  currentPath?: string;
  activeDomain?: 'now' | 'plan' | 'more' | 'clinical' | 'career' | 'german' | 'fitness' | 'library' | 'master-plan';
  breadcrumb?: string;
  children: React.ReactNode;
}

export function NavigationShell({
  currentPath = '/app',
  activeDomain = 'now',
  breadcrumb,
  children
}: NavigationShellProps) {
  const [isMoreSheetOpen, setIsMoreSheetOpen] = useState(false);
  const isSimpleMode = useAppStore((s) => s.isSimpleMode);
  const toggleSimpleMode = useAppStore((s) => s.toggleSimpleMode);

  // Determine active tab among 3 main destinations
  const isNowActive = activeDomain === 'now' || currentPath === '/app' || currentPath === '/app/clinical' || currentPath === '/app/today';
  const isPlanActive = activeDomain === 'plan' || currentPath === '/app/schedules';
  const isMoreActive = !isNowActive && !isPlanActive;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)', color: 'var(--text)' }}>
      {/* HEADER PRINCIPAL COMPACTO */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 90,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid var(--color-border-subtle)',
          padding: 'var(--space-2) var(--space-4)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'var(--space-md)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <a
            href="/app"
            style={{
              textDecoration: 'none',
              color: 'var(--text)',
              fontSize: '1.1rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}
          >
            <span style={{ color: 'var(--color-accent-primary)' }}>⚡</span>
            <span>Plan Maestro OS</span>
          </a>

          {breadcrumb ? (
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)' }}>
              {breadcrumb}
            </span>
          ) : isMoreActive ? (
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)' }}>
              Más / {activeDomain.toUpperCase()}
            </span>
          ) : null}
        </div>

        {/* NAVEGACIÓN PRINCIPAL ESCRITORIO (3 DESTINOS) */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            background: 'var(--surface)',
            padding: '4px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border-subtle)'
          }}
        >
          <a
            href="/app"
            style={{
              textDecoration: 'none',
              padding: 'var(--space-1) var(--space-3)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--font-size-label)',
              fontWeight: isNowActive ? 700 : 500,
              color: isNowActive ? 'var(--text)' : 'var(--text-tertiary)',
              background: isNowActive ? 'var(--color-accent-primary)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-1)'
            }}
          >
            <span>🎯</span>
            <span>Ahora</span>
          </a>

          <a
            href="/app/schedules"
            style={{
              textDecoration: 'none',
              padding: 'var(--space-1) var(--space-3)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--font-size-label)',
              fontWeight: isPlanActive ? 700 : 500,
              color: isPlanActive ? 'var(--text)' : 'var(--text-tertiary)',
              background: isPlanActive ? 'var(--color-accent-primary)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-1)'
            }}
          >
            <span>📅</span>
            <span>Plan</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMoreSheetOpen(true)}
            style={{
              border: 'none',
              padding: 'var(--space-1) var(--space-3)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--font-size-label)',
              fontWeight: isMoreActive ? 700 : 500,
              color: isMoreActive ? 'var(--text)' : 'var(--text-tertiary)',
              background: isMoreActive ? 'var(--color-surface-raised)' : 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-1)'
            }}
          >
            <span>🎛️</span>
            <span>Más</span>
          </button>
        </nav>

        {/* MODO SIMPLE TOGGLE ACCESIBLE */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Button
            variant={isSimpleMode ? 'primary' : 'ghost'}
            size="sm"
            onClick={toggleSimpleMode}
            aria-label={isSimpleMode ? 'Desactivar Modo Simple' : 'Activar Modo Simple de baja estimulación'}
          >
            {isSimpleMode ? '🌿 Modo Simple Activo' : '🌱 Modo Simple'}
          </Button>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL DE LA PÁGINA */}
      <main style={{ flex: 1, padding: 'var(--space-4)', maxWidth: isSimpleMode ? '760px' : '1100px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        {children}
      </main>

      {/* BOTTOM BAR NAVEGACIÓN MÓVIL (PERSISTENTE 3 DESTINOS) */}
      <nav
        className="mobile-bottom-nav"
        style={{
          position: 'sticky',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 95,
          background: 'rgba(13, 14, 18, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--color-border-visible)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 'var(--space-2) 0',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.5)'
        }}
      >
        <a
          href="/app"
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            minWidth: '64px',
            minHeight: '44px',
            justifyContent: 'center',
            color: isNowActive ? 'var(--color-accent-primary)' : 'var(--text-tertiary)'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>🎯</span>
          <span style={{ fontSize: 'var(--font-size-meta)', fontWeight: isNowActive ? 700 : 500 }}>Ahora</span>
        </a>

        <a
          href="/app/schedules"
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            minWidth: '64px',
            minHeight: '44px',
            justifyContent: 'center',
            color: isPlanActive ? 'var(--color-accent-primary)' : 'var(--text-tertiary)'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>📅</span>
          <span style={{ fontSize: 'var(--font-size-meta)', fontWeight: isPlanActive ? 700 : 500 }}>Plan</span>
        </a>

        <button
          type="button"
          onClick={() => setIsMoreSheetOpen(true)}
          style={{
            background: 'transparent',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            minWidth: '64px',
            minHeight: '44px',
            justifyContent: 'center',
            color: isMoreActive ? 'var(--color-accent-primary)' : 'var(--text-tertiary)',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>🎛️</span>
          <span style={{ fontSize: 'var(--font-size-meta)', fontWeight: isMoreActive ? 700 : 500 }}>Más</span>
        </button>
      </nav>

      {/* MENÚ MÁS (ORGANIZADO POR INTENCIÓN EN SHEET ACCESIBLE) */}
      <Sheet
        isOpen={isMoreSheetOpen}
        onClose={() => setIsMoreSheetOpen(false)}
        title="Navegación & Herramientas"
        description="Selecciona un área o recurso para trabajar"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          {/* BLOQUE 1: ÁREAS */}
          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: 'var(--space-2)' }}>
              Áreas de Trabajo
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <ListRow
                title="Clínica & Salud Mental"
                meta="Regulación TDAH, ansiedad social, check-in diario"
                icon="🧠"
                onClick={() => { window.location.href = '/app/clinical'; }}
                active={currentPath === '/app/clinical'}
              />
              <ListRow
                title="Laboral & Carrera"
                meta="TwinSight MVP, portafolio y entregables de tesis"
                icon="💼"
                onClick={() => { window.location.href = '/app/career'; }}
                active={currentPath === '/app/career'}
              />
              <ListRow
                title="Alemán A1"
                meta="Estudio diario de 25 min, Duolingo e IA"
                icon="🇩🇪"
                onClick={() => { window.location.href = '/app/german'; }}
                active={currentPath === '/app/german'}
              />
              <ListRow
                title="Fitness & Rehabilitación"
                meta="FitApp tracker, rutinas Min-Max y prehab"
                icon="🏋️"
                onClick={() => { window.location.href = '/app/fitness'; }}
                active={currentPath === '/app/fitness'}
              />
            </div>
          </div>

          {/* BLOQUE 2: RECURSOS */}
          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: 'var(--space-2)' }}>
              Recursos & Documentación
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <ListRow
                title="Biblioteca de Referencias"
                meta="Manuales técnicos, Overcoming Gravity y teoría"
                icon="📖"
                onClick={() => { window.location.href = '/app/library'; }}
                active={currentPath === '/app/library'}
              />
              <ListRow
                title="Plan Maestro & Documentos"
                meta="Directrices, estrategia y blueprint completo"
                icon="📜"
                onClick={() => { window.location.href = '/app/master-plan'; }}
                active={currentPath === '/app/master-plan'}
              />
            </div>
          </div>

          {/* BLOQUE 3: SISTEMA */}
          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: 'var(--space-2)' }}>
              Preferencias del Sistema
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <ListRow
                title={isSimpleMode ? "Desactivar Modo Simple" : "Activar Modo Simple"}
                meta={isSimpleMode ? "Volver a vista completa" : "Reducir a 1 columna sin métricas ni distracciones"}
                icon="🌱"
                badge={isSimpleMode ? "Activo" : "Baja estimulación"}
                badgeTone={isSimpleMode ? "success" : "default"}
                onClick={() => { toggleSimpleMode(); setIsMoreSheetOpen(false); }}
              />
            </div>
          </div>
        </div>
      </Sheet>
    </div>
  );
}

export default NavigationShell;
