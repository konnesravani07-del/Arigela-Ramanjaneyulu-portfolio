import { motion } from "framer-motion";
import { SectionHeading } from "./About";
import { Compass, FileSpreadsheet, Monitor, Languages } from "lucide-react";

const skills = [
  { icon: Compass, name: "AutoCAD", level: 85, desc: "2D drafting & construction drawings" },
  { icon: FileSpreadsheet, name: "MS Office", level: 90, desc: "Word, Excel, PowerPoint" },
  { icon: Monitor, name: "Windows OS", level: 95, desc: "System operations & tools" },
  { icon: Languages, name: "Languages", level: 80, desc: "English · Telugu · Hindi" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 blueprint-grid opacity-[0.05]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Technical Skills" title={<>Tools of the <span className="text-gradient-gold">Trade</span></>} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-gold/40"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-gold/20 to-transparent ring-1 ring-gold/30">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{s.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-gold to-gold-soft"
                    />
                  </div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-gold">{s.level}%</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
