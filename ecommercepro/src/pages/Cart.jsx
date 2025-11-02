import React from "react";
import { useCart } from "../context/cartcontext.jsx";
import { Link } from "react-router-dom";
import "../styles/cart.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart, subtotal } = useCart();

  const taxRate = 0.08; // 8%
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty 🛒</h2>
        <Link to="/products" className="back-btn">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <p>Qty: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <button onClick={clearCart} className="clear-btn">Clear Cart</button>
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>Subtotal: <strong>${subtotal.toFixed(2)}</strong></p>
          <p>Tax (8%): <strong>${tax.toFixed(2)}</strong></p>
          <hr />
          <p className="total">Total: <strong>${total.toFixed(2)}</strong></p>

          <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  );
}
