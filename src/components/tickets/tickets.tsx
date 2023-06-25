'use client';

import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';

import Loading from '@/app/loading';
import { MemoizedTicketCard } from '@/components/ticket-card/ticket-card';
import { Spinner } from '@/components/ui/spinner/spinner';
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
    return <Loading />;
  }

  return (
    <Suspense fallback={<Spinner />}>
      <ul className={styles.movies}>
        {movies?.map((item) => {
          return (
            <li key={item.id}>
              <MemoizedTicketCard data={item} />
            </li>
          );
        })}
      </ul>
    </Suspense>
  );
};

export default Tickets;
