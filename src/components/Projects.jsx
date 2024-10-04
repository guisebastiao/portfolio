import { useState } from "react";
import { ProjectContent } from "./ProjectContent";
import { projects } from "../data/projects";

export const Projects = () => {
  const [current, setCurrent] = useState(1);

  const maxItems = 6;
  const lastItem = current * maxItems;
  const currentProjects = projects.slice(0, lastItem);

  return (
    <section
      className="relative max-w-6xl w-full min-h-screen flex flex-col gap-10 py-5"
      data-page="3"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl text-zinc-50 font-medium">Meus projetos</h2>
        <p className="max-w-[600px] w-full text-base text-zinc-400 font-medium">
          Aqui você pode ver meus projetos que criei com muito trabalho,
          dedicação e foco. E o mais importante, a vontade de aprender e
          participar de diversos desafios.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {currentProjects.map(({ name, cover, link, tecs }) => (
          <ProjectContent
            key={name}
            name={name}
            cover={cover}
            link={link}
            tecs={tecs}
          />
        ))}
      </div>
      <div
        className={`absolute bottom-0 w-full h-96 bg-gradient-to-t from-zinc-950 flex justify-center ${
          currentProjects.length === projects.length && "hidden"
        }`}
      >
        <button
          className="absolute bottom-0 px-5 py-2 rounded-xl text-zinc-950 font-medium bg-zinc-50 transition-colors duration-500"
          onClick={() => setCurrent(current + 1)}
        >
          Mostrar mais
        </button>
      </div>
    </section>
  );
};
