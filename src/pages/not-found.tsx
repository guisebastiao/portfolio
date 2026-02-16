import { Particles } from "@/components/ui/particles";
import { LightBeans } from "@/components/light-beans";
import { Meteors } from "@/components/ui/meteors";
import NotFoundImg from "@/assets/not-found.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";

export const NotFound = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const { theme } = useTheme();
  const [color, setColor] = useState("#FFFFFF");

  useEffect(() => {
    setColor(theme === "dark" ? "#FFFFFF" : "#000000");
  }, [theme]);

  return (
    <main className="relative flex flex-col items-center bg-background overflow-hidden">
      <Particles className="absolute inset-0 pointer-events-none" quantity={200} ease={80} color={color} refresh />
      <Meteors />
      <LightBeans />
      <div className="max-w-xl min-h-screen flex flex-col justify-center items-center gap-12 px-8 py-3.5">
        <h1 className="text-3xl font-bold text-center">{t("pages.not-found.title")}</h1>
        <img src={NotFoundImg} alt="not-found-img" className="max-w-xs" />
        <p className="text-sm text-foreground/80 text-center">{t("pages.not-found.description")}</p>
        <button
          className="w-full h-9 text-sm text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-500 transition"
          onClick={() => navigate("/")}
        >
          {t("pages.not-found.button.name")}
        </button>
      </div>
    </main>
  );
};
