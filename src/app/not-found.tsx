"use client";

import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { BackgroundEffect } from "@/shared/components/background-effect";
import { LightEffect } from "@/shared/components/light-effect";
import { GA_EVENTS, trackEvent } from "@/shared/lib/analytics";
import { BaseImage } from "@/shared/components/base-image";
import { Meteors } from "@/shared/components/ui/meteors";
import notFoundImg from "@/assets/images/not-found.webp";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { Button } from "@/shared/components/ui/button";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  const { t } = useTranslation("pages");

  const handleGoBack = () => {
    router.back();
  };

  const handlePageNotFoundTrackEvent = () => {
    trackEvent(GA_EVENTS.PAGE_NOT_FOUND);
  };

  useEffect(() => {
    handlePageNotFoundTrackEvent();
  }, []);

  return (
    <main className="relative min-h-dvh bg-background flex">
      <Meteors />
      <LightEffect count={5} />
      <BackgroundEffect />
      <motion.div
        {...motionVariantHelper(fadeSlide({ scale: 0.9 }))}
        className="flex flex-col justify-center items-center mx-auto gap-8 px-4 z-10"
      >
        <h1 className="text-2xl font-bold text-center">{t("not-found.title")}</h1>
        <div className="relative w-80 aspect-square">
          <BaseImage src={notFoundImg} alt="not-found-img" />
        </div>
        <p className="text-sm text-foreground/75 text-center">{t("not-found.description")}</p>
        <Button className="w-full" onClick={handleGoBack}>
          {t("not-found.button.name")}
        </Button>
      </motion.div>
    </main>
  );
}
