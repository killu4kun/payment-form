import { FormValues } from "@/components/CreditCardForm";
import { createContext, useContext, useRef, useState } from "react";
import { ContextType, FormValuesProps } from "./types";

const initialValues: FormValues = {
  cardHolderName: "",
  cardNumber: "",
  expirationDateYY: "",
  expirationDateMM: "",
  cvc: "",
};

export const CreditCardContext = createContext({} as ContextType);

export const useCreditCardContext = () => useContext(CreditCardContext);

const CreditCardContextProvider = ({ children }: FormValuesProps) => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  return (
    <CreditCardContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </CreditCardContext.Provider>
  );
};

export default CreditCardContextProvider;
