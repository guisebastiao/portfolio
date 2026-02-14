import { DotPattern } from "@/components/ui/dot-pattern";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const AuthorImage = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative animate-morph w-full h-full border-2 border-foreground/30 bg-neutral-200 dark:bg-neutral-900 overflow-hidden">
      <DotPattern className="absolute left-5 top-0 size-full" width={20} height={20} />
      {children}
    </div>
  );
};
