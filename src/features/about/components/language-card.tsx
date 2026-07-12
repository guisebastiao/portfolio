"use client";

import { StripedPatternBase } from "@/shared/components/striped-pattern-base";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { CARD_CLASSNAME } from "@/features/about/constants/cards-classname";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { LANGUAGES } from "@/assets/data/languages";
import { Globe, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export const LanguageCard = () => {
  const { t } = useTranslation("about");

  return (
    <motion.div className={CARD_CLASSNAME} {...motionVariantHelper(fadeSlide({ x: -50 }))}>
      <div className="flex items-center gap-1.5 mb-3">
        <Globe className="size-4.5 text-foreground/85" />
        <h1 className="text-[15px] font-medium tracking-wide text-foreground/85">
          {t("languages.title")}
        </h1>
      </div>
      <div className="flex gap-2">
        {LANGUAGES.map(({ name, level }, index) => (
          <div
            key={index}
            className="flex items-center flex-1 px-3 py-1 gap-2 bg-foreground/5 border border-foreground/10 rounded-md"
          >
            <Languages className="text-foreground/80" />
            <div className="flex-1 ">
              <h4 className="text-[15px] text-foreground/85 tracking-wide">{t(name)}</h4>
              <p className="text-foreground/75 text-sm font-light">{t(level)}</p>
            </div>
          </div>
        ))}
      </div>
      <StripedPatternBase />
    </motion.div>
  );
};
