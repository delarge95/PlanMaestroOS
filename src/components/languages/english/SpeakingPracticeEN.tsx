// src/components/languages/english/SpeakingPracticeEN.tsx
// Módulo de práctica oral para inglés profesional con Web Speech API y fallback a texto
// Respeta la regla de NO tocar SpeakingPractice.tsx compartido (AG-DE/CORE).

import React, { useState, useEffect, useRef } from 'react';
import {
  englishScenarios,
  englishStarAnswers,
  type Scenario,
  type StarAnswer,
  type DialogTurn,
  type KeyPhrase
} from '../../../data/languages/english/scenarios';
import Button from '../../ui/Button';

// Declaración de tipos para Web Speech API
interface IWindow extends Window {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
}

export interface SpeakingPracticeENProps {
  initialScenarioId?: string;
}

export default function SpeakingPracticeEN({ initialScenarioId }: SpeakingPracticeENProps) {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'star'>('scenarios');
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [selectedStarIndex, setSelectedStarIndex] = useState(0);
  const [selectedPhraseIndex, setSelectedPhraseIndex] = useState(0);

  const [transcript, setTranscript] = useState('');
  const [manualInput, setManualInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<{
    score: number;
    matchedKeywords: string[];
    missingKeywords: string[];
    feedback: string;
  } | null>(null);

  const recognitionRef = useRef<any>(null);

  const currentScenario: Scenario | undefined = englishScenarios[selectedScenarioIndex];
  const currentStar: StarAnswer | undefined = englishStarAnswers[selectedStarIndex];

  const currentTargetPhrase = activeTab === 'scenarios'
    ? currentScenario?.keyPhrases[selectedPhraseIndex]?.en || ''
    : currentStar?.title || '';

  useEffect(() => {
    if (initialScenarioId) {
      const foundIdx = englishScenarios.findIndex(s => s.id === initialScenarioId);
      if (foundIdx >= 0) setSelectedScenarioIndex(foundIdx);
    }
  }, [initialScenarioId]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const win = window as unknown as IWindow;
      const SpeechRecognition = win.SpeechRecognition || win.webkitSpeechRecognition;
      if (SpeechRecognition) {
        setSpeechSupported(true);
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
          const current = event.resultIndex;
          const text = event.results[current][0].transcript;
          setTranscript(text);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.onerror = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const handleStartListening = () => {
    if (!recognitionRef.current) return;
    setTranscript('');
    setEvaluationResult(null);
    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch {
      setIsListening(false);
    }
  };

  const handleStopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleModelAudio = (textToSpeak: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = 0.92;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const evaluateResponse = (spokenText: string) => {
    const textToEvaluate = spokenText || manualInput;
    if (!textToEvaluate.trim()) return;

    const normalizedUser = textToEvaluate.toLowerCase();
    const targetKeywords = activeTab === 'scenarios'
      ? (currentScenario?.keyPhrases[selectedPhraseIndex]?.en || '')
          .replace(/[\[\],.:?\/]/g, ' ')
          .split(/\s+/)
          .filter((w: string) => w.length > 3 && !['with', 'that', 'this', 'have', 'from', 'your', 'about'].includes(w.toLowerCase()))
      : ['fps', 'draw', 'pipeline', 'cad', 'webgl', 'mesh', 'automation', 'accuracy', 'optimization'];

    const matched: string[] = [];
    const missing: string[] = [];

    for (const kw of targetKeywords) {
      if (normalizedUser.includes(kw.toLowerCase())) {
        matched.push(kw);
      } else {
        missing.push(kw);
      }
    }

    const keywordScore = targetKeywords.length > 0
      ? Math.round((matched.length / targetKeywords.length) * 100)
      : 80;

    let feedback = '';
    if (keywordScore >= 75) {
      feedback = '🎯 Excellent articulation and professional vocabulary precision!';
    } else if (keywordScore >= 40) {
      feedback = '👍 Good attempt. Try to incorporate more of the professional keywords from the model.';
    } else {
      feedback = '⚠️ Review the model pronunciation and include the highlighted key terms.';
    }

    setEvaluationResult({
      score: keywordScore,
      matchedKeywords: matched,
      missingKeywords: missing,
      feedback
    });
  };

  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      {/* Sub-Header / Mode Toggle */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
          <Button
            variant={activeTab === 'scenarios' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => { setActiveTab('scenarios'); setEvaluationResult(null); setTranscript(''); }}
          >
            Escenarios Ágiles (8)
          </Button>
          <Button
            variant={activeTab === 'star' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => { setActiveTab('star'); setEvaluationResult(null); setTranscript(''); }}
          >
            Respuestas STAR (Doc-23)
          </Button>
        </div>

        <span style={{ fontSize: '0.75rem', color: speechSupported ? 'var(--color-success, #10b981)' : 'var(--text-tertiary)' }}>
          {speechSupported ? '● Micrófono Web Speech disponible' : '○ Modo texto / Fallback'}
        </span>
      </div>

      {/* Scenarios Mode */}
      {activeTab === 'scenarios' && currentScenario && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-xs)', overflowX: 'auto', paddingBottom: '4px' }}>
            {englishScenarios.map((sc: Scenario, i: number) => (
              <button
                key={sc.id}
                onClick={() => { setSelectedScenarioIndex(i); setSelectedPhraseIndex(0); setEvaluationResult(null); setTranscript(''); }}
                style={{
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: selectedScenarioIndex === i ? 700 : 500,
                  background: selectedScenarioIndex === i ? 'var(--color-accent-primary-soft)' : 'var(--surface-subtle, rgba(255,255,255,0.05))',
                  color: selectedScenarioIndex === i ? 'var(--color-accent-primary)' : 'var(--text-secondary)',
                  border: '1px solid ' + (selectedScenarioIndex === i ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'),
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {sc.title}
              </button>
            ))}
          </div>

          <div style={{ background: 'var(--surface-raised, rgba(0,0,0,0.2))', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
              Objetivo del Escenario
            </span>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text)' }}>
              {currentScenario.objective}
            </p>
          </div>

          {/* Diálogo del escenario */}
          <div style={{ maxHeight: '180px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '6px', padding: '6px', background: 'var(--surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
            {currentScenario.dialog.map((turn: DialogTurn, tIdx: number) => (
              <div key={tIdx} style={{ fontSize: '0.8rem', lineHeight: 1.35 }}>
                <strong style={{ color: turn.speaker.includes('Alex') ? 'var(--color-accent-primary)' : 'var(--text-secondary)' }}>
                  {turn.speaker}:
                </strong>{' '}
                <span style={{ color: 'var(--text)' }}>{turn.text}</span>
              </div>
            ))}
          </div>

          {/* Frase clave seleccionada para practicar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
              Frase clave para practicar (Selecciona una):
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {currentScenario.keyPhrases.map((kp: KeyPhrase, kpIdx: number) => (
                <div
                  key={kpIdx}
                  onClick={() => { setSelectedPhraseIndex(kpIdx); setEvaluationResult(null); }}
                  style={{
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: selectedPhraseIndex === kpIdx ? 'var(--color-accent-primary-soft)' : 'var(--surface-subtle, rgba(255,255,255,0.03))',
                    border: '1px solid ' + (selectedPhraseIndex === kpIdx ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'),
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)' }}>
                    "{kp.en}"
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
                    {kp.register}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* STAR Answers Mode */}
      {activeTab === 'star' && currentStar && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
            {englishStarAnswers.map((st: StarAnswer, sIdx: number) => (
              <button
                key={st.id}
                onClick={() => { setSelectedStarIndex(sIdx); setEvaluationResult(null); setTranscript(''); }}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  fontWeight: selectedStarIndex === sIdx ? 700 : 500,
                  background: selectedStarIndex === sIdx ? 'var(--color-accent-primary-soft)' : 'var(--surface-subtle, rgba(255,255,255,0.05))',
                  color: selectedStarIndex === sIdx ? 'var(--color-accent-primary)' : 'var(--text-secondary)',
                  border: '1px solid ' + (selectedStarIndex === sIdx ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)'),
                  cursor: 'pointer'
                }}
              >
                {st.title.split('—')[0].trim()}
              </button>
            ))}
          </div>

          <div style={{ background: 'var(--surface-raised, rgba(0,0,0,0.2))', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
              Cita: {currentStar.sourceCitation}
            </span>
            <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text)' }}>
              <strong>Situation:</strong> {currentStar.situation}
            </p>
            <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text)' }}>
              <strong>Action:</strong> {currentStar.action}
            </p>
            <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text)' }}>
              <strong>Result:</strong> {currentStar.result}
            </p>
          </div>
        </div>
      )}

      {/* Área de Grabación y Pronunciación Modelo */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-sm)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleModelAudio(currentTargetPhrase)}
            disabled={isSpeaking}
          >
            {isSpeaking ? '🔊 Reproduciendo...' : '🔊 Escuchar Modelo'}
          </Button>

          {speechSupported && (
            <Button
              variant={isListening ? 'danger' : 'primary'}
              size="sm"
              onClick={isListening ? handleStopListening : handleStartListening}
            >
              {isListening ? '⏹ Detener Grabación' : '🎤 Grabar Respuesta'}
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => evaluateResponse(transcript)}
            disabled={!transcript && !manualInput}
          >
            📊 Evaluar Precisión
          </Button>
        </div>

        {/* Input / Transcripción */}
        <div style={{ marginTop: '6px' }}>
          {speechSupported ? (
            <div style={{ padding: '8px 12px', background: 'var(--surface-raised, rgba(0,0,0,0.15))', borderRadius: 'var(--radius-sm)', minHeight: '40px', fontSize: '0.88rem', color: transcript ? 'var(--text)' : 'var(--text-tertiary)', border: '1px dashed var(--color-border-subtle)' }}>
              {isListening ? '🎙️ Escuchando... habla ahora en inglés' : (transcript || 'Tu transcripción de audio aparecerá aquí tras hablar...')}
            </div>
          ) : (
            <input
              type="text"
              placeholder="Escribe tu respuesta oral aquí para evaluar coincidencia de keywords..."
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'var(--surface-raised)', border: '1px solid var(--color-border-subtle)', color: 'var(--text)', fontSize: '0.88rem' }}
            />
          )}
        </div>

        {/* Resultado de Evaluación */}
        {evaluationResult && (
          <div style={{ marginTop: '8px', padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--surface-raised, rgba(0,0,0,0.2))', border: '1px solid var(--color-border-subtle)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>
                {evaluationResult.feedback}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: evaluationResult.score >= 70 ? 'var(--color-success, #10b981)' : 'var(--color-accent-primary)' }}>
                {evaluationResult.score}% Coincidencia
              </span>
            </div>

            {evaluationResult.matchedKeywords.length > 0 && (
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--color-success, #10b981)', fontWeight: 600 }}>Keywords detectadas:</span> {evaluationResult.matchedKeywords.join(', ')}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
