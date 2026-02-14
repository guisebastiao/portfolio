import { createBrowserRouter } from "react-router-dom";

import { Portfolio } from "@/pages/portfolio";
import { NotFound } from "@/pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
