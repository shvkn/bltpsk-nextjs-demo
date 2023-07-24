import React from 'react';

import { Review } from '@/components/review/review';

import styles from './reviews.module.css';

interface IReviewsProps {
  reviews: IReview[];
}

export const Reviews: React.FC<IReviewsProps> = ({ reviews }) => {
  return (
    <ul className={styles.reviews}>
      {reviews?.map((review) => (
        <li key={review.id}>
          <Review data={review} />
        </li>
      ))}
    </ul>
  );
};
