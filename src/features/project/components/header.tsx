import { fadeScale } from "@/features/project/variants/fade-scale";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl space-y-4 text-center">
      <motion.h2 variants={fadeScale()} className="text-3xl font-bold">
        {t("sections.project.title")}
      </motion.h2>
      <motion.p
        variants={fadeScale(0.1)}
        className="w-full max-w-2xl text-muted-foreground"
      >
        {t("sections.project.description")}
      </motion.p>
    </div>
  );
};
