import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/app/routers/root-layout";
import { NotFound } from "@/pages/not-found";

import { Header } from "@/features/header/components";
import { Hero } from "@/features/hero/components";
import { Footer } from "@/features/footer/components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Header />,
      },
      {
        path: "hero",
        element: <Hero />,
      },
      {
        index: true,
        element: <Footer />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
