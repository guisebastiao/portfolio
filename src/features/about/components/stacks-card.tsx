import { StripedPattern } from "@/shared/components/ui/striped-pattern";
import { motionProps } from "@/features/about/utils/motion-props";
import { cardRight } from "@/features/about/variants/card-right";
import { cardClass } from "@/features/about/utils/card-class";
import { useTranslation } from "react-i18next";
import { stacks } from "@/shared/utils/stacks";
import type { Language } from "@/i18n";
import { motion } from "motion/react";

export const StacksCard = () => {
  const { t, i18n } = useTranslation();

  const lang: Language = (i18n.language ?? "pt") as Language;

  return (
    <motion.div {...motionProps(cardRight)} className={cardClass}>
      <h3 className="text-xl font-semibold text-center z-10">
        {t("sections.about.card-right.title")}
      </h3>
      <div className="space-y-5 z-10">
        {Object.entries(stacks[lang]).map(([category, items]) => (
          <div key={category} className="space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-blue-500" />
              <h4 className="text-sm font-medium capitalize text-foreground/90">
                {category}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md border border-foreground/25 bg-neutral-300 dark:bg-zinc-800"
                >
                  <Icon className="size-3.5 text-foreground/85" />
                  <span className="text-xs text-foreground/85">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <StripedPattern className="size-full opacity-8 scale-x-[-1] z-0" />
    </motion.div>
  );
};
