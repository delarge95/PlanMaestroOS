import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';

interface Props {
  documentTitle?: string;
  documentPath?: string;
  documentContent?: string;
}

export default function NotionObsidianIntegrationHub({
  documentTitle = 'Plan Maestro OS v3',
  documentPath = '14_30_60_90_execution_plan.md',
  documentContent = '# Plan Maestro OS v3\n\n- TDAH Protocol\n- Fitness Min-Max\n- Tesis & Sustentación\n- Paquete Mínimo Vendible'
}: Props) {
  // Obsidian config
  const [vaultName, setVaultName] = useState('Laboral');
  const [yamlTags, setYamlTags] = useState('plan-maestro, tdah, ejecucion');

  // Notion config
  const [notionToken, setNotionToken] = useState('');
  const [masterDbId, setMasterDbId] = useState('');
  const [jobDbId, setJobDbId] = useState('');
  const [workoutDbId, setWorkoutDbId] = useState('');
  const [activeTab, setActiveTab] = useState<'obsidian' | 'notion'>('obsidian');

  // Status & Notifications
  const [copyNotification, setCopyNotification] = useState<string | null>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem('obsidian_vault_name');
      if (v) setVaultName(v);
      const nt = localStorage.getItem('notion_token');
      if (nt) setNotionToken(nt);
      const mdb = localStorage.getItem('notion_master_db');
      if (mdb) setMasterDbId(mdb);
      const jdb = localStorage.getItem('notion_job_db');
      if (jdb) setJobDbId(jdb);
      const wdb = localStorage.getItem('notion_workout_db');
      if (wdb) setWorkoutDbId(wdb);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSaveObsidianConfig = () => {
    try {
      localStorage.setItem('obsidian_vault_name', vaultName);
      showNotification('¡Configuración de Obsidian guardada!');
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveNotionConfig = () => {
    try {
      localStorage.setItem('notion_token', notionToken);
      localStorage.setItem('notion_master_db', masterDbId);
      localStorage.setItem('notion_job_db', jobDbId);
      localStorage.setItem('notion_workout_db', workoutDbId);
      showNotification('¡Configuración de Notion API guardada!');
    } catch (e) {
      console.error(e);
    }
  };

  const showNotification = (msg: string) => {
    setCopyNotification(msg);
    setTimeout(() => setCopyNotification(null), 3000);
  };

  // Generate Obsidian URI
  const generateObsidianUri = (action: 'open' | 'new' | 'search', filename?: string) => {
    const cleanVault = encodeURIComponent(vaultName);
    if (action === 'open') {
      const cleanFile = encodeURIComponent(filename || documentPath);
      return `obsidian://open?vault=${cleanVault}&file=${cleanFile}`;
    }
    if (action === 'new') {
      const cleanFile = encodeURIComponent(filename || 'Nueva_Nota_Plan_Maestro');
      return `obsidian://new?vault=${cleanVault}&name=${cleanFile}`;
    }
    if (action === 'search') {
      return `obsidian://search?vault=${cleanVault}&query=Plan%20Maestro`;
    }
    return `obsidian://open?vault=${cleanVault}`;
  };

  // Generate Markdown with YAML Frontmatter for Obsidian
  const generateObsidianMarkdown = () => {
    const dateStr = new Date().toISOString().split('T')[0];
    const tagsArray = yamlTags.split(',').map((t) => `#${t.trim()}`).join(' ');
    return `---
title: "${documentTitle}"
date: ${dateStr}
vault_path: "${documentPath}"
tags: [${yamlTags.split(',').map((t) => `"${t.trim()}"`).join(', ')}]
system: "Plan Maestro OS v3"
---

# ${documentTitle}

> **Nota de Sincronización OS**: Documento exportado desde el Plan Maestro OS v3.
> **Etiquetas**: ${tagsArray}

---

${documentContent}

---
*Fecha de exportación: ${new Date().toLocaleString('es-ES')}*
`;
  };

  const handleExportObsidianFile = () => {
    const content = generateObsidianMarkdown();
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${documentTitle.replace(/[^a-zA-Z0-9_-]/g, '_')}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('¡Archivo .md para Obsidian descargado!');
  };

  const handleCopyMarkdownToClipboard = () => {
    const content = generateObsidianMarkdown();
    navigator.clipboard.writeText(content);
    showNotification('¡Markdown formateado para Obsidian/Notion copiado al portapapeles!');
  };

  return (
    <ErrorBoundary>
      <div
        style={{
          background: 'rgba(10, 15, 22, 0.75)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          color: 'var(--color-text-primary)'
        }}
      >
        {/* NOTIFICATION TOAST */}
        {copyNotification && (
          <div
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              background: 'linear-gradient(135deg, #a855f7, #6366f1)',
              color: 'var(--color-text-primary)',
              padding: '12px 20px',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.85rem',
              boxShadow: '0 10px 30px rgba(168, 85, 247, 0.5)',
              zIndex: 9999
            }}
          >
            {copyNotification}
          </div>
        )}

        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-accent-primary)', fontWeight: 800, letterSpacing: '0.05em' }}>
              CONECTOR EN VIVO DE CONOCIMIENTO & NOTAS
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--color-text-primary)' }}>
              Integración Nativa con Obsidian & Notion Workspace
            </h3>
          </div>

          {/* TAB SWITCHER */}
          <div style={{ display: 'flex', gap: '8px', background: 'rgba(0,0,0,0.4)', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              type="button"
              onClick={() => setActiveTab('obsidian')}
              style={{
                background: activeTab === 'obsidian' ? 'rgba(168, 85, 247, 0.25)' : 'transparent',
                border: activeTab === 'obsidian' ? '1px solid rgba(168, 85, 247, 0.5)' : 'none',
                color: activeTab === 'obsidian' ? 'var(--color-accent-primary)' : 'var(--color-text-secondary)',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 150ms ease'
              }}
            >
              🟣 Obsidian Vault Deep-Links
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('notion')}
              style={{
                background: activeTab === 'notion' ? 'rgba(245, 158, 11, 0.25)' : 'transparent',
                border: activeTab === 'notion' ? '1px solid rgba(245, 158, 11, 0.5)' : 'none',
                color: activeTab === 'notion' ? 'var(--color-accent-warning)' : 'var(--color-text-secondary)',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 150ms ease'
              }}
            >
              ⬛ Notion API & Databases
            </button>
          </div>
        </div>

        {/* OBSIDIAN TAB CONTENT */}
        {activeTab === 'obsidian' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>Vault Local de Obsidian:</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', margin: '2px 0 0' }}>
                    Configura el nombre de tu Vault para activar la apertura automática mediante el protocolo `obsidian://`.
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="text"
                    value={vaultName}
                    onChange={(e) => setVaultName(e.target.value)}
                    placeholder="Nombre del Vault (Ej. Laboral)..."
                    style={{
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      color: 'var(--color-text-primary)',
                      fontSize: '0.82rem'
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleSaveObsidianConfig}
                    style={{
                      background: 'rgba(168, 85, 247, 0.2)',
                      border: '1px solid rgba(168, 85, 247, 0.4)',
                      color: 'var(--color-accent-primary)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Guardar
                  </button>
                </div>
              </div>

              {/* QUICK LAUNCH URI BUTTONS */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <a
                  href={generateObsidianUri('open')}
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(99, 102, 241, 0.2))',
                    border: '1px solid rgba(168, 85, 247, 0.4)',
                    color: '#e9d5ff',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  🚀 Abrir "{documentTitle}" en Obsidian
                </a>

                <a
                  href={generateObsidianUri('new')}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--color-text-secondary)',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  📝 Crear Nueva Nota en Obsidian
                </a>

                <a
                  href={generateObsidianUri('search')}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--color-text-secondary)',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  🔍 Buscar "Plan Maestro" en Vault
                </a>
              </div>
            </div>

            {/* EXPORTER WITH YAML FRONTMATTER */}
            <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontSize: '0.88rem', color: 'var(--color-text-primary)' }}>
                  Exportador a Markdown con YAML Frontmatter:
                </strong>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={handleCopyMarkdownToClipboard}
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'var(--color-text-primary)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      cursor: 'pointer'
                    }}
                  >
                    📋 Copiar Markdown
                  </button>
                  <button
                    type="button"
                    onClick={handleExportObsidianFile}
                    style={{
                      background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                      border: 'none',
                      color: 'var(--color-text-primary)',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    📥 Descargar .md para Obsidian
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <label style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontFamily: 'Azeret Mono, monospace' }}>
                  Etiquetas YAML:
                </label>
                <input
                  type="text"
                  value={yamlTags}
                  onChange={(e) => setYamlTags(e.target.value)}
                  style={{
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    color: 'var(--color-accent-primary)',
                    fontSize: '0.78rem',
                    width: '100%',
                    maxWidth: '300px'
                  }}
                />
              </div>

              {/* PREVIEW BOX */}
              <pre
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '12px',
                  fontSize: '0.75rem',
                  fontFamily: 'Azeret Mono, monospace',
                  color: 'var(--color-text-secondary)',
                  maxHeight: '140px',
                  overflowY: 'auto',
                  margin: 0,
                  whiteSpace: 'pre-wrap'
                }}
              >
                {generateObsidianMarkdown()}
              </pre>
            </div>
          </div>
        )}

        {/* NOTION TAB CONTENT */}
        {activeTab === 'notion' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>Credenciales & Integración Notion API:</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', margin: '2px 0 0' }}>
                    Conecta tus bases de datos de Notion para sincronizar tareas del Plan Maestro, aplicaciones laborales y entrenamientos.
                  </p>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'Azeret Mono, monospace',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    background: notionToken ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)',
                    color: notionToken ? 'var(--color-state-done)' : 'var(--color-accent-warning)',
                    border: `1px solid ${notionToken ? 'rgba(16,185,129,0.4)' : 'rgba(245,158,11,0.4)'}`
                  }}
                >
                  {notionToken ? '🟢 Token Configurado' : '🟡 Modo Local Activo'}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.72rem', color: 'var(--color-accent-warning)', fontFamily: 'Azeret Mono, monospace', display: 'block', marginBottom: '4px' }}>
                    Notion Internal Integration Token:
                  </label>
                  <input
                    type="password"
                    placeholder="secret_..."
                    value={notionToken}
                    onChange={(e) => setNotionToken(e.target.value)}
                    style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '6px 10px', color: '#fff', fontSize: '0.8rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontFamily: 'Azeret Mono, monospace', display: 'block', marginBottom: '4px' }}>
                    Master Plan Database ID:
                  </label>
                  <input
                    type="text"
                    placeholder="32 chars ID..."
                    value={masterDbId}
                    onChange={(e) => setMasterDbId(e.target.value)}
                    style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '6px 10px', color: '#fff', fontSize: '0.8rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.72rem', color: '#3b82f6', fontFamily: 'Azeret Mono, monospace', display: 'block', marginBottom: '4px' }}>
                    Applications Tracker Database ID:
                  </label>
                  <input
                    type="text"
                    placeholder="32 chars ID..."
                    value={jobDbId}
                    onChange={(e) => setJobDbId(e.target.value)}
                    style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '6px 10px', color: '#fff', fontSize: '0.8rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.72rem', color: 'var(--color-state-done)', fontFamily: 'Azeret Mono, monospace', display: 'block', marginBottom: '4px' }}>
                    Workout Logs Database ID:
                  </label>
                  <input
                    type="text"
                    placeholder="32 chars ID..."
                    value={workoutDbId}
                    onChange={(e) => setWorkoutDbId(e.target.value)}
                    style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '6px 10px', color: '#fff', fontSize: '0.8rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <a
                  href="https://www.notion.so"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'var(--color-text-primary)',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  ↗ Abrir Notion Workspace Web
                </a>

                <button
                  type="button"
                  onClick={handleSaveNotionConfig}
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    border: 'none',
                    color: '#040608',
                    padding: '8px 18px',
                    borderRadius: '10px',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  ✓ Guardar Configuración Notion
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
