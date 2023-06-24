'use client';

import styles from './modal.module.css';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Button } from '@/components/button/button';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './modal-overlay';

interface IModal extends React.PropsWithChildren {
  handleClose: () => void;
  handleSubmit: () => void;
}

export const Modal: React.FC<IModal> = ({ children, handleSubmit, handleClose }) => {
  const [container, setContainer] = useState<Element>();
  useEffect(() => {
    const element = document.querySelector('#modal');
    if (element) {
      setContainer(element);
    }
    const handleCloseByEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleCloseByEsc);
    return () => document.removeEventListener('keydown', handleCloseByEsc);
  }, [handleClose]);

  if (!container) {
    return null;
  }

  const onOk = (e: SyntheticEvent) => {
    handleSubmit();
  };

  return createPortal(
    <>
      <div className={`${styles.modal}`}>
        <div className={styles.content}>
          <p className={styles.title}>Удаление билета</p>
          <p className={styles.message}>Вы уверены, что хотите удалить билет?</p>
        </div>
        <div className={styles.controls}>
          <Button type='primary' value='Да' onClick={handleSubmit} />
          <Button type='secondary' value='Нет' onClick={handleClose} />
        </div>
      </div>
      <ModalOverlay onClick={handleClose} />
    </>,
    container
  );
};
