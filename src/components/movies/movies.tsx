import React from 'react';

import { MemoizedTicketCard } from '@/components/ticket-card/ticket-card';

import styles from './movies.module.css';

interface IMoviesProps {
  movies: IMove[];
}

export const Movies: React.FC<IMoviesProps> = ({ movies }) => {
  return (
    <ul className={styles.movies}>
      {movies.map((item: IMove) => (
        <li key={item.id}>
          <MemoizedTicketCard data={item} />
        </li>
      ))}
    </ul>
  );
};
