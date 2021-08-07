import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./themeSlice";
import locationReducer from "./locationSlice";
import messagesReducer from "./messagesSlice";

export const rootReducer = combineReducers({
  theme: persistReducer({ key: "theme", storage }, themeReducer),
  location: persistReducer({ key: "location", storage }, locationReducer),
  messages: persistReducer({ key: "messages", storage }, messagesReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export const persistor = persistStore(store);

export default store;
