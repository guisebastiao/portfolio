import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { router } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "lenis/dist/lenis.css";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer autoClose={5000} theme="dark" />
  </StrictMode>
);
