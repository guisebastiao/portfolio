import NotFoundImg from "@/assets/not-found.png";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl min-h-screen flex flex-col justify-center items-center gap-12 px-8 py-3.5">
      <h1 className="text-3xl font-bold text-center">Página Não Encontrada!</h1>
      <img
        src={NotFoundImg}
        alt="not-found-img"
        className="max-w-xs"
      />
      <p className="text-sm text-muted-foreground text-center">Desculpe, não conseguimos encontrar o que você estava procurando. Que tal voltar para a página inicial?</p>
      <button
        className="w-full h-9 text-sm text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-500 transition"
        onClick={() => navigate("/")}
      >
        Voltar para o início
      </button>
    </div>
  );
};
