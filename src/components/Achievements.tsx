import { motion } from "framer-motion";
import { SectionHeading } from "./About";
import { Trophy, Medal, Zap, Users, MessageSquare, Brain } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "State Level Tech Fest", desc: "Represented at state-level technical competition." },
  { icon: Medal, title: "Kabaddi Runner-Up", desc: "Runner-up at competitive kabaddi tournament." },
];

const strengths = [
  { icon: Zap, name: "Hard Working" },
  { icon: Users, name: "Adaptability" },
  { icon: MessageSquare, name: "Communication" },
  { icon: Brain, name: "Fast Learner" },
];

export function Achievements() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Achievements & Strengths" title={<>Recognition & <span className="text-gradient-gold">Character</span></>} />

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-gold relative flex items-center gap-5 overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />
                <div className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold to-gold-soft text-primary-foreground gold-glow">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="relative">
                  <h4 className="font-display text-lg font-bold">{a.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <h3 className="mt-20 mb-8 text-center font-mono text-xs uppercase tracking-[0.4em] text-gold">Personal Strengths</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass group flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all hover:border-gold/40"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 ring-1 ring-gold/30 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <span className="font-display font-semibold">{s.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
