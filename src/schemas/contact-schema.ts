import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { useMemo } from "react";
import { z } from "zod";

const createContactSchema = (t: TFunction) =>
  z.object({
    name: z
      .string()
      .nonempty(t("schemas.contact.name.nonempty"))
      .max(100, t("schemas.contact.name.invalid-size")),

    email: z
      .string()
      .nonempty(t("schemas.contact.email.nonempty"))
      .email(t("schemas.contact.email.valid"))
      .max(300, t("schemas.contact.email.invalid-size")),

    subject: z
      .string()
      .nonempty(t("schemas.contact.subject.nonempty"))
      .max(150, t("schemas.contact.subject.invalid-size")),
  });

export const useContactSchema = () => {
  const { t } = useTranslation();
  return useMemo(() => createContactSchema(t), [t]);
};
