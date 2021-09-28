import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import theme from "../config/theme";
import { createStore } from "../store";

const wrappedRender = (ui: React.ReactElement) => {
  const store = createStore();
  const Wrapper: React.FC = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper });
};

export default wrappedRender;
