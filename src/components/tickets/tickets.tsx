'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { MemoizedTicketCard } from '@/components/ticket-card/ticket-card';
import { useGetMoviesQuery } from '@/services/movies-api';

import styles from './tickets.module.css';

const Tickets: React.FC = () => {
  const searchParams = useSearchParams();
  const cinemaId = searchParams.get('cinema');
  const title = searchParams.get('title');
  const genre = searchParams.get('genre');
  const [movies, setMovies] = useState<IMove[]>([]);
  const { data, isLoading } = useGetMoviesQuery(cinemaId);

  useEffect(() => {
    if (data?.length) {
      setMovies(
        data
          .filter((movie) => (!!genre ? movie.genre.toLowerCase() === genre : true))
          .filter((movie) => (!!title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true))
      );
    }
  }, [data, genre, title]);

  if (isLoading) {
    return null;
  }

  return (
    <ul className={styles.movies}>
      {movies?.map((item) => {
        return (
          <li key={item.id}>
            <MemoizedTicketCard data={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default Tickets;
