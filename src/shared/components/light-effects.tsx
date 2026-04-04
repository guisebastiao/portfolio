import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

const ANIMS = [
  "animate-blob-a",
  "animate-blob-b",
  "animate-blob-c",
  "animate-blob-d",
  "animate-blob-e",
] as const;

const COLORS = [
  "rgba(59, 130, 246, 0.18)",
  "rgba(139, 92, 246, 0.18)",
  "rgba(6, 182, 212, 0.18)",
  "rgba(236, 72, 153, 0.18)",
  "rgba(16, 185, 129, 0.18)",
];

const seeded = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const generateBlobs = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const s = i * 1.618;
    const duration = Math.floor(seeded(s * 5) * 15) + 18;
    const delay = Math.floor(seeded(s * 6) * duration);

    return {
      size: Math.floor(seeded(s) * 260) + 200,
      color: COLORS[Math.floor(seeded(s * 2) * COLORS.length)],
      top: `${seeded(s * 3) * 85}%`,
      left: `${seeded(s * 4) * 85}%`,
      duration: `${duration}s`,
      delay: `${delay}s`,
      animClass: ANIMS[i % ANIMS.length],
    };
  });
};

interface LightEffectsProps extends React.ComponentProps<"div"> {
  count?: number;
}

export const LightEffects = ({
  className,
  count = 5,
  ...props
}: LightEffectsProps) => {
  const blobs = useMemo(() => generateBlobs(count), [count]);

  return (
    <div
      aria-hidden="true"
      {...props}
      className={twMerge(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className,
      )}
    >
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={twMerge("absolute rounded-full", blob.animClass)}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            backgroundColor: blob.color,
            animationDuration: blob.duration,
            animationDelay: blob.delay,
            filter: "blur(72px)",
            mixBlendMode: "screen",
            willChange: "transform",
            contain: "layout style paint",
          }}
        />
      ))}
    </div>
  );
};
