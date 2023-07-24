'use client';

import React from 'react';

import Loading from '@/app/loading';
import { TicketCard } from '@/components/ticket-card/ticket-card';
import { useGetMoviesQuery } from '@/services/api/movies-api';
import { selectCardSlice, selectTotalCount } from '@/services/selectors/cart';
import { useAppSelector } from '@/services/store';

import styles from './page.module.css';

export default function CardPage() {
  const { data, isLoading } = useGetMoviesQuery();
  const cart = useAppSelector(selectCardSlice).cart;
  const totalCount = useAppSelector(selectTotalCount);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {totalCount > 0 ? (
        <ul className={styles.tickets}>
          {Object.keys(cart).map((id) => {
            const movie = data?.find((item) => item.id === id);
            return movie ? (
              <li key={id}>
                <TicketCard data={movie} removeControl={true} />
              </li>
            ) : null;
          })}
        </ul>
      ) : (
        <div className={styles.empty}>Здесь пока ничего нет</div>
      )}
      <div className={styles.total}>
        <p className={styles.totalHeading}>Итого билетов:</p>
        <p className={styles.totalCount}>{totalCount}</p>
      </div>
    </>
  );
}
