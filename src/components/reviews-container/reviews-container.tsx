import React from 'react';

import { Reviews } from '@/components/reviews/reviews';
import { useGetReviewsByIdQuery } from '@/services/api/reviews-api';

interface IReviewsContainerProps {
  movieId: string;
}
export const ReviewsContainer: React.FC<IReviewsContainerProps> = ({ movieId }) => {
  const { data: reviews } = useGetReviewsByIdQuery(movieId);
  if (!reviews) {
    return null;
  }
  return <Reviews reviews={reviews} />;
};
