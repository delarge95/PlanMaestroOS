// src/lib/security/syncPolicy.ts - Políticas de Debounce y Tasa de Límite para Sincronizaciones

export const SYNC_POLICY_CONSTANTS = {
  NOTION_MAX_REQUESTS_PER_SECOND: 3,
  NOTION_MIN_INTERVAL_MS: 340, // ~3 req/segundo (1000ms / 3 = 333.3ms)
  WEBHOOK_DEBOUNCE_MIN_SECONDS: 30,
  WEBHOOK_DEBOUNCE_MAX_SECONDS: 120,
  DEFAULT_DEBOUNCE_MS: 60000, // 60 segundos por defecto
};

export class RateLimiter {
  private lastRequestTime = 0;
  private minIntervalMs: number;

  constructor(minIntervalMs: number = SYNC_POLICY_CONSTANTS.NOTION_MIN_INTERVAL_MS) {
    this.minIntervalMs = minIntervalMs;
  }

  async waitForSlot(): Promise<void> {
    const now = Date.now();
    const elapsed = now - this.lastRequestTime;
    if (elapsed < this.minIntervalMs) {
      const waitTime = this.minIntervalMs - elapsed;
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
    this.lastRequestTime = Date.now();
  }
}

export class Debouncer {
  private timers: Map<string, ReturnType<typeof setTimeout>> = new Map();

  debounce(key: string, callback: () => void, delayMs: number = SYNC_POLICY_CONSTANTS.DEFAULT_DEBOUNCE_MS): void {
    if (this.timers.has(key)) {
      clearTimeout(this.timers.get(key)!);
    }

    const timer = setTimeout(() => {
      this.timers.delete(key);
      callback();
    }, delayMs);

    this.timers.set(key, timer);
  }

  cancel(key: string): void {
    if (this.timers.has(key)) {
      clearTimeout(this.timers.get(key)!);
      this.timers.delete(key);
    }
  }
}

export const defaultNotionRateLimiter = new RateLimiter();
export const defaultSyncDebouncer = new Debouncer();
