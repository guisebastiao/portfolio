"use client";

import { BackgroundEffect } from "@/shared/components/background-effect";
import { LightEffect } from "@/shared/components/light-effect";
import { Experience } from "@/features/experience/components";
import { Project } from "@/features/project/components";
import { Contact } from "@/features/contact/components";
import { Footer } from "@/features/footer/components";
import { Header } from "@/features/header/components";
import { About } from "@/features/about/components";
import { Hero } from "@/features/hero/components";

const Home = () => {
  return (
    <main className="relative min-h-dvh bg-background">
      <LightEffect />
      <BackgroundEffect />
      <Header />
      <section className="relative z-10 max-w-6xl w-full mx-auto px-4">
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

export default Home;
