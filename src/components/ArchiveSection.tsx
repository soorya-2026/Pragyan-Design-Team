import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, Search, Eye, Sparkles } from "lucide-react";
import { SELECTED_PROJECTS, ProjectItem } from "../data/projects";
import { ProjectModal } from "./ProjectModal";

export const ArchiveSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    "ALL",
    "GRAPHIC DESIGN",
    "DIGITAL ART",
    "3D MODELLING",
  ];

  const filteredProjects = useMemo(() => {
    return SELECTED_PROJECTS.filter((item) => {
      const matchesCategory =
        activeCategory === "ALL" || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="archive"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-[#08080A] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-12 right-12 text-[140px] md:text-[220px] font-display font-extrabold text-white/[0.015] select-none pointer-events-none leading-none">
        04
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 tracking-[0.3em] uppercase mb-4">
              <span className="text-cyan-400 font-bold">04</span>
              <span className="w-6 h-[1px] bg-neutral-700" />
              <span>DISCIPLINARY ARCHIVE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
              VISUAL <br />
              <span className="text-stroke-strong text-white">CATALOGUE</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-xs md:text-sm font-mono text-neutral-400 leading-relaxed">
              Curated repository of official Pragyan Design Team outputs spanning 
              print, dimensional geometry, and digital experience.
            </p>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[11px] font-tech font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-white text-black shadow-lg"
                    : "bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search by keyword, tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-neutral-900/60 border border-white/[0.08] focus:border-purple-500 focus:outline-none text-xs font-mono text-white placeholder-neutral-500"
            />
          </div>
        </div>

        {/* Asymmetric Grid Exhibition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-4">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl border border-white/[0.08] bg-neutral-900/30 overflow-hidden cursor-pointer hover:border-white/20 transition-colors shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Top floating tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-purple-300 font-bold">
                      {project.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom info overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-tech mt-1 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="p-5 flex items-center justify-between border-t border-white/[0.06] text-xs font-mono text-neutral-400">
                  <span>{project.tools.join(" • ")}</span>
                  <div className="flex items-center gap-1 text-white font-tech font-bold">
                    <Eye className="w-3.5 h-3.5 text-purple-400" />
                    <span>INSPECT</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-neutral-500 font-mono text-sm">
            No design exhibits match the current filter criteria.
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={() => {}}
        onPrev={() => {}}
      />
    </section>
  );
};
