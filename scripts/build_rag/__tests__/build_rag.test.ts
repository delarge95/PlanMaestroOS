import { describe, it, expect } from 'vitest';
import { validateRagDocument, validateRagIndex, RAG_VERSION, type RagDocument } from '../schema';
import { parseSourceMarkdown, sourceIdFromFileName } from '../markdown';
import { buildDocument, type RagManifest } from '../build';

// ---------------------------------------------------------------------------
// Fixtures: markdowns de extracción en el formato documentado
// ---------------------------------------------------------------------------
const MD_OK = `<!-- chunk
id: og2-ch12-p148-volume
topic: volume
tags: hypertrophy, chest
chapter: 12
page: 148
entities: exercise:planche, muscle:pec-major
rules: fit:volume-10-20
-->
Entre 10 y 20 series duras por músculo y semana maximizan progreso con fatiga
controlada; más allá el retorno decrece (paráfrasis, OG2).

<!-- chunk
id: og2-ch12-p152-frequency
topic: frequency
tags: frequency
chapter: 12
page: 152
-->
Distribuir el volumen en 2+ estímulos semanales por patrón mejora recuperación.
`;

const MANIFEST: RagManifest = {
  domain: 'fitness',
  sources: [
    {
      id: 'og2',
      title: 'Overcoming Gravity 2ª ed.',
      author: 'Low, S.',
      year: 2016,
      edition: '2nd',
      type: 'book',
      evidenceTier: 'expert-book',
      authority: { domains: ['progressions'], priority: 1 },
    },
  ],
};

// ---------------------------------------------------------------------------
// markdown.ts
// ---------------------------------------------------------------------------
describe('sourceIdFromFileName', () => {
  it('corta en "--" o usa el stem completo', () => {
    expect(sourceIdFromFileName('og2--cap12.md')).toBe('og2');
    expect(sourceIdFromFileName('og2.md')).toBe('og2');
    expect(sourceIdFromFileName('doc-24--scorecard--v2.md')).toBe('doc-24');
  });
});

describe('parseSourceMarkdown', () => {
  it('extrae chunks completos con locator y listas', () => {
    const parsed = parseSourceMarkdown('og2--cap12.md', MD_OK);
    expect(parsed.sourceId).toBe('og2');
    expect(parsed.errors).toEqual([]);
    expect(parsed.chunks).toHaveLength(2);

    const [volume, frequency] = parsed.chunks;
    expect(volume).toMatchObject({
      id: 'og2-ch12-p148-volume',
      sourceId: 'og2',
      topic: 'volume',
      tags: ['hypertrophy', 'chest'],
      locator: { chapter: 12, page: 148 },
      entities: ['exercise:planche', 'muscle:pec-major'],
      rules: ['fit:volume-10-20'],
    });
    expect(volume!.summary).toContain('series duras');
    expect(frequency!.locator).toEqual({ chapter: 12, page: 152 });
    expect(frequency!.rules).toEqual([]);
  });

  it('admite section como locator para docs sin página', () => {
    const md = `<!-- chunk
id: doc22-outreach-templates
topic: outreach
section: Plantillas por target
-->
Cuatro plantillas según calidez del contacto.
`;
    const parsed = parseSourceMarkdown('doc-22.md', md);
    expect(parsed.errors).toEqual([]);
    expect(parsed.chunks[0]!.locator).toEqual({ section: 'Plantillas por target' });
  });

  it('reporta bloques incompletos en errors y no genera el chunk', () => {
    const md = `<!-- chunk
topic: huérfano
-->
Summary sin id ni locator.
`;
    const parsed = parseSourceMarkdown('x.md', md);
    expect(parsed.chunks).toHaveLength(0);
    expect(parsed.errors.some((e) => e.includes('falta "id"'))).toBe(true);
    expect(parsed.errors.some((e) => e.includes('locator sin chapter/page/section'))).toBe(true);
  });

  it('archivo sin bloques produce error explícito', () => {
    const parsed = parseSourceMarkdown('vacío.md', '# Notas sueltas\nSin chunks.');
    expect(parsed.chunks).toHaveLength(0);
    expect(parsed.errors[0]).toContain('sin bloques');
  });
});

// ---------------------------------------------------------------------------
// schema.ts — validador
// ---------------------------------------------------------------------------
describe('validateRagDocument', () => {
  const validDoc: RagDocument = {
    domain: 'fitness',
    version: RAG_VERSION,
    sources: MANIFEST.sources,
    chunks: [
      {
        id: 'og2-ch12-p148-volume',
        sourceId: 'og2',
        topic: 'volume',
        tags: ['hypertrophy'],
        locator: { chapter: 12, page: 148 },
        summary: 'Parafrasis corta.',
        entities: ['exercise:planche'],
        rules: ['fit:volume-10-20'],
      },
    ],
  };

  it('acepta un documento conforme', () => {
    const result = validateRagDocument(validDoc);
    expect(result.ok).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it('rechaza version y domain inválidos', () => {
    expect(validateRagDocument({ ...validDoc, version: '3.0.0' }).ok).toBe(false);
    expect(validateRagDocument({ ...validDoc, domain: 'nuevo' as RagDocument['domain'] }).ok).toBe(false);
  });

  it('rechaza chunks que citan fuentes inexistentes', () => {
    const result = validateRagDocument({
      ...validDoc,
      chunks: [{ ...validDoc.chunks[0]!, sourceId: 'inexistente' }],
    });
    expect(result.ok).toBe(false);
    expect(result.errors[0]).toContain('no existe en sources');
  });

  it('rechaza ids duplicados y locators vacíos', () => {
    const dup = validateRagDocument({
      ...validDoc,
      chunks: [validDoc.chunks[0]!, { ...validDoc.chunks[0]! }],
    });
    expect(dup.ok).toBe(false);

    const noLocator = validateRagDocument({
      ...validDoc,
      chunks: [{ ...validDoc.chunks[0]!, locator: {} }],
    });
    expect(noLocator.ok).toBe(false);
    expect(noLocator.errors[0]).toContain('cita exacta');
  });

  it('rechaza summaries sospechosamente largos (transcripción, no paráfrasis)', () => {
    const result = validateRagDocument({
      ...validDoc,
      chunks: [{ ...validDoc.chunks[0]!, summary: 'x'.repeat(1300) }],
    });
    expect(result.ok).toBe(false);
    expect(result.errors[0]).toContain('parafrasea');
  });

  it('exige edition en libros y authority bien formada', () => {
    const sinEdicion = validateRagDocument({
      ...validDoc,
      sources: [{ ...MANIFEST.sources[0]!, edition: '' }],
    });
    expect(sinEdicion.ok).toBe(false);
    expect(sinEdicion.errors[0]).toContain('edition');

    const malaAutoridad = validateRagDocument({
      ...validDoc,
      sources: [{ ...MANIFEST.sources[0]!, authority: { domains: [], priority: 0 } }],
    });
    expect(malaAutoridad.ok).toBe(false);
  });

  it('avisa de sources declaradas sin chunks', () => {
    const result = validateRagDocument({ ...validDoc, chunks: [] });
    expect(result.ok).toBe(true);
    expect(result.warnings.some((w) => w.includes('sin chunks'))).toBe(true);
  });
});

describe('validateRagIndex', () => {
  it('valida estructura del índice', () => {
    const ok = validateRagIndex({ version: RAG_VERSION, domains: { fitness: { version: RAG_VERSION, sources: 1, chunks: 2 } } });
    expect(ok.ok).toBe(true);
    expect(validateRagIndex({ version: '2', domains: {} }).ok).toBe(false);
    expect(validateRagIndex({ version: RAG_VERSION, domains: { fake: { version: RAG_VERSION, sources: 1, chunks: 1 } } }).ok).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// build.ts — ensamblado
// ---------------------------------------------------------------------------
describe('buildDocument', () => {
  it('con manifest: ensambla y valida verde', () => {
    const result = buildDocument({
      domain: 'fitness',
      manifest: MANIFEST,
      files: [{ fileName: 'og2--cap12.md', content: MD_OK }],
    });
    expect(result.errors).toEqual([]);
    expect(result.ok).toBe(true);
    expect(result.doc.domain).toBe('fitness');
    expect(result.doc.sources).toHaveLength(1);
    expect(result.doc.chunks).toHaveLength(2);
    expect(result.doc.chunks[0]!.sourceId).toBe('og2');
  });

  it('sin manifest: auto-registra la fuente como internal-doc con warning', () => {
    const result = buildDocument({
      domain: 'career',
      files: [{ fileName: 'doc-22--outreach.md', content: MD_OK.replace(/^id: og2/mg, 'id: doc22-x').replace(/^sourceId.*$/mg, '') }],
    });
    expect(result.ok).toBe(true);
    expect(result.doc.sources[0]).toMatchObject({ id: 'doc-22', type: 'md', evidenceTier: 'internal-doc' });
    expect(result.warnings.some((w) => w.includes('auto-registrada'))).toBe(true);
  });

  it('con manifest: sourceId no declarado es error (protección de typos)', () => {
    const result = buildDocument({
      domain: 'fitness',
      manifest: MANIFEST,
      files: [{ fileName: 'og2-typo--cap12.md', content: MD_OK }],
    });
    expect(result.ok).toBe(false);
    expect(result.errors.some((e) => e.includes('no declarado en manifest'))).toBe(true);
  });

  it('propaga errores de parseo y no marca ok', () => {
    const result = buildDocument({
      domain: 'fitness',
      manifest: MANIFEST,
      files: [{ fileName: 'og2--roto.md', content: '<!-- chunk\nid: incompleto\n-->\nSummary sin topic ni locator.' }],
    });
    expect(result.ok).toBe(false);
    expect(result.errors.some((e) => e.includes('falta "topic"'))).toBe(true);
  });

  it('detecta chunk ids duplicados entre archivos', () => {
    const result = buildDocument({
      domain: 'fitness',
      manifest: MANIFEST,
      files: [
        { fileName: 'og2--a.md', content: MD_OK },
        { fileName: 'og2--b.md', content: MD_OK },
      ],
    });
    expect(result.ok).toBe(false);
    expect(result.errors.some((e) => e.includes('chunk id duplicado'))).toBe(true);
  });
});
