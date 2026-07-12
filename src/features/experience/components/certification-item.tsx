"use client";

import { CertificationModal } from "@/features/experience/components/certification-modal";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import type { Certification } from "@/assets/data/certifications";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

type CertificationItemProps = {
  certification: Certification;
};

export const CertificationItem = ({ certification }: CertificationItemProps) => {
  const { t } = useTranslation("experience");

  return (
    <motion.div
      className="flex h-full flex-col overflow-hidden rounded-lg border border-border/50 bg-foreground/5 cursor-default gap-2 p-4"
      {...motionVariantHelper(fadeSlide({ scale: 0.9 }))}
    >
      <h3 className="line-clamp-2 text-sm font-semibold text-foreground/90">
        {t(certification.name)}
      </h3>
      <p className="line-clamp-2 text-[13px] text-muted-foreground">
        {t(certification.description)}
      </p>
      <CertificationModal certification={certification} />
    </motion.div>
  );
};
