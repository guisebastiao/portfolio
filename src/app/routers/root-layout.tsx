import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <main className="relative min-h-dvh flex flex-col items-center bg-background">
      <Outlet />
    </main>
  );
};
