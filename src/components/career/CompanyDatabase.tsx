import React, { useMemo, useState } from 'react';
import { type CompanyRecord, type CompanyTarget, type JobBoard, type RecruiterChannel, type CommunityChannel } from '../../data/career/companies';
import { companyTargets, jobBoards, recruiterChannels, communityChannels, applicationDisqualifiers } from '../../data/career/companyTargets';
import { useCareerStore } from '../../data/career/careerStore';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { Building2, History, ChevronRight, ExternalLink, Search } from 'lucide-react';

type TabKey = 'companies' | 'boards' | 'recruiters' | 'communities';
type TierFilter = 'all' | 'A' | 'B' | 'Watchlist' | 'A1' | 'A2';

const TIER_BADGE: Record<string, { label: string; color: string }> = {
  'Top Priority': { label: 'A', color: 'var(--color-accent-primary)' },
  'Standard': { label: 'B', color: 'var(--color-accent-warning)' },
  'Watchlist': { label: 'W', color: 'var(--text-tertiary)' }
};

export default function CompanyDatabase() {
  const storeCompanies = useCareerStore((s) => s.companies);
  const [tab, setTab] = useState<TabKey>('companies');
  const [tierFilter, setTierFilter] = useState<TierFilter>('all');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(companyTargets[0]?.id ?? null);

  /** Timeline real del store si hay interacciones registradas con esa empresa. */
  const timelineFor = (name: string): CompanyRecord | undefined =>
    storeCompanies.find((c) => c.name.toLowerCase() === name.toLowerCase());

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return companyTargets.filter((c) => {
      if (tierFilter === 'A1' && c.wave !== 'A1') return false;
      if (tierFilter === 'A2' && c.wave !== 'A2') return false;
      if (tierFilter === 'A' && c.priority !== 'A') return false;
      if (tierFilter === 'B' && c.priority !== 'B') return false;
      if (tierFilter === 'Watchlist' && c.priority !== 'Watchlist') return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q) ||
        c.typicalRoles.toLowerCase().includes(q)
      );
    });
  }, [query, tierFilter]);

  const selected = companyTargets.find((c) => c.id === selectedId) ?? filtered[0];
  const selectedTimeline = selected ? timelineFor(selected.name) : undefined;

  const tierOptions: Array<{ key: TierFilter; label: string }> = [
    { key: 'all', label: `Todas (${companyTargets.length})` },
    { key: 'A1', label: 'A1 · verificar primero' },
    { key: 'A2', label: 'A2 · alto encaje' },
    { key: 'A', label: 'Prioridad A' },
    { key: 'B', label: 'Prioridad B' },
    { key: 'Watchlist', label: 'Watchlist' }
  ];

  return (
    <ErrorBoundary>
      <div className="ds-card ds-stack">

        <div className="ds-row-between" style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)', alignItems: 'flex-end', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h3 className="ds-h3 ds-row" style={{ margin: 0, gap: '6px' }}>
              <Building2 size={16} /> Base de datos de empresas
            </h3>
            <span className="ds-caption" style={{ color: 'var(--text-tertiary)' }}>
              {companyTargets.length} targets reales · fuente: doc-11 §Company identity + §Hiring feasibility + §Scoring
            </span>
          </div>

          <div className="ds-row-wrap" style={{ gap: '4px' }}>
            {([
              ['companies', 'Empresas'],
              ['boards', 'Job boards'],
              ['recruiters', 'Recruiters'],
              ['communities', 'Comunidades']
            ] as Array<[TabKey, string]>).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className="ds-chip"
                data-active={tab === key}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ————— TAB EMPRESAS ————— */}
        {tab === 'companies' && (
          <>
            <div className="ds-row-wrap" style={{ gap: '8px', alignItems: 'center' }}>
              <div className="ds-card ds-row" style={{ padding: '5px 10px', gap: '6px', flex: '1 1 220px', minWidth: '200px' }}>
                <Search size={13} style={{ color: 'var(--text-tertiary)' }} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Empresa, categoría, rol, región…"
                  style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--text)', fontSize: '0.78rem', width: '100%' }}
                />
              </div>
              {tierOptions.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTierFilter(t.key)}
                  className="ds-chip"
                  data-active={tierFilter === t.key}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 'var(--space-md)' }}>
              {/* LISTA */}
              <div className="ds-stack-sm" style={{ gap: '6px' }}>
                {filtered.map((c) => {
                  const badge = TIER_BADGE[c.tier] ?? TIER_BADGE['Watchlist'];
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedId(c.id)}
                      className="ds-card ds-card-clickable ds-row-between"
                      data-selected={selectedId === c.id}
                      style={{
                        padding: '9px 12px',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <strong className="ds-label" style={{ fontSize: '0.85rem', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {c.name}
                        </strong>
                        <span className="ds-micro" style={{ display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {c.category}
                        </span>
                      </div>
                      <span className="ds-row" style={{ gap: '4px', alignItems: 'center', flexShrink: 0 }}>
                        {c.wave && (
                          <span className="ds-badge ds-badge-accent" style={{ fontSize: '0.6rem', padding: '2px 5px' }}>
                            {c.wave}
                          </span>
                        )}
                        <span className="ds-badge ds-badge-neutral" style={{ fontSize: '0.6rem', color: badge.color, borderColor: badge.color, padding: '2px 5px' }}>
                          {badge.label}
                        </span>
                      </span>
                    </button>
                  );
                })}
                {filtered.length === 0 && (
                  <span className="ds-caption" style={{ color: 'var(--text-tertiary)', padding: '10px' }}>
                    Sin resultados para ese filtro.
                  </span>
                )}
              </div>

              {/* DETALLE */}
              {selected && (
                <div className="ds-card ds-stack-sm" style={{ padding: '12px', gap: '10px' }}>
                  <div className="ds-row-between" style={{ alignItems: 'flex-start', gap: '8px' }}>
                    <div>
                      <strong className="ds-label" style={{ fontSize: '0.95rem' }}>{selected.name}</strong>
                      <div className="ds-micro" style={{ color: 'var(--text-tertiary)' }}>
                        #{selected.doc11Number} · {selected.region} · {selected.category}
                      </div>
                    </div>
                    {selected.website && selected.website !== 'not found' && (
                      <a href={selected.website} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', flexShrink: 0 }}>
                        <Button variant="secondary" size="sm">
                          <ExternalLink size={13} /> Careers
                        </Button>
                      </a>
                    )}
                  </div>

                  <DetailRow label="Roles típicos" value={selected.typicalRoles} />
                  <div className="ds-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '6px' }}>
                    <MiniStat label="Remoto" value={selected.remoteSignal} />
                    <MiniStat label="Contratista" value={selected.contractorSignal} />
                    <MiniStat label="Idioma" value={selected.language} />
                    <MiniStat label="Salario" value={selected.salaryTier} />
                  </div>
                  <DetailRow label="Autorización" value={selected.authNote} />
                  <div className="ds-row ds-caption" style={{ gap: '10px' }}>
                    <span>Fit <strong style={{ color: 'var(--color-accent-primary)' }}>{selected.scores.fit}/5</strong></span>
                    <span>Prob. <strong style={{ color: 'var(--color-accent-primary)' }}>{selected.scores.probability}/5</strong></span>
                    <span>Comp. <strong style={{ color: 'var(--color-accent-primary)' }}>{selected.scores.compensation}/5</strong></span>
                    <span>Portafolio <strong style={{ color: 'var(--color-accent-primary)' }}>{selected.scores.portfolio}/5</strong></span>
                  </div>

                  {(selected.wave === 'A1' ? selected.whyFirst || selected.verificationFocus : selected.mainUpside || selected.mainFriction) && (
                    <div className="ds-card ds-caption ds-stack-sm" style={{ borderStyle: 'dashed', padding: '8px', gap: '4px' }}>
                      {selected.wave === 'A1' ? (
                        <>
                          {selected.whyFirst && <span><strong style={{ color: 'var(--text)' }}>Por qué primero:</strong> {selected.whyFirst}</span>}
                          {selected.verificationFocus && <span><strong style={{ color: 'var(--text)' }}>A verificar:</strong> {selected.verificationFocus}</span>}
                        </>
                      ) : (
                        <>
                          {selected.mainUpside && <span><strong style={{ color: 'var(--text)' }}>Upside:</strong> {selected.mainUpside}</span>}
                          {selected.mainFriction && <span><strong style={{ color: 'var(--text)' }}>Fricción:</strong> {selected.mainFriction}</span>}
                        </>
                      )}
                    </div>
                  )}

                  <span className="ds-micro" style={{ fontStyle: 'italic' }}>Fuente: {selected.sourceRef}</span>

                  {/* TIMELINE real (si hay interacciones registradas en el store) */}
                  {selectedTimeline && selectedTimeline.timeline.length > 0 && (
                    <div className="ds-stack-sm" style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '8px', gap: '6px' }}>
                      <strong className="ds-label ds-row" style={{ fontSize: '0.78rem', gap: '5px' }}>
                        <History size={12} /> Interacciones registradas
                      </strong>
                      {selectedTimeline.timeline.map((t) => (
                        <div key={t.id} style={{ borderLeft: '2px solid var(--color-accent-primary)', paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
                          <div className="ds-row-between ds-micro">
                            <span style={{ color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                              {t.type === 'message' ? 'Mensaje' : t.type === 'cv_sent' ? 'CV enviado' : t.type === 'reply' ? 'Respuesta' : t.type === 'interview' ? 'Entrevista' : 'Resultado'}
                            </span>
                            <span style={{ color: 'var(--text-tertiary)' }}>{t.dateIso}</span>
                          </div>
                          <span className="ds-caption">{t.note}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Descualificadores del doc-11 */}
            <details className="ds-caption" style={{ color: 'var(--text-secondary)' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 600 }}>Descalificadores de aplicación (doc-11 §Application disqualifiers)</summary>
              <ul className="ds-stack-sm" style={{ margin: '6px 0 0 18px', padding: 0, gap: '3px' }}>
                {applicationDisqualifiers.map((d) => (
                  <li key={d} className="ds-micro">{d}</li>
                ))}
              </ul>
            </details>
          </>
        )}

        {/* ————— TAB BOARDS ————— */}
        {tab === 'boards' && <ChannelList kind="board" />}

        {/* ————— TAB RECRUITERS ————— */}
        {tab === 'recruiters' && <ChannelList kind="recruiter" />}

        {/* ————— TAB COMMUNITIES ————— */}
        {tab === 'communities' && <ChannelList kind="community" />}

      </div>
    </ErrorBoundary>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="ds-caption" style={{ color: 'var(--text-secondary)' }}>
      <span style={{ color: 'var(--text-tertiary)', fontWeight: 600 }}>{label}: </span>
      {value}
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="ds-card ds-stack-sm" style={{ padding: '5px 7px', gap: '2px' }}>
      <span className="ds-micro" style={{ fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>{label}</span>
      <span className="ds-caption">{value || '—'}</span>
    </div>
  );
}

/** Lista compacta de canales (boards/recruiters/comunidades) con link y fuente. */
function ChannelList({ kind }: { kind: 'board' | 'recruiter' | 'community' }) {
  const items: Array<JobBoard | RecruiterChannel | CommunityChannel> =
    kind === 'board' ? jobBoards : kind === 'recruiter' ? recruiterChannels : communityChannels;

  return (
    <div className="ds-stack-sm" style={{ gap: '6px' }}>
      {items.map((it) => (
        <div
          key={`${it.name}-${it.url}`}
          className="ds-card"
          style={{ padding: '8px 10px', display: 'grid', gridTemplateColumns: 'minmax(140px, 1.2fr) 2fr', gap: '4px 12px' }}
        >
          <div>
            <a href={it.url} target="_blank" rel="noreferrer" className="ds-row ds-label" style={{ fontWeight: 700, color: 'var(--color-accent-primary)', textDecoration: 'none', gap: '4px' }}>
              {it.name} <ExternalLink size={11} />
            </a>
            {'category' in it && <span className="ds-micro" style={{ display: 'block' }}>{it.category}</span>}
            {'platform' in it && <span className="ds-micro" style={{ display: 'block' }}>{it.platform}</span>}
            {'specialization' in it && <span className="ds-micro" style={{ display: 'block' }}>{it.specialization}</span>}
          </div>
          <div className="ds-caption ds-stack-sm" style={{ gap: '2px' }}>
            {'searchTerms' in it && it.searchTerms && <span><strong style={{ color: 'var(--text-tertiary)' }}>Buscar:</strong> {it.searchTerms} · <strong style={{ color: 'var(--text-tertiary)' }}>Frecuencia:</strong> {it.frequency}</span>}
            {'relevantRoles' in it && it.relevantRoles && <span><strong style={{ color: 'var(--text-tertiary)' }}>Roles:</strong> {it.relevantRoles}</span>}
            {'whyUseful' in it && it.whyUseful && <span>{it.whyUseful}</span>}
            {'notes' in it && it.notes && <span>{it.notes}</span>}
            <span className="ds-micro" style={{ fontStyle: 'italic' }}>Fuente: {it.sourceRef}</span>
          </div>
        </div>
      ))}
      <span className="ds-micro">
        {items.length} canales · fuente doc-11
      </span>
    </div>
  );
}
