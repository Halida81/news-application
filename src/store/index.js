import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/AuthSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
