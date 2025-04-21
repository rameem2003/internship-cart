import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("test-cart")
    ? JSON.parse(localStorage.getItem("test-cart"))
    : [],
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    cartReducer: (state, action) => {
      let findindex = state.cart.findIndex(
        (item) => item.id == action.payload.id
      );

      if (findindex == -1) {
        state.cart = [...state.cart, action.payload];
        localStorage.setItem("test-cart", JSON.stringify(state.cart));
      } else {
        state.cart[findindex].quantity++;
        localStorage.setItem("test-cart", JSON.stringify(state.cart));
      }
    },

    removeProduct: (state, action) => {
      let filteredData = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = filteredData;
      localStorage.setItem("test-cart", JSON.stringify(state.cart));
    },

    updateQuntity: (state, action) => {
      let filter = state.cart.find((item) => item.id == action.payload.id);

      filter.quantity += action.payload.n;
      //   state.cart[action.payload.id].quantity += action.payload.n;

      if (filter.quantity == 0) {
        filter.quantity = 1;
      }

      localStorage.setItem("test-cart", JSON.stringify(state.cart));
    },

    cartClear: (state) => {
      state.cart = [];
      localStorage.setItem("test-cart", JSON.stringify(state.cart));
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartReducer, removeProduct, updateQuntity, cartClear } =
  CartSlice.actions;

export default CartSlice.reducer;
