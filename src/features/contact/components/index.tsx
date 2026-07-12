"use client";

import { FormSection } from "@/features/contact/components/form-section";
import { CardSection } from "@/features/contact/components/card-section";
import { DiaTextReveal } from "@/shared/components/ui/dia-text-reveal";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <div data-container="4" className="flex min-h-screen w-full flex-col gap-10 py-8">
      <DiaTextReveal className="text-3xl font-bold" duration={1.5} text={t("title")} />
      <div className="flex gap-4 md:flex-row flex-col">
        <CardSection />
        <FormSection />
      </div>
    </div>
  );
};
