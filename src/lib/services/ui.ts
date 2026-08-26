import type { Currency, LevelId, QuoteInput } from '../../data/services';
import { PACKAGES, getServiceById } from '../../data/services';

export type Screen = 'entry' | 'presets' | 'preset-config' | 'wizard' | 'catalog' | 'summary';

export interface WizardState {
  family?: string;
  serviceId?: string;
  levelBase: LevelId;
  qualitativeDeltas: Record<string, -1 | 0 | 1>;
  addons: string[];
}

export interface CotizadorState {
  screen: Screen;
  currency: Currency;
  presetId?: string;
  wizard: WizardState;
  modifiers: {
    firstClientLaunch: boolean;
    recurringClient?: boolean;
    batchUnits?: number;
    urgent72h?: boolean;
    critical24h?: boolean;
  };
  quantity: number;
  pieces: number;
  seconds: number;
  detail: 0 | 1 | 2;
}

const LOCALE: Record<Currency, string> = { USD: 'en-US', COP: 'es-CO' };

export function formatMoney(currency: Currency, v: number): string {
  return new Intl.NumberFormat(LOCALE[currency], {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(v);
}

export const LEVEL_SHORT: Record<LevelId, string> = { XS: 'XS', N1: 'S', N2: 'M', N3: 'L', N4: 'XL' };

export function suggestedLevelFromPieces(pieces: number): LevelId {
  if (pieces <= 15) return 'N1';
  if (pieces <= 60) return 'N2';
  if (pieces <= 150) return 'N3';
  return 'N4';
}

export function suggestedLevelFromSeconds(seconds: number): LevelId {
  if (seconds <= 3) return 'XS';
  if (seconds <= 12) return 'N1';
  if (seconds <= 35) return 'N2';
  if (seconds <= 70) return 'N3';
  return 'N4';
}

export interface GoalOption {
  id: string;
  labelEs: string;
  familyIds: string[];
  pushPresetId?: string;
}

export const GOALS: GoalOption[] = [
  { id: 'show', labelEs: 'Mostrar producto en 3D', familyIds: ['web-3d'] },
  { id: 'sell', labelEs: 'Vender con variantes / configurador', familyIds: ['web-3d'] },
  { id: 'explain', labelEs: 'Explicar cómo funciona (montaje/piezas)', familyIds: ['datos', 'asset-rt'] },
  { id: 'video', labelEs: 'Video o animación de producto', familyIds: ['render'] },
  { id: 'ia', labelEs: 'IA en mi sitio o procesos', familyIds: ['ia'] },
  { id: 'cad', labelEs: 'Tengo archivos CAD/STP', familyIds: ['datos'], pushPresetId: 'PK-CAD-WEBGL' },
];

function clonePackageWithQty(packageId: string, targetServiceId: string, qty: number) {
  const pkg = PACKAGES.find((p) => p.id === packageId);
  if (!pkg) throw new Error(`paquete desconocido: ${packageId}`);
  return {
    ...pkg,
    componentes: pkg.componentes.map((c) =>
      c.serviceId === targetServiceId ? { ...c, cantidad: qty } : c,
    ),
  };
}

export function buildQuoteInput(
  state: Pick<CotizadorState, 'screen' | 'currency' | 'presetId' | 'wizard' | 'modifiers' | 'quantity' | 'pieces' | 'seconds'>,
): QuoteInput {
  const base = { currency: state.currency, modifiers: state.modifiers };

  if (state.screen === 'preset-config' && state.presetId) {
    const pkg = PACKAGES.find((p) => p.id === state.presetId);
    const f1Qty =
      state.presetId === 'PK-CAD-WEBGL' || state.presetId === 'PK-CAD-TWIN'
        ? Math.max(1, Math.min(20, state.pieces))
        : undefined;
    const componentes =
      pkg && f1Qty != null ? clonePackageWithQty(state.presetId, 'f1-cad-webgl-ready', f1Qty).componentes : undefined;
    return {
      kind: 'package',
      packageId: state.presetId,
      currency: state.currency,
      modifiers: state.modifiers,
      ...(componentes ? { componentesOverride: componentes } : {}),
    };
  }

  const sid = state.wizard.serviceId ?? 'a1-render-estatico';
  const s = getServiceById(sid);

  let level: LevelId = state.wizard.levelBase;
  const deltas = Object.values(state.wizard.qualitativeDeltas) as number[];
  const totalDelta = deltas.reduce((a, b) => a + b, 0);
  if (totalDelta !== 0 && s) {
    const order: LevelId[] = ['XS', 'N1', 'N2', 'N3', 'N4'];
    const idx = Math.min(order.length - 1, Math.max(0, order.indexOf(level) + totalDelta));
    level = order[idx];
  }
  if (sid === 'a2-render-animacion') level = suggestedLevelFromSeconds(state.seconds);

  const quantity = s?.unitEs.startsWith('clip') ? 1 : Math.max(1, state.quantity);

  return { kind: 'service', serviceId: sid, level, currency: state.currency, modifiers: state.modifiers, quantity };
}
