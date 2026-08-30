export interface PragyanInfo {
  title: string;
  festFullName: string;
  institution: string;
  certifications: string[];
  roleOfPDT: string;
  manifesto: string[];
  stats: { label: string; value: string; note: string }[];
  thematicTimeline: { year: string; title: string; focus: string }[];
}

export const PRAGYAN_DATA: PragyanInfo = {
  title: "PRAGYAN",
  festFullName: "Pragyan — International Techno-Managerial Festival",
  institution: "National Institute of Technology, Tiruchirappalli",
  certifications: [
    "ISO 9001:2015 Quality Management Systems",
    "ISO 20121:2012 Sustainable Events Management",
  ],
  roleOfPDT:
    "The Design Team shapes Pragyan's visual identity by creating themes, logos, social media content, and branding materials. The team turns ideas into compelling visuals that bring Pragyan's vision to life.",
  manifesto: [
    "Every line, curve, and frame created by PDT serves a singular purpose: giving tangible form to the intellect, energy, and innovation of Pragyan.",
    "From monumental stage LED backdrops to the precision of a 16px digital icon, we curate the visual universe that thousands of delegates experience across NIT Trichy.",
    "Design at Pragyan is not decoration. It is visual architecture.",
  ],
  stats: [
    {
      label: "Certifications",
      value: "ISO 9001 & 20121",
      note: "Globally standardized event quality and sustainability standards",
    },
    {
      label: "Design Domains",
      value: "6 Core Ecosystems",
      note: "Graphic Design, Digital Art, UI/UX, 3D, Video, and Photography",
    },
    {
      label: "Visual Impact",
      value: "Campus-Wide",
      note: "Stage visual loops, digital portals, physical banners, and digital feeds",
    },
    {
      label: "Institutional Home",
      value: "NIT Trichy",
      note: "National Institute of Technology, Tiruchirappalli",
    },
  ],
  thematicTimeline: [
    {
      year: "Pragyan '26",
      title: "Visual Vanguard",
      focus: "Unified dynamic dimensional design, responsive identity systems, and hybrid digital experiences.",
    },
    {
      year: "Pragyan '25",
      title: "Cybernetic Horizon",
      focus: "High-contrast neon kinetic typography, procedural stage projections, and architectural campus graphics.",
    },
    {
      year: "Pragyan '24",
      title: "Chronicles of Innovation",
      focus: "Thematic digital matte painting, custom dimensional monograms, and immersive fest portals.",
    },
  ],
};

export const CONCEPTUAL_PIPELINE = [
  {
    step: "01",
    phase: "IDEA",
    subtitle: "The Conceptual Spark",
    description:
      "A raw concept, event brief, or thematic thesis from the Pragyan committee.",
    detail: "Abstract thinking, moodboarding, brainstorming, and creative problem framing.",
    accent: "#3B82F6",
  },
  {
    step: "02",
    phase: "FORM",
    subtitle: "Structural Geometry",
    description:
      "Translating abstract thought into geometric silhouettes, typographic grids, and 3D wireframes.",
    detail: "Vector drafting, proportions, mathematical grids, and volumetric sculpting.",
    accent: "#6C2BD9",
  },
  {
    step: "03",
    phase: "VISUAL",
    subtitle: "Color, Texture & Light",
    description:
      "Injecting dynamic chromatic gradients, atmospheric lighting, and high-fidelity textures.",
    detail: "Palette curation, shader mapping, raster detailing, and digital rendering.",
    accent: "#D926A9",
  },
  {
    step: "04",
    phase: "IDENTITY",
    subtitle: "The Unified System",
    description:
      "Coalescing individual artworks into cohesive brand guidelines, motion kits, and guidelines.",
    detail: "Cross-platform consistency across print, web, LED screens, and social channels.",
    accent: "#F95738",
  },
  {
    step: "05",
    phase: "PRAGYAN",
    subtitle: "The Living Experience",
    description:
      "The complete visual world experienced by thousands across the NIT Trichy campus.",
    detail: "Live celebration of technology, management, art, and human creativity.",
    accent: "#E2E8F0",
  },
];
