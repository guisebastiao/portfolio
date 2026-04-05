import { twMerge } from "tailwind-merge";
import * as React from "react";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  segments?: number;
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, segments = 10, ...props }, ref) => {
    const items = React.useMemo(() => {
      const step = 360 / segments;

      return Array.from({ length: segments }, (_, i) => ({
        rotate: step * i,
        delay: -(i / segments),
        key: i,
      }));
    }, [segments]);

    return (
      <span
        ref={ref}
        role="status"
        aria-label="Loading"
        aria-live="polite"
        className={twMerge(
          "relative inline-flex size-4.5 items-center justify-center text-foreground",
          className,
        )}
        {...props}
      >
        {items.map(({ rotate, delay, key }) => (
          <span
            key={key}
            className="absolute inset-0"
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <span
              className="absolute left-1/2 top-[5%] h-[27%] w-[9%] -translate-x-1/2 rounded-full bg-current animate-spinner-fade"
              style={{ animationDelay: `${delay}s` }}
            />
          </span>
        ))}
      </span>
    );
  },
);

Spinner.displayName = "Spinner";
