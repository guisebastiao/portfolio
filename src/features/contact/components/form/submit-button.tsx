"use client";

import { useContactForm } from "@/features/contact/hooks/use-contact-form";
import { Spinner } from "@/shared/components/ui/spinner";
import { Button } from "@/shared/components/ui/button";
import { Send } from "lucide-react";
import React from "react";

export const SubmitButton = () => {
  const { isLoading, t } = useContactForm();

  return (
    <Button type="submit" disabled={isLoading} className="w-full">
      {isLoading ? (
        <React.Fragment>
          <Spinner />
          <span>{t("form.submit.button-pending.name")}</span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Send className="rotate-45 mr-1" />
          <span>{t("form.submit.button-normal.name")}</span>
        </React.Fragment>
      )}
    </Button>
  );
};
