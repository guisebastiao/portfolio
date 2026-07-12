"use client";

import { PropsWithChildren, useEffect, useMemo } from "react";
import { LenisContext } from "@/shared/context/lenis-context";
import Lenis from "lenis";

export const LenisProvider = ({ children }: PropsWithChildren) => {
  const lenis = useMemo(
    () =>
      new Lenis({
        duration: 1.2,
        smoothWheel: true,
      }),
    [],
  );

  useEffect(() => {
    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [lenis]);

  const value = useMemo(() => ({ lenis }), [lenis]);

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
};
