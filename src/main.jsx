import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18+
import "./index.css";
import App from "./App";

import "@fontsource/roboto";
import "@fontsource/outfit";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
