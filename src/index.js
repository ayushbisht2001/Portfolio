import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import {
  darkTheme,
  lightTheme,
  comTheme,
} from "./utility/styled_components/theme";
import { ThemeContextProvider } from "./store/theme_store";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
