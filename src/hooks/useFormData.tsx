import CreditCardContextProvider, {
  CreditCardContext,
} from "@/contexts/FormValues";
import { useContext } from "react";

function useFormData() {
  const context = useContext(CreditCardContext);

  if (!context) {
    throw new Error(
      "useCreditCardContext must be used within a CreditCardProvider"
    );
  }

  return context;
}

export default useFormData;
