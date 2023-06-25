'use client';

import { TicketCard } from '@/components/ticket-card/ticket-card';
import { useGetMoviesQuery } from '@/services/movies-api';
import { selectCardSlice, selectTotalCount } from '@/services/selectors/cart';
import { useAppSelector } from '@/services/store';

import styles from './page.module.css';

export default function CardPage() {
  const { data, isLoading } = useGetMoviesQuery();
  const cart = useAppSelector(selectCardSlice).cart;
  const totalCount = useAppSelector(selectTotalCount);
  return (
    <>
      <ul className={styles.tickets}>
        {Object.entries(cart).map(([id, count]) => {
          const movie = data?.find((item) => item.id === id);
          return movie ? (
            <li key={id}>
              <TicketCard data={movie} removeControl={true} />
            </li>
          ) : null;
        })}
      </ul>
      <div className={styles.total}>
        <p className={styles.totalHeading}>Итого билетов:</p>
        <p className={styles.totalCount}>{totalCount}</p>
      </div>
    </>
  );
}
