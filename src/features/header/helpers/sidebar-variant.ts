import type { Variants } from "motion/react";

export const sidebarVariant: Variants = {
  open: {
    scale: 150,
    z: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 40,
    },
  },
  closed: {
    scale: 0,
    z: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};
