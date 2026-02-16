import { Language } from "@/i18n";

export type Graduation = {
  course: string;
  institution: string;
  status: string;
  location: string;
}

export const graduations: Record<Language, Graduation[]> = {
  pt: [
    {
      course: "Ciência da Computação",
      institution: "UNISUL - Universidade do Sul de Santa Catarina",
      status: "Em Andamento",
      location: "Tubarão - SC, Brasil",
    },
  ],
  en: [
    {
      course: "Computer Science",
      institution: "UNISUL - Universidade do Sul de Santa Catarina",
      status: "In progress",
      location: "Tubarão - SC, Brazil",
    }
  ]
};
