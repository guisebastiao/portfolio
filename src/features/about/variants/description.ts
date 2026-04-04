import type { Variants } from "framer-motion";

export const descriptionVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: 30,
    transition: {
      duration: 0.3,
    },
  },
};
