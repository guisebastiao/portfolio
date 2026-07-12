"use client";

import detailBg from "@/assets/images/detail.webp";

export const BackgroundEffect = () => {
  return (
    <div
      style={{ backgroundImage: `url(${detailBg.src})` }}
      className="absolute inset-0 bg-repeat dark:opacity-20 opacity-10 z-0"
    />
  );
};
