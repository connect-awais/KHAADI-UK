import React from 'react'
import './Cart.css'

const Bag = () => {
  return (
    <div className="cart">
      <div className="cart-txt">
      <h3>No item in your cart</h3>
      </div>
      <div className="cart-btn">
        <button>CONTINUE SHOPPING</button>
      </div>
    </div>
  )
}

export default Bag