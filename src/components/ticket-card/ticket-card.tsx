'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { Counter } from '@/components/counter/counter';
import { Modal } from '@/components/modal/modal';
import { useGetMovieByIdQuery } from '@/services/movies-api';
import { cartSliceActions } from '@/services/slices/cart';
import { useAppDispatch } from '@/services/store';
import { Translations } from '@/shared/constants';

import styles from './ticket-card.module.css';

export interface ITicketCardProps {
  id: string;
  removeControl?: boolean;
}

export const TicketCard: React.FC<ITicketCardProps> = ({ id, removeControl = false }) => {
  const { error, isLoading, data: movie } = useGetMovieByIdQuery(id);
  const [isConfirmOpened, setConfirmOpened] = useState(false);
  const dispatch = useAppDispatch();
  if (!movie) {
    return null;
  }

  const handleRemove = () => {
    dispatch(cartSliceActions.remove(id));
  };

  const handleClose = () => {
    setConfirmOpened(false);
  };
  return (
    <div className={styles.ticketCard}>
      <div className={styles.image}>
        <Image src={movie.posterUrl} height={120} width={100} alt={movie.title} />
      </div>
      <div className={styles.content}>
        <Link href={`/movies/${movie.id}`} className={classNames(styles.title, 'hover')}>
          {movie.title}
        </Link>
        <div className={styles.genre}>{Translations.Genres[movie.genre]}</div>
      </div>
      <Counter id={movie.id} />
      {removeControl && (
        <button onClick={() => setConfirmOpened(true)} className={classNames(styles.removeButton, 'hover')}>
          <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.0673 15.1829C16.1254 15.241 16.1714 15.3099 16.2028 15.3858C16.2343 15.4617 16.2505 15.543 16.2505 15.6251C16.2505 15.7072 16.2343 15.7885 16.2028 15.8644C16.1714 15.9403 16.1254 16.0092 16.0673 16.0673C16.0092 16.1254 15.9403 16.1714 15.8644 16.2028C15.7885 16.2343 15.7072 16.2505 15.6251 16.2505C15.543 16.2505 15.4617 16.2343 15.3858 16.2028C15.3099 16.1714 15.241 16.1254 15.1829 16.0673L10.0001 10.8837L4.81729 16.0673C4.70002 16.1846 4.54096 16.2505 4.3751 16.2505C4.20925 16.2505 4.05019 16.1846 3.93292 16.0673C3.81564 15.95 3.74976 15.791 3.74976 15.6251C3.74976 15.4593 3.81564 15.3002 3.93292 15.1829L9.11651 10.0001L3.93292 4.81729C3.81564 4.70002 3.74976 4.54096 3.74976 4.3751C3.74976 4.20925 3.81564 4.05019 3.93292 3.93292C4.05019 3.81564 4.20925 3.74976 4.3751 3.74976C4.54096 3.74976 4.70002 3.81564 4.81729 3.93292L10.0001 9.11651L15.1829 3.93292C15.3002 3.81564 15.4593 3.74976 15.6251 3.74976C15.791 3.74976 15.95 3.81564 16.0673 3.93292C16.1846 4.05019 16.2505 4.20925 16.2505 4.3751C16.2505 4.54096 16.1846 4.70002 16.0673 4.81729L10.8837 10.0001L16.0673 15.1829Z'
              fill='#333333'
            />
          </svg>
        </button>
      )}
      {isConfirmOpened && <Modal handleClose={handleClose} handleSubmit={handleRemove} />}
    </div>
  );
};
