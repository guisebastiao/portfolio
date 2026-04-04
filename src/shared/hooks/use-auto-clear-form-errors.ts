import { useEffect, useRef } from "react";
import {
  type FieldErrors,
  type UseFormClearErrors,
  type FieldValues,
} from "react-hook-form";

type UseAutoClearFormErrorsProps<T extends FieldValues> = {
  errors: FieldErrors<T>;
  clearErrors: UseFormClearErrors<T>;
  delay?: number;
};

export const useAutoClearFormErrors = <T extends FieldValues>({
  errors,
  clearErrors,
  delay = 5000,
}: UseAutoClearFormErrorsProps<T>) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;

    if (!hasErrors) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      clearErrors();
      timeoutRef.current = null;
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [errors, clearErrors, delay]);
};
