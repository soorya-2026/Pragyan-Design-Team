export interface DomainItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  summary: string;
  deliverables: string[];
  tools: string[];
  accentColor: string;
  gradient: string;
  aspect: string;
  featuredVisual: string;
}

export const DESIGN_DOMAINS: DomainItem[] = [
  {
    id: "graphic-design",
    number: "01",
    title: "GRAPHIC DESIGN",
    slug: "graphic-design",
    summary:
      "Crafting the core visual language of Pragyan through systematic poster compositions, bespoke typography, environmental festival branding, and print media.",
    deliverables: [
      "Official Event Posters",
      "Fest Identity Guidelines",
      "Print Collateral & Merchandise",
      "Large-scale Stage Banners",
      "Guest Speaker Artworks",
    ],
    tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
    accentColor: "#1A56DB",
    gradient: "from-blue-600 via-indigo-600 to-violet-800",
    aspect: "3:4",
    featuredVisual: "/src/assets/images/graphic_editorial_poster_1788015515482.jpg",
  },
  {
    id: "digital-art",
    number: "02",
    title: "DIGITAL ART",
    slug: "digital-art",
    summary:
      "Translating thematic abstractions into rich, conceptual key visuals, digital matte compositions, and atmospheric narrative illustrations.",
    deliverables: [
      "Theme Key Artworks",
      "Editorial Concept Spreads",
      "Digital Matte Environments",
      "Thematic Character & World Design",
      "Social Campaign Visuals",
    ],
    tools: ["Photoshop", "Procreate", "Clip Studio Paint"],
    accentColor: "#6C2BD9",
    gradient: "from-purple-600 via-violet-700 to-indigo-900",
    aspect: "4:3",
    featuredVisual: "/src/assets/images/threed_render_sculpt_1788015532339.jpg",
  },
  {
    id: "ui-ux",
    number: "03",
    title: "UI / UX DESIGN",
    slug: "ui-ux",
    summary:
      "Architecting intuitive digital touchpoints, responsive festival portals, live event registration workflows, and interactive attendee interfaces.",
    deliverables: [
      "Pragyan Web Experience",
      "Event Registration Flows",
      "Mobile Responsive Interfaces",
      "Design Systems & Component Libraries",
      "Interactive Digital Schedules",
    ],
    tools: ["Figma", "Adobe XD", "Protopie"],
    accentColor: "#3B82F6",
    gradient: "from-cyan-500 via-blue-600 to-indigo-800",
    aspect: "16:9",
    featuredVisual: "/src/assets/images/uiux_glass_dashboard_1788020266207.jpg",
  },
  {
    id: "video-editing",
    number: "04",
    title: "VIDEO EDITING",
    slug: "video-editing",
    summary:
      "Directing dynamic visual rhythm through cinematic pacing, sound design synchronization, keynote openers, and official festival aftermovies.",
    deliverables: [
      "Theme Teaser Trailers",
      "Event Reveal Promos",
      "Guest Speaker Vignettes",
      "Daily Festival Highlights",
      "Official Pragyan Aftermovie",
    ],
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    accentColor: "#F95738",
    gradient: "from-orange-500 via-red-600 to-amber-700",
    aspect: "16:9",
    featuredVisual: "/src/assets/images/video_motion_reel_1788020279285.jpg",
  },
  {
    id: "three-d-modelling",
    number: "05",
    title: "3D MODELLING / ANIMATION",
    slug: "3d-modelling",
    summary:
      "Sculpting dimensional brand geometry, procedural stage visuals, kinetic typography loops, and tactile 3D brand marks that bridge the virtual and physical.",
    deliverables: [
      "3D Brand Monograms & Emblems",
      "Stage Projection Graphics",
      "Kinetic Motion Sequences",
      "Thematic 3D Environments",
      "Lighting & Shading Systems",
    ],
    tools: ["Blender", "After Effects", "Cinema 4D"],
    accentColor: "#38BDF8",
    gradient: "from-blue-600 via-indigo-600 to-purple-950",
    aspect: "1:1",
    featuredVisual: "/src/assets/images/pdt-logo.png",
  },
  {
    id: "photography-videography",
    number: "06",
    title: "PHOTOGRAPHY / VIDEOGRAPHY",
    slug: "photography",
    summary:
      "Documenting the electric atmosphere of Pragyan through high-speed stage captures, architectural campus perspectives, and cinematic live coverage.",
    deliverables: [
      "Live Arena & Keynote Photography",
      "Guest & Celebrity Portraits",
      "Atmospheric Fest Documentation",
      "Cinematic Drone Footage",
      "Social Storytelling Snaps",
    ],
    tools: ["Lightroom", "Photoshop", "DaVinci Resolve"],
    accentColor: "#10B981",
    gradient: "from-emerald-500 via-teal-600 to-cyan-800",
    aspect: "3:2",
    featuredVisual: "/src/assets/images/photography_camera_optics_1788020293658.jpg",
  },
];

export const TOOL_ECOSYSTEM = [
  { name: "Photoshop", category: "Raster & Imaging", role: "Key Art & Compositions" },
  { name: "Adobe Illustrator", category: "Vector Precision", role: "Logos, Vectors & Typography" },
  { name: "Figma", category: "Interface Architecture", role: "UI/UX & Web Experiences" },
  { name: "Procreate", category: "Digital Painting", role: "Concept Art & Illustrations" },
  { name: "Blender", category: "3D & Motion", role: "3D Models, Shading & Stage Visuals" },
  { name: "Premiere Pro", category: "Timeline Editing", role: "Cut, Audio Sync & Trailers" },
  { name: "After Effects", category: "Motion Graphics", role: "Kinetic Titles & Visual FX" },
  { name: "DaVinci Resolve", category: "Finishing & Color", role: "Color Grading & Mastering" },
];
