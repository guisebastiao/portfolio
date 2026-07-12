"use client";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui/input-group";
import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { useContactForm } from "@/features/contact/hooks/use-contact-form";
import { Controller } from "react-hook-form";
import { User } from "lucide-react";

export const NameField = () => {
  const { form, t } = useContactForm();

  return (
    <Controller
      name="name"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="contact-form-name">{t("form.name.label")}</FieldLabel>
          <InputGroup>
            <InputGroupInput
              {...field}
              type="text"
              id="contact-form-name"
              aria-invalid={fieldState.invalid}
              placeholder={t("form.name.placeholder")}
            />
            <InputGroupAddon>
              <User />
            </InputGroupAddon>
          </InputGroup>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
