import { useMemo } from "react";

type PerformanceTier = "high" | "medium" | "low";

const COLORS = [
  "rgba(59, 130, 246, 0.18)",
  "rgba(139, 92, 246, 0.18)",
  "rgba(6, 182, 212, 0.18)",
  "rgba(236, 72, 153, 0.18)",
  "rgba(16, 185, 129, 0.18)",
];

const BLOB_CLASSES = ["animate-blob-a", "animate-blob-b", "animate-blob-c", "animate-blob-d"] as const;
const TIER_COUNT: Record<string, number> = { high: 40, medium: 20, low: 10 };

export const usePerformance = (): PerformanceTier => {
  return useMemo(() => {
    if (typeof window === "undefined") return "medium";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "low";

    const cores = navigator.hardwareConcurrency ?? 4;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile || cores <= 2 || memory <= 2) return "low";
    if (cores <= 4 || memory <= 4) return "medium";
    return "high";
  }, []);
};

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

export const LightBeans = () => {
  const tier = usePerformance();
  const count = TIER_COUNT[tier];

  const blobs = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const s = i * 1.618;
      const duration = Math.floor(seededRandom(s * 5) * 15) + 18;
      const delay = -Math.floor(seededRandom(s * 6) * duration);

      return {
        id: i,
        size: Math.floor(seededRandom(s) * 140) + 80,
        color: COLORS[Math.floor(seededRandom(s * 2) * COLORS.length)],
        top: `${seededRandom(s * 3) * 85}%`,
        left: `${seededRandom(s * 4) * 85}%`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        blurClass: seededRandom(s * 7) > 0.5 ? "blur-3xl" : "blur-2xl",
        animClass: BLOB_CLASSES[i % BLOB_CLASSES.length],
      };
    });
  }, [count]);

  if (count === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {blobs.map((b) => (
        <div
          key={b.id}
          className={`absolute rounded-full ${b.blurClass} ${b.animClass}`}
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            backgroundColor: b.color,
            animationDuration: b.duration,
            animationDelay: b.delay,
            willChange: "transform",
            contain: "layout style paint",
          }}
        />
      ))}
    </div>
  );
};
