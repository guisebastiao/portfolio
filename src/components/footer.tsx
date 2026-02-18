import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full min-h-20 flex items-center justify-center flex-col gap-2">
      <span className="text-xs text-foreground/80 text-center font-normal">
        <strong>Copyright &copy; {new Date().getFullYear()}</strong> - Guilherme Fernandes Sebastião,{" "}
        {t("footer.copyright")}
      </span>
      <span className="text-sm text-center font-semibold text-foreground/90">{t("footer.locale")}</span>
    </footer>
  );
};
