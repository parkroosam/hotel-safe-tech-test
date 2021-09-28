import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import Safe from "./components/Safe";
import store from "./store";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Safe />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
