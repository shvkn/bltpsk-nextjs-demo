import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '@/components/button/button';

import styles from './modal.module.css';
import { ModalOverlay } from './modal-overlay';

interface IModalProps {
  handleClose: () => void;
  handleSubmit: () => void;
}

export const Modal: React.FC<IModalProps> = ({ handleSubmit, handleClose }) => {
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
