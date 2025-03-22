import { useContext } from "react";
import { Link } from "react-router"; // Importar desde react-router-dom
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  FaPizzaSlice,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaSignOutAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { TokenContext } from "../context/TokenContext";
import { UserContext } from "../context/UserContext"; // Importar la función logout

const NavbarApp = () => {
  const { total } = useContext(CartContext);
  const { token } = useContext(TokenContext);
  const { logout } = useContext(UserContext); // Obtener la función logout

  return (
    <Navbar
      className="bg-body-tertiary text-white "
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Pizzeria Mamma Mia!
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link border border-white rounded me-2">
            <FaPizzaSlice /> Home
          </Link>
          {!token ? (
            <>
              <Link
                to="/login"
                className="nav-link border border-white rounded me-2"
              >
                <FaSignInAlt /> Login
              </Link>

              <Link
                to="/register"
                className="nav-link border border-white rounded me-2"
              >
                <FaUserPlus /> Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="nav-link border border-white rounded me-2"
              >
                <FaUser /> Profile
              </Link>
              <Link
                to="/login"
                className="nav-link border border-white rounded me-2"
                onClick={logout} // Aquí llamamos al método logout
              >
                <FaSignOutAlt /> Logout
              </Link>
            </>
          )}
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <Nav.Item>
            <Link
              to="/cart"
              className="nav-link-border-cart nav-link-custom"
              style={{ textDecoration: "none" }}
            >
              <FaShoppingCart /> $ {total.toLocaleString()}
            </Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
