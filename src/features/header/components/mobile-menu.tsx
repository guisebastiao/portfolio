"use client";

import type { NavItems } from "@/features/header/constants/nav-items-constant";
import { sidebarVariant } from "@/features/header/helpers/sidebar-variant";
import { itemVariant } from "@/features/header/helpers/item-variant";
import { navVariant } from "@/features/header/helpers/nav-variant";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

type MobileMenuProps = {
  items: readonly NavItems[];
  active: number;
  onNavigate: (i: number) => void;
};

export const MobileMenu = ({ items, active, onNavigate }: MobileMenuProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center md:hidden"
    >
      <motion.div
        variants={sidebarVariant}
        className="pointer-events-none absolute right-5 top-5 h-10 w-10 rounded-full bg-background will-change-transform"
        style={{ transformOrigin: "center" }}
      />
      <motion.ul variants={navVariant} className="relative z-10 mx-auto flex w-9/12 flex-col gap-4">
        {items.map((label, index) => (
          <motion.li key={index} variants={itemVariant} className="text-center">
            <button
              onClick={() => onNavigate(index)}
              className={twMerge(
                "w-full py-3 text-base font-medium text-muted-foreground cursor-pointer select-none",
                active === index && "font-bold text-foreground",
              )}
            >
              {t(label)}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
