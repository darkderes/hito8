import { useEffect, useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router";
const PizzaPage = () => {
  const { pizzas, fetchPizzas } = useContext(PizzaContext);
  const { ids } = useParams();

  const { id, name, desc, img, price, ingredients } = pizzas;

  useEffect(() => {
    fetchPizzas(`http://localhost:5000/api/pizzas/${ids}`);
  }, [fetchPizzas, ids]);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name, img, price });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <h1 className="card-title text-center mb-5 ">Pizza {name}</h1>
        <img
          className="card-img-top pizza-image mx-auto d-block"
          src={img}
          alt={name}
        />
        <div className="card-body">
          <p className="card-text mx-3">{desc}</p>
          <h2 className="text-center">Ingredientes:</h2>
          {ingredients && (
            <ul className="list-group list-group-flush">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="list-group-item text-center">
                  {ingredient}
                </li>
              ))}
            </ul>
          )}
          <div className="d-flex justify-content-end align-items-center mt-3">
            <p className="card-text text-danger fs-2 mx-3 mb-0">
              $ {price ? price.toLocaleString() : ""}
            </p>
            <button className="btn btn-dark" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
