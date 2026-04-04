import { LightEffects } from "@/shared/components/light-effects";
import { Meteors } from "@/shared/components/ui/meteors";
import { Button } from "@/shared/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NotFound = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <main className="relative flex flex-col items-center bg-background overflow-hidden">
      <Meteors />
      <LightEffects />
      <div className="max-w-xl min-h-screen flex flex-col justify-center items-center gap-12 px-8 py-3.5">
        <h1 className="text-3xl font-bold text-center">
          {t("pages.not-found.title")}
        </h1>
        <img
          src="/assets/not-found.png"
          alt="not-found-img"
          className="max-w-xs"
        />
        <p className="text-sm text-foreground/75 text-center">
          {t("pages.not-found.description")}
        </p>
        <Button className="w-full " onClick={handleGoBack}>
          {t("pages.not-found.button.name")}
        </Button>
      </div>
    </main>
  );
};
