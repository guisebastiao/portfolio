"use client";

import { trackEvent, GA_EVENTS } from "@/shared/lib/analytics";

export const useTrackEvents = () => {
  const openedCertification = (certification: string) => {
    trackEvent(GA_EVENTS.CERTIFICATE_OPENED, {
      certification,
    });
  };

  return {
    openedCertification,
  };
};
