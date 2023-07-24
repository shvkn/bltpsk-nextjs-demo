import React from 'react';

import MoviesPage from '@/pages-components/movies-page/movies-page';

export default function Home({ searchParams }) {
  return <MoviesPage cinemaId={searchParams.cinema} />;
}
