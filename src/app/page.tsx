'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Loading from '@/app/loading';
import { Filter } from '@/components/filter/filter';
import { Sticky } from '@/components/sticky/sticky';
import { MemoizedTicketCard } from '@/components/ticket-card/ticket-card';
import { useGetMoviesQuery } from '@/services/movies-api';

import styles from './page.module.css';

export default function Home() {
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
    <div className={styles.root}>
      <main className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <Sticky>
            <Filter />
          </Sticky>
        </aside>
        <div className={styles.main}>
          <ul className={styles.movies}>
            {movies?.map((item) => (
              <li key={item.id}>
                <MemoizedTicketCard data={item} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
