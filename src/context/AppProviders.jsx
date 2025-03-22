import { CartProvider } from "./CartContext";
import { PizzaProvider } from "./PizzaContext";
import { TokenProvider } from "./TokenContext";

const AppProviders = ({ children }) => {
  return (
    <TokenProvider>
      <CartProvider>
        <PizzaProvider>{children}</PizzaProvider>
      </CartProvider>
    </TokenProvider>
  );
};

export default AppProviders;
