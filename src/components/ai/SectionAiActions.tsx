import React from 'react';
import AiAction from './AiAction';
import ErrorBoundary from '../ErrorBoundary';

export interface SectionAiActionsProps {
  section: 'today' | 'fitness' | 'clinical' | 'career' | 'languages' | 'gastronomy';
  contextData?: string;
  onApprovedResult?: (result: string) => void;
}

export default function SectionAiActions({
  section,
  contextData = '',
  onApprovedResult
}: SectionAiActionsProps) {
  let promptText = '';
  let labelText = '';
  let sources = ['Plan Maestro OS', `Sección: ${section}`];

  switch (section) {
    case 'today':
      promptText = 'Proponer Top 3 tareas prioritarias y plan de ejecución para hoy.';
      labelText = 'Propuesta de plan para hoy';
      sources.push('Historial de tareas pendientes');
      break;
    case 'fitness':
      promptText = 'Explicar progreso semanal y sugerir ajuste de carga sin aplicarlo automáticamente.';
      labelText = 'Explicar progreso y sugerir carga';
      sources.push('RAG Fitness (Overcoming Gravity)', 'Historial de entrenamiento');
      break;
    case 'clinical':
      promptText = 'Sugerir micro-pasos de 10 minutos para la tarea actualmente bloqueada.';
      labelText = 'Sugerir micro-pasos ante bloqueo';
      sources.push('Protocolo Clínico de Desbloqueo');
      break;
    case 'career':
      promptText = 'Resumir oferta laboral, sugerir adaptación de CV y redactar borrador de correo.';
      labelText = 'Borrador de correo & Resumen';
      sources.push('Pipeline de Empleo', 'Perfil del usuario');
      break;
    case 'languages':
      promptText = 'Analizar respuesta en idioma extranjero y proveer corrección sintáctica.';
      labelText = 'Analizar y corregir respuesta';
      sources.push('Grammatik Aktiv A1-B1');
      break;
    case 'gastronomy':
      promptText = 'Convertir receta externa en formato limpio propio con ingredientes y pasos sin copyright.';
      labelText = 'Resumir receta a formato propio';
      sources.push('Formulario de enlaces guardados');
      break;
  }

  return (
    <ErrorBoundary>
      <div style={{ marginTop: 'var(--space-xs)' }}>
        <AiAction
          prompt={`${promptText} Contexto: ${contextData}`}
          sourcesUsed={sources}
          actionLabel={labelText}
          onApproved={onApprovedResult}
        />
      </div>
    </ErrorBoundary>
  );
}
