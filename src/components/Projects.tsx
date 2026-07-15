import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeading } from "./About";
import { ArrowUpRight, Plus } from "lucide-react";

const projects = [
  {
    tag: "Academic",
    title: "RCC Water Drain Design",
    desc: "Design and analysis of reinforced concrete drainage systems for urban stormwater management.",
    year: "2025",
  },
  {
    tag: "Field",
    title: "CC Road Construction",
    desc: "On-site supervision of cement concrete road layout, formwork and quality control at Municipal Corp.",
    year: "2024",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const on = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 8;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -8;
    setT({ x, y });
  };
  return (
    <div
      ref={ref}
      onMouseMove={on}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{ perspective: "1200px" }}
      className="h-full"
    >
      <div
        style={{
          transform: `rotateY(${t.x}deg) rotateX(${t.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
        }}
        className="h-full"
      >
        {children}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Projects" title={<>Selected <span className="text-gradient-gold">Work</span></>} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <TiltCard>
                <div className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all hover:border-gold/40">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-charcoal to-background">
                    <div className="absolute inset-0 blueprint-grid opacity-40" />
                    <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full p-8 text-gold/70">
                      <g stroke="currentColor" strokeWidth="0.6" fill="none">
                        <rect x="20" y="30" width="160" height="90" />
                        <rect x="20" y="30" width="80" height="45" />
                        <rect x="100" y="75" width="80" height="45" />
                        <line x1="20" y1="20" x2="180" y2="20" strokeWidth="1" />
                        <line x1="20" y1="15" x2="20" y2="25" />
                        <line x1="180" y1="15" x2="180" y2="25" />
                        <circle cx="100" cy="75" r="3" fill="currentColor" />
                      </g>
                      <text x="90" y="18" fontSize="6" fill="currentColor" fontFamily="monospace">160.00m</text>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-gold backdrop-blur">
                      {p.tag}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-gold">{p.year}</span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass group flex min-h-[380px] flex-col items-center justify-center rounded-3xl border-dashed p-10 text-center transition-all hover:border-gold/50"
          >
            <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-gold/10 ring-1 ring-gold/30 transition-transform group-hover:rotate-90">
              <Plus className="h-6 w-6 text-gold" />
            </div>
            <p className="font-display text-lg font-semibold">More projects coming soon.</p>
            <p className="mt-2 text-sm text-muted-foreground">In progress — check back shortly.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
