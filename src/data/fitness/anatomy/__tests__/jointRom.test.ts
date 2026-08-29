// src/data/fitness/anatomy/__tests__/jointRom.test.ts
// AG-ANATOM ciclo 4 — pendiente #4 del STATUS: ROM numérico por articulación
// CON cita (regla §0: ninguna afirmación anatómica sin trazabilidad).

import { describe, it, expect } from 'vitest';
import { getJoints, getStructureById, ANATOMY_STRUCTURES } from '../../anatomyGraph';
import { JOINT_ROM, getJointRom, jointIdsWithRom } from '../jointRom';
import type { JointEntry } from '../../anatomy/types';

/** sourceIds registrados en rag/anatomy/manifest.json para Norkin/Levangie 6ª ed. */
const VALID_SOURCE_IDS = new Set(['njs6-levangie-norkin', 'norkin-joint-structure-6ed']);

describe('JOINT_ROM — integridad', () => {
  it('cada id del dataset existe como articulación del grafo', () => {
    const jointIds = new Set(getJoints().map((j) => j.id));
    for (const id of jointIdsWithRom()) {
      expect(jointIds.has(id), `id desconocido en JOINT_ROM: ${id}`).toBe(true);
    }
  });

  it('TODAS las articulaciones del grafo tienen entrada de ROM (19/19)', () => {
    const joints = getJoints();
    expect(joints.length).toBe(19);
    for (const j of joints) {
      expect(JOINT_ROM[j.id]?.length ?? 0, `sin ROM para ${j.id}`).toBeGreaterThan(0);
    }
  });

  it('cada entrada tiene valor, ≥1 cita de Norkin 6ª ed con capítulo y SIN pending', () => {
    for (const [id, entries] of Object.entries(JOINT_ROM)) {
      for (const e of entries) {
        expect(e.motion.trim().length, `${id}: motion vacío`).toBeGreaterThan(0);
        expect(e.value.trim().length, `${id}/${e.motion}: value vacío`).toBeGreaterThan(0);
        expect(e.sourceRefs.length, `${id}/${e.motion}: sin sourceRefs`).toBeGreaterThan(0);
        for (const sr of e.sourceRefs) {
          expect(VALID_SOURCE_IDS.has(sr.sourceId), `${id}/${e.motion}: sourceId ${sr.sourceId} no registrado`).toBe(true);
          expect(sr.locator ?? '', `${id}/${e.motion}: sin locator`).toContain('cap.');
          expect(sr.pending, `${id}/${e.motion}: marcado pending (debe estar verificado)`).toBeFalsy();
        }
      }
    }
  });

  it('el ROM queda fusionado en las entradas del grafo (JointEntry.rom)', () => {
    const hip = getStructureById('art-hip-joint') as JointEntry | undefined;
    expect(hip?.rom?.length).toBeGreaterThan(0);
  });
});

describe('JOINT_ROM — valores verificados contra la capa de texto (muestreo)', () => {
  it('cadera: flexión ~90° con rodilla extendida y ~120° con rodilla flexionada', () => {
    const flex = getJointRom('art-hip-joint').find((e) => e.motion === 'Flexión');
    expect(flex?.value).toBe('~90°');
    expect(flex?.condition).toContain('120°');
  });

  it('rodilla: flexión pasiva 130°–140° y sentadilla hasta ~160°', () => {
    const rom = getJointRom('art-knee-joint');
    expect(rom.find((e) => e.motion === 'Flexión pasiva')?.value).toBe('130°–140°');
    expect(rom.find((e) => e.motion === 'Flexión en sentadilla profunda')?.value).toContain('160°');
  });

  it('tobillo: ~20° dorsiflexión / ~50° flexión plantar', () => {
    const rom = getJointRom('art-ankle-joint');
    expect(rom.find((e) => e.motion === 'Dorsiflexión')?.value).toBe('~20°');
    expect(rom.find((e) => e.motion === 'Flexión plantar')?.value).toBe('~50°');
  });

  it('ATM: apertura 40–50 mm (en mm, no grados)', () => {
    const apertura = getJointRom('art-temporomandibular-joint').find((e) => e.motion.includes('Apertura'));
    expect(apertura?.value).toBe('40–50 mm');
  });

  it('articulaciones sin valores numéricos en la fuente lo declaran explícitamente', () => {
    for (const id of ['art-subtalar-joint', 'art-patellofemoral-joint', 'art-tibiofibular-joint']) {
      const entries = getJointRom(id);
      expect(entries.length).toBeGreaterThan(0);
      for (const e of entries) {
        expect(
          /\d/.test(e.value) || /sin (valores numéricos|grados|ROM clásico)/i.test(e.value),
          `${id}/${e.motion}: valor sin respaldo ni declaración explícita`,
        ).toBe(true);
      }
    }
  });

  it('el resto del grafo no se ve afectado por la fusión (267 estructuras)', () => {
    expect(ANATOMY_STRUCTURES.length).toBeGreaterThanOrEqual(267);
  });
});
