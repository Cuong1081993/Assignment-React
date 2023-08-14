import { createSlice } from "@reduxjs/toolkit";
import { getFromStorage } from "../components/storage";

const cartSliceReducers = createSlice({
  name: "cart",
  initialState: {
    listCart: getFromStorage("PRODUCT_ARRAY") ?? [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    ADD_CART(state, action) {
      const newItem = action.payload;
      const existingItem = state.listCart.find(
        (item) => item.id === newItem.id
      );
      state.changed = true;
      if (!existingItem) {
        state.listCart.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          img: newItem.img1,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    REMOVE_CART(state, action) {
      const id = action.payload;
      const existingItem = state.listCart.find((item) => item.id === id);
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.listCart = state.listCart.filter((item) => item.id !== id);
        state.listCart = state.listCart.filter(
          (cart) => cart.id !== action.payload
        );
        localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(state.listCart));
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    DELETE_CART(state, action) {
      state.listCart = state.listCart.filter(
        (cart) => cart.id !== action.payload
      );
      localStorage.setItem("PRODUCT_ARRAY", JSON.stringify(state.listCart));

      const idItemRemove = action.payload;
      state.listCart = state.listCart.filter(
        (item) => item.id !== idItemRemove
      );
      state.totalQuantity--;
    },
  },
});

export const cartAction = cartSliceReducers.actions;
export default cartSliceReducers.reducer;
