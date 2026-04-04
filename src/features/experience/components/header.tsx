import { fadeScale } from "@/features/experience/variants/fade-scale";
import { motionProps } from "@/shared/utils/motion-props";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl space-y-4 text-center">
      <motion.h2 {...motionProps(fadeScale())} className="text-3xl font-bold">
        {t("sections.experience.title")}
      </motion.h2>
      <motion.p
        {...motionProps(fadeScale(0.15))}
        className="text-sm leading-relaxed text-muted-foreground md:text-base"
      >
        {t("sections.experience.description")}
      </motion.p>
    </div>
  );
};
