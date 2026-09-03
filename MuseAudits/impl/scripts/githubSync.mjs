// githubSync.mjs — snapshot público de repos (portafolio vivo, archivo 19 §19.4).
// Uso: node .../githubSync.mjs --repo owner/name [--repo o/n ...] [--write out.json]
// Sin --write imprime a stdout. Solo API pública; GITHUB_TOKEN opcional (rate-limit).
// Cero dependencias.
const args = process.argv.slice(2);
const repos = [];
for (let i = 0; i < args.length; i++) if (args[i] === '--repo' && args[i + 1]) repos.push(args[++i]);
const outIdx = args.indexOf('--write');
const outFile = outIdx >= 0 ? args[outIdx + 1] : undefined;
if (repos.length === 0) {
  console.log('uso: --repo owner/name [--repo ...] [--write snapshot.json]');
  process.exit(2);
}

const headers = { 'user-agent': 'planmaestro-linkcheck', accept: 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function snap(repo) {
  const get = async (path) => {
    const r = await fetch(`https://api.github.com${path}`, { headers });
    if (r.status === 404) return null;
    if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
    return r.json();
  };
  const [info, rel] = await Promise.all([get(`/repos/${repo}`), get(`/repos/${repo}/releases/latest`)]);
  if (!info) return { repo, alive: false };
  return {
    repo, alive: true,
    pushedAt: info.pushed_at,
    defaultBranch: info.default_branch,
    openIssues: info.open_issues_count,
    topics: info.topics ?? [],
    latestRelease: rel ? { tag: rel.tag_name, publishedAt: rel.published_at } : null,
    checkedAt: new Date().toISOString(),
  };
}

const snaps = [];
for (const r of repos) {
  try {
    const s = await snap(r);
    snaps.push(s);
    console.log(s.alive ? `ok   ${r} push=${s.pushedAt} release=${s.latestRelease?.tag ?? '-'}` : `MUERTO ${r}`);
  } catch (err) {
    console.log(`ERROR ${r}: ${String(err).split('\n')[0]}`);
    snaps.push({ repo: r, alive: false, error: String(err).split('\n')[0] });
  }
}
if (outFile) {
  const { writeFileSync } = await import('node:fs');
  writeFileSync(outFile, JSON.stringify({ version: 1, snaps }, null, 2));
  console.log(`snapshot -> ${outFile}`);
} else {
  console.log(JSON.stringify(snaps, null, 2));
}
