const fs = require('fs');
function edit(f, pairs) {
  let s = fs.readFileSync(f, 'utf8');
  for (const [re, b] of pairs) {
    if (!re.test(s)) { console.log('MISS: ' + f + ' :: ' + re); continue; }
    s = s.replace(re, b);
  }
  fs.writeFileSync(f, s);
}
const L = '\\r?\\n';

edit('src/components/fitness/ProgressDashboard.tsx', [
  [new RegExp(`        \\{/* NAVEGACIÓN NIVEL 2 \\(SUBMENÚ 1: STICKY 62px\\) */\\}        \\{/* TÍTULO PRINCIPAL \\(DESAPARECE AL SCROLLEAR\\) */\\}${L}        <h1 style=\\{\\{ fontSize: '1\\.75rem', fontWeight: 800, margin: '4px 0 12px 0', color: '#ffffff', letterSpacing: '-0\\.02em' \\}\\}>${L}          Progreso & Analítica de Cargas${L}        </h1>${L}`, 'm'),
   "        {/* NAVEGACIÓN NIVEL 2 (SUBMENÚ 1: STICKY 62px) — el h1 lo pinta el layout via pageTitle */}\n"]
]);
edit('src/components/career/CourseTracker.tsx', [
  [new RegExp(`          <h2 style=\\{\\{ fontSize: '1\\.2rem', fontWeight: 700, margin: 0, color: 'var\\(--text\\)' \\}\\}>${L}            Cursos${L}          </h2>${L}`, 'm'), '']
]);
edit('src/components/clinical/ClinicalToday.tsx', [
  [new RegExp(`            <h1 style=\\{\\{ fontSize: 'var\\(--fs-page, 1\\.75rem\\)', fontWeight: 700, margin: 0, color: 'var\\(--text-primary\\)' \\}\\}>${L}              Clínico${L}            </h1>${L}`, 'm'), '']
]);
edit('src/components/career/CareerToday.tsx', [
  [new RegExp(`              <h1 className="ds-h1" style=\\{\\{ margin: 0 \\}\\}>${L}                Laboral${L}              </h1>${L}`, 'm'), '']
]);
edit('src/components/career/RoadmapBoard.tsx', [
  [new RegExp(`          <h2 style=\\{\\{ fontSize: 'var\\(--fs-page, 1\\.75rem\\)', fontWeight: 700, margin: 0, color: 'var\\(--text-primary\\)' \\}\\}>${L}            Roadmap Profesional${L}          </h2>${L}`, 'm'), '']
]);
edit('src/components/career/JobsPipeline.tsx', [
  [new RegExp(`          <h2 className="ds-h1" style=\\{\\{ margin: 0 \\}\\}>${L}            Empleo & Pipeline${L}          </h2>${L}`, 'm'), '']
]);
edit('src/components/career/NewsInbox.tsx', [
  [new RegExp(`          <h2 style=\\{\\{ fontSize: '1\\.2rem', fontWeight: 700, margin: 0, color: 'var\\(--text\\)' \\}\\}>${L}            Noticias${L}          </h2>${L}`, 'm'), '']
]);
edit('src/components/career/PortfolioSimulator.tsx', [
  [new RegExp(`          <h2 style=\\{\\{ fontSize: '1\\.2rem', fontWeight: 700, margin: 0, color: 'var\\(--text\\)' \\}\\}>${L}            Portafolio y CV${L}          </h2>${L}`, 'm'), '']
]);
console.log('T3 done');
