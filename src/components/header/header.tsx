'use client';

import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import { selectTotalCount } from '@/services/selectors/cart';
import { useAppSelector } from '@/services/store';

import styles from './header.module.css';
import { CartIcon } from '@/components/ui/icons/cart-icon';

export const Header: React.FC = () => {
  const totalCount = useAppSelector(selectTotalCount);
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.heading}>
        Билетопоиск
      </Link>
      <div className={styles.card}>
        {totalCount > 0 && <p className={styles.cardCounter}>{totalCount}</p>}
        <Link href='/cart' className={classNames(styles.cardButton, 'hover')}>
          <CartIcon size='L'/>
        </Link>
      </div>
    </header>
  );
};
