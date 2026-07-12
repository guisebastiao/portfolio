"use client";

import type { Graduation } from "@/assets/data/graduations";
import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";

type GraduationItemProps = {
  graduation: Graduation;
};

export const GraduationItem = ({ graduation }: GraduationItemProps) => {
  const { t } = useTranslation("experience");

  return (
    <div className="flex-1 space-y-4">
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-foreground/90">{t(graduation.course)}</h3>
        <p className="text-sm text-muted-foreground">{t(graduation.institution)}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 rounded-full border border-foreground/12 px-2.5 py-1 text-xs font-medium shrink-0 bg-foreground/8 text-foreground/75">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-foreground/75" />
          </span>
          {t(graduation.status)}
        </div>
        <div className="flex items-center gap-1.5 shrink-0 rounded-full border border-foreground/12 bg-foreground/8 px-2.5 py-1 text-xs text-foreground/75">
          <MapPin className="size-3.5 text-foreground/75" />
          <span>{t(graduation.location)}</span>
        </div>
      </div>
    </div>
  );
};
