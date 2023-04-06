import { fireEvent, render } from "@testing-library/react";
import { useCreditCardContext } from "./index";
import CreditCardContextProvider from "./index";

describe("CreditCardContextProvider", () => {
  it("should provide formValues and setFormValues to its children", () => {
    const ComponentThatUsesContext = () => {
      const { formValues, setFormValues } = useCreditCardContext();
      return (
        <div>
          <span data-testid="cardHolderName">{formValues.cardHolderName}</span>
          <button
            onClick={() =>
              setFormValues({
                cardHolderName: "John Doe",
                cardNumber: "",
                cvc: "",
                expirationDateMM: "",
                expirationDateYY: "",
              })
            }
          >
            Change Name
          </button>
        </div>
      );
    };

    const { getByTestId, getByText } = render(
      <CreditCardContextProvider>
        <ComponentThatUsesContext />
      </CreditCardContextProvider>
    );

    const button = getByText("Change Name");

    const cardHolderName = getByTestId("cardHolderName");
    expect(cardHolderName.textContent).toBe("");
    fireEvent.click(button);
    expect(cardHolderName.textContent).toBe("John Doe");
  });
});
