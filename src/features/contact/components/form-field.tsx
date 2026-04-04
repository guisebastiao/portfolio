import type { SendMailRequest } from "@/features/contact/types/send-mail-types";
import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { Textarea } from "@/shared/components/ui/textarea";
import { Input } from "@/shared/components/ui/input";
import type { useForm } from "react-hook-form";

interface FormFieldProps {
  form: ReturnType<typeof useForm<SendMailRequest>>;
  name: keyof SendMailRequest;
  label: string;
  placeholder: string;
  isTextarea?: boolean;
}

export const FormField = ({
  form,
  name,
  label,
  placeholder,
  isTextarea,
}: FormFieldProps) => {
  const error = form.formState.errors[name];

  return (
    <Field data-invalid={!!error}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      {isTextarea ? (
        <Textarea
          id={name}
          {...form.register(name)}
          placeholder={placeholder}
          aria-invalid={!!error}
          className="min-h-24 resize-none"
        />
      ) : (
        <Input
          id={name}
          {...form.register(name)}
          placeholder={placeholder}
          aria-invalid={!!error}
          autoComplete="off"
        />
      )}
      {error && <FieldError errors={[error]} />}
    </Field>
  );
};
