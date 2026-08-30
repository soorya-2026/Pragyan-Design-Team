import React from "react";
import { ArrowUp, Instagram, Globe, Sparkles, MapPin } from "lucide-react";
import { PDTLogo } from "./PDTLogo";
import { SITE_CONFIG } from "../data/site";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative bg-[#040406] text-white pt-24 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-white/[0.08]">
          {/* Brand Mark Column */}
          <div className="md:col-span-5 space-y-6">
            <PDTLogo size="md" showText={true} interactive={true} id="footer-pdt-logo" />
            <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-sm">
              The official Design Team of Pragyan, National Institute of
              Technology, Tiruchirappalli. Shaping themes, logos, digital experiences,
              and branding materials.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>NIT TRICHY • {SITE_CONFIG.coordinates.lat}, {SITE_CONFIG.coordinates.lng}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
              EXHIBITION SECTIONS
            </div>
            <ul className="space-y-2.5 text-xs font-tech text-neutral-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  01 / ABOUT PDT
                </a>
              </li>
              <li>
                <a href="#domains" className="hover:text-white transition-colors">
                  02 / SIX DOMAINS
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  03 / SELECTED WORK
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-white transition-colors">
                  04 / VISUAL ARCHIVE
                </a>
              </li>
              <li>
                <a href="#pragyan" className="hover:text-white transition-colors">
                  05 / PRAGYAN FESTIVAL
                </a>
              </li>
              <li>
                <a href="#culture" className="hover:text-white transition-colors">
                  06 / CULTURE & PILLARS
                </a>
              </li>
              <li>
                <a href="#your-turn" className="hover:text-purple-400 transition-colors font-bold">
                  07 / INDUCTION STUDIO
                </a>
              </li>
            </ul>
          </div>

          {/* Official External Portals */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
              OFFICIAL CHANNELS
            </div>
            <div className="space-y-3">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-neutral-900/40 hover:border-pink-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <div className="text-xs font-tech font-bold text-white">
                    {SITE_CONFIG.instagramHandle}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 group-hover:text-white">
                  INSTAGRAM
                </span>
              </a>

              <a
                href={SITE_CONFIG.pragyanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-neutral-900/40 hover:border-blue-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <div className="text-xs font-tech font-bold text-white">
                    pragyan.org
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 group-hover:text-white">
                  OFFICIAL FEST
                </span>
              </a>

              <a
                href={SITE_CONFIG.nitTrichyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-neutral-900/40 hover:border-purple-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <div className="text-xs font-tech font-bold text-white">
                    nitt.edu
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 group-hover:text-white">
                  NIT TRICHY
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Large Monumental Exhibition Closing Typography */}
        <div className="py-16 text-center overflow-hidden">
          <div className="text-xs font-mono tracking-[0.4em] text-neutral-500 uppercase mb-4">
            PRAGYAN DESIGN TEAM • INDUCTION SUBMISSION
          </div>
          <div className="font-display font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-white/[0.12] hover:text-white/[0.25] transition-colors select-none">
            TURNING IDEAS INTO COMPELLING VISUALS
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} PRAGYAN DESIGN TEAM.</span>
            <span>NIT TRICHY</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
