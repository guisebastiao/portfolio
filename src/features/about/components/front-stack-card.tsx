"use client";

import { StripedPatternBase } from "@/shared/components/striped-pattern-base";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { CARD_CLASSNAME } from "@/features/about/constants/cards-classname";
import { StackComponent } from "@/features/about/components/stack";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { DEV_STACKS } from "@/assets/data/stacks";
import { useTranslation } from "react-i18next";
import { LaptopMinimal } from "lucide-react";
import { motion } from "motion/react";

export const FrontStackCard = () => {
  const { t } = useTranslation("about");

  const { stacks } = DEV_STACKS.filter((stack) => stack.type === "frontend")[0];

  return (
    <motion.div className={CARD_CLASSNAME} {...motionVariantHelper(fadeSlide({ y: -50 }))}>
      <div className="flex items-center gap-1.5 mb-3">
        <LaptopMinimal className="size-4.5 text-foreground/85" />
        <h1 className="text-[15px] font-medium tracking-wide text-foreground/85">
          {t("card-frontend.title")}
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
