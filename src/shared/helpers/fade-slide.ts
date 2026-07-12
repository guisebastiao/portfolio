import type { Variants } from "motion/react";

type FadeSlideProps = {
  x?: number;
  y?: number;
  scale?: number;
};

export const fadeSlide = ({ x = 0, y = 0, scale = 1 }: FadeSlideProps): Variants => ({
  hidden: {
    opacity: 0,
    filter: "blur(4px)",
    x,
    y,
    scale,
    z: 0,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    y: 0,
    scale: 1,
    z: 0,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
});
