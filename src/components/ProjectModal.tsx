import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowLeft, ArrowRight, CheckCircle, Sparkles, Layers } from "lucide-react";
import { ProjectItem } from "../data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-black/90 backdrop-blur-xl">
        {/* Click backdrop to close */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.1] bg-[#0F0F14] shadow-2xl p-6 sm:p-10 text-white"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/40 text-purple-300 font-mono text-xs font-semibold">
                {project.number}
              </span>
              <span className="font-mono text-xs text-neutral-400 tracking-wider">
                {project.category} • {project.year}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onPrev}
                aria-label="Previous exhibit"
                className="p-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onNext}
                aria-label="Next exhibit"
                className="p-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                aria-label="Close project modal"
                className="p-2 rounded-full border border-white/10 hover:border-white/30 bg-neutral-800/60 text-white hover:bg-neutral-700 ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Project Title & Subtitle */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-tech mt-2">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Visual Display */}
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-neutral-950 mb-10 shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[500px] object-cover"
            />
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md font-mono text-[11px] text-neutral-300 border border-white/10">
              ORIGINAL PDT ARCHIVE
            </div>
          </div>

          {/* Editorial Content Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            {/* Overview & Art Direction */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  PROJECT OVERVIEW
                </h3>
                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  ART DIRECTION RATIONALE
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {project.artDirection}
                </p>
              </div>
            </div>

            {/* Technical Specs & Palette */}
            <div className="lg:col-span-5 space-y-6 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8">
              {/* Color Palette Swatches */}
              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
                  COLOR PALETTE SYSTEM
                </h3>
                <div className="flex items-center gap-2">
                  {project.palette.map((color, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <div
                        className="w-8 h-8 rounded-lg border border-white/20 shadow"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                      <span className="text-[9px] font-mono text-neutral-400">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Spec */}
              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">
                  TYPOGRAPHIC SPECIFICATION
                </h3>
                <div className="text-sm font-tech text-white">
                  {project.typography}
                </div>
              </div>

              {/* Tools Used */}
              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
                  SOFTWARE ECOSYSTEM
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/[0.06] border border-white/[0.08] text-xs font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
                  OFFICIAL DELIVERABLES
                </h3>
                <div className="space-y-1.5">
                  {project.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Navigation */}
          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>PRAGYAN DESIGN TEAM • NIT TRICHY</span>
            <div className="flex items-center gap-4">
              <button
                onClick={onNext}
                className="text-white hover:text-purple-400 flex items-center gap-2 font-tech font-bold uppercase tracking-wider"
              >
                <span>NEXT EXHIBIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
