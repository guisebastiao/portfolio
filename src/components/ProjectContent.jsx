import { ArrowUpRight } from "lucide-react";

export const ProjectContent = ({ name, cover, link, tecs }) => {
  return (
    <div className="max-w-[320px] flex items-center justify-center flex-col border border-zinc-700 bg-zinc-800 rounded-2xl px-5 py-5 gap-5">
      <figure>
        <img
          src={cover}
          alt="project-background"
          className="w-full aspect-square rounded-[10px] object-cover"
        />
      </figure>
      <div className="w-full flex justify-between items-center">
        <h3 className="text-xl font-medium text-zinc-50">{name}</h3>
        <a
          href={link}
          target="_blank"
          className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-500"
        >
          <ArrowUpRight className="text-2xl text-zinc-50" />
        </a>
      </div>
      <div className="w-full flex flex-wrap gap-[10px]">
        {tecs.map((tec) => (
          <span
            key={tec}
            className="px-5 py-[5px] rouded-[5px] bg-zinc-700 text-zinc-300 text-sm font-normal rounded"
          >
            {tec}
          </span>
        ))}
      </div>
    </div>
  );
};
