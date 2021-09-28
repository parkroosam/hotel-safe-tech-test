import { configureStore } from "@reduxjs/toolkit";

import * as reducer from "./slices";

const store = configureStore({
  reducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
