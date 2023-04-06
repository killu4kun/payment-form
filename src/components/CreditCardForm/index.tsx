import "./style.css";

function CreditCardForm({ animateSlider }: any) {
  const handleInput = () => {
    if (document.querySelectorAll(".input--error").length === 0)
      animateSlider(true);
  };

  return (
    <form className="cardForm">
      <label className="labelname">
        Cardholder Name
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          name="name"
          className="card-input"
        />
      </label>
      <p className="info info--hidden" aria-live="polite"></p>
      <label className="labelnumber">
        Card Number
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          name="number"
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
              type="text"
              placeholder="MM"
              name="mm"
              className="card-input"
            />
            <input
              type="text"
              placeholder="YY"
              name="yy"
              className="card-input"
            />
          </div>
        </label>
        <p className="info info--hidden" aria-live="polite"></p>

        <label className="labelcvc">
          CVC
          <input
            type="text"
            placeholder="e.g. 123"
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
