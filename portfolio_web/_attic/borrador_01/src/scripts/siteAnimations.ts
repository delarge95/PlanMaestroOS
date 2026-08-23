const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type TechInsight = {
  body: string;
  signal: string;
};

type GsapLike = typeof import("gsap").gsap;
type ScrollTriggerLike = typeof import("gsap/ScrollTrigger").ScrollTrigger;
type AnimeLike = typeof import("animejs");

const techInsights: Record<string, TechInsight> = {
  Unity: {
    body: "Runtime scene organization, interaction logic and deployable real-time 3D workflows.",
    signal: "Relevant for Unity developer, technical artist and interactive 3D roles."
  },
  "Unity WebGL": {
    body: "Browser delivery with real-time constraints, loading limits and no-install access.",
    signal: "Shows deployment thinking beyond local editor work."
  },
  "C#": {
    body: "Viewer state, selection logic, interaction controllers and UI coordination.",
    signal: "Lets reviewers ask about implementation, not only visuals."
  },
  WebGL: {
    body: "Real-time 3D delivery inside the browser, with performance and compatibility tradeoffs.",
    signal: "Relevant for product visualization and web 3D teams."
  },
  URP: {
    body: "Render pipeline control for lightweight real-time presentation and visual modes.",
    signal: "Connects technical art choices to deployable Unity builds."
  },
  "UI Toolkit": {
    body: "Technical panels, inspection state and structured interface work inside Unity.",
    signal: "Useful for tools, dashboards and product-facing 3D applications."
  },
  Blender: {
    body: "Asset preparation, modeling, topology, material work and render presentation.",
    signal: "Shows the upstream craft behind real-time assets."
  },
  "CAD-to-Realtime": {
    body: "Simplifying dense CAD-derived geometry into readable, browser-ready assets.",
    signal: "Directly relevant for technical visualization and industrial 3D workflows."
  },
  Optimization: {
    body: "Geometry, loading and visual-readability decisions made for browser constraints.",
    signal: "Useful when reviewers care about performance, not only appearance."
  },
  Evaluation: {
    body: "Formative usability thinking through SUS, NASA-TLX Raw and task observation.",
    signal: "Shows product judgment and academic validation awareness."
  },
  Topology: {
    body: "Readable edge flow, surface structure and mesh decisions that survive close inspection.",
    signal: "Important for technical art and asset pipeline review."
  },
  UVs: {
    body: "Texture organization and layout discipline for material work and breakdown clarity.",
    signal: "Shows production literacy beyond final renders."
  },
  Materials: {
    body: "Surface response, roughness variation, skin/eye setup and lookdev judgment.",
    signal: "Useful for technical artist roles that bridge art and rendering."
  },
  Grooming: {
    body: "Hair, brows, beard and eyelashes handled as part of a complete character pipeline.",
    signal: "Shows patience and full workflow exposure."
  },
  Lighting: {
    body: "Presentation control through camera, light direction and render readability.",
    signal: "Helps reviewers judge visual decision-making."
  },
  Rendering: {
    body: "Final output, breakdown presentation and controlled image delivery.",
    signal: "Makes 3D process legible for recruiters and art reviewers."
  },
  Lookdev: {
    body: "Material and lighting decisions evaluated as a visual system.",
    signal: "Supports technical art positioning without overstating production experience."
  },
  "CG Cookie HUMAN": {
    body: "Training material context for the Blender character pipeline study.",
    signal: "Discloses the source context without presenting it as certification."
  },
  Python: {
    body: "Automation and structured reporting support for research and documentation workflows.",
    signal: "Adds engineering range without changing the main Unity/3D positioning."
  },
  "Research automation": {
    body: "Repeatable workflows for gathering, organizing and turning information into outputs.",
    signal: "Useful as a secondary systems-thinking signal."
  },
  Markdown: {
    body: "Structured output for technical notes, reports and portfolio documentation.",
    signal: "Shows communication habits that support technical work."
  },
  Documentation: {
    body: "Clear technical breakdowns, limitations and project framing for reviewers.",
    signal: "Reduces recruiter uncertainty and supports interviews."
  }
};

const loadMotion = async () => {
  const motionModules = [
    import("gsap"),
    import("gsap/ScrollTrigger"),
    import("animejs")
  ] as const;
  const [{ gsap }, { ScrollTrigger }, Anime] = await Promise.all(motionModules);
  const LenisModule = reducedMotion ? undefined : await import("lenis");

  gsap.registerPlugin(ScrollTrigger);

  return {
    gsap,
    ScrollTrigger,
    Lenis: LenisModule?.default,
    Anime
  };
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const initProgress = () => {
  const progressBar = document.querySelector<HTMLElement>("[data-scroll-progress]");
  if (!progressBar) return;

  let ticking = false;
  const updateProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    progressBar.style.transform = `scaleX(${clamp(progress, 0, 1)})`;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateProgress();
};

const initLenis = (
  Lenis: (new (options: Record<string, unknown>) => { raf: (time: number) => void; on: (event: "scroll", cb: () => void) => unknown }) | undefined,
  ScrollTrigger: ScrollTriggerLike | undefined
) => {
  if (!Lenis || reducedMotion || window.innerWidth < 720) return;

  const lenis = new Lenis({
    duration: 1.04,
    lerp: 0.085,
    smoothWheel: true,
    wheelMultiplier: 0.82,
    touchMultiplier: 1
  });

  lenis.on("scroll", () => ScrollTrigger?.update());

  const raf = (time: number) => {
    lenis.raf(time);
    window.requestAnimationFrame(raf);
  };

  window.requestAnimationFrame(raf);
};

const initTechPopover = () => {
  let activeTechButton: HTMLElement | null = null;
  const techPopover = document.createElement("div");
  techPopover.className = "tech-popover";
  techPopover.setAttribute("role", "status");
  techPopover.setAttribute("aria-live", "polite");

  const closeTechPopover = () => {
    activeTechButton?.setAttribute("aria-expanded", "false");
    activeTechButton = null;
    techPopover.remove();
  };

  const positionTechPopover = (button: HTMLElement) => {
    const rect = button.getBoundingClientRect();
    const width = Math.min(336, window.innerWidth - 24);
    const left = clamp(rect.left + rect.width / 2 - width / 2, 12, window.innerWidth - width - 12);
    const top = Math.min(rect.bottom + 10, window.innerHeight - 24);
    techPopover.style.width = `${width}px`;
    techPopover.style.left = `${left}px`;
    techPopover.style.top = `${top}px`;
  };

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      closeTechPopover();
      return;
    }

    const techButton = target.closest<HTMLElement>("[data-tech-tag]");
    if (!techButton) {
      if (!target.closest(".tech-popover")) closeTechPopover();
      return;
    }

    event.preventDefault();
    const label = techButton.dataset.techLabel ?? techButton.textContent?.trim() ?? "";
    const insight = techInsights[label] ?? {
      body: "Relevant tool or workflow signal for this project.",
      signal: "Shown in context rather than listed as a loose keyword."
    };

    if (activeTechButton === techButton) {
      closeTechPopover();
      return;
    }

    closeTechPopover();
    activeTechButton = techButton;
    techButton.setAttribute("aria-expanded", "true");
    techPopover.innerHTML = `
      <strong>${label}</strong>
      <p>${insight.body}</p>
      <span>${insight.signal}</span>
    `;
    document.body.append(techPopover);
    positionTechPopover(techButton);
  });

  window.addEventListener("resize", closeTechPopover);
  window.addEventListener("scroll", closeTechPopover, { passive: true });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeTechPopover();
  });
};

const initCardExpansion = (gsap: GsapLike | undefined) => {
  let activeLayer: HTMLElement | null = null;
  let activeCard: HTMLElement | null = null;
  let activePlaceholder: HTMLElement | null = null;
  let activeOriginRect: DOMRect | null = null;
  let activeInlineStyle: string | null = null;
  let activeMediaTrigger: HTMLElement | null = null;
  let mediaViewer: HTMLElement | null = null;
  let closeTimer = 0;

  const clearCloseTimer = () => {
    if (closeTimer) window.clearTimeout(closeTimer);
    closeTimer = 0;
  };

  const getFocusState = (rect: DOMRect) => {
    const marginX = window.innerWidth < 760 ? 14 : 72;
    const marginY = window.innerWidth < 760 ? 18 : 74;
    const scaleByWidth = (window.innerWidth - marginX * 2) / rect.width;
    const scaleByHeight = (window.innerHeight - marginY * 2) / rect.height;
    const isAlreadyLarge = rect.width > window.innerWidth * 0.62 || rect.height > window.innerHeight * 0.72;
    const desiredScale = window.innerWidth < 760 ? 0.985 : isAlreadyLarge ? 0.98 : rect.width < 520 ? 1.08 : 1.045;
    const scale = Math.min(desiredScale, scaleByWidth, scaleByHeight, 1.08);
    const targetLeft = (window.innerWidth - rect.width * scale) / 2;
    const targetTop = (window.innerHeight - rect.height * scale) / 2;

    return {
      scale,
      x: targetLeft - rect.left - (rect.width * (1 - scale)) / 2,
      y: targetTop - rect.top - (rect.height * (1 - scale)) / 2
    };
  };

  const schedulePointerClose = (event: PointerEvent) => {
    if (!activeCard || mediaViewer || event.pointerType === "touch") return;

    const rect = activeCard.getBoundingClientRect();
    const margin = 78;
    const outside =
      event.clientX < rect.left - margin ||
      event.clientX > rect.right + margin ||
      event.clientY < rect.top - margin ||
      event.clientY > rect.bottom + margin;

    if (outside && !closeTimer) {
      closeTimer = window.setTimeout(() => closeFocusedCard(), 720);
      activeCard.classList.add("is-soft-closing");
    }

    if (!outside) {
      clearCloseTimer();
      activeCard.classList.remove("is-soft-closing");
    }
  };

  const closeMediaViewer = () => {
    if (!mediaViewer) return;

    const viewer = mediaViewer;
    mediaViewer = null;

    if (gsap) {
      gsap.to(viewer.querySelector(".project-media-viewer-backdrop"), {
        opacity: 0,
        duration: 0.22,
        ease: "power2.out"
      });
      gsap.to(viewer.querySelector(".project-media-viewer-figure"), {
        opacity: 0,
        scale: 0.985,
        y: 8,
        duration: 0.28,
        ease: "power2.inOut",
        onComplete: () => viewer.remove()
      });
    } else {
      viewer.remove();
    }
  };

  const openMediaViewer = (card: HTMLElement) => {
    const media = card.querySelector<HTMLImageElement>(".project-card-media-button img");
    if (!media || mediaViewer) return;

    const title = card.querySelector("h3")?.textContent?.trim() ?? "Project image";
    const caption = card.querySelector(".project-media-caption")?.textContent?.trim() ?? "";
    const subtitle = card.querySelector(".project-subtitle")?.textContent?.trim() ?? "";
    const viewer = document.createElement("div");
    const backdrop = document.createElement("button");
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    const titleNode = document.createElement("span");
    const captionNode = document.createElement("p");

    viewer.className = "project-media-viewer";
    backdrop.className = "project-media-viewer-backdrop";
    backdrop.type = "button";
    backdrop.setAttribute("aria-label", "Close project image viewer");
    figure.className = "project-media-viewer-figure";
    figure.tabIndex = -1;
    image.src = media.currentSrc || media.src;
    image.alt = media.alt;
    titleNode.textContent = title;
    captionNode.textContent = caption || subtitle;
    figcaption.append(titleNode, captionNode);
    figure.append(image, figcaption);
    viewer.append(backdrop, figure);
    document.body.append(viewer);
    mediaViewer = viewer;

    backdrop.addEventListener("click", closeMediaViewer);
    figure.addEventListener("click", (event) => event.stopPropagation());
    figure.focus({ preventScroll: true });

    if (gsap) {
      gsap.set(backdrop, { opacity: 0 });
      gsap.fromTo(
        figure,
        { opacity: 0, scale: 0.955, y: 18, filter: "blur(10px)" },
        { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 0.54, ease: "power3.out" }
      );
      gsap.to(backdrop, { opacity: 1, duration: 0.28, ease: "power2.out" });
    }
  };

  const restoreCardState = (card: HTMLElement) => {
    card.classList.remove("project-card-focused", "is-soft-closing");
    if (activeInlineStyle === null) card.removeAttribute("style");
    else card.setAttribute("style", activeInlineStyle);

    activeMediaTrigger?.removeAttribute("data-project-detail");
    activeMediaTrigger?.setAttribute("data-project-expand", "");
    activeMediaTrigger?.setAttribute("aria-label", `Expand ${card.querySelector("h3")?.textContent?.trim() ?? "project"} project card`);
    activeMediaTrigger = null;
  };

  const closeFocusedCard = () => {
    if (!activeLayer || !activeCard) return;

    clearCloseTimer();
    document.removeEventListener("pointermove", schedulePointerClose);
    if (mediaViewer) closeMediaViewer();

    const destinationRect = activePlaceholder?.getBoundingClientRect();
    const originRect = activeOriginRect;
    const card = activeCard;
    const placeholder = activePlaceholder;
    const layer = activeLayer;
    const endState = destinationRect && originRect
      ? {
          x: destinationRect.left - originRect.left,
          y: destinationRect.top - originRect.top,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          scale: Math.min(destinationRect.width / originRect.width, destinationRect.height / originRect.height),
          opacity: 1
        }
      : { opacity: 0, scale: 0.98, z: 0, rotationX: 0, rotationY: 0 };
    if (destinationRect && originRect) {
      endState.x = destinationRect.left - originRect.left - (originRect.width * (1 - endState.scale)) / 2;
      endState.y = destinationRect.top - originRect.top - (originRect.height * (1 - endState.scale)) / 2;
    }

    const cleanup = () => {
      placeholder?.parentNode?.insertBefore(card, placeholder);
      placeholder?.remove();
      restoreCardState(card);
      layer.remove();
      activeLayer = null;
      activeCard = null;
      activePlaceholder = null;
      activeOriginRect = null;
      activeInlineStyle = null;
      document.body.classList.remove("project-card-open");
    };

    if (gsap) {
      gsap.to(layer.querySelector(".project-card-focus-backdrop"), {
        opacity: 0,
        duration: 0.22,
        ease: "power2.out"
      });
      gsap.to(card.querySelectorAll(".project-secondary-stack, .project-card-extra"), {
        opacity: 0,
        y: 10,
        filter: "blur(8px)",
        duration: 0.22,
        ease: "power2.out"
      });
      gsap.to(card, {
        ...endState,
        duration: 0.54,
        ease: "expo.inOut",
        onComplete: cleanup
      });
    } else {
      cleanup();
    }
  };

  const openFocusedCard = (source: HTMLElement) => {
    if (activeCard) closeFocusedCard();

    const rect = source.getBoundingClientRect();
    const layer = document.createElement("div");
    const backdrop = document.createElement("button");
    const placeholder = document.createElement("div");
    const focusState = getFocusState(rect);
    const title = source.querySelector("h3")?.textContent?.trim() ?? "project";
    const mediaTrigger = source.querySelector<HTMLElement>("[data-project-expand]");

    layer.className = "project-card-focus-layer";
    backdrop.className = "project-card-focus-backdrop";
    backdrop.type = "button";
    backdrop.setAttribute("aria-label", "Close selected project card");
    placeholder.className = "project-card-placeholder";
    placeholder.style.height = `${rect.height}px`;
    placeholder.style.minHeight = `${rect.height}px`;
    source.classList.add("project-card-focused");
    if (mediaTrigger) {
      mediaTrigger.removeAttribute("data-project-expand");
      mediaTrigger.setAttribute("data-project-detail", "");
      mediaTrigger.setAttribute("aria-label", `Inspect ${title} image`);
    }

    activeInlineStyle = source.getAttribute("style");
    source.parentNode?.insertBefore(placeholder, source);
    layer.append(backdrop, source);
    document.body.append(layer);
    document.body.classList.add("project-card-open");

    Object.assign(source.style, {
      position: "fixed",
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transform: "translate3d(0, 0, 0) scale(1)",
      zIndex: "121"
    });

    activeLayer = layer;
    activeCard = source;
    activePlaceholder = placeholder;
    activeOriginRect = rect;
    activeMediaTrigger = mediaTrigger;

    backdrop.addEventListener("click", closeFocusedCard);
    document.addEventListener("pointermove", schedulePointerClose);

    if (gsap) {
      gsap.set(backdrop, { opacity: 0 });
      gsap.killTweensOf(source);
      gsap.set(source, {
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        transformPerspective: 1400,
        transformOrigin: "50% 50%"
      });
      gsap.set(source.querySelectorAll(".project-secondary-stack, .project-card-extra"), { opacity: 0, y: 14, filter: "blur(10px)" });
      gsap.fromTo(
        source.querySelectorAll(".project-media-caption, .project-card-body > *:not(.project-secondary-stack):not(.project-card-extra)"),
        { opacity: 0.56, y: 10, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.58, stagger: 0.035, ease: "power3.out" }
      );
      gsap.to(backdrop, { opacity: 1, duration: 0.26, ease: "power2.out" });
      gsap.fromTo(
        source,
        {
          x: 0,
          y: 0,
          z: -12,
          rotationX: 0,
          rotationY: 0,
          scale: 0.995
        },
        {
          x: focusState.x,
          y: focusState.y,
          z: window.innerWidth < 760 ? 18 : 54,
          rotationX: window.innerWidth < 760 ? 0 : -1.05,
          rotationY: window.innerWidth < 760 ? 0 : 1.6,
          scale: focusState.scale,
          duration: 0.82,
          ease: "expo.out"
        }
      );
      gsap.to(source.querySelectorAll(".project-secondary-stack, .project-card-extra"), {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.56,
        delay: 0.2,
        stagger: 0.055,
        ease: "power3.out"
      });
    } else {
      source.style.transform = `translate3d(${focusState.x}px, ${focusState.y}px, 0) scale(${focusState.scale})`;
    }
  };

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const detailTrigger = target.closest<HTMLElement>("[data-project-detail]");
    if (detailTrigger && activeCard?.contains(detailTrigger)) {
      event.preventDefault();
      openMediaViewer(activeCard);
      return;
    }

    const trigger = target.closest<HTMLElement>("[data-project-expand]");
    if (trigger && !trigger.closest(".project-card-focused")) {
      const card = trigger.closest<HTMLElement>("[data-project-card]");
      if (!card) return;
      event.preventDefault();
      openFocusedCard(card);
      return;
    }

    const card = target.closest<HTMLElement>("[data-project-card]");
    if (!card) return;
    if (card.closest(".project-card-focused")) return;
    if (target.closest("a, button, [data-tech-tag], .tech-popover")) return;

    event.preventDefault();
    openFocusedCard(card);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (mediaViewer) closeMediaViewer();
    else closeFocusedCard();
  });
};

const splitHeadingWords = (heading: HTMLElement) => {
  if (heading.dataset.splitReady === "true") return;
  const words = heading.textContent?.trim().split(/\s+/).filter(Boolean) ?? [];
  if (words.length < 2) return;

  heading.textContent = "";
  words.forEach((word, index) => {
    const mask = document.createElement("span");
    const inner = document.createElement("span");
    mask.className = "word-mask";
    inner.className = "word-body";
    inner.textContent = word;
    mask.append(inner);
    heading.append(mask);
    if (index < words.length - 1) heading.append(document.createTextNode(" "));
  });
  heading.dataset.splitReady = "true";
};

const initHeroMotion = (Anime: AnimeLike | undefined) => {
  if (!Anime) return;

  const titleLines = Array.from(document.querySelectorAll<HTMLElement>(".hero-title span"));
  if (titleLines.length) {
    Anime.animate(titleLines, {
      opacity: [0, 1],
      y: reducedMotion ? [0, 0] : [78, 0],
      rotateX: reducedMotion ? [0, 0] : [14, 0],
      filter: [reducedMotion ? "blur(5px)" : "blur(18px)", "blur(0px)"],
      duration: reducedMotion ? 560 : 1350,
      delay: Anime.stagger(reducedMotion ? 70 : 150, { start: reducedMotion ? 40 : 120 }),
      ease: "out(4)"
    });
  }

  const heroElements = Array.from(document.querySelectorAll<HTMLElement>(".hero-copy, .hero .tag-row, .hero-actions, .hero-visual"));
  if (heroElements.length) {
    Anime.animate(heroElements, {
      opacity: [0, 1],
      y: reducedMotion ? [0, 0] : [42, 0],
      scale: reducedMotion ? [1, 1] : [0.975, 1],
      filter: [reducedMotion ? "blur(4px)" : "blur(14px)", "blur(0px)"],
      duration: reducedMotion ? 520 : 1150,
      delay: Anime.stagger(reducedMotion ? 50 : 120, { start: reducedMotion ? 120 : 560 }),
      ease: "out(4)"
    });
  }

  document.querySelectorAll<HTMLElement>("[data-scramble]").forEach((element) => {
    if (reducedMotion) return;
    Anime.animate(element, {
      innerHTML: Anime.scrambleText({
        chars: "01/\\_ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        revealRate: 0.66,
        settleDuration: 260
      }),
      duration: 820,
      delay: 120,
      ease: "out(2)"
    });
  });
};

const initReveals = (gsap: GsapLike | undefined, ScrollTrigger: ScrollTriggerLike | undefined, Anime: AnimeLike | undefined) => {
  const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

  if (!gsap || !ScrollTrigger) {
    revealElements.forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    });
    return;
  }

  document
    .querySelectorAll<HTMLElement>(".section-intro h2, .case-section > h2, .case-hero h1, .about-hero h1, .contact-hero h1")
    .forEach(splitHeadingWords);

  ScrollTrigger.batch(revealElements, {
    start: "top 86%",
    once: true,
    onEnter: (batch) => {
      const targets = (batch as HTMLElement[]).filter((element) => element.dataset.revealed !== "true");
      targets.forEach((element) => {
        element.dataset.revealed = "true";
      });
      if (!targets.length) return;

      if (Anime) {
        Anime.animate(targets, {
          opacity: [0, 1],
          y: reducedMotion ? [0, 0] : [58, 0],
          scale: reducedMotion ? [1, 1] : [0.985, 1],
          filter: [reducedMotion ? "blur(5px)" : "blur(14px)", "blur(0px)"],
          duration: reducedMotion ? 540 : 1150,
          delay: Anime.stagger(reducedMotion ? 45 : 95),
          ease: "out(4)"
        });
      } else {
        gsap.fromTo(
          targets,
          {
            autoAlpha: 0,
            y: reducedMotion ? 0 : 58,
            scale: reducedMotion ? 1 : 0.985,
            filter: reducedMotion ? "blur(5px)" : "blur(14px)"
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.95,
            stagger: 0.095,
            ease: "power3.out"
          }
        );
      }
    }
  });

  document.querySelectorAll<HTMLElement>(".word-body").forEach((word) => {
    ScrollTrigger.create({
      trigger: word.closest("h1, h2") ?? word,
      start: "top 88%",
      once: true,
      onEnter: () => {
        if (Anime) {
          Anime.animate(word, {
            opacity: [0, 1],
            y: reducedMotion ? ["0%", "0%"] : ["115%", "0%"],
            duration: reducedMotion ? 460 : 760,
            ease: "out(4)"
          });
        } else {
          gsap.fromTo(word, { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.72, ease: "power3.out" });
        }
      }
    });
  });

  document.querySelectorAll<HTMLElement>("[data-story-step]").forEach((step) => {
    ScrollTrigger.create({
      trigger: step,
      start: "top 58%",
      end: "bottom 42%",
      onEnter: () => step.classList.add("is-active"),
      onEnterBack: () => step.classList.add("is-active"),
      onLeave: () => step.classList.remove("is-active"),
      onLeaveBack: () => step.classList.remove("is-active")
    });
  });

  document.querySelectorAll<HTMLElement>(".scroll-story").forEach((story) => {
    const media = story.querySelector(".scroll-story-media");
    if (!media || reducedMotion) return;
    gsap.fromTo(
      media,
      { y: 32 },
      {
        y: -22,
        ease: "none",
        scrollTrigger: {
          trigger: story,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.65
        }
      }
    );
  });
};

const initPinnedSections = (gsap: GsapLike | undefined, ScrollTrigger: ScrollTriggerLike | undefined) => {
  if (!gsap || !ScrollTrigger || window.innerWidth < 981) return;

  document.querySelectorAll<HTMLElement>(".sticky-proof-section").forEach((section) => {
    const copy = section.querySelector<HTMLElement>(".sticky-proof-copy");
    const track = section.querySelector<HTMLElement>(".sticky-proof-track");
    if (!copy || !track) return;

    ScrollTrigger.create({
      trigger: section,
      start: "top 52%",
      end: "bottom 36%",
      invalidateOnRefresh: true,
      onEnter: () => copy.classList.add("is-pinned-read"),
      onEnterBack: () => copy.classList.add("is-pinned-read"),
      onLeave: () => copy.classList.remove("is-pinned-read"),
      onLeaveBack: () => copy.classList.remove("is-pinned-read")
    });

    gsap.fromTo(
      track.querySelectorAll(".project-card"),
      {
        y: reducedMotion ? 0 : 72,
        autoAlpha: 0,
        scale: reducedMotion ? 1 : 0.97,
        filter: reducedMotion ? "blur(5px)" : "blur(14px)"
      },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        filter: "blur(0px)",
        stagger: reducedMotion ? 0.08 : 0.16,
        duration: reducedMotion ? 0.54 : 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true
        },
        immediateRender: false
      }
    );
  });

  document.querySelectorAll<HTMLElement>(".scroll-story").forEach((story) => {
    const media = story.querySelector<HTMLElement>(".scroll-story-media");
    const steps = story.querySelector<HTMLElement>(".scroll-story-steps");
    if (!media || !steps) return;

    ScrollTrigger.create({
      trigger: story,
      start: "top 58%",
      end: "bottom 40%",
      invalidateOnRefresh: true,
      onEnter: () => media.classList.add("is-pinned-read"),
      onEnterBack: () => media.classList.add("is-pinned-read"),
      onLeave: () => media.classList.remove("is-pinned-read"),
      onLeaveBack: () => media.classList.remove("is-pinned-read")
    });
  });
};

const initEvidenceMotion = (gsap: GsapLike | undefined, ScrollTrigger: ScrollTriggerLike | undefined, Anime: AnimeLike | undefined) => {
  if (!gsap || !ScrollTrigger || !Anime) return;

  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(
      [
        ".feature-grid article",
        ".breakdown-grid article",
        ".metric-block",
        ".pipeline-timeline li",
        ".visual-modes-grid article",
        ".case-meta div",
        ".identity-panel div",
        ".signal-card",
        ".process-map article",
        ".contact-status",
        ".contact-form label",
        ".contact-panel"
      ].join(", ")
    )
  ).filter((element) => element.dataset.evidenceMotion !== "true");

  if (!elements.length) return;

  elements.forEach((element) => {
    element.dataset.evidenceMotion = "true";
  });

  ScrollTrigger.batch(elements, {
    start: "top 88%",
    once: true,
    onEnter: (batch) => {
      const targets = (batch as HTMLElement[]).filter((element) => element.dataset.evidenceRevealed !== "true");
      targets.forEach((element) => {
        element.dataset.evidenceRevealed = "true";
      });
      if (!targets.length) return;

      Anime.animate(targets, {
        opacity: [0, 1],
        y: reducedMotion ? [0, 0] : [34, 0],
        rotateX: reducedMotion ? [0, 0] : [-2, 0],
        filter: [reducedMotion ? "blur(4px)" : "blur(10px)", "blur(0px)"],
        duration: reducedMotion ? 500 : 920,
        delay: Anime.stagger(reducedMotion ? 35 : 55),
        ease: "out(4)"
      });
    }
  });
};

const initSiteInteractions = async () => {
  initProgress();
  initTechPopover();

  const { gsap, ScrollTrigger, Lenis, Anime } = await loadMotion();
  initLenis(Lenis, ScrollTrigger);
  initHeroMotion(Anime);
  initCardExpansion(gsap);
  initReveals(gsap, ScrollTrigger, Anime);
  initEvidenceMotion(gsap, ScrollTrigger, Anime);
  initPinnedSections(gsap, ScrollTrigger);
};

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      void initSiteInteractions();
    },
    { once: true }
  );
} else {
  void initSiteInteractions();
}

export {};
