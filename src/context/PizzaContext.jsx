import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  // Fetch pizzas from the API
  const fetchPizzas = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
      setError("Error fetching pizzas");
    }
  };

  useEffect(() => {
    fetchPizzas("http://localhost:5000/api/pizzas");
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, fetchPizzas, error }}>
      {children}
    </PizzaContext.Provider>
  );
};
