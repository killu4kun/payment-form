import { renderHook } from "@testing-library/react";
import CreditCardContextProvider, {
  CreditCardContext,
} from "@/contexts/FormValues";
import useFormData from "./useFormData";

describe("useFormData", () => {
  it("should throw an error when used outside CreditCardProvider", () => {
    const error = new Error(
      "useCreditCardContext must be used within a CreditCardProvider"
    );
    expect(error).toEqual(
      Error("useCreditCardContext must be used within a CreditCardProvider")
    );
  });

  it("should return form data when used within CreditCardProvider", () => {
    const { result } = renderHook(() => useFormData(), {
      wrapper: CreditCardContextProvider,
    });

    expect(result.current.formValues.cardHolderName).toBe("");
    expect(result.current.setFormValues).toBeInstanceOf(Function);
  });
});
