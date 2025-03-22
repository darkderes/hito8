import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const auth = async (formData, navigate) => {
    try {
      const URL = "http://localhost:5000/api/auth/login";
      const response = await axios.post(URL, formData);
      const { token } = response.data;
      localStorage.setItem("token", token);
      //   console.log("Token:", token);
      toast.success("Inicio de sesión exitoso");
      navigate("/");
    } catch (error) {
      toast.error("Error durante la autenticación");
      console.error("Error during authentication:", error);
    }
  };

  //   const addToCart = (pizza) => {
  //     setCarts((prevCarts) => {
  //       const existingCartItem = prevCarts.find(
  //         (cartItem) => cartItem.id === pizza.id
  //       );

  //       if (existingCartItem) {
  //         return prevCarts.map((cartItem) =>
  //           cartItem.id === pizza.id
  //             ? { ...cartItem, qty: cartItem.qty + 1 }
  //             : cartItem
  //         );
  //       } else {
  //         const newCart = {
  //           id: pizza.id,
  //           img: pizza.img,
  //           name: pizza.name,
  //           price: pizza.price,
  //           qty: 1,
  //         };
  //         return [...prevCarts, newCart];
  //       }
  //     });
  //     toast.success("Pizza añadida al carrito!");
  //   };

  //   const decreaseQuantity = (id) => {
  //     setCarts(
  //       carts
  //         .map((pizza) =>
  //           pizza.id === id ? { ...pizza, qty: pizza.qty - 1 } : pizza
  //         )
  //         .filter((pizza) => pizza.id !== id || pizza.qty > 0)
  //     );
  //     toast.error("Pizza eliminada del carrito!");
  //   };

  //   const total = carts.reduce((acc, pizza) => acc + pizza.price * pizza.qty, 0);

  return (
    <UserContext.Provider
      value={{
        auth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
