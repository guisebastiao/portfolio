import { Experience } from "@/components/Experience";
import { motion, Variants } from "framer-motion";
import { Project } from "@/components/Project";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Home } from "@/components/Home";
import { Fragment } from "react";

export const Portfolio = () => {
  return (
    <Fragment>
      <Header />
      <motion.section
        variants={containerVariant}
        className="max-w-6xl flex items-center flex-col gap-32 mt-16 px-2"
      >
        <Home />
        <About />
        <Project />
        <Experience />
        <Contact />
      </motion.section>
      <Footer />
    </Fragment>
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
