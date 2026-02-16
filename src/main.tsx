import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/context/theme-context";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { pdfjs } from "react-pdf";
import { router } from "@/routes";
import "@/global.css";
import "./i18n";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SmoothScroll>
        <RouterProvider router={router} />
        <Toaster />
      </SmoothScroll>
    </ThemeProvider>
  </StrictMode>,
);
