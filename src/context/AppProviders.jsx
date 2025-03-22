import { CartProvider } from "./CartContext";
import { PizzaProvider } from "./PizzaContext";
import { TokenProvider } from "./TokenContext";
import { UserProvider } from "./UserContext";

const AppProviders = ({ children }) => {
  return (
    <UserProvider>
      <TokenProvider>
        <CartProvider>
          <PizzaProvider>{children}</PizzaProvider>
        </CartProvider>
      </TokenProvider>
    </UserProvider>
  );
};

export default AppProviders;
