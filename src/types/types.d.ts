declare interface IMove {
  posterUrl: string;
  title: string;
  genre: string;
  releaseYear: number;
  description: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

declare type TRootState = ReturnType<typeof import('@/services/store').store.getState>;
declare type AppDispatch = typeof import('@/services/store').store.dispatch;
