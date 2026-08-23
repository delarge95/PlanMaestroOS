import { projects } from "./projects";

export type FocusVariant = {
  slug: string;
  label: string;
  title: string;
  eyebrow: string;
  summary: string;
  primaryProjectId: string;
  supportingProjectIds: string[];
  proofPoints: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const focusVariants: FocusVariant[] = [
  {
    slug: "technical-visualization",
    label: "Technical Visualization",
    title: "Technical Visualization Developer",
    eyebrow: "For simulation, digital-twin-adjacent and industrial visualization roles",
    summary:
      "TwinSight X500 leads this route: a browser-based technical visualization prototype that makes complex assembly information inspectable in real time.",
    primaryProjectId: "twinsight",
    supportingProjectIds: ["human", "ara"],
    proofPoints: [
      "CAD-derived assets converted into optimized real-time geometry.",
      "Selection, exploded view, clipping and visual modes support inspection rather than decoration.",
      "Human adds Blender pipeline depth behind the asset workflow."
    ],
    ctaLabel: "View TwinSight case study",
    ctaHref: "/twinsight-x500"
  },
  {
    slug: "unity-webgl",
    label: "Unity WebGL",
    title: "Unity WebGL / Interactive 3D Developer",
    eyebrow: "For browser-based 3D, Unity deployment and interactive product roles",
    summary:
      "This route emphasizes Unity, C#, WebGL deployment, runtime interaction systems and no-install inspection workflows.",
    primaryProjectId: "twinsight",
    supportingProjectIds: ["ara", "human"],
    proofPoints: [
      "WebGL-first framing with browser delivery and interaction constraints.",
      "C# runtime systems coordinate selection, camera, clipping, visual modes and UI panels.",
      "ARA adds automation and documentation range as a secondary signal."
    ],
    ctaLabel: "Explore WebGL case",
    ctaHref: "/twinsight-x500"
  },
  {
    slug: "unity-technical-artist",
    label: "Unity Technical Artist",
    title: "Unity Technical Artist",
    eyebrow: "For technical art, rendering, optimization and hybrid art-dev roles",
    summary:
      "TwinSight and Human carry this route together: one in runtime systems, the other in asset craft, materials and presentation.",
    primaryProjectId: "twinsight",
    supportingProjectIds: ["human", "ara"],
    proofPoints: [
      "TwinSight shows optimization, visual modes, UI and real-time constraints.",
      "Human shows sculpting, topology, UVs, materials, grooming, lighting and render control.",
      "Together they communicate technical craft across runtime and production pipelines."
    ],
    ctaLabel: "See both pillars",
    ctaHref: "/work"
  },
  {
    slug: "3d-pipeline",
    label: "3D Pipeline",
    title: "3D Pipeline / Technical Art Portfolio",
    eyebrow: "For roles that care about Blender depth, asset craft and production literacy",
    summary:
      "Human leads this route as a complete Blender workflow study, then connects that craft back to TwinSight's real-time visualization pipeline.",
    primaryProjectId: "human",
    supportingProjectIds: ["twinsight", "ara"],
    proofPoints: [
      "Human shows sculpting, topology, UVs, texture/material thinking, grooming and lighting.",
      "TwinSight shows how 3D craft transfers into browser-based real-time visualization.",
      "The route stays technical rather than drifting into a pure character-artist identity."
    ],
    ctaLabel: "View Human breakdown",
    ctaHref: "/human-character-pipeline"
  }
];

export const getFocusVariant = (slug: string) => focusVariants.find((variant) => variant.slug === slug);

export const focusVariantProjects = (variant: FocusVariant) => {
  const orderedIds = [variant.primaryProjectId, ...variant.supportingProjectIds];
  return orderedIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
};
