import { configureStore } from "@reduxjs/toolkit";
import LoadAllProductsSlice from "../slices/LoadAllProducts";
import CartSlice from "../slices/Cart";

export default configureStore({
  reducer: {
    allProducts: LoadAllProductsSlice,
    cartArray: CartSlice,
  },
});
