import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import {
  NavbarApp,
  HomePage,
  RegisterPage,
  LoginPage,
  CartPage,
  PizzaPage,
  ProfilePage,
  NotFoundPage,
  Footer,
} from "./page/index";

import { TokenContext } from "./context/TokenContext";

function App() {
  const { token } = useContext(TokenContext);
  return (
    <>
      <BrowserRouter>
        <NavbarApp />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/Register"
            element={token ? <Navigate to="/" /> : <RegisterPage />}
          />
          <Route
            path="/Login"
            element={token ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route path="/Cart" element={<CartPage />} />

          <Route path="/Pizza/:ids" element={<PizzaPage />} />
          <Route
            path="/Profile"
            element={token ? <ProfilePage /> : <Navigate to="/Login" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
