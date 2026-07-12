"use client";

import { StripedPatternBase } from "@/shared/components/striped-pattern-base";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { useTrackEvents } from "@/features/project/hooks/use-track-events";
import { BaseImage } from "@/shared/components/base-image";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { type Project } from "@/assets/data/projects";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Code } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation("project");

  const { redirectedToGithub } = useTrackEvents();

  return (
    <motion.div
      className="group relative bg-foreground/5 border-2 border-foreground/10 rounded-lg"
      {...motionVariantHelper(fadeSlide({ scale: 0.9 }))}
    >
      <div className="aspect-square w-full">
        <BaseImage
          src={project.cover}
          alt={project.name}
          className="rounded-t-lg grayscale-90 group-hover:grayscale-0 transition"
        />
      </div>
      <div className="space-y-3 p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium">{project.name}</h3>
          <a
            href={project.link}
            className="flex items-center h-7 gap-1 text-sm text-foreground/75 group-hover:text-foreground group-hover:bg-foreground/10 hover:bg-foreground/20 border border-transparent group-hover:border-foreground/10 rounded-md px-2.5 transition"
            onClick={() => redirectedToGithub(project.name)}
            target="_blank"
            rel="noreferrer"
          >
            <Code className="size-4" />
            <span className="text-sm">{t("card.redirect-code")}</span>
          </a>
        </div>
        <p className="text-xs text-muted-foreground h-full">{t(project.description)}</p>
        <div className="flex w-full flex-wrap gap-2">
          {project.stacks.map((stack, index) => (
            <div
              key={index}
              className="rounded-md border px-2 py-0.5 border-foreground/15 bg-foreground/7 select-none"
            >
              <span className="text-xs text-foreground/80">{stack}</span>
            </div>
          ))}
        </div>
      </div>
      <StripedPatternBase />
    </motion.div>
  );
};
