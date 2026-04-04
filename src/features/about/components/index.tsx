import { descriptionVariant } from "@/features/about/variants/description";
import { StacksCard } from "@/features/about/components/stacks-card";
import { motionProps } from "@/features/about/utils/motion-props";
import { InfoCard } from "@/features/about/components/info-card";
import { titleVariant } from "@/features/about/variants/title";
import { useAge } from "@/features/about/hooks/use-age";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export const About = () => {
  const { t } = useTranslation();
  const { age } = useAge();

  return (
    <div
      data-container="1"
      className="w-full flex flex-col items-center gap-6 py-8"
    >
      <motion.h2 {...motionProps(titleVariant)} className="text-3xl font-bold">
        {t("sections.about.title")}
      </motion.h2>
      <motion.p
        {...motionProps(descriptionVariant)}
        className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl text-center"
      >
        {t("sections.about.description")}
      </motion.p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <InfoCard age={age} />
        <StacksCard />
      </div>
    </div>
  );
};
