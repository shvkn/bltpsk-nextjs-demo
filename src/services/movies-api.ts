import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { MOVIE_API } from '@/shared/constants';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: MOVIE_API }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMove[], string | null | void>({
      query: (id) => (typeof id === 'string' && id.length > 0 ? `movies?cinemaId=${id}` : 'movies'),
    }),
    getMovieById: builder.query<IMove, string>({
      query: (id: string) => `movie?movieId=${id}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
