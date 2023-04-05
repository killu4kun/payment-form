import "./style.css";

function CreditCard() {
  return (
    <aside className="cardDeco">
      <div className="cardFront">
        <span>{"0000 0000 0000 0000"}</span>
        <div>
          <span> {"Jane Appleseed"}</span>
          <span>00/ 00</span>
        </div>
      </div>

      <div className="cardBack">
        <span> 000</span>
      </div>
    </aside>
  );
}

export default CreditCard;
