import { Experience } from "@/components/section/experience";
import { Project } from "@/components/section/project";
import { Contact } from "@/components/section/contact";
import { LightBeans } from "@/components/light-beans";
import { Hero } from "@/components/section/hero.tsx";
import { About } from "@/components/section/about";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const Portfolio = () => {
  return (
    <main className="relative flex flex-col items-center bg-background overflow-hidden">
      <LightBeans />
      <Header />
      <section className="max-w-6xl flex items-center flex-col gap-32 mt-16 px-4 z-10">
        <Hero />
        <About />
        <Project />
        <Experience />
        <Contact />
      </section>
      <Footer />
    </main>
  );
};
