import { configureStore } from "@reduxjs/toolkit";

import safeReducer from "./slices/safe";

const store = configureStore({
  reducer: safeReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
