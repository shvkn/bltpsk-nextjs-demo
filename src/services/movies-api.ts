import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'someApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMove[], void>({
      query: () => 'movies',
    }),
    getMoviesByCinemaId: builder.query<IMove[], string>({
      query: (id: string) => `movies?cinemaId=${id}`,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
