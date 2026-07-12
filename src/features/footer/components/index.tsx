"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { SocialLink } from "./social-link";

export const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="w-full border-t bg-background/60 backdrop-blur supports-backdrop-filter:bg-background/50">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div className="space-y-1.5">
          <h3 className="text-sm font-medium text-foreground/85">Guilherme Sebastião</h3>
          <p className="text-left text-[11px] text-muted-foreground">
            <strong>
              &copy; {new Date().getFullYear()} {t("copyright")}
            </strong>{" "}
            - {t("location")}
          </p>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-end gap-2">
            <SocialLink href="https://github.com/guisebastiao" aria-label="GitHub">
              <FaGithub className="size-4 text-muted-foreground" />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/guilherme-sebastiao"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-4 text-muted-foreground" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
