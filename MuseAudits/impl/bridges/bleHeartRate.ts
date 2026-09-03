// bleHeartRate — fase L2: parser del Heart Rate Measurement (Bluetooth SIG 0x2A37).
// Puro y testeado con paquetes sintéticos: la Web Bluetooth API solo entrega el
// DataView; esta función lo convierte en {hr, rr[], contact}. El hook React vive en
// el encargo (usa RenderScheduler para no drenar batería).
// Destino: src/lib/wearables/bleHeartRate.ts

export interface HrSample {
  hr: number; // bpm
  rrMs: number[]; // intervalos R-R en ms (para HRV RMSSD)
  contact: boolean; // sensor en contacto con la piel
  energyExpendedKj?: number;
}

/**
 * Parsea un valor de la característica 0x2A37.
 * flags bit0: 0=HR uint8, 1=HR uint16 | bit1-2: contacto | bit3: energy | bit4: RR.
 */
export function parseHrMeasurement(view: DataView): HrSample {
  let o = 0;
  const flags = view.getUint8(o++);
  const hr16 = (flags & 0x01) !== 0;
  const contactBits = (flags >> 1) & 0x03;
  const hasEnergy = (flags & 0x08) !== 0;
  const hasRR = (flags & 0x10) !== 0;

  const hr = hr16 ? view.getUint16(o, true) : view.getUint8(o);
  o += hr16 ? 2 : 1;
  const contact = contactBits === 0b11;

  let energyExpendedKj: number | undefined;
  if (hasEnergy) {
    energyExpendedKj = view.getUint16(o, true);
    o += 2;
  }
  const rrMs: number[] = [];
  if (hasRR) {
    while (o + 1 < view.byteLength) {
      rrMs.push(Math.round((view.getUint16(o, true) / 1024) * 1000));
      o += 2;
    }
  }
  if (hr < 20 || hr > 250) throw new Error(`HR fuera de rango: ${hr}`);
  return { hr, rrMs, contact, energyExpendedKj };
}

/** RMSSD (ms) desde intervalos R-R: base del HRV matutino. */
export function rmssd(rrMs: number[]): number | null {
  if (rrMs.length < 2) return null;
  let sum = 0;
  for (let i = 1; i < rrMs.length; i++) sum += (rrMs[i] - rrMs[i - 1]) ** 2;
  return Math.round(Math.sqrt(sum / (rrMs.length - 1)) * 10) / 10;
}
