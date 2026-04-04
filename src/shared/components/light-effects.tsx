import React from "react";

const ANIMS = [
  "animate-blob-a",
  "animate-blob-b",
  "animate-blob-c",
  "animate-blob-d",
  "animate-blob-e",
] as const;

const COLORS = [
  "rgba(5, 92, 249, 0.2)",
  "rgba(79, 57, 246, 0.2)",
  "rgba(0, 184, 219, 0.2)",
] as const;

const seeded = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

type Blob = {
  size: number;
  color: string;
  top: string;
  left: string;
  duration: string;
  delay: string;
  animClass: string;
};

const generateBlobs = (count: number): Blob[] => {
  return Array.from({ length: count }, (_, i) => {
    const s = i * 1.618;

    const r1 = seeded(s);
    const r2 = seeded(s * 2);
    const r3 = seeded(s * 3);
    const r4 = seeded(s * 4);
    const r5 = seeded(s * 5);
    const r6 = seeded(s * 6);

    const duration = Math.floor(r5 * 15) + 18;
    const delay = Math.floor(r6 * duration);
    const size = Math.floor(r1 * 260) + 200;

    const stripeHeight = 100 / count;

    return {
      size,
      color: COLORS[Math.floor(r2 * COLORS.length)],
      top: `${i * stripeHeight + r3 * stripeHeight}%`,
      left: `${r4 * 90}%`,
      duration: `${duration}s`,
      delay: `${delay}s`,
      animClass: ANIMS[i % ANIMS.length],
    };
  });
};

const useBlobs = (count: number) => {
  const ref = React.useRef<Blob[] | null>(null);

  if (!ref.current || ref.current.length !== count) {
    ref.current = generateBlobs(count);
  }

  return ref.current;
};

interface LightEffectsProps extends React.ComponentProps<"div"> {
  count?: number;
}

export const LightEffects = ({
  className,
  count = 50,
  ...props
}: LightEffectsProps) => {
  const blobs = useBlobs(count);

  return (
    <div
      aria-hidden="true"
      {...props}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}
    >
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`blob absolute rounded-full ${blob.animClass}`}
          style={
            {
              "--size": `${blob.size}px`,
              "--top": blob.top,
              "--left": blob.left,
              "--color": blob.color,
              "--duration": blob.duration,
              "--delay": blob.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
