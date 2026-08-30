import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Shield, Eye, Flame, Users, Quote } from "lucide-react";
import { TEAM_PILLARS, Pillar } from "../data/philosophy";

export const TeamPhilosophy: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>(TEAM_PILLARS[0].id);

  const pillarIcons = [Sparkles, Shield, Eye, Flame, Users];

  return (
    <section
      id="culture"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-[#0B0B0F] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-12 right-12 text-[140px] md:text-[220px] font-display font-extrabold text-white/[0.015] select-none pointer-events-none leading-none">
        07
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 tracking-[0.3em] uppercase mb-4">
              <span className="text-purple-400 font-bold">07</span>
              <span className="w-6 h-[1px] bg-neutral-700" />
              <span>CULTURE & DISCIPLINE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
              FIVE CORE <br />
              <span className="text-stroke-strong text-white">PILLARS</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-xs md:text-sm font-mono text-neutral-400 leading-relaxed">
              The foundational principles guiding every graphic, 3D render, interface,
              and motion piece created by Pragyan Design Team.
            </p>
          </div>
        </div>

        {/* Typographic Visual Pillar Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 items-start">
          {/* Left Column: Pillar Navigation */}
          <div className="md:col-span-5 flex flex-col divide-y divide-white/[0.06]">
            {TEAM_PILLARS.map((pillar, idx) => {
              const Icon = pillarIcons[idx] || Sparkles;
              const isActive = activePillar === pillar.id;

              return (
                <button
                  key={pillar.id}
                  id={`pillar-btn-${pillar.id}`}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`py-6 px-4 text-left transition-all duration-300 flex items-center justify-between group rounded-2xl cursor-pointer ${
                    isActive
                      ? "bg-neutral-900/80 border border-purple-500/40"
                      : "hover:bg-neutral-900/30 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? "text-purple-400" : "text-neutral-500"
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <span
                      className={`font-display font-bold text-xl sm:text-2xl uppercase tracking-wide transition-colors ${
                        isActive ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"
                      }`}
                    >
                      {pillar.title}
                    </span>
                  </div>

                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-purple-400" : "text-neutral-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Pillar Manifesto Display */}
          <div className="md:col-span-7">
            {TEAM_PILLARS.map((pillar) => {
              if (pillar.id !== activePillar) return null;

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35 }}
                  className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-neutral-900/50 backdrop-blur-xl space-y-6 shadow-2xl"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/40 text-purple-300 font-mono text-xs font-bold">
                      PILLAR {pillar.number}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      PRAGYAN DESIGN ETHOS
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                      CORE CONCEPT
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase mt-1">
                      {pillar.concept}
                    </h3>
                  </div>

                  <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-normal">
                    {pillar.elaboration}
                  </p>

                  <div className="pt-4 border-t border-white/[0.06] flex items-start gap-3">
                    <Quote className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-tech italic text-neutral-300">
                      "{pillar.quote}"
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
