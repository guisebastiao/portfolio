import curriculum from "@/assets/curriculum_guilhermesebastiao.pdf";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { Download, Github, Linkedin } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { AuthorImage } from "@/components/author-image";
import { Meteors } from "@/components/ui/meteors";
import { motion, Variants } from "framer-motion";
import { skills } from "@/utils/skills";
import photo from "@/assets/photo.png";

export const Home = () => {
  const handleDownloadCurriculum = () => {
    const link = document.createElement("a");
    link.href = curriculum;
    link.download = "Curriculo-Guilherme-Sebastiao.pdf";
    link.click();
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-5 py-8"
      data-container="0"
    >
      <Meteors className="absolute inset-0 pointer-events-none" />
      <article className="space-y-6 max-w-lg text-center md:text-left">
        <motion.div
          className="text-4xl font-bold"
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          <span>Olá, eu sou</span> <AuroraText>Guilherme</AuroraText>
        </motion.div>
        <motion.div
          className="text-muted-foreground leading-relaxed text-xl"
          variants={typedTextVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          <TypingAnimation words={skills} loop={true} startOnView={false} />
        </motion.div>
        <motion.div
          className="text-muted-foreground leading-relaxed text-sm"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          <TextAnimate>
            Desenvolvedor Web Fullstack e estudante de Ciência da Computação na Unisul, apaixonado por tecnológia.
          </TextAnimate>
        </motion.div>
        <motion.div
          className="inline-flex"
          variants={buttonDownloadVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          <ShimmerButton className="h-10 gap-2 text-sm font-medium" onClick={handleDownloadCurriculum}>
            <Download className="size-4.5" />
            Baixar Currículo
          </ShimmerButton>
        </motion.div>
        <motion.div
          className="flex items-center justify-center md:justify-start gap-3 pt-2"
          variants={linksVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
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
        className="relative flex items-center justify-center w-full min-w-72 max-w-96 aspect-square shrink-0"
        variants={imageVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        <AuthorImage>
          <img
            src={photo}
            alt="Guilherme-Sebastião"
            className="absolute size-200 object-cover drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          />
        </AuthorImage>
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
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
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
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
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
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
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
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
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
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const imageVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: 50,
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
    x: 50,
    scale: 0.9,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
