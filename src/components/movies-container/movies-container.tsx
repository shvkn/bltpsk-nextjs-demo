'use client';

import React from 'react';

import { Movies } from '@/components/movies/movies';
import { useGetMoviesQuery } from '@/services/api/movies-api';

interface IMoviesContainerProps {
  cinemaId: string;
}

export const MoviesContainer: React.FC<IMoviesContainerProps> = ({ cinemaId }) => {
  const { data: movies, isLoading } = useGetMoviesQuery(cinemaId);

  if (!movies) {
    return null;
  }

  return <Movies movies={movies} />;
};
