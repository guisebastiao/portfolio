"use client";

import { StripedPatternBase } from "@/shared/components/striped-pattern-base";
import { CARD_CLASSNAME } from "@/features/about/constants/cards-classname";
import { PROJECT_COUNT } from "@/features/about/constants/project-count";
import { NumberTicker } from "@/shared/components/ui/number-ticker";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export const BoxProject = () => {
  const { t } = useTranslation("about");

  return (
    <div className={twMerge(CARD_CLASSNAME, "flex-1")}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-baseline gap-0.5 text-foreground/90">
          <span className="text-3xl font-black text-primary">+</span>
          <NumberTicker className="text-5xl font-black tracking-tighter" value={PROJECT_COUNT} />
        </div>
        <span className="mt-1 text-xs font-semibold tracking-widest tabular-nums text-muted-foreground uppercase">
          {t("card-me.wrapper.project.title")}
        </span>
      </div>
      <StripedPatternBase />
    </div>
  );
};
