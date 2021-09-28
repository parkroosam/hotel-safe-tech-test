import { configureStore } from "@reduxjs/toolkit";

import * as reducer from "./slices";

export const createStore = () => {
  return configureStore({
    reducer,
  });
};

const store = createStore();

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
