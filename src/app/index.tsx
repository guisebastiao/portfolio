import { ThemeProvider } from "@/app/providers/theme-provider";
import { LenisProvider } from "@/app/providers/lenis-provider";
import { Toaster } from "@/shared/components/ui/sonner";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/routers";

export const App = () => {
  return (
    <ThemeProvider>
      <LenisProvider>
        <RouterProvider router={router} />
        <Toaster />
      </LenisProvider>
    </ThemeProvider>
  );
};
