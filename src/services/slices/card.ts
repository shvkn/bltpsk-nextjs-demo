import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  card: Record<string, number>;
} = {
  card: {},
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const count = state.card[action.payload] || 0;
      state.card[action.payload] = count + 1;
    },
    decrement: (state, action) => {
      const count = state.card[action.payload];
      if (!count) {
        return;
      }
      if (count === 1) {
        delete state.card[action.payload];
        return;
      }
      state.card[action.payload] = count - 1;
    },
  },
});
export const { actions: cardSliceActions } = cardSlice;
export default cardSlice;
