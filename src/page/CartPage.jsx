import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { TokenContext } from "../context/TokenContext";

const CartPage = () => {
  // ocupar el context para obtener el carrito
  const { carts, addToCart, decreaseQuantity, total } = useContext(CartContext);
  const { token } = useContext(TokenContext);

  const handleAddToCart = (id, name, img, price) => {
    addToCart({ id, name, img, price });
  };

  const handledecreaseQuantity = (id) => {
    decreaseQuantity(id);
  };

  return (
    <div className=" d-flex align-items-center d-flex flex-column">
      <h2 className="my-5">Detalles del pedido:</h2>
      <ul>
        {carts.map(({ id, name, img, price, qty }) => (
          <li key={id} className="mb-3 d-flex align-items-center">
            <img
              src={img}
              alt={name}
              width="100"
              height="100"
              className="me-3 rounded"
            />
            <div className="d-flex flex-column flex-grow-1">
              <p className="fs-4 mb-1 me-5 fw-bold">{name}</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="fs-4 mb-1 me-4">${price.toLocaleString()}</p>
              <button
                className="btn btn-outline-danger"
                onClick={() => handledecreaseQuantity(id)}
              >
                -
              </button>
              <span className="mx-2">{qty}</span>
              <button
                className="btn btn-outline-info"
                onClick={() => handleAddToCart(id, name, img, price)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between w-10 my-3">
        <h3 className="fs-2 me-4">Total: ${total.toLocaleString()}</h3>

        <button className="btn btn-dark btn-lg" disabled={!token}>
          Pagar
        </button>
      </div>
    </div>
  );
};

export default CartPage;
