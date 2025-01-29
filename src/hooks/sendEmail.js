import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import { SERVICE_KEY, TEMPLATE_KEY, PUBLIC_KEY } from "../utils/config";

const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async ({ name, email, subject }) => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      const templateParams = { name, email, subject };
      await emailjs.send(SERVICE_KEY, TEMPLATE_KEY, templateParams, PUBLIC_KEY);

      toast.success("Seu e-mail foi enviado com sucesso.");
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);

      toast.error("Algo deu errado, tente novamente mais tarde.");
      console.error("Error sending email, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, success, error, loading };
};

export default useSendEmail;
