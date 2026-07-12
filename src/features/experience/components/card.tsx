"use client";

import { StripedPatternBase } from "@/shared/components/striped-pattern-base";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { motion, type Variants } from "motion/react";
import { type LucideProps } from "lucide-react";

type CardProps = {
  icon: React.ElementType<LucideProps>;
  title: string;
  children: React.ReactNode;
  variants?: Variants;
};

export const Card = ({ icon: Icon, title, children, variants }: CardProps) => (
  <motion.div
    className="relative w-full space-y-5 rounded-lg border-2 border-foreground/10 bg-foreground/5 p-5"
    {...motionVariantHelper(variants ?? {})}
  >
    <div className="flex items-center gap-2">
      <Icon className="text-foreground/90" />
      <h2 className="text-lg font-semibold text-foreground/90">{title}</h2>
    </div>
    {children}
    <StripedPatternBase />
  </motion.div>
);
