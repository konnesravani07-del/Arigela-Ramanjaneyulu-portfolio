import { motion } from "framer-motion";
import { SectionHeading } from "./About";
import { HardHat, Route, Waves } from "lucide-react";

const works = [
  { icon: Route, title: "CC Roads", desc: "Cement concrete road construction — layout, formwork, curing supervision." },
  { icon: HardHat, title: "Road Under Bridge", desc: "Assisted in RUB construction — excavation, structural placement & quality checks." },
  { icon: Waves, title: "RCC Water Drain Works", desc: "Reinforced cement concrete drainage — reinforcement placement, casting & finishing." },
];

export function Training() {
  return (
    <section id="training" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Industrial Training"
          title={<>Six Months, <span className="text-gradient-gold">On-Site</span></>}
          subtitle="Municipal Corporation · Real infrastructure. Real responsibility."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-gold relative overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex items-center gap-4">
              <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-gold to-gold-soft text-primary-foreground gold-glow">
                <HardHat className="h-10 w-10" />
              </div>
              <div className="md:hidden">
                <p className="font-mono text-[10px] uppercase tracking-widest text-gold">6 Months</p>
                <h3 className="font-display text-2xl font-bold">Municipal Corporation</h3>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold">Duration · 6 Months · On-site</p>
              <h3 className="mt-1 font-display text-3xl font-bold">Municipal Corporation Training</h3>
              <p className="mt-2 text-muted-foreground">
                Field exposure to municipal infrastructure projects — from surveying and formwork to concrete casting and quality assurance.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {works.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-gold/40 hover:-translate-y-1"
              >
                <div className="absolute left-4 top-4 font-mono text-[10px] text-gold/40">0{i + 1}</div>
                <div className="mt-6 mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gold/10 ring-1 ring-gold/30 transition-all group-hover:bg-gold/20">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h4 className="font-display text-xl font-bold">{w.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
