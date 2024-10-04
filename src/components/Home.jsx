import { TypedText } from "./TypedText";

export const Home = () => {
  return (
    <section
      className="max-w-6xl w-full min-h-screen flex items-center justify-center gap-5 max-830:mt-20 max-830:flex-col py-5"
      data-page="1"
    >
      <article className="flex flex-col gap-8 max-w-[450px] w-full">
        <span className="text-6xl text-zinc-50 font-semibold">Eu sou</span>
        <span className="text-5xl text-blue-400 font-bold capitalize">
          <TypedText />
        </span>
        <span className="text-base font-medium text-zinc-400">
          Meu objetivo é trabalhar como programador, colaborar em novos projetos
          e aprimorar constantemente minhas habilidades.
        </span>
      </article>
      <figure>
        <img
          src="/myPhoto.png"
          alt="Guilherme-Sebastião"
          className="h-[550px] object-contain"
        />
      </figure>
    </section>
  );
};
