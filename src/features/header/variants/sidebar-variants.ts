import { Variants } from "framer-motion";

export const sidebarVariants: Variants = {
  open: {
    clipPath: "circle(140% at calc(100% - 40px) 40px)",
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
  closed: {
    clipPath: "circle(0px at calc(100% - 40px) 40px)",
    transition: { delay: 0.2, type: "spring", stiffness: 150, damping: 20 },
  },
};
