import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { MOVIE_API } from '@/shared/constants';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: MOVIE_API,
  }),
  endpoints: (build) => ({
    getReviewsById: build.query({
      query: (movieId) => ({
        url: 'reviews',
        params: {
          movieId,
        },
      }),
    }),
  }),
});

export const { useGetReviewsByIdQuery } = reviewsApi;
