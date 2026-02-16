import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";

export interface SendEmailProps {
  name: string;
  email: string;
  subject: string;
}

const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { t } = useTranslation();

  const sendEmail = async ({ name, email, subject }: SendEmailProps) => {
    if (loading) return;

    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs.init({
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
      blockHeadless: true,
      limitRate: {
        id: "portfolio-contact",
        throttle: 10000,
      },
    });

    try {
      const templateParams = { name, email, subject };

      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 10000));

      const emailPromise = await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      await Promise.race([emailPromise, timeoutPromise]);

      toast.success(t("hooks.send-mail.toast.success"));
      setSuccess(true);
    } catch (error) {
      setError(true);
      toast.error(t("hooks.send-mail.toast.error"));
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, success, error, loading };
};

export default useSendEmail;
