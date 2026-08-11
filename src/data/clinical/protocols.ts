// src/data/clinical/protocols.ts - Protocolos Clínicos de Regulación (Resúmenes Breves)

export interface ClinicalProtocol {
  id: string;
  title: string;
  rule1Line: string;
  detailsParagraph: string;
  sourcePdfUrl: string;
}

export const clinicalProtocols: ClinicalProtocol[] = [
  {
    id: 'proto-1',
    title: 'Control de Rumia: Límite 10 Minutos',
    rule1Line: 'Si el pensamiento recursivo supera 10 minutos, escribirlo en papel y cambiar de entorno.',
    detailsParagraph: 'La rumiación mental consume recursos ejecutivos sin generar resolución. Establecer un temporizador estricto de 10 min para volcado por escrito y pasar inmediatamente a una tarea física breve.',
    sourcePdfUrl: '/docs/plan_accion_tdah_ansiedad_social.pdf'
  },
  {
    id: 'proto-2',
    title: 'Estándar "Suficientemente Bueno" (Anti-Perfeccionismo)',
    rule1Line: 'Un entregable funcional a tiempo supera infinitamente un borrador perfecto sin publicar.',
    detailsParagraph: 'Definir el umbral mínimo aceptable antes de iniciar. Cuando el entregable cumple con los criterios core, marcar como completado sin añadir capas secundarias de pulido.',
    sourcePdfUrl: '/docs/reporte_clinico_neurodesarrollo_ansiedad.pdf'
  },
  {
    id: 'proto-3',
    title: 'Protocolo de Desconexión Nocturna CBT-I',
    rule1Line: 'Cero pantallas interactivas 60 minutos antes de la ventana de sueño.',
    detailsParagraph: 'Reemplazar el feed social por lectura física o música ambiental para reducir la latencia de inicio de sueño y estabilizar ritmos circadianos.',
    sourcePdfUrl: '/docs/reporte_clinico_neurodesarrollo_ansiedad.pdf'
  }
];
