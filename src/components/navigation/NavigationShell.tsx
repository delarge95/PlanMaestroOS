import React, { useState, useEffect } from 'react';
import { Sun, Dumbbell, HeartPulse, Briefcase, Languages, Utensils, MoreHorizontal, Sprout } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import { withBase } from '../../utils/url';
import Sheet from '../ui/Sheet';
import ListRow from '../ui/ListRow';
import Button from '../ui/Button';
import styles from './NavigationShell.module.css';

export interface NavigationShellProps {
  currentPath?: string;
  activeDomain?: string;
  breadcrumb?: string;
}

export interface NavItemConfig {
  href: string;
  label: string;
  iconName: string;
  disabled?: boolean;
}

export const NAV_ITEMS: NavItemConfig[] = [
  { href: '/app/today', label: 'Hoy', iconName: 'sun' },
  { href: '/app/fitness', label: 'Fitness', iconName: 'dumbbell' },
  { href: '/app/clinical', label: 'Clínico', iconName: 'heart-pulse', disabled: true },
  { href: '/app/career', label: 'Laboral', iconName: 'briefcase', disabled: true },
  { href: '/app/languages', label: 'Idiomas', iconName: 'languages', disabled: true },
  { href: '/app/gastronomy', label: 'Gastronomía', iconName: 'utensils', disabled: true },
  { href: '/app/more', label: 'Más', iconName: 'more-horizontal', disabled: true },
];

export function NavigationShell({
  currentPath = '/app/today',
  activeDomain = 'today',
  breadcrumb
}: NavigationShellProps) {
  const [mounted, setMounted] = useState(false);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  const isSimpleMode = useAppStore((s) => s.isSimpleMode);
  const toggleSimpleMode = useAppStore((s) => s.toggleSimpleMode);

  useEffect(() => {
    setMounted(true);
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('simple-mode-active', isSimpleMode);
    }
  }, [isSimpleMode]);

  const activeSimpleMode = mounted ? isSimpleMode : false;

  const renderIcon = (name: string, size = 18) => {
    switch (name) {
      case 'sun': return <Sun size={size} />;
      case 'dumbbell': return <Dumbbell size={size} />;
      case 'heart-pulse': return <HeartPulse size={size} />;
      case 'briefcase': return <Briefcase size={size} />;
      case 'languages': return <Languages size={size} />;
      case 'utensils': return <Utensils size={size} />;
      default: return <MoreHorizontal size={size} />;
    }
  };

  const isPathActive = (href: string) => {
    if (href === '/app/today' && (currentPath === '/app' || currentPath === '/app/' || currentPath === '/app/today')) {
      return true;
    }
    return currentPath.startsWith(href);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.brandGroup}>
          <a href={withBase('/app/today')} className={styles.brandLink}>
            <Sun size={20} style={{ color: 'var(--color-accent-primary)' }} aria-hidden="true" />
            <span>Plan Maestro OS</span>
          </a>

          {breadcrumb && <span className={styles.breadcrumbText}>{breadcrumb}</span>}
        </div>

        {/* NAV ESCRITORIO CON ARRAY DATA DE NAV_ITEMS */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => {
            const active = isPathActive(item.href);

            if (item.disabled) {
              return (
                <span
                  key={item.href}
                  className={`${styles.navItem} ${styles.navItemDisabled}`}
                  title="Próximamente"
                  style={{ opacity: 0.4, cursor: 'not-allowed', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}
                >
                  {renderIcon(item.iconName, 15)}
                  <span>{item.label}</span>
                  <span style={{ fontSize: '0.65rem', background: 'rgba(255,255,255,0.06)', padding: '1px 5px', borderRadius: '4px' }}>Próximamente</span>
                </span>
              );
            }

            return (
              <a
                key={item.href}
                href={withBase(item.href)}
                className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}
              >
                {renderIcon(item.iconName, 16)}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className={styles.desktopRight}>
          <Button
            variant="ghost"
            size="sm"
            aria-pressed={activeSimpleMode}
            onClick={() => {
              toggleSimpleMode();
              if (typeof document !== 'undefined') {
                document.body.classList.toggle('simple-mode-active', !useAppStore.getState().isSimpleMode);
              }
            }}
          >
            <Sprout size={17} style={{ color: activeSimpleMode ? 'var(--color-state-done)' : 'var(--text-tertiary)' }} />
            <span>Modo simple</span>
          </Button>
        </div>
      </header>

      {/* MOBILE BAR (MÁXIMO 4 ITEMS + MÁS) */}
      <nav className={styles.mobileNav} aria-label="Navegación móvil">
        <a
          href={withBase('/app/today')}
          className={`${styles.mobileNavItem} ${isPathActive('/app/today') ? styles.mobileNavItemActive : ''}`}
        >
          <Sun size={20} />
          <span>Hoy</span>
        </a>

        <a
          href={withBase('/app/fitness')}
          className={`${styles.mobileNavItem} ${isPathActive('/app/fitness') ? styles.mobileNavItemActive : ''}`}
        >
          <Dumbbell size={20} />
          <span>Fitness</span>
        </a>

        <button
          type="button"
          onClick={() => setIsMobileSheetOpen(true)}
          className={styles.mobileNavItem}
        >
          <MoreHorizontal size={20} />
          <span>Más</span>
        </button>
      </nav>

      <Sheet
        isOpen={isMobileSheetOpen}
        onClose={() => setIsMobileSheetOpen(false)}
        title="Navegación"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {NAV_ITEMS.map((item) => (
            <ListRow
              key={item.href}
              title={item.label}
              badge={item.disabled ? 'Próximamente' : undefined}
              icon={renderIcon(item.iconName, 18)}
              disabled={item.disabled}
              onClick={() => {
                if (!item.disabled) {
                  window.location.href = withBase(item.href);
                }
              }}
              active={isPathActive(item.href)}
            />
          ))}
        </div>
      </Sheet>
    </>
  );
}

export default NavigationShell;
