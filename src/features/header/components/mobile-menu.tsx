import { sidebarVariants } from "@/features/header/variants/sidebar-variants";
import { itemVariants } from "@/features/header/variants/item-variants";
import { navVariants } from "@/features/header/variants/nav-variants";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface MobileMenuProps {
  items: readonly string[];
  active: number;
  onNavigate: (i: number) => void;
}

export const MobileMenu = ({ items, active, onNavigate }: MobileMenuProps) => (
  <motion.div
    initial="closed"
    animate="open"
    exit="closed"
    variants={sidebarVariants}
    className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-200 dark:bg-zinc-900 md:hidden"
  >
    <motion.ul
      variants={navVariants}
      className="mx-auto flex w-9/12 flex-col gap-4"
    >
      {items.map((label, i) => (
        <motion.li key={label} variants={itemVariants} className="text-center">
          <button
            onClick={() => onNavigate(i)}
            className={twMerge(
              "w-full py-3 text-base font-medium text-muted-foreground",
              active === i && "font-bold text-foreground",
            )}
          >
            {label}
          </button>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);
