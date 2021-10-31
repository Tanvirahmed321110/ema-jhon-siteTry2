import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const{cart}=props
    const total=cart.reduce((pre,curr)=>pre+curr.price,0)
    const customTax=total>0 ? 3 :0
    const totalTax=(total/100)*2
    const carry=total>0 ? 10 :0
    const allTotal=(total+customTax+totalTax+carry)
    return (
        <div className="cart-container">
            <h2 style={{textAlign:"center"}}>Order Summery </h2>
            <big>Total Order : {props.cart.length}</big>
            <div>
              <p>Carry Cost : ${carry}</p>
              <p>Custom Tax : ${customTax}</p>
              <p>Total Tax : ${totalTax.toFixed(2)}</p>
              <p>Porduct Price  : ${total.toFixed(2)}</p><hr />
              <h3>Total All Price : ${allTotal.toFixed(2)}</h3>
              <button><i class="fas fa-check-square"></i>  Confirm Order</button>
            </div>
        </div>
    );
};

export default Cart;