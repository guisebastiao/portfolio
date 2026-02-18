import { DotPattern } from "@/components/ui/dot-pattern";
import { PropsWithChildren } from "react";

export const AuthorImage = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative animate-morph size-full border-2 border-foreground/30 bg-neutral-200 dark:bg-neutral-900 overflow-hidden">
      <DotPattern className="absolute size-full left-5 top-3" width={20} height={20} />
      {children}
    </div>
  );
};
