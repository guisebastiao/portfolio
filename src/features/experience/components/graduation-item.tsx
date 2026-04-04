import type { graduations } from "@/shared/utils/graduations";
import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";

interface GraduationItemProps {
  grad: (typeof graduations)["pt"][number];
}

export const GraduationItem = ({ grad }: GraduationItemProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <h3 className="font-medium text-foreground/90">{grad.course}</h3>
        <p className="text-sm leading-relaxed text-foreground/85">
          {grad.institution}
        </p>
        <div className="flex items-center gap-2">
          <span className="block size-2 rounded-full bg-emerald-500" />
          <span className="text-[13px] text-foreground/80">{grad.status}</span>
        </div>
      </div>
      <div className="space-y-1.5">
        <h4 className="text-[15px] font-medium tracking-wide text-foreground/90">
          {t("sections.experience.card-top.location")}
        </h4>
        <div className="flex items-center gap-1">
          <MapPin className="size-4 text-blue-500" />
          <span className="text-[13px] text-foreground/80">
            {grad.location}
          </span>
        </div>
      </div>
    </div>
  );
};
