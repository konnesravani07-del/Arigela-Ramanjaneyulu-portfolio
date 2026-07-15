import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./About";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const items = [
  { icon: Mail, label: "Email", value: "arigela.ramanjaneyulu@email.com" },
  { icon: Phone, label: "Phone", value: "+91 9391666753" },
  { icon: MapPin, label: "Location", value: "Andhra Pradesh, India" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-96" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Contact" title={<>Let's <span className="text-gradient-gold">Build</span> Something</>} subtitle="Open to entry-level civil engineering opportunities, internships, and site-based roles." />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="glass relative overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold md:text-3xl">Get in touch</h3>
              <p className="mt-2 text-muted-foreground">Available for interviews and site visits.</p>
              <div className="mt-8 space-y-4">
                {items.map((it) => {
                  const Icon = it.icon;
                  return (
                    <div key={it.label} className="glass flex items-center gap-4 rounded-2xl p-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/10 ring-1 ring-gold/30">
                        <Icon className="h-4 w-4 text-gold" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-gold">{it.label}</p>
                        {it.label === "Email" ? (
  <a
    href={`mailto:${it.value}`}
    className="truncate text-sm hover:text-gold transition-colors"
  >
    {it.value}
  </a>
) : it.label === "Phone" ? (
  <a
    href={`tel:${it.value.replace(/\s/g, "")}`}
    className="truncate text-sm hover:text-gold transition-colors"
  >
    {it.value}
  </a>
) : (
  <p className="truncate text-sm">{it.value}</p>
)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3000);
              }}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-gold">Name</label>
                <input required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-gold/60 focus:bg-white/10" placeholder="Your name" />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-gold">Email</label>
                <input required type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-gold/60 focus:bg-white/10" placeholder="you@company.com" />
              </div>
              <div className="flex-1">
                <label className="font-mono text-[10px] uppercase tracking-widest text-gold">Message</label>
                <textarea required rows={5} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-gold/60 focus:bg-white/10" placeholder="Tell me about the opportunity..." />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold to-gold-soft px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:gold-glow"
              >
                {sent ? "Message Sent ✓" : (<>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>)}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
