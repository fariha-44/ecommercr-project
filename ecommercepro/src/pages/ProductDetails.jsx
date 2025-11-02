import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartcontext.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) return <div className="page"><p>Loading…</p></div>;
  if (error) return <div className="page"><p>{error}</p></div>;
  if (!product) return null;

  return (
    <div className="page">
      <div className="product-card" style={{ maxWidth: 900, margin: "0 auto" }}>
        <img src={product.image} alt={product.title} style={{ height: 260 }} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <strong style={{ fontSize: 20 }}>${product.price}</strong>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" onClick={() => addToCart(product, 1)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}


