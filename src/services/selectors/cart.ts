import { createSelector } from 'reselect';

export const selectCardSlice = (state: TRootState) => state.cart;
export const selectCountById = (id: string) => createSelector(selectCardSlice, (slice) => slice.cart[id]);
