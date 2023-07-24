'use client';

import React from 'react';

import Loading from '@/app/loading';
import { MovieContainer } from '@/components/movie-container/movie-container';
import { ReviewsContainer } from '@/components/reviews-container/reviews-container';
import { useGetMovieByIdQuery } from '@/services/api/movies-api';

interface IMoviePageProps {
  params: { id: string };
}

export default function MoviePage({ params }: IMoviePageProps) {
  const { isLoading: isMovieLoading, data: movie } = useGetMovieByIdQuery(params.id);

  if (isMovieLoading) {
    return <Loading />;
  }

  if (!movie) {
    return null;
  }

  return (
    <>
      <MovieContainer movieId={params.id} />
      <ReviewsContainer movieId={params.id} />
    </>
  );
}
