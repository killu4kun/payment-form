import { FormValues } from "@/components/CreditCardForm";
import { ReactNode } from "react";

export interface FormValuesProps {
  children: ReactNode;
}

export type ContextType = {
  formValues: FormValues;
  setFormValues: (values: FormValues) => void;
};
