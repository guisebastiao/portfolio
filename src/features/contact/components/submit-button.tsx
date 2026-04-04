import { Spinner } from "@/shared/components/ui/spinner";
import { Button } from "@/shared/components/ui/button";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";
import React from "react";

export const SubmitButton = ({ loading }: { loading: boolean }) => {
  const { t } = useTranslation();

  return (
    <Button type="submit" disabled={loading} className="w-full">
      {loading ? (
        <React.Fragment>
          <Spinner className="bg-white" />
          <span>{t("sections.contact.form.submit.button-pending.name")}</span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Send className="size-4" />
          <span>{t("sections.contact.form.submit.button-normal.name")}</span>
        </React.Fragment>
      )}
    </Button>
  );
};
