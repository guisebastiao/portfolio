import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

import { Github, Linkedin, Instagram } from "lucide-react";
import useSendEmail from "../hooks/sendEmail";

import { TextArea } from "./TextArea";
import Loading from "./Loading";

const formSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório.")
    .max(255, "O nome não pode ser maior do que 255 caracteres"),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório.")
    .email("E-mail inválido.")
    .max(255, "O e-mail não pode ser maior do que 255 caracteres"),
  subject: z
    .string()
    .nonempty("O assunto é obrigatório.")
    .max(255, "O assunto não pode ser maior do que 255 caracteres"),
});

export const Contact = () => {
  const { sendEmail, loading } = useSendEmail();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
    },
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const { name, email, subject } = errors;
      const messages = [name?.message, email?.message, subject?.message].filter(
        (message) => message !== undefined
      );

      messages.map((msg) => {
        toast.error(msg);
      });
    }
  }, [errors]);

  const handleSendEmail = ({ name, email, subject }) => {
    sendEmail({ name, email, subject });
    reset();
  };

  return (
    <section
      className="max-w-6xl w-full min-h-screen flex items-center justify-center flex-col gap-12 py-5"
      data-page="3"
    >
      <div className="w-full h-3/6 flex flex-wrap items-start justify-center gap-16">
        <div className="flex flex-col max-w-96 w-full gap-14 justify-start">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl text-zinc-50 font-medium">
              Entre em contato comigo
            </h2>
            <p className="text-base font-medium text-zinc-400">
              Entre em contato para colaborar, discutir projetos ou compartilhar
              ideias. Preencha o formulário ou clique em alguma rede social
              abaixo. Eu adoraria conversar com você!
            </p>
          </div>
          <div className="w-full flex gap-2">
            <a
              href="https://github.com/guisebastiao"
              target="_blank"
              className="w-11 h-11 rounded-[10px] border border-zinc-700 hover:bg-zinc-900 flex items-center justify-center transition-colors duration-200"
            >
              <Github className="text-zinc-50 w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-sebastiao/"
              target="_blank"
              className="w-11 h-11 rounded-[10px] border border-zinc-700 hover:bg-zinc-900 flex items-center justify-center transition-colors duration-200"
            >
              <Linkedin className="text-zinc-50 w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/guisebastiao_/"
              target="_blank"
              className="w-11 h-11 rounded-[10px] border border-zinc-700 hover:bg-zinc-900 flex items-center justify-center transition-colors duration-200"
            >
              <Instagram className="text-zinc-50 w-5 h-5" />
            </a>
          </div>
        </div>
        <form
          action="POST"
          className="max-w-[420px] w-full p-3 flex flex-col gap-3"
          onSubmit={handleSubmit(handleSendEmail)}
        >
          <div className="grid grid-cols-2 max-500:grid-cols-1 gap-3">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                {...register("name")}
                autoComplete="off"
                placeholder="Nome"
                maxLength={255}
                className="w-full h-9 text-zinc-50 font-normal text-sm p-3 bg-zinc-800 border border-zinc-700 rounded-[10px] placeholder:text-zinc-600"
              />
            </label>
            <label htmlFor="email">
              <input
                type="text"
                id="email"
                {...register("email")}
                autoComplete="off"
                placeholder="E-mail"
                className="w-full h-9 text-zinc-50 font-normal text-sm p-3 bg-zinc-800 border border-zinc-700 rounded-[10px] placeholder:text-zinc-600"
              />
            </label>
          </div>
          <label htmlFor="subject" className="relative">
            <TextArea
              autoComplete="off"
              id="subject"
              {...register("subject")}
              placeholder="Assunto"
              maxLength={255}
              className="w-full min-h-32 h-full text-zinc-50 font-normal text-sm p-3 pb-6 bg-zinc-800 border border-zinc-700 rounded-[10px] placeholder:text-zinc-600 resize-none overflow-hidden"
            />
            <span className="absolute right-4 bottom-[10px] text-xs text-zinc-400 font-semibold">
              {watch("subject").length} de 255
            </span>
          </label>
          <button
            type="submit"
            className="h-9 flex items-center justify-center bg-blue-600 text-zinc-50 font-medium text-base rounded-[10px] hover:bg-blue-500 transition-colors duration-200 disabled:bg-zinc-500"
            disabled={loading}
          >
            {loading ? (
              <Loading classname="text-zinc-50 w-[20px] h-[20px] border-[3px]" />
            ) : (
              <span>Enviar</span>
            )}
          </button>
        </form>
      </div>
      <div className="max-w-[450px] w-full h-3/6 flex flex-col items-center justify-center gap-10">
        <h1 className="font-semibold text-5xl text-zinc-50 text-center leading-[69px]">
          Afinal, vamos trabalhar juntos hoje?
        </h1>
        <a
          target="_black"
          href="https://www.linkedin.com/in/guilherme-sebastiao/"
          className="w-full h-9 flex items-center justify-center bg-blue-600 text-zinc-50 font-medium text-base rounded-[10px] cursor-pointer hover:bg-blue-500 transition-colors duration-200"
        >
          Contratar
        </a>
      </div>
    </section>
  );
};
