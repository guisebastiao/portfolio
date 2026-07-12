"use client";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui/input-group";
import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { useContactForm } from "@/features/contact/hooks/use-contact-form";
import { Controller } from "react-hook-form";
import { Mail } from "lucide-react";

export const EmailField = () => {
  const { form, t } = useContactForm();

  return (
    <Controller
      name="email"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="contact-form-email">{t("form.email.label")}</FieldLabel>
          <InputGroup>
            <InputGroupInput
              {...field}
              type="text"
              id="contact-form-email"
              aria-invalid={fieldState.invalid}
              placeholder={t("form.email.placeholder")}
            />
            <InputGroupAddon>
              <Mail />
            </InputGroupAddon>
          </InputGroup>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
