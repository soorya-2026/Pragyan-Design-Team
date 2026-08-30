import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Layers,
  ArrowDown,
  Activity,
  Compass,
  Zap,
  Volume2,
  Sliders,
  RotateCw,
  Terminal,
  Eye,
  Radio,
  Camera,
  Disc,
  Play,
  Maximize2,
  ShieldCheck,
  CheckCircle2,
  Flame,
} from "lucide-react";
import { PDTLogo } from "./PDTLogo";
import { SITE_CONFIG } from "../data/site";
import { sound } from "../utils/audio";
import confetti from "canvas-confetti";

interface HeroProps {
  onOpenCommandMenu?: () => void;
  onOpenInduction?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCommandMenu,
  onOpenInduction,
}) => {
  // Hero Interactive Deck Modes: "hologram" | "synth" | "matrix" | "aperture"
  const [heroMode, setHeroMode] = useState<"hologram" | "synth" | "matrix" | "aperture">("hologram");
  
  // 3D Lighting Presets
  const [lightingPreset, setLightingPreset] = useState<"multi" | "blue" | "purple" | "orange">("multi");
  
  // Interactive 3D Turntable Slider/Rotation State
  const [rotationYaw, setRotationYaw] = useState(0);
  const [rotationPitch, setRotationPitch] = useState(0);
  const [isAutoSpin, setIsAutoSpin] = useState(false);
  const [activeSynthNote, setActiveSynthNote] = useState<number | null>(null);
  const [isApertureFlashing, setIsApertureFlashing] = useState(false);
  const [shutterBladeAngle, setShutterBladeAngle] = useState(0);

  // Live IST Campus Clock state
  const [timeString, setTimeString] = useState("");
  const [visitorCount, setVisitorCount] = useState(148);

  // Mouse spotlight coordinates
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeString(new Intl.DateTimeFormat("en-GB", istOptions).format(now) + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Live visitor fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Auto spin animation loop
  useEffect(() => {
    if (!isAutoSpin) return;
    let animId: number;
    const spinLoop = () => {
      setRotationYaw((prev) => (prev + 1.2) % 360);
      animId = requestAnimationFrame(spinLoop);
    };
    animId = requestAnimationFrame(spinLoop);
    return () => cancelAnimationFrame(animId);
  }, [isAutoSpin]);

  const scrollToAbout = () => {
    sound.playClick();
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLaunchInduction = () => {
    sound.playCelebrationChord();
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#1A56DB", "#6C2BD9", "#F95738", "#FFFFFF", "#38BDF8", "#FBBF24"],
    });
    if (onOpenInduction) {
      onOpenInduction();
    } else {
      const el = document.getElementById("your-turn");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Camera shutter trigger simulation
  const triggerCameraShutter = () => {
    sound.playCameraShutter();
    setIsApertureFlashing(true);
    setShutterBladeAngle((prev) => prev + 60);
    setTimeout(() => setIsApertureFlashing(false), 200);
  };

  // Musical synth frequencies for the live soundboard
  const synthNotes = [
    { label: "C4", name: "PRAGYAN ROOT", freq: 261.63, color: "from-blue-500 to-cyan-500" },
    { label: "E4", name: "DESIGN THIRD", freq: 329.63, color: "from-blue-600 to-indigo-600" },
    { label: "G4", name: "TEAM FIFTH", freq: 392.00, color: "from-purple-600 to-violet-600" },
    { label: "B4", name: "NIT SEVENTH", freq: 493.88, color: "from-purple-500 to-pink-500" },
    { label: "D5", name: "TRICHY NINTH", freq: 587.33, color: "from-orange-500 to-amber-500" },
    { label: "F#5", name: "INDUCTION OCTAVE", freq: 739.99, color: "from-red-500 to-orange-500" },
  ];

  const handlePlayNote = (freq: number, index: number) => {
    sound.playSynthNote(freq);
    setActiveSynthNote(index);
    setTimeout(() => setActiveSynthNote(null), 400);
  };

  const domainsMini = [
    { title: "Graphic Design", icon: Layers, count: "30+ Posters", color: "text-blue-400" },
    { title: "Digital Art", icon: Sparkles, count: "Theme Key Art", color: "text-purple-400" },
    { title: "UI / UX Design", icon: Compass, count: "Fest Portal OS", color: "text-cyan-400" },
    { title: "Video & Motion", icon: Zap, count: "4K Teaser Reel", color: "text-orange-400" },
    { title: "3D Modelling", icon: RotateCw, count: "Procedural Loops", color: "text-pink-400" },
    { title: "Photography", icon: Eye, count: "Cinema Optics", color: "text-emerald-400" },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 md:pt-28 pb-8 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#050507]"
    >
      {/* Background Architectural Grid & Subtle Isometric Grid */}
      <div className="absolute inset-0 bg-grid-fine opacity-70 pointer-events-none" />

      {/* Dynamic Cursor Light Spotlight */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[180px] pointer-events-none transition-all duration-300 ease-out opacity-25"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(108,43,217,0.4) 0%, rgba(26,86,219,0.3) 40%, transparent 70%)",
        }}
      />

      {/* Atmospheric Kinetic Glow Orbs */}
      <div className="absolute top-1/4 left-1/5 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-br from-blue-900/25 via-purple-900/30 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/5 w-[650px] h-[500px] bg-gradient-to-bl from-orange-900/20 via-purple-950/25 to-transparent rounded-full blur-[150px] pointer-events-none" />

      {/* Camera Shutter Flash Overlay */}
      <AnimatePresence>
        {isApertureFlashing && (
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-white z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Hero Top Live Telemetry HUD */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 backdrop-blur-md"
      >
        {/* Left Telemetry: Fest + College + Coordinates */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
          </span>
          <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-white font-bold uppercase">
            PRAGYAN '26
          </span>
          <span className="text-neutral-600">/</span>
          <span className="font-mono text-xs tracking-widest text-neutral-300">
            {SITE_CONFIG.collegeShort}
          </span>
          <span className="hidden sm:inline-block text-neutral-600">•</span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-neutral-400">
            {SITE_CONFIG.coordinates.lat}, {SITE_CONFIG.coordinates.lng}
          </span>
        </div>

        {/* Right Telemetry: Live Campus Time + Online Status */}
        <div className="flex items-center gap-3 sm:gap-6 text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="hidden xs:inline">CAMPUS LIVE:</span>
            <span className="text-emerald-400 font-semibold">{timeString}</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white">
            <Activity className="w-3 h-3 text-purple-400" />
            <span>{visitorCount} LIVE VIEWERS</span>
          </div>

          <span className="px-2.5 py-0.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-[10px] font-bold tracking-widest uppercase">
            ISO 9001 / 20121
          </span>
        </div>
      </motion.div>

      {/* Main Center Composition: Grand Asymmetric Exhibition Canvas */}
      <div className="relative z-10 my-auto py-6 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Monumental Exhibition Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          
          {/* Official Sub-badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-950/90 via-purple-950/80 to-transparent border border-purple-800/40 text-purple-300 font-mono text-[11px] tracking-widest uppercase shadow-[0_0_20px_rgba(108,43,217,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>OFFICIAL DIGITAL DESIGN DIVISION • NIT TRICHY</span>
            </div>
          </motion.div>

          {/* Monumental Masked Title — FULL PRAGYAN VISIBILITY GUARANTEED */}
          <div className="space-y-1.5 sm:space-y-2">
            {/* PRAGYAN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight leading-[0.95] uppercase bg-gradient-to-r from-white via-neutral-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(255,255,255,0.15)]">
                PRAGYAN
              </h1>
            </motion.div>

            {/* DESIGN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight leading-[0.95] uppercase bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_4px_35px_rgba(108,43,217,0.3)]">
                DESIGN
              </h2>
            </motion.div>

            {/* TEAM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex items-center gap-4"
            >
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight leading-[0.95] uppercase text-stroke-strong text-white">
                TEAM
              </h2>
              <span className="hidden sm:inline-flex px-3 py-1 rounded-xl bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-purple-300 font-semibold tracking-widest">
                EST. 2005
              </span>
            </motion.div>
          </div>

          {/* High-Contrast Authoritative Mission Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-xl text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
          >
            We shape Pragyan’s visual identity through themes, logos, social media content,
            and branding materials. Turning ideas into compelling visuals that bring Pragyan’s vision to life at NIT Trichy.
          </motion.p>

          {/* Floating Key Pillars Pill Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">
              <CheckCircle2 className="w-3 h-3 text-blue-400" />
              <span>6 Disciplinary Labs</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">
              <CheckCircle2 className="w-3 h-3 text-purple-400" />
              <span>40+ Curated Exhibits</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">
              <CheckCircle2 className="w-3 h-3 text-orange-400" />
              <span>100% Vector & Render Precision</span>
            </span>
          </motion.div>

          {/* Interactive Hero Action Dock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center gap-3.5 pt-3"
          >
            <button
              onClick={scrollToAbout}
              data-cursor="explore"
              className="px-6 py-3.5 rounded-2xl bg-white text-black font-tech font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] flex items-center gap-2 cursor-pointer group"
            >
              <span>EXPLORE EXHIBITION</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={handleLaunchInduction}
              data-cursor="pointer"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-tech font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-all shadow-[0_0_30px_rgba(147,51,234,0.35)] flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
              <span>INDUCTION STUDIO</span>
            </button>

            {onOpenCommandMenu && (
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenCommandMenu();
                }}
                data-cursor="pointer"
                className="hidden sm:flex items-center gap-2 px-4 py-3.5 rounded-2xl border border-white/[0.12] bg-neutral-900/70 hover:bg-neutral-800 text-neutral-300 hover:text-white font-mono text-xs transition-all cursor-pointer shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>⌘K COMMAND HUD</span>
              </button>
            )}
          </motion.div>
        </div>

        {/* Right Column: High-End Interactive Cyber-Studio Deck */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Main Interactive Stage Glass Container */}
          <div className="w-full max-w-lg p-5 sm:p-7 rounded-3xl border border-white/[0.14] bg-gradient-to-b from-neutral-900/90 via-[#0a0a0f]/95 to-black backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
            
            {/* Stage Corner Accent Lights & Laser Grid Line */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-600/25 via-blue-600/10 to-transparent pointer-events-none blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-600/25 via-orange-600/10 to-transparent pointer-events-none blur-2xl" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent pointer-events-none" />

            {/* Stage Mode Switcher Tabs */}
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] relative z-10">
              <div className="flex items-center gap-1 p-1 rounded-xl bg-neutral-950/90 border border-white/[0.08] overflow-x-auto scrollbar-none">
                <button
                  onClick={() => {
                    sound.playClick();
                    setHeroMode("hologram");
                  }}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                    heroMode === "hologram"
                      ? "bg-white text-black shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  3D EMBLEM
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setHeroMode("synth");
                  }}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                    heroMode === "synth"
                      ? "bg-white text-black shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  AUDIO SYNTH
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setHeroMode("matrix");
                  }}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                    heroMode === "matrix"
                      ? "bg-white text-black shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  6 DOMAINS
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setHeroMode("aperture");
                  }}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                    heroMode === "aperture"
                      ? "bg-white text-black shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  APERTURE FX
                </button>
              </div>

              <div className="text-[10px] font-mono text-purple-400 font-semibold hidden sm:flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>INTERACTIVE</span>
              </div>
            </div>

            {/* Dynamic Stage Canvas Content */}
            <div className="py-4 relative min-h-[310px] flex flex-col items-center justify-center">
              
              {/* TAB 1: 3D Holographic Monogram Stage with Turntable */}
              {heroMode === "hologram" && (
                <div className="w-full flex flex-col items-center space-y-4">
                  {/* Hologram Turntable Pedestal */}
                  <div className="relative w-full flex flex-col items-center justify-center">
                    {/* Glowing Circular Turntable Grid Ring */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-56 h-56 rounded-full border border-purple-500/20 border-dashed animate-[spin_30s_linear_infinite]" />
                      <div className="w-44 h-44 rounded-full border border-blue-500/20" />
                    </div>

                    <div
                      className="relative flex items-center justify-center p-2 cursor-grab active:cursor-grabbing z-10"
                      style={{
                        transform: `rotateY(${rotationYaw}deg) rotateX(${rotationPitch}deg)`,
                        transition: isAutoSpin ? "none" : "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                        perspective: 1200,
                      }}
                    >
                      <PDTLogo
                        size="lg"
                        showText={true}
                        interactive={true}
                        glowColor={lightingPreset}
                        id="hero-3d-master-monogram"
                      />
                    </div>
                  </div>

                  {/* Interactive Lighting Preset Pills & Turntable Control */}
                  <div className="w-full space-y-2.5 pt-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <span className="flex items-center gap-1.5">
                        <Sliders className="w-3 h-3 text-purple-400" />
                        <span>LIGHTING HARMONY:</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={triggerCameraShutter}
                          className="px-2 py-0.5 rounded border border-white/10 hover:border-white/30 text-[9px] font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <Camera className="w-3 h-3 text-cyan-400" />
                          <span>SHUTTER SNAP</span>
                        </button>
                        <button
                          onClick={() => {
                            sound.playClick();
                            setIsAutoSpin(!isAutoSpin);
                          }}
                          className={`px-2 py-0.5 rounded border text-[9px] font-mono transition-colors cursor-pointer ${
                            isAutoSpin
                              ? "bg-purple-900 border-purple-500 text-white shadow-md shadow-purple-900/50"
                              : "border-white/10 text-neutral-400 hover:text-white"
                          }`}
                        >
                          {isAutoSpin ? "STOP SPIN" : "360° SPIN"}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {(["multi", "blue", "purple", "orange"] as const).map((preset) => (
                        <button
                          key={preset}
                          onClick={() => {
                            sound.playClick();
                            setLightingPreset(preset);
                          }}
                          className={`py-1.5 px-2 rounded-xl border text-[10px] font-mono uppercase transition-all cursor-pointer ${
                            lightingPreset === preset
                              ? "bg-neutral-800 border-white text-white font-bold shadow-lg"
                              : "bg-neutral-950/70 border-white/[0.06] text-neutral-400 hover:text-white"
                          }`}
                        >
                          {preset === "multi" ? "CHROMA" : preset}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Live Brand Soundboard Synthesizer with Audio Oscilloscope */}
              {heroMode === "synth" && (
                <div className="w-full space-y-3.5">
                  <div className="text-center space-y-1">
                    <div className="text-xs font-tech font-bold text-white uppercase flex items-center justify-center gap-2">
                      <Disc className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                      <span>PROCEDURAL WEB AUDIO HARMONIZER</span>
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      Harmonic frequencies synthesized dynamically in browser Web Audio.
                    </div>
                  </div>

                  {/* Dynamic Oscilloscope Waveform Graphic */}
                  <div className="h-12 w-full rounded-xl bg-neutral-950 border border-white/[0.08] flex items-center justify-center px-4 overflow-hidden relative">
                    <div className="flex items-center gap-1 w-full justify-between">
                      {[12, 28, 45, 18, 38, 55, 30, 20, 48, 62, 25, 40, 18, 34, 52, 22, 15, 42, 58, 20].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 rounded-full bg-gradient-to-t from-blue-500 via-purple-500 to-orange-400 transition-all duration-150"
                          style={{
                            height: activeSynthNote !== null ? `${Math.min(h * 1.6, 40)}px` : `${Math.max(h * 0.35, 6)}px`,
                            opacity: activeSynthNote !== null ? 0.9 : 0.4,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Synth Pads Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {synthNotes.map((note, idx) => {
                      const isActive = activeSynthNote === idx;
                      return (
                        <button
                          key={note.label}
                          onClick={() => handlePlayNote(note.freq, idx)}
                          data-cursor="pointer"
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                            isActive
                              ? "bg-white text-black border-white shadow-xl scale-95"
                              : "bg-neutral-950/80 border-white/[0.08] hover:border-white/30 text-white"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-display font-bold text-xs">
                              {note.label}
                            </span>
                            <span className="text-[9px] font-mono opacity-60">
                              {Math.round(note.freq)} Hz
                            </span>
                          </div>
                          <div className="text-[9px] font-mono mt-0.5 opacity-80 uppercase truncate">
                            {note.name}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: 6 Domains Quantum Matrix */}
              {heroMode === "matrix" && (
                <div className="w-full space-y-3">
                  <div className="text-center space-y-1">
                    <div className="text-xs font-tech font-bold text-white uppercase">
                      THE SIX SPECIALIZED DISCIPLINES
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      Disciplines defining Pragyan’s visual identity since 2005.
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {domainsMini.map((dom) => {
                      const Icon = dom.icon;
                      return (
                        <div
                          key={dom.title}
                          className="p-2.5 rounded-xl border border-white/[0.08] bg-neutral-950/80 hover:bg-neutral-900/80 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-2">
                            <Icon className={`w-3.5 h-3.5 ${dom.color} group-hover:scale-110 transition-transform`} />
                            <div className="text-xs font-tech font-bold text-white truncate">
                              {dom.title}
                            </div>
                          </div>
                          <div className="text-[9px] font-mono text-neutral-400 mt-1">
                            {dom.count}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 4: Aperture & Cinema Optics FX */}
              {heroMode === "aperture" && (
                <div className="w-full space-y-4 text-center">
                  <div className="space-y-1">
                    <div className="text-xs font-tech font-bold text-white uppercase flex items-center justify-center gap-2">
                      <Camera className="w-3.5 h-3.5 text-cyan-400" />
                      <span>OPTICAL APERTURE & CINEMA SIMULATOR</span>
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      Inside the 'D' glyph: precision 8-blade lens iris mechanism.
                    </div>
                  </div>

                  {/* Interactive Shutter Visualizer */}
                  <div className="flex justify-center py-2">
                    <button
                      onClick={triggerCameraShutter}
                      className="relative w-28 h-28 rounded-full border-2 border-cyan-500/40 bg-neutral-950 flex items-center justify-center cursor-pointer group hover:border-cyan-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                    >
                      {/* Blades SVG */}
                      <svg
                        viewBox="0 0 100 100"
                        className="w-20 h-20 transition-transform duration-500"
                        style={{ transform: `rotate(${shutterBladeAngle}deg)` }}
                      >
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                        <path d="M50 10 L70 50 L50 90 L30 50 Z" fill="rgba(6,182,212,0.15)" stroke="cyan" strokeWidth="1.5" />
                        <circle cx="50" cy="50" r="16" fill="#060608" stroke="white" strokeWidth="2" />
                      </svg>
                      <span className="absolute text-[9px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                        CLICK SNAP
                      </span>
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-neutral-400">
                    <div className="p-1.5 rounded-lg bg-neutral-950 border border-white/[0.06]">
                      <span className="block text-neutral-500">APERTURE</span>
                      <span className="text-white font-bold">f/1.4 CINEMA</span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-neutral-950 border border-white/[0.06]">
                      <span className="block text-neutral-500">SHUTTER</span>
                      <span className="text-white font-bold">1/250 SEC</span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-neutral-950 border border-white/[0.06]">
                      <span className="block text-neutral-500">ISO OPTICS</span>
                      <span className="text-white font-bold">100 NATIVE</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Stage Bottom Telemetry */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                <span>PDT DIGITAL CORE ENGINE</span>
              </span>
              <span className="text-neutral-400 font-semibold">NIT TRICHY • 2026</span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Hero Bottom Marquee & Exhibition Summary Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10 pt-4 border-t border-white/[0.08]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-xs font-mono text-neutral-400">
          {/* Metric 1 */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white bg-white/[0.02]">
              <Layers className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="text-white font-tech font-bold uppercase tracking-wider text-xs">
                6 SPECIALIZED DOMAINS
              </div>
              <div className="text-[10px] text-neutral-400">
                Graphic, 3D, UI/UX, Video, Art & Photo
              </div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white bg-white/[0.02]">
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <div className="text-white font-tech font-bold uppercase tracking-wider text-xs">
                PRAGYAN FESTIVAL
              </div>
              <div className="text-[10px] text-neutral-400">
                ISO 9001 & ISO 20121 Certified
              </div>
            </div>
          </div>

          {/* Scroll Action Button */}
          <button
            onClick={scrollToAbout}
            className="flex items-center sm:justify-end gap-2 text-neutral-300 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="tracking-widest uppercase text-[11px] font-tech font-semibold">
              EXPLORE EXHIBITION
            </span>
            <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-purple-400 group-hover:translate-y-1 transition-all">
              <ArrowDown className="w-3.5 h-3.5 text-neutral-300 group-hover:text-purple-300" />
            </div>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
