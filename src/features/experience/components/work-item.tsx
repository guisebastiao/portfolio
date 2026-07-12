"use client";

import { useTranslation } from "react-i18next";
import type { Work } from "@/assets/data/works";

type WorkItemProps = {
  work: Work;
};

export const WorkItem = ({ work }: WorkItemProps) => {
  const { t } = useTranslation("experience");

  return (
    <div className="relative flex gap-4 pl-2">
      <div className="flex flex-col items-center">
        <span className="relative flex size-2.5 mt-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-foreground/75" />
        </span>
        <div className="mt-1 w-0.5 flex-1 bg-foreground/20" />
      </div>
      <div className="flex-1 space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground/90">{t(work.title)}</h3>
          <span className="shrink-0 rounded-full border border-foreground/12 bg-foreground/8 px-2.5 py-1 text-xs text-foreground/80">
            {t(work.moment)}
          </span>
        </div>
        <h4 className="text-[15px] font-bold text-foreground/80">{t(work.business)}</h4>
        <p className="mt-3 text-sm text-muted-foreground">{t(work.description)}</p>
      </div>
    </div>
  );
};
