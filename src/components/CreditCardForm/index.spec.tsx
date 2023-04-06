import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CreditCardForm from "./index";

jest.mock("@/hooks/useFormData", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    formValues: {
      cardNumber: "1234 5678 9012 3456",
      cardHolderName: "John Smith",
      expirationDateMM: "12",
      expirationDateYY: "23",
      cvc: "123",
    },
    setFormValues: jest.fn(),
  })),
}));
describe("CreditCard form", () => {
  it("renders all form elements correctly", () => {
    render(<CreditCardForm animateSlider={() => {}} />);
    expect(screen.getByLabelText("Cardholder Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Card Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Exp. Date (MM/YY)")).toBeInTheDocument();
    expect(screen.getByLabelText("CVC")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });

  it("should show error message when submitting form with invalid input values", async () => {
    render(<CreditCardForm animateSlider={() => {}} />);

    const confirmButton = screen.getByRole("button", { name: "Confirm" });

    await fireEvent.click(confirmButton);

    waitFor(() => {
      expect(screen.getByText("Cant be blank")).toBeInTheDocument();
    });
  });

  test("should not show error message when submitting form with valid input values", () => {
    render(<CreditCardForm animateSlider={() => {}} />);

    const cardHolderNameInput = screen.getByLabelText("Cardholder Name");
    const cardNumberInput = screen.getByLabelText("Card Number");
    const expirationDateMMInput = screen.getByPlaceholderText("MM");
    const expirationDateYYInput = screen.getByPlaceholderText("YY");
    const cvcInput = screen.getByLabelText("CVC");
    const confirmButton = screen.getByRole("button", { name: "Confirm" });

    fireEvent.change(cardHolderNameInput, {
      target: { value: "Jane Appleseed" },
    });
    fireEvent.change(cardNumberInput, {
      target: { value: "1234567891230000" },
    });
    fireEvent.change(expirationDateMMInput, { target: { value: "12" } });
    fireEvent.change(expirationDateYYInput, { target: { value: "23" } });
    fireEvent.change(cvcInput, { target: { value: "123" } });

    fireEvent.click(confirmButton);

    expect(screen.queryByText("Cant be blank")).not.toBeInTheDocument();
  });
});
