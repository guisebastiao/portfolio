import { sendGAEvent } from "@next/third-parties/google";

export const GA_EVENTS = {
  CONTACT_SENDED_WITH_SUCCESS: "contact_sended_with_success",
  CONTACT_SENDED_WITH_ERROR: "contact_sended_with_error",
  RESUME_DOWNLOAD_WITH_SUCCESS: "resume_download_with_success",
  RESUME_DOWNLOAD_WITH_ERROR: "resume_download_with_error",
  THEME_CHANGED: "theme_changed",
  LANGUAGE_CHANGED: "language_changed",
  REDIRECT_TO_REPOSITORY: "redirect_to_repository",
  REDIRECT_TO_LINKEDIN: "redirect_to_linkedin",
  REDIRECT_TO_GITHUB: "redirect_to_github",
  CERTIFICATE_OPENED: "certificate_opened",
  IMAGE_ERRORED: "image_errored",
  NAVBAR_CLICKED: "navbar_clicked",
  PAGE_NOT_FOUND: "page_not_found",
} as const;

export const APP_SECTIONS = {
  HERO: "hero",
  ABOUT: "about",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  CONTACT: "contact",
} as const;

export type GAEvent = (typeof GA_EVENTS)[keyof typeof GA_EVENTS];
export type AppSection = (typeof APP_SECTIONS)[keyof typeof APP_SECTIONS];

export const trackEvent = (event: GAEvent, params?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  sendGAEvent({
    event,
    ...params,
  });
};
