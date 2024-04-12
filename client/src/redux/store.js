import { configureStore, combineReducer } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducer({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
