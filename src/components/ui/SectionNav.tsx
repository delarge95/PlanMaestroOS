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
          gap: '4px',
          background: isLevel3 ? 'transparent' : 'var(--surface-1, #0d0d0f)',
          border: isLevel3 ? 'none' : '1px solid var(--separator, rgba(255,255,255,0.08))',
          borderRadius: 'var(--radius-m, 12px)',
          padding: isLevel3 ? '2px 0' : '4px',
          margin: 'var(--space-2) 0 var(--space-4) 0',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
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
                padding: isLevel3 ? '4px 10px' : '6px 14px',
                borderRadius: 'var(--radius-s, 8px)',
                fontSize: isLevel3 ? 'var(--fs-meta, 0.8125rem)' : 'var(--fs-body, 0.9375rem)',
                fontWeight: active ? 600 : 400,
                color: active
                  ? 'var(--text-primary, #f5f5f7)'
                  : 'var(--text-secondary, #98989d)',
                background: active
                  ? isLevel3
                    ? 'rgba(255,255,255,0.08)'
                    : 'var(--surface-2, #161619)'
                  : 'transparent',
                border: active && !isLevel3
                  ? '1px solid var(--separator, rgba(255,255,255,0.12))'
                  : '1px solid transparent',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 150ms ease'
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
