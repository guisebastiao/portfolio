import { SocialLink } from "@/features/hero/components/social-link";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { fadeLeft } from "@/features/hero/variants/fade-left";
import { Download, Github, Linkedin } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { skills } from "@/shared/utils/skills";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { m } from "framer-motion";

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
      <m.div variants={fadeLeft()} initial="hidden" whileInView="visible">
        <h1 className="text-4xl font-bold">
          {t("sections.hero.title")} <AuroraText>Guilherme</AuroraText>
        </h1>
      </m.div>
      <m.div variants={fadeLeft(0.1)} initial="hidden" whileInView="visible">
        <TypingAnimation
          words={skills}
          loop
          startOnView={false}
          className="text-xl text-muted-foreground"
        />
      </m.div>
      <m.p
        variants={fadeLeft(0.2)}
        initial="hidden"
        whileInView="visible"
        className="text-sm leading-relaxed text-muted-foreground"
      >
        {t("sections.hero.description")}
      </m.p>
      <m.div variants={fadeLeft(0.3)} initial="hidden" whileInView="visible">
        <ShimmerButton
          onClick={handleDownload}
          className="h-10 gap-2 text-sm font-medium"
        >
          <Download className="size-4.5" />
          {t("sections.hero.button.name")}
        </ShimmerButton>
      </m.div>
      <m.div
        variants={fadeLeft(0.4)}
        initial="hidden"
        whileInView="visible"
        className="flex items-center justify-center gap-3 pt-2 md:justify-start"
      >
        <SocialLink href="https://github.com/guisebastiao">
          <Github className="size-4 text-muted-foreground" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/guilherme-sebastiao/">
          <Linkedin className="size-4 text-muted-foreground" />
        </SocialLink>
      </m.div>
    </article>
  );
};
