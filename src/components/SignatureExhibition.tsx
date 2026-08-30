import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Eye, Sparkles } from "lucide-react";
import { SELECTED_PROJECTS, ProjectItem } from "../data/projects";
import { ProjectModal } from "./ProjectModal";
import { sound } from "../utils/audio";

export const SignatureExhibition: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scroll = (direction: "left" | "right") => {
    sound.playClick();
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -450 : 450;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleOpenProject = (project: ProjectItem) => {
    sound.playClick();
    setSelectedProject(project);
  };

  const handleNextProject = () => {
    sound.playClick();
    if (!selectedProject) return;
    const currentIndex = SELECTED_PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % SELECTED_PROJECTS.length;
    setSelectedProject(SELECTED_PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    sound.playClick();
    if (!selectedProject) return;
    const currentIndex = SELECTED_PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + SELECTED_PROJECTS.length) % SELECTED_PROJECTS.length;
    setSelectedProject(SELECTED_PROJECTS[prevIndex]);
  };

  return (
    <section
      id="work"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-[#0B0B0F] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-12 left-12 text-[140px] md:text-[220px] font-display font-extrabold text-white/[0.015] select-none pointer-events-none leading-none">
        03
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 tracking-[0.3em] uppercase mb-4">
              <span className="text-orange-400 font-bold">03</span>
              <span className="w-6 h-[1px] bg-neutral-700" />
              <span>THE WORK / EXHIBITION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
              SELECTED <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                CASE EXHIBITS
              </span>
            </h2>
          </div>

          {/* Exhibition Controls */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-xs font-mono text-neutral-400 mr-2">
              SCROLL OR DRAG TO EXPLORE
            </div>
            <button
              onClick={() => scroll("left")}
              onMouseEnter={() => sound.playHover()}
              aria-label="Scroll left in gallery"
              className="p-3 rounded-full border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white bg-neutral-900/60 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              onMouseEnter={() => sound.playHover()}
              aria-label="Scroll right in gallery"
              className="p-3 rounded-full border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white bg-neutral-900/60 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Signature Horizontal Work Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto py-12 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
        >
          {SELECTED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`exhibit-card-${project.id}`}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => sound.playHover()}
              onClick={() => handleOpenProject(project)}
              data-cursor="explore"
              className="flex-shrink-0 w-[300px] sm:w-[420px] md:w-[500px] snap-start rounded-3xl border border-white/[0.08] bg-neutral-900/40 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between group cursor-pointer shadow-xl transition-all duration-300 hover:border-white/20"
            >
              <div>
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-4 border-b border-white/[0.06] mb-5">
                  <span className="text-purple-400 font-bold">{project.number}</span>
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                {/* Main Visual Image Window */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-950 border border-white/[0.08] mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Hover Inspect Pill */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-tech text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-3 h-3 text-purple-400" />
                    <span>INSPECT EXHIBIT</span>
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase group-hover:text-purple-300 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-tech mt-1.5 line-clamp-2">
                  {project.subtitle}
                </p>
              </div>

              {/* Card Footer: Palette + Action */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {project.palette.slice(0, 4).map((color, cIdx) => (
                    <div
                      key={cIdx}
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs font-tech font-bold text-neutral-300 group-hover:text-white uppercase tracking-wider">
                  <span>VIEW CASE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Feature Spotlight: PDT Brand Monogram Architecture */}
        <div className="mt-8 p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-neutral-900/60 via-neutral-900/30 to-black/80 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-blue-300 font-mono text-[11px]">
              <Sparkles className="w-3 h-3" />
              <span>CORE BRAND IDENTITY MASTER SPECIFICATION</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white uppercase">
              THE PDT MONOGRAM FORM LANGUAGE
            </h3>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-2xl font-normal">
              Extracted directly from the official brand mark: the sculpted P (pixels & technology),
              D (camera aperture & lens dynamics), and T (geometric serifs & visual weight) unified
              with kinetic chrome ribbons. It stands as the definitive visual anchor
              for all festival creative assets.
            </p>

            <button
              onClick={() => handleOpenProject(SELECTED_PROJECTS[0])}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 font-tech font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              <span>READ MONOGRAM SPECIFICATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <img
              src="/src/assets/images/pdt-logo.png"
              alt="Official PDT Brand Logo"
              referrerPolicy="no-referrer"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-2xl border border-blue-500/20 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Deep Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => {
          sound.playClick();
          setSelectedProject(null);
        }}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />
    </section>
  );
};
