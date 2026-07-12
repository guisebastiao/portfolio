import type { Variants } from "motion/react";

export const itemVariant: Variants = {
  open: {
    opacity: 1,
    y: 0,
    z: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    opacity: 0,
    y: 70,
    z: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};
