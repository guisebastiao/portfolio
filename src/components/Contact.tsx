import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Github, Linkedin, Instagram } from "lucide-react";
import useSendEmail from "@/hooks/sendEmail";

import { Loading } from "@/components/Loading";
import { contactSchema } from "@/schemas/contactSchema";
import { SendEmailProps } from "@/hooks/sendEmail";

export const Contact = () => {
  const { sendEmail, loading } = useSendEmail();

  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
    },
  });

  const handleSendEmail = ({ name, email, subject }: SendEmailProps) => {
    sendEmail({ name, email, subject });
    contactForm.reset();
  };

  const { name, email, subject } = contactForm.formState.errors;

  return (
    <section
      className="max-w-6xl w-full min-h-screen flex items-center justify-center flex-col gap-12 py-5"
      data-container="4"
    >
      <div className="w-full h-3/6 flex flex-wrap items-start justify-center gap-16">
        <div className="flex flex-col max-w-96 w-full gap-14 justify-start">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl text-zinc-50 font-medium tracking-tighter">
              Entre em contato comigo
            </h2>
            <p className="text-zinc-400">
              Entre em contato para colaborar, discutir projetos ou compartilhar
              ideias. Preencha o formulário ou clique em alguma rede social
              abaixo. Eu adoraria conversar com você!
            </p>
          </div>
          <div className="w-full flex gap-2">
            <a
              href="https://github.com/guisebastiao"
              target="_blank"
              className="w-11 h-11 rounded-lg border border-zinc-700 hover:bg-zinc-900 flex items-center justify-center transition"
            >
              <Github className="text-white size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-sebastiao/"
              target="_blank"
              className="w-11 h-11 rounded-lg border border-zinc-700 hover:bg-zinc-900 flex items-center justify-center transition"
            >
              <Linkedin className="text-white size-5" />
            </a>
            <a
              href="https://www.instagram.com/guisebastiao_/"
              target="_blank"
              className="w-11 h-11 rounded-lg border border-zinc-700 hover:bg-zinc-900 flex items-center justify-center transition"
            >
              <Instagram className="text-white size-5" />
            </a>
          </div>
        </div>

        <form
          className="max-w-[420px] w-full p-3 flex flex-col gap-3"
          onSubmit={contactForm.handleSubmit(handleSendEmail)}
        >
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                disabled={loading}
                {...contactForm.register("name")}
                autoComplete="off"
                placeholder="Nome"
                maxLength={255}
                className="w-full h-9 text-white text-sm p-3 bg-zinc-800 border border-zinc-600 rounded-lg"
              />
              {name?.message && (
                <p className="text-xs text-zinc-300 mt-2 border border-red-500 bg-red-500/25 px-1.5 py-0.5 rounded-md">
                  {name?.message}
                </p>
              )}
            </label>
            <label htmlFor="email">
              <input
                type="text"
                id="email"
                disabled={loading}
                {...contactForm.register("email")}
                autoComplete="off"
                placeholder="E-mail"
                className="w-full h-9 text-white text-sm p-3 bg-zinc-800 border border-zinc-600 rounded-lg"
              />
              {email?.message && (
                <p className="text-xs text-zinc-300 mt-2 border border-red-500 bg-red-500/25 px-1.5 py-0.5 rounded-md">
                  {email?.message}
                </p>
              )}
            </label>
          </div>
          <label htmlFor="subject">
            <textarea
              autoComplete="off"
              id="subject"
              {...contactForm.register("subject")}
              placeholder="Assunto"
              disabled={loading}
              maxLength={150}
              className="w-full h-[104px] text-white text-sm p-3 bg-zinc-800 border border-zinc-600 rounded-lg resize-none overflow-hidden"
            />
            {subject?.message && (
              <p className="text-xs text-zinc-300 mt-2 border border-red-500 bg-red-500/25 px-1.5 py-0.5 rounded-md">
                {subject?.message}
              </p>
            )}
          </label>
          <button
            type="submit"
            className="h-9 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition disabled:bg-zinc-500 cursor-pointer disabled:cursor-wait"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loading />
                <span>Enviando</span>
              </>
            ) : (
              <span>Enviar</span>
            )}
          </button>
        </form>
      </div>
      <div className="max-w-[450px] w-full h-3/6 flex flex-col items-center justify-center gap-10">
        <h1 className="font-semibold text-5xl text-white text-center leading-[69px]">
          Afinal, vamos trabalhar juntos hoje?
        </h1>
        <a
          target="_black"
          href="https://www.linkedin.com/in/guilherme-sebastiao/"
          className="w-full h-9 flex items-center justify-center bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-500 transition-colors duration-200"
        >
          Contratar
        </a>
      </div>
    </section>
  );
};
