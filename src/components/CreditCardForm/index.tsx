import useFormData from "@/hooks/useFormData";
import { FormEvent, useState } from "react";

import "./style.css";

export type FormValues = {
  cardHolderName: string;
  cardNumber: string;
  expirationDateYY: string;
  expirationDateMM: string;
  cvc: string;
};

type InputType = "add" | "remove";

function CreditCardForm({ animateSlider }: any) {
  const { formValues, setFormValues } = useFormData();
  const [validations, setValidations] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validadeCardHolderName = (name: string) => {
    if (name.length === 0) {
      return "Cant be blank";
    }
    return "";
  };

  const validadeCardNumber = (number: string) => {
    if (number) {
      if (number.match(/[^0-9\s]/g)) {
        return "Must contain only digits";
      } else if (number.length < 16) {
        return "Must be 16 digits";
      } else {
        return "";
      }
    } else {
      return "Cant be blank";
    }
  };

  const validadeExpirationDate = (yy: string, mm: string) => {
    if (yy.length === 0 || mm.length === 0) {
      return "Cant be blank";
    }
    return "";
  };

  const validateCVC = (cvc: string) => {
    if (cvc.length < 3) {
      return "Must be 3 digits";
    }
    return "";
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setValidations(true);
    const errors: Partial<FormValues> = {};
    errors.cardHolderName = validadeCardHolderName(formValues.cardHolderName);
    errors.cardNumber = validadeCardNumber(formValues.cardNumber);
    errors.expirationDateYY = validadeExpirationDate(
      formValues.expirationDateYY,
      formValues.expirationDateMM
    );
    errors.expirationDateMM = validadeExpirationDate(
      formValues.expirationDateYY,
      formValues.expirationDateMM
    );
    errors.cvc = validateCVC(formValues.cvc);

    setErrors(errors);

    const hasErrors = Object.values(errors).some(error => error !== "");
    if (!hasErrors) {
      animateSlider(true);
    }
  };

  return (
    <form className="cardForm" onSubmit={onSubmit} data-testid='teste'>
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
      {validations && errors.cardHolderName && (
        <p className="info " aria-live="polite">
          {errors.cardHolderName}
        </p>
      )}
      <label className="labelnumber">
        Card Number
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          name="cardNumber"
          className="card-input"
          maxLength={16}
        />
      </label>
      {validations && errors.cardNumber && (
        <p className="info " aria-live="polite">
          {errors.cardNumber}
        </p>
      )}

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
        {validations && errors.expirationDateYY && (
          <p className="info " aria-live="polite">
            {errors.expirationDateYY}
          </p>
        )}
        {validations && errors.expirationDateMM && (
          <p className="info " aria-live="polite">
            {errors.expirationDateMM}
          </p>
        )}
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
        {validations && errors.cvc && (
          <p className="info " aria-live="polite">
            {errors.cvc}
          </p>
        )}
      </div>

      <button type="submit" className="btn-submit btn-primary">
        Confirm
      </button>
    </form>
  );
}

export default CreditCardForm;
