import React, { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Button from '../ui/Button';
import { MessageSquare, Send, MicOff } from 'lucide-react';

export interface SpeakingPracticeProps {
  language?: 'de' | 'en';
}

export default function SpeakingPractice({ language = 'de' }: SpeakingPracticeProps) {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<
    { role: 'ai' | 'user'; text: string; correction?: string; explanation?: string }[]
  >([
    {
      role: 'ai',
      text: language === 'de' ? 'Hallo! Wie geht es dir heute? Was machst du beruflich?' : 'Hello! How are you today? Tell me about your background.'
    }
  ]);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userUtterance = userInput.trim();
    setUserInput('');

    // Mock correction response for A1 written speaking practice
    const isDe = language === 'de';
    const correction = isDe ? 'Hallo! Mir geht es gut. Ich arbeite als Tech Artist.' : 'Hello! I am doing well. I work as a Tech Artist.';
    const explanation = isDe
      ? 'Recordatorio: En alemán el verbo conjugado ("geht") va en posición 2 en la respuesta.'
      : 'Note: Use "doing well" instead of "doing good" for professional contexts.';

    const newHistory = [
      ...chatHistory,
      { role: 'user' as const, text: userUtterance, correction, explanation },
      { role: 'ai' as const, text: isDe ? 'Das klingt sehr interessant! Wo wohnst du jetzt?' : 'That sounds very interesting! Where are you located now?' }
    ];

    setChatHistory(newHistory);
  };

  return (
    <ErrorBoundary>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        
        {/* CABECERA PRESCRIPTIVA CON COPY EXACTO */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-xs)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageSquare size={18} style={{ color: 'var(--accent)' }} />
            <h3 style={{ fontSize: 'var(--fs-section)', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
              Práctica de conversación
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.04)', padding: '2px 8px', borderRadius: '4px', fontSize: 'var(--fs-eyebrow)', color: 'var(--text-tertiary)' }}>
            <MicOff size={12} />
            <span>Voz: Próximamente</span>
          </div>
        </div>

        {/* CHAT DE CONVERSACIÓN Y CORRECCIÓN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {chatHistory.map((msg, idx) => (
            <div
              key={idx}
              style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                background: msg.role === 'user' ? 'var(--color-accent-primary-soft)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${msg.role === 'user' ? 'var(--accent)' : 'var(--color-border-subtle)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '10px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <strong style={{ fontSize: 'var(--fs-body)', color: 'var(--text)' }}>
                {msg.text}
              </strong>

              {msg.correction && (
                <div style={{ marginTop: '4px', paddingTop: '4px', borderTop: '1px dashed var(--color-border-subtle)', fontSize: 'var(--fs-meta)' }}>
                  <span style={{ color: 'var(--color-state-done)', fontWeight: 700 }}>
                    Corrección:
                  </span>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{msg.correction}</span>
                  {msg.explanation && (
                    <p style={{ color: 'var(--text-tertiary)', fontSize: 'var(--fs-eyebrow)', margin: '2px 0 0' }}>
                      {msg.explanation}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* INPUT Y BOTÓN ENVIAR */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
            placeholder={language === 'de' ? 'Schreibe deine Antwort auf Deutsch...' : 'Type your answer in English...'}
            style={{ flex: 1, background: 'rgba(0,0,0,0.4)', border: '1px solid var(--color-border-subtle)', borderRadius: '6px', padding: '8px 12px', color: 'var(--text)', fontSize: 'var(--fs-body)' }}
          />

          <Button variant="primary" size="sm" onClick={handleSend}>
            <Send size={14} /> Enviar
          </Button>
        </div>

      </div>
    </ErrorBoundary>
  );
}
