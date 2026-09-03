// webglOnDemand — render a demanda (Gemini punto ciego C, adoptado).
// Three.js a 60fps continuo drena batería + thermal-throttling en portátil.
// Parche: el loop solo dibuja cuando hay interacción/animación activa.
// Destino: parche en AnatomyViewer.tsx / ModelPreview.tsx ( envolver el RAF ).

export type RenderTrigger = 'orbit' | 'zoom' | 'click' | 'animation' | 'resize' | 'data';

export class RenderScheduler {
  private dirty = true;
  private animating = false;
  private frames = 0;

  /** La UI llama requestRender(trigger) en cada interacción. */
  requestRender(_trigger: RenderTrigger): void {
    this.dirty = true;
  }

  setAnimating(active: boolean): void {
    this.animating = active;
    if (active) this.dirty = true;
  }

  /** El loop RAF pregunta por frame: ¿dibujo o duermo? */
  shouldRender(): boolean {
    if (this.animating) {
      this.frames++;
      return true;
    }
    if (this.dirty) {
      this.dirty = false;
      this.frames++;
      return true;
    }
    return false;
  }

  get renderedFrames(): number {
    return this.frames;
  }
}
