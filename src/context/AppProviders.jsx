import { CartProvider } from "./CartContext";
import { PizzaProvider } from "./PizzaContext";
import { TokenProvider } from "./TokenContext";
import { UserProvider } from "./UserContext";

const AppProviders = ({ children }) => {
  return (
    <TokenProvider>
      <UserProvider>
        <CartProvider>
          <PizzaProvider>{children}</PizzaProvider>
        </CartProvider>
      </UserProvider>
    </TokenProvider>
  );
};

export default AppProviders;
