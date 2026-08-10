// src/components/shared/ContextualAIActionButton.tsx - Acciones de IA Contextuales per Documento 04

import React, { useState } from 'react';
import { Sparkles, Check, Edit3, ShieldCheck, X } from 'lucide-react';
import Button from '../ui/Button';
import Sheet from '../ui/Sheet';

export interface ContextualAIActionButtonProps {
  label: string; // e.g. "Proponer Top 3", "Resumir vacante", "Explicar progreso"
  actionType: 'propose_top3' | 'summarize_vacancy' | 'prepare_draft' | 'explain_progress';
  contextData: Record<string, any>;
  sources: string[];
  onApprovedExecution?: (resultText: string) => void;
}

export function ContextualAIActionButton({
  label,
  actionType,
  contextData: _contextData,
  sources,
  onApprovedExecution
}: ContextualAIActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');

  const handleGenerate = () => {
    setLoading(true);
    setIsOpen(true);

    // Simulación de respuesta de Asistente IA (Gemini Spark)
    setTimeout(() => {
      let result = '';
      if (actionType === 'propose_top3') {
        result = `1. Sustentación TwinSight (Micro-acción: Repasar slides 1-3 en 7 min).\n2. Pipeline Blender CAD a WebGL (Micro-acción: Verificar mallas en 5 min).\n3. Rutina Upper 1 (Micro-acción: Registrar pesos en 3 min).`;
      } else if (actionType === 'summarize_vacancy') {
        result = `Vacante para Unity Technical Artist: Requiere C#, Blender optimization, shaders HLSL/ShaderGraph. Match con perfil: 88%. Recomienda enfatizar TwinSight.`;
      } else if (actionType === 'prepare_draft') {
        result = `Hola team, adjunto mi portafolio enfocado en optimización 3D y desarrollo real-time en WebGL. He reducido mallas industriales de 6.5M a 95k triángulos conservando Fidelidad visual.`;
      } else {
        result = `Progreso de Fitness: Adherencia del 100% en Bloque 1 de Carga Progresiva. PR registrado en Prensa inclina (+5kg).`;
      }

      setEditedText(result);
      setLoading(false);
    }, 600);
  };

  const handleApprove = () => {
    if (onApprovedExecution && editedText) {
      onApprovedExecution(editedText);
    }
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="secondary"
        size="sm"
        onClick={handleGenerate}
        aria-label={label}
        style={{ gap: '6px', border: '1px solid var(--color-accent-primary-soft)' }}
      >
        <Sparkles size={15} style={{ color: 'var(--color-accent-primary)' }} aria-hidden="true" />
        <span>{label}</span>
      </Button>

      {isOpen && (
        <Sheet
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={`Acción de IA: ${label}`}
          description="Borrador de propuesta generado contextualmente. Requiere tu aprobación explícita antes de persistir."
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {/* FUENTES EMPLEADAS */}
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: 'var(--space-sm) var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
              <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                Fuentes / Contexto considerado
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {sources.map((src, i) => (
                  <span key={i} style={{ background: 'var(--surface-elevated)', padding: '2px 8px', borderRadius: '4px', fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>
                    {src}
                  </span>
                ))}
              </div>
            </div>

            {/* CONTENIDO GENERADO / EDICIÓN */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: 'var(--font-size-label)', fontWeight: 600, color: 'var(--text)' }}>
                  Borrador propuesto
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit3 size={14} />
                  <span>{isEditing ? 'Ver preview' : 'Editar borrador'}</span>
                </Button>
              </div>

              {loading ? (
                <div style={{ padding: 'var(--space-lg)', textAlign: 'center', color: 'var(--text-tertiary)' }}>
                  <Sparkles className="animate-spin" size={24} style={{ margin: '0 auto 8px', color: 'var(--color-accent-primary)' }} />
                  <span>Analizando fuentes y construyendo propuesta...</span>
                </div>
              ) : isEditing ? (
                <textarea
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  rows={6}
                  style={{
                    width: '100%',
                    background: 'var(--surface)',
                    color: 'var(--text)',
                    border: '1px solid var(--color-accent-primary)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-sm)',
                    fontSize: 'var(--font-size-body)',
                    fontFamily: 'var(--font-family-system)',
                    boxSizing: 'border-box'
                  }}
                />
              ) : (
                <div style={{ background: 'var(--surface)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-visible)', whiteSpace: 'pre-wrap', fontSize: 'var(--font-size-body)', color: 'var(--text)' }}>
                  {editedText}
                </div>
              )}
            </div>

            {/* AVISO DE APROBACIÓN HUMANA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--color-accent-primary-soft)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-md)', color: 'var(--color-accent-primary)' }}>
              <ShieldCheck size={18} />
              <span style={{ fontSize: 'var(--font-size-meta)', fontWeight: 500 }}>
                La IA no ejecutará la acción ni modificará tus datos hasta que hagas clic en Aprobar.
              </span>
            </div>

            {/* BOTONES DE ACCIÓN */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-sm)' }}>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                <X size={16} /> Cancelar
              </Button>
              <Button variant="primary" onClick={handleApprove} disabled={loading}>
                <Check size={16} /> Aprobar y Persistir
              </Button>
            </div>
          </div>
        </Sheet>
      )}
    </>
  );
}

export default ContextualAIActionButton;
