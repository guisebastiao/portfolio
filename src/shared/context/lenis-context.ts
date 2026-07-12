"use client";

import { createContext } from "react";
import Lenis from "lenis";

type LenisState = {
  lenis: Lenis | null;
};

export const LenisContext = createContext<LenisState>({} as LenisState);
