import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Safe from "./components/Safe";
import theme from "./config/theme";
import store from "./store";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.solitude};
    font-family: Arial;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Safe />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
