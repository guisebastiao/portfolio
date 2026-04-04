import type { sendMailSchema } from "@/features/contact/schemas/send-mail-schema";
import { z } from "zod";

export type SendMailRequest = z.infer<ReturnType<typeof sendMailSchema>>;
