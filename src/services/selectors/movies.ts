import { moviesApi } from '@/services/movies-api';

export const moviesSelector = moviesApi.endpoints.getMovies.select();
export const selectCinemas = moviesApi.endpoints.getCinemas.select();
