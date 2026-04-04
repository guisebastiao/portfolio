import type { Variants } from "motion/react";

export const motionProps = (variants: Variants) => ({
  variants,
  initial: "hidden",
  whileInView: "visible",
  exit: "exit",
});
