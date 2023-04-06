import useFormData from "@/hooks/useFormData";

function CreditCard() {
  const { formValues } = useFormData();

  function formatCreditCardNumber(creditCardNumber: string): string {
    // Remove todos os caracteres não numéricos
    const cleaned = creditCardNumber.replace(/\D/g, "");

    // Divide a string em grupos de quatro caracteres
    const chunks = cleaned.match(/.{1,4}/g);

    // Une os grupos com espaços em branco
    return chunks ? chunks.join(" ") : "";
  }

  return (
    <aside className="cardDeco">
      <div className="cardFront">
        <span>
          {formatCreditCardNumber(formValues?.cardNumber) ||
            formatCreditCardNumber("0000000000000000")}
        </span>
        <div>
          <span> {formValues.cardHolderName || "JANE APPLESEED"}</span>
          <span>
            {formValues?.expirationDateMM || "00"}/
            {formValues?.expirationDateYY || "00"}
          </span>
        </div>
      </div>

      <div className="cardBack">
        <span>{formValues?.cvc || "000"} </span>
      </div>
    </aside>
  );
}

export default CreditCard;
