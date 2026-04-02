import { Variants } from "framer-motion";

export const navVariants: Variants = {
  open: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};
