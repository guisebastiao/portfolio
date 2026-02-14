import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/context/theme-context";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { createRoot } from "react-dom/client";
import { pdfjs } from "react-pdf";
import { StrictMode } from "react";
import { router } from "@/routes";
import "@/global.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SmoothScroll>
        <RouterProvider router={router} />
        <Toaster theme="dark" />
      </SmoothScroll>
    </ThemeProvider>
  </StrictMode>,
);
