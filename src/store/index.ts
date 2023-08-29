import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/product";

export const store = configureStore({
  reducer: {
    productState: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
