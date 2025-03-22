import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const addToCart = (pizza) => {
    setCarts((prevCarts) => {
      const existingCartItem = prevCarts.find(
        (cartItem) => cartItem.id === pizza.id
      );

      if (existingCartItem) {
        return prevCarts.map((cartItem) =>
          cartItem.id === pizza.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      } else {
        const newCart = {
          id: pizza.id,
          img: pizza.img,
          name: pizza.name,
          price: pizza.price,
          qty: 1,
        };
        return [...prevCarts, newCart];
      }
    });
    toast.success("Pizza añadida al carrito!");
  };

  const decreaseQuantity = (id) => {
    setCarts(
      carts
        .map((pizza) =>
          pizza.id === id ? { ...pizza, qty: pizza.qty - 1 } : pizza
        )
        .filter((pizza) => pizza.id !== id || pizza.qty > 0)
    );
    toast.error("Pizza eliminada del carrito!");
  };

  const total = carts.reduce((acc, pizza) => acc + pizza.price * pizza.qty, 0);

  const checkOut = () => {
    if (carts.length === 0) {
      toast.error("El carrito está vacío");
      return;
    }
    try {
      const URL = "http://localhost:5000/api/checkout";
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      fetch(URL, {
        method: "POST",
        headers,
        body: JSON.stringify({
          cart: carts,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            toast.success("Pedido realizado con éxito!");
            setCarts([]);
          } else {
            toast.error("Error al realizar el pedido");
          }
        });
    } catch (error) {
      console.error("Error al realizar el pedido:", error);
      toast.error("Error al realizar el pedido");
    }

    toast.success("Pedido realizado con éxito!");
    setCarts([]);
  };

  return (
    <CartContext.Provider
      value={{
        carts,
        setCarts,
        addToCart,
        decreaseQuantity,
        total,
        checkOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
