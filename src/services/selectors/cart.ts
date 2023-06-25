import { createSelector } from 'reselect';

export const selectCardSlice = (state: TRootState) => state.cart;
export const selectCountById = (id: string) => createSelector(selectCardSlice, (slice) => slice.cart[id]);
export const selectTotalCount = createSelector(selectCardSlice, (state) => {
  return Object.values(state.cart).reduce((acc, curr) => (acc += curr), 0);
});
