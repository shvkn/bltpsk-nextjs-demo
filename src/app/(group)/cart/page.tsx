'use client';

import { TicketCard } from '@/components/ticket-card/ticket-card';
import { useGetMoviesQuery } from '@/services/movies-api';
import { selectCardSlice, selectTotalCount } from '@/services/selectors/cart';
import { moviesSelector } from '@/services/selectors/movies';
import { useAppSelector } from '@/services/store';

import styles from './page.module.css';

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
    <>
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
    </>
  );
}
