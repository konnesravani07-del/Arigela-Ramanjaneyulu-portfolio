import { motion } from "framer-motion";
import { SectionHeading } from "./About";
import { GraduationCap, School, BookOpen, Building2 } from "lucide-react";

const items = [
  { icon: Building2, title: "B.Tech Civil Engineering", place: "Engineering College", year: "2022 – 2025", detail: "Structural design, geotechnical, transportation & construction management." },
  { icon: GraduationCap, title: "Diploma in Civil Engineering", place: "Polytechnic", year: "2019 – 2022", detail: "Core civil engineering fundamentals with practical fieldwork." },
  { icon: BookOpen, title: "Intermediate", place: "Junior College", year: "2017 – 2019", detail: "MPC — Mathematics, Physics, Chemistry." },
  { icon: School, title: "SSC", place: "High School", year: "2017", detail: "Secondary School Certificate." },
];

export function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education" title={<>A <span className="text-gradient-gold">Foundation</span> Poured with Purpose</>} />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold via-gold/30 to-transparent md:left-1/2" />
          <div className="space-y-16">
            {items.map((it, i) => {
              const left = i % 2 === 0;
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${left ? "" : "md:[direction:rtl]"}`}
                >
                  <div className={`md:[direction:ltr] ${left ? "md:text-right" : ""}`}>
                    <div className="glass rounded-2xl p-6 transition-all hover:border-gold/40">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-gold">{it.year}</p>
                      <h3 className="mt-2 font-display text-2xl font-bold">{it.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{it.place}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.detail}</p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 top-6 md:left-1/2 md:top-6 md:-translate-x-1/2">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-primary-foreground gold-glow">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
