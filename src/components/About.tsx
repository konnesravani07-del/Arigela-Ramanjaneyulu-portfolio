import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.3em] text-gold"
      >
        <span className="h-1 w-1 rounded-full bg-gold" /> {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-4xl font-bold leading-tight md:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-muted-foreground md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(value * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient-gold md:text-5xl">
      {value % 1 === 0 ? Math.round(n) : n.toFixed(1)}
      {suffix}
    </span>
  );
}

export function About() {
  const stats = [
    { label: "CGPA", value: 8.3, suffix: "" },
    { label: "Months Training", value: 6, suffix: "" },
    { label: "Technical Skills", value: 8, suffix: "+" },
    { label: "Languages", value: 3, suffix: "" },
  ];
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="About Me" title={<>Building the <span className="text-gradient-gold">Future</span>, one blueprint at a time.</>} />

        <div className="grid gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden p-2"
          >
            
              
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">Civil Engineering Fresher</p>
            <h3 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl">
              Seeking opportunities to <span className="text-gradient-gold">contribute, learn</span> and grow.
            </h3>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A driven Civil Engineering graduate with hands-on industrial experience at the Municipal Corporation.
              Passionate about infrastructure, structural design and building resilient communities. Ready to bring
              precision, energy and modern engineering thinking to a forward-looking construction team.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-5 text-center"
                >
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
