"use client";

import { STATIC_LIGHTS } from "@/shared/components/light-effect/constants";
import { cn } from "@/shared/lib/utils";
import React, { useMemo } from "react";
import { motion } from "motion/react";

export interface LightEffectProps extends React.ComponentPropsWithoutRef<"div"> {
  count?: number;
}

export const LightEffect = React.memo<LightEffectProps>(({ className, count = 20, ...props }) => {
  const lights = useMemo(() => STATIC_LIGHTS.slice(0, Math.min(count, 10)), [count]);

  return (
    <div
      {...props}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden select-none",
        className,
      )}
    >
      {lights.map((light, i) => (
        <motion.div
          key={i}
          className="absolute size-75 md:size-125 rounded-full bg-foreground/5 blur-[100px]"
          style={{
            top: light.top,
            left: light.left,
            bottom: light.bottom,
            right: light.right,
            transform: "translateZ(0)",
            willChange: "transform",
          }}
          animate={{
            x: light.x,
            y: light.y,
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

LightEffect.displayName = "LightEffect";
