import { Plus } from "lucide-react";
import { technologies } from "../data/technologies";
import { SkillContent } from "./SkillContent";

export const About = () => {
  return (
    <section
      className="max-w-6xl w-full min-h-screen flex flex-col justify-center items-center gap-24 py-5"
      data-page="2"
    >
      <div className="w-full flex flex-col justify-start bg-zinc-900 rounded-2xl border border-zinc-700 px-8 py-10 gap-5">
        <p className="text-zinc-50 text-base font-medium">
          Hello World! Sou o Guilherme Fernandes Sebastião, estudante de ciência
          da computação na Unisul - Universidade do Sul de Santa Catarina. Sou
          apaixonado por programação e jogos, estou constantemente em busca de
          construir boas soluções para problemas do dia a dia por meio da
          programação. Sempre me esforçando pelo aprendizado contínuo, dentro do
          possível, pesquisando e adquirindo conhecimento por novas tecnologias.
          Adoro transformar ideias em código, sempre buscando melhorar como
          desenvolvedor.
        </p>
        <div className="flex w-full">
          <div className="w-[100px] flex flex-col justify-center items-center">
            <div className="flex items-end">
              <Plus className="text-xl text-blue-500 stroke-[5px] mb-1" />
              <span className="text-4xl text-zinc-50 font-bold">3</span>
              <span className="text-2xl text-zinc-50 font-bold">y</span>
            </div>
            <span className="text-zinc-400 font-normal capitalize">
              Experiência
            </span>
          </div>
          <div className="w-[100px] flex flex-col justify-center items-center">
            <div className="flex items-end">
              <Plus className="text-xl text-blue-500 stroke-[5px] mb-1" />
              <span className="text-4xl text-zinc-50 font-bold">6</span>
            </div>
            <span className="text-zinc-400 font-normal capitalize">
              Projetos
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-4xl text-zinc-50 font-medium">
          Tecnogias que eu utilizo
        </h2>
        <p className="max-w-[600px] w-full text-base text-zinc-400 font-medium">
          Abaixo estão as tecnologias que utilizo e nas quais possuo
          conhecimento para o desenvolvimento de sites, aplicativos, automações
          e outras finalidades.
        </p>
        <div className="w-full flex flex-wrap gap-[10px] justify-center">
          {technologies.map(({ name, type, src }) => (
            <SkillContent key={name} name={name} type={type} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
};
