"use client";

import type { SendMailRequest } from "@/features/contact/types/send-mail-types";
import { env } from "@/shared/config/env";
import emailjs from "@emailjs/browser";
import { useState } from "react";

type Callbacks = {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};

export const useSendMail = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const sendEmail = async (
    { data }: { data: SendMailRequest },
    { onSuccess, onError }: Callbacks = {},
  ) => {
    if (isLoading) return;

    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs.init({
      publicKey: env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
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
        env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
        env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
        data,
        env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      await Promise.race([emailPromise, timeoutPromise]);

      setSuccess(true);
      onSuccess?.();
    } catch (error) {
      setError(true);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, isSuccess, isError, isLoading };
};
