import React from 'react';

import { Movie } from '@/components/movie/movie';
import { useGetMovieByIdQuery } from '@/services/api/movies-api';

interface IMovieContainerProps {
  movieId: string;
}

export const MovieContainer: React.FC<IMovieContainerProps> = ({ movieId }) => {
  const { data: movie } = useGetMovieByIdQuery(movieId);
  if (!movie) {
    return null;
  }
  return <Movie movie={movie} />;
};
