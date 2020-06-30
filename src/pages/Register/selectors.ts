import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.register || initialState;

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


export const selectRegister = createSelector(
  [selectDomain],
  registerState => registerState,
);