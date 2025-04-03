import { TypedText } from "@/components/TypedText";
import myPhoto from "@/assets/my-photo.png";
import downloadCv from "@/assets/cv.pdf";
import { Download } from "lucide-react";

export const Home = () => {
  return (
    <section
      className="max-w-6xl w-full min-h-screen flex items-center justify-center flex-col md:flex-row gap-5 py-5"
      data-container="0"
    >
      <article className="flex flex-col gap-8">
        <span className="text-4xl text-white font-medium tracking-tight">
          Minhas habilidades
        </span>
        <span className="text-5xl font-black text-indigo-500 bg-clip-text">
          <TypedText />
        </span>

        <span className="text-zinc-400 max-w-lg">
          Olá, me chamo{" "}
          <strong className="text-white">Guilherme Fernandes Sebastião</strong>{" "}
          meu objetivo é trabalhar como programador e colaborar em novos
          projetos.
        </span>
        <a
          href={downloadCv}
          download="Curriculo_Guilherme.pdf"
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-500 rounded-lg"
        >
          <Download className="text-white size-5" />
          <span className="text-white">Baixar CV</span>
        </a>
      </article>
      <figure>
        <img
          src={myPhoto}
          alt="Guilherme-Sebastião"
          className="h-[550px] object-contain"
        />
      </figure>
    </section>
  );
};
