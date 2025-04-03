import { useEffect, useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";

interface ProjectContentProps {
  name: string;
  description: string;
  cover: string;
  link: string;
  tecs: string[];
  favorite: boolean;
}

export const ProjectContent = ({
  name,
  description,
  cover,
  link,
  tecs,
  favorite,
}: ProjectContentProps) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = cover;
    img.onload = () => setLoading(false);
  }, [cover]);

  return (
    <div className="relative max-w-80 flex items-center justify-start flex-col border border-zinc-700 bg-zinc-800 rounded-lg gap-5 animate-in fade-in duration-500">
      {favorite && (
        <div className="absolute z-50 left-1.5 top-1.5">
          <Star className="fill-yellow-500 stroke-yellow-500" />
        </div>
      )}
      {isLoading ? (
        <div className="w-full aspect-square rounded-tl-lg rounded-tr-lg bg-zinc-700 animate-pulse" />
      ) : (
        <img
          src={cover}
          alt="project-background"
          className="w-full aspect-square rounded-tl-lg rounded-tr-lg object-cover"
        />
      )}
      <div className="w-full flex justify-between items-center px-2">
        <h3 className="text-xl font-medium text-white">{name}</h3>
        <a
          href={link}
          target="_blank"
          className="size-7 flex items-center justify-center rounded bg-indigo-600"
        >
          <ArrowUpRight className="size-4 text-white" />
        </a>
      </div>
      <p className="text-sm text-zinc-400 h-full px-2">{description}</p>
      <div className="w-full flex flex-wrap gap-[10px] p-2">
        {tecs.map((tec) => (
          <span
            key={tec}
            className="px-2 py-0.5 bg-zinc-700 text-zinc-300 text-xs rounded border border-zinc-600"
          >
            {tec}
          </span>
        ))}
      </div>
    </div>
  );
};
