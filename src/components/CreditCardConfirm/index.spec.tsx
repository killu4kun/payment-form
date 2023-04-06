import useFormData from "@/hooks/useFormData";
import { render, screen, fireEvent } from "@testing-library/react";
import CreditCardOk from "./index";

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
describe("CreditCardOk", () => {
  it("should render the component", () => {
    render(<CreditCardOk animateSlider={false} />);
    const image = screen.getByAltText("icon-complete");
    const thankYouText = screen.getByText("Thank you!");
    const addedText = screen.getByText("We've added your card details");
    const button = screen.getByText("Continue");
    expect(image).toBeInTheDocument();
    expect(thankYouText).toBeInTheDocument();
    expect(addedText).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should reset form values and call animateSlider when Continue button is clicked", () => {
    const animateSlider = jest.fn();
    render(<CreditCardOk animateSlider={animateSlider} />);
    const button = screen.getByText("Continue");
    fireEvent.click(button);
    expect(useFormData().setFormValues).not.toHaveBeenCalled();
  });

  it("should call animateSlider when Continue button is clicked", () => {
    const animateSlider = jest.fn();
    render(<CreditCardOk animateSlider={animateSlider} />);
    const button = screen.getByText("Continue");
    fireEvent.click(button);
    expect(animateSlider).toHaveBeenCalled();
  });
});
