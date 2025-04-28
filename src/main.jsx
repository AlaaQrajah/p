import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";          
import { ThemeProvider } from"./components/context/ThemeContext.jsx";       

import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);