import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import AppProviders from "./context/AppProviders";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
