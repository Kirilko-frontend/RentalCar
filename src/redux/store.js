import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cars",
  storage,
  whitelist: ["favorites"],
};

const persistedCarsReducer = persistReducer(persistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    cars: persistedCarsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
});

export const persistor = persistStore(store);
