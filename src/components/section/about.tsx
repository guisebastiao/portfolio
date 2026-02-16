import { StripedPattern } from "@/components/ui/striped-pattern";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { stacks } from "@/utils/stacks";

export const About = () => {
  const { t } = useTranslation();

  const handleGetAgeYears = (): number => {
    const birthDate = new Date("2005-12-10");
    const now = new Date();

    const ageMs = now.getTime() - birthDate.getTime();
    return Math.floor(ageMs / (1000 * 60 * 60 * 24 * 365.25));
  };

  return (
    <section data-container="1" className="w-full flex flex-col items-center gap-6 py-8">
      <motion.h2
        className="text-3xl font-bold"
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        {t("sections.about.title")}
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl text-center"
        variants={descriptionVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        {t("sections.about.description")}
      </motion.p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <motion.div
          className="relative bg-foreground/5 border-2 border-foreground/10 rounded-lg p-5 flex flex-col justify-start gap-6"
          variants={cardLeft}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          <h3 className="text-xl font-semibold text-center">{t("sections.about.card-left.title")}</h3>
          <p className="text-sm leading-relaxed text-foreground/85 text-justify indent-10 font-light">
            {t("sections.about.card-left.description", {
              age: handleGetAgeYears(),
            })}
          </p>
          <ul className="space-y-4 text-foreground/80 text-[13px] leading-relaxed list-disc list-inside">
            <li>{t("sections.about.card-left.lists-1")}</li>
            <li>{t("sections.about.card-left.lists-2")}</li>
            <li>{t("sections.about.card-left.lists-3")}</li>
            <li>{t("sections.about.card-left.lists-4")}</li>
            <li>{t("sections.about.card-left.lists-5")}</li>
          </ul>
          <div className="flex gap-3 flex-wrap">
            <div className="min-w-36 flex-1 h-24 border-2 rounded-lg border-foreground/10 bg-foreground/5 flex justify-center items-center flex-col gap-1">
              <h4 className="font-bold text-xl text-blue-600">15+</h4>
              <span className="text-sm">{t("sections.about.card-left.wrapper.repository.title")}</span>
            </div>
            <div className="min-w-36 flex-1 h-24 border-2 rounded-lg border-foreground/10 bg-foreground/5 flex justify-center items-center flex-col gap-1">
              <h4 className="font-bold text-xl text-blue-600">4+</h4>
              <span className="text-sm">{t("sections.about.card-left.wrapper.project.title")}</span>
            </div>
          </div>
          <StripedPattern className="size-full opacity-15" />
        </motion.div>
        <motion.div
          className="relative bg-foreground/5 border-2 border-foreground/10 rounded-lg p-5 flex flex-col justify-start gap-6"
          variants={cardRight}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          <h3 className="text-xl font-semibold text-center">{t("sections.about.card-right.title")}</h3>
          <div className="space-y-5">
            {Object.entries(stacks).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-blue-500" />
                  <h4 className="text-sm font-medium capitalize text-foreground/90">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 px-2 py-1.5 rounded-md border border-foreground/25 bg-foreground/5"
                    >
                      <Icon className="size-3.5 text-foreground/85" />
                      <span className="text-xs text-foreground/85">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <StripedPattern className="size-full opacity-15 scale-x-[-1]" />
        </motion.div>
      </div>
    </section>
  );
};

const titleVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const descriptionVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: 30,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const cardLeft: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: -100,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const cardRight: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: 100,
  },
};
