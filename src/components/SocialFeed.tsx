import React from "react";
import { motion } from "motion/react";
import { Instagram, ArrowUpRight, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { PDT_FEED } from "../data/social";
import { SITE_CONFIG } from "../data/site";

export const SocialFeed: React.FC = () => {
  return (
    <section
      id="feed"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-[#08080A] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-12 left-12 text-[140px] md:text-[220px] font-display font-extrabold text-white/[0.015] select-none pointer-events-none leading-none">
        06
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 tracking-[0.3em] uppercase mb-4">
              <span className="text-pink-400 font-bold">06</span>
              <span className="w-6 h-[1px] bg-neutral-700" />
              <span>DIGITAL BROADCAST</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
              THE FEED / <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                @PDTTTTTTTT._
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-pink-500 text-white font-tech font-bold text-xs tracking-wider uppercase transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Editorial Visual Feed Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {PDT_FEED.map((post) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl border border-white/[0.08] bg-neutral-900/30 overflow-hidden flex flex-col justify-between hover:border-pink-500/40 transition-colors shadow-lg"
            >
              {/* Visual image */}
              <div className="relative aspect-square overflow-hidden bg-neutral-950">
                <img
                  src={post.image}
                  alt={post.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono text-pink-300 font-bold uppercase">
                  {post.tag}
                </div>

                {/* Instagram Icon indicator */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>

              {/* Caption & Metadata */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <p className="text-xs text-neutral-300 font-normal leading-relaxed line-clamp-3">
                  {post.caption}
                </p>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>{post.handle}</span>
                  <span className="text-pink-400 font-semibold">{post.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
