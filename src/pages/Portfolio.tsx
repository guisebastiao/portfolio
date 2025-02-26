import { ReactLenis } from "lenis/react";

import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Portfolio = () => {
  return (
    <ReactLenis root>
      <main className="flex items-center flex-col bg-zinc-950">
        <Header />
        <div className="mt-16 px-3 sm:px-10">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </main>
    </ReactLenis>
  );
};
