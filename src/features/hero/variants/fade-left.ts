import { Variants } from "framer-motion";

export const fadeLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay,
    },
  },
});
