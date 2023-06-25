'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { Counter } from '@/components/counter/counter';
import { Modal } from '@/components/modal/modal';
import { CloseIcon } from '@/components/ui/icons/close-icon';
import { cartSliceActions } from '@/services/slices/cart';
import { useAppDispatch } from '@/services/store';
import { Translations } from '@/shared/constants';

import styles from './ticket-card.module.css';
import { capitalize } from '@/shared/utils';

export interface ITicketCardProps {
  data: IMove;
  removeControl?: boolean;
}

export const TicketCard: React.FC<ITicketCardProps> = ({ data, removeControl = false }) => {
  const [isConfirmOpened, setConfirmOpened] = useState(false);
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(cartSliceActions.remove(data.id));
  };

  const handleCloseModal = () => {
    setConfirmOpened(false);
    document.querySelector('body')?.classList.remove(styles.noScroll);
  };

  const handleOpenModal = () => {
    setConfirmOpened(true);
    document.querySelector('body')?.classList.add(styles.noScroll);
  };

  return (
    <div className={styles.ticketCard}>
      <div className={styles.image}>
        <Image src={data.posterUrl} height={120} width={100} alt={data.title} />
      </div>
      <div className={styles.content}>
        <Link href={`/movies/${data.id}`} className={classNames(styles.title, 'hover')}>
          {data.title}
        </Link>
        <div className={styles.genre}>{capitalize(Translations.Genres[data.genre])}</div>
      </div>
      <Counter id={data.id} />
      {removeControl && (
        <button onClick={handleOpenModal} className={classNames(styles.removeButton, 'hover')}>
          <CloseIcon size='M' />
        </button>
      )}
      {isConfirmOpened && <Modal handleClose={handleCloseModal} handleSubmit={handleRemove} />}
    </div>
  );
};

export const MemoizedTicketCard = React.memo(TicketCard);
