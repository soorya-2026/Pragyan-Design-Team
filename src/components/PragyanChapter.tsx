import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Award, ShieldCheck, Calendar, Globe, Sparkles } from "lucide-react";
import { PRAGYAN_DATA } from "../data/pragyan";
import { SITE_CONFIG } from "../data/site";

export const PragyanChapter: React.FC = () => {
  return (
    <section
      id="pragyan"
      className="relative py-32 md:py-44 px-6 md:px-12 lg:px-16 bg-[#060608] text-white border-t border-white/[0.08] overflow-hidden"
    >
      {/* Full-width Cinematic Monolith Header */}
      <div className="max-w-7xl mx-auto">
        {/* Chapter Transition Indicator: PDT -> PRAGYAN */}
        <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 uppercase tracking-[0.3em] mb-8">
          <span className="text-blue-400 font-bold">05</span>
          <span className="w-8 h-[1px] bg-neutral-700" />
          <span>INSTITUTIONAL CHAPTER</span>
          <span className="text-neutral-600">/</span>
          <span className="text-white font-semibold">PDT → PRAGYAN</span>
        </div>

        {/* Monumental Headline */}
        <div className="space-y-4 mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight uppercase leading-[0.95]">
            PRAGYAN
          </h2>
          <div className="text-xl sm:text-2xl md:text-3xl font-tech text-neutral-300 font-medium max-w-3xl">
            International Techno-Managerial Festival • NIT Trichy
          </div>
        </div>

        {/* Full-Width Panoramic Artwork Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl mb-16 group">
          <img
            src="/src/assets/images/pragyan_monolith_fest_1788015494100.jpg"
            alt="Pragyan International Techno-Managerial Fest"
            referrerPolicy="no-referrer"
            className="w-full h-[400px] md:h-[550px] object-cover transform group-hover:scale-103 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Banner Overlaid Badge */}
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/40 text-blue-300 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ISO 9001:2015 & ISO 20121:2012 CERTIFIED</span>
              </div>
              <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-normal">
                Pragyan is one of India's premier student-run techno-managerial festivals.
                PDT designs its entire visual identity, transforming technical scale into
                compelling human experiences.
              </p>
            </div>

            <a
              href={SITE_CONFIG.pragyanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 font-tech font-bold text-xs tracking-widest uppercase transition-all shadow-xl flex-shrink-0"
            >
              <span>VISIT PRAGYAN.ORG</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3-Column Manifesto & Institutional Rationale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-white/[0.08]">
          {PRAGYAN_DATA.manifesto.map((paragraph, idx) => (
            <div key={idx} className="space-y-3">
              <div className="text-xs font-mono text-purple-400 font-bold">
                MANIFESTO 0{idx + 1}
              </div>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                {paragraph}
              </p>
            </div>
          ))}
        </div>

        {/* Thematic Timeline */}
        <div className="mt-16 pt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-orange-400" />
              <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide">
                ANNUAL THEMATIC VISUAL EVOLUTION
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-400">NIT TRICHY ARCHIVE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRAGYAN_DATA.thematicTimeline.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/[0.08] bg-neutral-900/30 hover:border-white/20 transition-colors"
              >
                <div className="text-xs font-mono text-neutral-400 font-bold">
                  {item.year}
                </div>
                <div className="font-display font-bold text-lg text-white mt-1 uppercase">
                  {item.title}
                </div>
                <p className="text-xs text-neutral-300 font-tech leading-relaxed mt-3">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
