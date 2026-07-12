"use client";

import { StripedPatternBase } from "@/shared/components/striped-pattern-base";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { CARD_CLASSNAME } from "@/features/about/constants/cards-classname";
import { StackComponent } from "@/features/about/components/stack";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { DEV_STACKS } from "@/assets/data/stacks";
import { useTranslation } from "react-i18next";
import { Hammer } from "lucide-react";
import { motion } from "motion/react";

export const ToolStackCard = () => {
  const { t } = useTranslation("about");

  const { stacks } = DEV_STACKS.filter((stack) => stack.type === "tools")[0];

  return (
    <motion.div className={CARD_CLASSNAME} {...motionVariantHelper(fadeSlide({ x: 50 }))}>
      <div className="flex items-center gap-1.5 mb-3">
        <Hammer className="size-4.5 text-foreground/85" />
        <h1 className="font-medium text-[15px] tracking-wide text-foreground/85">
          {t("card-tools.title")}
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-1.5">
        {stacks.map((stack, index) => (
          <StackComponent key={index} stack={stack} />
        ))}
      </div>
      <StripedPatternBase />
    </motion.div>
  );
};
