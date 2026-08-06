import { configureStore } from "@reduxjs/toolkit";
import farmSlice from "./farmSlice";

const store = configureStore({
  reducer: farmSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
