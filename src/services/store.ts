import { configureStore } from '@reduxjs/toolkit';

import cardSlice from '@/services/slices/card';
import { moviesApi } from '@/services/movies-api';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    card: cardSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([moviesApi.middleware]),
});
