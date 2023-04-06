import { render } from "@testing-library/react";
import CreditCard from ".";

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
  })),
}));
describe("CreditCard", () => {
  it("should render credit card", () => {
    const { getByText } = render(<CreditCard />);
    const cardNumber = getByText("1234 5678 9012 3456");
    const cardHolderName = getByText("John Smith");
    const expirationDate = getByText("12/23");
    const cvc = getByText("123");

    expect(cardNumber).toBeInTheDocument();
    expect(cardHolderName).toBeInTheDocument();
    expect(expirationDate).toBeInTheDocument();
    expect(cvc).toBeInTheDocument();
  });
});
