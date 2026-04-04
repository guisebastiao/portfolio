import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/app/routers/root-layout";
import { NotFound } from "@/features/not-found/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
