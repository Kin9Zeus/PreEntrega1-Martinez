
function CartWidget() {
    const numero = 5;
  
    return (
      <div className="cart-widget">
        <img src="https://assets.stickpng.com/images/59bedb1e7a216d0b052f128b.png" alt="Logo React JS"></img>
        <span className="cart-widget__notification">{numero}</span>
      </div>
    );
}
  
export default CartWidget;