# Biblioteca de idiomas (PDFs académicos)

Coloca aquí los PDFs de los libros académicos citados por el currículo de idiomas
(sección "Idiomas" de Plan Maestro OS). El visor `BookPdfViewer` abre estos
archivos directamente desde `/library/languages/<fileName>`.

## Libros registrados

Los nombres de archivo deben coincidir EXACTAMENTE con `fileName` del registro
`src/data/languages/books.ts`:

| bookId                 | fileName                       | Título                   | Editorial |
| ---------------------- | ------------------------------ | ------------------------ | --------- |
| `grammatik-aktiv-a1-a2`| `Grammatik_Aktiv_A1_A2.pdf`    | Grammatik aktiv A1–A2    | Cornelsen |
| `menschen-a1-1`        | `Menschen_A1_1.pdf`            | Menschen A1.1            | Hueber    |
| `menschen-a1-2`        | `Menschen_A1_2.pdf`            | Menschen A1.2            | Hueber    |

## Flujo de verificación de páginas (regla §0.1: ningún dato inventado)

1. Las lecciones citan el libro con `sourceBook: { bookId, section }` — SIN página
   mientras `pagesVerified` sea `false` en el registro.
2. Al colocar el PDF aquí, ábrelo, localiza el capítulo (`section`) de cada lección
   y anota `page` (o `pageRange`) en la lección correspondiente.
3. Cuando todas las lecciones del libro tengan página verificada, pasa
   `pagesVerified: true` en `src/data/languages/books.ts`.

Hasta entonces el visor muestra "pág. por verificar" y abre el PDF por la portada.

## Nota

Patrón heredado de `public/library/fitness/` (PDFs servidos estáticamente desde
`public/`, sin build). Los PDF NO se commitean: este directorio se versiona con
`.gitkeep` y este README.
