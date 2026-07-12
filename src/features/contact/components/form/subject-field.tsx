"use client";

import { SUBJECT_MAX_LENGTH } from "@/features/contact/constants/subject-max-length";
import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { useContactForm } from "@/features/contact/hooks/use-contact-form";
import { Controller } from "react-hook-form";
import { ALargeSmall } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/shared/components/ui/input-group";

export const SubjectField = () => {
  const { form, t } = useContactForm();

  return (
    <Controller
      name="subject"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="contact-form-subject">{t("form.subject.label")}</FieldLabel>
          <InputGroup>
            <div className="flex w-full">
              <InputGroupAddon className="items-start py-2.5">
                <ALargeSmall className="size-4" />
              </InputGroupAddon>
              <InputGroupTextarea
                {...field}
                id="contact-form-subject"
                aria-invalid={fieldState.invalid}
                placeholder={t("form.subject.placeholder")}
                className="max-h-100"
                maxLength={SUBJECT_MAX_LENGTH}
              />
            </div>
            <InputGroupAddon align="block-end">
              <InputGroupText>
                {field.value?.length ?? 0}/{SUBJECT_MAX_LENGTH}
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
