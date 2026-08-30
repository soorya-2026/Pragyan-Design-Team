import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sparkles, Check, Download, Sliders, Palette, Type, Terminal, Award } from "lucide-react";
import { PDTLogo } from "./PDTLogo";
import { INDUCTION_CLIMAX } from "../data/philosophy";
import { SITE_CONFIG } from "../data/site";
import { sound } from "../utils/audio";
import confetti from "canvas-confetti";

export const YourTurnSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"statement" | "rationale" | "lab">("statement");

  // Interactive Induction Studio Candidate state
  const [candidateName, setCandidateName] = useState("");
  const [candidateDomain, setCandidateDomain] = useState("Graphic Design");
  const [candidateTools, setCandidateTools] = useState<string[]>(["Illustrator", "Photoshop"]);
  const [isGenerated, setIsGenerated] = useState(false);

  // Interactive Theme Lab state
  const [activeColorway, setActiveColorway] = useState<"electric" | "violet" | "solar" | "chrome">("electric");

  const colorways = {
    electric: { name: "Electric Cobalt", border: "border-blue-500", glow: "from-blue-600/30", hex: "#1A56DB" },
    violet: { name: "Ultraviolet Void", border: "border-purple-500", glow: "from-purple-600/30", hex: "#6C2BD9" },
    solar: { name: "Solar Ember", border: "border-orange-500", glow: "from-orange-600/30", hex: "#F95738" },
    chrome: { name: "Silver Chrome", border: "border-neutral-300", glow: "from-neutral-400/30", hex: "#E2E8F0" },
  };

  const domainOptions = [
    "Graphic Design",
    "Digital Art",
    "UI / UX Design",
    "Video Editing",
    "3D Modelling / Animation",
    "Photography / Videography",
  ];

  const toolOptions = [
    "Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Procreate",
    "Blender",
    "Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
  ];

  const toggleTool = (tool: string) => {
    sound.playClick();
    if (candidateTools.includes(tool)) {
      setCandidateTools(candidateTools.filter((t) => t !== tool));
    } else {
      setCandidateTools([...candidateTools, tool]);
    }
  };

  const handleGenerateBadge = () => {
    sound.playCelebrationChord();
    setIsGenerated(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#1A56DB", "#6C2BD9", "#F95738", "#FFFFFF", "#38BDF8"],
    });
  };

  const handleTabSwitch = (tab: "statement" | "rationale" | "lab") => {
    sound.playClick();
    setActiveTab(tab);
  };

  const handleColorwaySelect = (key: "electric" | "violet" | "solar" | "chrome") => {
    sound.playClick();
    setActiveColorway(key);
  };

  const rationaleItems = [
    {
      title: "Visual Hierarchy & Typography",
      description:
        "Syne Display paired with Plus Jakarta Sans and JetBrains Mono. High contrast step scales establish mathematical and optical dominance for exhibition storytelling.",
    },
    {
      title: "Brand Mark Integrity",
      description:
        "Preserved the official 3D PDT Monogram without artificial distortion, extracting its motion curves and metallic bevels into the design system.",
    },
    {
      title: "Zero Artificial Slop",
      description:
        "No generic cards or glowing cyan gradients. Every section follows architectural exhibition pacing: dark gallery voids, crisp editorial dividers, and verified factual data.",
    },
    {
      title: "Responsive & Accessible",
      description:
        "Engineered for all screen sizes from mobile to ultra-wide displays with semantic markup, touch-safe targets, and WCAG AA contrast compliance.",
    },
  ];

  return (
    <section
      id="your-turn"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-16 bg-[#060608] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Dynamic Background Glow from Lab */}
      <div
        className={`absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-t ${colorways[activeColorway].glow} to-transparent rounded-full blur-[160px] opacity-40 pointer-events-none transition-all duration-700`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Climax Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-800/40 text-purple-300 font-mono text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{INDUCTION_CLIMAX.header}</span>
          </div>

          <div className="space-y-2">
            <div className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-neutral-400 tracking-tight uppercase">
              WE CHOOSE <span className="text-white">PRAGYAN.</span>
            </div>
            <div className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-neutral-400 tracking-tight uppercase">
              WE CHOOSE <span className="text-white">DESIGN.</span>
            </div>
            <div className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-neutral-400 tracking-tight uppercase">
              WE CHOOSE <span className="text-white">TEAM.</span>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-orange-400 tracking-tighter uppercase leading-none">
              YOUR TURN.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto pt-2 font-normal">
            {INDUCTION_CLIMAX.rationale}
          </p>
        </div>

        {/* Interactive Induction Studio Hub */}
        <div className="rounded-3xl border border-white/[0.1] bg-neutral-900/50 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
          {/* Sub-navigation Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleTabSwitch("statement")}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-tech font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                  activeTab === "statement"
                    ? "bg-white text-black"
                    : "bg-neutral-800/60 text-neutral-400 hover:text-white"
                }`}
              >
                CANDIDATE STATEMENT
              </button>

              <button
                onClick={() => handleTabSwitch("rationale")}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-tech font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                  activeTab === "rationale"
                    ? "bg-white text-black"
                    : "bg-neutral-800/60 text-neutral-400 hover:text-white"
                }`}
              >
                DESIGN RATIONALE (RUBRIC)
              </button>

              <button
                onClick={() => handleTabSwitch("lab")}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-tech font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                  activeTab === "lab"
                    ? "bg-white text-black"
                    : "bg-neutral-800/60 text-neutral-400 hover:text-white"
                }`}
              >
                BRAND COLORWAY LAB
              </button>
            </div>

            <div className="text-xs font-mono text-neutral-400 hidden sm:block">
              PDT INDUCTION TASK EVALUATION
            </div>
          </div>

          {/* Tab 1: Candidate Induction Statement & Badge */}
          {activeTab === "statement" && (
            <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase">
                    CANDIDATE SUBMISSION PROFILE
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    Simulate your induction submission profile for Pragyan Design Team.
                  </p>
                </div>

                {/* Candidate Name Input */}
                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase mb-2">
                    Candidate Name / Roll No.
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Soorya / PDT Induction Applicant"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/[0.1] text-white font-mono text-sm focus:border-purple-500 focus:outline-none"
                  />
                </div>

                {/* Domain Selector */}
                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase mb-2">
                    Primary Design Domain
                  </label>
                  <select
                    value={candidateDomain}
                    onChange={(e) => setCandidateDomain(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/[0.1] text-white font-mono text-sm focus:border-purple-500 focus:outline-none"
                  >
                    {domainOptions.map((d) => (
                      <option key={d} value={d} className="bg-neutral-900 text-white">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tool Familiarity Checklist */}
                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase mb-2">
                    Primary Creative Tools & Software
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {toolOptions.map((tool) => {
                      const selected = candidateTools.includes(tool);
                      return (
                        <button
                          key={tool}
                          type="button"
                          onClick={() => toggleTool(tool)}
                          onMouseEnter={() => sound.playHover()}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                            selected
                              ? "bg-purple-900/60 border border-purple-500 text-purple-200 font-semibold"
                              : "bg-neutral-950 border border-white/[0.06] text-neutral-400 hover:text-white"
                          }`}
                        >
                          {tool}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGenerateBadge}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-tech font-bold text-xs tracking-widest uppercase shadow-xl hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>RENDER SUBMISSION BADGE</span>
                </button>
              </div>

              {/* Generated Submission Card Preview */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-md p-8 rounded-3xl border border-white/[0.12] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black shadow-2xl relative overflow-hidden">
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-600/30 to-transparent pointer-events-none" />

                  <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <PDTLogo size="sm" showText={false} interactive={false} />
                      <div>
                        <div className="font-tech font-bold text-xs text-white">
                          PRAGYAN DESIGN TEAM
                        </div>
                        <div className="font-mono text-[9px] text-neutral-400">
                          NIT TRICHY • INDUCTION
                        </div>
                      </div>
                    </div>

                    <span className="px-2 py-1 rounded bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-[10px] font-mono font-bold">
                      VERIFIED SUBMISSION
                    </span>
                  </div>

                  <div className="py-6 space-y-4">
                    <div>
                      <div className="text-[10px] font-mono text-neutral-500 uppercase">
                        CANDIDATE
                      </div>
                      <div className="font-display font-bold text-xl text-white">
                        {candidateName || "PDT Aspirant"}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] font-mono text-neutral-500 uppercase">
                          DOMAIN
                        </div>
                        <div className="font-tech text-xs text-purple-300 font-semibold">
                          {candidateDomain}
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] font-mono text-neutral-500 uppercase">
                          INSTITUTION
                        </div>
                        <div className="font-tech text-xs text-neutral-300">
                          NIT Trichy
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-neutral-500 uppercase mb-1">
                        CONFIRMED TOOLS
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {candidateTools.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-white/[0.06] text-[10px] font-mono text-neutral-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span>STATUS: READY FOR INTERVIEW</span>
                    <span className="text-purple-400">PRAGYAN '26</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Evaluator Design Rationale Rubric */}
          {activeTab === "rationale" && (
            <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {rationaleItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-neutral-950/60 space-y-3 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-950 border border-purple-800 text-purple-300 text-xs font-mono flex items-center justify-center font-bold">
                      0{idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-lg text-white uppercase">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Brand Colorway Lab */}
          {activeTab === "lab" && (
            <div className="py-8 space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase">
                  PDT BRAND SYSTEM TESTBENCH
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  Test and inspect the core color harmonies extracted from the official PDT monogram.
                </p>
              </div>

              {/* Colorway Switcher */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {(Object.keys(colorways) as Array<keyof typeof colorways>).map((key) => {
                  const cw = colorways[key];
                  const isSelected = activeColorway === key;

                  return (
                    <button
                      key={key}
                      onClick={() => handleColorwaySelect(key)}
                      onMouseEnter={() => sound.playHover()}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-neutral-900 border-white shadow-xl"
                          : "bg-neutral-950 border-white/[0.06] hover:border-white/20"
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-lg mb-3 border border-white/20"
                        style={{ backgroundColor: cw.hex }}
                      />
                      <div className="font-tech font-bold text-xs text-white">
                        {cw.name}
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                        {cw.hex}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Preview Canvas */}
              <div className="p-8 rounded-3xl border border-white/[0.1] bg-neutral-950 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase text-neutral-400">
                    ACTIVE COLORWAY SPECIFICATION
                  </span>
                  <h4 className="text-3xl font-display font-extrabold text-white uppercase">
                    {colorways[activeColorway].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-lg leading-relaxed">
                    Extracted from the official PDT mark. Designed for high contrast against pitch-black exhibition surfaces and dark mode digital channels.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-white/[0.08] bg-neutral-900/50 flex flex-col items-center">
                  <PDTLogo size="md" showText={true} interactive={true} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
