import React, { useState } from "react";
import CreditCard from "./components/CreditCard";
import CreditCardOk from "./components/CreditCardConfirm";
import CreditCardForm, { FormValues } from "./components/CreditCardForm";

import "./App.css";
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

  console.log(validate);

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
        <footer className="attribution">
          <p>
            Made with ♥️ by
            <a
              href="https://github.com/killu4_kun"
              target="_blank"
              rel="noopener noreferrer"
            >
              killu4kun
            </a>
            -
            <a
              href="https://github.com/killu4_kun"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </p>
        </footer>
      </CreditCardContextProvider>
    </>
  );
}
