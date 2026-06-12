import React, { useMemo, useState } from "react";
import type { FocusVariant } from "@data/focusVariants";

type Props = {
  variants: FocusVariant[];
};

export default function FocusVariantSwitcher({ variants }: Props) {
  const [activeSlug, setActiveSlug] = useState(variants[0]?.slug ?? "");
  const active = useMemo(
    () => variants.find((variant) => variant.slug === activeSlug) ?? variants[0],
    [activeSlug, variants]
  );

  if (!active) return null;

  return React.createElement(
    "section",
    { className: "variant-switcher" },
    React.createElement(
      "div",
      { className: "variant-tabs", role: "tablist", "aria-label": "Portfolio focus variants" },
      variants.map((variant) =>
        React.createElement(
          "button",
          {
            key: variant.slug,
            type: "button",
            className: variant.slug === active.slug ? "is-active" : "",
            onClick: () => setActiveSlug(variant.slug),
            role: "tab",
            "aria-selected": variant.slug === active.slug
          },
          variant.label
        )
      )
    ),
    React.createElement(
      "div",
      { className: "variant-panel", key: active.slug },
      React.createElement("p", { className: "eyebrow" }, active.eyebrow),
      React.createElement("h3", null, active.title),
      React.createElement("p", null, active.summary),
      React.createElement(
        "ul",
        null,
        active.proofPoints.map((point) => React.createElement("li", { key: point }, point))
      ),
      React.createElement(
        "a",
        { className: "text-link", href: `/focus/${active.slug}` },
        "Open this focus route ",
        React.createElement("span", { "aria-hidden": "true" }, "->")
      )
    )
  );
}
