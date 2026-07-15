import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Download, FolderOpen } from "lucide-react";

function DustParticles() {
  const particles = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const left = (i * 37) % 100;
        const delay = (i * 0.7) % 8;
        const dur = 8 + ((i * 3) % 10);
        const size = 1 + (i % 3);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-gold/40"
            style={{
              left: `${left}%`,
              bottom: 0,
              width: size,
              height: size,
              animation: `dust ${dur}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

function BlueprintCursor() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const on = (e: MouseEvent) => setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, []);
  return (
    <div
      className="pointer-events-none absolute inset-0 blueprint-grid opacity-40 transition-transform duration-300"
      style={{ transform: `translate(${(pos.x - 0.5) * -30}px, ${(pos.y - 0.5) * -30}px)` }}
    />
  );
}

function Building3D() {
  return (
    <div className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 lg:block" style={{ perspective: "1200px" }}>
      <div className="animate-float-slow" style={{ transformStyle: "preserve-3d" }}>
        <svg width="280" height="360" viewBox="0 0 280 360" fill="none" className="drop-shadow-[0_20px_60px_rgba(230,170,60,0.25)]">
          <defs>
            <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="oklch(0.82 0.16 75)" stopOpacity="0.9" />
              <stop offset="1" stopColor="oklch(0.6 0.14 45)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Tower silhouette */}
          <g stroke="oklch(0.82 0.16 75 / 0.6)" strokeWidth="1.2" fill="url(#bg1)" fillOpacity="0.08">
            <path d="M60 340 L60 120 L100 100 L100 340 Z" />
            <path d="M110 340 L110 60 L170 40 L170 340 Z" />
            <path d="M180 340 L180 140 L220 120 L220 340 Z" />
          </g>
          {/* Windows */}
          <g fill="oklch(0.82 0.16 75)" fillOpacity="0.7">
            {Array.from({ length: 14 }).map((_, r) =>
              Array.from({ length: 4 }).map((_, c) => (
                <rect key={`${r}-${c}`} x={118 + c * 14} y={70 + r * 18} width="6" height="8" />
              ))
            )}
          </g>
          <line x1="0" y1="340" x2="280" y2="340" stroke="oklch(0.82 0.16 75)" strokeOpacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function FloatingBlueprint() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, rotateY: -30 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
      className="absolute left-[6%] top-[22%] hidden lg:block"
      style={{ perspective: "1000px" }}
    >
      <div className="glass w-64 rotate-[-8deg] p-4 animate-float">
        <div className="mb-2 flex items-center justify-between text-[10px] font-mono text-gold/70">
          <span>BLUEPRINT · 01</span>
          <span>SCALE 1:100</span>
        </div>
        <svg viewBox="0 0 200 140" className="w-full">
          <g stroke="oklch(0.82 0.16 75 / 0.7)" strokeWidth="0.8" fill="none">
            <rect x="10" y="10" width="180" height="120" />
            <rect x="10" y="10" width="90" height="60" />
            <rect x="100" y="10" width="90" height="60" />
            <rect x="10" y="70" width="60" height="60" />
            <rect x="70" y="70" width="120" height="60" />
            <circle cx="100" cy="70" r="4" />
            <path d="M10 40 L30 40 M40 10 L40 30" strokeWidth="1.5" />
          </g>
          <g fontSize="6" fill="oklch(0.82 0.16 75 / 0.8)" fontFamily="monospace">
            <text x="45" y="8">6.00m</text>
            <text x="0" y="42">3.5</text>
          </g>
        </svg>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* backdrop */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <BlueprintCursor />

      {/* Light sweep */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[300px] bg-gradient-to-b from-gold/20 via-gold/5 to-transparent blur-3xl animate-light-sweep" />

      {/* Rotating gear */}
      <div className="pointer-events-none absolute right-[20%] top-[15%] hidden opacity-20 md:block">
        <svg width="140" height="140" viewBox="0 0 100 100" className="animate-spin-slow text-gold">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="15" />
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i * 30 * Math.PI) / 180;
              const x1 = 50 + Math.cos(a) * 30;
              const y1 = 50 + Math.sin(a) * 30;
              const x2 = 50 + Math.cos(a) * 40;
              const y2 = 50 + Math.sin(a) * 40;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
            })}
          </g>
        </svg>
      </div>

      {/* Steel rods diagonal */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-2/3 w-full opacity-20">
        <svg viewBox="0 0 800 600" className="h-full w-full" preserveAspectRatio="none">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1={-100 + i * 60} y1="600" x2={200 + i * 90} y2="100" stroke="oklch(0.82 0.16 75)" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <FloatingBlueprint />
      <Building3D />
      <DustParticles />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          Civil Engineer · Portfolio 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          ARIGELA
          <br />
          <span className="text-gradient-gold">RAMANJANEYULU</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 font-mono text-sm uppercase tracking-[0.4em] text-muted-foreground"
        >
          — Civil Engineer —
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl"
        >
          "Designing Strong Foundations for Tomorrow."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold to-gold-soft px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:gold-glow"
          >
            <FolderOpen className="h-4 w-4" /> View Projects
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-foreground transition-all hover:border-gold/50"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
          <div className="relative h-10 w-6 rounded-full border border-gold/40">
            <span className="absolute left-1/2 top-2 h-1.5 w-1 -translate-x-1/2 rounded-full bg-gold animate-scroll-hint" />
          </div>
          <ArrowDown className="h-3 w-3 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
