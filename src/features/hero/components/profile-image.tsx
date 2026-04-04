import { LazyImage } from "@/shared/components/lazy-image";
import { slideX } from "@/features/hero/variants/slide-x";
import { motionProps } from "@/shared/utils/motion-props";
import { motion } from "motion/react";

export const ProfileImage = () => {
  return (
    <motion.div
      className="relative flex aspect-square w-full max-w-85 min-w-72 shrink-0 items-center justify-center"
      {...motionProps(slideX(80))}
    >
      <div className="animate-morph size-full overflow-hidden border-3 border-muted-foreground bg-foreground">
        <LazyImage src="/photo.jpg" alt="Guilherme Sebastião" />
      </div>
    </motion.div>
  );
};
