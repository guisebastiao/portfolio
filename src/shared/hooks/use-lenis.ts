"use client";

import { LenisContext } from "@/shared/context/lenis-context";
import { useContext } from "react";

export const useLenis = () => {
  return useContext(LenisContext);
};
