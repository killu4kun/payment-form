import useFormData from "@/hooks/useFormData";
import iconComplete from "../../assets/icon-complete.svg";
import "./style.css";

function CreditCardOk({ animateSlider }: any) {
  const { setFormValues } = useFormData();

  const resetForm = () => {
    setFormValues({
      cardHolderName: "",
      cardNumber: "",
      expirationDateYY: "",
      expirationDateMM: "",
      cvc: "",
    });
    animateSlider(false);
    console.log("hello");
  };

  return (
    <div className="cardThanks">
      <img src={iconComplete} alt="" />
      <p>Thank you!</p>
      <p>We&apos;ve added your card details</p>
      <button className="btn-primary" onClick={resetForm}>
        Continue
      </button>
    </div>
  );
}

export default CreditCardOk;
