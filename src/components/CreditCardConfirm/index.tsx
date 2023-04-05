import iconComplete from "../../assets/icon-complete.svg";
import "./style.css";

function CreditCardOk() {
  const resetForm = () => {
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
