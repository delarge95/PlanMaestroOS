// src/data/career/companies.ts - Base de Datos e Historial Inmutable de Empresas

export interface CompanyTimelineEvent {
  id: string;
  dateIso: string;
  type: 'message' | 'cv_sent' | 'reply' | 'interview' | 'outcome';
  note: string;
}

export interface CompanyRecord {
  id: string;
  name: string;
  website: string;
  tier: 'Top Priority' | 'Standard' | 'Watchlist';
  archived: boolean;
  timeline: CompanyTimelineEvent[];
}

export const initialCompanies: CompanyRecord[] = [
  {
    id: 'comp-1',
    name: 'Epic Games',
    website: 'https://epicgames.com',
    tier: 'Top Priority',
    archived: false,
    timeline: [
      { id: 't1', dateIso: '2026-08-01', type: 'message', note: 'Mensaje de contacto inicial enviado a lead Recruiter en LinkedIn' },
      { id: 't2', dateIso: '2026-08-05', type: 'cv_sent', note: 'Enviado CV TechArt v3.2 y enlace a demo TwinSight' },
      { id: 't3', dateIso: '2026-08-08', type: 'reply', note: 'Respuesta positiva de recruiter pidiendo disponibilidad' }
    ]
  },
  {
    id: 'comp-2',
    name: 'Ubisoft',
    website: 'https://ubisoft.com',
    tier: 'Standard',
    archived: false,
    timeline: [
      { id: 't4', dateIso: '2026-08-02', type: 'cv_sent', note: 'Aplicación enviada para Graphics Engineer via Portal' }
    ]
  }
];
