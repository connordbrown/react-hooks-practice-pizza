import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);

  const [id, setId] = useState(0);
  const [topping, setTopping] = useState("");
  const [size, setSize] = useState("Small");
  const [isVegetarian, setIsVegetarian] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(response => response.json())
    .then(data => setPizzas(data))
  }, [])

  function handleEditPizza(pizzaId, pizzaTopping, pizzaSize, pizzaVegetarian) {
    setId(pizzaId);
    setTopping(pizzaTopping);
    setSize(pizzaSize);
    setIsVegetarian(pizzaVegetarian);
  }

  function handleNewPizzaSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "topping": topping,
        "size": size,
        "vegetarian": isVegetarian
      })
    })
    .then(response => response.json())
    .then(updatedPizza => {
      const updatedPizzas = pizzas.map(pizza => {
        if (pizza.id === updatedPizza.id) {
          return updatedPizza;
        } else {
          return pizza;
        }
      });
      setPizzas(updatedPizzas);
      setTopping("");
      setSize("Small");
      setIsVegetarian(true);
    });
  }


  return (
    <>
      <Header />
      <PizzaForm topping={topping} setTopping={setTopping} 
                 size={size} setSize={setSize}
                 isVegetarian={isVegetarian} setIsVegetarian={setIsVegetarian}
                 onNewPizzaSubmit={handleNewPizzaSubmit}
      />
      <PizzaList pizzas={pizzas} onPizzaEditClick={handleEditPizza} />
    </>
  );
}

export default App;
