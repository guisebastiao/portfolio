"use client";

import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { BaseImage } from "@/shared/components/base-image";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { Ripple } from "@/shared/components/ui/ripple";
import photoImg from "@/assets/images/photo.webp";
import { motion } from "motion/react";

export const ProfileImage = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      {...motionVariantHelper(fadeSlide({ x: 50 }))}
    >
      <div className="absolute -inset-100 -z-10 pointer-events-none">
        <Ripple mainCircleSize={280} />
      </div>
      <div className="relative max-w-85 min-w-72 w-full aspect-square rounded-full size-full overflow-hidden border-3 border-muted-foreground bg-foreground">
        <BaseImage src={photoImg} quality={100} alt="Guilherme Sebastião" />
      </div>
    </motion.div>
  );
};
