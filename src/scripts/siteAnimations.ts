const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const progressBar = document.querySelector<HTMLElement>("[data-scroll-progress]");

if (progressBar) {
  let progressTicking = false;

  const updateProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    progressTicking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!progressTicking) {
        window.requestAnimationFrame(updateProgress);
        progressTicking = true;
      }
    },
    { passive: true }
  );

  updateProgress();
}

const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(18px)";
});

if (!reducedMotion && revealElements.length > 0) {
  const animeModule = await import("animejs");
  const anyModule = animeModule as Record<string, any>;
  const defaultAnime = anyModule.default;
  const animate = anyModule.animate;
  const stagger = anyModule.stagger ?? defaultAnime?.stagger;

  const runAnimation = (targets: Element[] | string, params: Record<string, any>) => {
    if (typeof animate === "function") {
      return animate(targets, params);
    }

    if (typeof defaultAnime === "function") {
      return defaultAnime({ targets, ...params });
    }

    revealElements.forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    });
    return undefined;
  };

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          const target = entry.target as HTMLElement;
          runAnimation([target], {
            opacity: [0, 1],
            translateY: [18, 0],
            duration: 680,
            delay: 40,
            easing: "easeOutCubic"
          });
          observer.unobserve(target);
        });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  const storyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-active", entry.isIntersecting);
      });
    },
    { rootMargin: "-35% 0px -35% 0px", threshold: 0.08 }
  );

  document.querySelectorAll("[data-story-step]").forEach((step) => storyObserver.observe(step));

  runAnimation(".hero .tech-tag, .hero .cta-button", {
    opacity: [0, 1],
    translateY: [10, 0],
    delay: typeof stagger === "function" ? stagger(70) : 80,
    duration: 520,
    easing: "easeOutCubic"
  });
} else {
  revealElements.forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  });
}

export {};
