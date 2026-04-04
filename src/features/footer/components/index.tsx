import { Github, Globe, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SocialLink } from "./social-link";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t bg-background/60 backdrop-blur supports-backdrop-filter:bg-background/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-6">
        <div className="grid gap-6 md:grid-cols-3 md:items-center">
          <div className="flex items-start gap-3">
            <div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-border">
              <img
                src="/profile.jpg"
                alt="Guilherme Sebastião"
                className="size-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground/85">
                Guilherme Sebastião
              </p>
              <p className="text-xs text-muted-foreground max-w-62.5">
                {t("footer.description")}
              </p>
            </div>
          </div>
          <div className="space-y-1.25">
            <p className="text-xs text-foreground/85 md:text-center text-left">
              &copy; {new Date().getFullYear()} Guilherme Fernandes Sebastião{" "}
              {t("footer.copyright")}
            </p>
            <p className="text-[11px] text-muted-foreground/80 md:text-center text-left">
              {t("footer.locale")}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-[13px] text-foreground/85">
              {t("footer.label.title")}
            </p>
            <p className="text-[11px] max-w-62.5 text-muted-foreground md:text-right text-left pb-1.5">
              {t("footer.label.description")}
            </p>
            <div className="flex gap-2">
              <SocialLink
                href="https://github.com/guisebastiao"
                aria-label="GitHub"
                className="group"
              >
                <Github className="size-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/guilherme-sebastiao"
                aria-label="LinkedIn"
                className="group"
              >
                <Linkedin className="size-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </SocialLink>
              <SocialLink
                href="https://guisebastiao.com.br"
                aria-label="LinkedIn"
                className="group"
              >
                <Globe className="size-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
