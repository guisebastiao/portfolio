"use client";

import { SendMailRequest } from "@/features/contact/types/send-mail-types";
import { UseFormReturn } from "react-hook-form";
import { createContext } from "react";
import { TFunction } from "i18next";

type ContactFormState = {
  isLoading: boolean;
  onSubmit: (data: SendMailRequest) => void;
  form: UseFormReturn<SendMailRequest>;
  t: TFunction<"contact">;
};

export const ContactFormContext = createContext<ContactFormState>({} as ContactFormState);
