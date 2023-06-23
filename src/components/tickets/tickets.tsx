'use client';

import React from 'react';

import TicketCard from '@/components/ticket-card/ticket-card';
import { useGetMoviesQuery } from '@/services/movies-api';

import styles from './tickets.module.css';

const Tickets: React.FC = () => {
  const { error, isLoading, data: movies } = useGetMoviesQuery();
  if (isLoading || movies?.length === 0) {
    return null;
  }
  return (
    <ul className={styles.movies}>
      {movies?.map((item) => {
        return (
          <li key={item.id}>
            <TicketCard movie={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default Tickets;
