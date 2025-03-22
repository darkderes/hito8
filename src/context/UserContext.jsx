import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { TokenContext } from "./TokenContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { setToken } = useContext(TokenContext);
  const [emailUser, setEmail] = useState(null);

  const auth = async (formData) => {
    try {
      const URL = "http://localhost:5000/api/auth/login";
      const response = await axios.post(URL, formData);
      const { token, email } = response.data;
      localStorage.setItem("token", token);
      setToken(token);
      setEmail(email);
      toast.success("Inicio de sesión exitoso");
    } catch (error) {
      toast.error("Error durante la autenticación");
      console.error("Error during authentication:", error);
    }
  };

  const register = async (formData) => {
    try {
      const URL = "http://localhost:5000/api/auth/register";
      const response = await axios.post(URL, formData);
      const { token, email } = response.data;
      localStorage.setItem("token", token);
      setToken(token);
      setEmail(email);
      toast.success("Registro exitoso");
    } catch (error) {
      toast.error("Error durante el registro");
      console.error("Error during registration:", error);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setEmail(null);
  };

  return (
    <UserContext.Provider
      value={{
        auth,
        emailUser,
        register,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
