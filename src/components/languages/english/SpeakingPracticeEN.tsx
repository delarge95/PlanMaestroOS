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
    <div className="ds-card ds-stack">
      {/* Sub-Header / Mode Toggle */}
      <div className="ds-row-between" style={{ flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
        <div className="ds-row" style={{ gap: 'var(--space-xs)' }}>
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

        <span className="ds-caption" style={{ color: speechSupported ? 'var(--color-state-done)' : 'var(--text-tertiary)' }}>
          {speechSupported ? '● Micrófono Web Speech disponible' : '○ Modo texto / Fallback'}
        </span>
      </div>

      {/* Scenarios Mode */}
      {activeTab === 'scenarios' && currentScenario && (
        <div className="ds-stack-sm">
          <div className="ds-row" style={{ gap: 'var(--space-xs)', overflowX: 'auto', paddingBottom: '4px' }}>
            {englishScenarios.map((sc: Scenario, i: number) => (
              <button
                key={sc.id}
                onClick={() => { setSelectedScenarioIndex(i); setSelectedPhraseIndex(0); setEvaluationResult(null); setTranscript(''); }}
                className="ds-chip"
                data-active={selectedScenarioIndex === i}
              >
                {sc.title}
              </button>
            ))}
          </div>

          <div className="ds-card ds-stack-sm" style={{ padding: 'var(--space-sm)' }}>
            <span className="ds-eyebrow">
              Objetivo del Escenario
            </span>
            <p className="ds-body" style={{ margin: '4px 0 0 0' }}>
              {currentScenario.objective}
            </p>
          </div>

          {/* Diálogo del escenario */}
          <div className="ds-card ds-stack-sm" style={{ padding: '6px' }}>
            {currentScenario.dialog.map((turn: DialogTurn, tIdx: number) => (
              <div key={tIdx} className="ds-caption" style={{ lineHeight: 1.35 }}>
                <strong style={{ color: turn.speaker.includes('Alex') ? 'var(--accent)' : 'var(--text-secondary)' }}>
                  {turn.speaker}:
                </strong>{' '}
                <span style={{ color: 'var(--text)' }}>{turn.text}</span>
              </div>
            ))}
          </div>

          {/* Frase clave seleccionada para practicar */}
          <div className="ds-stack-sm" style={{ gap: '6px' }}>
            <span className="ds-label">
              Frase clave para practicar (Selecciona una):
            </span>
            <div className="ds-stack-sm" style={{ gap: '4px' }}>
              {currentScenario.keyPhrases.map((kp: KeyPhrase, kpIdx: number) => (
                <div
                  key={kpIdx}
                  onClick={() => { setSelectedPhraseIndex(kpIdx); setEvaluationResult(null); }}
                  className="ds-card ds-card-clickable ds-row-between"
                  data-active={selectedPhraseIndex === kpIdx}
                  style={{
                    padding: '8px 12px'
                  }}
                >
                  <span className="ds-label">
                    "{kp.en}"
                  </span>
                  <span className="ds-micro" style={{ textTransform: 'uppercase' }}>
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
        <div className="ds-stack-sm">
          <div className="ds-row-wrap" style={{ gap: 'var(--space-xs)' }}>
            {englishStarAnswers.map((st: StarAnswer, sIdx: number) => (
              <button
                key={st.id}
                onClick={() => { setSelectedStarIndex(sIdx); setEvaluationResult(null); setTranscript(''); }}
                className="ds-chip"
                data-active={selectedStarIndex === sIdx}
              >
                {st.title.split('—')[0].trim()}
              </button>
            ))}
          </div>

          <div className="ds-card ds-stack-sm" style={{ padding: 'var(--space-sm)', gap: '6px' }}>
            <span className="ds-eyebrow">
              Cita: {currentStar.sourceCitation}
            </span>
            <p className="ds-caption" style={{ margin: 0 }}>
              <strong>Situation:</strong> {currentStar.situation}
            </p>
            <p className="ds-caption" style={{ margin: 0 }}>
              <strong>Action:</strong> {currentStar.action}
            </p>
            <p className="ds-caption" style={{ margin: 0 }}>
              <strong>Result:</strong> {currentStar.result}
            </p>
          </div>
        </div>
      )}

      {/* Área de Grabación y Pronunciación Modelo */}
      <div className="ds-stack-sm" style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-sm)' }}>
        <div className="ds-row-wrap" style={{ gap: 'var(--space-xs)' }}>
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
            <div className="ds-card ds-body" style={{ padding: '8px 12px', minHeight: '40px', color: transcript ? 'var(--text)' : 'var(--text-tertiary)', border: '1px dashed var(--color-border-subtle)' }}>
              {isListening ? '🎙️ Escuchando... habla ahora en inglés' : (transcript || 'Tu transcripción de audio aparecerá aquí tras hablar...')}
            </div>
          ) : (
            <input
              type="text"
              placeholder="Escribe tu respuesta oral aquí para evaluar coincidencia de keywords..."
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              className="ds-caption"
              style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'var(--surface-raised)', border: '1px solid var(--color-border-subtle)', color: 'var(--text)' }}
            />
          )}
        </div>

        {/* Resultado de Evaluación */}
        {evaluationResult && (
          <div className="ds-card ds-stack-sm" style={{ marginTop: '8px', padding: '10px 14px' }}>
            <div className="ds-row-between">
              <span className="ds-label">
                {evaluationResult.feedback}
              </span>
              <span className="ds-h3" style={{ margin: 0, color: evaluationResult.score >= 70 ? 'var(--color-state-done)' : 'var(--accent)' }}>
                {evaluationResult.score}% Coincidencia
              </span>
            </div>

            {evaluationResult.matchedKeywords.length > 0 && (
              <div className="ds-micro">
                <span style={{ color: 'var(--color-state-done)', fontWeight: 600 }}>Keywords detectadas:</span> {evaluationResult.matchedKeywords.join(', ')}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
