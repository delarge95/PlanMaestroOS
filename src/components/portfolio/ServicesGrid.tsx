import { useEffect, useState } from "react";
import { ArrowUpRight, Boxes, Gauge, ScanEye, SlidersHorizontal, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/*
 * ServicesGrid — sección compacta de servicios freelance.
 * 5 cards limpias (hover translateY -2px + shadow en CSS) que enlazan
 * al cotizador YA desplegado: https://services.alexwoodcock.me/cotizador/
 * i18n runtime vía "langchange" (siteLang.ts).
 */

type Lang = "en" | "es";

const QUOTER_URL = "https://services.alexwoodcock.me/cotizador/";

type Service = {
  id: string;
  icon: LucideIcon;
  title: { en: string; es: string };
  copy: { en: string; es: string };
};

const services: Service[] = [
  {
    id: "webgl-viewer",
    icon: ScanEye,
    title: { en: "WebGL product viewer", es: "Visor WebGL de producto" },
    copy: {
      en: "Interactive 3D viewers that run in any browser — selection, exploded views and technical UI, no installs.",
      es: "Visores 3D interactivos que corren en cualquier navegador — selección, vistas explosionadas y UI técnica, sin instalaciones."
    }
  },
  {
    id: "digital-twin",
    icon: Boxes,
    title: { en: "Lightweight digital twin", es: "Gemelo digital ligero" },
    copy: {
      en: "CAD or scan assets turned into fast, inspectable browser twins with visual modes and annotations.",
      es: "Activos CAD o escaneos convertidos en gemelos rápidos e inspeccionables en el navegador, con modos visuales y anotaciones."
    }
  },
  {
    id: "configurator",
    icon: SlidersHorizontal,
    title: { en: "Web 3D configurator", es: "Configurador 3D web" },
    copy: {
      en: "Real-time options for materials, colors and states — a product page your clients can actually operate.",
      es: "Opciones en tiempo real de materiales, colores y estados — una página de producto que tus clientes pueden operar."
    }
  },
  {
    id: "cad-optimization",
    icon: Gauge,
    title: { en: "CAD → realtime optimization", es: "Optimización CAD → realtime" },
    copy: {
      en: "Heavy engineering geometry rebuilt and decimated to hit the browser frame budget (proven on 6.5M+ triangle sources).",
      es: "Geometría de ingeniería pesada reconstruida y diezmada para cumplir el presupuesto de frames del navegador (probado con fuentes de 6.5M+ triángulos)."
    }
  },
  {
    id: "pipeline-audit",
    icon: Workflow,
    title: { en: "Pipeline audit", es: "Auditoría de pipeline" },
    copy: {
      en: "A bottleneck review of your 3D workflow with a prioritized fix plan — from asset import to final delivery.",
      es: "Revisión de cuellos de botella de tu flujo 3D con un plan de corrección priorizado — desde la importación de activos hasta la entrega final."
    }
  }
];

const strings = {
  en: {
    kicker: "02 · Services",
    title: "Real-time 3D, delivered as a service.",
    lead: "Freelance engagements with a fixed-quote calculator online. Define your scope, get a number, start building.",
    quote: "Quote",
    bannerTitle: "Know the price before you commit.",
    bannerCopy:
      "The interactive calculator is already deployed: pick a service, tune the scope and get a transparent estimate in under two minutes.",
    bannerCta: "Open the calculator",
    startsAt: "from"
  },
  es: {
    kicker: "02 · Servicios",
    title: "3D en tiempo real, como servicio.",
    lead: "Trabajos freelance con cotizador de precio fijo en línea. Define el alcance, obtén una cifra, empieza a construir.",
    quote: "Cotizar",
    bannerTitle: "Conoce el precio antes de comprometerte.",
    bannerCopy:
      "El cotizador interactivo ya está desplegado: elige un servicio, ajusta el alcance y obtén un estimado transparente en menos de dos minutos.",
    bannerCta: "Abrir el cotizador",
    startsAt: "desde"
  }
} as const;

export default function ServicesGrid() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(document.documentElement.lang === "es" ? "es" : "en");
    const onLang = (event: Event) => {
      const next = (event as CustomEvent<{ lang?: string }>).detail?.lang;
      if (next === "es" || next === "en") setLang(next);
    };
    window.addEventListener("langchange", onLang);
    return () => window.removeEventListener("langchange", onLang);
  }, []);

  const t = strings[lang];

  return (
    <section className="pf-section" id="services" aria-label="Freelance services">
      <div className="pf-shell">
        <header className="pf-services-head" data-pf-reveal>
          <p className="pf-kicker">{t.kicker}</p>
          <h2 className="pf-title">{t.title}</h2>
          <p className="pf-lead">{t.lead}</p>
        </header>

        <div className="pf-services-grid" data-pf-stagger>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={service.id}
                className="pf-service"
                href={QUOTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-pf-reveal
              >
                <div className="pf-service-top">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pf-service-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                </div>
                <h3>{service.title[lang]}</h3>
                <p>{service.copy[lang]}</p>
                <span className="pf-service-cta">
                  {t.quote}
                  <span className="pf-btn-arrow" aria-hidden="true">→</span>
                </span>
              </a>
            );
          })}
        </div>

        <div className="pf-services-cta" data-pf-reveal>
          <div className="pf-services-cta-text">
            <h3>{t.bannerTitle}</h3>
            <p>{t.bannerCopy}</p>
          </div>
          <a className="pf-btn pf-btn-primary" href={QUOTER_URL} target="_blank" rel="noopener noreferrer">
            <span>{t.bannerCta}</span>
            <span className="pf-btn-arrow" aria-hidden="true">
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
