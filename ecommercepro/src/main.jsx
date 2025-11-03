import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CartProvider } from "./context/cartcontext.jsx";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        {/* ✅ Add basename so React Router knows the project folder */}
        <BrowserRouter basename="/ecommercr-project">
          <App />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
