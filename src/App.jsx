import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./components/Order";
import PizzaOfTheDay from "./components/PizzaOfTheDay";
import Header from "./components/Header";
import { CartContext } from "./context/contexts";

const App = () => {
  const cartHook = React.useState([]);

  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        {/* The CartContext.Provider provides the cart state and updater function to its children */}
        {/* This allows components like Order and PizzaOfTheDay to access and modify the cart state */}
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
