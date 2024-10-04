import { ReactLenis } from "lenis/react";

import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Portfolio = () => {
  return (
    <ReactLenis root>
      <main className="w-full min-h-64 flex flex-col items-center bg-zinc-950 px-10 font-poppins">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
};
