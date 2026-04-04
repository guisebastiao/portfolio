import type { SendMailRequest } from "@/features/contact/types/send-mail-types";
import { useSendMailSchema } from "@/features/contact/schemas/send-mail-schema";
import { FormSection } from "@/features/contact/components/form-section";
import { CTASection } from "@/features/contact/components/cta-section";
import useSendEmail from "@/features/contact/hooks/use-send-mail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const Contact = () => {
  const { sendEmail, loading } = useSendEmail();

  const { t } = useTranslation();

  const form = useForm<SendMailRequest>({
    resolver: zodResolver(useSendMailSchema()),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
    },
  });

  const onSubmit = (data: SendMailRequest) => {
    sendEmail(
      { data },
      {
        onSuccess: () => {
          form.reset();
          toast.success(t("hooks.send-mail.toast.success"));
        },
        onError: () => {
          toast.error(t("hooks.send-mail.toast.error"));
        },
      },
    );
  };

  return (
    <section
      data-container="4"
      className="flex w-full flex-col items-center justify-center gap-6 py-8"
    >
      <FormSection form={form} onSubmit={onSubmit} loading={loading} />
      <CTASection />
    </section>
  );
};
