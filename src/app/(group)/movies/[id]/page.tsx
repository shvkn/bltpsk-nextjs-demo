'use client';

import React from 'react';

import { MovieContainer } from '@/components/movie-container/movie-container';
import { ReviewsContainer } from '@/components/reviews-container/reviews-container';

interface IMoviePageProps {
  params: { id: string };
}

export default function MoviePage({ params }: IMoviePageProps) {
  return (
    <>
      <MovieContainer movieId={params.id} />
      <ReviewsContainer movieId={params.id} />
    </>
  );
}
