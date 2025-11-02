import "../styles/Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // ✅ Add this at top

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


import adress1 from "../assets/dress1.png";
import adress2 from "../assets/dress2.png";
import adress3 from "../assets/dress3.png";
import adress4 from "../assets/dress4.png";
import adress5 from "../assets/dress5.png";
import adress6 from "../assets/dress6.png";
import adress7 from "../assets/dress7.png";
import adress8 from "../assets/dress8.png";
import adress9 from "../assets/dress9.png";
import adress10 from "../assets/dress10.png";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero">
  <div className="hero-content">
    <h1>
      Welcome to <span>Farisha Online</span>
    </h1>
    <p className="tagline">
      Where <strong>confidence</strong> meets <strong>elegance</strong>.
    </p>
    <p>
      Discover our <strong>exclusive collections</strong> made for women who
      love modern fashion with timeless class. Whether it’s a night out, a
      special occasion, or just your everyday style — we’ve got the perfect
      look for you.
    </p>

    <p className="highlight">Be bold. Be unique. Be beautifully you.</p>

    {/* ✅ When clicked, goes to /products */}
    <button className="shop-btn" onClick={() => navigate("/products")}>
      Shop Now
    </button>
  </div>

  <div className="hero-image-container">
    <img
      src={hero1}
      alt="Hero 1"
      className={`hero-img ${activeImage === 0 ? "active" : ""}`}
    />
    <img
      src={hero2}
      alt="Hero 2"
      className={`hero-img ${activeImage === 1 ? "active" : ""}`}
    />
  </div>
</section>

      {/* CASUAL COLLECTION */}
      <section className="collection">
        <h2>Casual Wear</h2>
        <div className="collection-grid">
          {[adress3, adress4, adress5, adress6].map((dress, index) => (
            <div className="item" key={index}>
              <img src={dress} alt={`Casual ${index + 1}`} />
              <p>Casual Dress</p>
              <Link to="/products" className="shop-btn small">Shop Now</Link>
            </div>
          ))}
        </div>
      </section>

      {/* SPRING COLLECTION (OFFER) */}
      <section className="spring-offer">
        <div className="offer-images left">
          <img src={adress1} alt="Spring Left" />
        </div>

        <div className="offer-text">
          <h3>Spring Collection <span>30% OFF</span></h3>
          <p>
            Fresh designs to match the new season’s vibe. Grab your favorites before they’re gone!
          </p>
          <Link to="/products" className="shop-btn">Shop Now</Link>
        </div>

        <div className="offer-images right">
          <img src={adress2} alt="Spring Right" />
        </div>
      </section>

      {/* CUSTOMER FEEDBACK */}
      <section className="trends">
        <h2>Customer Feedback</h2>
        <div className="trend-grid">
          <div className="trend-card">
            <img src={adress7} alt="Customer 1" />
            <h4>Amina</h4>
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p className="review">“Absolutely stunning dress! Perfect fit and elegant fabric.”</p>
          </div>
          <div className="trend-card">
            <img src={adress8} alt="Customer 2" />
            <h4>Sofia</h4>
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p className="review">“I felt so confident wearing this! The quality is amazing.”</p>
          </div>
          <div className="trend-card">
            <img src={adress9} alt="Customer 3" />
            <h4>Leila</h4>
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p className="review">“My favorite purchase this year — it’s modern and luxurious.”</p>
          </div>
          <div className="trend-card">
            <img src={adress10} alt="Customer 4" />
            <h4>Hana</h4>
            <p className="stars">⭐⭐⭐⭐</p>
            <p className="review">“Beautiful design and great material. Totally worth it!”</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <h3>Women's Bliss & Wear</h3>
          <p>Where elegance meets comfort — explore your true style with us.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
        <p className="copyright">
          © 2025 Women's Bliss & Wear | Designed by Farhia 💗
        </p>
      </footer>
    </>
  );
}
