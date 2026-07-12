"use client";

import { useAutoClearFormErrors } from "@/features/contact/hooks/use-auto-clear-form-errors";
import { ContactFormContext } from "@/features/contact/context/contact-form-context";
import { sendMailSchema } from "@/features/contact/schemas/send-mail-schema";
import { useTrackEvents } from "@/features/contact/hooks/use-track-events";
import { SendMailRequest } from "@/features/contact/types/send-mail-types";
import { useSendMail } from "@/features/contact/hooks/use-send-mail";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const ContactFormProvider = ({ children }: PropsWithChildren) => {
  const { sendEmail, isLoading } = useSendMail();

  const { t } = useTranslation("contact");

  const schema = useMemo(() => sendMailSchema(t), [t]);

  const { submitContactSendedSuccess, submitContactSendedError } = useTrackEvents();

  const form = useForm<SendMailRequest>({
    resolver: zodResolver(schema),
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
          submitContactSendedSuccess();
          toast.success(t("toast.success"));
        },
        onError: (error: unknown) => {
          submitContactSendedError(error);
          toast.error(t("toast.error"));
        },
      },
    );
  };

  useAutoClearFormErrors({ errors: form.formState.errors, clearErrors: form.clearErrors });

  const value = { isLoading, onSubmit, form, t };

  return <ContactFormContext.Provider value={value}>{children}</ContactFormContext.Provider>;
};
