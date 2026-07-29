$files = Get-ChildItem -Recurse -Include '*.tsx','*.ts' -Path 'e:\Laboral\src\components'

foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw -Encoding UTF8
  $updated = $content.Replace('fontWeight: 800', 'fontWeight: 700').Replace("fontWeight: '800'", "fontWeight: '700'")
  if ($updated -ne $content) {
    Set-Content -Path $file.FullName -Value $updated -NoNewline -Encoding UTF8
    Write-Host "Updated 800->700: $($file.Name)"
  }
}
Write-Host "Font weight cleanup complete."
