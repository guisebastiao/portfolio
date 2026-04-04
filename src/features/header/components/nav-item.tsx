import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

interface NavItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const NavItem = ({ label, active, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      data-active={active}
      className={twMerge(
        "relative h-9 px-2 text-sm font-medium text-muted-foreground cursor-pointer data-[active=true]:text-foreground select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none rounded-md",
      )}
    >
      {label}
      {active && (
        <motion.div
          layoutId="underline"
          className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  );
};
