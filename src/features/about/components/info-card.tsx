import { REPOSITORIES_AMOUNT } from "@/features/about/constants/repositories-amount";
import { PROJECTS_AMOUNT } from "@/features/about/constants/projects-amount";
import { StripedPattern } from "@/shared/components/ui/striped-pattern";
import { motionProps } from "@/features/about/utils/motion-props";
import { cardLeft } from "@/features/about/variants/card-left";
import { cardClass } from "@/features/about/utils/card-class";
import { Stat } from "@/features/about/components/stat";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export const InfoCard = ({ age }: { age: number }) => {
  const { t } = useTranslation();

  const list = t("sections.about.card-left.lists", {
    returnObjects: true,
  }) as string[];

  return (
    <motion.div {...motionProps(cardLeft)} className={cardClass}>
      <h3 className="text-xl font-semibold text-center z-10">
        {t("sections.about.card-left.title")}
      </h3>
      <p className="text-sm leading-relaxed text-foreground/85 text-justify indent-10 font-light z-10">
        {t("sections.about.card-left.description", { age })}
      </p>
      <ul className="space-y-4 text-foreground/80 text-[13px] leading-relaxed list-disc list-inside z-10">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="flex gap-3 flex-wrap z-10">
        <Stat
          value={`${REPOSITORIES_AMOUNT}+`}
          labelKey="sections.about.card-left.wrapper.repository.title"
        />
        <Stat
          value={`${PROJECTS_AMOUNT}+`}
          labelKey="sections.about.card-left.wrapper.project.title"
        />
      </div>
      <StripedPattern className="size-full opacity-8 z-0" />
    </motion.div>
  );
};
