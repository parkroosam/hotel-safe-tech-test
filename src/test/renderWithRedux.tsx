import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";

import { createStore } from "../store";

const renderWithRedux = (ui: React.ReactElement) => {
  const store = createStore();
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(ui, { wrapper: Wrapper });
};

export default renderWithRedux;
