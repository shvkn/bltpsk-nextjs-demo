import React from 'react';

import styles from '@/pages-components/cart-page/cart-page.module.css';
import Loading from '@/app/loading';
import { Tickets } from '@/components/tickets/tickets';
import { useGetMoviesQuery } from '@/services/api/movies-api';
import { selectCardSlice, selectTotalCount } from '@/services/selectors/cart';
import { useAppSelector } from '@/services/store';

export const CartPage: React.FC = () => {
  const { data, isLoading } = useGetMoviesQuery();
  const cart = useAppSelector(selectCardSlice).cart;
  const totalCount = useAppSelector(selectTotalCount);

  if (isLoading) {
    return <Loading />;
  }

  const isMovie = (item: any): item is IMove => typeof item?.id === 'string';
  const findMovieById = (id: string) => data?.find((item) => item.id === id);

  const movies = Object.keys(cart).map(findMovieById).filter(isMovie);

  return (
    <>
      {totalCount > 0 ? <Tickets movies={movies} /> : <div className={styles.empty}>Здесь пока ничего нет</div>}
      <div className={styles.total}>
        <p className={styles.totalHeading}>Итого билетов:</p>
        <p className={styles.totalCount}>{totalCount}</p>
      </div>
    </>
  );
};
