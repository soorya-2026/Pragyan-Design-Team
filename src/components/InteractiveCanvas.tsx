import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulseAngle: number;
}

export const InteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 200,
      isMoving: false,
    };

    let mouseTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.isMoving = false;
      }, 1500);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Color palette extracted from PDT Monogram
    const colors = [
      "rgba(26, 86, 219, ",    // Cobalt Blue
      "rgba(108, 43, 217, ",   // Violet
      "rgba(249, 87, 56, ",    // Solar Ember Orange
      "rgba(217, 38, 169, ",   // Magenta
      "rgba(226, 232, 240, ",  // Silver Chrome
    ];

    let particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 12000), 120);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2.2 + 0.6;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size,
          baseSize: size,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.2,
          pulseSpeed: Math.random() * 0.03 + 0.01,
          pulseAngle: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle dynamic gradient around cursor position
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius * 2
      );
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.06)");
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.03)");
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Pulse animation
        p.pulseAngle += p.pulseSpeed;
        p.size = p.baseSize + Math.sin(p.pulseAngle) * 0.5;

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse interaction: Gentle magnetic attraction & swirl
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.05;
          const angle = Math.atan2(dy, dx);
          // Swirl effect
          p.vx += Math.cos(angle + Math.PI / 2) * force * 0.6;
          p.vy += Math.sin(angle + Math.PI / 2) * force * 0.6;
          p.alpha = Math.min(p.alpha + 0.02, 0.9);
        } else {
          // Return to normal speed
          p.vx *= 0.99;
          p.vy *= 0.99;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.size, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with subtle light threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 110) {
            const lineAlpha = (1 - dist2 / 110) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ willChange: "transform" }}
    />
  );
};
