import { useState } from "react";
import { ProjectContent } from "@/components/ProjectContent";
import { projects } from "@/utils/projects";
import { twMerge } from "tailwind-merge";

export const Projects = () => {
  const [current, setCurrent] = useState(1);

  const maxItems = 4;
  const lastItem = current * maxItems;
  const currentProjects = projects.slice(0, lastItem);

  return (
    <section
      className="relative max-w-6xl w-full min-h-screen flex flex-col items-center gap-10 py-5"
      data-container="2"
    >
      <div className="flex flex-col w-full gap-3">
        <h2 className="text-4xl text-white font-medium tracking-tighter">
          Meus projetos
        </h2>
        <p className="max-w-2xl w-full text-zinc-400">
          Aqui você pode ver meus projetos que criei com muito trabalho,
          dedicação e foco. E o mais importante, a vontade de aprender e
          participar de diversos desafios.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center sm:px-10">
        {currentProjects.map(
          ({ name, description, cover, link, tecs, favorite }) => (
            <ProjectContent
              key={name}
              description={description}
              name={name}
              cover={cover}
              link={link}
              tecs={tecs}
              favorite={favorite}
            />
          )
        )}
      </div>
      <div
        className={twMerge(
          "absolute bottom-0 w-full h-96 bg-linear-to-t from-zinc-950 flex justify-center",
          currentProjects.length === projects.length && "hidden"
        )}
      >
        <button
          className="absolute bottom-0 px-3 py-2 rounded-lg text-black font-semibold bg-zinc-400 hover:bg-white cursor-pointer transition"
          onClick={() => setCurrent(current + 1)}
        >
          Mostrar mais
        </button>
      </div>
    </section>
  );
};
