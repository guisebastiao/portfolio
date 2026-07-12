"use client";

import { trackEvent, GA_EVENTS } from "@/shared/lib/analytics";

export const useTrackEvents = () => {
  const redirectedToGithub = (project: string) => {
    trackEvent(GA_EVENTS.REDIRECT_TO_REPOSITORY, {
      project,
    });
  };

  return { redirectedToGithub };
};
