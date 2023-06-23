import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  card: {},
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
});

export default cardSlice;
