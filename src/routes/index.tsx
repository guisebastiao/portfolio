import { createBrowserRouter } from "react-router-dom";

import { CommonRoute } from "@/routes/CommonRoute";
import { Portfolio } from "@/pages/Portfolio";
import { NotFound } from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <CommonRoute />,
    children: [
      {
        path: "/",
        element: <Portfolio />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
