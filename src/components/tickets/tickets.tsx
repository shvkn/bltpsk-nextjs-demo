import React from 'react';
import { TicketCard } from '@/components/ticket-card/ticket-card';
import styles from '@/pages-components/cart-page/cart-page.module.css';

interface ITicketsProps {
  movies: IMove[];
}

export const Tickets: React.FC<ITicketsProps> = ({ movies }) => {
  return (
    <ul className={styles.tickets}>
      {movies.map((movie: IMove) => (
        <li key={movie.id}>
          <TicketCard data={movie} removeControl={true} />
        </li>
      ))}
    </ul>
  );
};
