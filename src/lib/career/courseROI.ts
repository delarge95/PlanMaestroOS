// courseROI — priorización de cursos (Gemini 03 §3.2, adoptado).
// ROI = Σ(demanda empresas target × brecha en portafolio) / duración(horas).
// Sin el xlsx de 157 cursos en disco, funciona con cualquier inventario.

export interface CourseLite {
  id: string;
  title: string;
  hours: number;
  teaches: string[]; // skill ids que enseña
  producesArtifactDays: number; // días hasta artefacto visible (doc-06: máx 14)
}

export interface SkillDemand {
  skillId: string;
  postingCount: number; // aristas requires_skill desde Tier1/2
  portfolioGap: number; // 0 = ya demostrado, 1 = brecha total
}

export interface CourseRank {
  courseId: string;
  roi: number;
  blockedReason?: string;
}

export function rankCourses(courses: CourseLite[], demands: SkillDemand[]): CourseRank[] {
  const dem = new Map(demands.map((d) => [d.skillId, d]));
  return courses
    .map((c) => {
      if (c.hours <= 0) return { courseId: c.id, roi: 0, blockedReason: 'sin duración' };
      if (c.producesArtifactDays > 14) {
        return { courseId: c.id, roi: 0, blockedReason: 'sin artefacto en 14 días (doc-06)' };
      }
      let num = 0;
      for (const s of c.teaches) {
        const d = dem.get(s);
        if (d) num += d.postingCount * d.portfolioGap;
      }
      return { courseId: c.id, roi: Math.round((num / c.hours) * 100) / 100 };
    })
    .sort((a, b) => b.roi - a.roi);
}
