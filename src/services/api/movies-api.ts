import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { MOVIE_API } from '@/shared/constants';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: MOVIE_API }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMove[], string | void>({
      query: (cinemaId) => ({
        url: 'movies',
        params: {
          cinemaId,
        },
      }),
    }),
    getMovieById: builder.query<IMove, string>({
      query: (movieId) => ({
        url: 'movie',
        params: {
          movieId,
        },
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
