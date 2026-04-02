import { LenisContext } from "@/app/providers/lenis-provider";
import { useContext } from "react";

export const useLenis = () => {
  return useContext(LenisContext);
};
