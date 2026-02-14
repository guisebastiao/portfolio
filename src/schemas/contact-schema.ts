import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório.").max(100, "O nome não pode ser maior do que 100 caracteres"),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório.")
    .email("E-mail inválido.")
    .max(300, "O e-mail não pode ser maior do que 300 caracteres"),
  subject: z
    .string()
    .nonempty("O assunto é obrigatório.")
    .max(150, "O assunto não pode ser maior do que 150 caracteres"),
});
