import { fadeScale } from "@/features/project/variants/fade-scale";
import { LazyImage } from "@/shared/components/lazy-image";
import { projects } from "@/shared/utils/projects";
import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: (typeof projects)["pt"][number];
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.article
      variants={fadeScale()}
      className="rounded-lg border bg-zinc-200 dark:bg-zinc-900"
    >
      <LazyImage
        src={project.cover}
        alt={project.name}
        className="aspect-square w-full rounded-t-lg object-cover"
      />
      <div className="space-y-3 p-3">
        <h3 className="text-xl font-medium">{project.name}</h3>
        <p className="text-xs text-muted-foreground">{project.description}</p>
        <div className="flex w-full flex-wrap gap-2">
          {project.stacks.map((stack) => (
            <span
              key={stack}
              className="rounded border px-2 py-1 text-xs text-muted-foreground"
            >
              {stack}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-muted-foreground transition hover:text-blue-500"
        >
          <Github className="size-4" />
          <span className="text-sm">
            {t("sections.project.card.redirect-code")}
          </span>
        </a>
      </div>
    </motion.article>
  );
};
