import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
const PresistConfig = {
    key: "root",
    version: 1,
    storage,
};
const reducer = combineReducers({
    cart: CartSlice,
});
const persistedReducer = persistReducer(PresistConfig, reducer)
const store = configureStore({
    reducer: persistedReducer
})
export default store;