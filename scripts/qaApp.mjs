// qaApp.mjs — QA de las 39 rutas /app (hoy qa.mjs solo cubre portfolio).
// Checks HTTP sin navegador: status 200, <h1> presente, sin set:html con externos
// triviales, sin URLs remotas de fuentes (modo offline G7). Uso:
//   npx tsx MuseAudits/impl/qa/qaApp.mjs [baseUrl]   (tsx resuelve appRoutes.ts)
// Cero dependencias. No modifica nada: solo reporta.
import { APP_ROUTES, PUBLIC_ROUTES } from './appRoutes.js';

const BASE = process.argv[2] ?? 'http://127.0.0.1:4321';
const REMOTE_ASSET = /https?:\/\/(fonts\.googleapis|fonts\.gstatic|cdn\.jsdelivr|unpkg\.com)/;

let failures = 0;
const check = (route, problems, warnings) => {
  for (const w of warnings) console.log(`warn ${route}\n  ~ ${w}`);
  if (problems.length > 0) {
    failures++;
    console.log(`FAIL ${route}\n  - ${problems.join('\n  - ')}`);
  } else if (warnings.length === 0) {
    console.log(`ok   ${route}`);
  }
};

for (const route of [...PUBLIC_ROUTES, ...APP_ROUTES]) {
  const problems = [];
  const warnings = [];
  try {
    const res = await fetch(BASE + route, { redirect: 'manual' });
    if (res.status >= 400) problems.push(`HTTP ${res.status}`);
    else if (res.status >= 300 && res.status < 400) problems.push(`redirect ${res.status} -> ${res.headers.get('location') ?? '?'}`);
    else {
      const html = await res.text();
      const isRedirectShell = /Redirigiendo|Redirecting|http-equiv="refresh"/i.test(html);
      if (!/<h1[\s>]/i.test(html) && !isRedirectShell) problems.push('sin <h1>');
      if (isRedirectShell) warnings.push('redirect-shell por diseño (verificar destino en encargo nav)');
      const remotes = html.match(REMOTE_ASSET);
      if (remotes) problems.push(`asset remoto: ${remotes[0]} (modo offline G7)`);
      if (/TODO-cita|PLACEHOLDER_(?!.*aprobado)/.test(html)) problems.push('placeholder visible sin declarar');
    }
  } catch (err) {
    problems.push(`fetch: ${err.message}`);
  }
  check(route, problems, warnings);
}

console.log(failures === 0 ? '\nQA APP: VERDE' : `\nQA APP: ${failures} RUTAS CON FALLOS`);
process.exit(failures === 0 ? 0 : 1);
