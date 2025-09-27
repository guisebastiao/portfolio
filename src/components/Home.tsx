import curriculum from "@/assets/curriculum_guilhermesebastiao.pdf";
import { Download, Github, Linkedin } from "lucide-react";
import { TypedText } from "@/components/TypedText";
import { motion, Variants } from "framer-motion";
import photo from "@/assets/photo.png";

export const Home = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-5 py-3"
      data-container="0"
    >
      <article className="space-y-6 max-w-lg text-center md:text-left">
        <motion.h1
          className="text-4xl font-bold"
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          Olá, eu sou <span className="text-blue-500">Guilherme</span>
        </motion.h1>
        <motion.h2
          className="text-xl text-medium text-secondary-foreground"
          variants={typedTextVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          <TypedText />
        </motion.h2>
        <motion.p
          className="text-muted-foreground leading-relaxed text-sm"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          Desenvolvedor Web Fullstack e estudante de Ciência da Computação na Unisul, apaixonado por tecnológia.
        </motion.p>
        <motion.div
          variants={buttonDownloadVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          <a
            className="inline-flex items-center gap-2 px-5 py-2 text-white rounded-md bg-blue-600 hover:bg-blue-500 transition text-sm font-medium"
            download="curriculum_guisebastiao.pdf"
            href={curriculum}
          >
            <Download className="size-4" />
            Baixar Currículo
          </a>
        </motion.div>
        <motion.div
          className="flex items-center justify-center md:justify-start gap-3 pt-2"
          variants={linksVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          <a
            href="https://github.com/guisebastiao"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full hover:bg-zinc-800 transition"
          >
            <Github className="size-4 text-muted-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-sebastiao/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full hover:bg-zinc-800 transition"
          >
            <Linkedin className="size-4 text-muted-foreground" />
          </a>
        </motion.div>
      </article>
      <motion.div
        className="inline-flex justify-center h-[420px] md:h-[500px]"
        variants={imageVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ amount: 0.5 }}
      >
        <img
          src={photo}
          alt="Guilherme-Sebastião"
          className="object-contain [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] dark:opacity-80"
        />
      </motion.div>
    </section>
  );
};

const titleVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
};

const typedTextVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
};

const paragraphVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
};

const buttonDownloadVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
};

const linksVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
};

const imageVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: 50,
  },
};
