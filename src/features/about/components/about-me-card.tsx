"use client";

import { StripedPatternBase } from "@/shared/components/striped-pattern-base";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { CARD_CLASSNAME } from "@/features/about/constants/cards-classname";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { Joystick } from "lucide-react";
import { motion } from "motion/react";

export const AboutMeCard = () => {
  const { t } = useTranslation("about");

  return (
    <motion.div
      {...motionVariantHelper(fadeSlide({ y: -50 }))}
      className={twMerge(CARD_CLASSNAME, "flex flex-col flex-1")}
    >
      <div className="mb-3 flex items-center gap-1.5">
        <Joystick className="size-4.5 text-foreground/90" />
        <h3 className="text-center text-base font-semibold text-foreground/90">
          {t("card-me.title")}
        </h3>
      </div>
      <p className="text-sm font-light leading-relaxed tracking-wide text-foreground/85">
        {t("card-me.description")}
      </p>
      <StripedPatternBase />
    </motion.div>
  );
};
