import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle, Wrench, Sparkles, Layers } from "lucide-react";
import { DESIGN_DOMAINS, TOOL_ECOSYSTEM, DomainItem } from "../data/domains";
import { sound } from "../utils/audio";

export const DomainsSection: React.FC = () => {
  const [hoveredDomain, setHoveredDomain] = useState<DomainItem>(DESIGN_DOMAINS[0]);
  const [selectedDomain, setSelectedDomain] = useState<DomainItem | null>(null);

  const handleDomainHover = (domain: DomainItem) => {
    if (hoveredDomain.id !== domain.id) {
      sound.playHover();
      setHoveredDomain(domain);
    }
  };

  const handleDomainClick = (domain: DomainItem) => {
    sound.playClick();
    setSelectedDomain(domain);
  };

  return (
    <section
      id="domains"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-[#08080A] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambient Shift based on hovered domain */}
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: hoveredDomain.accentColor }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 tracking-[0.3em] uppercase mb-4">
              <span className="text-blue-400 font-bold">02</span>
              <span className="w-6 h-[1px] bg-neutral-700" />
              <span>DESIGN ECOSYSTEM</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
              SIX SPECIALIZED <br />
              <span className="text-stroke-strong text-white">DISCIPLINES</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-xs md:text-sm font-mono text-neutral-400 leading-relaxed">
              PDT operates across 6 integrated design domains to power Pragyan’s
              visual universe.
            </p>
          </div>
        </div>

        {/* Interactive Domains Showcase: Typographic Rows + Floating Preview */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Typographic Domain Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/[0.08]">
            {DESIGN_DOMAINS.map((domain) => {
              const isHovered = hoveredDomain.id === domain.id;

              return (
                <div
                  key={domain.id}
                  id={`domain-row-${domain.id}`}
                  onMouseEnter={() => handleDomainHover(domain)}
                  onClick={() => handleDomainClick(domain)}
                  data-cursor="explore"
                  className="group relative py-7 sm:py-8 flex flex-col cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-sm sm:text-base transition-colors duration-300 ${
                          isHovered ? "text-purple-400 font-bold" : "text-neutral-500"
                        }`}
                      >
                        {domain.number}
                      </span>
                      <h3
                        className={`font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight uppercase transition-all duration-300 ${
                          isHovered
                            ? "text-white translate-x-3"
                            : "text-neutral-300 group-hover:text-white"
                        }`}
                      >
                        {domain.title}
                      </h3>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "border-white bg-white text-black scale-110 rotate-45 shadow-lg"
                          : "border-white/10 text-neutral-400 group-hover:border-white/30"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Summary & Deliverables expansion on hover / active */}
                  <div
                    className={`mt-3 pl-8 sm:pl-12 transition-all duration-300 overflow-hidden ${
                      isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-xl">
                      {domain.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {domain.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.08] text-[10px] font-mono text-neutral-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage & Active Domain Canvas */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-3xl p-6 md:p-8 border border-white/[0.08] bg-neutral-900/40 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Top Meta info */}
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-4 border-b border-white/[0.06]">
                <span className="text-purple-400 font-bold">DOMAIN {hoveredDomain.number}</span>
                <span>{hoveredDomain.tools.join(" • ")}</span>
              </div>

              {/* Artwork Visual Window */}
              <div className="my-6 relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/[0.1] bg-neutral-950 group">
                <img
                  src={hoveredDomain.featuredVisual}
                  alt={hoveredDomain.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-white flex items-center justify-between">
                  <span className="font-bold">{hoveredDomain.title}</span>
                  <span className="text-neutral-400 text-[10px]">PDT DISCIPLINE</span>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                  CORE DELIVERABLES
                </div>
                <div className="grid grid-cols-1 gap-1.5 pt-1">
                  {hoveredDomain.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-neutral-200 font-tech"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Software & Tool Ecosystem Visualizer */}
        <div className="mt-16 pt-12 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Wrench className="w-4 h-4 text-purple-400" />
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-wider">
                DESIGN TOOL ECOSYSTEM
              </h3>
            </div>
            <span className="text-[11px] font-mono text-neutral-400">
              INDUSTRY-STANDARD CRAFT STACK & SOFTWARE
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TOOL_ECOSYSTEM.map((tool) => (
              <div
                key={tool.name}
                onMouseEnter={() => sound.playHover()}
                className="p-4 rounded-xl border border-white/[0.06] bg-neutral-900/30 hover:border-white/20 hover:bg-neutral-900/60 transition-all cursor-pointer group"
              >
                <div className="font-tech font-bold text-sm sm:text-base text-white group-hover:text-purple-300 transition-colors">
                  {tool.name}
                </div>
                <div className="text-[11px] font-mono text-purple-400 mt-0.5">
                  {tool.category}
                </div>
                <div className="text-[10px] font-mono text-neutral-400 mt-2">
                  {tool.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
