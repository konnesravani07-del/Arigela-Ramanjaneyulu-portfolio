import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const raf = useRef<number | null>(null);
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    const loop = (t: number) => {
      lenis.raf(t);
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}
