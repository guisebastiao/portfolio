import { SUBJECT_MAX_LENGTH } from "@/features/contact/constants/subject-max-length";
import type { SendMailRequest } from "@/features/contact/types/send-mail-types";
import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import type { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/shared/components/ui/input-group";

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
  const {
    register,
    watch,
    formState: { errors },
  } = form;

  const error = errors[name];

  const subject = watch("subject");

  return (
    <Field data-invalid={!!error}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      {isTextarea ? (
        <InputGroup>
          <InputGroupTextarea
            id={name}
            {...register(name)}
            placeholder={placeholder}
            aria-invalid={!!error}
            className="min-h-24 resize-none"
          />
          <InputGroupAddon align="block-end">
            <InputGroupText
              className={twMerge(
                subject.length > SUBJECT_MAX_LENGTH && "text-destructive",
              )}
            >
              {subject.length}/{SUBJECT_MAX_LENGTH}
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      ) : (
        <Input
          id={name}
          {...register(name)}
          placeholder={placeholder}
          aria-invalid={!!error}
          autoComplete="off"
        />
      )}
      {error && <FieldError errors={[error]} />}
    </Field>
  );
};
