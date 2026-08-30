import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Lightbulb, PenTool, Palette, Sparkles, Flag, CheckCircle2 } from "lucide-react";
import { CONCEPTUAL_PIPELINE, PRAGYAN_DATA } from "../data/pragyan";
import { SITE_CONFIG } from "../data/site";
import { sound } from "../utils/audio";

export const AboutSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const phaseIcons = [Lightbulb, PenTool, Palette, Sparkles, Flag];

  const handleStepClick = (idx: number) => {
    sound.playClick();
    setActiveStep(idx);
  };

  return (
    <section
      id="about"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-[#0B0B0F] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Architectural Watermark */}
      <div className="absolute top-12 right-12 text-[140px] md:text-[220px] font-display font-extrabold text-white/[0.015] select-none pointer-events-none leading-none">
        01
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 tracking-[0.3em] uppercase mb-4">
              <span className="text-purple-400 font-bold">01</span>
              <span className="w-6 h-[1px] bg-neutral-700" />
              <span>ABOUT THE DESIGN TEAM</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight uppercase leading-[1.05]">
              SHAPING HOW <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-orange-400 bg-clip-text text-transparent">
                PRAGYAN IS SEEN.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
              {SITE_CONFIG.description}
            </p>
          </div>
        </div>

        {/* Core Manifesto Quote & Editorial Spread */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-snug">
              "We don't merely create graphics—we architect the entire visual universe of NIT Trichy’s flagship festival."
            </h3>

            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              Every edition of Pragyan demands a cohesive identity system: from the 
              thematic master logo and stage visual loops to high-density social feeds,
              giant walkway hoardings, merchandise, and digital portals.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {PRAGYAN_DATA.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-white/[0.06] bg-neutral-900/30"
                >
                  <div className="text-base sm:text-lg font-tech font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Card with Poster Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl group">
              <img
                src="/src/assets/images/graphic_editorial_poster_1788015515482.jpg"
                alt="Pragyan Design Team Editorial Poster"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-neutral-300 flex items-center justify-between">
                <span>EDITORIAL POSTER SYSTEM</span>
                <span className="text-purple-400">NIT TRICHY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Conceptual Pipeline: IDEA → FORM → VISUAL → IDENTITY → PRAGYAN */}
        <div className="mt-12 pt-16 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                CONCEPTUAL TRANSFORMATION
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase mt-1">
                FROM RAW SPARK TO LIVING FESTIVAL
              </h3>
            </div>

            <div className="text-xs font-mono text-neutral-400">
              CLICK OR HOVER PHASES TO EXPLORE THE CRAFT
            </div>
          </div>

          {/* Pipeline Interactive Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {CONCEPTUAL_PIPELINE.map((item, idx) => {
              const Icon = phaseIcons[idx] || Lightbulb;
              const isSelected = activeStep === idx;

              return (
                <button
                  key={item.step}
                  id={`pipeline-step-${item.step}`}
                  onClick={() => handleStepClick(idx)}
                  onMouseEnter={() => sound.playHover()}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer ${
                    isSelected
                      ? "bg-neutral-900 border-purple-500/80 shadow-lg shadow-purple-950/20"
                      : "bg-neutral-950/50 border-white/[0.06] hover:border-white/20 hover:bg-neutral-900/40"
                  }`}
                >
                  {/* Top indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-neutral-300">
                      {item.step}
                    </span>
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isSelected ? "text-purple-400" : "text-neutral-600"
                      }`}
                    />
                  </div>

                  {/* Phase Title */}
                  <div className="font-display font-bold text-lg text-white tracking-wide">
                    {item.phase}
                  </div>
                  <div className="text-xs text-neutral-400 font-tech mt-1 line-clamp-1">
                    {item.subtitle}
                  </div>

                  {/* Active highlight line */}
                  {isSelected && (
                    <motion.div
                      layoutId="activePipelineBar"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Expanded Phase Inspector */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-neutral-900/60 backdrop-blur-md grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-purple-950/80 border border-purple-800/40 text-purple-300 font-mono text-xs font-semibold">
                    PHASE {CONCEPTUAL_PIPELINE[activeStep].step}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {CONCEPTUAL_PIPELINE[activeStep].phase} —{" "}
                    <span className="text-neutral-400 font-normal">
                      {CONCEPTUAL_PIPELINE[activeStep].subtitle}
                    </span>
                  </h4>
                </div>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {CONCEPTUAL_PIPELINE[activeStep].description}
                </p>

                <div className="text-xs font-mono text-neutral-400 flex items-center gap-2 pt-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{CONCEPTUAL_PIPELINE[activeStep].detail}</span>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col md:items-end justify-center space-y-2 border-t md:border-t-0 md:border-l border-white/[0.06] pt-4 md:pt-0 md:pl-6">
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                  FESTIVAL RESULT
                </div>
                <div className="text-sm font-tech font-bold text-white">
                  Pragyan Visual Integrity
                </div>
                <div className="text-[11px] font-mono text-purple-400">
                  Curated by Pragyan Design Team
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
