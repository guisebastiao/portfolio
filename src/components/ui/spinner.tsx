import { cn } from "@/lib/utils";

type SpinnerProps = {
  size?: number;
  className?: string;
};

export function Spinner({ size = 8, className }: SpinnerProps) {
  const lines = 10;
  const duration = 1200;

  return (
    <div className={"relative inline-block"} style={{ width: size, height: size }} role="status" aria-label="Loading">
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: lines }).map((_, index) => {
          const angle = (360 / lines) * index;
          const delay = -(duration - (duration / lines) * index);

          return (
            <span
              key={index}
              className={cn(
                "absolute left-0 top-0 origin-center rounded-full bg-foreground opacity-0 animate-spinner-fade",
                className,
              )}
              style={{
                width: size * 0.6,
                height: size * 0.25,
                transform: `rotate(${angle}deg) translate(${size * 0.73}px)`,
                animationDelay: `${delay}ms`,
                animationDuration: `${duration}ms`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
