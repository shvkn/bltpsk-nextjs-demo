'use client';

import { useMemo } from 'react';

import { useGetMoviesQuery } from '@/services/api/movies-api';
import { selectCardSlice, selectTotalCount } from '@/services/selectors/cart';
import { useAppSelector } from '@/services/store';

export const useCart = () => {
  const { data, isLoading } = useGetMoviesQuery();
  const cart = useAppSelector(selectCardSlice).cart;
  const totalCount = useAppSelector(selectTotalCount);

  const movies = useMemo(() => {
    const isMovie = (item: any): item is IMove => typeof item?.id === 'string';
    const findMovieById = (id: string) => data?.find((item) => item.id === id);

    return Object.keys(cart).map(findMovieById).filter(isMovie);
  }, [cart, data]);

  return {
    movies,
    isLoading,
    totalCount,
  };
};
