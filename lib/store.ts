// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./feature/users/usersSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: usersSlice, // Agrega el reducer del usuario aquí
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
