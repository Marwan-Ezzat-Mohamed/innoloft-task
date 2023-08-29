import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/product";
import { themeSlice } from "./slices/theme";
import { trlSlice } from "./slices/trl";

export const store = configureStore({
  reducer: {
    productState: productSlice.reducer,
    themeState: themeSlice.reducer,
    trlState: trlSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
