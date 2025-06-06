import React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";
import PizzaOfTheDay from "../components/PizzaOfTheDay";
import { CartContext } from "../context/contexts";

export const Route = createRootRoute({
  component: () => {
    const cartHook = React.useState([]);
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools position="bottom-right" />
      </>
    );
  },
});
