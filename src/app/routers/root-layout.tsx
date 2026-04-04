import { LightEffects } from "@/shared/components/light-effects";
import { Experience } from "@/features/experience/components";
import { Project } from "@/features/project/components";
import { Contact } from "@/features/contact/components";
import { Header } from "@/features/header/components";
import { Footer } from "@/features/footer/components";
import { About } from "@/features/about/components";
import { Hero } from "@/features/hero/components";

export const RootLayout = () => {
  return (
    <main className="relative min-h-dvh bg-background">
      <LightEffects />
      <Header />
      <section className="max-w-6xl w-full mx-auto px-4">
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
