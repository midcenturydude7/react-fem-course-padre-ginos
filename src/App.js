const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni pizza",
      description: "Mozzarella, Chorizo, and Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "Mozzarella, Tomato, and Basil",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "Mozzarella, Ham, and Pineapple",
    }),
    React.createElement(Pizza, {
      name: "The Vegetarian",
      description: "Mozzarella, Mushrooms, and Peppers",
    }),
    React.createElement(Pizza, {
      name: "The Meat Feast",
      description: "Mozzarella, Ham, Pepperoni, and Sausage",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
