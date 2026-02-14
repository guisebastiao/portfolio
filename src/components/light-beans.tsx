import { motion } from "framer-motion";
import { useMemo, useCallback } from "react";

const COLORS = ["bg-blue-500/25", "bg-violet-500/25", "bg-cyan-500/25", "bg-pink-500/25", "bg-emerald-500/25"];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

export const LightBeans = ({ count = 80 }) => {
  const blobs = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const seed = i * 1.618;
      const size = Math.floor(seededRandom(seed) * 120) + 80;

      const zone = i % 4;
      const top = `${seededRandom(seed * 2) * 25 + zone * 25}%`;
      const left = `${seededRandom(seed * 3) * 100}%`;

      return {
        id: i,
        size,
        color: COLORS[Math.floor(seededRandom(seed * 4) * COLORS.length)],
        top,
        left,
        duration: seededRandom(seed * 5) * 10 + 15,
        blur: seededRandom(seed * 6) > 0.5 ? "blur-2xl" : "blur-3xl",
        x: [0, seededRandom(seed * 7) * 100 - 50],
        y: [0, seededRandom(seed * 8) * 100 - 50],
      };
    });
  }, []);

  const BlobItem = useCallback(
    ({ blob }: any) => (
      <motion.div
        className={`absolute rounded-full ${blob.color} ${blob.blur}`}
        style={{
          width: blob.size,
          height: blob.size,
          top: blob.top,
          left: blob.left,
          willChange: "transform, opacity",
        }}
        animate={{
          x: blob.x,
          y: blob.y,
          scale: [1, 1.05, 0.95, 1],
          opacity: [0.3, 0.7, 0.5, 0.3],
        }}
        transition={{
          duration: blob.duration,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
        initial={false}
        layout={false}
      />
    ),
    [],
  );

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {blobs.map((blob) => (
        <BlobItem key={blob.id} blob={blob} />
      ))}
    </div>
  );
};
