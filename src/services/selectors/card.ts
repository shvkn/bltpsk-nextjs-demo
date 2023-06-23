import { createSelector } from 'reselect';

export const selectCardSlice = (state: TRootState) => state.card;
export const selectCountById = (id: string) => createSelector(selectCardSlice, (slice) => slice.card[id]);
