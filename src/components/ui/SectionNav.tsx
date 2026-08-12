// src/components/ui/SectionNav.tsx
import React, { useState } from 'react';
import { SECTION_NAV, type NavItemConfig } from '../shell/sectionNavConfig';
import Sheet from './Sheet';
import { Layers } from 'lucide-react';

export interface SectionNavProps {
  sectionKey?: string;
  customItems?: NavItemConfig[];
  currentPath?: string;
  level?: 2 | 3;
}

export default function SectionNav({
  sectionKey,
  customItems,
  currentPath = '',
  level = 2
}: SectionNavProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const items = customItems || (sectionKey ? SECTION_NAV[sectionKey] : []);

  if (!items || items.length === 0) return null;

  const isLevel3 = level === 3;
  const isMobileScroll = items.length > 4;

  const isItemActive = (item: NavItemConfig) => {
    if (item.end) {
      return currentPath === item.href || currentPath === `${item.href}/`;
    }
    return currentPath.startsWith(item.href);
  };

  return (
    <>
      <nav
        aria-label={isLevel3 ? 'Navegación de subsección' : 'Navegación de sección'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: isLevel3 ? '6px' : '3px',
          background: isLevel3 ? 'transparent' : 'rgba(255, 255, 255, 0.04)',
          borderRadius: isLevel3 ? '0' : '999px',
          padding: isLevel3 ? '0 0 4px 0' : '3px 4px',
          margin: isLevel3 ? '0 0 var(--space-4) 0' : '0 0 var(--space-3) 0',
          borderBottom: isLevel3 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          width: 'fit-content',
          maxWidth: '100%'
        }}
      >
        {items.map((item) => {
          const active = isItemActive(item);
          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: isLevel3 ? '6px 12px' : '6px 16px',
                borderRadius: '999px',
                fontSize: isLevel3 ? '0.84rem' : '0.86rem',
                fontWeight: active ? 600 : 500,
                color: active
                  ? '#ffffff'
                  : 'rgba(255, 255, 255, 0.55)',
                background: active
                  ? isLevel3
                    ? 'rgba(255, 255, 255, 0.12)'
                    : 'rgba(255, 255, 255, 0.14)'
                  : 'transparent',
                border: 'none',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)',
                letterSpacing: '-0.01em'
              }}
            >
              {item.label}
            </a>
          );
        })}

        {isMobileScroll && (
          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            className="mobile-only-btn"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: 'var(--radius-s, 8px)',
              fontSize: 'var(--fs-meta, 0.8125rem)',
              color: 'var(--accent, #0a84ff)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              marginLeft: 'auto'
            }}
          >
            <Layers size={14} />
            <span>Secciones</span>
          </button>
        )}
      </nav>

      {/* Sheet móvil para cuando son más de 4 subsecciones */}
      {isMobileScroll && (
        <Sheet isOpen={sheetOpen} onClose={() => setSheetOpen(false)} title="Secciones">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px 0' }}>
            {items.map((item) => {
              const active = isItemActive(item);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setSheetOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-s, 8px)',
                    background: active ? 'var(--color-accent-primary-soft)' : 'var(--surface-1)',
                    color: active ? 'var(--accent)' : 'var(--text-primary)',
                    fontWeight: active ? 700 : 400,
                    textDecoration: 'none'
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </Sheet>
      )}
    </>
  );
}
