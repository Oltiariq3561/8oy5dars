import { createSlice } from "@reduxjs/toolkit";

interface CartItemType {
  productId: number;
  quantity: number;
}

const initialState: CartItemType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find(
        (item) => item.productId == action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ productId: action.payload, quantity: 1 });
      }
    },
    removeCart(state, action) {
      return state.filter((item) => item.productId != action.payload);
    },
    increase(state, action) {
      const item = state.find((item) => item.productId == action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrease(state, action) {
      const item = state.find((item) => item.productId == action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeCart, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
