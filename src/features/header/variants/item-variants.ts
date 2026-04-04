import type { Variants } from "motion/react";

export const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    opacity: 0,
    y: 70,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};
