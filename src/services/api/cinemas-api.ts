import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { MOVIE_API } from '@/shared/constants';

export const cinemasApi = createApi({
  reducerPath: 'cinemasApi',
  baseQuery: fetchBaseQuery({
    baseUrl: MOVIE_API,
  }),
  endpoints: (builder) => ({
    getCinemas: builder.query<ICinema[], void>({
      query: () => ({
        url: 'cinemas',
      }),
    }),
  }),
});

export const { useGetCinemasQuery } = cinemasApi;
