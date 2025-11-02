import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/cartcontext.jsx";
import "../styles/navBar.css";
import logo from "../assets/farisha-logo.jpg";

export default function NavBar() {
  const { totalUniqueItems } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Farisha Online Logo" className="logo-img" />
        </Link>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">☰</label>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">
            🛒 Cart{" "}
            <span className="cart-count">
              {totalUniqueItems > 0 ? totalUniqueItems : 0}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
