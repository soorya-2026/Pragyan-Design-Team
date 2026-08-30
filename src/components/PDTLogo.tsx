import React, { useState } from "react";
import { motion } from "motion/react";
import { sound } from "../utils/audio";
import { SITE_CONFIG } from "../data/site";

interface PDTLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  showText?: boolean;
  interactive?: boolean;
  className?: string;
  id?: string;
  glowColor?: "blue" | "purple" | "orange" | "multi";
}

export const PDTLogo: React.FC<PDTLogoProps> = ({
  size = "md",
  showText = true,
  interactive = true,
  className = "",
  id = "pdt-brand-logo",
  glowColor = "multi",
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [spinCount, setSpinCount] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.12);
    setRotateY(x * 0.12);
  };

  const handleMouseEnter = () => {
    if (!interactive) return;
    setIsHovered(true);
    sound.playHover();
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = () => {
    if (!interactive) return;
    sound.playEnergyPulse();
    setSpinCount((prev) => prev + 1);
  };

  // Dimensions based on size
  const sizeMap = {
    sm: "w-9 h-9",
    md: "w-28 h-28 sm:w-32 sm:h-32",
    lg: "w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72",
    xl: "w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96",
    hero: "w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]",
  };

  const glowStyles = {
    multi: "from-blue-600/35 via-cyan-500/25 to-indigo-600/35",
    blue: "from-blue-600/50 via-cyan-500/30 to-transparent",
    purple: "from-indigo-600/50 via-purple-500/30 to-transparent",
    orange: "from-orange-600/40 via-amber-500/25 to-transparent",
  };

  return (
    <div
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      data-cursor={interactive ? "explore" : undefined}
      className={`inline-flex flex-col items-center justify-center select-none cursor-pointer ${className}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
          rotateZ: spinCount * 360,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{
          rotateX: { type: "spring", stiffness: 350, damping: 25 },
          rotateY: { type: "spring", stiffness: 350, damping: 25 },
          rotateZ: { type: "spring", stiffness: 120, damping: 15 },
          scale: { duration: 0.3 },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Dynamic Multi-frequency Aura Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${glowStyles[glowColor]} rounded-2xl blur-3xl opacity-75 pointer-events-none transform scale-110 transition-all duration-500`}
        />

        {/* Ambient Ring Wave on Hover */}
        {isHovered && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={{ scale: 1.25, opacity: 0 }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl border border-cyan-400/40 pointer-events-none"
          />
        )}

        {/* High-Resolution Master Official Monogram Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={SITE_CONFIG.officialLogo}
            alt="Pragyan Design Team Official Logo"
            referrerPolicy="no-referrer"
            className={`${sizeMap[size]} object-contain rounded-2xl relative z-10 drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)]`}
          />

          {/* Interactive Specular Light Sheen sweep on hover */}
          {isHovered && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "200%", opacity: 0.6 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent skew-x-12 z-20 pointer-events-none"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};
