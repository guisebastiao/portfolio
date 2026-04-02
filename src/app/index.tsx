import { ThemeProvider } from "@/app/providers/theme-provider";
import { LenisProvider } from "@/app/providers/lenis-provider";
import { domAnimation, LazyMotion } from "motion/react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { router } from "@/routes";

export const App = () => {
  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation}>
        <LenisProvider>
          <RouterProvider router={router} />
          <Toaster />
        </LenisProvider>
      </LazyMotion>
    </ThemeProvider>
  );
};
