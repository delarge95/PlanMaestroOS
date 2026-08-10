// src/lib/api/workerClient.ts - Cliente seguro para el Worker Privado (Proxy Notion/GitHub/IA)

export interface WorkerWriteAction {
  domain: 'agenda' | 'fitness' | 'career' | 'clinical' | 'german';
  entity: string;
  action: 'create' | 'update' | 'delete' | 'reschedule';
  payload: Record<string, any>;
}

export interface WorkerResponse<T = any> {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
  jobId?: string;
}

export interface WorkerAIResponse {
  ok: boolean;
  proposal?: string;
  draftNotes?: string[];
  suggestedAction?: Record<string, any>;
  error?: string;
}

export interface WorkerClientConfig {
  workerUrl?: string;
  authToken?: string;
  maxRetries?: number;
  baseDelayMs?: number;
}

export class WorkerClient {
  private baseUrl: string;
  private authToken: string;
  private maxRetries: number;
  private baseDelayMs: number;

  constructor(config?: WorkerClientConfig) {
    this.baseUrl = (config?.workerUrl || import.meta.env.PUBLIC_WORKER_API_URL || 'https://api-worker.planmaestro-os.internal').replace(/\/$/, '');
    this.authToken = config?.authToken || '';
    this.maxRetries = config?.maxRetries ?? 3;
    this.baseDelayMs = config?.baseDelayMs ?? 1000;
  }

  private async fetchWithBackoff<T>(endpoint: string, options: RequestInit): Promise<WorkerResponse<T>> {
    let attempt = 0;

    while (attempt <= this.maxRetries) {
      try {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
          ...options,
          headers: {
            'Content-Type': 'application/json',
            'X-Client-Platform': 'PlanMaestro-OS-Astro',
            ...(this.authToken ? { Authorization: `Bearer ${this.authToken}` } : {}),
            ...options.headers
          }
        });

        if (response.status === 429) {
          // Notion / Worker Rate Limit Exceeded
          const retryAfter = parseInt(response.headers.get('Retry-After') || '0', 10);
          const delay = retryAfter > 0 ? retryAfter * 1000 : this.baseDelayMs * Math.pow(2, attempt);
          attempt++;
          if (attempt <= this.maxRetries) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            continue;
          }
        }

        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          return {
            ok: false,
            status: response.status,
            error: data.error || `Error HTTP ${response.status}`
          };
        }

        return {
          ok: true,
          status: response.status,
          data,
          jobId: data.jobId
        };
      } catch (err: any) {
        attempt++;
        if (attempt > this.maxRetries) {
          return {
            ok: false,
            status: 0,
            error: err.message || 'Error de conexión con el Worker privado'
          };
        }
        await new Promise((resolve) => setTimeout(resolve, this.baseDelayMs * Math.pow(2, attempt - 1)));
      }
    }

    return { ok: false, status: 0, error: 'Reintentos agotados' };
  }

  /**
   * Ejecuta una acción de escritura segura a través del Worker privado.
   */
  async sendWriteAction(action: WorkerWriteAction): Promise<WorkerResponse> {
    return this.fetchWithBackoff('/api/v1/write', {
      method: 'POST',
      body: JSON.stringify(action)
    });
  }

  /**
   * Solicita una propuesta al Asistente IA (la IA solo responde propuestas/borradores, jamás ejecuta autónomamente).
   */
  async queryAssistant(prompt: string, context?: Record<string, any>): Promise<WorkerAIResponse> {
    const res = await this.fetchWithBackoff<WorkerAIResponse>('/api/v1/ai/propose', {
      method: 'POST',
      body: JSON.stringify({ prompt, context })
    });

    if (!res.ok || !res.data) {
      return { ok: false, error: res.error || 'No se pudo obtener propuesta de la IA' };
    }

    return res.data;
  }

  /**
   * Desencadena una sincronización de snapshot a pedido.
   */
  async triggerSyncJob(jobType: 'agenda' | 'fitness' | 'career'): Promise<WorkerResponse> {
    return this.fetchWithBackoff('/api/v1/sync', {
      method: 'POST',
      body: JSON.stringify({ jobType })
    });
  }
}

// Instancia singleton compartida por defecto
export const defaultWorkerClient = new WorkerClient();
