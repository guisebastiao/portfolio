import { Plus } from "lucide-react";
import { technologies } from "@/utils/technologies";
import { SkillContent } from "@/components/SkillContent";

export const About = () => {
  return (
    <section
      className="max-w-6xl w-full min-h-screen flex flex-col justify-between items-center gap-12 py-5"
      data-container="1"
    >
      <div className="w-full flex flex-col gap-6">
        <h2 className="text-4xl text-white font-medium tracking-tighter">
          Sobre mim
        </h2>
        <div className="w-full flex flex-col justify-start bg-zinc-900 rounded-lg border border-zinc-700 px-6 py-5 gap-3">
          <p className="text-zinc-300 font-light">
            Sou estudante de{" "}
            <strong className="text-white font-bold">
              Ciência da Computação
            </strong>{" "}
            na Universidade do Sul de Santa Catarina -{" "}
            <strong className="text-white font-bold">Unisul</strong>. Sou
            apaixonado por programação e games, estou constantemente em busca de
            construir boas soluções para problemas do dia a dia por meio da
            programação. Quando possível estou me dedicando a aperfeiçoar meu
            aprendizado, explorando e adquirindo conhecimentos por novas
            tecnologias.
          </p>
          <div className="flex w-full">
            <div className="w-[100px] flex flex-col justify-center items-center">
              <div className="flex items-end">
                <Plus className="text-xl text-indigo-500 stroke-[5px] mb-1" />
                <span className="text-4xl text-white font-bold">4</span>
                <span className="text-2xl text-white font-bold">y</span>
              </div>
              <span className="text-zinc-400 font-normal capitalize">
                Experiência
              </span>
            </div>
            <div className="w-[100px] flex flex-col justify-center items-center">
              <div className="flex items-end">
                <Plus className="text-xl text-indigo-500 stroke-[5px] mb-1" />
                <span className="text-4xl text-white font-bold">10</span>
              </div>
              <span className="text-zinc-400 font-normal capitalize">
                Projetos
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-4xl text-white font-medium tracking-tighter">
          Tecnogias que eu utilizo
        </h2>
        <p className="max-w-2xl w-full text-zinc-400">
          Abaixo estão as tecnologias que utilizo e nas quais possuo
          conhecimento para o desenvolvimento de sites, aplicativos, automações
          e outras finalidades.
        </p>
        <div className="w-full flex flex-wrap gap-2 justify-center">
          {technologies.map(({ name, type, src }) => (
            <SkillContent
              key={name}
              name={name}
              type={type}
              src={src}
              alt={name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
