
import CartIcon from './Images/ShoppingCart.png'; //Importar images de fichero local
import { useState } from 'react'; //Probando para usar Hook

function CartWidget() {
    //const numero = 5;
    const [numero] = useState(3); //Cambiando a variable reactiva
  
    return (
      <div className="cart-widget">
        <img src={CartIcon} alt="Logo Chopping Cart"></img>
        <span className="cart-widget__notification">{numero}</span>
      </div>
    );
}
  
export default CartWidget;