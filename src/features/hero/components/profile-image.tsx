import { fadeRight } from "@/features/hero/variants/fade-right";
import { LazyImage } from "@/shared/components/lazy-image";
import { motion } from "motion/react";

export const ProfileImage = () => {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      className="relative flex aspect-square w-full max-w-85 min-w-72 shrink-0 items-center justify-center"
    >
      <div className="animate-morph size-full overflow-hidden border-3 border-muted-foreground bg-neutral-200 dark:bg-neutral-900">
        <LazyImage src="/photo.jpg" alt="Guilherme Sebastião" />
      </div>
    </motion.div>
  );
};
