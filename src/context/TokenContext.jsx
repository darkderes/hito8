import { createContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const logout = () => {
    //setToken(false);
    localStorage.removeItem("token");
    setToken(null);
  };
  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        logout,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
