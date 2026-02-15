import { Experience } from "@/components/section/experience";
import { Project } from "@/components/section/project";
import { Contact } from "@/components/section/contact";
import { Particles } from "@/components/ui/particles";
import { LightBeans } from "@/components/light-beans";
import { About } from "@/components/section/about";
import { Home } from "@/components/section/home";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";

export const Portfolio = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#FFFFFF");

  useEffect(() => {
    setColor(theme === "dark" ? "#FFFFFF" : "#000000");
  }, [theme]);

  return (
    <main className="relative flex flex-col items-center bg-background overflow-hidden">
      <Particles className="absolute inset-0 pointer-events-none" quantity={250} ease={80} color={color} refresh />
      <LightBeans />
      <Header />
      <section className="max-w-6xl flex items-center flex-col gap-32 mt-16 px-4 z-10">
        <Home />
        <About />
        <Project />
        <Experience />
        <Contact />
      </section>
      <Footer />
    </main>
  );
};
