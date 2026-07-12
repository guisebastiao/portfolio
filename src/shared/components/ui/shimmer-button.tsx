"use client";

import React, { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/shared/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "group relative z-0 flex gap-2 text-sm font-medium h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-white/10 px-6 whitespace-nowrap text-primary-foreground [background:var(--primary)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div
          className={cn("-z-30 blur-[2px]", "@container-size absolute inset-0 overflow-visible")}
        >
          <div className="animate-shimmer-slide absolute inset-0 aspect-[1] h-[100cqh] rounded-none [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_225deg,transparent_0,var(--ring)_90deg,transparent_90deg)]" />
          </div>
        </div>
        {children}
        <div
          className={cn(
            "absolute inset-0 size-full",
            "rounded-lg px-4 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
          )}
        />
        <div
          className={cn("absolute inset-[0.2em] -z-20 rounded-lg [background:var(--primary)]")}
        />
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";
