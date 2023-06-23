'use client';

import React from 'react';

import styles from './ticket-card.module.css';
import Image from 'next/image';
import Counter from '@/components/counter/counter';
import classNames from 'classnames';

export interface ITicketCard {
  movie: IMove;
}

const TicketCard: React.FC<ITicketCard> = ({ movie }) => {
  if (!movie) {
    return null;
  }
  return (
    <div className={styles.ticketCard}>
      <div className={styles.image}>
        <Image src={movie.posterUrl} height={120} width={100} alt={movie.title} />
      </div>
      <div className={styles.content}>
        <a href='#' className={classNames(styles.title, 'hover')}>
          {movie.title}
        </a>
        <div className={styles.genre}>{movie.genre}</div>
      </div>
      <Counter id={movie.id} />
    </div>
  );
};

export default TicketCard;
