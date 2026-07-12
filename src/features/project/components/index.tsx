"use client";

import { ProjectCard } from "@/features/project/components/project-card";
import { DiaTextReveal } from "@/shared/components/ui/dia-text-reveal";
import { PROJECTS } from "@/assets/data/projects";
import { useTranslation } from "react-i18next";

export const Project = () => {
  const { t } = useTranslation("project");

  return (
    <div data-container="2" className="w-full min-h-screen flex flex-col gap-10 py-8">
      <DiaTextReveal className="text-3xl font-bold" duration={1.5} text={t("title")} />
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
