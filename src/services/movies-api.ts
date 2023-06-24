import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'someApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMove[], void>({
      query: () => 'movies',
    }),
    getMoviesByCinemaId: builder.query<IMove[], string>({
      query: (id) => (id.length > 0 ? `movies?cinemaId=${id}` : 'movies'),
    }),
    getMovieById: builder.query<IMove, string>({
      query: (id: string) => `movie?movieId=${id}`,
    }),
    getReviewsById: builder.query<IReview[], string>({
      query: (id: string) => `reviews?movieId=${id}`,
    }),
    getCinemas: builder.query<ICinema[], void>({
      query: () => 'cinemas',
    }),
  }),
});

export const { useGetCinemasQuery, useGetMoviesQuery, useGetMoviesByCinemaIdQuery, useGetMovieByIdQuery, useGetReviewsByIdQuery } =
  moviesApi;
