// src/data/languages/books.ts - Registro de libros académicos de idiomas.
// Los PDFs viven en public/library/languages/<fileName> (patrón de fitness).
// Regla §0.1: ningún dato inventado — mientras el PDF no esté verificado,
// pagesVerified es false y las lecciones citan section SIN página.

export interface LanguageBook {
  id: string;              // 'grammatik-aktiv-a1-a2'
  title: string;           // 'Grammatik aktiv A1–A2'
  author: string;          // autor(es) o editorial
  publisher: string;       // 'Cornelsen'
  level: string;           // 'A1–A2'
  fileName: string;        // 'Grammatik_Aktiv_A1_A2.pdf'
  language: 'de' | 'en';
  /** Páginas verificadas contra el PDF físico (false = citado pero pendiente de verificar). */
  pagesVerified: boolean;
}

export const LANGUAGE_BOOKS: LanguageBook[] = [
  {
    id: 'fsi-german-basic-vol1',
    title: 'FSI German Basic Course — Volume 1 (Student Text)',
    author: 'U.S. Foreign Service Institute',
    publisher: 'U.S. Government (dominio público)',
    level: 'A0–B1 (curso intensivo, 12 unidades)',
    fileName: 'FSI_German_Basic_Vol1.pdf',
    language: 'de',
    pagesVerified: true // 346 págs — PDF real descargado de archive.org (dominio público)
  },
  {
    id: 'grammatik-aktiv-a1-a2',
    title: 'Grammatik aktiv A1–A2',
    author: 'Cornelsen',
    publisher: 'Cornelsen',
    level: 'A1–A2',
    fileName: 'Grammatik_Aktiv_A1_A2.pdf',
    language: 'de',
    pagesVerified: false, // PDF pendiente del usuario (libro comercial).
    // NOTA DE PROVENIENCIA (§0.1): el contenido de las unidades A1.1 lo
    // redactó AG-GER a partir de gramática estándar; la atribución a este
    // libro quedó PENDIENTE de verificación contra el PDF físico.
  },
  {
    id: 'oxford-living-grammar-elementary',
    title: 'Oxford Living Grammar — Elementary',
    author: 'Ken Paterson / Norman Coe',
    publisher: 'Oxford University Press',
    level: 'A1–A2',
    fileName: 'Oxford_Living_Grammar_Elementary.pdf',
    language: 'en',
    pagesVerified: true // PDF local del usuario (gitignored: no se publica)
  },
  {
    id: 'oxford-living-grammar-preintermediate',
    title: 'Oxford Living Grammar — Pre-Intermediate',
    author: 'Norman Coe / Mark Harrison',
    publisher: 'Oxford University Press',
    level: 'A2–B1',
    fileName: 'Oxford_Living_Grammar_PreIntermediate.pdf',
    language: 'en',
    pagesVerified: true // PDF local del usuario (gitignored)
  },
  {
    id: 'oxford-living-grammar-intermediate',
    title: 'Oxford Living Grammar — Intermediate',
    author: 'Mark Harrison',
    publisher: 'Oxford University Press',
    level: 'B1–B2',
    fileName: 'Oxford_Living_Grammar_Intermediate.pdf',
    language: 'en',
    pagesVerified: true // PDF local del usuario (gitignored)
  },
  {
    id: 'menschen-a1-1',
    title: 'Menschen A1.1',
    author: 'Hueber',
    publisher: 'Hueber',
    level: 'A1.1',
    fileName: 'Menschen_A1_1.pdf',
    language: 'de',
    pagesVerified: false // placeholder: libro del curso («Libro A1 Menschen»), PDF pendiente
  },
  {
    id: 'menschen-a1-2',
    title: 'Menschen A1.2',
    author: 'Hueber',
    publisher: 'Hueber',
    level: 'A1.2',
    fileName: 'Menschen_A1_2.pdf',
    language: 'de',
    pagesVerified: false // placeholder: libro del curso («Libro A1 Menschen»), PDF pendiente
  }
];

/** Busca un libro del registro por id (undefined si no existe). */
export function getBook(id: string): LanguageBook | undefined {
  return LANGUAGE_BOOKS.find((b) => b.id === id);
}

/** Ruta pública del PDF (servido estáticamente desde public/library/languages/). */
export function bookPdfPath(book: LanguageBook): string {
  return `/library/languages/${book.fileName}`;
}
