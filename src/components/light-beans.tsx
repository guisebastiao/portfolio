import { motion } from "framer-motion";
import { useMemo } from "react";

const colors = ["bg-blue-500/30", "bg-violet-500/30", "bg-cyan-500/30", "bg-pink-500/30", "bg-emerald-500/30"];
const blobsSize = 25;

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

export const LightBeans = () => {
  const blobs = useMemo(() => {
    return Array.from({ length: blobsSize }, (_, i) => {
      const baseSeed = i * 1.618;
      const size = Math.floor(seededRandom(baseSeed) * 120) + 100;
      const color = colors[Math.floor(seededRandom(baseSeed * 2) * colors.length)];

      const verticalZone = i % 3;
      const top = `${seededRandom(baseSeed * 3) * 33 + verticalZone * 33}%`;
      const left = `${seededRandom(baseSeed * 4) * 100}%`;

      const duration = Math.floor(seededRandom(baseSeed * 5) * 15) + 20;
      const blur = seededRandom(baseSeed * 6) > 0.5 ? "blur-2xl" : "blur-3xl";

      const x1 = seededRandom(baseSeed * 7) * 40 - 20;
      const x2 = seededRandom(baseSeed * 8) * 40 - 20;
      const y1 = seededRandom(baseSeed * 9) * 30 - 15;
      const y2 = seededRandom(baseSeed * 10) * 30 - 15;

      return {
        id: i,
        size,
        color,
        top,
        left,
        duration,
        blur,
        x: [0, x1, x2, 0],
        y: [0, y1, y2, 0],
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute rounded-full ${blob.color} ${blob.blur}`}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          animate={{
            x: blob.x,
            y: blob.y,
            scale: [1, 1.05, 0.95, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
};
