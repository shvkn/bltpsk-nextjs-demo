'use client';

import React, { useEffect, useState } from 'react';

import TicketCard from '@/components/ticket-card/ticket-card';
import { useGetMoviesByCinemaIdQuery } from '@/services/movies-api';

import styles from './tickets.module.css';
import { useSearchParams } from 'next/navigation';

// const Tickets: React.FC<{
//   searchQueryString: { title?: string; genre?: string; cinemaId?: string };
// }> = ({ searchQueryString }) => {
const Tickets: React.FC = () => {
  const s = useSearchParams();
  const cinemaId = s.get('cinema');
  const name = s.get('name');
  const genre = s.get('genre');

  const [movies, setMovies] = useState<IMove[]>();

  const { error, isLoading, data } = useGetMoviesByCinemaIdQuery(cinemaId || '');

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
            <TicketCard movie={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default Tickets;
