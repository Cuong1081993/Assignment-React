import toggleDetailReducer from "./detail-product";
import cartSliceReducer from './cart-slice';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    showHideDetail: toggleDetailReducer,
    cart : cartSliceReducer
  },
});
export default store;
