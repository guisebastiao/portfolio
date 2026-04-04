import type { SendMailRequest } from "@/features/contact/types/send-mail-types";
import emailjs from "@emailjs/browser";
import { useState } from "react";

type Callbacks = {
  onSuccess?: () => void;
  onError?: () => void;
};

const useSendMail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (
    { data }: { data: SendMailRequest },
    { onSuccess, onError }: Callbacks = {},
  ) => {
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
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 10000),
      );

      const emailPromise = await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        data,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      await Promise.race([emailPromise, timeoutPromise]);

      setSuccess(true);
      onSuccess?.();
    } catch (error) {
      setError(true);
      onError?.();
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, success, error, loading };
};

export default useSendMail;
