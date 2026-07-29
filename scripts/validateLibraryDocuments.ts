// @ts-nocheck
// scripts/validateLibraryDocuments.ts - Automated validation for Library document links
import fs from 'fs';
import path from 'path';
import { allLibraryDocuments } from '../src/data/library/documents.js';

console.log('📚 Validando enlaces de documentos de la Biblioteca...');

let validatedCount = 0;

for (const doc of allLibraryDocuments) {
  if (!doc.isOpenable) continue;

  // Assert 1: openUrl must exist and not contain '...'
  if (!doc.openUrl || doc.openUrl.includes('...')) {
    throw new Error(`[ERROR] Documento '${doc.title}': URL truncada o inválida ('${doc.openUrl}')`);
  }

  // Assert 2: If repo-public PDF, check file existence in public/
  if (doc.access === 'repo-public' && doc.mimeType === 'application/pdf') {
    const relativePath = doc.openUrl.replace(/^\//, '');
    const absolutePath = path.resolve(process.cwd(), 'public', relativePath.replace(/^library\//, 'library/'));

    if (!fs.existsSync(absolutePath)) {
      throw new Error(`[ERROR] Archivo PDF no encontrado en el disco: '${absolutePath}' para el documento '${doc.title}'`);
    }
  }

  validatedCount++;
  console.log(`  ✓ [${doc.category.toUpperCase()}] ${doc.title} -> ${doc.openUrl}`);
}

console.log(`\n✅ ¡VALIDACIÓN EXITOSA! ${validatedCount} documentos verificados con URLs válidas.`);
