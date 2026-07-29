import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';

const roadmapPhases = [
  {
    phase: 1,
    title: "Fase 1: Preparación, Case Study & Portfolio MVP",
    weeks: "Semanas 1 – 4 (Días 1–30)",
    objective: "Construir presencia de mercado mínima creíble y eliminar bloqueadores antes de postular.",
    targetApps: "15–25 Aplicaciones Cualificadas",
    milestones: [
      {
        id: "m1",
        title: "Días 1-3: Asset Inventory & Decision Lock",
        phase: 1,
        weeks: "Semana 1",
        description: "Confirmar nombre TwinSight X500, posicionamiento de 1 frase y recopilación de capturas/videos.",
        deliverables: ["Carpeta /job_search_assets estructurada", "Posicionamiento bloqueado", "Repositorios clasificados"],
        keyMetric: "100% Assets organizados",
        connectedTimeBlock: "Bloque B (14:45-16:45)"
      },
      {
        id: "m2",
        title: "Días 4-10: TwinSight Case Study Package",
        phase: 1,
        weeks: "Semana 2",
        description: "Crear el paquete público de prueba: Case study de 11 secciones, guion de video demo 90s, 8-12 capturas y métricas de optimización.",
        deliverables: ["Draft de Case Study en Markdown", "Guion de video walkthrough 90s", "Tabla de optimización CAD-to-lowpoly"],
        keyMetric: "Comprensión en <90 seg",
        connectedTimeBlock: "Bloque A (09:20-11:40)"
      },
      {
        id: "m3",
        title: "Días 11-15: GitHub Cleanup",
        phase: 1,
        weeks: "Semana 2-3",
        description: "Fijar repositorios principales (TwinSight, ARA, Blender breakdown), redactar READMEs profesionales y ocultar experimentos viejos.",
        deliverables: ["TwinSight README listo", "ARA README skeleton", "6 Repositorios fijados"],
        keyMetric: "0 Repositorios confusos",
        connectedTimeBlock: "Bloque B (14:45-16:45)"
      },
      {
        id: "m4",
        title: "Días 16-20: Alineación LinkedIn & CV 1 Pauta",
        phase: 1,
        weeks: "Semana 3",
        description: "Redactar titular técnico, sección About, experiencia freelance y construir CV base de 1 página optimizado para ATS.",
        deliverables: ["CV 1 pág Unity Tech Artist", "Perfil LinkedIn actualizado", "Sección Featured activa"],
        keyMetric: "Alineación 100% entre canales",
        connectedTimeBlock: "Bloque A (09:20-11:40)"
      },
      {
        id: "m5",
        title: "Días 21-30: Lanzamiento Portfolio MVP & Batch 1",
        phase: 1,
        weeks: "Semana 4",
        description: "Lanzar web mínima en producción con TwinSight, ARA y Blender. Enviar primer lote de 15-25 aplicaciones dirigidas.",
        deliverables: ["Portfolio MVP en vivo", "Tracker de aplicaciones activo", "Primer lote enviado"],
        keyMetric: "15-25 Aplicaciones enviadas",
        connectedTimeBlock: "Bloque B (14:45-16:45)"
      }
    ]
  },
  {
    phase: 2,
    title: "Fase 2: Cadencia de Aplicaciones & Exposición Progresiva",
    weeks: "Semanas 5 – 8 (Días 31–60)",
    objective: "Probar la propuesta en el mercado real, generar contactos directos y preparar entrevistas técnicas.",
    targetApps: "15 Aplicaciones/Semana (Total 50-90)",
    milestones: [
      {
        id: "m6",
        title: "Semanas 5-6: Cadencia de Aplicaciones & Feedback Loop",
        phase: 2,
        weeks: "Semanas 5-6",
        description: "Mantener 15 aplicaciones semanales + 15 mensajes de contacto directo. Evaluar tasa de respuesta y corregir titulares.",
        deliverables: ["30 Aplicaciones adicionales", "10 Mensajes a reclutadores/sem", "Ajuste de plantilla si no hay respuestas"],
        keyMetric: "15 Apps/sem sostenidas",
        connectedTimeBlock: "Bloque B (14:45-16:45)"
      },
      {
        id: "m7",
        title: "Semana 7: ARA Framework & Prueba Secundaria",
        phase: 2,
        weeks: "Semana 7",
        description: "Publicar el repositorio ARA con diagrama de arquitectura, demostrando habilidades de automatización en Python y tooling.",
        deliverables: ["Diagrama de arquitectura ARA", "README con AI disclosure", "Script demo operativo"],
        keyMetric: "Prueba de tooling activa",
        connectedTimeBlock: "Bloque A (09:20-11:40)"
      },
      {
        id: "m8",
        title: "Semana 8: Sprint de Preparación de Entrevistas",
        phase: 2,
        weeks: "Semana 8",
        description: "Ensayar respuestas cortas para 10 preguntas frecuentes (por qué TwinSight, nivel de IA usado, optimización WebGL, expectativas salariales).",
        deliverables: ["Respuestas a 10 preguntas grabadas", "Scorecard de ofertas listo", "Rango $1.5k–$3k USD anclado"],
        keyMetric: "10 Respuestas fluidas",
        connectedTimeBlock: "Exposición CBT (14:00-14:40)"
      }
    ]
  },
  {
    phase: 3,
    title: "Fase 3: Conversión a Ofertas & Negociación Salarial",
    weeks: "Semanas 9 – 16 (Días 61–90+)",
    objective: "Convertir entrevistas en ofertas contractuales internacionales ($1,000–$3,000 USD/mes).",
    targetApps: "Outreach Cualificado a Segmentos A1/A2",
    milestones: [
      {
        id: "m9",
        title: "Semanas 9-10: Refinamiento de Objetivos (Segmentos A1/A2)",
        phase: 3,
        weeks: "Semanas 9-10",
        description: "Clasificar empresas objetivo en A1 (alta afinidad), B1 y C. Enfocar el 80% de energía en Speculative Outreach a estudios A1.",
        deliverables: ["Lista de 120 empresas clasificadas", "Mensajes especulativos a Tech Art Leads", "Referidos en comunidades 3D"],
        keyMetric: "80% Foco en Segmento A",
        connectedTimeBlock: "Bloque B (14:45-16:45)"
      },
      {
        id: "m10",
        title: "Semanas 11-12: Conversión en Entrevistas & Live Code Walkthrough",
        phase: 3,
        weeks: "Semanas 11-12",
        description: "Ejecutar 7 historias técnicas (optimización CAD, WebGL, UI Toolkit, evaluación SUS). Demostrar solvencia en pruebas técnicas.",
        deliverables: ["Walkthrough en vivo ensayado", "Defensa de decisiones CAD-to-realtime", "Evaluación de ofertas recibidas"],
        keyMetric: "3-6 Procesos de entrevista",
        connectedTimeBlock: "Exposición CBT (14:00-14:40)"
      },
      {
        id: "m11",
        title: "Semanas 13-16: Negociación & Cierre de Contrato",
        phase: 3,
        weeks: "Semanas 13-16",
        description: "Aplicar la matriz de evaluación de ofertas (20% compensación, 20% encaje de rol, 15% neto). Firmar contrato remoto B2B.",
        deliverables: ["Oferta aceptada ($1.5k–$3k USD/mo)", "Contrato B2B revisado", "Plan de onboarding 30 días"],
        keyMetric: "Contrato firmado $1.5k+",
        connectedTimeBlock: "Bloque A (09:20-11:40)"
      }
    ]
  }
];

const roleFamilies = [
  { title: "Real-Time 3D Developer", priority: "Alta", stack: "Unity, WebGL, C#, CAD", target: "Estudios e Industria 3D" },
  { title: "Unity Technical Artist", priority: "Alta", stack: "Shader Graph, Profiling, Optimization", target: "Juegos & Visualización" },
  { title: "Technical Visualization / Digital Twin", priority: "Alta", stack: "Simulation, WebGL, Data Flow", target: "Empresas Industriales" },
  { title: "Tools & Python Automation", priority: "Secundaria", stack: "Python, CLI, Workflow Automation", target: "Herramientas Internas" }
];

export default function InteractiveRoadmapDashboard() {
  const [selectedPhaseTab, setSelectedPhaseTab] = useState<number>(1);
  const [completedMilestones, setCompletedMilestones] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem('roadmap_completed_milestones');
      if (saved) {
        setCompletedMilestones(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleMilestone = (id: string) => {
    const nextState = { ...completedMilestones, [id]: !completedMilestones[id] };
    setCompletedMilestones(nextState);
    try {
      localStorage.setItem('roadmap_completed_milestones', JSON.stringify(nextState));
    } catch (e) {
      console.error(e);
    }
  };

  const currentPhaseData = roadmapPhases.find(p => p.phase === selectedPhaseTab) || roadmapPhases[0];
  const allMilestoneIds = roadmapPhases.flatMap(p => p.milestones.map(m => m.id));
  const doneCount = allMilestoneIds.filter(id => !!completedMilestones[id]).length;
  const overallProgress = Math.round((doneCount / allMilestoneIds.length) * 100);

  return (
    <ErrorBoundary>
      <div style={{
        background: 'rgba(10, 15, 20, 0.65)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid rgba(59, 130, 246, 0.25)',
        borderRadius: '24px',
        padding: '28px',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        color: 'var(--color-text-primary)'
      }}>
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: '#3b82f6', background: 'rgba(59, 130, 246, 0.12)', padding: '4px 10px', borderRadius: '999px', fontWeight: 800 }}>
                ROADMAP LABORAL 16 SEMANAS / 90 DÍAS
              </span>
              <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-state-done)', background: 'rgba(16, 185, 129, 0.12)', padding: '4px 10px', borderRadius: '999px', fontWeight: 700 }}>
                META: $1,500 – $3,000 USD/MES
              </span>
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0, color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
              Plan de Ejecución Estratégica & Contratación Internacional
            </h2>
          </div>

          {/* OVERALL PROGRESS */}
          <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '12px 18px', textAlign: 'right' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', display: 'block', fontWeight: 600 }}>
              PROGRESO DE HITOS COMPLETADOS
            </span>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#3b82f6' }}>
              {doneCount}/{allMilestoneIds.length} ({overallProgress}%)
            </span>
          </div>
        </div>

        {/* FAMILIAS DE ROLES TARGET */}
        <div>
          <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Familias de Roles Prioritarias (25h/sem Trabajo Útil)
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginTop: '10px' }}>
            {roleFamilies.map((rf, idx) => (
              <div key={idx} style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(59, 130, 246, 0.15)', borderRadius: '14px', padding: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--color-text-primary)' }}>{rf.title}</strong>
                  <span style={{ fontSize: '0.68rem', color: 'var(--color-state-done)', background: 'rgba(16,185,129,0.15)', padding: '2px 6px', borderRadius: '4px', height: 'fit-content' }}>
                    {rf.priority}
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-primary)', display: 'block' }}>Stack: {rf.stack}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', display: 'block', marginTop: '2px' }}>Target: {rf.target}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PHASE TAB SELECTOR */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px' }}>
          {roadmapPhases.map((p) => {
            const isSelected = selectedPhaseTab === p.phase;
            return (
              <button
                key={p.phase}
                type="button"
                onClick={() => setSelectedPhaseTab(p.phase)}
                style={{
                  background: isSelected ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                  border: 'none',
                  color: isSelected ? '#3b82f6' : 'var(--color-text-secondary)',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: isSelected ? 800 : 500,
                  fontSize: '0.85rem',
                  transition: 'all 150ms ease'
                }}
              >
                {p.title.split(':')[0]} ({p.weeks})
              </button>
            );
          })}
        </div>

        {/* CURRENT PHASE DETAILS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '14px 18px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 4px', color: 'var(--color-text-primary)' }}>
                {currentPhaseData.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                {currentPhaseData.objective}
              </p>
            </div>
            <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.78rem', color: 'var(--color-state-done)', background: 'rgba(16, 185, 129, 0.15)', padding: '6px 12px', borderRadius: '8px', fontWeight: 700 }}>
              📊 Target: {currentPhaseData.targetApps}
            </span>
          </div>

          {/* MILESTONES CARDS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {currentPhaseData.milestones.map((m) => {
              const isChecked = !!completedMilestones[m.id];
              return (
                <div
                  key={m.id}
                  style={{
                    background: isChecked ? 'rgba(16, 185, 129, 0.08)' : 'rgba(0, 0, 0, 0.35)',
                    border: `1px solid ${isChecked ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '16px',
                    padding: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    transition: 'all 200ms ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <button
                        type="button"
                        onClick={() => toggleMilestone(m.id)}
                        style={{
                          background: isChecked ? 'var(--color-state-done)' : 'transparent',
                          border: `1px solid ${isChecked ? 'var(--color-state-done)' : 'rgba(255, 255, 255, 0.2)'}`,
                          color: isChecked ? '#040608' : 'var(--color-text-secondary)',
                          width: '24px',
                          height: '24px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'grid',
                          placeItems: 'center',
                          fontWeight: 800,
                          fontSize: '0.85rem',
                          marginTop: '2px',
                          flexShrink: 0
                        }}
                      >
                        {isChecked ? '✓' : ''}
                      </button>

                      <div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                          <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-accent-primary)', background: 'rgba(119, 231, 255, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                            {m.weeks}
                          </span>
                          <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.68rem', color: 'var(--color-accent-primary)', background: 'rgba(168, 85, 247, 0.12)', padding: '2px 6px', borderRadius: '4px' }}>
                            🔗 Conectado a: {m.connectedTimeBlock}
                          </span>
                        </div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: isChecked ? '#6ee7b7' : 'var(--color-text-primary)' }}>
                          {m.title}
                        </h4>
                      </div>
                    </div>

                    <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.72rem', color: 'var(--color-state-done)', fontWeight: 700 }}>
                      🎯 {m.keyMetric}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.45, paddingLeft: '36px' }}>
                    {m.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingLeft: '36px' }}>
                    {m.deliverables.map((d, dIdx) => (
                      <span key={dIdx} style={{ fontSize: '0.75rem', color: 'var(--color-text-primary)', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: '8px' }}>
                        📦 {d}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
