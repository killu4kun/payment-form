import { FormValues } from "@/components/CreditCardForm";
import { ReactNode } from "react";

export interface FormValuesProps {
  children: ReactNode;
}

export type ContextType = {
  formValues: FormValues;
  error?: string;
  setFormValues: (values: FormValues) => void;
};
