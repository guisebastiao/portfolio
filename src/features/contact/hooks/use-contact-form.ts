"use client";

import { ContactFormContext } from "@/features/contact/context/contact-form-context";
import { useContext } from "react";

export const useContactForm = () => {
  return useContext(ContactFormContext);
};
