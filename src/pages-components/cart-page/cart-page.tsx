'use client';

import React from 'react';

import Loading from '@/app/loading';
import { Tickets } from '@/components/tickets/tickets';
import { useCart } from '@/hooks/use-cart';

import styles from './cart-page.module.css';

export const CartPage: React.FC = () => {
  const { movies, isLoading, totalCount } = useCart();

  if (isLoading) {
    return <Loading />;
  }

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
