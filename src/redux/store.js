import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./actions/cartSlice";

const store = configureStore({
  reducer: { cart: cartSlice }
});
console.log("onCretae Store : ", store.getState());

store.subscribe(() => console.log("onChangee Store : ", store.getState()));

export default store;