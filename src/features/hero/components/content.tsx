"use client";

import { useDownloadResume } from "@/features/hero/hooks/use-download-resume";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { TypingAnimation } from "@/shared/components/ui/typing-animation";
import { useTrackEvents } from "@/features/hero/hooks/use-track-events";
import { DiaTextReveal } from "@/shared/components/ui/dia-text-reveal";
import { ShimmerButton } from "@/shared/components/ui/shimmer-button";
import { SocialLink } from "@/features/hero/components/social-link";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { SKILLS } from "@/assets/data/skills";
import { Download } from "lucide-react";
import { motion } from "motion/react";

export const Content = () => {
  const { t } = useTranslation("hero");

  const { redirectedToGithub, redirectedToLinkedIn } = useTrackEvents();
  const { downloadResume } = useDownloadResume();

  return (
    <div className="max-w-lg space-y-6 text-center md:text-left">
      <motion.h3
        className="tracking-wide text-foreground/85"
        {...motionVariantHelper(fadeSlide({ x: -50 }))}
      >
        {t("title")}
      </motion.h3>
      <motion.div className="text-4xl font-bold" {...motionVariantHelper(fadeSlide({ x: -50 }))}>
        <DiaTextReveal text="Guilherme Sebastião" />
      </motion.div>
      <motion.div {...motionVariantHelper(fadeSlide({ x: -50 }))}>
        <TypingAnimation
          words={SKILLS}
          loop
          startOnView={false}
          className="text-xl text-foreground/75"
        />
      </motion.div>
      <motion.p
        className="text-sm leading-relaxed text-muted-foreground"
        {...motionVariantHelper(fadeSlide({ x: -50 }))}
      >
        {t("description")}
      </motion.p>
      <motion.div
        className="flex not-md:justify-center"
        {...motionVariantHelper(fadeSlide({ x: -50 }))}
      >
        <ShimmerButton onClick={downloadResume} className="md:mx-0">
          <Download className="size-4.5" />
          {t("button.name")}
        </ShimmerButton>
      </motion.div>
      <motion.div
        {...motionVariantHelper(fadeSlide({ x: -50 }))}
        className="flex items-center justify-center gap-3 pt-2 md:justify-start"
      >
        <SocialLink href="https://github.com/guisebastiao" onClick={redirectedToGithub}>
          <FaGithub className="size-4.75 text-foreground/85" />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/guilherme-sebastiao/"
          onClick={redirectedToLinkedIn}
        >
          <FaLinkedin className="size-4.75 text-foreground/85" />
        </SocialLink>
      </motion.div>
    </div>
  );
};
