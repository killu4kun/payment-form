import { useState } from "react";
import CreditCard from "./components/CreditCard";
import CreditCardOk from "./components/CreditCardConfirm";
import CreditCardForm from "./components/CreditCardForm";

import "./styles/App.css";
import CreditCardContextProvider from "./contexts/FormValues";

export default function App() {
  const [validate, setValidate] = useState<boolean>(false);

  const animateSlider = (shouldValidate: boolean): void => {
    const axis = window.matchMedia("(max-width: 750px)").matches ? "Y" : "X";
    const element = document.querySelector(
      ".cardOverflow > div"
    ) as HTMLElement;

    if (element) {
      element.style.transform = `translate${axis}(50${
        axis === "Y" ? "vh" : "vw"
      })`;
    }

    document.body.classList.add("body-slider");

    setTimeout(() => {
      setValidate(shouldValidate);
      document.body.classList.remove("body-slider");
      if (element) {
        element.style.transform = "translate(0)";
      }
    }, 500);
  };

  return (
    <>
      <CreditCardContextProvider>
        <CreditCard />
        <main className="cardOverflow">
          <div>
            {validate ? (
              <CreditCardOk animateSlider={animateSlider} />
            ) : (
              <CreditCardForm animateSlider={animateSlider} />
            )}
          </div>
        </main>
      </CreditCardContextProvider>
    </>
  );
}
