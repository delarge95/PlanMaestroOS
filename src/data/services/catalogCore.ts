import type { Currency, LevelId, QuoteResult, RateClass } from './types';
import { getRateCard, LAUNCH_DISCOUNT } from './rateCard';

export interface HourRange { min: number; max: number }
export type HoursByTier = Record<LevelId, HourRange>;

export interface Subtask { id: string; nameEs: string; hours: HoursByTier; rateClass: RateClass; optional?: boolean }
export interface ServiceDef {
  id: string; catalogId: string; family: string;
  nameEs: string; unitEs: string; descripcionEs: string;
  entregablesEs: string[]; noIncluyeEs?: string[];
  driversEs: string[]; confidence: 'explicit' | 'inferred' | 'qualitative';
  subtasks: Subtask[]; entregaDiasEs?: [number, number];
}

type T = [number, number];
type RC = RateClass;
const h = (a: number, b: number) => ({ min: a, max: b });
const xs = (a: number, b: number) => ({ XS: h(a, b) });
const all = (xs2: T, s: T, m: T, l: T, xl: T): HoursByTier => ({ XS: h(xs2[0], xs2[1]), S: h(s[0], s[1]), M: h(m[0], m[1]), L: h(l[0], l[1]), XL: h(xl[0], xl[1]) });
const noXs = (s: T, m: T, l: T, xl: T): HoursByTier => ({ XS: h(0, 0), S: h(s[0], s[1]), M: h(m[0], m[1]), L: h(l[0], l[1]), XL: h(xl[0], xl[1]) });

function svc(id: string, cat: string, fam: string, name: string, unit: string, desc: string, entreg: string[], noInc: string[] | undefined, drivers: string[], conf: ServiceDef['confidence'], dias: [number, number], subs: Subtask[]): ServiceDef {
  return { id, catalogId: cat, family: fam, nameEs: name, unitEs: unit, descripcionEs: desc, entregablesEs: entreg, noIncluyeEs: noInc, driversEs: drivers, confidence: conf, subtasks: subs, entregaDiasEs: dias };
}
function st(id: string, name: string, rc: RC, hours: HoursByTier): Subtask { return { id, nameEs: name, hours, rateClass: rc }; }

export const SERVICES: ServiceDef[] = [
  svc('RND-01','C1','render','Render 3D estatico','imagen','Imagenes fotorrealistas de producto/objeto/escena para e-commerce, marketing o print.',
    ['Imagenes en alta resolucion (PNG/JPG/EXR)','Versiones en formatos acordados','2 rondas de revision'],
    undefined,['complejidad del asset','numero de vistas','materiales','resolucion'],'explicit',[1,14],
    [st('r1-brief','Brief + moodboard','RC-ART',all([0.5,1],[0.5,1],[1,2],[1,2],[2,3])),
     st('r1-setup','Setup escena (camara, luz, HDRI)','RC-ART',all([0.5,1],[1,2],[1.5,3],[2,5],[4,8])),
     st('r1-lookdev','Materiales y texturizado','RC-ART',all([0.5,1.5],[1,3],[2,6],[4,10],[8,16])),
     st('r1-render','Render + denoise','RC-ART',all([0.5,0.5],[0.5,1],[1,2],[1.5,4],[3,6])),
     st('r1-post','Post-produccion','RC-ART',all([0.25,0.5],[0.5,1],[1,2],[2,4],[4,8])),
     st('r1-qa','QA + export','RC-ART',all([0.25,0.5],[0.5,1],[0.5,1],[0.5,1],[1,2]))]),

  svc('RND-02','C1','render','Animacion 3D (render offline)','clip (XS=loop 2-3s)','Video renderizado para social, web o presentaciones.',
    ['Video master H.264/H.265','Versiones 16:9, 1:1, 9:16','2 rondas de revision'],
    undefined,['duracion','shots','animacion','simulaciones'],'explicit',[3,42],
    [st('r2-story','Storyboard/previs','RC-ART',all([0.5,1],[2,4],[3,6],[4,8],[6,12])),
     st('r2-layout','Layout escena y camaras','RC-ART',all([0.5,1],[1,2],[2,4],[3,6],[5,8])),
     st('r2-anim','Animacion (camara/objetos)','RC-ART',all([1,2],[4,8],[8,16],[12,24],[20,40])),
     st('r2-look','Iluminacion + lookdev','RC-ART',all([1,2],[2,4],[4,7],[5,10],[8,14])),
     st('r2-render','Renders/passes','RC-ART',all([1,1.5],[2,3],[3,5],[4,8],[6,12])),
     st('r2-comp','Composicion, edit, grade','RC-ART',all([1,1.5],[2,3],[3,5],[4,8],[6,12]))]),

  svc('RTA-01','C2','asset-rt','Asset 3D realtime estatico','asset optimizado','Modelo 3D optimizado para WebGL/videojuegos.',
    ['GLB/GLTF con Draco/KTX2','Texturas PBR','LODs','Reporte de performance'],
    undefined,['presupuesto poligonal','piezas','fuente'],'explicit',[1,42],
    [st('rt1-intake','Intake/QC specs','RC-RTA',noXs([0.5,1],[1,2],[2,3],[3,5])),
     st('rt1-model','Modelado hi-low','RC-RTA',noXs([2,4],[4,10],[10,25],[25,80])),
     st('rt1-uv','UV unwrap','RC-RTA',noXs([1,2],[2,4],[4,8],[8,16])),
     st('rt1-bake','Baking de mapas','RC-RTA',noXs([0.5,1],[1,3],[3,6],[6,12])),
     st('rt1-text','Texturizado PBR','RC-RTA',noXs([1,3],[3,6],[6,14],[14,30])),
     st('rt1-opt','Optimizacion LODs/Draco','RC-RTA',noXs([0.5,1],[1,3],[3,6],[6,12])),
     st('rt1-qa','QA motor target','RC-RTA',noXs([0.5,1],[1,2],[2,4],[4,8]))]),

  svc('RTA-02','C2','asset-rt','Asset RT interactuable (hotspots)','asset + interactividad','Modelo 3D con hotspots y seleccion de partes.',
    ['Todo lo de RTA-01','Hotspots con info por parte','Highlight/seleccion'],
    undefined,['hotspots','poligonal'],'explicit',[2,49],
    [st('rt2-core','Pipeline base (ver RTA-01)','RC-RTA',noXs([6,13],[14,30],[30,66],[66,163])),
     st('rt2-interaccion','Interactividad basica','RC-WEB',noXs([2,4],[4,8],[8,16],[16,32]))]),

  svc('CAD-01','C6','datos','CAD a WebGL ready (servicio insignia)','ensamblaje CAD','Conversion de ensamblajes CAD a assets web optimizados con metadata por pieza.',
    ['GLB optimizado con metadata por pieza','LODs + compresion','Texturas PBR tecnicos','QA visor + reporte perf'],
    ['Vista explosionada (cotizar RTA-06)','Animacion (cotizar RTA-03/04)'],['numero de piezas','complejidad geometrica','calidad del CAD'],'explicit',[1,70],
    [st('cad-ingesta','Ingesta CAD/QC','RC-RTA',all([0.5,1],[0.5,1],[1,3],[3,6],[6,15])),
     st('cad-retopo','Decimado/retopo por pieza','RC-RTA',all([0.75,1.5],[1,3],[3,10],[10,30],[30,100])),
     st('cad-uv','UVs + baking batch','RC-RTA',all([0.5,1.25],[1,2],[2,6],[6,15],[15,40])),
     st('cad-texturas','Texturas PBR tecnicos','RC-ART',all([0.75,1.5],[1,3],[3,8],[8,20],[20,45])),
     st('cad-metadata','Jerarquia/metadata por pieza','RC-RTA',all([0.25,0.75],[0.5,1],[1,3],[3,8],[8,20])),
     st('cad-lods','LODs + compresion','RC-RTA',all([0.25,0.75],[0.5,1],[1,3],[3,8],[8,18])),
     st('cad-qa','QA visor + reporte perf','RC-WEB',all([0.25,0.75],[0.5,1],[1,2],[2,5],[5,12]))]),

  svc('WEB-01','C3','web-3d','Visor custom three.js / Babylon.js','visor web','Visor web a medida con orbita, hotspots, UI y perf mobile.',
    ['Visor web interactivo','Pipeline de carga optimizado','Responsive mobile-first','Analytics events'],
    undefined,['hotspots/features','datos dinamicos','AR opcional'],'explicit',[2,21],
    [st('web1-spec','Spec + pipeline de carga','RC-WEB',noXs([2.5,6],[7,13],[14,28],[28,56])),
     st('web1-interaccion','Interaccion + UI overlay','RC-WEB',noXs([3.5,9],[9,18],[18,38],[38,76])),
     st('web1-perf','Perf movil + QA + entrega','RC-WEB',noXs([1.5,5],[4,9],[10,22],[22,49]))]),

  svc('WEB-04','C3','web-3d','Web App 3D (configurador/herramienta)','aplicacion web','Aplicacion web con estado real: configuradores, herramientas tecnicas.',
    ['Aplicacion web completa','Escena 3D configurable','Export/share de resultados','Deploy documentado'],
    ['Assets 3D (cotizar RTA/CAD)'],['variantes/reglas','fuente de datos','autenticacion'],'inferred',[7,112],
    [st('web4-discovery','Discovery/spec funcional','RC-WEB',noXs([5,11],[11,26],[27,57],[57,112])),
     st('web4-core','Arquitectura + escena configurable','RC-WEB',noXs([11,23],[23,58],[58,124],[124,244])),
     st('web4-qa','QA/E2E + perf + deploy','RC-WEB',noXs([5,11],[11,30],[29,64],[64,124]))]),

  svc('E1-01','C4','ia','Asistente IA en sitio web (chat RAG)','asistente instalado','Chat IA entrenado con contenido del cliente via RAG.',
    ['Chat widget embebido','RAG sobre contenido propio','Guardrails/disclaimers','Casos de prueba documentados'],
    ['Costos de API (BYOK)'],['volumen de contenido','idiomas','acciones permitidas'],'explicit',[3,70],
    [st('e1-discovery','Discovery/casos de uso','RC-AI',noXs([3,5],[5,8],[8,14],[8,14])),
     st('e1-rag','Pipeline ingesta/RAG','RC-AI',noXs([8,16],[16,30],[30,60],[30,60])),
     st('e1-prompts','Prompt engineering + guardrails','RC-AI',noXs([4,8],[8,14],[14,26],[14,26])),
     st('e1-widget','Widget UI + integracion','RC-WEB',noXs([6,12],[12,24],[24,44],[24,44])),
     st('e1-eval','Evaluacion + casos de prueba','RC-AI',noXs([4,7],[7,12],[12,22],[12,22]))]),

  svc('CON-01','C7','soporte','Consultoria tecnica 3D / web','sesion o informe','Discovery, auditorias tecnicas, roadmaps.',
    ['Informe de discovery','SOW borrador con estimacion','Presentacion al equipo'],
    undefined,['stakeholders','material de entrada'],'qualitative',[2,10],
    [st('con-trabajo','Intake/analisis/SOW','RC-CON',all([2,4.5],[2.5,6],[6,12],[12,24],[12,24])),
     st('con-presentacion','Presentacion y revision','RC-CON',all([0.5,1.5],[1,2],[2,4],[4,8],[4,8]))]),

  svc('RET-01','C7','soporte','Retainer mensual','bloque horas/mes','Disponibilidad recurrente con SLA por tier.',
    ['Disponibilidad recurrente','SLA de respuesta','Horas rollean 50%'],
    undefined,['horas/mes','tipo de trabajo'],'explicit',[0,0],
    [st('ret-lite','Lite: 4h/mes','RC-RTA',all([4,4],[4,4],[4,4],[4,4],[4,4])),
     st('ret-std','Standard: 8h/mes','RC-RTA',all([8,8],[8,8],[8,8],[8,8],[8,8])),
     st('ret-pro','Pro: 16h/mes','RC-RTA',all([16,16],[16,16],[16,16],[16,16],[16,16])),
     st('ret-biz','Business: 40h/mes','RC-CON',all([40,40],[40,40],[40,40],[40,40],[40,40]))]),
];

export function getServiceById(id: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.id === id);
}