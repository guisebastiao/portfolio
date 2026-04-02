import { fadeRight } from "@/features/hero/variants/fade-right";
import { LazyImage } from "@/components/lazy-image";
import { m } from "framer-motion";

export const ProfileImage = () => {
  return (
    <m.div
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      className="relative flex aspect-square w-full max-w-96 min-w-72 shrink-0 items-center justify-center"
    >
      <div className="animate-morph size-full overflow-hidden border-2 border-foreground/30 bg-neutral-200 dark:bg-neutral-900">
        <LazyImage src="/photo.jpg" alt="Guilherme Sebastião" />
      </div>
    </m.div>
  );
};
