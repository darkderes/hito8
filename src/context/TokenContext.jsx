import { createContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
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
