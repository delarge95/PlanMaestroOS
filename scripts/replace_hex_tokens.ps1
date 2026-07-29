$files = Get-ChildItem -Recurse -Include '*.tsx','*.astro','*.css' -Path 'e:\Laboral\src' | Where-Object { $_.FullName -notmatch 'node_modules' }

$replacements = @(
  @{ old = "'#ffffff'"; new = "'var(--color-text-primary)'" },
  @{ old = "'#effff6'"; new = "'var(--color-text-primary)'" },
  @{ old = "'#aeaeb2'"; new = "'var(--color-text-secondary)'" },
  @{ old = "'#a8b9b2'"; new = "'var(--color-text-secondary)'" },
  @{ old = "'#98989d'"; new = "'var(--color-text-secondary)'" },
  @{ old = "'#8e8e93'"; new = "'var(--color-text-tertiary)'" },
  @{ old = "'#636366'"; new = "'var(--color-text-tertiary)'" },
  @{ old = "'#65756f'"; new = "'var(--color-text-tertiary)'" },
  @{ old = "'#0a84ff'"; new = "'var(--color-accent-primary)'" },
  @{ old = "'#ff9f0a'"; new = "'var(--color-accent-warning)'" },
  @{ old = "'#ff453a'"; new = "'var(--color-accent-danger)'" },
  @{ old = "'#30d158'"; new = "'var(--color-state-done)'" },
  @{ old = "'#bf5af2'"; new = "'var(--color-accent-primary)'" },
  @{ old = "'#c084fc'"; new = "'var(--color-accent-primary)'" },
  @{ old = "'#a78bfa'"; new = "'var(--color-accent-primary)'" },
  @{ old = "'#5e5ce6'"; new = "'var(--color-accent-primary)'" },
  @{ old = "'#64d2ff'"; new = "'var(--color-accent-primary)'" },
  @{ old = "'#77e7ff'"; new = "'var(--color-accent-primary)'" },
  @{ old = "'#8ae6ff'"; new = "'var(--color-accent-primary)'" },
  @{ old = "'#ff375f'"; new = "'var(--color-accent-danger)'" },
  @{ old = "'#f87171'"; new = "'var(--color-accent-danger)'" },
  @{ old = "'#ef4444'"; new = "'var(--color-accent-danger)'" },
  @{ old = "'#81f6b0'"; new = "'var(--color-state-done)'" },
  @{ old = "'#10b981'"; new = "'var(--color-state-done)'" },
  @{ old = "'#ffd60a'"; new = "'var(--color-accent-warning)'" },
  @{ old = "'#f59e0b'"; new = "'var(--color-accent-warning)'" },
  @{ old = "'#c6d7d0'"; new = "'var(--color-text-secondary)'" }
)

$changed = 0
foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw -Encoding UTF8
  $original = $content
  foreach ($r in $replacements) {
    $content = $content.Replace($r.old, $r.new)
  }
  if ($content -ne $original) {
    Set-Content -Path $file.FullName -Value $content -NoNewline -Encoding UTF8
    $changed++
    Write-Host "UPDATED: $($file.Name)"
  }
}
Write-Host "Done. $changed files updated."
