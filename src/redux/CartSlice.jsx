import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);

      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
        state.totalQuantity++;
      }
    },
    increaseQty(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      item.quantity++;
    },
    decreaseQty(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity > 1) item.quantity--;
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      state.totalQuantity--;
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
