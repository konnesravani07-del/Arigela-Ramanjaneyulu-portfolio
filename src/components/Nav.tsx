import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#training", label: "Training" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? "glass rounded-full px-6 py-2 md:mx-6" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <img
  src="/image/arigela.jpg"
  alt="Arigela Ramanjaneyulu"
  className="h-10 w-10 rounded-full border-2 border-gold object-cover"
/>
          <span className="hidden sm:inline">Arigela Ramanjaneyulu<span className="text-gold">.</span></span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-gold text-3xl"
>
  {menuOpen ? "✕" : "☰"}
</button>
        <a
          href="#contact"
          className="hidden md:inline-flex glass-gold rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wide"
        >
          Open to Work
        </a>
        {menuOpen && (
  <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md md:hidden flex flex-col items-center py-6 gap-5">
    {nav.map((n) => (
      <a
        key={n.href}
        href={n.href}
        onClick={() => setMenuOpen(false)}
        className="text-white text-lg hover:text-yellow-400"
      >
        {n.label}
      </a>
    ))}
  </div>
)}
      </div>
    </header>
  );
}
