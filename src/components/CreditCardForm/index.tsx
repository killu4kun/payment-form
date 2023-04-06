import useFormData from "@/hooks/useFormData";
import { useState } from "react";
import { FieldErrors, Resolver, useForm } from "react-hook-form";

import "./style.css";

export type FormValues = {
  cardHolderName: string;
  cardNumber: string;
  expirationDateYY: string;
  expirationDateMM: string;
  cvc: string;
};

function CreditCardForm({ animateSlider }: any) {
  const { formValues, setFormValues } = useFormData();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (event: any): void => {
    event.preventDefault();
    animateSlider(true);
  };

  return (
    <form className="cardForm" onSubmit={onSubmit}>
      <label className="labelname">
        Cardholder Name
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="e.g. Jane Appleseed"
          name="cardHolderName"
          className="card-input"
        />
      </label>
      <p className="info info--hidden" aria-live="polite"></p>
      <label className="labelnumber">
        Card Number
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          name="cardNumber"
          className="card-input"
          minLength={19}
        />
      </label>
      <p className="info info--hidden" aria-live="polite"></p>

      <div className="cvc-mmyy">
        <label className="labelmm labelyy">
          Exp. Date (MM/YY)
          <div>
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="MM"
              maxLength={2}
              name="expirationDateMM"
              className="card-input"
            />
            <input
              onChange={handleInputChange}
              maxLength={2}
              type="text"
              placeholder="YY"
              name="expirationDateYY"
              className="card-input"
            />
          </div>
        </label>

        <p className="info info--hidden" aria-live="polite"></p>

        <label className="labelcvc">
          CVC
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="e.g. 123"
            maxLength={3}
            name="cvc"
            className="card-input"
          />
        </label>
        <p className="info info--hidden" aria-live="polite"></p>
      </div>

      <button type="submit" className="btn-submit btn-primary">
        Confirm
      </button>
    </form>
  );
}

export default CreditCardForm;
