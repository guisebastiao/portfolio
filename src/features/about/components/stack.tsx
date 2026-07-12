"use client";

import { type Stack } from "@/assets/data/stacks";

type StackComponentProps = {
  stack: Stack;
};

export const StackComponent = ({ stack }: StackComponentProps) => {
  const Icon = stack.icon;

  return (
    <div className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-foreground/15 bg-foreground/7">
      <Icon className="size-4 text-foreground/80" />
      <span className="text-[13px] text-foreground/80 font-medium">{stack.name}</span>
    </div>
  );
};
