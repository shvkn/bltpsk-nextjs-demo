import React from 'react';

import Tickets from '@/components/tickets/tickets';
import Filter from '@/components/filter/filter';
import { Sticky } from '@/components/sticky/sticky';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.root}>
      <main className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <Sticky>
            <Filter />
          </Sticky>
        </aside>
        <div className={styles.main}>
          <Tickets />
        </div>
      </main>
    </div>
  );
}
