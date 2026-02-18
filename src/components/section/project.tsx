import { LazyImage } from "@/components/lazy-image";
import { useTranslation } from "react-i18next";
import { m, Variants } from "framer-motion";
import { projects } from "@/utils/projects";
import { Github } from "lucide-react";
import { Language } from "@/i18n";

export const Project = () => {
  const { i18n, t } = useTranslation();

  const lang = i18n.language as Language;

  return (
    <section className="w-full flex flex-col items-center gap-6 py-8" data-container="2">
      <div className="text-center space-y-4 max-w-2xl">
        <m.h2 className="text-3xl font-bold" variants={titleVariant} initial="hidden" whileInView="visible" exit="exit">
          {t("sections.project.title")}
        </m.h2>
        <m.p
          className="max-w-2xl w-full text-muted-foreground"
          variants={descriptionVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          {t("sections.project.description")}
        </m.p>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3">
        {projects[lang].map((project) => (
          <m.article
            key={project.name}
            className="border bg-zinc-200 dark:bg-zinc-900 rounded-lg"
            variants={projectCardVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
          >
            <LazyImage
              src={project.cover}
              alt={`project-image-${project.name}`}
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
                <span className="text-sm"> {t("sections.project.card.redirect-code")}</span>
              </a>
            </div>
          </m.article>
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
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const descriptionVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeOut",
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
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};
