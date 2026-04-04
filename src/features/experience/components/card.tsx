import { StripedPattern } from "@/shared/components/ui/striped-pattern";
import { motion, type Variants } from "motion/react";
import { type LucideProps } from "lucide-react";

interface CardProps {
  icon: React.ElementType<LucideProps>;
  title: string;
  children: React.ReactNode;
  variants: Variants;
}

export const Card = ({ icon: Icon, title, children, variants }: CardProps) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    className="relative w-full space-y-5 rounded-lg border bg-foreground/5 p-6"
  >
    <div className="flex items-center gap-2">
      <Icon className="text-blue-500" />
      <h2 className="text-lg font-semibold text-foreground/90">{title}</h2>
    </div>
    <div className="z-10 space-y-4">{children}</div>
    <StripedPattern className="z-0 opacity-8" />
  </motion.div>
);
