import { Detail } from "@/components/Detail";
import { Outlet } from "react-router-dom";
import ReactLenis from "lenis/react";

export const CommonRoute = () => {
  return (
    <ReactLenis root>
      <main className="relative flex flex-col items-center bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
        <Detail />
        <Outlet />
      </main>
    </ReactLenis>
  );
};
