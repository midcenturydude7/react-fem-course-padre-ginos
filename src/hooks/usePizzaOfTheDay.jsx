import React, { useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = React.useState(null);
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id} : ${pizzaOfTheDay.name}` : "loading ...");

  React.useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
