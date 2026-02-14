import { motion, Variants } from "framer-motion";
import { projects } from "@/utils/projects";
import { Github } from "lucide-react";

export const Project = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 py-8" data-container="2">
      <div className="text-center space-y-4 max-w-2xl">
        <motion.h2
          className="text-3xl font-bold"
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          Meus Projetos
        </motion.h2>
        <motion.p
          className="max-w-2xl w-full text-muted-foreground"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          Estes são alguns dos projetos que construí com muito esforço e dedicação.
        </motion.p>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3">
        {projects.map((project) => (
          <motion.article
            key={project.name}
            className="border bg-zinc-200 dark:bg-zinc-900 rounded-lg"
            variants={projectCardVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
          >
            <img
              src={project.cover}
              alt={`Imagem do projeto ${project.name}`}
              className="w-full aspect-square rounded-t-lg object-cover"
            />
            <div className="space-y-3 p-3">
              <h3 className="text-xl font-medium">{project.name}</h3>
              <p className="text-xs text-muted-foreground">{project.description}</p>
              <div className="w-full flex flex-wrap gap-2">
                {project.stacks.map((stack) => (
                  <span key={stack} className="px-2 py-1 text-muted-foreground text-xs rounded border">
                    {stack}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-blue-500 transition"
              >
                <Github className="size-4" />
                <span className="text-sm">Código</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

const titleVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
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
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const projectCardVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
