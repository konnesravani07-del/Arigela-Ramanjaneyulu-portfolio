import { motion } from "framer-motion";

export function Certificates() {
  return (
    <section id="certificates" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Certifications
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Professional <span className="text-gradient-gold">Certificates</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 border border-gold/20 max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gold">
            Municipal Corporation Internship
          </h3>

          <p className="mt-3 text-muted-foreground">
            Successfully completed internship on
            <strong> Site Work (Construction of CC Roads and CC Drains)</strong>
            at Municipal Corporation, Tirupati.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <span className="rounded-full border border-gold/30 px-4 py-2">
              📅 24 Dec 2025 – 05 Feb 2026
            </span>

            <span className="rounded-full border border-gold/30 px-4 py-2">
              🏛 Municipal Corporation, Tirupati
            </span>
          </div>

          <a
  href="/certificates/internship-certificate.pdf"
  target="_blank"
  rel="noopener noreferrer"
 className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.35)]"
>
  📄 View Certificate
</a>
        </motion.div>

      </div>
    </section>
  );
}