import React from "react";
import { useCart } from "../context/cartcontext.jsx";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const placeOrder = () => {
    alert("✅ Order placed successfully!");
    clearCart();
    navigate("/cart"); // Go back to cart after checkout
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>No items to checkout 🛍️</h2>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-items">
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <p>
              {item.name} x {item.quantity} — ${item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="checkout-summary">
        <h3>Total: ${subtotal.toFixed(2)}</h3>
        <button onClick={placeOrder} className="placeorder-btn">
          Place Order
        </button>
      </div>
    </div>
  );
}
