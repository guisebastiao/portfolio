import { PropsWithChildren } from "react";

export const AuthorImage = ({ children }: PropsWithChildren) => {
  return (
    <div className="animate-morph size-full border-2 border-foreground/30 bg-neutral-200 dark:bg-neutral-900 overflow-hidden">
      {children}
    </div>
  );
};
