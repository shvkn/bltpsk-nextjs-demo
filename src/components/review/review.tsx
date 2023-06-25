import Image from 'next/image';
import React from 'react';

import styles from './review.module.css';

interface IReviewProps {
  data: IReview;
}

export const Review: React.FC<IReviewProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image src='/avatar-placeholder.svg' alt='avatar' width='100' height='100' />
      </div>
      <p className={styles.name}>{data.name}</p>
      <p className={styles.rating}>
        Оценка:
        <span className={styles.ratingNumber}>{data.rating}</span>
      </p>
      <p className={styles.text}>{data.text}</p>
    </div>
  );
};
