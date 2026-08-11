import React, { useState } from 'react';
import { initialCompanies, type CompanyRecord } from '../../data/career/companies';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { Building2, History, ChevronRight } from 'lucide-react';

export default function CompanyDatabase() {
  const [companies] = useState<CompanyRecord[]>(initialCompanies);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(companies[0]?.id || null);

  const selectedCompany = companies.find((c) => c.id === selectedCompanyId);

  return (
    <ErrorBoundary>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        <div style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
            Base de datos de empresas
          </h3>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
            Historial inmutable de interacciones, mensajes enviados y resultados
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-md)' }}>
          {/* LISTA DE EMPRESAS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {companies.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCompanyId(c.id)}
                style={{
                  background: selectedCompanyId === c.id ? 'var(--color-accent-primary-soft)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${selectedCompanyId === c.id ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'}`,
                  borderRadius: '6px',
                  padding: '10px 12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--text)', display: 'block' }}>{c.name}</strong>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>{c.tier}</span>
                </div>
                <ChevronRight size={16} style={{ color: 'var(--text-tertiary)' }} />
              </button>
            ))}
          </div>

          {/* TIMELINE DE LA EMPRESA SELECCIONADA */}
          {selectedCompany && (
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <strong style={{ fontSize: '0.95rem', color: 'var(--text)' }}>
                {selectedCompany.name} · Timeline
              </strong>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedCompany.timeline.map((t) => (
                  <div key={t.id} style={{ borderLeft: '2px solid var(--color-accent-primary)', paddingLeft: '10px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem' }}>
                      <span style={{ color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                        {t.type === 'message' ? 'Mensajes' : t.type === 'outcome' ? 'Resultado' : t.type}
                      </span>
                      <span style={{ color: 'var(--text-tertiary)' }}>{t.dateIso}</span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {t.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </ErrorBoundary>
  );
}
