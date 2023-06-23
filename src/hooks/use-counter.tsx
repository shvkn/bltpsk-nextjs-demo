import { useCallback } from 'react';

import { selectCountById } from '@/services/selectors/card';
import { useAppDispatch, useAppSelector } from '@/services/store';
import { cardSliceActions } from '@/services/slices/card';

export const useCounter = ({ id }: { id: string }) => {
  const count = useAppSelector(selectCountById(id));
  const dispatch = useAppDispatch();

  const increment = useCallback(() => {
    dispatch(cardSliceActions.increment(id));
  }, [dispatch, id]);

  const decrement = useCallback(() => {
    dispatch(cardSliceActions.decrement(id));
  }, [dispatch, id]);

  return { increment, decrement, count };
};
