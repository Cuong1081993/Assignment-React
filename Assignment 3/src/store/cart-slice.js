import { createSlice } from "@reduxjs/toolkit";

const cartSliceReducers = createSlice({
  name: "cart",
  initialState: {
    listCart: [],
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
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    DELETE_CART(state,action){
        const idItemRemove = action.payload;
        state.listCart = state.listCart.filter((item)=>item.id !== idItemRemove);
        state.totalQuantity--;
    }
  },
});

export const cartAction = cartSliceReducers.actions;
export default cartSliceReducers.reducer;
