import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "explore" | "drag" | "inspect">("default");
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on non-touch desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detect hover target attributes
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
        if (cursorAttr) {
          setCursorType(cursorAttr as "pointer" | "explore" | "drag" | "inspect");
        } else if (
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("select") ||
          target.tagName === "BUTTON" ||
          target.tagName === "A"
        ) {
          setCursorType("pointer");
        } else {
          setCursorType("default");
        }
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Halo */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-purple-400/40 flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (cursorType === "default" ? 18 : 36),
          y: mousePosition.y - (cursorType === "default" ? 18 : 36),
          width: cursorType === "default" ? 36 : 72,
          height: cursorType === "default" ? 36 : 72,
          scale: isClicked ? 0.85 : 1,
          backgroundColor: cursorType === "pointer" ? "rgba(147, 51, 234, 0.15)" : "transparent",
          borderColor: cursorType === "pointer" ? "rgba(192, 132, 252, 0.8)" : "rgba(255, 255, 255, 0.3)",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 400,
          mass: 0.5,
        }}
      >
        {/* Cursor Mode Label */}
        {cursorType !== "default" && cursorType !== "pointer" && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-white uppercase px-1">
            {cursorType}
          </span>
        )}
      </motion.div>

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicked ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 900,
        }}
      />
    </div>
  );
};
