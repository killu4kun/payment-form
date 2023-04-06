import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders CreditCard component", () => {
    render(<App />);
    const creditCard = screen.getByText("JANE APPLESEED");
    expect(creditCard).toBeInTheDocument();
  });

  it("renders CreditCardForm component initially", () => {
    render(<App />);
    const creditCardForm = screen.getByText("Cardholder Name");
    expect(creditCardForm).toBeInTheDocument();
  });
});
