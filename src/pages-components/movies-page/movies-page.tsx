import React from 'react';

import { Filter } from '@/components/filter/filter';
import { MoviesContainer } from '@/components/movies-container/movies-container';
import { Sticky } from '@/components/sticky/sticky';
import styles from '@/pages-components/movies-page/movies-page.module.css';

interface IMoviesPageProps {
  cinemaId: string;
}

export default function MoviesPage({ cinemaId }: IMoviesPageProps) {
  return (
    <div className={styles.root}>
      <main className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <Sticky>
            <Filter />
          </Sticky>
        </aside>
        <div className={styles.main}>
          <MoviesContainer cinemaId={cinemaId} />
        </div>
      </main>
    </div>
  );
}
