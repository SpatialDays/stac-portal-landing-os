import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import config from "./site-config.json";

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.setProperty(
    "--osweb-color-primary",
    config.colours.primary
  );
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
