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
  }),
});

export const { useGetMoviesQuery, useGetMoviesByCinemaIdQuery } = moviesApi;
