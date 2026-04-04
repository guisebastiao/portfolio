import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { pdfjs } from "react-pdf";
import { App } from "@/app";
import "@/app/global.css";
import "@/i18n";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
