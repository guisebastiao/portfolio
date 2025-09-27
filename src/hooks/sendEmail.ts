import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";

import { PUBLIC_KEY, SERVICE_KEY, TEMPLATE_KEY } from "@/utils/env";

export interface SendEmailProps {
  name: string;
  email: string;
  subject: string;
}

const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async ({ name, email, subject }: SendEmailProps) => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      const templateParams = { name, email, subject };
      await emailjs.send(SERVICE_KEY, TEMPLATE_KEY, templateParams, PUBLIC_KEY);

      toast.success("Seu e-mail foi enviado com sucesso.");
      setSuccess(true);
    } catch (error) {
      setError(true);
      setLoading(false);

      toast.error("Algo deu errado, tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, success, error, loading };
};

export default useSendEmail;
