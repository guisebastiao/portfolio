import { contactSchema } from "@/schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendEmailProps } from "@/hooks/sendEmail";
import { motion, Variants } from "framer-motion";
import { ScrollText, Send } from "lucide-react";
import { Spinner } from "@/components/Spinner";
import useSendEmail from "@/hooks/sendEmail";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const visibleTimeErrors = 3000;

export const Contact = () => {
  const { sendEmail, loading } = useSendEmail();

  const { register, handleSubmit, reset, clearErrors, formState } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
    },
  });

  const handleSendEmail = ({ name, email, subject }: SendEmailProps) => {
    sendEmail({ name, email, subject });
    reset();
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (Object.keys(formState.errors).length > 0) {
      timer = setTimeout(() => {
        clearErrors();
      }, visibleTimeErrors);
    }

    return () => clearTimeout(timer);
  }, [formState.errors, clearErrors]);

  const { name, email, subject } = formState.errors;

  return (
    <section
      className="w-full flex items-center justify-center flex-col gap-5 py-3"
      data-container="4"
    >
      <motion.form
        className="max-w-xl w-full flex flex-col gap-1.5"
        onSubmit={handleSubmit(handleSendEmail)}
        variants={formVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ amount: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center"
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          Vamos Conversar
        </motion.h2>
        <motion.p
          className="text-muted-foreground my-3"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ amount: 0.5 }}
        >
          Tem uma ideia, projeto ou apenas quer trocar uma ideia? Me manda uma mensagem, vou adorar conversar com você.
        </motion.p>
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            disabled={loading}
            {...register("name")}
            autoComplete="off"
            placeholder="Seu nome"
            className="w-full h-9 text-[13px] font-normal p-3 bg-zinc-200/80 dark:bg-zinc-900/70 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition aria-invalid:ring-transparent aria-invalid:border-destructive"
            aria-invalid={!!name}
          />
          {name?.message && <p className="text-xs text-red-400 pt-1.5">{name?.message}</p>}
        </label>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            disabled={loading}
            {...register("email")}
            autoComplete="off"
            placeholder="Seu e-mail"
            className="w-full h-9 text-[13px] font-normal p-3 bg-zinc-200/80 dark:bg-zinc-900/70 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition aria-invalid:ring-transparent aria-invalid:border-destructive"
            aria-invalid={!!email}
          />
          {email?.message && <p className="text-xs text-red-400 pt-1.5">{email?.message}</p>}
        </label>
        <label htmlFor="subject">
          <textarea
            id="subject"
            {...register("subject")}
            placeholder="Escreva sua mensagem..."
            disabled={loading}
            maxLength={200}
            className="w-full h-29 text-[13px] font-normal p-3 bg-zinc-200/80 dark:bg-zinc-900/70 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none transition aria-invalid:ring-transparent aria-invalid:border-destructive"
            aria-invalid={!!subject}
          />
          {subject?.message && <p className="text-xs text-red-400 pt-1.5">{subject?.message}</p>}
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full h-9 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition text-sm disabled:bg-zinc-500 disabled:cursor-default cursor-pointer"
        >
          {loading ? (
            <div className="size-full flex items-center justify-center gap-2">
              <Spinner className="border-t-white" />
              <span>Enviando</span>
            </div>
          ) : (
            <div className="size-full flex items-center justify-center gap-2">
              <Send className="size-4" />
              <span>Enviar</span>
            </div>
          )}
        </button>
      </motion.form>
      <motion.div
        className="max-w-xl full space-y-16 py-20"
        variants={boxVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ amount: 0.5 }}
      >
        <h4 className="text-5xl font-bold text-center bg-gradient-to-tr from-zinc-900/70 dark:from-zinc-200/50 via-zinc-950/80 dark:via-zinc-50/80 to-zinc-900/70 dark:to-zinc-200/50 bg-clip-text text-transparent py-2 leading-16">
          Afinal, vamos trabalhar juntos hoje?
        </h4>
        <a
          className="flex items-center justify-center w-full text-white h-9 rounded-lg text-sm bg-blue-600 hover:bg-blue-500 cursor-pointer gap-2 transition"
          href="https://www.linkedin.com/in/guilherme-sebastiao/"
          target="_blank"
          rel="noreferrer"
        >
          <ScrollText className="size-4" />
          <span>Contratar</span>
        </a>
      </motion.div>
    </section>
  );
};

const titleVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
};

const paragraphVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
};

const formVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: 100,
  },
};

const boxVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: -100,
  },
};
