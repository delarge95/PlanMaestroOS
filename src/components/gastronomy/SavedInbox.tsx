import React, { useState } from 'react';
import type { SavedItem } from '../../data/gastronomy/types';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { Plus, Trash2, CheckCircle, ChefHat } from 'lucide-react';

export default function SavedInbox() {
  const [items, setItems] = useState<SavedItem[]>([
    { id: 's1', url: 'https://youtube.com/watch?v=sample1', platform: 'yt', title: 'Técnica de Marinado de Pollo Jugoso', category: 'Técnica', savedAt: '2026-08-10', status: 'queue' },
    { id: 's2', url: 'https://instagram.com/p/sample2', platform: 'ig', title: 'Pasta Carbonara Auténtica 15 min', category: 'Receta', savedAt: '2026-08-09', status: 'queue' }
  ]);

  const [inputUrl, setInputUrl] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [processingItemId, setProcessingItemId] = useState<string | null>(null);

  const handleSaveLink = () => {
    if (!inputUrl.trim()) return;
    let platform: SavedItem['platform'] = 'other';
    if (inputUrl.includes('youtube') || inputUrl.includes('youtu.be')) platform = 'yt';
    else if (inputUrl.includes('instagram')) platform = 'ig';
    else if (inputUrl.includes('facebook')) platform = 'fb';

    const newItem: SavedItem = {
      id: `saved-${Date.now()}`,
      url: inputUrl.trim(),
      platform,
      title: inputTitle.trim() || `Contenido guardado de ${platform.toUpperCase()}`,
      category: 'Gastronomía',
      savedAt: new Date().toISOString().split('T')[0],
      status: 'queue'
    };

    setItems([newItem, ...items]);
    setInputUrl('');
    setInputTitle('');
  };

  const handleDiscard = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleConvertToRecipe = (id: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, status: 'processed' as const } : i)));
    setProcessingItemId(null);
  };

  const queueItems = items.filter((i) => i.status === 'queue').slice(0, 10);

  return (
    <ErrorBoundary>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        {/* CABECERA PRESCRIPTIVA CON COPY EXACTO */}
        <div style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Ver más tarde
          </h2>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
            Cola de recursos guardados desde redes sociales (máximo 10 visibles)
          </span>
        </div>

        {/* FORMULARIO GUARDAR ENLACE */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
            Guardar enlace
          </span>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Pegar URL de FB / IG / YT..."
              style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '8px 12px', color: 'var(--text)', fontSize: '0.82rem' }}
            />
            <input
              type="text"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              placeholder="Título descriptivo (opcional)..."
              style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '8px 12px', color: 'var(--text)', fontSize: '0.82rem' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
            <Button variant="primary" size="sm" onClick={handleSaveLink}>
              <Plus size={14} /> Guardar enlace
            </Button>
          </div>
        </div>

        {/* COLA DE ELEMENTOS VISIBLES (MÁXIMO 10) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            Cola de guardados ({queueItems.length})
          </span>

          {queueItems.length === 0 ? (
            <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', padding: '12px 0' }}>
              La cola está vacía.
            </div>
          ) : (
            queueItems.map((item) => (
              <div
                key={item.id}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-primary)', background: 'var(--color-accent-primary-soft)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700, textTransform: 'uppercase' }}>
                      {item.platform}
                    </span>
                    <strong style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{item.title}</strong>
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    <Button variant="secondary" size="sm" onClick={() => setProcessingItemId(item.id)}>
                      Procesar
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDiscard(item.id)}>
                      <Trash2 size={14} /> Descartar
                    </Button>
                  </div>
                </div>

                {processingItemId === item.id && (
                  <div style={{ background: 'rgba(10,132,255,0.04)', border: '1px solid var(--color-accent-primary-soft)', borderRadius: '6px', padding: '10px', marginTop: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      ¿Convertir en receta propia con ingredientes y pasos?
                    </span>
                    <Button variant="primary" size="sm" onClick={() => handleConvertToRecipe(item.id)}>
                      <ChefHat size={14} /> Convertir en receta
                    </Button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

      </div>
    </ErrorBoundary>
  );
}
