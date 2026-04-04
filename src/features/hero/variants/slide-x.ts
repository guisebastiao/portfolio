import type { Variants } from "motion/react";

export const slideX = (x: number, delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.9,
    x,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      delay,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay,
    },
  },
});
