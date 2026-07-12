"use client";

import { useTrackEvents } from "@/features/hero/hooks/use-track-events";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export const useDownloadResume = () => {
  const { t } = useTranslation("hero");

  const { resumeDownloadSuccess, resumeDownloadError } = useTrackEvents();

  const downloadResume = async () => {
    try {
      const link = document.createElement("a");
      link.href = "/curriculum_guilherme_sebastiao.pdf";
      link.download = "curriculum_guilherme_sebastiao.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      resumeDownloadSuccess();
      toast.success(t("download-resume.success"));
    } catch {
      resumeDownloadError();
      toast.error(t("download-resume.error"));
    }
  };

  return { downloadResume };
};
