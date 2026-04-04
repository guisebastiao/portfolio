import { TypingAnimation } from "@/shared/components/ui/typing-animation";
import { ShimmerButton } from "@/shared/components/ui/shimmer-button";
import { SocialLink } from "@/features/hero/components/social-link";
import { AuroraText } from "@/shared/components/ui/aurora-text";
import { slideX } from "@/features/hero/variants/slide-x";
import { motionProps } from "@/shared/utils/motion-props";
import { Download, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { skills } from "@/data/skills";
import { motion } from "motion/react";
import { useCallback } from "react";

export const Content = () => {
  const { t } = useTranslation();

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/curriculum_guilhermesebastiao.pdf";
    link.download = "curriculum_guilhermesebastiao.pdf";
    link.click();
  }, []);

  return (
    <article className="max-w-lg space-y-6 text-center md:text-left">
      <motion.div {...motionProps(slideX(-80))}>
        <h1 className="text-4xl font-bold">
          {t("sections.hero.title")} <AuroraText>Guilherme</AuroraText>
        </h1>
      </motion.div>
      <motion.div {...motionProps(slideX(-80, 0.15))}>
        <TypingAnimation
          words={skills}
          loop
          startOnView={false}
          className="text-xl text-foreground/75"
        />
      </motion.div>
      <motion.p
        className="text-sm leading-relaxed text-muted-foreground"
        {...motionProps(slideX(-80, 0.25))}
      >
        {t("sections.hero.description")}
      </motion.p>
      <motion.div {...motionProps(slideX(-80, 0.35))}>
        <ShimmerButton onClick={handleDownload} className="mx-auto md:mx-0">
          <Download className="size-4.5" />
          {t("sections.hero.button.name")}
        </ShimmerButton>
      </motion.div>
      <motion.div
        {...motionProps(slideX(-80, 0.45))}
        className="flex items-center justify-center gap-3 pt-2 md:justify-start"
      >
        <SocialLink href="https://github.com/guisebastiao">
          <Github className="size-4.25 text-muted-foreground" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/guilherme-sebastiao/">
          <Linkedin className="size-4.25 text-muted-foreground" />
        </SocialLink>
      </motion.div>
    </article>
  );
};
