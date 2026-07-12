"use client";

import { SubjectField } from "@/features/contact/components/form/subject-field";
import { SubmitButton } from "@/features/contact/components/form/submit-button";
import { EmailField } from "@/features/contact/components/form/email-field";
import { useContactForm } from "@/features/contact/hooks/use-contact-form";
import { NameField } from "@/features/contact/components/form/name-field";
import { FieldGroup } from "@/shared/components/ui/field";

export const ContactForm = () => {
  const { form, isLoading, onSubmit } = useContactForm();

  return (
    <form id="contact-form" autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
      <fieldset disabled={isLoading}>
        <FieldGroup>
          <NameField />
          <EmailField />
          <SubjectField />
          <SubmitButton />
        </FieldGroup>
      </fieldset>
    </form>
  );
};
