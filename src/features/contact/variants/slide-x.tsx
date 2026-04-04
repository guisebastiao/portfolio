import type { Variants } from "motion/react";

export const slideX = (x: number): Variants => ({
  hidden: {
    opacity: 0,
    x,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    x,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
});
