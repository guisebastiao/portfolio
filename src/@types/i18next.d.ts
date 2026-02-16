import "i18next";
import ptBR from "@/locales/pt.json"; 

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof ptBR;
    };
  }
}
