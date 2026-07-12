"use client";

import { trackEvent, GA_EVENTS } from "@/shared/lib/analytics";

export const useTrackEvents = () => {
  const submitContactSendedSuccess = () => {
    trackEvent(GA_EVENTS.CONTACT_SENDED_WITH_SUCCESS);
  };

  const submitContactSendedError = (error: unknown) => {
    trackEvent(GA_EVENTS.CONTACT_SENDED_WITH_ERROR, {
      error,
    });
  };

  return { submitContactSendedSuccess, submitContactSendedError };
};
