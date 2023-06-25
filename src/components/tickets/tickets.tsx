'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { TicketCard } from '@/components/ticket-card/ticket-card';
import { useGetCinemasQuery, useGetMoviesQuery } from '@/services/movies-api';

import styles from './tickets.module.css';

const Tickets: React.FC = () => {
  useGetCinemasQuery();
  const searchParams = useSearchParams();
  const cinemaId = searchParams.get('cinema');
  const name = searchParams.get('title');
  const genre = searchParams.get('genre');
  const [movies, setMovies] = useState<IMove[]>();

  const { error, isLoading, data } = useGetMoviesQuery(cinemaId);

  useEffect(() => {
    if (data) {
      const arr = data
        .filter((m) => (!!genre ? m.genre.toLowerCase() === genre : true))
        .filter((m) => (!!name ? m.title.toLowerCase().includes(name.toLowerCase()) : true));

      setMovies(arr);
    }
  }, [data, genre, name]);

  if (isLoading || data?.length === 0) {
    return null;
  }

  return (
    <ul className={styles.movies}>
      {movies?.map((item) => {
        return (
          <li key={item.id}>
            <TicketCard id={item.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default Tickets;
