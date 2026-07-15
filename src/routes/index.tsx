import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Training } from "@/components/Training";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Certificates } from "@/components/Certificates";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-foreground">
        <Nav />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Training />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Certificates />
        <Footer />
        
      </div>
    </SmoothScroll>
  );
}
