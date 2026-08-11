// scripts/lib/notionRateLimit.ts - Rate Limiter oficial para Notion API (Máximo 3 req/s con Backoff & Jitter)

export class NotionRateLimiter {
  private queue: (() => Promise<any>)[] = [];
  private processing = false;
  private minIntervalMs = 334; // Max 3 req/sec = 1000ms / 3 = 333.3ms
  private lastCallTimestamp = 0;

  public async schedule<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        let attempt = 0;
        while (attempt < retries) {
          try {
            const now = Date.now();
            const elapsed = now - this.lastCallTimestamp;
            if (elapsed < this.minIntervalMs) {
              await new Promise((r) => setTimeout(r, this.minIntervalMs - elapsed));
            }

            this.lastCallTimestamp = Date.now();
            const result = await fn();
            resolve(result);
            return;
          } catch (err: any) {
            attempt++;
            const retryAfterHeader = err?.headers?.get?.('retry-after');
            const retryAfterSec = retryAfterHeader ? parseInt(retryAfterHeader, 10) : 0;

            if (retryAfterSec > 0) {
              console.warn(`[Notion RateLimiter] Retry-After recibido: ${retryAfterSec}s. Esperando...`);
              await new Promise((r) => setTimeout(r, retryAfterSec * 1000));
            } else {
              // Backoff exponencial con jitter
              const backoffMs = Math.pow(2, attempt) * 500 + Math.random() * 200;
              console.warn(`[Notion RateLimiter] Error en request (intento ${attempt}/${retries}). Reintentando en ${Math.round(backoffMs)}ms...`);
              await new Promise((r) => setTimeout(r, backoffMs));
            }

            if (attempt >= retries) {
              reject(err);
              return;
            }
          }
        }
      });

      this.processQueue();
    });
  }

  private async processQueue() {
    if (this.processing) return;
    this.processing = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) {
        try {
          await task();
        } catch (_e) {
          // Handled inside schedule Promise
        }
      }
    }

    this.processing = false;
  }
}

export const globalNotionRateLimiter = new NotionRateLimiter();
