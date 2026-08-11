import React, { useState, useEffect, useRef } from 'react';
import { Sun, Dumbbell, Briefcase, Languages, HeartPulse, ChefHat, MoreHorizontal, X } from 'lucide-react';
import { withBase } from '../../utils/url';
import { NAV_ITEMS } from '../shell/navItems';
import Sheet from '../ui/Sheet';
import ListRow from '../ui/ListRow';
import Button from '../ui/Button';
import NotionSyncStatus from '../common/NotionSyncStatus';
import styles from './NavigationShell.module.css';

export interface NavigationShellProps {
  currentPath?: string;
  activeDomain?: string;
  breadcrumb?: string;
}

export function NavigationShell({
  currentPath = '/app/today',
  breadcrumb
}: NavigationShellProps) {
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
  const [isDesktopMoreOpen, setIsDesktopMoreOpen] = useState(false);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isDesktopMoreOpen) {
          setIsDesktopMoreOpen(false);
          moreButtonRef.current?.focus();
        }
        if (isMobileSheetOpen) {
          setIsMobileSheetOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDesktopMoreOpen, isMobileSheetOpen]);

  const renderIcon = (name: string, size = 18) => {
    switch (name) {
      case 'sun': return <Sun size={size} />;
      case 'dumbbell': return <Dumbbell size={size} />;
      case 'briefcase': return <Briefcase size={size} />;
      case 'languages': return <Languages size={size} />;
      case 'heart-pulse': return <HeartPulse size={size} />;
      case 'chef-hat': return <ChefHat size={size} />;
      default: return <MoreHorizontal size={size} />;
    }
  };

  const isPathActive = (href: string) => {
    if (href === '/app/today' && (currentPath === '/app' || currentPath === '/app/' || currentPath === '/app/today')) {
      return true;
    }
    return currentPath.startsWith(href);
  };

  const primaryItems = NAV_ITEMS.filter((i) => i.section === 'primary');
  const moreItems = NAV_ITEMS.filter((i) => i.section === 'more');

  const isMoreActive = moreItems.some((i) => isPathActive(i.href));

  return (
    <>
      <header className={styles.header}>
        <div className={styles.brandGroup}>
          <a href={withBase('/app/today')} className={styles.brandLink}>
            <Sun size={20} style={{ color: 'var(--color-accent-primary)' }} aria-hidden="true" />
            <span>Plan Maestro OS</span>
          </a>

          {breadcrumb && <span className={styles.breadcrumbText}>{breadcrumb}</span>}
          <NotionSyncStatus status="offline_local" lastHoursAgo={1} />
        </div>

        {/* NAV ESCRITORIO CON MÁXIMO 4 ITEMS + MÁS DROPDOWN PER FIX 01 */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          {primaryItems.map((item) => {
            const active = isPathActive(item.href);
            return (
              <a
                key={item.href}
                href={withBase(item.href)}
                className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}
              >
                {renderIcon(item.icon, 16)}
                <span>{item.label}</span>
              </a>
            );
          })}

          <div style={{ position: 'relative' }}>
            <button
              ref={moreButtonRef}
              type="button"
              onClick={() => setIsDesktopMoreOpen(!isDesktopMoreOpen)}
              className={`${styles.navItem} ${isMoreActive ? styles.navItemActive : ''}`}
              aria-expanded={isDesktopMoreOpen}
              aria-haspopup="true"
            >
              <MoreHorizontal size={16} />
              <span>Más</span>
            </button>

            {isDesktopMoreOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '8px',
                  background: 'var(--surface)',
                  border: '1px solid var(--color-border-visible)',
                  borderRadius: 'var(--radius-md)',
                  padding: '6px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                  zIndex: 9999,
                  minWidth: '160px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                {moreItems.map((item) => (
                  <a
                    key={item.href}
                    href={withBase(item.href)}
                    onClick={() => setIsDesktopMoreOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      color: isPathActive(item.href) ? 'var(--color-accent-primary)' : 'var(--text)',
                      background: isPathActive(item.href) ? 'var(--color-accent-primary-soft)' : 'transparent',
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}
                  >
                    {renderIcon(item.icon, 16)}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className={styles.desktopRight}>
          {/* Reservado para acciones globales si fuera necesario */}
        </div>
      </header>

      {/* MOBILE BAR (MÁXIMO 4 ITEMS + MÁS SHEET PER FIX 01) */}
      <nav className={styles.mobileNav} aria-label="Navegación móvil">
        {primaryItems.map((item) => (
          <a
            key={item.href}
            href={withBase(item.href)}
            className={`${styles.mobileNavItem} ${isPathActive(item.href) ? styles.mobileNavItemActive : ''}`}
          >
            {renderIcon(item.icon, 20)}
            <span>{item.label}</span>
          </a>
        ))}

        <button
          type="button"
          onClick={() => setIsMobileSheetOpen(true)}
          className={`${styles.mobileNavItem} ${isMoreActive ? styles.mobileNavItemActive : ''}`}
        >
          <MoreHorizontal size={20} />
          <span>Más</span>
        </button>
      </nav>

      <Sheet
        isOpen={isMobileSheetOpen}
        onClose={() => setIsMobileSheetOpen(false)}
        title="Más"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
            Secciones
          </span>
          {moreItems.map((item) => (
            <ListRow
              key={item.href}
              title={item.label}
              icon={renderIcon(item.icon, 18)}
              onClick={() => {
                window.location.href = withBase(item.href);
              }}
              active={isPathActive(item.href)}
            />
          ))}
          <Button variant="ghost" size="sm" onClick={() => setIsMobileSheetOpen(false)}>
            <X size={16} /> Cerrar
          </Button>
        </div>
      </Sheet>
    </>
  );
}

export default NavigationShell;
