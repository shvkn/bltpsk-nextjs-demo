import React from 'react';

import MoviesPage from '@/pages-components/movies-page/movies-page';

interface IPageParams {
  searchParams: {
    cinema: string;
  };
}

export default function Page({ searchParams }: IPageParams) {
  return <MoviesPage cinemaId={searchParams.cinema} />;
}
