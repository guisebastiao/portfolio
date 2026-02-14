import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AuroraText } from "@/components/ui/aurora-text";
import { contactSchema } from "@/schemas/contact-schema";
import { SendEmailProps } from "@/hooks/use-send-mail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { motion, Variants } from "framer-motion";
import useSendEmail from "@/hooks/use-send-mail";
import { ScrollText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/hooks/use-theme";

export const Contact = () => {
  const { theme } = useTheme();
  const { sendEmail, loading } = useSendEmail();

  const handleRedirectToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/guilherme-sebastiao/", "_blank");
  };

  const form = useForm({
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
    form.reset();
  };

  return (
    <section className="w-full flex items-center justify-center flex-col gap-6 py-8" data-container="4">
      <motion.div
        className="max-w-xl w-full flex flex-col gap-1.5"
        variants={formVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        <motion.h2
          className="text-3xl font-bold text-center"
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          Vamos Conversar
        </motion.h2>
        <motion.p
          className="text-muted-foreground my-3 text-center"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          Tem uma ideia, projeto ou apenas quer trocar uma ideia? Me manda uma mensagem, vou adorar conversar com você.
        </motion.p>
        <form onSubmit={form.handleSubmit(handleSendEmail)} className="space-y-4">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-name">Nome</FieldLabel>
                <Input
                  {...field}
                  id="form-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Informe seu nome"
                  autoComplete="off"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-email">Email</FieldLabel>
                <Input
                  {...field}
                  id="form-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Informe seu e-mail"
                  autoComplete="off"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="subject"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-email">Assunto</FieldLabel>
                <Textarea
                  {...field}
                  id="form-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Escreva sua mensagem..."
                  className="resize-none min-h-24"
                  autoComplete="off"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <div className="size-full flex items-center justify-center gap-3.5">
                <Spinner className="bg-white" />
                <span>Enviando...</span>
              </div>
            ) : (
              <div className="size-full flex items-center justify-center gap-2">
                <Send className="size-4" />
                <span>Enviar</span>
              </div>
            )}
          </Button>
        </form>
      </motion.div>
      <motion.div
        className="max-w-xl full space-y-16 py-20"
        variants={boxVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        <AuroraText
          className="text-5xl font-bold text-center py-2 leading-16"
          colors={theme === "dark" ? ["#a1a1a1", "#d4d4d4"] : ["#404040", "#737373"]}
        >
          Afinal, vamos trabalhar juntos hoje?
        </AuroraText>
        <ShimmerButton className="max-w-xl w-full h-9 gap-2 font-medium text-sm" onClick={handleRedirectToLinkedIn}>
          <ScrollText className="size-4" />
          <span>Contratar</span>
        </ShimmerButton>
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
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
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
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
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
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
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
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
