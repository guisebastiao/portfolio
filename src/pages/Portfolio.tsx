import { ReactLenis } from "lenis/react";

import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Project } from "@/components/Project";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Detail } from "@/components/Detail";
import { motion, Variants } from "framer-motion";

export const Portfolio = () => {
  return (
    <ReactLenis root>
      <div className="relative flex flex-col items-center bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
        <Detail />
        <Header />
        <motion.main
          variants={containerVariant}
          className="max-w-6xl flex items-center flex-col gap-32 mt-16 px-2"
        >
          <Home />
          <About />
          <Project />
          <Experience />
          <Contact />
        </motion.main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

const containerVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
