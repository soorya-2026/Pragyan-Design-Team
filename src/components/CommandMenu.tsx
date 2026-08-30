import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Volume2,
  VolumeX,
  Compass,
  Sparkles,
  Layers,
  Palette,
  Terminal,
  ExternalLink,
  X,
  Command,
  Sliders,
  Award,
} from "lucide-react";
import { sound } from "../utils/audio";
import confetti from "canvas-confetti";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSubmission: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({
  isOpen,
  onClose,
  onOpenSubmission,
}) => {
  const [query, setQuery] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(sound.getEnabled());
  const [fps, setFps] = useState(60);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          sound.playClick();
          // Open triggered by parent state or event
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // FPS Counter
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const calculateFps = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calculateFps);
    };

    if (isOpen) {
      animId = requestAnimationFrame(calculateFps);
    }
    return () => cancelAnimationFrame(animId);
  }, [isOpen]);

  const navItems = [
    { id: "hero", name: "00 / Cinematic Hero & 3D Stage", icon: Sparkles, hash: "#hero" },
    { id: "about", name: "01 / Conceptual Design Pipeline", icon: Layers, hash: "#about" },
    { id: "domains", name: "02 / Six Design Domains & Tools", icon: Compass, hash: "#domains" },
    { id: "work", name: "03 / Signature Works & Case Studies", icon: Palette, hash: "#work" },
    { id: "archive", name: "04 / Visual Archive & Filter Engine", icon: Search, hash: "#archive" },
    { id: "pragyan", name: "05 / Pragyan Fest & NIT Trichy Chapter", icon: Award, hash: "#pragyan" },
    { id: "culture", name: "06 / Culture & Five Pillars Manifesto", icon: Sliders, hash: "#culture" },
    { id: "your-turn", name: "07 / Induction Studio & Candidate Badge", icon: Terminal, hash: "#your-turn" },
  ];

  const handleSelectNav = (hash: string) => {
    sound.playClick();
    onClose();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.setEnabled(next);
    if (next) sound.playClick();
  };

  const handleTriggerConfetti = () => {
    sound.playCelebrationChord();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#1A56DB", "#6C2BD9", "#F95738", "#FFFFFF"],
    });
  };

  const filteredNav = navItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-full max-w-2xl bg-[#0B0B0F] border border-white/[0.15] rounded-2xl shadow-2xl overflow-hidden text-white"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] bg-neutral-900/40">
              <Search className="w-4 h-4 text-neutral-400 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search section (e.g. 'domains', 'badge', '3d')..."
                className="w-full bg-transparent text-sm font-mono text-white placeholder-neutral-500 focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Action Matrix */}
            <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-2 border-b border-white/[0.08] bg-neutral-950/60">
              <button
                onClick={handleToggleSound}
                className="p-2.5 rounded-xl border border-white/[0.06] bg-neutral-900/50 hover:bg-neutral-800/80 flex items-center gap-2.5 text-left text-xs font-mono transition-all cursor-pointer"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <VolumeX className="w-4 h-4 text-neutral-500" />
                )}
                <div>
                  <div className="text-white font-semibold">Sound FX</div>
                  <div className="text-[10px] text-neutral-400">
                    {soundEnabled ? "ONLINE" : "MUTED"}
                  </div>
                </div>
              </button>

              <button
                onClick={handleTriggerConfetti}
                className="p-2.5 rounded-xl border border-white/[0.06] bg-neutral-900/50 hover:bg-neutral-800/80 flex items-center gap-2.5 text-left text-xs font-mono transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="text-white font-semibold">Launch Burst</div>
                  <div className="text-[10px] text-neutral-400">Confetti FX</div>
                </div>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                  onOpenSubmission();
                }}
                className="p-2.5 rounded-xl border border-purple-500/40 bg-purple-950/40 hover:bg-purple-900/50 flex items-center gap-2.5 text-left text-xs font-mono transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-purple-300" />
                <div>
                  <div className="text-purple-200 font-semibold">Induction Lab</div>
                  <div className="text-[10px] text-purple-400">Join Team</div>
                </div>
              </button>
            </div>

            {/* Navigation List */}
            <div className="max-h-64 overflow-y-auto p-2 divide-y divide-white/[0.04]">
              <div className="px-3 py-1.5 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                Exhibition Navigation
              </div>
              {filteredNav.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectNav(item.hash)}
                    className="w-full px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-white/[0.06] text-left transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-neutral-400 group-hover:text-purple-400 transition-colors" />
                      <span className="text-xs font-mono text-neutral-200 group-hover:text-white font-medium">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 group-hover:text-neutral-300">
                      JUMP ↵
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Telemetry Footer */}
            <div className="px-4 py-2.5 bg-neutral-950 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SYSTEM: 60FPS STABLE ({fps} FPS)</span>
                </span>
                <span>•</span>
                <span>ENGINE: WEB AUDIO & 3D STAGE</span>
              </div>
              <div className="flex items-center gap-1">
                <span>ESC to exit</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
