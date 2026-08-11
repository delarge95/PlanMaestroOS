import React, { useState } from 'react';
import { initialNews, type NewsItem } from '../../data/career/savedContent';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { Bookmark, CheckCircle, Trash2, ExternalLink } from 'lucide-react';

export default function NewsInbox() {
  const [items, setItems] = useState<NewsItem[]>(initialNews);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewFilter, setViewFilter] = useState<'inbox' | 'saved'>('inbox');

  const updateStatus = (id: string, newStatus: 'inbox' | 'saved' | 'read' | 'dismissed') => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i)));
  };

  const filtered = items
    .filter((i) => (viewFilter === 'inbox' ? i.status === 'inbox' : i.status === 'saved'))
    .filter((i) => selectedCategory === 'all' || i.category === selectedCategory);

  const visibleQueue = filtered.slice(0, 10);

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
        
        {/* CABECERA PRESCRIPTIVA CON COPY EXACTO */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-xs)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Noticias
          </h2>

          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '3px', borderRadius: '10px', border: '1px solid var(--color-border-subtle)' }}>
            <button
              type="button"
              onClick={() => setViewFilter('inbox')}
              style={{
                background: viewFilter === 'inbox' ? 'var(--color-accent-primary)' : 'transparent',
                color: viewFilter === 'inbox' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: viewFilter === 'inbox' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              Noticias
            </button>

            <button
              type="button"
              onClick={() => setViewFilter('saved')}
              style={{
                background: viewFilter === 'saved' ? 'var(--color-accent-primary)' : 'transparent',
                color: viewFilter === 'saved' ? '#000000' : 'var(--text-secondary)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: viewFilter === 'saved' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              Ver más tarde
            </button>
          </div>
        </div>

        {/* FILTROS POR CATEGORÍA */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto' }}>
          {['all', 'IA', '3D / Tech Art', 'Desarrollo y diseño', 'Carrera'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? 'var(--color-accent-primary-soft)' : 'transparent',
                color: selectedCategory === cat ? 'var(--color-accent-primary)' : 'var(--text-tertiary)',
                border: 'none',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: selectedCategory === cat ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              {cat === 'all' ? 'Todas' : cat}
            </button>
          ))}
        </div>

        {/* COLA PAGINADA DE MÁXIMO 10 ELEMENTOS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
          {visibleQueue.length === 0 ? (
            <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
              Sin noticias pendientes en esta cola.
            </div>
          ) : (
            visibleQueue.map((item) => (
              <div
                key={item.id}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-primary)', background: 'var(--color-accent-primary-soft)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                      {item.source} · {item.dateIso}
                    </span>
                  </div>

                  <strong style={{ fontSize: '0.9rem', color: 'var(--text)', display: 'block', marginTop: '4px' }}>
                    {item.title}
                  </strong>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {item.status === 'inbox' && (
                    <Button variant="secondary" size="sm" onClick={() => updateStatus(item.id, 'saved')}>
                      <Bookmark size={14} /> Guardar
                    </Button>
                  )}

                  <Button variant="ghost" size="sm" onClick={() => updateStatus(item.id, 'read')}>
                    <CheckCircle size={14} /> Leído
                  </Button>

                  <Button variant="ghost" size="sm" onClick={() => updateStatus(item.id, 'dismissed')}>
                    <Trash2 size={14} /> Descartar
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </ErrorBoundary>
  );
}
