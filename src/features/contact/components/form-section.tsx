import type { SendMailRequest } from "@/features/contact/types/send-mail-types";
import { SubmitButton } from "@/features/contact/components/submit-button";
import { FormField } from "@/features/contact/components/form-field";
import type {} from "@/features/contact/hooks/use-send-mail";
import { slideX } from "@/features/contact/variants/slide-x";
import { fade } from "@/features/contact/variants/fade";
import type { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

type FormSectionProps = {
  form: ReturnType<typeof useForm<SendMailRequest>>;
  onSubmit: (data: SendMailRequest) => void;
  loading: boolean;
};

export const FormSection = ({ form, onSubmit, loading }: FormSectionProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={slideX(80)}
      initial="hidden"
      whileInView="visible"
      className="flex w-full max-w-xl flex-col gap-1.5"
    >
      <motion.h2 variants={fade()} className="text-center text-3xl font-bold">
        {t("sections.contact.title")}
      </motion.h2>
      <motion.p
        variants={fade(0.1)}
        className="my-3 text-center text-muted-foreground"
      >
        {t("sections.contact.description")}
      </motion.p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          form={form}
          name="name"
          label={t("sections.contact.form.name.label")}
          placeholder={t("sections.contact.form.name.placeholder")}
        />
        <FormField
          form={form}
          name="email"
          label={t("sections.contact.form.email.label")}
          placeholder={t("sections.contact.form.email.placeholder")}
        />
        <FormField
          form={form}
          name="subject"
          label={t("sections.contact.form.subject.label")}
          placeholder={t("sections.contact.form.subject.placeholder")}
          isTextarea
        />
        <SubmitButton loading={loading} />
      </form>
    </motion.div>
  );
};
