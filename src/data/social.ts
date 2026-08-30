export interface FeedItem {
  id: string;
  handle: string;
  tag: string;
  caption: string;
  date: string;
  likes: string;
  image: string;
  aspect: "1:1" | "4:5" | "16:9";
  link: string;
}

export const PDT_FEED: FeedItem[] = [
  {
    id: "post-1",
    handle: "@pdtttttttt._",
    tag: "BRAND IDENTITY",
    caption:
      "Official brand mark for Pragyan Design Team (NIT Trichy). Ideas • Identity • Impact. #PDT #NITTrichy #Pragyan #DesignTeam",
    date: "RECENT POST",
    likes: "Verified",
    image: "/src/assets/images/pdt-logo.png",
    aspect: "1:1",
    link: "https://www.instagram.com/pdtttttttt._/",
  },
  {
    id: "post-2",
    handle: "@pdtttttttt._",
    tag: "EVENT POSTER",
    caption:
      "Swiss grid experiments & typographic hierarchy for upcoming festival keynote sessions. #DesignEcosystem #Pragyan #GraphicDesign",
    date: "FEATURED",
    likes: "Verified",
    image: "/src/assets/images/graphic_editorial_poster_1788015515482.jpg",
    aspect: "4:5",
    link: "https://www.instagram.com/pdtttttttt._/",
  },
  {
    id: "post-3",
    handle: "@pdtttttttt._",
    tag: "FESTIVAL THEME",
    caption:
      "Monolithic stage projections and volumetric environments for Pragyan. ISO 9001 & ISO 20121 certified. #PragyanFest #NITTrichy #StageDesign",
    date: "CAMPUS ARCHIVE",
    likes: "Verified",
    image: "/src/assets/images/pragyan_monolith_fest_1788015494100.jpg",
    aspect: "16:9",
    link: "https://www.instagram.com/pdtttttttt._/",
  },
  {
    id: "post-4",
    handle: "@pdtttttttt._",
    tag: "3D & MOTION",
    caption:
      "Procedural light refractions, tactile iridescence, and kinetic loops crafted for festival displays. #Blender #Octane #MotionDesign",
    date: "STUDIO LOG",
    likes: "Verified",
    image: "/src/assets/images/threed_render_sculpt_1788015532339.jpg",
    aspect: "1:1",
    link: "https://www.instagram.com/pdtttttttt._/",
  },
];
