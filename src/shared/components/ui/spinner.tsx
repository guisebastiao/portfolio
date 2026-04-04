import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/shared/lib/utils";
import * as React from "react";

const spinnerVariants = cva(
  "relative inline-flex items-center justify-center text-current",
  {
    variants: {
      size: {
        default: "size-4.5",
        xs: "size-3",
        sm: "size-4",
        lg: "size-6",
        xl: "size-8",
      },
      variant: {
        default: "text-foreground",
        primary: "text-primary",
        desctrutive: "text-destructive",
        muted: "text-muted-foreground",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  },
);

type SpinnerProps = React.ComponentProps<"span"> &
  VariantProps<typeof spinnerVariants> & {
    asChild?: boolean;
    lines?: number;
  };

function Spinner({
  className,
  size = "default",
  variant = "default",
  asChild = false,
  lines = 12,
  ...props
}: SpinnerProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      role="status"
      aria-label="Loading"
      data-slot="spinner"
      data-size={size}
      data-variant={variant}
      className={cn(spinnerVariants({ size, variant, className }))}
      {...props}
    >
      <span className="sr-only">Loading</span>

      {Array.from({ length: lines }).map((_, i) => {
        const rotate = (360 / lines) * i;
        const delay = -((lines - i) / lines);

        return (
          <span
            key={i}
            className="absolute inset-0"
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <span
              className="absolute left-1/2 top-[5%] h-[27%] w-[9%] -translate-x-1/2 rounded-full bg-current animate-spinner-fade"
              style={{ animationDelay: `${delay}s` }}
            />
          </span>
        );
      })}
    </Comp>
  );
}

export { Spinner, spinnerVariants };
