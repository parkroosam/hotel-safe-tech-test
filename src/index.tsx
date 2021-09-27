import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Safe from "./components/Safe";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Safe />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
