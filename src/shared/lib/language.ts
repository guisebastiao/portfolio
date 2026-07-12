import { enUs } from "@/shared/i18n/locales/en-US";
import { ptBr } from "@/shared/i18n/locales/pt-BR";
import { ResourceKey } from "i18next";

export const languages = {
  ptBR: "pt-BR",
  enUS: "en-US",
} as const;

export const DEFAULT_LANGUAGE = languages.enUS;
export const LANGUAGE_COOKIE_KEY = "app_language";

export type Language = (typeof languages)[keyof typeof languages];

type Resource = {
  [language: string]: {
    [namespace: string]: ResourceKey;
  };
};

export const resources: Resource = {
  "pt-BR": ptBr,
  "en-US": enUs,
} as const;

export const isLanguage = (value: string | undefined | null): value is Language => {
  return typeof value === "string" && Object.values(languages).includes(value as Language);
};
