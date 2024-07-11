import { configureStore } from "@reduxjs/toolkit";
import thingsReducer from "./thingsSlice";

const store = configureStore({
  reducer: {
    things: thingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ThingsDispatch = typeof store.dispatch;

export default store;
