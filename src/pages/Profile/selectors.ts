import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.profile || initialState;

export const selectProfile = createSelector(
  [selectDomain],
  profileState => profileState,
);


export const selectSuccess = createSelector(
  [selectDomain],
  (loginState) => loginState.success
);

export const selectLoading = createSelector(
  [selectDomain],
  (loginState) => loginState.loading
);

export const selectError = createSelector(
  [selectDomain],
  (loginState) => loginState.error
);
