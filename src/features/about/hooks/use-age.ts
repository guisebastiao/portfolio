import { BIRTH_DATE } from "@/features/about/constants/birth-date";
import { useMemo } from "react";

export const useAge = () => {
  const age = useMemo(() => {
    const now = Date.now();
    const diff = now - BIRTH_DATE.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }, []);

  return { age };
};
