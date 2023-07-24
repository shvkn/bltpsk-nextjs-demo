import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { reviewsApi } from '@/services/api/reviews-api';
import { moviesApi } from '@/services/movies-api';
import cardSlice from '@/services/slices/cart';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    cart: cardSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([moviesApi.middleware, reviewsApi.middleware]),
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
