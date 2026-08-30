export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "GRAPHIC DESIGN" | "DIGITAL ART" | "UI/UX" | "3D MODELLING" | "MOTION & VIDEO" | "PHOTOGRAPHY" | "BRAND IDENTITY";
  year: string;
  ratio: "16:9" | "3:4" | "4:3" | "1:1" | "3:2";
  image: string;
  overview: string;
  artDirection: string;
  deliverables: string[];
  palette: string[];
  typography: string;
  tools: string[];
  featured?: boolean;
}

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: "pdt-monogram-brand",
    number: "EXHIBIT 01",
    title: "PDT MONOGRAM IDENTITY SYSTEM",
    subtitle: "Ideas • Identity • Impact — Official Brand Mark",
    category: "BRAND IDENTITY",
    year: "2025-2026",
    ratio: "1:1",
    image: "/src/assets/images/pdt-logo.png",
    overview:
      "The official brand mark of Pragyan Design Team (NIT Trichy). An interlocked geometric monogram combining the letters P, D, and T with glowing electric cyan-blue contours, solid delta arrow aperture in the 'D', and the iconic motto 'Ideas • Identity • Impact'.",
    artDirection:
      "Sharp bevels, electric neon edges, and deep radial illumination. The letter 'P' interlocks with 'D' and 'T' to create an unbroken structural flow representing unity across design disciplines.",
    deliverables: [
      "Master Brand Logo & Vector Suite",
      "Dynamic Colorway Specifications",
      "Official Motto & Lockup Guidelines",
      "Dark Surface & Print Application Standards",
      "Official Motion Reveal Assets",
    ],
    palette: ["#040814", "#1A56DB", "#38BDF8", "#6C2BD9", "#E2E8F0", "#FFFFFF"],
    typography: "Custom Geometric Monogram + High-Tracking Display Sans",
    tools: ["Adobe Illustrator", "Photoshop", "Blender", "After Effects"],
    featured: true,
  },
  {
    id: "pragyan-monolith-visuals",
    number: "EXHIBIT 02",
    title: "PRAGYAN FESTIVAL ARCHITECTURE & THEME KEY ART",
    subtitle: "Volumetric Atmospheres for ISO-Certified Techno-Managerial Fest",
    category: "DIGITAL ART",
    year: "2025-2026",
    ratio: "16:9",
    image: "/src/assets/images/pragyan_monolith_fest_1788015494100.jpg",
    overview:
      "Pragyan at NIT Trichy is one of India's largest student-run techno-managerial festivals, held under the prestigious ISO 9001 and ISO 20121 certifications. PDT sculpts the entire visual universe: from monolithic stage installations to nocturnal ambient environments.",
    artDirection:
      "Deep cobalt shadows contrasted with ultraviolet and amber volumetric lighting. The visual composition establishes grand scale, inspiring thousands of delegates across engineering and managerial domains.",
    deliverables: [
      "Mainstage LED Backdrop Sequences",
      "Official Theme Key Art",
      "Projections & Arena Identity",
      "Social Media Campaign Headers",
      "Opening Ceremony Keynote Visuals",
    ],
    palette: ["#050814", "#1E3A8A", "#6D28D9", "#D97706", "#F59E0B"],
    typography: "Syne 800 & Space Grotesk 600",
    tools: ["Photoshop", "Blender", "After Effects", "DaVinci Resolve"],
    featured: true,
  },
  {
    id: "pragyan-portal-design-system",
    number: "EXHIBIT 03",
    title: "FESTIVAL OS & DELEGATE EXPERIENCE PORTAL",
    subtitle: "Dark Glassmorphic UI/UX Architecture for 20,000+ Participants",
    category: "UI/UX",
    year: "2025-2026",
    ratio: "16:9",
    image: "/src/assets/images/uiux_glass_dashboard_1788020266207.jpg",
    overview:
      "A high-performance digital interface engine designed for the official Pragyan festival web applications, event registration dashboards, real-time live scoreboard displays, and campus event schedules.",
    artDirection:
      "Obsidian dark mode with luminous cobalt glassmorphic panels, ultra-refined border highlights, and real-time kinetic telemetry.",
    deliverables: [
      "Complete Responsive Design System in Figma",
      "Interactive Registration & Pass Checkout Flow",
      "Live Campus Schedule & Arena Navigation Maps",
      "Workshop & Guest Lecture Portals",
    ],
    palette: ["#05070E", "#0F172A", "#3B82F6", "#8B5CF6", "#10B981"],
    typography: "Plus Jakarta Sans & JetBrains Mono",
    tools: ["Figma", "Adobe Illustrator", "CSS Frameworks", "After Effects"],
    featured: true,
  },
  {
    id: "cinematic-motion-showreel",
    number: "EXHIBIT 04",
    title: "NEON KINETIC TRAILER & TEASER MOTION REEL",
    subtitle: "Fluid Physics, Glitch Typography & Anamorphic Particles",
    category: "MOTION & VIDEO",
    year: "2025-2026",
    ratio: "16:9",
    image: "/src/assets/images/video_motion_reel_1788020279285.jpg",
    overview:
      "The pulse-pounding official teaser trailer and motion sequence designed for the Pragyan social media reveals and inauguration arena screens.",
    artDirection:
      "High-energy bass-synced motion with anamorphic light trails, speed ramps, and procedural particle simulations in Octane Render.",
    deliverables: [
      "4K Official Festival Teaser Film",
      "Speaker Intro Motion Stingers",
      "Instagram 9:16 Kinetic Stories",
      "Opening Ceremony Countdown Sequence",
    ],
    palette: ["#040406", "#2563EB", "#7C3AED", "#F43F5E", "#F59E0B"],
    typography: "Syne ExtraBold & Space Grotesk",
    tools: ["Premiere Pro", "After Effects", "Blender", "DaVinci Resolve"],
    featured: true,
  },
  {
    id: "typographic-exhibition-posters",
    number: "EXHIBIT 05",
    title: "SWISS-BRUTALIST EVENT POSTER SERIES",
    subtitle: "Rigid Grids, Extreme Scale Contrast & Kinetic Accents",
    category: "GRAPHIC DESIGN",
    year: "2025",
    ratio: "3:4",
    image: "/src/assets/images/graphic_editorial_poster_1788015515482.jpg",
    overview:
      "A systematic poster design architecture created for flagship workshops, guest lectures, and competitive events during Pragyan. Designed for maximum legibility across campus walkways and high-density digital feeds.",
    artDirection:
      "Rigid Swiss asymmetric grid structures offset by expressive fluid gradient ribbons. High-contrast monochrome typography with neon ultramarine and vermilion accents.",
    deliverables: [
      "Series of 30+ Event Posters",
      "Print Resolution Walkway Signage",
      "Instagram Story Formats (9:16)",
      "Digital Schedule Banners",
      "Speaker Announcement Templates",
    ],
    palette: ["#0A0A0E", "#F8FAFC", "#2563EB", "#EF4444", "#94A3B8"],
    typography: "Syne Bold, JetBrains Mono, Plus Jakarta Sans",
    tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
    featured: true,
  },
  {
    id: "cinema-optics-coverage",
    number: "EXHIBIT 06",
    title: "NOCTURNAL CAMPUS OPTICS & CINEMA ARCHIVE",
    subtitle: "Anamorphic Flares, Night Documentaries & Crowds",
    category: "PHOTOGRAPHY",
    year: "2025",
    ratio: "16:9",
    image: "/src/assets/images/photography_camera_optics_1788020293658.jpg",
    overview:
      "Cinematic documentary photography and aftermovie videography capturing the spirit of 60,000+ footfalls across NIT Trichy's sprawling campus during festival nights.",
    artDirection:
      "Low-light prime optics with deep dynamic range, neon stage flares, and authentic human emotion.",
    deliverables: [
      "Master High-Res Festival Photo Archive",
      "Daily Highlights Aftermovie Edits",
      "Celebrity & Guest Speaker Portraits",
      "Golden Hour Campus Architectural Stills",
    ],
    palette: ["#020204", "#1E293B", "#38BDF8", "#F59E0B", "#F8FAFC"],
    typography: "Plus Jakarta Sans & Space Grotesk",
    tools: ["Sony Cinema Line", "DaVinci Resolve", "Adobe Lightroom", "Photoshop"],
    featured: true,
  },
  {
    id: "procedural-dimensional-sculptures",
    number: "EXHIBIT 07",
    title: "CHROME & AMETHYST 3D PROCEDURAL LOOPS",
    subtitle: "Tactile Iridescence and Stage Projections",
    category: "3D MODELLING",
    year: "2025",
    ratio: "4:3",
    image: "/src/assets/images/threed_render_sculpt_1788015532339.jpg",
    overview:
      "Explorations in physical material shaders, refractive glass, and chromatic dispersion developed for interactive event kiosks and stage ambient loops.",
    artDirection:
      "Intertwined fluid geometry reflecting studio light banks in deep space. Balancing computational geometry with organic grace.",
    deliverables: [
      "Seamless 4K Stage Loops",
      "Keynote Transition Stingers",
      "Web Hero 3D Assets",
      "Thematic Micro-animations",
    ],
    palette: ["#09090D", "#7C3AED", "#EC4899", "#3B82F6", "#F3F4F6"],
    typography: "Space Grotesk & JetBrains Mono",
    tools: ["Blender", "Cinema 4D", "Octane Render", "After Effects"],
    featured: false,
  },
];
