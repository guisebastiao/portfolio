import { containerVariants } from "@/features/project/variants/container";
import { ProjectCard } from "@/features/project/components/project-card";
import { Header } from "@/features/project/components/header";
import { projects } from "@/shared/utils/projects";
import { useTranslation } from "react-i18next";
import type { Language } from "@/i18n";
import { motion } from "motion/react";

export const Project = () => {
  const { i18n } = useTranslation();

  const lang: Language = i18n.language.split("-")[0] as Language;
  const list = projects[lang] ?? projects.pt;

  return (
    <div
      data-container="2"
      className="flex w-full flex-col items-center gap-6 py-8"
    >
      <Header />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid w-full grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3"
      >
        {list.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </div>
  );
};
