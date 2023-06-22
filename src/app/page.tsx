import Image from 'next/image';

import React from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Tickets from '@/components/tickets/tickets';

import { movies } from '@/components/ticket-card/mock';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <div className={styles.sticky}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, fuga fugit impedit ipsa ipsum iusto natus
              nisi non ratione vel?
            </p>
          </div>
        </aside>
        <div className={styles.main}>
          <Tickets items={movies} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
