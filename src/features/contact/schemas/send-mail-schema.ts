import type { TFunction } from "i18next";
import { z } from "zod";

export const sendMailSchema = (t: TFunction) =>
  z.object({
    name: z
      .string()
      .nonempty(t("schema-validation.name.nonempty"))
      .max(100, t("schema-validation.name.invalid-size")),
    email: z
      .string()
      .nonempty(t("schema-validation.email.nonempty"))
      .email(t("schema-validation.email.valid"))
      .max(300, t("schema-validation.email.invalid-size")),
    subject: z
      .string()
      .nonempty(t("schema-validation.subject.nonempty"))
      .max(150, t("schema-validation.subject.invalid-size")),
  });
