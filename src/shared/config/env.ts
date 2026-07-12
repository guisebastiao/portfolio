"use client";

import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_GA_ID: z.string().trim().min(1),
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().trim().min(1),
  NEXT_PUBLIC_EMAILJS_SERVICE_KEY: z.string().trim().min(1),
  NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY: z.string().trim().min(1),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_EMAILJS_SERVICE_KEY: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
});
