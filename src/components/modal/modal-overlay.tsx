import React from 'react';

import styles from './modal-overlay.module.css';

interface IModalOverlayProps {
  onClick: () => void;
};

export const ModalOverlay: React.FC<IModalOverlayProps> = ({ onClick }) => {
  const handleClose = (e: React.SyntheticEvent) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return <div className={styles.overlay} onClick={handleClose} />;
};
