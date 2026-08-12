// src/components/fitness/analytics/LoadingCharts.tsx
import React, { useState, useMemo } from 'react';

export default function LoadingCharts() {
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');
  const [barWeight, setBarWeight] = useState<number>(20);
  const [bodyWeight, setBodyWeight] = useState<number>(75);

  const tableRows = useMemo(() => {
    const rows = [];
    const step = unit === 'kg' ? 2.5 : 5;
    const start = step;
    const end = unit === 'kg' ? 120 : 250;

    for (let loadPerSide = start; loadPerSide <= end; loadPerSide += step) {
      const platesTotal = loadPerSide * 2;
      const grandTotal = platesTotal + barWeight;

      // Calcular hitos relativos de Peso Corporal
      const bwRatio = Math.round((grandTotal / (bodyWeight || 1)) * 100) / 100;
      let milestone = '';
      if (bwRatio === 1) milestone = '1.0x BW';
      else if (bwRatio === 1.25) milestone = '1.25x BW';
      else if (bwRatio === 1.5) milestone = '1.5x BW';
      else if (bwRatio === 1.75) milestone = '1.75x BW';
      else if (bwRatio === 2.0) milestone = '2.0x BW (Élite)';
      else if (grandTotal === 100) milestone = '🎯 Hito 100 kg';
      else if (grandTotal === 140) milestone = '🎯 Hito 140 kg (3 discos)';
      else if (grandTotal === 180) milestone = '🎯 Hito 180 kg (4 discos)';

      rows.push({
        loadPerSide,
        platesTotal,
        grandTotal,
        bwRatio,
        milestone
      });
    }

    return rows;
  }, [unit, barWeight, bodyWeight]);

  return (
    <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* CABECERA */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <span style={{ fontSize: '0.72rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Calculadora Universal de Cargas
          </span>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text-primary)' }}>
            Tabla Universal por Lado & Hitos
          </h3>
        </div>

        {/* AJUSTES DE UNIDAD Y BARRA */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Peso Barra:</span>
            <input
              type="number"
              value={barWeight}
              onChange={(e) => setBarWeight(Number(e.target.value))}
              style={{ width: '50px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--color-border-subtle)', borderRadius: '4px', padding: '2px 4px', color: 'var(--text-primary)', fontSize: '0.78rem' }}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{unit}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Peso Corporal:</span>
            <input
              type="number"
              value={bodyWeight}
              onChange={(e) => setBodyWeight(Number(e.target.value))}
              style={{ width: '55px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--color-border-subtle)', borderRadius: '4px', padding: '2px 4px', color: 'var(--text-primary)', fontSize: '0.78rem' }}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{unit}</span>
          </div>

          <div style={{ display: 'inline-flex', gap: '2px', background: 'rgba(0,0,0,0.4)', padding: '2px', borderRadius: '8px' }}>
            <button
              type="button"
              onClick={() => setUnit('kg')}
              style={{ background: unit === 'kg' ? 'var(--accent, #0a84ff)' : 'transparent', color: unit === 'kg' ? '#ffffff' : 'var(--text-secondary)', border: 'none', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              KG
            </button>
            <button
              type="button"
              onClick={() => setUnit('lbs')}
              style={{ background: unit === 'lbs' ? 'var(--accent, #0a84ff)' : 'transparent', color: unit === 'lbs' ? '#ffffff' : 'var(--text-secondary)', border: 'none', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              LBS
            </button>
          </div>
        </div>
      </div>

      {/* TABLA DE CARGAS Y DISCOS POR LADO */}
      <div style={{ overflowX: 'auto', border: '1px solid var(--color-border-subtle)', borderRadius: '10px', maxHeight: '420px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
          <thead style={{ position: 'sticky', top: 0, background: '#141820', zIndex: 10, borderBottom: '1px solid var(--color-border-subtle)', textTransform: 'uppercase', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
            <tr>
              <th style={{ padding: '10px 14px' }}>Carga por Lado ({unit})</th>
              <th style={{ padding: '10px 14px' }}>Total Discos</th>
              <th style={{ padding: '10px 14px' }}>Peso Total (Barra + Discos)</th>
              <th style={{ padding: '10px 14px' }}>Relación BW</th>
              <th style={{ padding: '10px 14px' }}>Hitos & Marcas</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((r, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--color-border-subtle, rgba(255,255,255,0.05))', background: r.milestone ? 'rgba(10,132,255,0.06)' : idx % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                <td style={{ padding: '8px 14px', fontWeight: 700, color: 'var(--accent, #0a84ff)' }}>+{r.loadPerSide} {unit}</td>
                <td style={{ padding: '8px 14px', color: 'var(--text-secondary)' }}>{r.platesTotal} {unit}</td>
                <td style={{ padding: '8px 14px', fontWeight: 800, color: 'var(--text-primary)' }}>{r.grandTotal} {unit}</td>
                <td style={{ padding: '8px 14px', color: 'var(--text-secondary)' }}>{r.bwRatio}x BW</td>
                <td style={{ padding: '8px 14px', color: 'var(--success, #30d158)', fontWeight: 700 }}>{r.milestone || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
