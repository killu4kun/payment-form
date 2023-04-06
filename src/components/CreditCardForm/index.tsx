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

const resolver: Resolver<FormValues> = async values => {
  const errors: FieldErrors<FormValues> = {};
  if (!values.cardHolderName) {
    errors.cardHolderName = {
      type: "required",
      message: "Card holder name is required",
    };
  }

  if (!values.cardNumber) {
    errors.cardNumber = {
      type: "required",
      message: "Card number is required",
    };
  }

  if (!values.expirationDateYY || !values.expirationDateMM) {
    errors.expirationDateYY = {
      type: "required",
      message: "Can't be blank",
    };
    errors.expirationDateMM = {
      type: "required",
      message: "Can't be blank",
    };
  }

  if (!values.cvc) {
    errors.cvc = {
      type: "required",
      message: "CVC is required",
    };
  }

  if (Object.keys(errors).length > 0) {
    return {
      values,
      errors,
    };
  }

  return {
    values,
    errors: {},
  };
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit(data => {
    reset();
    animateSlider(true);
  });

  const removeErrorMessage = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const errorMessage = target.parentNode?.querySelector("span");

    if (errorMessage) {
      errorMessage.remove();
    }
  };

  return (
    <form className="cardForm" onSubmit={onSubmit}>
      <label className="labelname">
        Cardholder Name
        <input
          {...register("cardHolderName")}
          onChange={handleInputChange}
          type="text"
          placeholder="e.g. Jane Appleseed"
          name="cardHolderName"
          className="card-input"
          onBlur={removeErrorMessage}
        />
        {errors?.cardHolderName && <span>{errors.cardHolderName.message}</span>}
      </label>
      <p className="info info--hidden" aria-live="polite"></p>
      <label className="labelnumber">
        Card Number
        <input
          {...register("cardNumber")}
          onChange={handleInputChange}
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          name="cardNumber"
          className="card-input"
          onBlur={removeErrorMessage}
          minLength={19}
        />
        {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
      </label>
      <p className="info info--hidden" aria-live="polite"></p>

      <div className="cvc-mmyy">
        <label className="labelmm labelyy">
          Exp. Date (MM/YY)
          <div>
            <input
              {...register("expirationDateMM")}
              onChange={handleInputChange}
              onBlur={removeErrorMessage}
              type="text"
              placeholder="MM"
              maxLength={2}
              name="expirationDateMM"
              className="card-input"
            />
            <input
              {...register("expirationDateYY")}
              onChange={handleInputChange}
              maxLength={2}
              onBlur={removeErrorMessage}
              type="text"
              placeholder="YY"
              name="expirationDateYY"
              className="card-input"
            />
          </div>
          {(errors.expirationDateYY || errors.expirationDateMM) && (
            <span>{errors.expirationDateYY?.message}</span>
          )}
        </label>

        <p className="info info--hidden" aria-live="polite"></p>

        <label className="labelcvc">
          CVC
          <input
            {...register("cvc")}
            onChange={handleInputChange}
            type="text"
            placeholder="e.g. 123"
            maxLength={3}
            name="cvc"
            className="card-input"
            onBlur={removeErrorMessage}
          />
          {errors.cvc && <span>{errors.cvc.message}</span>}
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
