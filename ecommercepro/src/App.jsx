import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/checkout.jsx"; // ✅ imported Checkout page

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-full font-semibold shadow-md border transition-all duration-500 ${
            theme === "dark"
              ? "bg-gray-800 text-yellow-400 border-yellow-500 hover:bg-gray-700"
              : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
          }`}
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <NavBar />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> {/* ✅ added route */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
