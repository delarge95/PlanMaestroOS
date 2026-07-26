import React, { useState } from 'react';

const booksData = [
  {
    id: "book-og",
    title: "Overcoming Gravity: A Systematic Approach to Gymnastics and Bodyweight Strength",
    author: "Steven Low (2nd Edition, 2016)",
    cover_tag: "Calistenia & Gimnasia",
    color: "#10b981",
    path: "_pdf_biblia/Planeacion_Integral/investigacion/Overcoming Gravity_ A Systematic Approach to Gymnastics and -- Low, Steven -- 2, 2016.pdf",
    summary: "El manual más respetado del mundo en programación de calistenia y fuerza con peso corporal. Explica la periodización científica, construcción de rutinas, tablas de niveles de habilidad (Level 1 a 16) y prevención de lesiones en suspensión.",
    key_takeaways: [
      "Clasificación de habilidades: Parada de manos, Planche, Front Lever, Back Lever, Muscle-up y Fondos en Anillas.",
      "Manejo de la carga estructural: Las articulaciones y conectivos tardan 3x más en adaptarse que la masa muscular.",
      "Principios de sustitución: Intercambio equivalente de patrones de movimiento (Empuje horizontal, empuje vertical, tirón horizontal, tirón vertical).",
      "Support hold en anillas como prerrequisito de estabilidad de hombro."
    ]
  },
  {
    id: "book-ot",
    title: "Overcoming Tendonitis: A Systematic Approach to Evidence-Based Treatment",
    author: "Steven Low (2020)",
    cover_tag: "Rehabilitación Tendinosa",
    color: "#f59e0b",
    path: "_pdf_biblia/Planeacion_Integral/investigacion/overcoming-tendonitis-a-systematic-approach-to-the-evidence-based-treatment-of-tendinopathy-4-pdf-free (1).pdf",
    summary: "Compendio médico-deportivo basado en evidencia para el tratamiento de tendinopatías (rotuliana, golfer/tennis elbow, hombro). Basado en Heavy Slow Resistance (HSR) y contracciones isométricas analgésicas.",
    key_takeaways: [
      "Isométricos de alta carga: 3 a 5 series × 45 segundos al 70% MVIC proporcionan alivio del dolor mediado por el sistema nervioso central.",
      "Heavy Slow Resistance (HSR): Tempo 3-0-3 (3s bajada excéntrica, 0s pausa, 3s subida concéntrica) estimula la síntesis de colágeno tendinoso sin inflamación.",
      "Regla del dolor: El dolor durante el ejercicio es aceptable si es ≤3/10 y retorna a la línea base al día siguiente.",
      "Protocolo para rodilla: Spanish Squats Isométricos previos a cualquier entrenamiento de cuádriceps."
    ]
  },
  {
    id: "book-minmax",
    title: "The Min-Max Program: Maximum Hypertrophy, Minimum Time",
    author: "Jeff Nippard (2024)",
    cover_tag: "Bajo Volumen / Alta Intensidad",
    color: "#77e7ff",
    path: "_pdf_biblia/Planeacion_Integral/investigacion/The_Min-Max_Program_-_Jeff_Nippard.pdf",
    summary: "Programa de entrenamiento de bajo volumen y máxima intensidad diseñado para lograr hipertrofia completa en sesiones de 45 minutos, 5 días a la semana (Upper/Lower/Upper/Lower/Arms).",
    key_takeaways: [
      "Filosofía Min-Max: 1 a 2 series efectivas por ejercicio tomadas a RIR 0 (fallo controlado) o RIR 1.",
      "Economía de tiempo: Entrenar en 45 minutos enfocando el 100% del esfuerzo en la calidad de cada repetición.",
      "Estructura en 2 Bloques: Bloque 1 (Semanas 1-6) de volumen base y Bloque 2 (Semanas 7-12) con técnicas de intensidad final (drop sets, myo-reps).",
      "Flexibilidad de sustitución: Permitido sustituir cualquier ejercicio conservando el patrón muscular primario."
    ]
  }
];

export default function BooksLibraryView() {
  const [selectedBook, setSelectedBook] = useState(booksData[0]);

  return (
    <div style={{ marginTop: '28px' }}>
      <div style={{ marginBottom: '20px' }}>
        <span style={{ fontFamily: 'Azeret Mono, monospace', fontSize: '0.7rem', color: '#10b981', fontWeight: 800 }}>
          FUENTE BIBLIOGRÁFICA & TEORÍA FÍSICA
        </span>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '4px 0 0', color: '#effff6' }}>
          Libros de Referencia Subidos & Manuales Técnicos
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {booksData.map((book) => (
          <div
            key={book.id}
            onClick={() => setSelectedBook(book)}
            style={{
              background: '#080c0e',
              border: selectedBook.id === book.id ? `2px solid ${book.color}` : '1px solid rgba(174,255,224,0.12)',
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 200ms ease',
              boxShadow: selectedBook.id === book.id ? `0 10px 30px ${book.color}22` : 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <span style={{ background: `${book.color}22`, color: book.color, border: `1px solid ${book.color}44`, padding: '3px 8px', borderRadius: '4px', fontSize: '0.68rem', fontFamily: 'Azeret Mono, monospace', fontWeight: 700 }}>
                {book.cover_tag}
              </span>
              <span style={{ fontSize: '0.72rem', color: '#65756f', fontFamily: 'Azeret Mono, monospace' }}>PDF Incluido</span>
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#effff6', marginBottom: '8px', lineHeight: 1.3 }}>
              {book.title}
            </h3>
            <div style={{ fontSize: '0.8rem', color: book.color, fontWeight: 600, marginBottom: '12px' }}>
              {book.author}
            </div>
            <p style={{ fontSize: '0.82rem', color: '#a8b9b2', lineHeight: 1.5, margin: 0 }}>
              {book.summary}
            </p>

            <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(174,255,224,0.08)' }}>
              <strong style={{ fontSize: '0.75rem', color: '#effff6', display: 'block', marginBottom: '6px', fontFamily: 'Azeret Mono, monospace' }}>
                PRINCIPIOS APLICADOS EN TU PLAN:
              </strong>
              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '0.78rem', color: '#a8b9b2', lineHeight: 1.4 }}>
                {book.key_takeaways.slice(0, 2).map((take, tIdx) => (
                  <li key={tIdx} style={{ marginBottom: '4px' }}>{take}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
