"use client";

import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { useTranslation } from "react-i18next";
import { Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";

export const CardSection = () => {
  const { t } = useTranslation("contact");

  return (
    <div className="space-y-6 flex-1 py-4">
      <motion.h2
        className="text-2xl font-semibold text-foreground"
        {...motionVariantHelper(fadeSlide({ x: -50 }))}
      >
        {t("card.title")}
      </motion.h2>
      <motion.p
        className="text-[15px] text-muted-foreground leading-relaxed"
        {...motionVariantHelper(fadeSlide({ x: -50 }))}
      >
        {t("card.description")}
      </motion.p>
      <div className="flex flex-col gap-6">
        <motion.div className="space-y-1" {...motionVariantHelper(fadeSlide({ x: -50 }))}>
          <p className="text-[15px] text-foreground/80">{t("card.info.email.label")}</p>
          <div className="flex items-center gap-2">
            <Mail className="size-4.5 text-foreground/85" />
            <p className="text-[15px] text-foreground/85">{t("card.info.email.value")}</p>
          </div>
        </motion.div>
        <motion.div className="space-y-1" {...motionVariantHelper(fadeSlide({ x: -50 }))}>
          <p className="text-[15px] text-foreground/75">{t("card.info.location.label")}</p>
          <div className="flex items-center gap-2">
            <MapPin className="size-4.5 text-foreground/85" />
            <p className="text-[15px] text-foreground/85">{t("card.info.location.value")}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
