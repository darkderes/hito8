// import { useEffect, useState } from "react";
import { useContext, useEffect } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { PizzaContext } from "../context/PizzaContext";

const HomePage = () => {
  const { pizzas, fetchPizzas, error } = useContext(PizzaContext);

  useEffect(() => {
    fetchPizzas("http://localhost:5000/api/pizzas");
  }, [fetchPizzas]);

  return (
    <>
      <Header />
      <div className="my-4 container">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row">
          {Array.isArray(pizzas) &&
            pizzas.map((pizza) => (
              <div key={pizza.id} className="col-md-4 mb-4">
                <CardPizza
                  id={pizza.id}
                  name={pizza.name}
                  img={pizza.img}
                  price={pizza.price}
                  description={pizza.desc}
                  ingredients={pizza.ingredients}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
