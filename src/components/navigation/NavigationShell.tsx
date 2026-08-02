import React, { useState, useRef, useEffect } from 'react';
import { Zap, Calendar, ChevronDown, HeartPulse, BriefcaseBusiness, Languages, Dumbbell, LibraryBig, Sprout } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import { withBase } from '../../utils/url';
import Sheet from '../ui/Sheet';
import ListRow from '../ui/ListRow';
import Button from '../ui/Button';
import styles from './NavigationShell.module.css';

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
  const [isMorePopoverOpen, setIsMorePopoverOpen] = useState(false);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const isSimpleMode = useAppStore((s) => s.isSimpleMode);
  const toggleSimpleMode = useAppStore((s) => s.toggleSimpleMode);

  // Determine active tab among 3 main destinations
  const isNowActive = activeDomain === 'now' || currentPath === '/app' || currentPath === '/app/clinical' || currentPath === '/app/today';
  const isPlanActive = activeDomain === 'plan' || currentPath === '/app/schedules';
  const isMoreActive = !isNowActive && !isPlanActive;

  // Close desktop popover on click outside or Escape
  useEffect(() => {
    if (!isMorePopoverOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        moreButtonRef.current &&
        !moreButtonRef.current.contains(e.target as Node)
      ) {
        setIsMorePopoverOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMorePopoverOpen(false);
        moreButtonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMorePopoverOpen]);

  const workAreas = [
    { href: '/app/clinical', label: 'Clínica', icon: HeartPulse },
    { href: '/app/career', label: 'Carrera', icon: BriefcaseBusiness },
    { href: '/app/german', label: 'Idioma', icon: Languages },
    { href: '/app/fitness', label: 'Fitness', icon: Dumbbell },
  ];

  return (
    <div className={styles.wrapper}>
      {/* HEADER PRINCIPAL COMPACTO */}
      <header className={styles.header}>
        <div className={styles.brandGroup}>
          <a href={withBase('/app')} className={styles.brandLink}>
            <Zap size={20} style={{ color: 'var(--color-accent-primary)' }} aria-hidden="true" />
            <span>Plan Maestro OS</span>
          </a>

          {breadcrumb ? (
            <span className={styles.breadcrumbText}>{breadcrumb}</span>
          ) : isMoreActive ? (
            <span className={styles.breadcrumbText}>
              Más / {activeDomain.toUpperCase()}
            </span>
          ) : null}
        </div>

        {/* NAVEGACIÓN PRINCIPAL ESCRITORIO (3 DESTINOS) - >= 768px */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <a
            href={withBase('/app')}
            className={`${styles.navItem} ${isNowActive ? styles.navItemActive : ''}`}
          >
            <Zap size={16} aria-hidden="true" />
            <span>Ahora</span>
          </a>

          <a
            href={withBase('/app/schedules')}
            className={`${styles.navItem} ${isPlanActive ? styles.navItemActive : ''}`}
          >
            <Calendar size={16} aria-hidden="true" />
            <span>Plan</span>
          </a>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
              ref={moreButtonRef}
              type="button"
              aria-haspopup="menu"
              aria-expanded={isMorePopoverOpen}
              onClick={() => setIsMorePopoverOpen((prev) => !prev)}
              className={`${styles.navItem} ${isMoreActive ? styles.navItemActive : ''}`}
            >
              <span>Más</span>
              <ChevronDown
                size={14}
                aria-hidden="true"
                style={{
                  transition: 'transform 150ms ease',
                  transform: isMorePopoverOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </button>

            {/* DESKTOP POPOVER MENU PARA "MÁS" */}
            {isMorePopoverOpen && (
              <div ref={popoverRef} role="menu" className={styles.morePopover}>
                <div>
                  <span className={styles.popoverGroupLabel}>Áreas</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {workAreas.map((area) => {
                      const Icon = area.icon;
                      return (
                        <a
                          key={area.href}
                          href={withBase(area.href)}
                          role="menuitem"
                          className={styles.popoverItem}
                          onClick={() => setIsMorePopoverOpen(false)}
                        >
                          <Icon size={16} style={{ color: 'var(--color-accent-primary)' }} aria-hidden="true" />
                          <span>{area.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '6px' }}>
                  <span className={styles.popoverGroupLabel}>Recursos</span>
                  <a
                    href={withBase('/app/library')}
                    role="menuitem"
                    className={styles.popoverItem}
                    onClick={() => setIsMorePopoverOpen(false)}
                  >
                    <LibraryBig size={16} style={{ color: 'var(--color-accent-warning)' }} aria-hidden="true" />
                    <span>Biblioteca</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* MODO SIMPLE TOGGLE ACCESIBLE ESCRITORIO (>= 768px) */}
        <div className={styles.desktopRight}>
          <Button
            variant="ghost"
            size="sm"
            aria-pressed={isSimpleMode}
            onClick={toggleSimpleMode}
            aria-label={isSimpleMode ? 'Desactivar Modo Simple' : 'Activar Modo Simple de baja estimulación'}
          >
            <Sprout size={17} aria-hidden="true" style={{ color: isSimpleMode ? 'var(--color-state-done)' : 'var(--text-tertiary)' }} />
            <span>Modo simple</span>
          </Button>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL DE LA PÁGINA */}
      <main className={`${styles.appMain} ${isSimpleMode ? styles.appMainSimple : ''}`}>
        {children}
      </main>

      {/* BOTTOM BAR NAVEGACIÓN MÓVIL (< 768px) */}
      <nav className={styles.mobileNav} aria-label="Navegación móvil">
        <a
          href={withBase('/app')}
          className={`${styles.mobileNavItem} ${isNowActive ? styles.mobileNavItemActive : ''}`}
        >
          <Zap size={20} aria-hidden="true" />
          <span style={{ fontSize: 'var(--font-size-meta)', fontWeight: isNowActive ? 700 : 500 }}>Ahora</span>
        </a>

        <a
          href={withBase('/app/schedules')}
          className={`${styles.mobileNavItem} ${isPlanActive ? styles.mobileNavItemActive : ''}`}
        >
          <Calendar size={20} aria-hidden="true" />
          <span style={{ fontSize: 'var(--font-size-meta)', fontWeight: isPlanActive ? 700 : 500 }}>Plan</span>
        </a>

        <button
          type="button"
          onClick={() => setIsMobileSheetOpen(true)}
          className={`${styles.mobileNavItem} ${isMoreActive ? styles.mobileNavItemActive : ''}`}
        >
          <ChevronDown size={20} aria-hidden="true" />
          <span style={{ fontSize: 'var(--font-size-meta)', fontWeight: isMoreActive ? 700 : 500 }}>Más</span>
        </button>
      </nav>

      {/* SHEET NAVEGACIÓN MÓVIL (< 768px) */}
      <Sheet
        isOpen={isMobileSheetOpen}
        onClose={() => setIsMobileSheetOpen(false)}
        title="Navegación"
        description="Selecciona un área o activa Modo simple"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {/* ÁREAS */}
          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: 'var(--space-2)' }}>
              Áreas
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {workAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <ListRow
                    key={area.href}
                    title={area.label}
                    icon={<Icon size={18} style={{ color: 'var(--color-accent-primary)' }} />}
                    onClick={() => { window.location.href = withBase(area.href); }}
                    active={currentPath === area.href}
                  />
                );
              })}
            </div>
          </div>

          {/* BIBLIOTECA */}
          <div>
            <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: 'var(--space-2)' }}>
              Recursos
            </span>
            <ListRow
              title="Biblioteca"
              icon={<LibraryBig size={18} style={{ color: 'var(--color-accent-warning)' }} />}
              onClick={() => { window.location.href = withBase('/app/library'); }}
              active={currentPath === '/app/library'}
            />
          </div>

          {/* MÓVIL: MODO SIMPLE INTEGRADO DENTRO DEL SHEET */}
          <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-md)' }}>
            <ListRow
              title="Modo simple"
              meta="Reducir a 1 columna sin distracciones"
              icon={<Sprout size={18} style={{ color: 'var(--color-state-done)' }} />}
              badge={isSimpleMode ? 'Activo' : undefined}
              badgeTone={isSimpleMode ? 'success' : 'default'}
              onClick={() => { toggleSimpleMode(); setIsMobileSheetOpen(false); }}
            />
          </div>
        </div>
      </Sheet>
    </div>
  );
}

export default NavigationShell;
