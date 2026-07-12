"use client";

import { ContactFormProvider } from "@/features/contact/providers/contact-form-provider";
import { StripedPatternBase } from "@/shared/components/striped-pattern-base";
import { motionVariantHelper } from "@/shared/helpers/motion-variant-helper";
import { ContactForm } from "@/features/contact/components/form";
import { fadeSlide } from "@/shared/helpers/fade-slide";
import { motion } from "motion/react";

export const FormSection = () => {
  return (
    <motion.div
      {...motionVariantHelper(fadeSlide({ x: 80 }))}
      className="relative flex flex-1 flex-col rounded-lg border-2 border-foreground/10 bg-foreground/5 p-5"
    >
      <ContactFormProvider>
        <ContactForm />
      </ContactFormProvider>
      <StripedPatternBase />
    </motion.div>
  );
};
