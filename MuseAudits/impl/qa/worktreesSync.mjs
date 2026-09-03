// worktreesSync.mjs — fin del drift (Gemini Falla 2, adoptado).
// Itera .worktrees/* + raíz: fetch + merge main --no-edit, reporta conflictos
// SIN resolverlos (los deja marcados para misión control).
// Uso: node MuseAudits/impl/qa/worktreesSync.mjs [--yes]
// Sin --yes es dry-run. Cero dependencias.
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const APPLY = process.argv.includes('--yes');
const ROOT = process.cwd();
const dirs = ['.', ...readdirSync(join(ROOT, '.worktrees'), { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => join('.worktrees', d.name))].filter((d) => existsSync(join(d, '.git')) || d === '.');

const sh = (cmd, cwd) => execFileSync(cmd[0], cmd.slice(1), { cwd, encoding: 'utf8', stdio: 'pipe' }).trim();

for (const d of dirs) {
  try {
    const branch = sh(['git', 'branch', '--show-current'], d) || '?';
    const status = sh(['git', 'status', '--porcelain'], d);
    if (status && APPLY) {
      console.log(`SKIP ${d} [${branch}]: árbol sucio, commitear primero`);
      continue;
    }
    if (!APPLY) {
      console.log(`dry  ${d} [${branch}]${status ? ' (sucio)' : ''}`);
      continue;
    }
    if (branch === 'main') {
      sh(['git', 'pull', '--ff-only'], d);
      console.log(`ok   ${d} [main]: pull ff-only`);
    } else {
      sh(['git', 'fetch', 'origin', 'main'], d);
      sh(['git', 'merge', 'origin/main', '--no-edit'], d);
      console.log(`ok   ${d} [${branch}]: merge main`);
    }
  } catch (err) {
    console.log(`CONFLICTO ${d}: ${String(err.message).split('\n')[0]} -> resolver en misión control`);
  }
}
console.log(APPLY ? 'SYNC aplicado (revisar CONFLICTOs arriba)' : 'DRY-RUN (usar --yes para aplicar)');
