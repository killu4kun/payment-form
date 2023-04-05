import { useState } from "react";
import CreditCard from "./components/CreditCard";
import CreditCardOk from "./components/CreditCardConfirm";
import CreditCardForm from "./components/CreditCardForm";

import "./App.css";

export default function App() {
  const [validate] = useState(false);

  return (
    <>
      <CreditCard />
      <main className="cardOverflow">
        <div>{validate ? <CreditCardOk /> : <CreditCardForm />}</div>
      </main>
      ;
    </>
  );
}
