import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative border-t border-white/5 py-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-gold to-gold-soft text-primary-foreground font-display font-bold">A</span>
          <div>
            <p className="font-display text-sm font-semibold">Arigela Ramanjaneyulu</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Civil Engineer</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} · Designing Strong Foundations for Tomorrow.</p>
      </div>
    </motion.footer>
  );
}
