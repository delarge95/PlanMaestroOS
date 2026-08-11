// src/lib/ai/jobs/careerResearchJob.ts - Investigación de Empresas & Borrador de Correo

import type { AiResponse } from '../client';

export async function runCareerResearchJob(companyName: string): Promise<AiResponse> {
  return {
    text: `Investigación de empresa: ${companyName}\nStack: Unreal Engine 5, C++, HLSL Shaders.\nFit Signal: Están expandiendo su equipo de Render Tech Art para un título AAA.\n\nBorrador de correo:\n"Estimado equipo de selección de ${companyName}, he seguido de cerca sus avances en rendering en tiempo real..."`,
    sourcesUsed: [`Base de datos de empresas`, `Pipeline de empleo`],
    tokensUsed: 140,
    timestampIso: new Date().toISOString()
  };
}
