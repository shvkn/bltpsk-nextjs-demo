'use client';

import styles from './page.module.css';
import { useGetMovieByIdQuery, useGetReviewsByIdQuery } from '@/services/movies-api';
import Image from 'next/image';
import { Review } from '@/components/review/review';
import Counter from '@/components/counter/counter';

export default function MoviePage({ params }: { params: { id: string } }) {
  const { error: movieError, isLoading: isMovieLoading, data: movie } = useGetMovieByIdQuery(params.id);
  const { error: reviewsError, isLoading: isReviewsLoading, data: reviews } = useGetReviewsByIdQuery(params.id);
  if (isReviewsLoading || !reviews) {
    return null;
  }
  if (isMovieLoading || !movie) {
    return <div>...Loading</div>;
  }
  return (
    <main className={styles.main}>
      <article className={styles.info}>
        <div className={styles.poster}>
          <Image src={movie.posterUrl} alt={movie.title} width={'400'} height={'500'} />
        </div>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.counter}>
          <Counter id={params.id} />
        </div>
        <ul className={styles.facts}>
          <li>
            <p className={styles.factItem}>
              <span className={styles.factType}>Жанр:</span>
              {movie.genre}
            </p>
          </li>
          <li>
            <p className={styles.factItem}>
              <span className={styles.factType}>Год выпуска:</span>
              {movie.releaseYear}
            </p>
          </li>
          <li>
            <p className={styles.factItem}>
              <span className={styles.factType}>Рейтинг:</span>
              {movie.rating}
            </p>
          </li>
          <li>
            <p className={styles.factItem}>
              <span className={styles.factType}>Режиссер:</span>
              {movie.director}
            </p>
          </li>
        </ul>
        <div className={styles.description}>
          <p className={styles.descriptionHeading}>Описание</p>
          <p className={styles.descriptionText}>{movie.description}</p>
        </div>
      </article>
      <ul className={styles.reviews}>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review data={review} />
          </li>
        ))}
      </ul>
    </main>
  );
}
