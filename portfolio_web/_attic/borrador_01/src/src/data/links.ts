export const links = {
  email: "[EMAIL]",
  cv: "[CV_PDF_URL]",
  portfolio: "[PORTFOLIO_URL]",
  linkedIn: "https://www.linkedin.com/in/alexander-woodcock-0132382a6/",
  githubProfile: "https://github.com/delarge95",
  artStation: "https://www.artstation.com/alexanderwoodcocksalomon3",
  twinsightGithub: "[GITHUB_URL]",
  twinsightDemo: "[DEMO_VIDEO_URL]",
  twinsightLiveDemo: "https://delarge95.github.io/WebGL-Thesis-Proposal/",
  humanArtStation: "[ARTSTATION_HUMAN_BREAKDOWN_URL]",
  araGithub: "[ARA_GITHUB_URL]"
} as const;

export const isPlaceholderLink = (href: string) => href.startsWith("[") && href.endsWith("]");
