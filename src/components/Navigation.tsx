import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Search, Sparkles } from "lucide-react";
import { PDTLogo } from "./PDTLogo";
import { SITE_CONFIG } from "../data/site";
import { sound } from "../utils/audio";

interface NavigationProps {
  onOpenSubmission?: () => void;
  onOpenCommandMenu?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenSubmission,
  onOpenCommandMenu,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [istTime, setIstTime] = useState("");
  const [audioEnabled, setAudioEnabled] = useState(sound.getEnabled());

  // Update IST live clock
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setIstTime(new Intl.DateTimeFormat("en-GB", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 40);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }

      const sections = [
        "hero",
        "about",
        "domains",
        "work",
        "archive",
        "pragyan",
        "culture",
        "your-turn",
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    sound.setEnabled(next);
    if (next) sound.playClick();
  };

  const navLinks = [
    { label: "ABOUT", href: "#about", id: "nav-link-about" },
    { label: "DOMAINS", href: "#domains", id: "nav-link-domains" },
    { label: "WORK", href: "#work", id: "nav-link-work" },
    { label: "ARCHIVE", href: "#archive", id: "nav-link-archive" },
    { label: "PRAGYAN", href: "#pragyan", id: "nav-link-pragyan" },
    { label: "CULTURE", href: "#culture", id: "nav-link-culture" },
  ];

  const scrollTo = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top micro scroll-indicator line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-neutral-900/60 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#060608]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Identity / PDT Monogram */}
          <a
            href="#hero"
            id="nav-brand-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#hero");
            }}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-3 group focus:outline-none rounded-xl p-1 cursor-pointer"
          >
            <PDTLogo size="sm" showText={false} interactive={false} />
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-sm tracking-[0.15em] text-white group-hover:text-purple-300 transition-colors">
                PDT
              </span>
              <span className="font-mono text-[9px] tracking-widest text-neutral-400">
                NIT TRICHY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav-menu"
            className="hidden lg:flex items-center gap-7 text-[11px] font-tech font-medium tracking-[0.2em] text-neutral-300"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  id={link.id}
                  href={link.href}
                  onMouseEnter={() => sound.playHover()}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`relative py-1 transition-all duration-200 hover:text-white cursor-pointer ${
                    isActive ? "text-white font-semibold" : "text-neutral-400"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Header Controls: Audio Toggle + Command Menu + Induction CTA */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              onMouseEnter={() => sound.playHover()}
              title={audioEnabled ? "Mute Web Audio Engine" : "Enable Web Audio Engine"}
              className="p-2 rounded-full border border-white/[0.08] bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-[10px] font-mono"
            >
              {audioEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden xl:inline text-[9px] text-emerald-300">AUDIO ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="hidden xl:inline text-[9px] text-neutral-400">MUTED</span>
                </>
              )}
            </button>

            {/* Command HUD Trigger */}
            {onOpenCommandMenu && (
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenCommandMenu();
                }}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-neutral-900/60 hover:bg-neutral-800 text-[10px] font-mono text-neutral-300 hover:text-white transition-all cursor-pointer"
              >
                <Search className="w-3 h-3 text-purple-400" />
                <span>⌘K</span>
              </button>
            )}

            {/* Induction Action Button */}
            <a
              id="nav-cta-your-turn"
              href="#your-turn"
              onMouseEnter={() => sound.playHover()}
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#your-turn");
                if (onOpenSubmission) onOpenSubmission();
              }}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-[11px] font-tech font-bold tracking-[0.18em] uppercase text-white bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-600 hover:to-purple-600 border border-white/20 rounded-full transition-all duration-200 shadow-lg cursor-pointer group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
              <span>YOUR TURN</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg border border-white/[0.08] bg-neutral-900/70 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-30 bg-[#060608]/98 backdrop-blur-2xl pt-20 pb-12 px-8 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
                <PDTLogo size="sm" showText={false} interactive={false} />
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-sm tracking-[0.15em] text-white">
                    PDT
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-neutral-400">
                    NIT TRICHY • IDEAS • IDENTITY • IMPACT
                  </span>
                </div>
              </div>

              <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                EXHIBITION NAVIGATION
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-2xl font-display font-bold tracking-wider text-white hover:text-purple-400 flex items-center justify-between border-b border-white/[0.05] pb-3"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/[0.08]">
              <a
                href="#your-turn"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#your-turn");
                  if (onOpenSubmission) onOpenSubmission();
                }}
                className="w-full py-3.5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-tech font-bold text-xs tracking-widest uppercase"
              >
                <span>ENTER INDUCTION STUDIO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{SITE_CONFIG.collegeShort}</span>
                <span>{SITE_CONFIG.coordinates.lat}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
