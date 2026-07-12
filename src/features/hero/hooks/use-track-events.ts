"use client";

import { trackEvent, GA_EVENTS } from "@/shared/lib/analytics";

export const useTrackEvents = () => {
  const resumeDownloadSuccess = () => {
    trackEvent(GA_EVENTS.RESUME_DOWNLOAD_WITH_SUCCESS);
  };

  const resumeDownloadError = () => {
    trackEvent(GA_EVENTS.RESUME_DOWNLOAD_WITH_ERROR);
  };

  const redirectedToGithub = () => {
    trackEvent(GA_EVENTS.REDIRECT_TO_GITHUB);
  };

  const redirectedToLinkedIn = () => {
    trackEvent(GA_EVENTS.REDIRECT_TO_LINKEDIN);
  };

  return {
    resumeDownloadSuccess,
    resumeDownloadError,
    redirectedToGithub,
    redirectedToLinkedIn,
  };
};
