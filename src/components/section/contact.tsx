import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AuroraText } from "@/components/ui/aurora-text";
import { useContactSchema } from "@/schemas/contact-schema";
import { SendEmailProps } from "@/hooks/use-send-mail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import useSendEmail from "@/hooks/use-send-mail";
import { ScrollText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/hooks/use-theme";
import { m, Variants } from "framer-motion";

export const Contact = () => {
  const { theme } = useTheme();
  const { sendEmail, loading } = useSendEmail();
  const { t } = useTranslation();

  const handleRedirectToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/guilherme-sebastiao/", "_blank");
  };

  const contactSchema = useContactSchema();

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
      <m.div
        className="transform-gpu will-change-transform max-w-xl w-full flex flex-col gap-1.5"
        variants={formVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        <m.h2
          className="transform-gpu will-change-transform text-3xl font-bold text-center"
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          {t("sections.contact.title")}
        </m.h2>
        <m.p
          className="transform-gpu will-change-transform text-muted-foreground my-3 text-center"
          variants={descriptionVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          {t("sections.contact.description")}
        </m.p>
        <form onSubmit={form.handleSubmit(handleSendEmail)} className="space-y-4">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-name">{t("sections.contact.form.name.label")}</FieldLabel>
                <Input
                  {...field}
                  id="form-name"
                  aria-invalid={fieldState.invalid}
                  placeholder={t("sections.contact.form.name.placeholder")}
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
                <FieldLabel htmlFor="form-email">{t("sections.contact.form.email.label")}</FieldLabel>
                <Input
                  {...field}
                  id="form-email"
                  aria-invalid={fieldState.invalid}
                  placeholder={t("sections.contact.form.email.placeholder")}
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
                <FieldLabel htmlFor="form-subject">{t("sections.contact.form.subject.label")}</FieldLabel>
                <Textarea
                  {...field}
                  id="form-subject"
                  aria-invalid={fieldState.invalid}
                  placeholder={t("sections.contact.form.subject.placeholder")}
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
                <span>{t("sections.contact.form.submit.button-pending.name")}</span>
              </div>
            ) : (
              <div className="size-full flex items-center justify-center gap-2">
                <Send className="size-4" />
                <span>{t("sections.contact.form.submit.button-normal.name")}</span>
              </div>
            )}
          </Button>
        </form>
      </m.div>
      <m.div
        className="transform-gpu will-change-transform max-w-xl full space-y-16 py-20"
        variants={boxVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        <AuroraText
          className="text-5xl font-bold text-center py-2 leading-16"
          colors={theme === "dark" ? ["#a1a1a1", "#d4d4d4"] : ["#404040", "#737373"]}
        >
          {t("sections.contact.contratar.title")}
        </AuroraText>
        <ShimmerButton className="max-w-xl w-full h-9 gap-2 font-medium text-sm" onClick={handleRedirectToLinkedIn}>
          <ScrollText className="size-4" />
          <span>{t("sections.contact.contratar.button-name")}</span>
        </ShimmerButton>
      </m.div>
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
      duration: 0.3,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const descriptionVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeOut",
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
      duration: 0.3,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: 100,
    transition: {
      duration: 0.3,
      ease: "easeOut",
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
      duration: 0.3,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: -100,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
