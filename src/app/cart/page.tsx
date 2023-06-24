'use client';

import styles from './page.module.css';
import { useSelector } from 'react-redux';
import { moviesSelector } from '@/services/selectors/movies';
import TicketCard from '@/components/ticket-card/ticket-card';
import { useAppSelector } from '@/services/store';
import { useGetMoviesByCinemaIdQuery, useGetMoviesQuery } from '@/services/movies-api';
import { selectCardSlice, selectTotalCount } from '@/services/selectors/cart';

export default function CardPage() {
  useGetMoviesQuery();
  const movies = useAppSelector(moviesSelector);
  const cart = useAppSelector(selectCardSlice).cart;
  const totalCount = useAppSelector(selectTotalCount);
  const data = movies.data;
  if (!data || !cart) {
    return null;
  }
  return (
    <main className={styles.container}>
      <ul className={styles.tickets}>
        {Object.entries(cart).map(([id, count]) => (
          <li key={id}>
            <TicketCard id={id} removeControl={true} />
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <p className={styles.totalHeading}>Итого билетов:</p>
        <p className={styles.totalCount}>{totalCount}</p>
      </div>
    </main>
  );
}
