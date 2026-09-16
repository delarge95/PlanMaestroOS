/*
 * siteLang.ts — i18n ligero del portafolio público (rescatado y adaptado
 * del WIP c721323). Gestiona [data-i18n] (texto Astro estático), los
 * botones [data-lang-btn] y emite "langchange" para que las islas React
 * (hero, showcase, services) se traduzcan en runtime. EN por defecto.
 */
type Lang = "en" | "es";

const dict: Record<Lang, Record<string, string>> = {
  en: {
    footerAvail: "Available for remote contractor / B2B work · Colombia (UTC−5)",
    footerTitle: "Let's build your next real-time system.",
    footerQuote: "Estimate a project",
    footerContact: "Contact",
    footerEmail: "Email",
    footerNote:
      "Conservative public claims by design — metrics and links stay verified before they ship.",
    footerBuilt: "Portfolio built with Astro, React 19 and Three.js",
    langLabel: "Language"
  },
  es: {
    footerAvail: "Disponible para trabajo remoto contractor / B2B · Colombia (UTC−5)",
    footerTitle: "Construyamos tu próximo sistema en tiempo real.",
    footerQuote: "Cotizar un proyecto",
    footerContact: "Contacto",
    footerEmail: "Correo",
    footerNote:
      "Afirmaciones públicas conservadoras por diseño — métricas y enlaces se verifican antes de publicarse.",
    footerBuilt: "Portafolio construido con Astro, React 19 y Three.js",
    langLabel: "Idioma"
  }
};

const storageKey = "portfolio-lang";

const getLang = (): Lang => {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === "es" ? "es" : "en";
  } catch {
    return "en";
  }
};

const apply = (lang: Lang) => {
  document.documentElement.lang = lang;
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const next = key ? dict[lang][key] : undefined;
    if (next === undefined) return;
    element.textContent = next;
  });
  document.querySelectorAll<HTMLElement>("[data-lang-btn]").forEach((button) => {
    const active = button.dataset.langBtn === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
};

/* Aplica el idioma a un nodo insertado después del arranque (API rescatada). */
export const applyI18nElement = (element: HTMLElement) => {
  const key = element.dataset.i18n;
  const next = key ? dict[getLang()][key] : undefined;
  if (next !== undefined) element.textContent = next;
};

const init = () => {
  apply(getLang());
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const button = target?.closest<HTMLElement>("[data-lang-btn]");
    if (!button) return;
    const lang: Lang = button.dataset.langBtn === "es" ? "es" : "en";
    try {
      localStorage.setItem(storageKey, lang);
    } catch {
      /* modo privado: solo runtime */
    }
    apply(lang);
  });
};

init();

export {};
