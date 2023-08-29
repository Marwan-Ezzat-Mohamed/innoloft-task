import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/product";
import { themeSlice } from "./slices/theme";

export const store = configureStore({
  reducer: {
    productState: productSlice.reducer,
    themeState: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
