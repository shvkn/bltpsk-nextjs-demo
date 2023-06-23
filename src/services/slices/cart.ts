import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  cart: Record<string, number>;
} = {
  cart: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const count = state.cart[action.payload] || 0;
      state.cart[action.payload] = count + 1;
    },
    decrement: (state, action) => {
      const count = state.cart[action.payload];
      if (!count) {
        return;
      }
      if (count === 1) {
        delete state.cart[action.payload];
        return;
      }
      state.cart[action.payload] = count - 1;
    },
  },
});
export const { actions: cartSliceActions } = cartSlice;
export default cartSlice;
