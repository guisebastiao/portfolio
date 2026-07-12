"use client";

import { DatabaseStackCard } from "@/features/about/components/database-stack-card";
import { FrontStackCard } from "@/features/about/components/front-stack-card";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { ToolStackCard } from "@/features/about/components/tool-stack-card";
import { BackStackCard } from "@/features/about/components/back-stack-card";
import { BoxRepository } from "@/features/about/components/box-repository";
import { LanguageCard } from "@/features/about/components/language-card";
import { AboutMeCard } from "@/features/about/components/about-me-card";
import { DiaTextReveal } from "@/shared/components/ui/dia-text-reveal";
import { BoxProject } from "@/features/about/components/box-project";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export const About = () => {
  const { t } = useTranslation("about");

  return (
    <div data-container="1" className="flex min-h-screen w-full flex-col gap-10 py-8">
      <DiaTextReveal className="text-3xl font-bold" duration={1.5} text={t("title")} />
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-[3fr_2fr_2fr]">
        <div className="flex h-full flex-col gap-3 md:col-span-2 lg:col-span-1 lg:row-span-2">
          <AboutMeCard />
          <LanguageCard />
          <motion.div className="flex w-full gap-3" {...motionVariantHelper(fadeSlide({ y: 50 }))}>
            <BoxRepository />
            <BoxProject />
          </motion.div>
        </div>
        <FrontStackCard />
        <BackStackCard />
        <DatabaseStackCard />
        <ToolStackCard />
      </div>
    </div>
  );
};
