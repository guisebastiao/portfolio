import { fadeScale } from "@/features/contact/variants/fade-scale";
import { motionProps } from "@/shared/utils/motion-props";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl space-y-4 text-center">
      <motion.h2
        {...motionProps(fadeScale())}
        className="text-center text-3xl font-bold"
      >
        {t("sections.contact.title")}
      </motion.h2>
      <motion.p
        {...motionProps(fadeScale(0.15))}
        className="my-3 text-center text-muted-foreground"
      >
        {t("sections.contact.description")}
      </motion.p>
    </div>
  );
};
