import { useCallback } from 'react';

import { selectCountById } from '@/services/selectors/cart';
import { useAppDispatch, useAppSelector } from '@/services/store';
import { cartSliceActions } from '@/services/slices/cart';

export const useCounter = ({ id }: { id: string }) => {
  const count = useAppSelector(selectCountById(id));
  const dispatch = useAppDispatch();

  const increment = useCallback(() => {
    dispatch(cartSliceActions.increment(id));
  }, [dispatch, id]);

  const decrement = useCallback(() => {
    dispatch(cartSliceActions.decrement(id));
  }, [dispatch, id]);

  return { increment, decrement, count };
};
